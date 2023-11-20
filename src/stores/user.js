import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const user = ref(false);
  const isLoggedIn = computed(() => user.value !== false);
  const getUser = computed(() => user.value);

  async function fetchUser() {
    try {
      if (localStorage.getItem("token_type") !== null) {
        const { data } = await axios.get("https://zullkit-backend.maleskerja.my.id/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_type")} ${localStorage.getItem("access_token")}`,
          },
        });
        user.value = data.data;
      }
    } catch (error) {
      user.value = false;
    }
  }

  return { user, isLoggedIn, getUser, fetchUser };
});
