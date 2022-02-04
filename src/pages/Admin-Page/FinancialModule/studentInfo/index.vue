<template>
  <table class="table-auto border-collapse min-w-full">
    <thead class="bg-gray-50">
      <tr class="p-5">
        <td
          style="width: 20%"
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          userId
        </td>
        <td
          style="width: 80%"
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.userId }}
        </td>
      </tr>
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
          Faculty
        </td>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.uni.faculty }}
        </td>
      </tr>
      <tr>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          Department / Program
        </td>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.uni.department }}
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
          {{ data.uni.entry }}
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
          {{ data.teacher.name }}
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
          {{ data.uni.scholar }}%
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
          {{ data.uni.standing }}
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
</template>

<script>
export default {
  name: "StudentInfoView",
  components: {},
  props: {
    data: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>
