<script setup>
import { ref } from "vue";
const props = defineProps({
  galleries: Array,
});

const defaultImage = ref(props.galleries[0].url);

function changeImage(image) {
  defaultImage.value = image;
}
</script>

<template>
  <section id="gallery" v-if="galleries">
    <img :src="defaultImage" alt="" class="w-full object-fill h-80 md:h-96 mt-6 rounded-2xl" />

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
