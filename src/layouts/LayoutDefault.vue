<script lang="ts" setup>
import { useAuthProvider } from '@/providers/auth';

interface Props {
  loading?: boolean;
}

const props = defineProps<Props>();

const { user } = useAuthProvider();
</script>

<template>
  <div class="layout-default">
    <app-user :title="user?.fullName" />
    <app-content>
      <base-progress-bar v-show="props.loading" />
      <slot />
    </app-content>
  </div>
</template>

<style lang="scss">
.layout-default {
  --app-bar-width: 0px;
}
</style>
