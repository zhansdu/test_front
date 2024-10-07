export function download_file(response:{data:Blob},name:string){
  const url = window.URL.createObjectURL(new Blob([response.data]));

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);
  document.querySelector("#app")?.appendChild(link);
  link.click();
}