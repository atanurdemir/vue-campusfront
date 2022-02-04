<template>
  <div>
    <ul class="w-full flex">
      <li class="group relative dropdown cursor-pointer text-regal-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div class="group-hover:block absolute hidden top-6 right-5 h-16 w-16">
          <ul
            class="top-0 w-48 border rounded-md border-transparent shadow px-3 py-4 bg-campus-navyblue"
          >
            <li class="py-1"></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
export default {
  name: "NotificationView",
  components: {},
  props: {},
  setup() {
    return {};
  },
};
</script>
