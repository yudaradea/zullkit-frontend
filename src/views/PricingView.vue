<script setup>
import BasicPlan from "../components/pricing/BasicPlan.vue";
import GoldPlan from "../components/pricing/GoldPlan.vue";
import Featured from "../components/pricing/Featured.vue";
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div class="flex flex-col items-center w-full sm:justify-center sm:pt-0">
        <div class="w-full p-5 mx-auto mt-4 md:mt-10 md:max-w-7xl">
          <h2 class="mb-4 text-2xl md:text-5xl font-bold text-center">
            <span class="block lg:mb-2">Friendly Pricing,</span>
            <span class="block">High Quality Design</span>
          </h2>
          <p class="mb-3 md:mb-5 text-lg text-center text-gray-500">Working faster and better than before</p>
        </div>

        <!-- Pricing Plan -->
        <div class="w-full p-5 mx-auto mb-4 md:mb-10 md:max-w-4xl">
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <BasicPlan />
            </div>
            <div>
              <GoldPlan />
            </div>
          </div>
        </div>
        <!-- End Pricing Plan -->

        <!-- Featured -->
        <Featured />
        <!-- End Featured -->
      </div>
    </div>
  </div>
</template>
