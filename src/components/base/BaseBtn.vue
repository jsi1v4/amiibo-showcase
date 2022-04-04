<script lang="ts" setup>
interface Props {
  // config
  to?: string;
  href?: string;
  replace?: boolean;
  // style
  outline?: boolean;
  fill?: boolean;
  // extra
  icon?: boolean;
  block?: boolean;
  noPadding?: boolean;
  noHover?: boolean;
  inline?: boolean;
  submit?: boolean;
  disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <component
    :class="[
      'base-btn',
      {
        'base-btn--outline': props.outline,
        'base-btn--fill': props.fill,
        'base-btn--block': props.block,
        'base-btn--icon': props.icon,
        'base-btn--no-padding': props.noPadding,
        'base-btn--no-hover': props.noHover,
        'base-btn--inline': props.inline,
        'base-btn--disabled': props.disabled
      }
    ]"
    :is="props.to ? 'router-link' : props.href ? 'a' : 'button'"
    :to="props.to"
    :href="props.href"
    :replace="props.replace"
    :disabled="props.disabled"
    :type="props.submit ? 'submit' : 'button'"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.base-btn {
  background: none;
  border: none;
  text-decoration: none;

  border-radius: 4px;
  padding: get-space('xss') get-space('md');

  font-size: get-font-size('body2-bold');
  font-weight: get-font-weight('body2-bold');
  line-height: get-font-line-height('body2-bold');
  color: inherit;

  display: flex;
  align-items: center;
  gap: get-space('xs');

  cursor: pointer;

  &:not(.base-btn--no-hover):not(.base-btn--disabled):hover {
    background-color: alpha-color('grayscale', 'lighten-2', 0.1);
  }

  &.base-btn--outline {
    border: 1px solid get-color('primary');
    color: get-color('primary');
  }

  &.base-btn--fill {
    background-color: get-color('primary');
    color: get-color('white');

    &:not(.base-btn--no-hover):not(.base-btn--disabled):hover {
      background-color: get-color('primary', 'darken-1');
    }
  }

  &.base-btn--icon {
    padding: get-space('xss');
    border-radius: 50%;
    margin: -#{get-space('xss')};
  }

  &.base-btn--block {
    width: 100%;
  }

  &.base-btn--inline {
    display: inline-flex;
  }

  &.base-btn--no-padding {
    padding: get-space('xss');
  }

  &.base-btn--disabled {
    background-color: get-color('grayscale', 'lighten-3');
    color: get-color('grayscale', 'lighten-1');
  }
}
</style>
