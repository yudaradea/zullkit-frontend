<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="order-1 md:order-3 md:mt-2">
    <a
      href="login.html"
      class="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-3 md:text-sm md:px-8 hover:shadow hidden md:inline"
    >
      Sign In
    </a>
    <a
      href="register.html"
      class="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-3 md:text-sm md:px-8 hover:shadow hidden md:inline"
    >
      Sign Up
    </a>

    <a
      href="login.html"
      class="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow md:hidden"
    >
      Sign In
    </a>
  </div>
</template>
