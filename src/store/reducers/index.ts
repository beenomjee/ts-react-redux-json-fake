import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
});

export default rootReducer;
