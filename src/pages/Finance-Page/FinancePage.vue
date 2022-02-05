<template>
  <div class="p-10 min-h-screen">
    <portlet name="Finance Panel">
      <info
        title="Status"
        text="The debt you have to pay has been calculated by taking into account the year that you entered the school, your scholarship status, and our university's 2022 fees."
      />
      <div v-if="!isLoading">
        <div class="px-10 py-5">
          <table class="table-auto border-collapse min-w-full">
            <thead class="bg-gray-50">
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Name & Surname
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.firstName }} {{ userInfo.lastName }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  ID Number
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.idNo }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  E-Mail
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.mail }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Faculty
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.faculty }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Department
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.department }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Program Entry Year
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.entry }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Advisor
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.teacher.name }} ({{ userInfo.teacher.mail }})
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Number of Semesters
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.semester }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Standing
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.standing }}
                </td>
              </tr>
              <tr>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  Scholarship
                </td>
                <td
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ userInfo.uni.scholar }}%
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div class="px-10 py-5">
          <table class="table-auto border-collapse min-w-full">
            <thead class="bg-gray-50">
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border bg-red-300 border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  2022 Işık University Fee:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ fee.maxFee }}₺
                  <a href="https://odeme.isikun.edu.tr/">
                    <button
                      class="float-right items-center text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Apply
                    </button>
                  </a>
                </td>
              </tr>
              <tr class="p-5">
                <td
                  style="width: 20%"
                  class="py-4 border bg-red-300 border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  2022 Işık University Advanced Fee:
                </td>
                <td
                  style="width: 80%"
                  class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
                >
                  {{ fee.advanceFee }}₺
                  <a href="https://odeme.isikun.edu.tr/">
                    <button
                      class="float-right items-center text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Apply
                    </button>
                  </a>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <spinner v-else />
    </portlet>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount } from "vue";

import { UserService } from "@/services";
import { SchoolFees } from "@/config/enums";

import Info from "@/components/info/index.vue";
import Spinner from "@/components/spinner/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "FinanceView",
  components: { Info, Portlet, Spinner },
  setup() {
    const fee = ref();
    const userInfo = ref();
    const isLoading = ref(true);
    const schoolFees = computed(() => {
      return SchoolFees;
    });

    onBeforeMount(async () => {
      isLoading.value = true;
      const res = await UserService.profile.getMe();
      userInfo.value = res.data;
      calculateFee(res.data.uni.entry, res.data.uni.scholar);
      isLoading.value = false;
    });

    function calculateFee(entryYear, scholarship) {
      const discount = Number(scholarship);
      let year = entryYear;
      if (entryYear < 2017) year = 2017;
      if (entryYear > 2020) year = 2020;

      fee.value = {
        maxFee: (schoolFees.value.maxFees[year] * (100 - discount)) / 100,
        advanceFee:
          (schoolFees.value.advanceFees[year] * (100 - discount)) / 100,
      };
    }
    return { fee, userInfo, isLoading, schoolFees };
  },
};
</script>
