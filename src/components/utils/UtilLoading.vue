<script lang="ts" setup></script>

<template>
  <div class="util-loading">
    <base-spinner class="util-loading__spinner" size="50" />
  </div>
</template>

<style lang="scss">
.util-loading {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
  z-index: get-layer('top');
  border-radius: get-space('xs');
  background-color: alpha-color('grayscale', 'lighten-5', 0.5);

  .util-loading__spinner {
    border-top-color: alpha-color('grayscale', 'lighten-5', 0.5);
  }
}
</style>
