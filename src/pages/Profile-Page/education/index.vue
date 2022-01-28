<template>
  <div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        Student Education Information
      </div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr class="p-5">
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              High School Name
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.name }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              High School Type
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.type }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              High School Branch
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.branch }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              High School City
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.city }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Graduation Year
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.year }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Foreign Language
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.language }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              TOEFL Score
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.highSchool.toefl }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        University Exam Information
      </div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr class="p-5">
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              ID Number
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.universityExam.id }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Choice Rank
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.universityExam.choice }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Score Type
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.universityExam.type }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Score
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.universityExam.score }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationView",
  props: {
    data: { type: Object, required: true },
  },

  setup() {
    return {};
  },
};
</script>
