import { PRODUCT_CONSTANTS } from "../constants";

export interface Rating {
  rate: number;
  cout: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Products {
  isLoading: boolean;
  products: Product[];
  error: string;
}

interface Product_Fetch_Action {
  type: PRODUCT_CONSTANTS.PRODUCT_FETCH;
}
interface Product_Fetch_Success_Action {
  type: PRODUCT_CONSTANTS.PRODUCT_FETCH_SUCCESS;
  payload: Product[];
}
interface Product_Fetch_Error_Action {
  type: PRODUCT_CONSTANTS.PRODUCT_FETCH_ERROR;
  payload: string;
}

export type ProductAction =
  | Product_Fetch_Action
  | Product_Fetch_Success_Action
  | Product_Fetch_Error_Action;
