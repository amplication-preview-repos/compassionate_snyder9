import { JsonValue } from "type-fest";

export type User = {
  created: Date;
  email: string | null;
  id: string;
  modified: Date;
  roles: JsonValue;
  username: string;
};
