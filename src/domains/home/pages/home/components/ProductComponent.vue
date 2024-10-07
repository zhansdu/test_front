<template>
  <div class="position-relative border p-3 rounded">
    <img
      class="rounded cursor-pointer"
      :src="product.image"
      width="100%"
      @click="goProduct(product.id)"
    >
    <div class="position-absolute end-0 top-0">
      <div class="btn bg-secondary text-white bg-opacity-50 bg-hover rounded-pill mt-2 me-2">
        <Heart
          class="my-1"
        />
      </div>
    </div>
    <div
      class="mt-2 cursor-pointer"
      @click="goProduct(product.id)"
    >
      {{ product.title }}
    </div>

    <div class="d-flex align-items-center mt-2">
      <Rating
        v-model="rating"
        class="mb-1"
        :cancel="false"
      />
      <span class="ms-3">
        {{ product.ratesCount }} {{ product.ratesCount == 1 ? 'rate' :'rates' }}
      </span>
    </div>

    <div class="d-flex align-items-center justify-content-between">
      <div>
        <div
          v-if="product.discount"
          class="d-flex mt-2"
        >
          <span class="text-decoration-line-through text-darkgrey">
            {{ product.price }} ₸
          </span>
          <div class="ms-2 rounded-pill bg-red text-white static-width text-center">
            - {{ product.discount }} %
          </div>
        </div>

        <div class="fs-2 mt-2 fw-bold">
          {{ product.price }} ₸
        </div>
      </div>
      <div>
        <button class="btn btn-primary">
          <i class="bi bi-cart2 fs-4" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, type PropType } from "vue";
import Rating from "primevue/rating";
import type { GetProductsResponse } from "@/domains/home/types";
import Heart from "@/application/assets/icons/Heart.vue";
import { useHomeComposable } from "../composable";

const props = defineProps({
  product: {
    type: Object as PropType<GetProductsResponse[0]>,
    required: true
  }
});

const product = computed(()=>props.product);
const rating = computed(()=>product.value.rating/20);

const {
  goProduct
}=useHomeComposable();

</script>
<style scoped>
.static-width{
  width: 50px;
}
.bg-hover:hover{
  background-color: var(--red) !important;
}
</style>