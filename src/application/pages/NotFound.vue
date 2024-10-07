<template>
  <div class="d-flex flex-column align-items-center justify-content-center bg-yellow min-vh-100 min-vw-100">
    <h1 style="font-size:10em">
      404
    </h1>
    <h1>
      Sorry
    </h1>
    <h2>
      The page you are looking for is not found
    </h2>
    <router-link
      class="btn btn-outline-blue mt-4"
      :to="{path:'/'}"
    >
      Back to main page
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>