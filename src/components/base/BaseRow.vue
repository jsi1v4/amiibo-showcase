<script lang="ts" setup>
interface Props {
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  flex?: boolean;
  noWrap?: boolean;
  gap?: string; // space
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'base-row',
      props.align && `base-row--align-${props.align}`,
      props.justify && `base-row--justify-${props.justify}`,
      props.gap && `base-row--gap-${props.gap}`,
      props.flex && 'base-row--flex',
      props.noWrap && 'base-row--no-wrap'
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.base-row {
  display: flex;
  flex-wrap: wrap;

  &.base-row--align-start {
    align-items: start;
  }
  &.base-row--align-center {
    align-items: center;
  }
  &.base-row--align-end {
    align-items: end;
  }

  &.base-row--justify-start {
    justify-content: start;
  }
  &.base-row--justify-center {
    justify-content: center;
  }
  &.base-row--justify-end {
    justify-content: end;
  }
  &.base-row--justify-between {
    justify-content: space-between;
  }
  &.base-row--justify-around {
    justify-content: space-around;
  }

  @each $name, $value in $spaces {
    &.base-row--gap-#{$name} {
      --row-gap: #{$value};
      gap: var(--row-gap);
    }
  }

  &.base-row--flex {
    flex: 1 1;
  }

  &.base-row--no-wrap {
    flex-wrap: nowrap;
  }
}
</style>
