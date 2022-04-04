<script lang="ts" setup>
import { createHttpProvider } from '@/providers/http';

createHttpProvider();
</script>

<template>
  <slot />
</template>
