<template>
  <alert />
  <component :is="layout || 'div'">
    <router-view v-if="allowMe" />
  </component>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";

import { setToken } from "./application/services/ApiService";

import Alert from "./application/components/alert/Alert.vue";
import layout from "./application/layouts";
import { useWindow } from "./application/utils/window";

const allowMe = ref(true);

onBeforeMount(async ()=>{
  setToken(localStorage.getItem("token")||"");
});

onMounted(()=>{
  useWindow();
});
</script>
