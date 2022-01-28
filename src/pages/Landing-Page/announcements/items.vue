<template>
  <div>
    <Box :title="title" :message="message" />
  </div>
</template>

<script>
import Box from "@/components/box/index.vue";
export default {
  name: "AnnouncementsItems",
  components: {
    Box,
  },
  props: {
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
};
</script>

<style></style>
