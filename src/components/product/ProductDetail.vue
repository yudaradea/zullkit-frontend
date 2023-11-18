<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Gallery from "./Gallery.vue";
import DownloadButton from "./DownloadButton.vue";

const productDetail = ref([]);
const location = useRoute();

async function getProduct() {
  try {
    const getProductDetail = await axios.get(
      `https://zullkit-backend.maleskerja.my.id/api/products?id=${location.params.id}`
    );
    productDetail.value = getProductDetail.data.data;
  } catch (error) {
    console.log(error);
  }
}

const product = await getProduct();

const features = computed(() => {
  return productDetail.value.features.split(",");
});
// onMounted(() => {
//   getProduct();
// });
</script>

<template>
  <div class="container p-2 mx-auto mt-3 mb-10 md:mt-10 md:mb-8 max-w-7xl">
    <div class="flex flex-row flex-wrap py-4">
      <main role="main" class="w-full px-4 pt-1 md:w-2/3">
        <h1 class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
          {{ productDetail.name }}
        </h1>
        <p class="text-gray-500">{{ productDetail.subtitle }}</p>

        <!-- gallery -->

        <Gallery :galleries="productDetail.galleries" />

        <!-- End Gallery -->

        <section class="" id="orders">
          <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
          <div class="text-gray-500">
            <p class="pb-4" v-html="productDetail.description"></p>
          </div>
        </section>
      </main>
      <!-- Download Button -->
      <DownloadButton :features="productDetail" :featuresList="features" />
      <!-- End Download button -->
    </div>
  </div>
</template>
