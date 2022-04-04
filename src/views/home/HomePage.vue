<script lang="ts" setup>
import { useHomeController } from '@/hooks/home';

const { amiiboList, search, handleSearch, loading } = useHomeController();
</script>

<template>
  <layout-default>
    <home-amiibo-search :loading="!amiiboList?.length" :value="search" @handle="handleSearch" />
    <home-amiibo-list :loading="loading" :items="amiiboList" />
  </layout-default>
</template>
