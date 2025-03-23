<template>
	<q-card class="q-mb-md">
		<q-card-section>
			<div class="text-h6">
				Уведомления
			</div>
		</q-card-section>
		<q-card-section>
			<q-toggle :model-value="userSettings.notifications.emailNotifications" label="Email уведомления" @update:model-value="emit('update:userSettings', userSettings)" />
			<q-toggle :model-value="userSettings.notifications.pushNotifications" label="Push уведомления" @update:model-value="emit('update:userSettings', userSettings)" />
			<q-toggle :model-value="userSettings.notifications.smsNotifications" label="SMS уведомления" @update:model-value="emit('update:userSettings', userSettings)" />
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
