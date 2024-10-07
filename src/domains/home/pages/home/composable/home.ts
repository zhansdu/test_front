import { useStore } from "@/domains/home/store";
import type { FilterType } from "../types";
import { storeToRefs } from "pinia";
import router from "@/application/router";

export function useHomeComposable (){
  const store = useStore();
  const { fetch_products_request } = storeToRefs(store);
  const filters:FilterType[]=[
    {
      title: "Popularity",
      orderBy: "rating",
      order: "desc"
    },
    {
      title: "Cheap first",
      orderBy: "price",
      order: "asc"
    },
    {
      title: "Expensive first",
      orderBy: "price",
      order: "desc"
    },
    {
      title: "New first",
      orderBy: "createdAt",
      order: "desc"
    },
    {
      title: "By alphabet",
      orderBy: "title",
      order: "asc"
    }
  ];

  function search(){
    store.search_products();
  }
  function setFilter(filter:FilterType){
    fetch_products_request.value.orderBy = filter.orderBy;
    fetch_products_request.value.order = filter.order;
    search();
  }
  function searchByTitle(title:string){
    fetch_products_request.value.title = title;
    search();
  }
  function goProduct(id:string){
    router.router.push({ name: "ProductPage",params: { id } });
  }
  return{
    filters,
    search,
    searchByTitle,
    setFilter,
    goProduct
  };
}