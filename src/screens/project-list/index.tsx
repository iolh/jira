import { useEffect, useState } from "react";
import qs from "qs";
import { List } from "./list";
import { SearchPnel } from "./search-panel";
import { cleanObject } from "utils";
import { useMount, useDebounce } from "utils/hooks";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [params, setParams] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debouncedParam = useDebounce(params, 500);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPnel users={users} params={params} setParams={setParams} />
      <List list={list} users={users} />
    </div>
  );
};
