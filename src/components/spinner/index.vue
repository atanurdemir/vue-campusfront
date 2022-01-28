<template>
  <div>
    <div class="flex justify-center items-center">
      <div
        class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpinnerView",
  components: {},
  props: {},
};
</script>

<style>
.loader {
  border-top-color: #6777ef;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
