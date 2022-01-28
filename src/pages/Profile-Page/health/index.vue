<template>
  <div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">Medical Information</div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr class="p-5">
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Medical Issues
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.health.issue }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthView",
  props: {
    data: { type: Object, required: true },
  },

  setup() {
    return {};
  },
};
</script>
