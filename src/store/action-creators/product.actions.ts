import { PRODUCT_CONSTANTS } from "../constants";
import { Product, ProductAction } from "../action-types";
import axios from "axios";
import { Dispatch } from "redux";

const fetchProducts = (): ProductAction => {
  return {
    type: PRODUCT_CONSTANTS.PRODUCT_FETCH,
  };
};

const fetchProductsSuccess = (products: Product[]): ProductAction => {
  return {
    type: PRODUCT_CONSTANTS.PRODUCT_FETCH_SUCCESS,
    payload: products,
  };
};

const fetchProductsError = (error: string): ProductAction => {
  return {
    type: PRODUCT_CONSTANTS.PRODUCT_FETCH_ERROR,
    payload: error,
  };
};

export const getProducts = () => async (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch(fetchProducts());
    const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
    dispatch(fetchProductsSuccess(res.data));
  } catch (e: any) {
    dispatch(fetchProductsError(e.message));
  }
};
