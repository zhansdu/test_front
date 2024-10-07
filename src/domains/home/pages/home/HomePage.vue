<template>
  <div class="container">
    <div class="my-3 text-blue">
      Home
    </div>
    <div class="d-none d-md-flex p-2 ps-4 border rounded">
      <div>
        Sort by:
      </div>
      <template
        v-for="(filter,index) in filters"
        :key="index"
      >
        <div
          class="ms-5 cursor-pointer"
          :class="{active:fetch_products_request.orderBy === filter.orderBy && fetch_products_request.order === filter.order}"
          @click="setFilter(filter)"
        >
          {{ filter.title }}
        </div>
      </template>
    </div>
    <div class="d-block d-md-none">
      <label
        class="ms-2 text-secondary"
      >
        Sort by
      </label>
      <select
        class="form-select mt-1"
        @change="setFilter((JSON.parse(($event.target as HTMLSelectElement).value) as FilterType))"
      >
        <option 
          v-for="(filter,index) in filters"
          :key="index"
          :value="JSON.stringify(filter)"
        >
          {{ filter.title }}
        </option>
      </select>
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
      class="row"
    >
      <template
        v-for="(product,index) in fetch_products_response"
        :key="index"
      >
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
          <ProductComponent :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useHomeComposable } from "./composable";
import { useStore } from "../../store";
import { storeToRefs } from "pinia";
import ProductComponent from "./components/ProductComponent.vue";
import { useLoadersStore } from "@/application/store/loaders";
import ProgressSpinner from "primevue/progressspinner";
import type { FilterType } from "./types";

const { fetch_products_request, fetch_products_response } = storeToRefs( useStore());

const {
  filters,

  search,
  setFilter
} = useHomeComposable();

const loader = computed(()=> useLoadersStore().loaderIsActiveOneOf(["get/products"]));

onMounted(()=>{
  search();
});
</script>

<style scoped>
.active{
  border-bottom: 1px solid var(--blue);
  color:var(--blue)
}
</style>