<script setup lang="ts">
import AppAlert from "~/AppAlert.vue";
import ApiCall from "~/apiCall.vue";

const { data } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <div>
      <ApiCall />
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
