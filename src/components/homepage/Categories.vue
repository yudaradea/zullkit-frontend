<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CategoriesCard from "../CategoriesCard.vue";

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get("https://zullkit-backend.maleskerja.my.id/api/categories?limit=4");

    categories.value = response.data.data.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getCategoriesData();
});
</script>

<template>
  <div id="categories">
    <div class="container px-4 mx-auto py-10 md:py-14 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CategoriesCard
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :title="category.name"
          :image="category.thumbnails"
          :count="category.products_count"
        />
      </div>
    </div>
  </div>
</template>
