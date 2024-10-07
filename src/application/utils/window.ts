import { computed, ref } from "vue";

const windowWidth = ref(window.innerWidth);



export const isMobile = computed(()=>{
  return windowWidth.value < 991;
});

export function useWindow(){
  window.addEventListener("resize", ()=>{
    windowWidth.value = window.innerWidth;
   
  });
}