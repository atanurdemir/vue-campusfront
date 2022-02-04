import { UserService } from "@/services";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    meta: {
      disallowAuthed: true,
    },
    component: () => import("@/pages/Login-Page/LoginPage"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorView",
    component: () => import("@/pages/NotFound-Page/NotFound"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/home",
    name: "LandingView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Landing-Page/LandingPage"),
  },
  {
    path: "/registration",
    name: "RegistrationView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Registration-Page/RegistrationPage"),
  },
  {
    path: "/profile",
    name: "ProfileView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Profile-Page/ProfilePage"),
  },
  {
    path: "/CCR",
    name: "CCRView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/CCR-Page/CCR_Page"),
  },
  {
    path: "/schedule",
    name: "ScheduleView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Schedule-Page/SchedulePage"),
  },
  {
    path: "/dormitory",
    name: "DormitoryView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Dormitory-Page/DormitoryPage"),
  },
  {
    path: "/cafeteria",
    name: "CafeteriaView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Cafeteria-Page/CafeteriaPage"),
  },
  {
    path: "/finance",
    name: "FinanceView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Finance-Page/FinancePage"),
  },
  {
    path: "/withdraw",
    name: "WithdrawView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Withdraw-Page/WithdrawPage"),
  },
  {
    path: "/curriculum",
    name: "CurriculumView",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Curriculum-Page/CurriculumPage"),
  },
  {
    path: "/admin",
    name: "AdminView",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/AdminPage"),
  },
  {
    path: "/admin/announcements",
    name: "AnnouncementModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/AnnouncementModule/index"),
  },
  {
    path: "/admin/cafeteria",
    name: "CafeteriaModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/CafeteriaModule/index"),
  },
  {
    path: "/admin/dormitories",
    name: "DormitoriesModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/DormitoriesModule/index"),
  },
  {
    path: "/admin/finance",
    name: "FinancialModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/FinancialModule/index"),
  },
  {
    path: "/admin/register",
    name: "RegisterModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/RegisterModule/index"),
  },
  {
    path: "/admin/view",
    name: "StudentModule",
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    component: () => import("@/pages/Admin-Page/StudentModule/index"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("campusToken");
  if (to.meta.disallowAuthed && token) {
    router.push({ name: "LandingView" });
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token === null) {
      next({
        path: "/",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
  if (to.meta.requiresAdmin) {
    const role = await UserService.profile.getMe();
    if (role.data.role !== "Student") {
      router.push({ name: "ErrorView" });
    }
  }
});

export default router;
