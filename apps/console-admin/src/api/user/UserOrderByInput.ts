import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  created?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  modified?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  username?: SortOrder;
};
