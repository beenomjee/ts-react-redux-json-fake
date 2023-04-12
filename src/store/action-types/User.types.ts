import { USER_CONSTANTS } from "../constants";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Users {
  isLoading: boolean;
  users: User[];
  error: string;
}

interface User_Fetch_Action {
  type: USER_CONSTANTS.USER_FETCH;
}
interface User_Fetch_Success_Action {
  type: USER_CONSTANTS.USER_FETCH_SUCCESS;
  payload: User[];
}
interface User_Fetch_Error_Action {
  type: USER_CONSTANTS.USER_FETCH_ERROR;
  payload: string;
}

export type UserAction =
  | User_Fetch_Action
  | User_Fetch_Success_Action
  | User_Fetch_Error_Action;
