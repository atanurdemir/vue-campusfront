<template>
  <table-lite
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
  />
</template>

<script>
import { reactive, onBeforeMount } from "vue";

import TableLite from "vue3-table-lite";
import { UserService } from "@/services";
export default {
  name: "TableView",
  components: {
    TableLite,
  },
  setup() {
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "id",
          field: "days",
          width: "3%",
        },
        {
          label: "1",
          field: "one",
          width: "10%",
          sortable: false,
        },
        {
          label: "2",
          field: "two",
          width: "10%",
          sortable: false,
        },
        {
          label: "3",
          field: "three",
          width: "10%",
          sortable: false,
        },
        {
          label: "4",
          field: "four",
          width: "10%",
          sortable: false,
        },
        {
          label: "5",
          field: "five",
          width: "10%",
          sortable: false,
        },
        {
          label: "6",
          field: "six",
          width: "10%",
          sortable: false,
        },
        {
          label: "7",
          field: "seven",
          width: "10%",
          sortable: false,
        },
        {
          label: "8",
          field: "eight",
          width: "10%",
          sortable: false,
        },
      ],
      rows: [
        {
          days: "M",
        },
        {
          days: "T",
        },
        {
          days: "W",
        },
        {
          days: "Th",
        },
        {
          days: "F",
        },
        {
          days: "Sa",
        },
        {
          days: "Su",
        },
      ],
      totalRecordCount: 1,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    onBeforeMount(async () => {
      const res = await UserService.course.get();
      for (let i = 0; i < res.data.length; i++) {
        const days = res.data[i].courseDays;
        const hours = res.data[i].courseHours;
        table.rows[days][hours] = res.data[i].courseCode;
      }
    });

    return {
      table,
    };
  },
};
</script>

<style scoped>
.card ::v-deep(.table .thead-dark th) {
  color: #333333;
  background-color: #fff;
  border-color: #e7ecf0;
}
</style>
