<template>
  <div class="border bg-white border-slate-500">
    <div class="bg-campus-blue text-white text-lg p-2">{{ name }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "PortletView",
  components: {},
  props: {
    name: { type: String, required: true },
  },
};
</script>
