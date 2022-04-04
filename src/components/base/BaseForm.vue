<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { getFormControls } from '@/utils';

interface Events {
  (e: 'submit'): void;
}

const emit = defineEmits<Events>();

const { t } = useI18n();

const form = ref<HTMLFormElement | null>(null);

function submit() {
  if (!form.value) return;

  const controls = getFormControls(form.value);
  const isValid = controls.every((c) => {
    const valid = c.required ? !!c.value : true;
    if (!valid) {
      c.setCustomValidity(t('base-components.form-field-required'));
    }
    return valid;
  });

  if (isValid) {
    emit('submit');
  } else {
    form.value.reportValidity();
  }
}
</script>

<template>
  <form class="base-form" ref="form" @submit.prevent="submit">
    <slot />
  </form>
</template>

<style lang="scss">
.base-form {
  display: flex;
  flex-direction: column;
}
</style>
