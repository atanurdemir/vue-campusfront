<template>
  <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
    {{ name }}
  </label>
</template>

<script>
export default {
  name: "LabelView",
  props: {
    name: { type: String, required: true },
  },
};
</script>
