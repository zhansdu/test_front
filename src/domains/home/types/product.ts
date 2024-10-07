export type GetSingleProductRequest={
    product_id:string
}
export type GetSingleProductResponse={
    createdAt:string
    title:string
    image:string
    price:number
    discount:number
    description:string
    countryManufacturer:string
    material:string
    lenseMaterial:string
    lenseWidth:string
    connector:string
    rating:number
    ratesCount:number
    id:string
}
export type GetProductsRequest={
    title?:string
    order?:"asc"|"desc"
    orderBy?:string
    page?:number
    limit?:number
}
export type GetProductsResponse=GetSingleProductResponse[]

