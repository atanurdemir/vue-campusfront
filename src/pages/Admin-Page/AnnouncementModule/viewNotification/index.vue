<template>
  <div class="p-10">
    <div v-if="!isLoading" class="flex flex-wrap">
      <div class="bg-white rounded-lg shadow-lg">
        <ul class="divide-y-2 divide-gray-100">
          <li class="p-3">
            <div class="grid grid-cols-4">
              <div>Notification Title</div>
              <div>Notification Message</div>
            </div>
          </li>
          <li
            v-for="items in notifications"
            :key="`itm-${items.notificationId}`"
            class="p-3"
          >
            <div class="grid grid-cols-5">
              <div>{{ items.title }}</div>
              <div class="col-start-2 col-end-5">{{ items.message }}</div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="remove(items.notificationId)"
              >
                Remove
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <spinner v-else />
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

import { UserService } from "@/services";
import Spinner from "@/components/spinner/index.vue";
export default {
  name: "ShowNotificationView",
  components: { Spinner },
  setup() {
    const isLoading = ref(true);
    const notifications = ref({});
    onBeforeMount(async () => {
      isLoading.value = true;
      const res = await UserService.notification.get();
      notifications.value = res.data;
      isLoading.value = false;
    });
    async function remove(id) {
      await UserService.notification.remove(id);
      location.reload();
    }
    return {
      remove,
      isLoading,
      notifications,
    };
  },
};
</script>
