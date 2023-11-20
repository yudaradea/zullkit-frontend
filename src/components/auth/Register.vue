<script setup>
import RegisterForm from "./RegisterForm.vue";
import RegisterText from "./RegisterText.vue";

import { useUserStore } from "../../stores/user";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const useStore = useUserStore();
const router = useRouter();
const isLoggedIn = computed(() => useStore.isLoggedIn);

const login = await useStore.fetchUser();

onMounted(() => {
  useStore.fetchUser();
  if (isLoggedIn.value == true) {
    router.push("/");
  } else {
    router.push("/register");
  }
});
</script>

<template>
  <div class="relative overflow-hidden bg-white mt-16">
    <div class="mx-auto">
      <div class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div class="w-full p-5 mx-auto md:max-w-4xl">
          <h2 class="mb-2 md:mb-10 text-5xl font-bold text-center">
            <span class="block lg:mb-2">Join & Get Our</span>
            <span class="block">Pro Benefits</span>
          </h2>
        </div>
        <div class="w-full p-5 mx-auto md:max-w-4xl">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="mx-auto md:mx-0 hidden md:inline">
              <RegisterText />
            </div>
            <div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
