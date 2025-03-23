<template>
	<q-page>
		<div class="q-pa-md row justify-center full-height">
			<div style="width: 100%; max-width: 400px">
				<q-chat-message
					:text="myMessages"
					sent
				/>
				<q-chat-message
					:text="friendMessages"
				/>
			</div>
		</div>
	</q-page>
</template>

<script setup lang="ts">
import { useChatsStore } from '@/app/providers/stores/chats.ts';
import { useMessagesStore } from '@/app/providers/stores/messages.ts';
import { computed } from 'vue';

const chatsStore = useChatsStore();
const messagesStore = useMessagesStore();

const myMessages = computed(() => {
	return messagesStore.messages[chatsStore.activeChatIndex]?.myMessage || [];
});

const friendMessages = computed(() => {
	return messagesStore.messages[chatsStore.activeChatIndex]?.friendMessage || [];
});
</script>

<style scoped lang="scss">
@import "./style";
</style>
