import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ChatUser {
    id: number;
    person: string;
    avatar: string;
    caption: string;
    time: string;
    sent: boolean;
    deleted?: boolean;
}

export const useChatsStore = defineStore('chats', () => {
    const chatUsers = ref<ChatUser[]>([
        {
            id: 1,
            person: 'Razvan Stoenescu',
            avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
            caption: 'I\'m working on Quasar!',
            time: '15:00',
            sent: true
        },
        {
            id: 2,
            person: 'Dan Popescu',
            avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
            caption: 'I\'m working on Quasar!',
            time: '16:00',
            sent: true
        },
        {
            id: 3,
            person: 'Jeff Galbraith',
            avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
            caption: 'I\'m working on Quasar!',
            time: '18:00',
            sent: true
        },
        {
            id: 4,
            person: 'Allan Gaunt',
            avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
            caption: 'I\'m working on Quasar!',
            time: '17:00',
            sent: true
        }
    ]);

    function addChatUser(user: ChatUser) {
        chatUsers.value.push(user)
    }

    return {
        chatUsers,
        addChatUser
    };
});
