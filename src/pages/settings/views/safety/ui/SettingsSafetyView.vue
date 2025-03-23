<template>
	<q-card class="q-mb-md">
		<q-card-section>
			<div class="text-h6">
				Безопасность
			</div>
		</q-card-section>
		<q-card-section>
			<q-toggle :model-value="userSettings.security.twoFactorAuth" label="Двухфакторная аутентификация" @update:model-value="emit('update:userSettings', userSettings)" />
			<q-toggle :model-value="userSettings.security.passwordChangeRequired" label="Требовать смены пароля" @update:model-value="emit('update:userSettings', userSettings)" />
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
