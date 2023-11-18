<script setup>
import ProductDetail from "../components/product/ProductDetail.vue";
</script>

<template>
  <main>
    <Suspense>
      <ProductDetail />
    </Suspense>
  </main>
</template>
