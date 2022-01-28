<template>
  <div class="p-10">
    <portlet name="Register Student Panel">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="School ID" />
                <input
                  v-model="form.idNo"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <Label name="Email Address" />
                  <input
                    v-model="form.email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <Input>
                <Label name="First Name" />
                <input
                  v-model="form.firstName"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Last Name" />
                <input
                  v-model="form.lastName"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              University Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Faculty" />
                <input
                  v-model="form.uni.faculty"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Department" />
                <input
                  v-model="form.uni.department"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Program Entry Year" />
                <input
                  v-model="form.uni.entry"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Scholarship" />
                <input
                  v-model="form.uni.scholar"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Standing" />
                <input
                  v-model="form.uni.standing"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Semester" />
                <input
                  v-model="form.uni.semester"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Advisor Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Advisor Name" />
                <input
                  v-model="form.teacher.name"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Advisor Mail" />
                <input
                  v-model="form.teacher.mail"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Personal Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Gender" />
                <select
                  v-model="form.personalInfo.gender"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option
                    v-for="(value, key) in genders"
                    :key="key"
                    :value="key"
                  >
                    {{ value }}
                  </option>
                </select>
              </Input>
              <Input>
                <Label name="Nationality" />
                <input
                  v-model="form.personalInfo.nationality"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Birthdate" />
                <input
                  v-model="form.personalInfo.birthDate"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Birthplace" />
                <input
                  v-model="form.personalInfo.birthPlace"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Marital Status" />
                <select
                  v-model="form.personalInfo.maritalStatus"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option
                    v-for="(value, key) in maritalStatuses"
                    :key="key"
                    :value="key"
                  >
                    {{ value }}
                  </option>
                </select>
              </Input>
              <Input>
                <Label name="Religion" />
                <input
                  v-model="form.personalInfo.religion"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Blood Type" />
                <select
                  v-model="form.personalInfo.bloodType"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                >
                  <option
                    v-for="(value, key) in bloodTypes"
                    :key="key"
                    :value="key"
                  >
                    {{ value }}
                  </option>
                </select>
              </Input>
              <Input>
                <Label name="Mobile Phone" />
                <input
                  v-model="form.personalInfo.mobilePhone"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Personal Mail" />
                <input
                  v-model="form.personalInfo.personalMail"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Address" />
                <input
                  v-model="form.place.address"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Province" />
                <input
                  v-model="form.place.province"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="District" />
                <input
                  v-model="form.place.district"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Village" />
                <input
                  v-model="form.place.village"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Order No" />
                <input
                  v-model="form.place.orderNo"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Family No" />
                <input
                  v-model="form.place.familyNo"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Registration No" />
                <input
                  v-model="form.place.registrationNo"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Home Phone" />
                <input
                  v-model="form.place.homePhone"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Postal Code" />
                <input
                  v-model="form.place.postalCode"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Family Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Mother Name" />
                <input
                  v-model="form.family.motherName"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Father Name" />
                <input
                  v-model="form.family.fatherName"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Emergency Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Contact Name" />
                <input
                  v-model="form.emergency.name"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Contacy Address" />
                <input
                  v-model="form.emergency.address"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Phone1" />
                <input
                  v-model="form.emergency.phone1"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Phone2" />
                <input
                  v-model="form.emergency.phone2"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              High School Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="High School Name" />
                <input
                  v-model="form.highSchool.name"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="High School Type" />
                <input
                  v-model="form.highSchool.type"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="City" />
                <input
                  v-model="form.highSchool.city"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Graduation Year" />
                <input
                  v-model="form.highSchool.year"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="TOEFL Point" />
                <input
                  v-model="form.highSchool.toefl"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="High School Branch" />
                <input
                  v-model="form.highSchool.branch"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="High School Language" />
                <input
                  v-model="form.highSchool.language"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              University Exam Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="ID Number" />
                <input
                  v-model="form.universityExam.id"
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Score Type" />
                <input
                  v-model="form.universityExam.type"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Choice Rank" />
                <input
                  v-model="form.universityExam.choice"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
              <Input>
                <Label name="Exam Score" />
                <input
                  v-model="form.universityExam.score"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Medical Information
            </h6>
            <div class="flex flex-wrap">
              <Input>
                <Label name="Medical Issues" />
                <input
                  v-model="form.health.issue"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
              </Input>
            </div>
            <button
              class="border-0 px-3 py-3 text-white bg-blue-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              @click.prevent="signup"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </portlet>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";

import { UserService } from "@/services";
import { responseMessage } from "@/config/utils";
import { Genders, BloodTypes, MaritalStatuses } from "@/config/enums";
import Label from "@/components/label/index.vue";
import Input from "@/components/input/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "StudentRegisterView",
  components: {
    Label,
    Portlet,
    Input,
  },
  setup() {
    const router = useRouter();
    const form = reactive({
      idNo: "",
      email: "",
      lastName: "",
      firstName: "",
      uni: {
        faculty: "",
        department: "",
        entry: "",
        scholar: "",
        standing: "",
        semester: "",
      },
      teacher: { name: "", mail: "" },
      personalInfo: {
        gender: "",
        religion: "",
        bloodType: "",
        birthDate: "",
        birthPlace: "",
        nationality: "",
        mobilePhone: "",
        personalMail: "",
        maritalStatus: "",
      },
      place: {
        address: "",
        village: "",
        orderNo: "",
        familyNo: "",
        province: "",
        district: "",
        homePhone: "",
        postalCode: "",
        registrationNo: "",
      },
      family: { motherName: "", fatherName: "" },
      emergency: {
        name: "",
        phone1: "",
        phone2: "",
        address: "",
      },
      highSchool: {
        name: "",
        type: "",
        city: "",
        year: "",
        toefl: "",
        branch: "",
        language: "",
      },
      universityExam: {
        id: "",
        type: "",
        score: "",
        choice: "",
      },
      health: {
        issue: "",
      },
    });
    const bloodTypes = computed(() => BloodTypes);
    const genders = computed(() => Genders);
    const maritalStatuses = computed(() => MaritalStatuses);

    async function signup() {
      const user = await UserService.auth.signUp(form);
      if (user.message === "Ok") {
        responseMessage(
          "The student has been successfully registered in the system. For the first login, the password is set as the user's school id.",
          "Confirm",
          "success"
        );
        router.push({ name: "AdminView" });
      } else {
        responseMessage(user.message);
        location.reload();
      }
      console.log(user);
    }
    return {
      form,
      signup,
      genders,
      bloodTypes,
      maritalStatuses,
    };
  },
};
</script>

<style></style>
