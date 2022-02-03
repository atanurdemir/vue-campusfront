<template>
  <div class="p-10">
    <portlet name="Announcements Panel">
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
import { Notification } from "@/config/enums";
import { enumToArray } from "@/config/utils";

import ViewNotification from "./viewNotification";
import Portlet from "@/components/portlet/index.vue";
import CreateNotification from "./createNotification";
export default {
  name: "AnnouncementView",
  components: { Portlet, ViewNotification, CreateNotification },
  setup() {
    const status = ref("ViewNotification");
    const collapseItems = computed(() => enumToArray(Notification));

    function activateTab(index) {
      if (index === 0) status.value = "ViewNotification";
      if (index === 1) status.value = "CreateNotification";
    }
    return { status, activateTab, collapseItems };
  },
};
</script>
