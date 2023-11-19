<script setup>
import Categories from "../components/categories/Categories.vue";
</script>

<template>
  <main class="mt-16">
    <Suspense>
      <Categories />
      <template #fallback> </template>
    </Suspense>
  </main>
</template>
