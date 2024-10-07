export function removeEmptyFromObject(object:Record<string,any>){
  const res = {} as Record<string,any>;
  Object.keys(object).forEach((key)=>{
    const value = object[key];
    if(value){
      res[key]=value;
    }
    else{
      res[key] = null;
    }
  });
  return res;
}