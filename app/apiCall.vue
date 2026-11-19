<script setup lang="ts">
import { fetchCall } from "./fetchCall";
import DisplayResult from "./displayResult.vue";
const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const text = ref("");
const url = computed(() => baseUrl + text.value)

const { data: data, error: error } = await fetchCall(url);

const waiting = ref(false);

async function submitData() {
  waiting.value = true;
}
</script>

<template>
  <input type="text" v-model.trim.lazy="text" @keyup.enter="submitData()" />

  <div v-if="waiting">
    <p v-if="error">OOOpsiii</p>
    <div v-else-if="data">
      <DisplayResult :data="data" />
    </div>
    <p v-else>Loading...</p>
  </div>
</template>
