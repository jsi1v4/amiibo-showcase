<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  size?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24
});

const space = computed(() => {
  if (!Number(props.size)) {
    return props.size;
  }
  return undefined;
});

const fontSize = computed(() => {
  if (Number(props.size)) {
    return `${props.size}px`;
  }
  return undefined;
});
</script>

<template>
  <i :class="['base-icon', space && `base-icon--${space}`]" :style="{ fontSize }">
    <slot />
  </i>
</template>

<style lang="scss">
.base-icon {
  font-family: $font-icons;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  @each $name, $value in $spaces {
    &.base-icon--#{$name} {
      width: $value;
      height: $value;
    }
  }
}
</style>
