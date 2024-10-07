<template>
  <div class="container">
    <div class="my-3 text-blue">
      <span
        class="cursor-pointer"
        @click="goHome"
      >
        Home 
      </span>
      <span class="text-dark mx-2">
        >
      </span>
      <span>
        Product
      </span>
    </div>
    <div
      v-if="loader"
      class="text-center my-5"
    >
      <ProgressSpinner
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div
      v-else
      class="mt-5"
    >
      <h2 class="fw-bold">
        {{ product.title }}
      </h2>
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
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="border rounded mt-2 p-4">
            <img
              class="rounded cursor-pointer"
              :src="product.image"
              width="100%"
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div>
            {{ product.description }}
          </div>
          <div class="mt-3 fw-bolder">
            About the product
          </div>
          <table class="table mt-2">
            <tbody>
              <tr
                v-for="(information,index) in product_information"
                :key="index"
              >
                <td>
                  <div class="text-secondary">
                    {{ information.title }}
                  </div>
                </td>
                <td>{{ product[information.key as keyof typeof product] }}</td>
              </tr>
            </tbody>
          </table>
          <div class="rounded shadowed p-3 px-4 mt-5">
            <div>
              <span class="fw-bold fs-3">
                {{ product.price }} ₸ 
              </span>
              <span class="text-secondary text-decoration-line-through">
                {{ product.price }} ₸ 
              </span>
            </div>
            <div class="d-flex mt-3">
              <button
                class="btn btn-primary flex-fill fs-5"
                @click="alertSuccess"
              >
                Buy
              </button>
              <div class="btn bg-lightblue text-blue ms-4">
                <Heart
                  class="my-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useProductComposable } from "./composable";
import { useStore } from "../../store";
import { storeToRefs } from "pinia";
import { useLoadersStore } from "@/application/store/loaders";
import ProgressSpinner from "primevue/progressspinner";
import Rating from "primevue/rating";
import Heart from "@/application/assets/icons/Heart.vue";

const { fetch_single_product_response } = storeToRefs(useStore());

const {
  product_information,
  
  goHome,
  fetchProduct,
  alertSuccess
} = useProductComposable();


const loader = computed(()=> useLoadersStore().loaderIsActiveOneOf(["get/single-product"]));
const product = computed(()=>fetch_single_product_response.value);
const rating = computed(()=>product.value.rating/20);
onMounted(()=>{
  fetchProduct();
});
</script>

<style scoped>
.shadowed{
  box-shadow: 0 0 50px -25px var(--blue);
}
</style>