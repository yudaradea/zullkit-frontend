<script setup>
import { useRouter, useRoute, RouterLink } from "vue-router";
import { ref, computed, nextTick } from "vue";
const location = useRoute();
const router = useRouter();

const showMenu = ref(false);

function toggleDropdownMenu() {
  showMenu.value = !showMenu.value;
  showMenu.value &&
    nextTick(() => {
      document.addEventListener("click", hide);
      setTimeout(() => {
        document.addEventListener("scroll", hide);
      }, 500);
    });
}

function hide() {
  showMenu.value = false;
  document.removeEventListener("click", hide);
  document.removeEventListener("scroll", hide);
}
</script>

<template>
  <button
    data-collapse-toggle="mobile-menu-2"
    type="button"
    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="mobile-menu-2"
    aria-expanded="false"
    @click.stop="toggleDropdownMenu"
  >
    <span class="sr-only">Open main menu</span>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <div
    class="items-center justify-between w-full md:flex md:w-auto order-3 md:order-2"
    id="mobile-menu-2"
    :class="{ hidden: !showMenu }"
  >
    <ul
      class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular"
      @click.stop="showMenu = false"
    >
      <li>
        <RouterLink
          to="/"
          :class="
            location.name === 'home'
              ? 'block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white'
              : 'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          "
          aria-current="page"
          >Home
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/categories"
          :class="
            location.path === '/categories'
              ? 'block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white'
              : 'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          "
          >Categories
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/pricing"
          :class="
            location.path === '/pricing'
              ? 'block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white'
              : 'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          "
          >Pricing
        </RouterLink>
      </li>
      <li>
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >Study Case
        </a>
      </li>
    </ul>
  </div>
</template>
