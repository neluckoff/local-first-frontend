<template>
	<q-card class="q-mb-md">
		<q-card-section>
			<div class="text-h6">
				Профиль
			</div>
		</q-card-section>
		<q-card-section>
			<q-input :model-value="userSettings.profile.name" label="Имя" @update:model-value="emit('update:userSettings', userSettings)" />
			<q-input :model-value="userSettings.profile.email" label="Email" type="email" @update:model-value="emit('update:userSettings', userSettings)" />
			<q-input :model-value="userSettings.profile.phone" label="Телефон" @update:model-value="emit('update:userSettings', userSettings)" />
		</q-card-section>
	</q-card>
</template>

<script setup lang="ts">
interface ISettingsProfileProps {
	userSettings: Record<string, Record<string, any>>;
}

const props = defineProps<ISettingsProfileProps>();

const emit = defineEmits<{
	(e: 'update:userSettings', data: typeof props.userSettings): void;
}>();
</script>

<style scoped lang="scss">

</style>
