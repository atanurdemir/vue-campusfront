<template>
  <div class="p-10">
    <portlet name="Admin Panel">
      <info
        class="my-2"
        title="Status"
        :text="`Hello, ${fullName}. Welcome to e-Campus. You may follow the links
      below. Please do not forget to log out when you finish. Your user role is
      admin.`"
      />
      <div class="flex flex-col gap-1 my-4 px-5">
        <Box
          route="RegisterModule"
          title="Register Student Module"
          message="Module that registering a new student to the system."
        />
        <Box
          route="StudentModule"
          title="View Student Information"
          message="Module that can be used to view students and edit their information."
        />
        <Box
          route="CafeteriaModule"
          title="Cafeteria Module"
          message="Module that can be used to manage cafeteria."
        />
        <Box
          route="FinancialModule"
          title="Financial Affairs Module"
          message="Module that can be used to manage students' financial information."
        />
        <Box
          route="DormitoriesModule"
          title="Dormitories Module"
          message="Module that used to manage students' dormitory information."
        />
        <Box
          route="CoursesModule"
          title="Courses Module"
          message="Module that used to manage existing courses, add new courses or delete courses."
        />
        <Box
          route="AnnouncementModule"
          title="Announcements Module"
          message="Module that used to publish new announcements to students."
        />
      </div>
    </portlet>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import Info from "@/components/info/index.vue";
import Box from "@/components/box/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "AdminView",
  components: {
    Box,
    Info,
    Portlet,
  },
  setup() {
    const fullName = ref();
    onBeforeMount(() => {
      fullName.value = localStorage.getItem("fullName");
    });

    return {
      fullName,
    };
  },
};
</script>
