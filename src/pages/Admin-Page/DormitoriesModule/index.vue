<template>
  <div class="p-10 min-h-screen">
    <portlet name="Dormitories Module">
      <info
        class="my-2"
        title="Status"
        :text="`You can check the status of the dormitories below!`"
      />
      <SearchBar @searched="findOne" />
      <DormitoryInfo v-if="isLoaded" :data="data" />
    </portlet>
  </div>
</template>

<script>
import { ref } from "vue";
import { UserService } from "@/services";
import Info from "@/components/info/index.vue";
import Portlet from "@/components/portlet/index.vue";
import SearchBar from "@/components/search/index.vue";
import DormitoryInfo from "./dormitoryInfo/index.vue";
export default {
  name: "CoursesModule",
  components: { Info, Portlet, SearchBar, DormitoryInfo },
  setup() {
    const data = ref({});
    const userId = ref("");
    const isLoaded = ref(false);

    async function findOne(value) {
      userId.value = value;
      const res = await UserService.dormitory.getById(userId.value);
      console.log(res);
      if (res.message === "Ok") {
        isLoaded.value = true;
        data.value = res.data;
      }
    }
    return { data, userId, findOne, isLoaded };
  },
};
</script>
