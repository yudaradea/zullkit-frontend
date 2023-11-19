<script setup>
import { ref, computed, onMounted, onBeforeMount } from "vue";
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

const view = ref(true);
onBeforeMount(() => {
  window.addEventListener("scroll", handlleScroll);
});

function handlleScroll() {
  if (window.pageYOffset > 70) {
    if (view.value) view.value = false;
  } else {
    if (!view.value) view.value = true;
  }
}

const isLoginPage = computed(() => {
  return location.path === "/login" || location.path === "/register";
});

const userFetch = await userStore.fetchUser();
</script>

<template>
  <nav
    class="bg-white w-full fixed border-b-0 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 top-0 animated z-10"
    :class="{ 'shadow-2xl': !view }"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo v-if="isLoggedIn" :user-info="user" />
      <AuthButton v-else v-if="!isLoginPage" />
      <NavigationLink />
    </div>
  </nav>
</template>
