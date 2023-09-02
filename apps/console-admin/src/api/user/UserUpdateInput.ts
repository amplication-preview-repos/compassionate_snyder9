import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
