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
			<button-component v-close-popup label="Хорошо" variant="primary" @click="emit('update:isModalOpen', false)" />
		</template>
	</modal-center-component>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/button';
import ModalCenterComponent from '@/components/modal-center';

interface ModalCenterProps {
	isModalOpen: boolean;
}

defineProps<ModalCenterProps>();

const emit = defineEmits<{
	(e: 'update:isModalOpen', data: boolean): void;
}>();
</script>

<style scoped lang="scss">
@import "./style";
</style>
