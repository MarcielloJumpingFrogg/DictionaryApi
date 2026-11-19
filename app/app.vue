<script setup lang="ts">
import LoadingComponet from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";
import ApiCall from "./apiCall.vue";

const AsyncComponent = defineAsyncComponent({
  loader: () => import("./Foo.vue"),

  loadingComponent: LoadingComponet,
  delay: 200,

  errorComponent: ErrorComponent,
  timeout: 400,
});
</script>

<template>
  <div>
  <ApiCall />

	</div>
</template>
