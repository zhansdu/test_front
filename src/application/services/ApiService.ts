import axios from "axios";
import { alert } from "./AlertService";
import { useLoadersStore } from "../store/loaders";

const my_axios = axios;
const api_url = import.meta.env.VITE_API_URL;
const version = "v1";

my_axios.defaults.baseURL = `${api_url}/api/${version}`;

export default my_axios;

type RequestType = "get"|"post"|"put"|"delete"
type ResponseType<T> ={
  data:T | null;
}
type OptionsType<T> ={
  body?:T,
  params?:T
}


async function handleRequest<T,K>(method:RequestType,url:string,body:OptionsType<T>,useLoader?:string,handleErrorActive=true):Promise<ResponseType<K>>{
  const response:ResponseType<K> = {
    data: null
  }; 
  const store = useLoadersStore();
  if(useLoader){
    store.setLoader(useLoader);
  }
  await axios[method](url,body)
    .then(res=>{
      response.data=res.data as K;
    })
    .catch(error => {
      handleError(error,handleErrorActive);
    })
    .finally(()=>{
      if(useLoader){
        store.unsetLoader(useLoader);
      }
    });
  return response;
}

export function setToken(token:string){
  my_axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token",token);
}
export function unsetToken(){
  my_axios.defaults.headers.common.Authorization = "";
  localStorage.removeItem("token");
}

export async function get<T,K>(url:string,params:T,useLoader?:string,handleErrorActive=true):Promise<ResponseType<K>> {
  return await handleRequest("get",url,{ params },useLoader,handleErrorActive);
}

export async function post<T,K>(url:string,body:T,useLoader?:string,handleErrorActive=true):Promise<ResponseType<K>> {
  return await handleRequest("post",url,body as OptionsType<T>,useLoader,handleErrorActive);
}
export async function put<T,K>(url:string,body:T,useLoader?:string,handleErrorActive=true):Promise<ResponseType<K>> {
  return await handleRequest("put",url,body as OptionsType<T>,useLoader,handleErrorActive);
}

export async function destroy<T,K>(url:string,params:T,useLoader?:string,handleErrorActive=true):Promise<ResponseType<K>> {
  return await handleRequest("delete",url, { params },useLoader,handleErrorActive);
}

export function handleError(error:any,handleErrorActive:boolean){
  if(handleErrorActive){
    if(error.response.data.errors){
      alert(error.response.data.errors.join("<br>"));
    }
    else{
      alert(error.response.data);
    }
  }
}