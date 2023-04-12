import { USER_CONSTANTS } from "../constants";
import { UserAction, User } from "../action-types";
import axios from "axios";
import { Dispatch } from "redux";

const fetchUsers = (): UserAction => {
  return {
    type: USER_CONSTANTS.USER_FETCH,
  };
};

const fetchUsersSuccess = (users: User[]): UserAction => {
  return {
    type: USER_CONSTANTS.USER_FETCH_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = (error: string): UserAction => {
  return {
    type: USER_CONSTANTS.USER_FETCH_ERROR,
    payload: error,
  };
};

export const getUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch(fetchUsers());
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(fetchUsersSuccess(res.data));
  } catch (e: any) {
    dispatch(fetchUsersError(e.message));
  }
};
