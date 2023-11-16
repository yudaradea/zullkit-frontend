<script setup>
import { ref } from "vue";
import CategoriesCard from "../CategoriesCard.vue";

const categories = ref([
  { id: 1, title: "Mobile UI Kit", image: "src/assets/img/categories-1.jpg", count: 731 },
  { id: 2, title: "Font", image: "src/assets/img/categories-2.jpg", count: 1031 },
  { id: 3, title: "Icon Sett", image: "src/assets/img/categories-3.jpg", count: 6731 },
  { id: 4, title: "Website UI Kit", image: "src/assets/img/categories-1.jpg", count: 4731 },
]);
</script>

<template>
  <div id="categories" class="pt-0.5">
    <div class="container px-4 mx-auto my-10 md:my-14 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CategoriesCard
          v-for="category in categories"
          :key="category.id"
          :title="category.title"
          :image="category.image"
          :count="category.count"
        />
      </div>
    </div>
  </div>
</template>
