<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import Navbar from "./components/layouts/Navbar.vue";

const location = useRoute();
</script>

<template>
  <Navbar v-if="location.path !== '/success'" />

  <RouterView />
</template>
