export type SearchRequestType = {
  page?:number,
  per_page?:number,
  sort_field?:string,
  sort_type?:string
};

export type SearchResponseType = {
  current_page: number,
  total_pages: number,
}