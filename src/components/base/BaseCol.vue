<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}

const props = withDefaults(defineProps<Props>(), {
  lg: 12
});

const breakpoints = {
  sm: 600,
  md: 960,
  lg: 1264
};

const width = computed(() => {
  const cols =
    screen.width >= breakpoints.lg
      ? props.lg
      : screen.width < breakpoints.lg && screen.width >= breakpoints.md
      ? props.md || props.lg
      : props.sm || props.md || props.lg;
  return `calc(${(100 / (12 / Number(cols))).toFixed(2)}% - var(--row-gap, 0px))`;
});
</script>

<template>
  <div
    :class="[
      'base-col',
      props.align && `base-col--align-${props.align}`,
      props.justify && `base-col--justify-${props.justify}`
    ]"
    :style="{ width }"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.base-col {
  display: flex;
  flex-direction: column;

  &.base-col--align-start {
    align-items: start;
  }
  &.base-col--align-center {
    align-items: center;
  }
  &.base-col--align-end {
    align-items: end;
  }

  &.base-col--justify-start {
    justify-content: start;
  }
  &.base-col--justify-center {
    justify-content: center;
  }
  &.base-col--justify-end {
    justify-content: end;
  }
}
</style>
