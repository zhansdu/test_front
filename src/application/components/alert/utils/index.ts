import { Modal as ModalComponent, Modal as ModalType } from "bootstrap";
import { ref, watch } from "vue";

type AlertType = "alert"|"confirm"|"prompt"
const errorMessage = "Server timeout";

const modalInstance = ref<ModalType>();
const alert_shown =ref(false);

export const message_prop = ref("");
export const prompt_prop = ref("");
export const prompt_placeholder = ref("");
export const type_prop = ref("alert" as AlertType);
export const confirm_prop = ref(false);
export const size_prop = ref("md");

export function setModal(){
  const modal = "alert";
  if(!alert_shown.value)
    modalInstance.value = new ModalComponent(document.getElementById(modal)??"div");
}

export function closeModal(){
  modalInstance.value?.hide();
  alert_shown.value = false;
}

export function alert(message?:string|undefined,timeout?:number,size="md",){
  setType("alert");
  setModal();
  setSize(size);
  setMessage(message||errorMessage);
  show_alert();
  if(timeout){
    setTimeout(()=>{
      modalInstance.value?.hide;
      alert_shown.value = false;
    },timeout);
  }
}

export function confirm(message?:string|undefined,size="md"){
  setType("confirm");
  setModal();
  setSize(size);
  setMessage(message || errorMessage);
  show_alert();
  return new Promise((resolve:(value:boolean)=>void,reject) => {
    const unwatch = watch(confirm_prop, (newValue) => {
      if (newValue) {
        resolve(newValue);
      }
      else{
        reject(newValue);
      }
      unwatch();
      confirm_prop.value=false;
      alert_shown.value=false;
    });
  });
}

export function prompt(message?:string,placeholder?:string,size="md"){
  setType("prompt");
  setModal();
  setSize(size);
  setMessage(message || errorMessage);
  setPromtPlaceholder(placeholder || "");
  show_alert();
  return new Promise((resolve:(value:{status:boolean,prompt_value:string})=>void,reject) => {
    const unwatch = watch(confirm_prop, (newValue) => {
      if (newValue) {
        resolve({ status: newValue,prompt_value: prompt_prop.value });
      }
      else{
        reject(newValue);
      }
      unwatch();
      confirm_prop.value=false;
      alert_shown.value = false;
      prompt_placeholder.value = "";
    });
  });
}



function setType(type:AlertType){
  type_prop.value=type;
}

function setMessage(message:string|string[]){
  let result = ""; 
  if (Array.isArray(message)) {
    message.forEach(info=>{
      result+=info+="<br>";
    });
  }
  else if ( typeof message === "string"){
    result = message;
  }
  message_prop.value = result;
}

function setSize(size:string){
  size_prop.value=size;
}

function setPromtPlaceholder(placeholder:string){
  prompt_placeholder.value = placeholder;
}

function show_alert(){
  if(!alert_shown.value){
    modalInstance.value?.show();
    alert_shown.value = true;
  }
}