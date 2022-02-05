import { ref } from "vue";

export default function (status = false) {
  const visible = ref(status);

  function onClose() {
    visible.value = false;
  }

  function onOpen() {
    visible.value = true;
  }

  return { modal: { visible, onOpen, onClose } };
}
