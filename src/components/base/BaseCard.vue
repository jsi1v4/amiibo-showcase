<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  height?: number | string;
  width?: number | string;
  noTop?: boolean;
  noBottom?: boolean;
  overflow?: boolean;
}

const props = defineProps<Props>();

const height = computed(() => {
  if (Number(props.height)) {
    return `${props.height}px`;
  }
  return props.height;
});

const width = computed(() => {
  if (Number(props.width)) {
    return `${props.width}px`;
  }
  return props.width;
});
</script>

<template>
  <div
    :class="[
      'base-card',
      {
        'base-card--no-top': props.noTop,
        'base-card--no-bottom': props.noBottom,
        'base-card--overflow': props.overflow
      }
    ]"
    :style="{ height, width }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.base-card {
  display: block;
  border-radius: 8px;
  background-color: get-color('white');
  box-shadow: get-shadow(2);
  position: relative;

  &.base-card--no-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &.base-card--no-bottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.base-card--overflow {
    overflow: hidden;
  }
}
</style>
