import { UserAction, Users } from "../action-types";
import { USER_CONSTANTS } from "../constants";

const initialState: Users = {
  isLoading: false,
  users: [],
  error: "",
};

export default function userReducer(
  state: Users = initialState,
  action: UserAction
): Users {
  switch (action.type) {
    case USER_CONSTANTS.USER_FETCH:
      return {
        ...state,
        isLoading: true,
        error: "",
        users: [],
      };
    case USER_CONSTANTS.USER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        users: action.payload,
      };
    case USER_CONSTANTS.USER_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
}
