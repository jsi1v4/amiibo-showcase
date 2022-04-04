<script lang="ts" setup>
import { createApiProvider } from '@/providers/api';

createApiProvider();
</script>

<template>
  <slot />
</template>
