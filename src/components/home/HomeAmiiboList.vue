<script lang="ts" setup>
import { computed, shallowRef } from 'vue';
import { Option } from '@/types';
import { Amiibo } from '@/types/amiibo';
import { debounce } from '@/utils';
import { useTemplateRef } from '@/utils/hooks';

interface Props {
  items?: Option<Amiibo>[];
  loading?: boolean;
}

const props = defineProps<Props>();

const scrollPosition = shallowRef(0);
const scrollDebounce = debounce(1200);

const visibleItems = computed(() => {
  return props.items?.slice();
});

function onScroll(e) {
  scrollDebounce(() => (scrollPosition.value = e.target.scrollTop));
}
</script>

<template>
  <div class="home-amiibo-list" @scroll="onScroll">
    <base-row gap="sm">
      <base-col v-for="item in props.items" :key="item.id" lg="3" md="4" sm="6">
        <base-card class="home-amiibo-list__item" height="320" overflow>
          <util-loading v-show="props.loading" />
          <base-text type="body-bold">{{ item.label }}</base-text>
          <img :src="item.value.image" height="250" />
        </base-card>
      </base-col>
    </base-row>
  </div>
</template>

<style lang="scss">
.home-amiibo-list {
  padding: 0 get-space('md') get-space('md');
  overflow-y: auto;
  max-height: 86vh;

  .home-amiibo-list__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: get-space('sm');

    img {
      margin-top: get-space('sm');
    }
  }
}
</style>
