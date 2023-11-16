<script setup>
import { useRouter, useRoute, RouterLink } from "vue-router";

import Logo from "./Logo.vue";
import NavigationLink from "./NavigationLink.vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";
import { ref, computed } from "vue";

const isLogin = ref(false);
const location = useRoute();

const isLoginPage = computed(() => {
  return location.path === "/login" || location.path === "/register";
});
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo v-if="isLogin" />
      <AuthButton v-else="isLogin" v-if="!isLoginPage" />
      <NavigationLink />
    </div>
  </nav>
</template>
