<template>
  <div>
    <ul class="w-full flex">
      <li
        class="group relative dropdown text-regal-blue cursor-pointer font-bold text-sm tracking-wide"
      >
        <a>{{ name }}</a>
        <div class="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul
            class="top-0 w-48 border rounded-md border-transparent shadow px-3 py-4 bg-campus-navyblue"
          >
            <li class="py-1 min-w-screen">
              <button
                class="block text-white font-bold hover:text-regal-blue cursor-pointer"
                @click.prevent="logout"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "ProfileButtonView",
  components: {},
  props: {
    name: { type: String, required: false, default: "" },
  },
  setup() {
    const show = ref(false);
    const router = useRouter();

    function logout() {
      localStorage.clear();
      router.push({ name: "HomeView" });
    }

    return {
      show,
      logout,
    };
  },
};
</script>
