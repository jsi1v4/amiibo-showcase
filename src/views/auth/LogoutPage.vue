<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAuthProvider } from '@/providers/auth';

const auth = useAuthProvider();

onMounted(() => {
  auth.logout();
});
</script>

<template>
  <div />
</template>
