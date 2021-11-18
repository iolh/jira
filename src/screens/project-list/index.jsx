import { useEffect, useState } from "react";
import qs from "qs";
import { List } from "./list";
import { SearchPnel } from "./search-panel";
import { cleanObject } from "utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [params, setParams] = useState({ name: "", personId: "" });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(params))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [params]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPnel
        users={users}
        setUsers={setUsers}
        params={params}
        setParams={setParams}
      />
      <List list={list} users={users} />
    </div>
  );
};
