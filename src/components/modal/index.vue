<template>
  <teleport to="body">
    <div v-if="visible" class="custom__modal" :class="className">
      <div class="custom__modal-content" :style="[modalPadding, modalMaxWidth]">
        <header v-show="header" class="custom__modal-header">
          <h5>{{ title }}</h5>
          <button v-show="closeIcon" @click="onClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div class="custom__modal-body">
          <slot></slot>
        </div>
        <div
          v-show="footer"
          :class="footerButtonFullMode"
          :style="footerTopBorder"
        >
          <base-button
            v-show="closeButton"
            :mode="closeButtonMode"
            @click="onClose"
            >{{ closeButtonText }}
          </base-button>
          <base-button
            v-show="saveButton"
            :mode="saveButtonMode"
            @click="saveChanges"
            >{{ saveButtonText }}
          </base-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { computed } from "vue";
import BaseButton from "@/components/button/index.vue";

export default {
  name: "ModalView",
  components: { BaseButton },
  props: {
    className: { type: String, required: false, default: "" },
    title: { type: String, required: true, default: "" },
    visible: { type: Boolean, required: true, default: false },
    onClose: { type: Function, required: true },
    footer: { type: Boolean, required: false, default: true },
    header: { type: Boolean, required: false, default: true },
    onSave: { type: Function, required: false, default: () => {} },
    saveChanges: { type: Function, required: false, default: () => {} },
    closeButtonText: { type: String, required: false, default: "Close" },
    saveButtonText: { type: String, required: false, default: "Save" },
    overlayClose: { type: Boolean, required: false, default: true },
    maxWidth: { type: Number, required: false, default: 650 },
    closeIcon: { type: Boolean, required: false, default: true },
    closeButton: { type: Boolean, required: false, default: true },
    saveButton: { type: Boolean, required: false, default: true },
    padding: {
      type: String,
      required: false,
      default: "1.25rem 1.875rem 2rem 1.875rem",
    },
    fullMode: { type: Boolean, required: false, default: false },
    footerBorder: { type: Boolean, required: false, default: false },
    saveButtonMode: {
      type: String,
      required: false,
      default: "button-green-yellow",
    },
    closeButtonMode: {
      type: String,
      required: false,
      default: "button-transparent",
    },
  },
  setup(props) {
    const overlayOnClose = computed(function () {
      return () => {
        if (props.overlayClose) return props.onClose();
        return "";
      };
    });

    const modalMaxWidth = computed(function () {
      return { "max-width": `${props.maxWidth}px` };
    });

    const modalPadding = computed(function () {
      return { padding: `${props.padding}` };
    });

    const footerButtonFullMode = computed(function () {
      return props.fullMode
        ? "custom__modal-footer-fullMode"
        : "custom__modal-footer";
    });

    const footerTopBorder = computed(function () {
      return props.footerBorder
        ? { border: `1px solid #dadada` }
        : { border: `0px` };
    });

    return {
      overlayOnClose,
      modalMaxWidth,
      modalPadding,
      footerButtonFullMode,
      footerTopBorder,
    };
  },
};
</script>

<style scoped>
.custom__modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
}
.custom__modal-header {
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  align-items: center;
  user-select: none;
  color: #fff;
  font-style: normal;
  font-weight: bold;
}
.custom__modal-header h5 {
  margin: 0;
  font-size: 34px;
}
.custom__modal-content {
  transition: 0.5s ease;
  width: 100%;
  background: #212c46;
  box-shadow: 0 0.063rem 0.188rem 0 #000;
  border-radius: 0.75rem;
  border: 0.075rem solid #92a6c8;
  box-sizing: border-box;
  border-radius: 19px;
}
.custom__modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  margin-top: 1.563rem;
  margin-bottom: 30px;
}
.custom__modal-footer-fullMode {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 49% 49%;
}
.custom__modal button.purple {
  margin-right: 0;
}
</style>
