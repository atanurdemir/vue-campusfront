<template>
  <div class="p-10 min-h-screen">
    <portlet name="Financial Module">
      <p>You can search students with mail!</p>
      <div class="bg-white rounded-lg shadow-lg">
        <SearchBar @searched="findOne" />
        <StudentInfo v-if="isLoaded" :data="data" />
      </div>
    </portlet>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { UserService } from "@/services";
import StudentInfo from "./studentInfo/index.vue";
import SearchBar from "@/components/search/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "FinancialModule",
  components: { Portlet, SearchBar, StudentInfo },
  setup() {
    const data = ref();
    const email = ref("");
    const isLoaded = ref(false);

    onBeforeMount(async () => {
      const res = await UserService.finance.getUnpaids();
      data.value = res;
    });

    async function findOne(value) {
      email.value = value;
      const res = await UserService.profile.get(email.value);
      if (res.message === "Ok") {
        isLoaded.value = true;
        data.value = res.data[0];
      }
    }

    return { email, isLoaded, data, findOne };
  },
};
</script>
