import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="created" label="Created" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <DateField source="modified" label="Modified" />
        <TextField label="Roles" source="roles" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
