import { useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  users: User[];
  params: {
    name: string;
    personId: string;
  };
  setParams: (params: SearchPanelProps["params"]) => void;
}

export const SearchPnel = ({ users, params, setParams }: SearchPanelProps) => {
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
