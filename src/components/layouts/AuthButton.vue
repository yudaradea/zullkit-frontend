<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="order-1 md:order-3">
    <RouterLink
      to="/login"
      class="px-8 py-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:text-sm md:px-8 hover:shadow hidden md:inline"
    >
      Sign In
    </RouterLink>
    <RouterLink
      to="/register"
      class="px-8 py-2 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:text-sm md:px-8 hover:shadow hidden md:inline"
    >
      Sign Up
    </RouterLink>

    <RouterLink
      to="/login"
      class="px-8 py-2 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow md:hidden"
    >
      Sign In
    </RouterLink>
  </div>
</template>
