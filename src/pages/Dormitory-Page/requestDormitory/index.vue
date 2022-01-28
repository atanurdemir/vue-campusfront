<template>
  <div
    class="mb-96 pb-60 relative flex flex-col min-w-0 break-words w-full bg-blueGray-100 border-0"
  >
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <Input>
            <Label name="Dorm Type" />
            <select
              v-model="data.type"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            >
              <option v-for="(value, key) in dormTypes" :key="key" :value="key">
                {{ value }}
              </option>
            </select>
          </Input>
          <Input>
            <Label name="Dorm Capacity" />
            <select
              v-model="data.capacity"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            >
              <option
                v-for="(value, key) in dormCapacity"
                :key="key"
                :value="key"
              >
                {{ value }}
              </option>
            </select>
          </Input>
        </div>
        <div class="text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click.prevent="send"
          >
            Button
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

import { UserService } from "@/services";
import { enumToArray } from "@/config/utils";
import { responseMessage } from "@/config/utils";
import Label from "@/components/label/index.vue";
import Input from "@/components/input/index.vue";
import { Dormitory, DormTypes, DormCapacity } from "@/config/enums";

export default {
  name: "RequestDormitoryView",
  components: {
    Label,
    Input,
  },
  props: {},
  setup() {
    const data = reactive({
      type: "",
      capacity: "",
    });
    const dormTypes = computed(() => DormTypes);
    const dormCapacity = computed(() => DormCapacity);
    const collapseItems = computed(() => enumToArray(Dormitory));

    async function send() {
      const res = await UserService.dormitory.add(data);
      if (res.message !== "Ok") {
        responseMessage(res.message);
      } else {
        responseMessage("You have successfully applied!", "Confirm", "success");
      }
    }
    return { data, send, dormTypes, dormCapacity, collapseItems };
  },
};
</script>
