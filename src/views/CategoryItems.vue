<script setup>
import Items from "../components/categories/Items.vue";
</script>

<template>
  <main>
    <Suspense>
      <Items />
      <template #fallback></template>
    </Suspense>
  </main>
</template>
