<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import Navbar from "./components/layouts/Navbar.vue";

const location = useRoute();
</script>

<template>
  <Suspense>
    <Navbar v-if="location.path !== '/success'" />
  </Suspense>

  <RouterView />
</template>
