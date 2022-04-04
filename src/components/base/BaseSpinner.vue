<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  size?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 26
});

const style = computed(() => {
  if (Number(props.size)) {
    return { height: `${props.size}px`, width: `${props.size}px` };
  }
  return { height: props.size, width: props.size };
});
</script>

<template>
  <div class="base-spinner" :style="style" />
</template>

<style lang="scss">
.base-spinner {
  border: 4px solid get-color('primary', 'lighten-1');
  border-top: 4px solid get-color('primary', 'lighten-2');
  border-radius: 50%;
  animation: spin 1s linear infinite, fadein 1s ease;
}
</style>
