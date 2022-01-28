<template>
  <p class="my-4 px-5">
    Hello, <b>{{ student?.firstName }} {{ student?.lastName }}</b
    >. Welcome to e-Campus. You may follow the links below. Please do not forget
    to log out when you finish. Your advisor is
    <b class="text-regal-blue"
      ><a :href="`mailto:${student?.teacher?.mail}`"
        >{{ student?.teacher?.name }}.</a
      ></b
    >
  </p>
</template>

<script>
export default {
  name: "StudentInfo",
  props: {
    student: { type: Object, required: true },
  },
  setup() {
    return {};
  },
};
</script>
