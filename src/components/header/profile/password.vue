<template>
  <div>
    <div class="flex flex-wrap pt-4">
      <Input>
        <Label class="text-white" name="Advisor Name" />
        <input
          v-model="password.main"
          type="text"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        />
      </Input>
      <Input>
        <Label class="text-white" name="Advisor Mail" />
        <input
          v-model="password.sub"
          type="email"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        />
      </Input>
    </div>
    <div class="profile__settings-buttons">
      <base-button
        type="reset"
        mode="button-transparent button-lg"
        @click="modal.onClose"
        >Cancel</base-button
      >
      <base-button type="submit" mode="button-electric-blue button-lg"
        >Save Change</base-button
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import useModal from "@/config/hooks/useModal";
import Label from "@/components/label/index.vue";
import Input from "@/components/input/index.vue";
import BaseButton from "@/components/button/index.vue";
export default {
  name: "ChangePasswordView",
  components: { Input, Label, BaseButton },
  setup() {
    const { modal } = useModal();
    const password = reactive({
      main: "",
      sub: "",
    });
    return {
      modal,
      password,
    };
  },
};
</script>

<style scoped>
.profile__settings-buttons {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 49% 49%;
  width: 100%;
}
</style>
