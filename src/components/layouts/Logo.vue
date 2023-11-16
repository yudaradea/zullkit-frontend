<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
const location = useRoute();

const isLoginPage = computed(() => {
  return location.path === "/login" || location.path === "/register";
});
</script>

<template>
  <RouterLink to="/" class="flex items-center order-1 md:order-1">
    <img
      src="@/assets/img/logo.svg"
      class="h-8 ml-3 sm:ml-0 sm:h-8 md:mr-0"
      :class="{ 'mr-2': isLoginPage }"
      alt="Flowbite Logo"
    />
  </RouterLink>
</template>
