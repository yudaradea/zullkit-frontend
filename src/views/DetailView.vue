<script setup>
import ProductDetail from "../components/product/ProductDetail.vue";
</script>

<template>
  <main class="pt-16">
    <Suspense>
      <ProductDetail />
    </Suspense>
  </main>
</template>
