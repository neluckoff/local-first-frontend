<script setup lang="ts">
interface ModalCenterProps {
  isModalOpen: boolean;
  name?: string
}

const props = defineProps<ModalCenterProps>()

defineSlots<{
  'name': { name: typeof props.name; };
  'body': void;
  'footer': void;
}>()

const emit = defineEmits<{
  (e: 'update:isModalOpen', data: boolean): void;
}>()
</script>

<template>
  <q-dialog :model-value="isModalOpen" @update:model-value="emit('update:isModalOpen', !isModalOpen)">
    <q-card>
      <q-card-section>
        <slot name="header" :name="name">
          {{ name }}
        </slot>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <slot name="body" />
      </q-card-section>

      <q-card-actions align="right">
        <slot name="footer" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
@import "./style";
</style>