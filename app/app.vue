<script setup lang="ts">
useHead({
  titleTemplate: (titleCunk) => {
    return titleCunk ? `${titleCunk} - My Dictionary App` : "My Dictionary App";
  },
});
</script>

<template class="min-h-full">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script lang="ts">
// Caution: Dynamic imports are not server-side compatible
import('./assets/style.css')
</script>

<style>
@import url("./assets/style.css");
</style>
