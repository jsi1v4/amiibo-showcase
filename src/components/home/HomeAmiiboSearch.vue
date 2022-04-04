<script lang="ts" setup>
interface Props {
  value?: string;
  loading?: boolean;
}

interface Events {
  (e: 'handle', v: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Events>();
</script>

<template>
  <div class="home-amiibo-search">
    <base-row justify="center">
      <base-col lg="4">
        <base-form-field type="search" :model-value="props.value" @search="emit('handle', $event)">
          <template #prepend>
            <base-icon>search</base-icon>
          </template>
          <template #append>
            <template v-if="!!props.value">
              <base-btn icon @click="emit('handle', '')">
                <base-icon size="20">close</base-icon>
              </base-btn>
            </template>
          </template>
          <template #bottom>
            <base-progress-bar v-show="props.loading" />
          </template>
        </base-form-field>
      </base-col>
    </base-row>
  </div>
</template>

<style lang="scss">
.home-amiibo-search {
  padding: get-space('md');
}
</style>
