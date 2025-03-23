<template>
	<div class="WAL position-relative bg-grey-4" :style="style">
		<q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3 full-height" container>
			<menu-header-widget
				v-model:left-drawer-open="leftDrawerOpen"
				:current-conversation="currentConversation"
			/>

			<menu-sidebar-widget
				v-model:left-drawer-open="leftDrawerOpen"
				v-model:current-conversation-index="currentConversationIndex"
				:conversations="conversations"
			/>

			<q-page-container class="bg-grey-2 full-height">
				<q-tabs
					v-model="tab"
					inline-label
					class="bg-secondary text-white shadow-2 full-width"
				>
					<q-tab name="messages" icon="mail" label="Messages" />
					<q-tab name="disappearing" icon="alarm" label="Disappearing messages" />
					<q-tab name="settings" icon="settings" label="Settings" />
				</q-tabs>
				<router-view />
			</q-page-container>

			<q-footer v-if="route.name !== 'settings'">
				<q-toolbar class="bg-grey-3 text-black row">
					<q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
					<q-input
						v-model="message"
						rounded
						outlined
						dense
						class="WAL__field col-grow q-mr-sm"
						bg-color="white"
						placeholder="Type a message"
						@keydown.enter="sendMessage"
					/>
					<q-btn round flat icon="mic" @click="sendMessage" />
				</q-toolbar>
			</q-footer>
		</q-layout>
	</div>
</template>

<script setup>
import { useChatsStore } from '@/app/providers/stores/chats';
import { useMessagesStore } from '@/app/providers/stores/messages.js';
import MenuHeaderWidget from '@/widgets/menu/header';
import MenuSidebarWidget from '@/widgets/menu/sidebar';
import { useQuasar } from 'quasar';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const chatsStore = useChatsStore();
const messagesStore = useMessagesStore();

const conversations = computed(() => {
	return chatsStore.chatUsers;
});

const $q = useQuasar();
const tab = ref('messages');
const router = useRouter();
const route = useRoute();

watch(tab, (value) => {
	router.push({ name: value });
});

const leftDrawerOpen = ref(false);
const message = ref('');
const currentConversationIndex = ref(0);

const currentConversation = computed(() => {
	return chatsStore.chatUsers[currentConversationIndex.value];
});

function sendMessage() {
	if (message.value) {
		messagesStore.addMyMessageByIndex(currentConversationIndex.value, message.value);
		message.value = '';
	}
}

const style = computed(() => ({
	height: `${$q.screen.height}px`,
}));

onMounted(() => {
	tab.value = route.name;
});
</script>

<style lang="scss">
@import './style';
</style>
