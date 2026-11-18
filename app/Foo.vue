<script setup lang="ts">
	import { ref } from 'vue'
	async function getData() {
		await new Promise((r) => setTimeout(r ,9000000))

		if(Math.random() >= 0.5){
		throw new Error('Sorry mate')
		}

		return "i'm shelly duval"
	}

	const data : any = ref(null)
	const error = ref(null)

	getData().then((res) => {data.value = res}).catch((err) => error.value = err)
	</script>

<template>
	<div>
		<p v-if="error" >OOOpsiii</p>
		<p v-else-if="data">{{data}}</p>
		<p v-else>Loading...</p>
	</div>
</template>
