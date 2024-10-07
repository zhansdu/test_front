export function findTotalByKey(totals:{key:string,amount:number}[],key:string){
  return totals.find(total=>total.key === key)?.amount;
}