<template>
  <div class="min-h-screen">
    <div v-if="!isLoading" class="p-10 min-h-screen">
      <portlet name="Cafeteria Panel">
        <info
          class="my-2"
          title="Status"
          text="Due to corona conditions, you can only book one restaurant per day."
        />
        <div class="bg-white rounded-lg shadow-lg">
          <ul class="divide-y-2 divide-gray-100">
            <li class="p-3">
              <div class="grid grid-cols-4">
                <div>Restaurant Name</div>
                <div>Restaurant Date</div>
                <div>Resarvation Status</div>
              </div>
            </li>
            <li
              v-for="items in cafeteriaList"
              :key="`itm-${items.code}`"
              class="p-3 hover:bg-blue-600 hover:text-blue-200"
            >
              <div class="grid grid-cols-4">
                <div>{{ items.name }}</div>
                <div>{{ items.createAt }}</div>
                <div>{{ items.reserved }}/{{ items.capacity }}</div>
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  @click.prevent="send(items.cafeteriaId, items.name)"
                >
                  Reserve
                </button>
              </div>
            </li>
          </ul>
        </div>
      </portlet>
    </div>
    <spinner v-else class="mt-20" />
  </div>
</template>

<script>
import { ref, computed, onBeforeMount } from "vue";

import { UserService } from "@/services";
import { responseMessage } from "@/config/utils";
import Info from "@/components/info/index.vue";
import Spinner from "@/components/spinner/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "CafeteriaView",
  components: { Info, Portlet, Spinner },
  setup() {
    const data = ref();
    const isLoading = ref(true);
    const cafeteriaList = computed(() => data.value);

    onBeforeMount(async () => {
      isLoading.value = true;
      const res = await UserService.cafeteria.get();
      data.value = res.data;
      isLoading.value = false;
    });
    async function send(id, name) {
      const checkReservation = await UserService.cafeteria.getReserve(id);
      if (!checkReservation.data) {
        const values = await Promise.all([
          UserService.cafeteria.addReserve({
            cafeteriaId: id,
          }),
          UserService.cafeteria.reserve({ cafeteriaId: id }),
        ]);
        if (values[1].message !== "Ok") {
          responseMessage(values[1].message);
        } else {
          isLoading.value = true;
          const res = await UserService.cafeteria.get();
          data.value = res.data;
          isLoading.value = false;
          responseMessage(
            `You have successfully made a reservation at ${name}!`,
            "Confirm",
            "success"
          );
        }
      } else {
        responseMessage("You already made a reservation at a restaurant!");
      }
    }
    return { send, isLoading, cafeteriaList };
  },
};
</script>
