import { defineStore } from "pinia";
import type { Name, State, Getters, Actions } from "./types";
import * as functions from "./actions";
import type { GetSingleProductRequest, GetSingleProductResponse } from "../types";
export const useStore = defineStore<Name, State, Getters, Actions>("sessionsStore",{
  state: ():State=>{
    return {
      fetch_products_request: {
        orderBy: "rating",
        order: "desc"
      },
      fetch_products_response: [],
      fetch_single_product_request: {} as GetSingleProductRequest,
      fetch_single_product_response: {} as GetSingleProductResponse
    };
  },
  actions: {
    // setters

    set_fetch_products_response(request){
      this.fetch_products_response = request;
    },
    set_fetch_single_product_response(response) {
      this.fetch_single_product_response = response;
    },
    ...functions
  }
});