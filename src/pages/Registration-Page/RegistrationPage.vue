<template>
  <div class="grid grid-cols-2 my-8 min-h-screen">
    <div class="px-5">
      <div class="flex flex-col gap-5 text-left pb-6">
        <portlet name="Curriculum Progress">
          <ul class="divide-y-2 divide-gray-100">
            <li
              v-for="items in data?.courses"
              :key="items.code"
              class="p-3 hover:bg-blue-600 hover:text-blue-200"
            >
              <div class="grid grid-cols-4">
                <div class="col-start-1 col-end-3">{{ items.name }}</div>
                <button
                  class="col-start-4 col-end-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  @click.prevent="send(items)"
                >
                  Take Course
                </button>
              </div>
            </li>
          </ul>
        </portlet>
      </div>
    </div>
    <div class="px-5">
      <div class="flex flex-col gap-5 text-left">
        <portlet name="Weekly Schedule" component="Schedule">
          <Schedule :key="`sh-${refresh}`" class="my-4 px-5" />
        </portlet>
        <portlet name="Currently Taken Course" component="TakenCourses">
          <TakenCourses
            :key="`tk-${refresh}`"
            class="my-4 px-5"
            @deleted="refTable"
          />
        </portlet>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

import { useStore } from "vuex";
import { UserService } from "@/services";
import { responseMessage } from "@/config/utils";

import Portlet from "@/components/portlet/index.vue";
import Schedule from "@/pages/Landing-Page/schedule/index.vue";
import TakenCourses from "@/pages/Registration-Page/takenCourses/index.vue";
export default {
  name: "RegistrationView",
  components: {
    Portlet,
    Schedule,
    TakenCourses,
  },
  setup() {
    const data = ref();
    const refresh = ref(1);
    const store = useStore();

    onBeforeMount(async () => {
      const semester = localStorage.getItem("semester");
      const department = localStorage.getItem("department");
      const values = await Promise.all([
        store.dispatch("courses/getCourses"),
        UserService.department.get(department, semester),
      ]);
      data.value = values[1].data[0];
    });

    async function send(data) {
      const details = {
        courseName: data.name,
        courseCode: data.code,
        courseDays: data.days,
        courseQuota: data.quota,
        courseHours: data.hours,
        courseCredit: data.credit,
        courseTeacher: data.teacher,
      };
      const res = await UserService.course.add(details);
      if (res.message !== "Ok") {
        responseMessage(res.message);
      } else {
        await store.dispatch("courses/getCourses");
        refresh.value++;
      }
    }
    function refTable(value) {
      if (value.message === "Ok") {
        refresh.value++;
      }
    }
    return {
      data,
      send,
      refresh,
      refTable,
    };
  },
};
</script>
