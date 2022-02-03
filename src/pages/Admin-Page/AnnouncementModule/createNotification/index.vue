<template>
  <div class="p-10">
    <div class="flex flex-wrap">
      <Input>
        <Label name="Announcement Title" />
        <input
          v-model="data.title"
          type="text"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        />
      </Input>
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative w-full mb-3">
          <Label name="Announcement Message" />
          <input
            v-model="data.message"
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          />
        </div>
      </div>
      <button
        class="border-0 px-3 py-3 text-white bg-blue-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        @click.prevent="send"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Swal from "sweetalert2";

import { UserService } from "@/services";
import Label from "@/components/label/index.vue";
import Input from "@/components/input/index.vue";
export default {
  name: "CreateNotificationView",
  components: { Label, Input },
  setup() {
    const data = reactive({
      title: "",
      message: "",
    });
    async function send() {
      await UserService.notification.add(data);
      Swal.fire({
        title: "Notification created successfully!",
      }).then((result) => {
        if (result.isConfirmed) {
          data.title = "";
          data.message = "";
        }
      });
    }
    return { data, send };
  },
};
</script>
