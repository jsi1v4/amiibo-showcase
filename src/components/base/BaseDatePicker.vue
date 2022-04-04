<script lang="ts" setup>
import { computed, onMounted, shallowRef, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { Instance } from 'flatpickr/dist/types/instance';
import 'flatpickr/dist/flatpickr.css';

import { ISODate } from '@/types';
import { LANG } from '@/i18n/types';

interface Props {
  modelValue: ISODate | [ISODate, ISODate] | ISODate[];
  mode?: 'single' | 'multiple' | 'range';
  placeholder?: string;
}

interface Events {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: 'update:modelValue', v: any): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Events>();

const { locale } = useI18n();
const instance = shallowRef<Instance | null>(null);
const element = shallowRef<HTMLElement | null>(null);

const resolveLocale = computed(() => {
  switch (locale.value) {
    case LANG.PT:
      return Portuguese;
    default:
      return undefined;
  }
});

function restoreValue() {
  instance.value?.setDate(props.modelValue);
}

function onChange(dates: Date[]) {
  switch (props.mode) {
    case 'single':
      emit('update:modelValue', dates[0].toISOString());
      break;
    default:
      if (dates.length < 2) return;
      emit(
        'update:modelValue',
        dates.map((d) => d.toISOString())
      );
      break;
  }
}

function onClose(dates: Date[]) {
  switch (props.mode) {
    case 'single':
      break;
    default:
      if (dates.length < 2) {
        restoreValue();
      }
      break;
  }
}

function createPicker() {
  if (!element.value) return;
  instance.value = flatpickr(element.value, {
    mode: props.mode,
    locale: resolveLocale.value,
    dateFormat: 'd/m/y',
    defaultDate: props.modelValue,
    onChange,
    onClose
  });
}

onMounted(() => {
  createPicker();
});

watchEffect(() => {
  restoreValue();
});
</script>

<template>
  <div class="base-date-picker">
    <slot name="prepend" />
    <input
      class="base-date-picker__input"
      :placeholder="props.placeholder"
      ref="element"
      autocomplete="off"
    />
    <slot name="append" />
  </div>
</template>

<style lang="scss">
.base-date-picker {
  --height: 40px;

  display: flex;
  align-items: center;
  border: 1px solid get-color('grayscale', 'lighten-3');
  background-color: get-color('white');
  min-height: var(--height);
  border-radius: 4px;
  padding: get-space('xss') get-space('xs');

  .base-date-picker__input {
    display: flex;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    background-color: transparent;
    margin: 0 get-space('xss');

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: get-color('grayscale', 'lighten-1');
      font-size: get-font-size('body2');
    }
  }
}

.flatpickr-day {
  &.selected,
  &.startRange,
  &.endRange {
    background-color: get-color('primary', 'lighten-1');
    border-color: get-color('primary', 'lighten-1');

    &.inRange,
    &.prevMonthDay,
    &.nextMonthDay {
      background-color: get-color('primary', 'lighten-2');
      border-color: get-color('primary', 'lighten-2');
    }

    &:focus {
      background-color: get-color('primary', 'lighten-2');
      border-color: get-color('primary', 'lighten-2');
    }

    &:hover {
      background-color: get-color('primary');
      border-color: get-color('primary');
    }
  }

  &.today {
    border-color: get-color('primary', 'lighten-1');
  }
  &.today:hover,
  &.today:focus {
    border-color: get-color('primary', 'lighten-1');
    background: get-color('primary', 'lighten-1');
  }

  &.selected.startRange + .endRange:not(:nth-child(7n + 1)),
  &.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
  &.endRange.startRange + .endRange:not(:nth-child(7n + 1)) {
    -webkit-box-shadow: -10px 0 0 get-color('primary', 'lighten-1');
    box-shadow: -10px 0 0 get-color('primary', 'lighten-1');
  }

  &.week.selected {
    -webkit-box-shadow: -5px 0 0 get-color('primary', 'lighten-1'),
      5px 0 0 get-color('primary', 'lighten-1');
    box-shadow: -5px 0 0 get-color('primary', 'lighten-1'),
      5px 0 0 get-color('primary', 'lighten-1');
  }
}
</style>
