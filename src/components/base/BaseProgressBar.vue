<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  height?: number | string;
}

const props = defineProps<Props>();

const height = computed(() => {
  if (Number(props.height)) {
    return `${props.height}px`;
  }
  return props.height;
});
</script>

<template>
  <div class="base-progress-bar" :style="{ height }">
    <div class="base-progress-bar__value" />
  </div>
</template>

<style lang="scss">
.base-progress-bar {
  height: 3px;
  background-color: alpha-color('grayscale', 'base', 0.2);
  width: 100%;
  overflow: hidden;

  .base-progress-bar__value {
    width: 100%;
    height: 100%;
    background-color: get-color('grayscale');
    animation: indeterminate 1s infinite linear;
    transform-origin: 0% 50%;
  }
}
</style>
