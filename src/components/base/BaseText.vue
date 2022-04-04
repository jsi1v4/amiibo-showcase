<script lang="ts" setup>
import { computed } from 'vue';

type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body-bold'
  | 'body2'
  | 'body2-bold'
  | 'caption'
  | 'caption-bold';

interface Props {
  type?: Typography;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'body'
});

const tag = computed(() => {
  switch (props.type) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'body-bold':
    case 'body2-bold':
    case 'caption-bold':
      return 'strong';
    default:
      return 'span';
  }
});
</script>

<template>
  <component :class="['base-text', `base-text--${props.type}`]" :is="tag">
    <slot />
  </component>
</template>

<style lang="scss">
.base-text {
  @each $name, $type in $typography {
    &.base-text--#{$name} {
      @each $prop, $value in get-font($name) {
        #{$prop}: #{$value};
      }
      color: inherit;
    }
  }
}
</style>
