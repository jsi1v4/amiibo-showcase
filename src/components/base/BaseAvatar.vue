<script lang="ts" setup>
import { computed } from 'vue';
import { getInitials } from '@/utils';

interface Props {
  title?: string;
  photo?: string;
  size?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 36
});

const initials = computed(() => getInitials(props.title));
const styles = computed(() => ({
  height: `${props.size}px`,
  width: `${props.size}px`
}));
</script>

<template>
  <div :class="['base-avatar']" :style="styles" :title="props.title">
    <img
      v-if="props.photo"
      class="base-avatar__photo"
      :alt="`${props.title} avatar`"
      :src="props.photo"
      :style="styles"
    />
    <span v-else class="base-avatar__initials">{{ initials }}</span>
  </div>
</template>

<style lang="scss">
.base-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .base-avatar__photo {
    border-radius: 50%;
  }

  .base-avatar__initials {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: $font-family;
    font-size: get-font-size('body2-bold');
    font-weight: get-font-weight('body2-bold');
    line-height: get-font-line-height('body2-bold');
    color: get-color('white');
  }
}
</style>
