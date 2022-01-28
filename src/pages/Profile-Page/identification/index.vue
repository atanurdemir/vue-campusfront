<template>
  <div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        Identification Card Information
      </div>
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
              {{ data.firstName }} {{ data.lastName }}
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
              {{ data.idNo }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Gender
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.gender }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Nationality
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.nationality }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Birth Date
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.birthDate }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Birth Place
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.birthPlace }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Marital Status
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.maritalStatus }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Religion
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.religion }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Blood Type
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.bloodType }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        Registration Place Information
      </div>
      <table class="table-fixed min-w-full">
        <tbody>
          <tr>
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Province
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.province }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              District
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.district }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Village/District
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.village }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Registration No
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.registrationNo }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Family No
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.familyNo }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Order No
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.orderNo }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">Family Information</div>
      <table class="table-auto min-w-full">
        <tbody>
          <tr>
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Mother's Name
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.family.motherName }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Father's Name
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.family.fatherName }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { enumToArray } from "@/config/utils";
import { Identification } from "@/config/enums";
export default {
  name: "IdentificationView",
  props: {
    data: { type: Object, required: true },
  },

  setup() {
    const collapseItems = computed(() => enumToArray(Identification));
    return {
      collapseItems,
    };
  },
};
</script>
