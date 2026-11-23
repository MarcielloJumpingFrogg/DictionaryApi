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

async function submitForm() {
  const result = await $fetch("/api/newUser", {
    method: "POST",
    body: {
			username: username.value,
			password: password.value
		},
  });

	console.log(result)
}
</script>

<template>
  <form class="">
    <label for="username">User Name: </label>
    <input class="border border-black p-2 m-2" type="text" id="username" v-model="username" />
    <label for="password"> Password: </label>
    <input class="border border-black p-2 m-2" :type="inputType" v-model="password" id="password" />
    <button
      class="border border-black p-2 m-2"
      type="button"
      @click="togglePwVisibility('password')"
    >
      V
    </button>
    <label for="confirmPassword">Confirm Password: </label>
    <input
      class="border border-black p-2 m-2"
      :type="checkInputType"
      v-model="checkPassword"
      id="confirmPassword"
    />
    <button
      class="border border-black p-2 m-2"
      type="button"
      @click="togglePwVisibility('checkPassword')"
    >
      V
    </button>

    <button class="border border-black p-2 m-2" type="submit" @click.prevent="submitForm()">
      Submit
    </button>
  </form>
  <p>{{ currentStatus }}</p>
</template>
