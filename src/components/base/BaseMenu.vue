<script lang="ts" setup>
import { computed, shallowRef } from 'vue';
import { Dictionary } from '@/types';
import { scrollPosition } from '@/utils';

interface Props {
  modelValue: MouseEvent | null;
  class?: string | string[] | Dictionary;
  offsetX?: string | number;
  offsetY?: string | number;
  contentClass?: string | string[] | Dictionary;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[];
}

interface Events {
  (e: 'update:modelValue', value: MouseEvent | null): void;
}

const props = withDefaults(defineProps<Props>(), {
  offsetX: 0,
  offsetY: 0
});
const emit = defineEmits<Events>();

const menuRef = shallowRef<HTMLUListElement | null>(null);

const menuCoordinates = computed(() => {
  if (!props.modelValue || !menuRef.value) {
    return;
  }

  const scroll = scrollPosition();
  const body = { w: document.body.clientWidth, h: document.body.clientHeight };
  const menu = { w: menuRef.value.clientWidth, h: menuRef.value.clientHeight };
  const click = { x: props.modelValue.pageX, y: props.modelValue.pageY };
  const offset = { x: Number(props.offsetX), y: Number(props.offsetY) };

  let top = 0,
    right = 0,
    bottom = 0,
    left = 0;

  top = click.y + offset.y;
  left = click.x + offset.x;

  if (click.y + menu.h > scroll.bottom) {
    bottom = body.h - scroll.bottom + 16 + offset.y;
    top = 0;
  }

  if (click.x + menu.w > scroll.right) {
    right = scroll.right - click.x + offset.x;
    left = 0;
  }

  return {
    top: top ? `${top}px` : undefined,
    right: right ? `${right}px` : undefined,
    bottom: bottom ? `${bottom}px` : undefined,
    left: left ? `${left}px` : undefined
  };
});

function closeMenu() {
  emit('update:modelValue', null);
}
</script>

<template>
  <teleport to="#app-portal">
    <div :class="['base-menu', props.class]" v-if="props.modelValue">
      <div class="base-menu__overlay" @click="closeMenu()" />
      <ul
        :class="['base-menu__content', props.contentClass]"
        :style="menuCoordinates"
        ref="menuRef"
      >
        <slot name="extra" />
        <template v-if="!props.items">
          <slot />
        </template>
        <template v-else>
          <template v-for="(item, i) in props.items" :key="i">
            <li class="base-menu__content__item">
              <slot name="item" :item="item">{{ item }}</slot>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </teleport>
</template>

<style lang="scss">
.base-menu {
  .base-menu__overlay {
    position: absolute;
    z-index: get-layer('overlay');
    inset: 0;
  }

  .base-menu__content {
    position: absolute;
    z-index: get-layer('above-overlay');

    box-shadow: get-shadow(2);
    border-radius: get-space('xss');
    border: get-color('grayscale', 'lighten-5');
    background-color: get-color('white');

    padding: get-space('xs') 0;

    animation: fadein 0.5s backwards;

    max-height: 300px;
    overflow-y: auto;

    .base-menu__content__item {
      list-style: none;
      padding: get-space('xss') get-space('sm');

      &:hover {
        background-color: get-color('grayscale', 'lighten-6');
      }
    }
  }
}
</style>
