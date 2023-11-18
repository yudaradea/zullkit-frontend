<script setup>
import Categories from "../components/categories/Categories.vue";
</script>

<template>
  <main>
    <Suspense>
      <Categories />
      <template #fallback> </template>
    </Suspense>
  </main>
</template>
