<template>
  <div class="px-5 min-h-screen">
    <div class="flex flex-col gap-5 text-left pt-10 pb-6">
      <div class="border border-slate-500">
        <div class="bg-blue-900 text-white text-lg p-3">Withdraw</div>
        <div class="flex flex-col gap-1">
          <div class="border border-slate-300">
            <div class="bg-slate-400 p-2 text-blue-700">
              Withdrawable Courses
            </div>
            <div class="bg-white rounded-lg shadow-lg">
              <ul class="divide-y-2 divide-gray-100">
                <li class="p-3">
                  <div class="grid grid-cols-5">
                    <div>Code</div>
                    <div>Course Title</div>
                    <div>Credit</div>
                    <div>Instructor</div>
                    <div>Actions</div>
                  </div>
                </li>
                <li
                  v-for="items in courses"
                  :key="items.code"
                  class="p-3 hover:bg-blue-600 hover:text-blue-200"
                >
                  <div class="grid grid-cols-5">
                    <div>{{ items.courseCode }}</div>
                    <div>{{ items.courseName }}</div>
                    <div>{{ items.courseCredit }}</div>
                    <div>{{ items.courseTeacher }}</div>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      @click.prevent="send(items.courseId)"
                    >
                      Withdraw
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { UserService } from "@/services";
export default {
  name: "WithdrawPage",
  components: {},
  setup() {
    const store = useStore();
    const courses = computed(() => store.getters["courses/courseInfo"]);

    async function send(data) {
      const res = await UserService.course.remove(data);
      if (res.message === "Ok") await store.dispatch("courses/getCourses");
    }
    return {
      send,
      courses,
    };
  },
};
</script>
