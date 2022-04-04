<script lang="ts" setup>
import { computed } from 'vue';
import { Dictionary } from '@/types';

interface Props {
  modelValue?: boolean;
  class?: string | string[] | Dictionary;
  contentClass?: string | string[] | Dictionary;
  width?: string | number;
}

interface Events {
  (e: 'update:modelValue', value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Events>();

const width = computed(() => {
  if (Number(props.width)) {
    return `${props.width}px`;
  }
  return props.width;
});

function closeMenu() {
  emit('update:modelValue', false);
}
</script>

<template>
  <teleport to="#app-portal">
    <div :class="['base-dialog', props.class]" v-if="props.modelValue">
      <div class="base-dialog__overlay" @click="closeMenu()" />
      <div :class="['base-dialog__content', props.contentClass]" :style="{ width }">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang="scss">
.base-dialog {
  position: fixed;
  z-index: get-layer('above-base');
  inset: 0;
  overflow-y: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .base-dialog__overlay {
    position: absolute;
    z-index: get-layer('overlay');
    inset: 0;

    background-color: alpha-color('grayscale', 'base', 0.4);
    animation: fadein 0.5s;
  }

  .base-dialog__content {
    position: absolute;
    z-index: get-layer('above-overlay');

    animation: fadein 1s backwards;
    max-width: 80vw;
  }
}
</style>
