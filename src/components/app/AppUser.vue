<script lang="ts" setup>
import { shallowRef } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

interface Props {
  title?: string;
  photo?: string;
}

const props = defineProps<Props>();

const menu = shallowRef<MouseEvent | null>(null);

const router = useRouter();
const { t } = useI18n();

const menuItems = [
  {
    label: t('app.user.logout'),
    icon: 'logout',
    onClick: () => router.push(t('routes.logout'))
  }
];
</script>

<template>
  <div class="app-user">
    <base-btn @click="menu = $event" no-padding no-hover>
      <base-avatar class="app-user__avatar" :title="props.title" :photo="props.photo" />
    </base-btn>

    <base-menu :items="menuItems" v-model="menu" offset-x="40">
      <template #item="{ item }">
        <base-btn :href="item.link" target="_blank" @click="item.onClick" no-padding no-hover>
          <base-icon size="18">{{ item.icon }}</base-icon>
          <base-text type="body2">{{ item.label }}</base-text>
        </base-btn>
      </template>
    </base-menu>
  </div>
</template>

<style lang="scss">
.app-user {
  display: flex;
  position: absolute;
  margin: get-space('md');
  top: 0;
  left: 0;

  .app-user__avatar {
    background-color: get-color('primary');
  }
}
</style>
