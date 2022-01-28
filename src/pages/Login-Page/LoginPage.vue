<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
    <div class="mt-44">
      <img src="@/assets/logo.png" />
    </div>
    <div class="lg:mt-80">
      <div class="grid grid-rows-8 gap-4 px-16">
        <h1 class="text-3xl font-light text-regal-gray">
          e-Campus: Student Information System - Learn More
        </h1>
        <div class="bg-blue-100 text-blue-500 text-sm p-4 mb-5">
          <strong>Info:</strong>First time users can log in using Isik e-mail
          address as username and citizenship number as password.
        </div>
        <div class="flex flex-col gap-5 justify-center">
          <div class="grid grid-cols-2 gap-4">
            <div class="">
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2"
                >Your email</label
              >
              <input
                v-model="credentials.email"
                class="bg-gray-50 border-gray-300 border-b-2 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div class="">
              <label class="text-sm font-medium text-gray-900 block mb-2"
                >Password:</label
              >
              <input
                v-model="credentials.password"
                type="password"
                class="bg-gray-50 border-gray-300 border-b-2 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="text-right">
            <button
              class="bg-campus-blue text-white px-4 py-2"
              @click.prevent="login"
            >
              Login
            </button>
          </div>
          <div class="bg-gray-100 border-gray-300 border border-b-2 p-2">
            <span>Forget your password? / Şifrenizi mi unuttunuz?</span>
          </div>
          <div class="bg-gray-100 border-gray-300 border border-b-2 p-2">
            <span>For Course Catalog Page, please click!</span>
          </div>
          <div class="bg-gray-100 border-gray-300 border border-b-2 p-2">
            <span>KVKK metni için tıklayınız.</span>
          </div>
          2021 © FMV Işık University - Center for Educational Technologies
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { UserService } from "@/services";
import { responseMessage } from "@/config/utils";
export default {
  name: "LoginView",
  components: {},
  setup() {
    const router = useRouter();
    const credentials = reactive({
      email: "",
      password: "",
    });

    function populateStorage(data) {
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("email", data.email);
      localStorage.setItem("campusToken", data.token);
      localStorage.setItem("fullName", data.fullname);
    }

    async function login() {
      const user = await UserService.auth.signIn(credentials);
      if (user.message === "Ok") {
        populateStorage(user);
        router.push({ name: "LandingView" });
      } else {
        responseMessage(user.message);
      }
    }

    return {
      login,
      credentials,
    };
  },
};
</script>
