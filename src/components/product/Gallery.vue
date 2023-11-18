<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const location = useRoute();
const defaultImage = ref();
const galleries = ref([]);

function changeImage(image) {
  this.defaultImage = image;
}

async function getProductImages() {
  try {
    const getProductImage = await axios.get(
      `https://zullkit-backend.maleskerja.my.id/api/products?id=${location.params.id}`
    );
    // productDetail.value = getProductDetail.data.data;
    defaultImage.value = getProductImage.data.data.galleries[0].url;
    galleries.value = getProductImage.data.data.galleries;

    console.log(getProductImage.data.data.galleries);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getProductImages();
});
</script>

<template>
  <section id="gallery">
    <img :src="defaultImage" alt="" class="w-full mt-6 rounded-2xl" />

    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in galleries" :key="gallery.id">
        <div
          @click="changeImage(gallery.url)"
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{ 'ring-2 ring-indigo-500': defaultImage == gallery.url }"
        >
          <img :src="gallery.url" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>
