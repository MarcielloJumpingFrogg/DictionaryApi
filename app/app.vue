<script setup lang="ts">
import ApiCall from "./apiCall.vue";

	const {data} = await useFetch('/api/hello')
</script>


<template>
  <div>
		<ApiCall />
		<pre>{{data}}</pre>
  </div>
</template>
