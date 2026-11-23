<script setup lang="ts">
import AppAlert from "~/AppAlert.vue";
import ApiCall from "~/apiCall.vue";

const { data } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <div>
      <ApiCall />
      <pre class="bg-red">{{ data }}</pre>
    </div>
  </div>
</template>
