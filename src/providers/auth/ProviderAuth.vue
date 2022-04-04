<script lang="ts" setup>
import { createAuthProvider } from '@/providers/auth';

createAuthProvider();
</script>

<template>
  <slot />
</template>
