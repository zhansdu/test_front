<template>
  <div class="d-flex flex-nowrap h-100">
    <div class="content d-flex flex-fill flex-column">
      <navbar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import navbar from "./navbar/Navbar.vue";
</script>