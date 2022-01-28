<template>
  <div class="grid grid-cols-6 text-sm">
    <div class="col-start-2 col-span-4">
      <router-link to="/home">
        <img class="float-left w-64" src="@/assets/logo.png" />
      </router-link>
      <div class="float-right flex flex-row gap-4 pt-5 text-regal-gray">
        <info-button />
        <p>|</p>
        <phone-button />
        <p>|</p>
        <noti-button />
        <p>|</p>
        <profile-button :name="profileName" />
      </div>
    </div>
    <div class="col-start-1 col-span-6 bg-campus-blue text-white">
      <div class="flex flex-row gap-5 justify-center">
        <button
          class="p-3 hover:bg-slate-600"
          @click="routePage(`LandingView`)"
        >
          Home
        </button>

        <a
          target="_blank"
          href="https://www.isikun.edu.tr/international/academic-calendar"
        >
          <button class="p-3 hover:bg-slate-600">Academic Calendar</button>
        </a>
        <a
          href="https://www.isikun.edu.tr/web/132-15159-1-1/isik_universitesi/hakkinda/yonetim__idari_birimler__ogrenci_isleri_daire_baskanligi/2020-2021_guz_yariyili_ders_programlariGet"
          target="_blank"
        >
          <button class="p-3 hover:bg-slate-600">Course Schedule</button>
        </a>
        <a
          href="https://e-campus.isikun.edu.tr/coursecatalog/index"
          target="_blank"
        >
          <button class="p-3 hover:bg-slate-600">Course Catalog</button>
        </a>
        <a
          target="_blank"
          href="https://e-campus.isikun.edu.tr/files/media/ders_secim_kilavuzu.pdf"
        >
          <button class="p-3 hover:bg-slate-600">Registration Help</button>
        </a>
        <a
          target="_blank"
          href="https://www.isikun.edu.tr/i/content/16204_1_2021-2022-Ogrenci_Rehberi.pdf"
          ><button class="p-3 hover:bg-slate-600">User Guides</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import InfoButton from "./info/index.vue";
import NotiButton from "./noti/index.vue";
import PhoneButton from "./phone/index.vue";
import ProfileButton from "./profile/index.vue";
export default {
  name: "HeaderView",
  components: { InfoButton, NotiButton, PhoneButton, ProfileButton },
  setup() {
    const router = useRouter();
    const profileName = localStorage.getItem("fullName");

    function routePage(routeName) {
      router.push({ name: routeName.toString() });
    }
    return {
      routePage,
      profileName,
    };
  },
};
</script>
