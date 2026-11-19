<script setup lang="ts">
import type { DictionaryResponse } from "../ts/types";

const props = defineProps(["data"]);
const data: DictionaryResponse[] = props.data;
</script>

<template>
  <div v-for="word in data">
    <h1>{{ word.word }}</h1>
    <div v-for="meaning in word.meanings">
      <p><b>Part Of Speach:</b> {{ meaning.partOfSpeech }}</p>
      <div v-for="definition in meaning.definitions">
        <p v-if="definition.definition"><b>Definition:</b> {{ definition.definition }}</p>
        <p v-if="definition.example"><b>Example:</b> {{ definition.example }}</p>
        <p v-if="definition.antonyms.length > 0"><b>Antonyms:</b> {{ definition.antonyms }}</p>
        <p v-if="definition.synonyms.length > 0"><b>Synonims:</b> {{ definition.synonyms }}</p>
        <br />
      </div>
      <br />
    </div>
  </div>
</template>
