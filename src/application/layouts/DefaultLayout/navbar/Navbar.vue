<template>
  <div class="navbar bg-blue flex-nowrap">
    <div class="container">
      <div class="d-flex align-items-center flex-fill pe-2 text-white">
        <div
          class="d-none d-md-block mx-5 fs-1 fw-bold"
        >
          Test.kz
        </div>
        <form
          class="input-group rounded-pill overflow-hidden flex-fill ms-5"
          @submit.prevent="searchByTitle(title)"
        >
          <input
            v-model="title"
            class="form-control border border-grey border-start-0"
            type="text"
            placeholder="Search"
          >
          <button class="btn btn-light border border-grey border-start-0">
            <i class="bi bi-search fs-4 mx-4" />
          </button>
        </form>

        <div class="me-5 d-flex align-items-center">
          <i class="bi bi-heart-fill fs-2 ms-5" />
          <i class="bi bi-cart-fill fs-2 ms-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeComposable } from "@/domains/home/pages/home/composable";
import { ref } from "vue";


const { searchByTitle } = useHomeComposable();
const title = ref("");
</script>