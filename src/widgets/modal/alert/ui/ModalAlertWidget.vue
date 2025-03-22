<script setup lang="ts">
import ModalCenterComponent from "@/components/modal-center";
import ButtonComponent from "@/components/button";

interface ModalCenterProps {
  isModalOpen: boolean;
}

const props = defineProps<ModalCenterProps>()

const emit = defineEmits<{
  (e: 'update:isModalOpen', data: boolean): void;
}>()

</script>

<template>
  <modal-center-component
      :is-modal-open="isModalOpen"
      @update:is-modal-open="(e) => emit('update:isModalOpen', e)"
  >
    <template #header>
      <p>Внимание!</p>
    </template>
    <template #body>
      <p>Пока функция создания нового чата не реализована. Подождите, пожалуйтса.</p>
    </template>
    <template #footer>
      <button-component label="Хорошо" @click="emit('update:isModalOpen', false)" v-close-popup variant="primary" />
    </template>
  </modal-center-component>
</template>

<style scoped lang="scss">
@import "./style";
</style>