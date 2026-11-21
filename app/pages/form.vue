<script setup lang="ts">
const username = ref("");
const password = ref("");
const checkPassword = ref("");
const currentStatus = ref("");
watch([password, checkPassword], () => {
  console.log(password.value);
  console.log(checkPassword.value);
  if (password.value == checkPassword.value) {
    currentStatus.value = "All good";
    return;
  }
  currentStatus.value = "Passwords must match";
});

const inputType = ref("password");
const checkInputType = ref("password");

function togglePwVisibility(id: string) {
  let currentElement = id == "password" ? inputType : checkInputType;
  if (currentElement.value == "password") {
    currentElement.value = "text";
  } else {
    currentElement.value = "password";
  }
}
</script>

<template>
  <form >
    <label for="username">User Name: </label>
    <input type="text" id="username" v-model="username" />
    <label for="password"> Password: </label>
    <input :type="inputType" v-model="password" id="password" />
    <button type="button" @click="togglePwVisibility('password')">V</button>
    <label for="confirmPassword">Confirm Password: </label>
    <input :type="checkInputType" v-model="checkPassword" id="confirmPassword" />
    <button type="button" @click="togglePwVisibility('checkPassword')">V</button>
  </form>
  <p>{{ currentStatus }}</p>
</template>
