<script setup>
import Logo from "./Logo.vue";
import NavigationLink from "./NavigationLink.vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";
import { ref } from "vue";

const isLogin = ref(false);
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo v-if="isLogin" />
      <AuthButton v-else />
      <NavigationLink />
    </div>
  </nav>
</template>
