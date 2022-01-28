<template>
  <div class="table-row">
    <div class="table-cell ...">{{ data.courseCode }}</div>
    <div class="table-cell ...">{{ data.courseName }}</div>
    <div class="table-cell ...">{{ data.courseCredit }}</div>
    <div class="table-cell ...">{{ data.courseTeacher }}</div>
    <button
      class="col-start-4 col-end-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 px-4 rounded"
      @click.prevent="remove"
    >
      Remove
    </button>
  </div>
</template>

<script>
import { UserService } from "@/services";
export default {
  name: "TakenCoursesItems",
  props: {
    data: { type: Object, required: true },
  },
  emits: ["deleted"],
  setup(props, { emit }) {
    async function remove() {
      const values = await Promise.all([
        UserService.course.remove(props.data.courseId),
      ]);
      const res = values[0];
      emit("deleted", res);
    }

    return {
      remove,
    };
  },
};
</script>
