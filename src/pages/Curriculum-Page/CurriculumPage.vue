<template>
  <div>
    <div v-if="!isLoading">
      <div class="px-5">
        <div class="flex flex-col gap-5 text-left pt-10 pb-6">
          <div class="border border-slate-500">
            <div class="bg-blue-900 text-white text-lg p-3">
              CCR (Curriculum Compliancy Report)
            </div>
            <div class="flex flex-col gap-1">
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">1. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem1"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">2. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem2"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">3. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem3"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">4. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem4"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">5. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem5"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">6. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem6"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">7. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem7"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border border-slate-300">
                <div class="bg-slate-400 p-2 text-blue-700">8. Semester</div>
                <div class="bg-white rounded-lg shadow-lg">
                  <ul class="divide-y-2 divide-gray-100">
                    <li
                      v-for="courses in semesters.sem8"
                      :key="courses.code"
                      class="p-3 hover:bg-blue-600 hover:text-blue-200"
                    >
                      {{ courses.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <spinner v-else class="mt-60 min-h-screen" />
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount } from "vue";
import { UserService } from "@/services";
import Spinner from "@/components/spinner/index.vue";
export default {
  name: "CurriculumView",
  components: {
    Spinner,
  },
  setup() {
    const userInfo = ref({});
    const semesters = reactive({
      sem1: {},
      sem2: {},
      sem3: {},
      sem4: {},
      sem5: {},
      sem6: {},
      sem7: {},
      sem8: {},
    });
    const isLoading = ref(true);
    onBeforeMount(async () => {
      isLoading.value = true;
      const values = await Promise.all([
        UserService.department.get("Computer Science", 1),
        UserService.department.get("Computer Science", 2),
        UserService.department.get("Computer Science", 3),
        UserService.department.get("Computer Science", 4),
        UserService.department.get("Computer Science", 5),
        UserService.department.get("Computer Science", 6),
        UserService.department.get("Computer Science", 7),
        UserService.department.get("Computer Science", 8),
      ]);
      semesters.sem1 = values[0].data[0]?.courses;
      semesters.sem2 = values[1].data[0]?.courses;
      semesters.sem3 = values[2].data[0]?.courses;
      semesters.sem4 = values[3].data[0]?.courses;
      semesters.sem5 = values[4].data[0]?.courses;
      semesters.sem6 = values[5].data[0]?.courses;
      semesters.sem7 = values[6].data[0]?.courses;
      semesters.sem8 = values[7].data[0]?.courses;
      isLoading.value = false;
    });
    return {
      userInfo,
      isLoading,
      semesters,
    };
  },
};
</script>
