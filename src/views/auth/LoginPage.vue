<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAuthProvider } from '@/providers/auth';

const auth = useAuthProvider();

onMounted(() => {
  auth.login();
});
</script>

<template>
  <div />
</template>
