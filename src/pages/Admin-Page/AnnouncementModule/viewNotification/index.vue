<template>
  <div class="p-10">
    <div class="flex flex-wrap">
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
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

import { UserService } from "@/services";
export default {
  name: "ShowNotificationView",
  components: {},
  setup() {
    const notifications = ref({});
    onBeforeMount(async () => {
      const res = await UserService.notification.get();
      notifications.value = res.data;
    });
    async function remove(id) {
      await UserService.notification.remove(id);
      location.reload();
    }
    return {
      remove,
      notifications,
    };
  },
};
</script>
