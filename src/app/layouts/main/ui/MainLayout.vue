<template>
  <div class="WAL position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
      <menu-header-widget
          :current-conversation="currentConversation"
          v-model:left-drawer-open="leftDrawerOpen"
      />

      <menu-sidebar-widget
          :conversations="conversations"
          v-model:left-drawer-open="leftDrawerOpen"
          v-model:current-conversation-index="currentConversationIndex"
      />

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-grey-3 text-black row">
          <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
          <q-input
              rounded
              outlined
              dense
              class="WAL__field col-grow q-mr-sm"
              bg-color="white"
              v-model="message"
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
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import MenuHeaderWidget from "@/widgets/menu/header";
import MenuSidebarWidget from "@/widgets/menu/sidebar";
import {useChatsStore} from "@/app/providers/stores/chats";
import {useMessagesStore} from "@/app/providers/stores/messages.js";

const chatsStore = useChatsStore();
const messagesStore = useMessagesStore();

const conversations = computed(() => {
  return chatsStore.chatUsers;
})

const $q = useQuasar()

const leftDrawerOpen = ref(false)
const message = ref('')
const currentConversationIndex = ref(0)

const currentConversation = computed(() => {
  return chatsStore.chatUsers[ currentConversationIndex.value ]
})

function sendMessage() {
  if (message.value) {
    messagesStore.addMyMessageByIndex(currentConversationIndex.value, message.value);
    message.value = '';
  }
}

const style = computed(() => ({
  height: $q.screen.height + 'px'
}))
</script>

<style lang="scss">
@import './style';
</style>