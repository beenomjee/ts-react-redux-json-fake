import { ProductAction, Products } from "../action-types";
import { PRODUCT_CONSTANTS } from "../constants";

const initialState: Products = {
  isLoading: false,
  products: [],
  error: "",
};

export default function productReducer(
  state: Products = initialState,
  action: ProductAction
): Products {
  switch (action.type) {
    case PRODUCT_CONSTANTS.PRODUCT_FETCH:
      return {
        ...state,
        isLoading: true,
        error: "",
        products: [],
      };
    case PRODUCT_CONSTANTS.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        products: action.payload,
      };
    case PRODUCT_CONSTANTS.PRODUCT_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        products: [],
      };

    default:
      return state;
  }
}
