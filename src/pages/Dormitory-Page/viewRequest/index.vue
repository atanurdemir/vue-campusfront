<template>
  <div class="min-h-screen">
    <div class="mt-10 w-full">
      <div v-if="isLoading">
        <steps :steps="stepNames" :loadings="levels" :styles="styles" />
        <div class="px-10 py-5 mt-10">
          <table class="table-auto border-collapse min-w-full">
            <thead class="bg-gray-50">
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Requested Dormitory Type:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ result?.data?.type }}
                </td>
              </tr>
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Requested Dormitory Capacity:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ result?.data?.capacity }}
                </td>
              </tr>
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Application Date:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ comparison }}
                </td>
              </tr>
              <tr v-if="result.data.isApproved" class="p-5 bg-green-300">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Approved:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ result?.data?.isApproved }}
                </td>
              </tr>
              <tr v-else class="p-5 bg-red-300">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Approved:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ result?.data?.isApproved }}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <spinner v-else />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { ref, computed, onBeforeMount } from "vue";

import { UserService } from "@/services";
import Steps from "@/components/steps/index.vue";
import Spinner from "@/components/spinner/index.vue";
export default {
  name: "ViewRequestView",
  components: {
    Steps,
    Spinner,
  },
  props: {},

  setup() {
    const result = ref();
    const isLoading = ref(false);
    const levels = ref(["100", "33", "0"]);
    const stepNames = ["Application", "Sent", "Evaluated", "Approved"];
    const styles = ref([
      { svg: "bg-green-500", color: "text-white" },
      { svg: "bg-white border-2 border-gray-200", color: "text-gray-600" },
      { svg: "bg-white border-2 border-gray-200", color: "text-gray-600" },
    ]);

    const comparison = computed(() =>
      moment(result.value?.data?.createAt)
        .local()
        .format("MMMM Do YYYY, h:mm:ss a")
    );

    onBeforeMount(async () => {
      isLoading.value = false;
      const userId = localStorage.getItem("userId");
      const res = await UserService.dormitory.getById(userId);
      if (res?.data?.isApproved) {
        levels.value = ["100", "100", "100"];
        styles.value = [
          { svg: "bg-green-500", color: "text-white" },
          { svg: "bg-green-500", color: "text-white" },
          { svg: "bg-green-500", color: "text-white" },
        ];
      }
      if (!res.data) {
        levels.value = ["0", "0", "0"];
        styles.value = [
          {
            svg: "bg-white border-2 border-gray-200",
            color: "text-gray-600",
          },
          {
            svg: "bg-white border-2 border-gray-200",
            color: "text-gray-600",
          },
          {
            svg: "bg-white border-2 border-gray-200",
            color: "text-gray-600",
          },
        ];
      }
      result.value = res;
      isLoading.value = true;
    });
    return { result, styles, levels, stepNames, isLoading, comparison };
  },
};
</script>
