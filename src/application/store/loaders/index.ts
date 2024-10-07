import { defineStore } from "pinia";
import type { Name,State,Getters,Actions } from "./types";

export const useLoadersStore = defineStore<Name, State, Getters, Actions>("loaderStore",{
  state: ()=>{
    return{
      loaders: [],
    };
  },
  getters: {
    
  },
  actions: {
    setLoader(loader:string){
      if(!this.loaders.includes(loader))
        this.loaders.push(loader);
    },
    unsetLoader(loader:string){
      this.loaders= this.loaders.filter(item=>item != loader);
    },
    loaderIsActiveOneOf(loaders:string[]){
      for(let i = 0;i<this.loaders.length;i++){
        for(let j = 0;j<loaders.length;j++){
          if(this.loaders[i]==loaders[j]){
            return true;
          }
        }
      }
      return false;
    }
  }
});