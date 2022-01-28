<template>
  <div>{{ warnings }}</div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "WarningsView",
  components: {},
  setup() {
    const warnings = inject("warnings");
    return {
      warnings,
    };
  },
};
</script>
