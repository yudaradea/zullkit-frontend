<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";

const useStore = useUserStore();
const route = useRouter();
function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("token_type");

  useStore.fetchUser();
  route.push("/login");
}

const props = defineProps({
  userInfo: Object,
});

const show = ref(false);

function toggleDropdown(e) {
  show.value = !show.value;
}
</script>

<template>
  <div class="md:order-3 order-1">
    <div class="flex items-center">
      <div class="mr-2 text-sm font-regular">Halo, {{ userInfo.name }}</div>
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="dropdown"
        @click.prevent="toggleDropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" :src="userInfo.profile_photo_url" alt="user photo" />
      </button>
    </div>

    <div
      class="z-50 fixed right-6 md:right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown"
      :class="{ hidden: !show }"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">{{ userInfo.name }}</span>
        <span class="block text-sm text-gray-500 truncate font-regular dark:text-gray-400">{{ userInfo.email }}</span>
      </div>
      <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Subscriptions</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Settings</a
          >
        </li>
        <li>
          <a
            @click="logout"
            class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
