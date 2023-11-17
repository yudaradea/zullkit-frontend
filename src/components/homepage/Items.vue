<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ItemsCard from "../ItemsCard.vue";

const items = ref([]);

async function getProductData() {
  try {
    const productData = await axios.get("https://zullkit-backend.maleskerja.my.id/api/products");
    items.value = productData.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getProductData();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemsCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :category="item.subtitle"
        :image="item.thumbnails"
      />
    </div>
  </div>
</template>
