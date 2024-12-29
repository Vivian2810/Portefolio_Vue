<script lang="ts">
export default {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: "#00BFFF",
    },
  },
};
</script>

<template>
  <div>
    <slot></slot>

    <div
      class="spinner"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        border: `2px solid ${color}`,
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }"
    ></div>
  </div>
</template>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
