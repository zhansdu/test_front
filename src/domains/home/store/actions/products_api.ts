import { get } from "@/application/services/ApiService";
import type { StoreType, } from "../types";
import type { GetProductsRequest, GetProductsResponse, GetSingleProductResponse } from "../../types";

export async function search_products (this:StoreType){
  const response = await get<GetProductsRequest, GetProductsResponse>("/products", this.fetch_products_request, "get/products", true);
  if (response.data) {
    this.set_fetch_products_response(response.data);
    return true;
  }
  else {
    return false;
  }
}

export async function fetch_product (this:StoreType){
  const response = await get<{}, GetSingleProductResponse>("/products/" + this.fetch_single_product_request.product_id, {}, "get/single-product", true);
  if (response.data) {
    this.set_fetch_single_product_response(response.data);
    return true;
  }
  else {
    return false;
  }
}