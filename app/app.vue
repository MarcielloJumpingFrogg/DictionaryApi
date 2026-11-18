<script setup lang="ts">
import LoadingComponet from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";

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
		<AsyncComponent />
	</div>
</template>
