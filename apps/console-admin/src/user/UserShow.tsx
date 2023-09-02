import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <DateField source="modified" label="Modified" />
        <TextField label="Roles" source="roles" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
