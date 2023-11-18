<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CategoriesCard from "../CategoriesCard.vue";

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get("https://zullkit-backend.maleskerja.my.id/api/categories?show_product=1");

    categories.value = response.data.data.data;
    // await new Promise((res) => setTimeout(res, 500));
  } catch (error) {
    console.error(error);
  }
}

const response = await getCategoriesData();
// console.log(categoriesData);

// onMounted(() => {
//   getCategoriesData();
// });
</script>

<template>
  <div id="categories" class="pt-0.5">
    <div class="container px-4 mx-auto my-10 md:my-14 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
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
