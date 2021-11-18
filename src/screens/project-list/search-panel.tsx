import { useEffect, useState } from "react";

export const SearchPnel = ({ params, users, setParams, setUsers }: any) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={params.name}
          onChange={(e) => setParams({ ...params, name: e.target.value })}
        />
        <select
          value={params.personId}
          onChange={(e) => {
            setParams({ ...params, personId: e.target.value });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((user: any) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
