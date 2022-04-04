<script lang="ts" setup></script>

<template>
  <div class="app-content">
    <slot />
  </div>
</template>

<style lang="scss">
.app-content {
  display: block;
  min-height: 100vh;
  position: relative;
  z-index: get-layer('base');

  padding-left: var(--app-bar-width);
}
</style>
