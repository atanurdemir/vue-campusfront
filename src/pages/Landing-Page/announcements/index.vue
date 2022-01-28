<template>
  <div>
    <div v-for="item in news" :key="item.title">
      <announcements-items :title="item.title" :message="item.message" />
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import AnnouncementsItems from "./items.vue";
export default {
  name: "AnnouncementsView",
  components: {
    AnnouncementsItems,
  },
  setup() {
    const news = inject("news");
    return {
      news,
    };
  },
};
</script>
