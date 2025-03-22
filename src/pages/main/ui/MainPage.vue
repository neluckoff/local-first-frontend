<script setup lang="ts">
import {computed} from "vue";
import {useChatsStore} from "@/app/providers/stores/chats.ts";
import {useMessagesStore} from "@/app/providers/stores/messages.ts";

const chatsStore = useChatsStore();
const messagesStore = useMessagesStore();

const myMessages = computed(() => {
  return messagesStore.messages[chatsStore.activeChatIndex]?.myMessage || [];
})

const friendMessages = computed(() => {
  return messagesStore.messages[chatsStore.activeChatIndex]?.friendMessage || [];
})
</script>

<template>
  <div class="q-pa-md row justify-center">
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
</template>

<style scoped lang="scss">

</style>