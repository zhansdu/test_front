<template>
  <div>
    <div
      id="alert"
      class="modal fade"
      aria-hidden="false"
      tabindex="-1"
      style="z-index: 2000;"
    >
      <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
        :class="'modal-'+size_prop"
      >
        <div
          class="modal-content"
        >
          <div
            class="modal-header border-bottom-0"
          >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal()"
            />
          </div>
          <div class="modal-body">
            <div
              class="text-center"
              v-html="message_prop"
            />
            <div class="my-3">
              <input
                v-if="type_prop ==='prompt'"
                v-model="prompt_prop"
                class="form-control"
                :placeholder="prompt_placeholder"
                type="text"
              >
            </div>
           
            <div class="d-flex justify-content-end mt-3">
              <div
                v-if="type_prop==='confirm' || type_prop === 'prompt'"
                class="d-flex"
              >
                <button
                  type="button"
                  class="btn btn-blue-outline me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="setConfirm(false)"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  class="btn btn-blue text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="setConfirm(true)"
                >
                  Yes
                </button>
              </div>
              <div v-else>
                <button 
                  type="button"
                  class="btn btn-blue text-white"
                  @click="closeModal()"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message_prop, type_prop, confirm_prop, size_prop, closeModal, prompt_prop, prompt_placeholder } from "./utils";

function setConfirm(value:boolean){
  confirm_prop.value=value;
}


</script>
