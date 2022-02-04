<template>
  <div class="p-10 min-h-screen">
    <portlet name="Cafeteria Module">
      <div v-if="!isLoading" class="bg-white rounded-lg shadow-lg">
        <ul class="divide-y-2 divide-gray-100">
          <li class="p-3">
            <div class="grid grid-cols-4">
              <div>Restaurant Name</div>
              <div>Restaurant Date</div>
              <div>Resarvation Status</div>
              <div>Action</div>
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
                @click.prevent="show(items.cafeteriaId)"
              >
                Show
              </button>
            </div>
          </li>
        </ul>
      </div>
      <spinner v-else />
    </portlet>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { UserService } from "@/services";
import Spinner from "@/components/spinner/index.vue";
import Portlet from "@/components/portlet/index.vue";
export default {
  name: "CafeteriaModule",
  components: { Portlet, Spinner },
  setup() {
    const isLoading = ref(true);
    const userList = ref({});
    const cafeteriaList = ref({});
    onBeforeMount(async () => {
      isLoading.value = true;
      const res = await UserService.cafeteria.get();
      cafeteriaList.value = res.data;
      isLoading.value = false;
    });
    async function show(item) {
      const res = await UserService.cafeteria.getReservations(item);
      console.log(res);
      userList.value = res.data;
    }
    return { show, userList, cafeteriaList, isLoading };
  },
};
</script>
