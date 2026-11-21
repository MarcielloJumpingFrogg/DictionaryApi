<script setup lang="ts">
useHead({
  titleTemplate: (titleCunk) => {
    return titleCunk ? `${titleCunk} - My Dictionary App` : "My Dictionary App";
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
