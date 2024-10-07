export type Name = string;
export type State = {
  loaders:string[],
}
export type Getters = {
}
export type Actions = {
  setLoader:(loader:string)=>void
  unsetLoader:(loader:string)=>void  
  loaderIsActiveOneOf:(loaders:string[])=>boolean
}