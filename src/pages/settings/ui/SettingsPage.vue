<template>
	<q-page class="q-pa-md">
		<div class="text-h4 q-mb-md">
			Настройки пользователя
		</div>

		<!-- Блок профиля -->
		<settings-profile-view
			v-model:user-settings="userSettings"
		/>

		<!-- Блок уведомлений -->
		<settings-notify-view
			v-model:user-settings="userSettings"
		/>

		<!-- Блок приватности -->
		<settings-privacy-view
			v-model:user-settings="userSettings"
		/>

		<!-- Блок безопасности -->
		<settings-privacy-view
			v-model:user-settings="userSettings"
		/>
	</q-page>
</template>

<script setup lang="ts">
import SettingsNotifyView from '@/pages/settings/views/notify';
import SettingsPrivacyView from '@/pages/settings/views/privacy';
import SettingsProfileView from '@/pages/settings/views/profile';
import { ref } from 'vue';

// Пример данных для настроек
const userSettings = ref({
	profile: {
		name: 'Иван Иванов',
		email: 'ivan@example.com',
		phone: '+7 (999) 123-45-67',
	},
	notifications: {
		emailNotifications: true,
		pushNotifications: false,
		smsNotifications: true,
	},
	privacy: {
		showProfile: true,
		showEmail: false,
		showPhone: true,
	},
	security: {
		twoFactorAuth: false,
		passwordChangeRequired: true,
	},
});
</script>

<style scoped lang="scss">
@import "./style";
</style>
