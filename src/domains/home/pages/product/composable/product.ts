import { useStore } from "@/domains/home/store";
import { storeToRefs } from "pinia";
import router from "@/application/router";
import { computed } from "vue";
import { alert } from "@/application/services/AlertService";

export function useProductComposable (){
  const store = useStore();
  const { fetch_single_product_request } = storeToRefs(store);
  const product_id = computed(()=>router.router.currentRoute.value.params.id as string);

  const product_information = [
    {
      title: "Manufacturer",
      key: "countryManufacturer"
    },
    {
      title: "Material",
      key: "material"
    },
    {
      title: "Lense material",
      key: "lenseMaterial"
    },
    {
      title: "Width",
      key: "lenseWidth"
    },
    {
      title: "Connector",
      key: "connector"
    }
  ];

  function goHome(){
    router.router.push({ name: "HomePage" });
  }

  function fetchProduct(){
    if(product_id.value){
      fetch_single_product_request.value.product_id = product_id.value;
      store.fetch_product();
    }
    else
      goHome();
  }

  function alertSuccess(){
    alert(`
      <div class="text-center">
        <img
          src="/images/cart.png"
        >
      </div>
      <div class="fs-3 fw-bold mt-2">
          Hooray !
      </div>
      <div class="text-secondary mt-2">
          We're cooking ))
      </div>
    `,undefined,"sm");
  }
  
  return{
    product_information,
    goHome,
    fetchProduct,
    alertSuccess
  };
}