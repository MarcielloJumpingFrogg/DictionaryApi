<script setup lang="ts">
const channel = new BroadcastChannel("timer-sync");
function send() {
  channel.postMessage({
    type: "TIMER_UPDATE",
    payload: false,
  });
}

async function hello() {
console.log('uhm')
  window.postMessage(
    {
      source: "my-vue-app",
      type: "TIMER_UPDATE",
      payload: true,
    },
    window.location.origin,
  );
}
onMounted(async () => {
  window.addEventListener("message", (event) => {
    if (event.source !== window) return;

    if (event.origin !== "localhost:3000") return;

    if (event.data.source !== "my-vue-app") return;

    if (event.data.type === "TIMER_UPDATE") {
      console.log(event.data);
    }
  });
});
</script>

<template>
  <div>
    <div>
      <h1>Hi, I'm Shelly Duvall</h1>
      <button @click="hello()">hi</button>
    </div>
  </div>
</template>

<script lang="ts">
const channel = new BroadcastChannel("timer-sync");

channel.onmessage = (event) => {
  console.log(event.data);
};
</script>
