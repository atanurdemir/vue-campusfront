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
          Dormitory Type
        </td>
        <td
          style="width: 80%"
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.type }}
        </td>
      </tr>
      <tr>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          Dormitory Capacity
        </td>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.capacity }}
        </td>
      </tr>
      <tr>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          Has this application been accepted?
        </td>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.isApproved }}
        </td>
      </tr>
      <tr>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          Application Date
        </td>
        <td
          class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
        >
          {{ data.createAt }}
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
