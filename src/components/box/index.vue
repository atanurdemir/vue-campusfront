<template>
  <div class="border bg-white border-slate-300">
    <div
      class="bg-campus-gray p-2 text-regal-blue cursor-pointer"
      @click="routePage(route)"
    >
      {{ title }}
    </div>
    <div v-if="list !== null" class="flex flex-row gap-4 p-4">
      <a class="text-regal-blue" :href="list[0].address" target="_blank">{{
        list[0].name
      }}</a>
      <p>|</p>
      <a class="text-regal-blue" :href="list[1].address" target="_blank">{{
        list[1].name
      }}</a>
      <p>|</p>
      <a class="text-regal-blue" :href="list[2].address" target="_blank">{{
        list[2].name
      }}</a>
      <p>|</p>
      <a class="text-regal-blue" :href="list[3].address" target="_blank">{{
        list[3].name
      }}</a>
      <p>|</p>
      <a class="text-regal-blue" :href="list[4].address" target="_blank">{{
        list[4].name
      }}</a>
    </div>
    <div v-else class="p-4">{{ message }}</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "BoxView",
  props: {
    title: { type: String, required: true },
    list: { type: Array, required: false, default: null },
    route: { type: String, required: false, default: null },
    message: { type: String, required: false, default: null },
  },
  setup() {
    const router = useRouter();

    function routePage(routeName) {
      router.push({ name: routeName });
    }
    return {
      routePage,
    };
  },
};
</script>
