<template>
  <div class="p-10 min-h-screen">
    <portlet name="Dormitory Panel">
      <div class="gap-4 justify-center">
        <button
          v-for="item in collapseItems"
          :key="item.id"
          :title="item.title"
          :style="
            item.title === status ? 'border-bottom: 4px solid #36c6d3;' : ''
          "
          @click="activateTab(item.id)"
        >
          <p class="p-3">{{ item.fullTitle }}</p>
        </button>
        <hr class="border-b-1 border-gray-200" />
      </div>
      <component :is="status" />
    </portlet>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { Dormitory } from "@/config/enums";
import { enumToArray } from "@/config/utils";
import ViewRequest from "./viewRequest";
import RequestDorm from "./requestDormitory";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "DormitoryView",
  components: { Portlet, ViewRequest, RequestDorm },
  setup() {
    const status = ref("ViewRequest");
    const collapseItems = computed(() => enumToArray(Dormitory));

    function activateTab(index) {
      if (index === 0) status.value = "ViewRequest";
      if (index === 1) status.value = "RequestDorm";
    }

    return {
      status,
      activateTab,
      collapseItems,
    };
  },
};
</script>
