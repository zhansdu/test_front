import type { Store } from "pinia";
import type { GetProductsRequest, GetProductsResponse, GetSingleProductRequest, GetSingleProductResponse } from "../types";
export type Name = string;
export type State = {
  // products
  fetch_products_request:GetProductsRequest
  fetch_products_response:GetProductsResponse
  // single products
  fetch_single_product_request:GetSingleProductRequest
  fetch_single_product_response:GetSingleProductResponse
}
export type Getters = {}
export type Actions = {
  // sessions
  set_fetch_products_response:(response:GetProductsResponse)=>void
  set_fetch_single_product_response:(response:GetSingleProductResponse)=>void

  search_products:()=>Promise<boolean>
  fetch_product:()=>Promise<boolean>
}

export type StoreType = Store<Name, State, Getters, Actions>