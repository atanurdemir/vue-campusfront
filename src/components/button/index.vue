<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "ButtonView",
  props: {
    link: { type: Boolean, required: false, default: false },
    to: { type: String, required: false, default: "/" },
    mode: { type: String, required: false, default: "purple" },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 8px 40px;
  cursor: pointer;
  border-radius: 16px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: 0.2s ease;
  user-select: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  border: none;
}
.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
.text {
  background: none;
  padding: 0;
  border-radius: 0;
  border: 0;
  margin: 0;
  outline: none;
  color: #2a2e4c;
}
.text-purple {
  color: #893bff;
}
.text:hover {
  background: none;
}
.white,
.white:hover {
  background-color: #fff;
  border-color: #e1e1e1;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.0635414);
  color: #54565b;
}
.link {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 0;
  margin-right: 0;
  display: inline-block;
  font-size: 16px;
  transition: 0.2s ease;
}
.link:hover {
  background: none;
  box-shadow: none;
}
.block {
  display: block;
  width: 100%;
}
.button-electric-blue {
  background-color: #64f6ff;
  color: #131a26;
  border: 2px solid #64f6ff;
}
.button-green-yellow {
  background-color: #64f6ff;
  color: #131a26;
  border: 2px solid #64f6ff;
}
.button-transparent {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button-pickled-blue {
  background-color: #374463;
  color: #fff;
  border: 2px solid #374463;
}
.button-sm {
  height: 2.75rem;
}
.button-md {
  height: 3.25rem;
}
.button-lg {
  height: 3.75rem;
}
.button-xl {
  height: 4.5rem;
}
</style>
