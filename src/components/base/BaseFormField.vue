<script lang="ts" setup>
import { computed, ref, shallowRef, watch } from 'vue';
import { Option } from '@/types';
import { debounce, preventDefault } from '@/utils';

type FormFieldTypes = 'text' | 'number' | 'search' | 'select' | 'autocomplete' | 'api-autocomplete';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormFieldValue<T = any> = T;

interface Props {
  type: FormFieldTypes;
  label?: string;
  placeholder?: string;
  hint?: string;
  textNothing?: string;
  rows?: string | number;
  required?: boolean;
  readonly?: boolean;
  block?: boolean;
  items?: Option[];

  multiple?: boolean;

  modelValue?: FormFieldValue;
}

interface Events {
  (e: 'update:modelValue', v: FormFieldValue): void;
  (e: 'search', v: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Events>();

const element = computed(() => {
  switch (props.type) {
    case 'select':
      return 'select';
    default:
      if (props.rows) return 'textarea';
      return 'input';
  }
});

const elementHandlers = computed(() => {
  switch (props.type) {
    case 'select':
      return { keydown: preventDefault(openDropdown), mousedown: preventDefault() };
    default:
      return { input: handleInput };
  }
});

const value = computed(() => {
  switch (props.type) {
    case 'select':
    case 'autocomplete':
    case 'api-autocomplete':
      if (props.multiple) {
        const v = (props.modelValue || []) as Option[];
        return v?.map((x) => x.label).join(', ');
      } else {
        const v = props.modelValue as Option | undefined;
        return v?.label;
      }
    default:
      return props.modelValue;
  }
});

const hasDropdown = computed(() => {
  if (props.readonly) return false;

  switch (props.type) {
    case 'select':
    case 'autocomplete':
    case 'api-autocomplete':
      return true;
    default:
      return false;
  }
});

const dropdownOpened = ref(false);

function openDropdown() {
  if (hasDropdown.value) {
    dropdownOpened.value = true;
  }
}

function closeDropdown() {
  dropdownOpened.value = false;
}

function handleValue(v: FormFieldValue) {
  if (props.readonly) return;

  emit('update:modelValue', v);

  if (hasDropdown.value && (!v || !props.multiple)) {
    closeDropdown();
  }
}

function handleEmpty() {
  handleValue(undefined);
}

function handleItem(v: Option) {
  if (props.multiple) {
    const current = (props.modelValue || []) as Option[];
    if (itemMultipleIsActive(v)) {
      handleValue(current.filter((x) => x.id !== v.id));
    } else {
      handleValue([...current, v]);
    }
  } else {
    handleValue(v);
  }
}

function itemIsActive(o: Option) {
  if (hasDropdown.value) {
    if (props.multiple) {
      const value = props.modelValue as Option[] | undefined;
      return value?.[value.length - 1]?.id === o.id;
    } else {
      const value = props.modelValue as Option | undefined;
      return value?.id === o.id;
    }
  }
}

function itemMultipleIsActive(o: Option) {
  if (hasDropdown.value) {
    if (props.multiple) {
      const value = props.modelValue as Option[] | undefined;
      return value?.some((x) => x.id === o.id);
    }
  }
}

const lazyInput = debounce(1200);

const filteredItems = shallowRef<Option[]>(props.items || []);

const amountFiltered = computed(() => (props.items?.length || 0) - filteredItems.value.length);

const search = shallowRef('');

function handleInput(e: Event) {
  const input = e.target as HTMLInputElement;

  switch (props.type) {
    case 'text':
      handleValue(input.value);
      break;
    case 'number':
      handleValue(Number(input.value));
      break;
    case 'search':
      handleValue(input.value);
      lazyInput(() => {
        if (input.value && input.value.length > 2) {
          emit('search', input.value);
        }
      });
      break;
    case 'api-autocomplete':
      lazyInput(() => {
        search.value = input.value;
        if (input.value && input.value.length > 2) {
          emit('search', input.value);
        }
      });
      break;
    case 'autocomplete':
      lazyInput(() => {
        search.value = input.value;
        filteredItems.value =
          props.items?.filter((x) =>
            input.value ? `${x.id}-${x.label}`.toLowerCase().includes(input.value) : true
          ) || [];
      });
      break;
  }
}

function handleClearSearch() {
  search.value = '';
  filteredItems.value = props.items || [];
}

if (hasDropdown.value) {
  watch(
    () => props.items,
    () => {
      filteredItems.value = props.items || [];
    }
  );
}
</script>

<template>
  <div class="base-form-field">
    <div class="base-form-field__wrapper">
      <label v-show="props.label" class="base-form-field__label" for="base-form-field">
        {{ props.label }}
        <span v-show="props.required" class="base-form-field__label__required">*</span>
      </label>

      <div
        :class="[
          'base-form-field__container',
          {
            'base-form-field__container--textarea': !!props.rows
          }
        ]"
        @click="openDropdown"
      >
        <slot name="prepend" />
        <div class="base-form-field__control-wrapper">
          <component
            :is="element"
            id="base-form-field"
            :class="[
              'base-form-field__control',
              {
                'base-form-field__readonly': props.readonly,
                'base-form-field__placeholder': !value
              }
            ]"
            :placeholder="props.placeholder"
            :rows="props.rows"
            :required="props.required"
            :readonly="props.readonly || !!search"
            :value="value"
            v-bind="props.type === 'number' ? { type: 'number' } : undefined"
            v-on="elementHandlers"
            autocomplete="off"
          >
            <template v-if="element === 'select'">
              <option v-show="props.placeholder" value="">{{ props.placeholder }}</option>
              <option :value="value">{{ value || props.placeholder }}</option>
            </template>
          </component>
          <input
            v-if="search"
            class="base-form-field__control base-form-field__control--search"
            :value="search"
            @input="handleInput"
            autocomplete="off"
          />
        </div>
        <slot name="append" />
      </div>

      <template v-if="hasDropdown && dropdownOpened">
        <div class="base-form-field__overlay" @click="closeDropdown" />
        <ul class="base-form-field__items" :style="{ right: props.block ? 0 : undefined }">
          <li
            v-show="!props.required"
            class="base-form-field__items__item base-form-field__placeholder"
            @click="handleEmpty"
          >
            {{ props.textNothing || $t('base-components.form-field-nothing') }}
          </li>
          <li
            v-show="search"
            class="base-form-field__items__item base-form-field__placeholder"
            @click="handleClearSearch"
          >
            {{ $t('base-components.form-field-clear') }}
            {{
              props.type === 'autocomplete'
                ? $t('base-components.form-field-filtered', { v: amountFiltered })
                : ''
            }}
          </li>
          <li
            v-for="(item, i) in filteredItems"
            :key="`${i}-${itemMultipleIsActive(item)}`"
            class="base-form-field__items__item"
            :active="itemIsActive(item)"
            @click="handleItem(item)"
          >
            <slot name="item" :item="item" :active="itemMultipleIsActive(item)">
              {{ item.label }}
            </slot>
          </li>
        </ul>
      </template>
    </div>
    <div class="base-form-field__bottom">
      <slot name="bottom" />
      <span v-show="props.hint" class="base-form-field__hint">{{ props.hint }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.base-form-field {
  --height: 40px;
  position: relative;

  .base-form-field__wrapper {
    position: relative;
    border: 1px solid get-color('grayscale', 'lighten-3');
    background-color: get-color('white');
    min-height: var(--height);
    border-radius: 4px;
  }

  .base-form-field__label {
    position: absolute;
    background-color: get-color('white');
    font-size: get-font-size('caption');
    font-weight: get-font-weight('caption');
    line-height: get-font-line-height('caption');
    color: get-color('grayscale', 'lighten-1');
    top: 0;
    margin-top: -#{get-space('sm') - 2px};
    margin-left: get-space('xs');
    padding: 0 get-space('xss');

    .base-form-field__label__required {
      color: get-color('error');
    }
  }

  .base-form-field__container {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: get-layer('above-overlay');
    inset: 0;
    padding: get-space('xss') get-space('xs');

    &.base-form-field__container--textarea {
      position: relative;
      align-items: flex-start;
      padding: get-space('xs');
    }
  }

  .base-form-field__overlay {
    position: fixed;
    z-index: get-layer('overlay');
    inset: 0;
  }

  .base-form-field__items {
    position: absolute;
    z-index: get-layer('below-top');
    top: calc(var(--height) + 2px);
    left: 0;
    // right: 0;

    box-shadow: get-shadow(2);
    border-radius: get-space('xss');
    border: get-color('grayscale', 'lighten-5');
    background-color: get-color('white');
    padding: get-space('xs') 0;

    animation: fadein 0.5s backwards;

    max-height: 200px;
    overflow-y: auto;

    .base-form-field__items__item {
      list-style: none;
      padding: get-space('xss') get-space('sm');
      cursor: pointer;

      &:hover {
        background-color: get-color('grayscale', 'lighten-6');
      }

      &[active='true'] {
        background-color: get-color('grayscale', 'lighten-5');
      }
    }
  }

  .base-form-field__control-wrapper {
    display: flex;
    position: relative;
    flex: 1 1;
    height: 100%;
    overflow-y: auto;
  }

  .base-form-field__control,
  .base-form-field__control-search {
    flex: 1 1;
    width: 100%;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0 get-space('xss');

    &:focus {
      outline: none;
    }

    &.base-form-field__control--search {
      margin-left: get-space('xs');
      color: get-color('grayscale', 'lighten-1');
    }
  }
  .base-form-field__readonly,
  .base-form-field__control::placeholder,
  .base-form-field__placeholder {
    color: get-color('grayscale', 'lighten-1');
    font-size: get-font-size('body2');
  }

  .base-form-field__hint {
    font-size: get-font-size('caption');
    font-weight: get-font-weight('caption');
    line-height: get-font-line-height('caption');
    color: get-color('grayscale', 'lighten-2');
  }

  .base-form-field__bottom {
    width: calc(100% - #{get-space('xs')});
    margin: 0 auto;
    border-bottom-left-radius: get-space('xss');
    border-bottom-right-radius: get-space('xss');
    overflow: auto;
    line-height: get-font-line-height('caption');
  }
}
</style>
