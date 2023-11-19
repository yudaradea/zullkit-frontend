<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import ItemsCard from "../ItemsCard.vue";
const items = ref([]);

const cateogryName = ref();

const location = useRoute();

async function getProductData() {
  try {
    const productData = await axios.get(
      `https://zullkit-backend.maleskerja.my.id/api/categories?id=${location.params.id}&show_product=1`
    );

    items.value = productData.data.data.products;
    cateogryName.value = productData.data.data.name;
    // await new Promise((res) => setTimeout(res, 500));
  } catch (error) {
    console.error(error);
  }
}

const productData = await getProductData();

// onMounted(() => {
//   getProductData();
// });
</script>

<template>
  <div class="pt-16 container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Product of {{ cateogryName }} category</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <h1 v-if="items.length == 0" class="mt-4 text-red-400 md:ml-4">Items not found on this category...</h1>

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
