import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Messages {
	myMessage: string[];
	friendMessages: string[];
}

export const useMessagesStore = defineStore('messages', () => {
	const messages = ref<Record<number, Messages>>({});

	function addMyMessageByIndex(index: number, message: string) {
		if (messages.value[index]) {
			messages.value[index].myMessage.push(message);
		} else {
			messages.value[index] = {
				myMessage: [],
				friendMessages: [],
			};
			messages.value[index].myMessage.push(message);
		}
	}

	return {
		messages,
		addMyMessageByIndex,
	};
});
