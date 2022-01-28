<template>
  <div>
    <div v-if="!isLoading" class="border border-slate-500 py-10 px-10">
      <div class="bg-blue-900 text-white text-lg p-3">Information</div>
      <div class="gap-10 justify-center">
        <button
          v-for="item in collapseItems"
          :key="item.id"
          :title="item.fullTitle"
          class="hover:border-b-4 hover:border-campus-green"
          :style="
            item.title === status ? 'border-bottom: 4px solid #36c6d3;' : ''
          "
          @click="activateTab(item.id)"
        >
          <p class="p-3">{{ item.title }}</p>
        </button>
        <hr class="border-b-1 border-gray-200" />
      </div>
      <component :is="status" :data="userInfo" />
    </div>
    <spinner v-else class="mt-60 min-h-screen" />
  </div>
</template>

<script>
import { ref, computed, onBeforeMount } from "vue";

import Health from "./health";
import Address from "./address";
import Education from "./education";
import { Profile } from "@/config/enums";
import { UserService } from "@/services";
import { enumToArray } from "@/config/utils";
import Identification from "./identification";
import Spinner from "@/components/spinner/index.vue";
export default {
  name: "ProfileView",
  components: { Health, Address, Identification, Education, Spinner },
  setup() {
    const userInfo = ref({});
    const isLoading = ref(true);
    const status = ref("Identification");
    const collapseItems = computed(() => enumToArray(Profile));

    onBeforeMount(async () => {
      isLoading.value = true;
      const res = await UserService.profile.getMe();
      userInfo.value = res.data;
      isLoading.value = false;
    });

    function activateTab(index) {
      if (index === 0) status.value = "Identification";
      if (index === 1) status.value = "Address";
      if (index === 2) status.value = "Education";
      if (index === 3) status.value = "Health";
    }

    return {
      status,
      userInfo,
      isLoading,
      activateTab,
      collapseItems,
    };
  },
};
</script>
