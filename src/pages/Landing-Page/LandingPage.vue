<template>
  <div class="bg-campus-background">
    <div v-if="!isLoading" class="grid grid-cols-2 py-8">
      <div class="px-5">
        <div class="flex flex-col gap-5 text-left pb-6">
          <portlet name="Overview">
            <Student :student="userInfo" deneme="deneme" class="my-4 px-5" />
            <div class="flex flex-col gap-1 my-4 px-5">
              <Box title="Quick Access" :list="landingList" />
              <Box
                route="ProfileView"
                title="Personal Information"
                message="Make sure that your address, job, military and identification information are up to date."
              />
              <Box
                route="RegistrationView"
                title="Registration for Courses"
                message="Registration is open."
              />
              <Box
                route="CCRView"
                title="CCR (Curriculum Compliancy Report)"
                message="A detailed report on your academic history."
              />
              <Box
                route="WithdrawView"
                title="Withdraw"
                message="Withdraw is open."
              />
              <Box
                route="ScheduleView"
                title="Weekly Schedule"
                message="Your weekly course schedule."
              />
              <Box
                route="DormitoryView"
                title="Dormitory Request"
                message="You can create dorm requests here."
              />
              <Box
                route="CafeteriaView"
                title="Cafeteria"
                message="Click to see the status of the cafeterias and make a reservation."
              />
              <Box
                route="FinanceView"
                title="Financial Affairs"
                message="Click to check your financial status."
              />
              <Box
                route="CurriculumView"
                title="Curriculum"
                message="Click to see your program's curriculum."
              />
              <!-- <Box
                title="Transcript"
                message="A cumulative grade report of your academic history."
              /> -->
              <!-- <Box
                title="Curriculum Slots"
                message="You can see offered courses (not sections) for your curriculum slots."
              /> -->
              <!-- <Box
                title="Document Request"
                message="You can create document requests here."
              /> -->
              <!-- <Box
                title="Request Forms"
                message="You can create request forms here."
              /> -->
              <!-- <Box
                title="Work Scholarship"
                message="Work Scholarship applications are closed."
              /> -->
            </div>
          </portlet>
        </div>
      </div>
      <div class="px-5">
        <div class="flex flex-col gap-5 text-left">
          <portlet name="Weekly Schedule">
            <Schedule class="my-4 px-5" />
          </portlet>
          <portlet name="Announcements">
            <Announcements class="my-4 px-5" />
          </portlet>
          <portlet name="Holds & Warnings">
            <Warnings class="my-4 px-5" />
          </portlet>
        </div>
      </div>
    </div>
    <spinner v-else class="flex justify-center min-h-screen" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, provide, computed, onMounted } from "vue";

import { List } from "@/config/enums";
import { UserService } from "@/services";
import Student from "./student/index.vue";
import Schedule from "./schedule/index.vue";
import Warnings from "./warnings/index.vue";
import Box from "@/components/box/index.vue";
import Spinner from "@/components/spinner/index.vue";
import Portlet from "@/components/portlet/index.vue";
import Announcements from "./announcements/index.vue";
export default {
  name: "LandingView",
  components: {
    Box,
    Portlet,
    Student,
    Spinner,
    Schedule,
    Warnings,
    Announcements,
  },
  setup() {
    const store = useStore();

    const news = ref();
    const userInfo = ref({});
    const isLoading = ref(true);
    const landingList = computed(() => List);

    onMounted(async () => {
      isLoading.value = true;
      const values = await Promise.all([
        UserService.profile.getMe(),
        UserService.notification.get(),
        store.dispatch("courses/getCourses"),
      ]);
      userInfo.value = values[0].data;
      news.value = values[1].data;
      populateStorage(values[0]);
      isLoading.value = false;
    });

    function populateStorage(values) {
      localStorage.setItem("semester", values.data.uni.semester);
      localStorage.setItem("department", values.data.uni.department);
    }

    const warnings = "There are no holds or warnings.";

    provide("news", news);
    provide("warnings", warnings);

    return { isLoading, landingList, userInfo };
  },
};
</script>

<style></style>
