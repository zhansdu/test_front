export function setValues(source:Record<string,any>,target:Record<string,any>){
  for (const key in source) {
    source[key] = target[key];
  }
}

export function reset(object:Record<string,any>){
  for (const key in object) {
    if(typeof object[key] == "object" && !Array.isArray(object[key])){
      reset(object[key]);
    }
    else{
      object[key] = undefined;
    }
  }
}