<template>
  <div class="table w-full ...">
    <div class="table-header-group ...">
      <div class="table-row">
        <div class="table-cell text-left ...">Code</div>
        <div class="table-cell text-left ...">Title</div>
        <div class="table-cell text-left ...">Credit</div>
        <div class="table-cell text-left ...">Instructor</div>
        <div class="table-cell text-left ...">Actions</div>
      </div>
    </div>
    <div v-for="items in courses" :key="items.code" class="table-row-group">
      <taken-course-items :data="items" @deleted="refresh" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TakenCourseItems from "./items.vue";
export default {
  name: "TakenCoursesView",
  components: {
    TakenCourseItems,
  },
  emits: ["deleted"],
  setup(_, { emit }) {
    const store = useStore();
    const courses = computed(() => {
      return store.getters["courses/courseInfo"];
    });
    async function refresh(value) {
      if (value.message === "Ok") {
        emit("deleted", value);
        await store.dispatch("courses/getCourses");
      }
    }

    return {
      courses,
      refresh,
    };
  },
};
</script>
