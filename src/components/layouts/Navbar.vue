<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { useUserStore } from "../../stores/user";

import Logo from "./Logo.vue";
import NavigationLink from "./NavigationLink.vue";
import UserInfo from "./UserInfo.vue";
import AuthButton from "./AuthButton.vue";

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const user = computed(() => userStore.user);

const location = useRoute();

const isLoginPage = computed(() => {
  return location.path === "/login" || location.path === "/register";
});

const userFetch = await userStore.fetchUser();
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo v-if="isLoggedIn" :user-info="user" />
      <AuthButton v-else v-if="!isLoginPage" />
      <NavigationLink />
    </div>
  </nav>
</template>
