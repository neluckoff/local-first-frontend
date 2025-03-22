<script setup lang="ts">
import PersonItemComponent from "@/components/person-item";
import {ref, watch} from "vue";
import ModalAlertWidget from "@/widgets/modal/alert/ui/ModalAlertWidget.vue";
import {useChatsStore} from "@/app/providers/stores/chats.ts";

interface MenuHeaderProps {
  conversations: object[];
  leftDrawerOpen: boolean;
  currentConversationIndex: number;
}

const chatsStore = useChatsStore();

const search = ref('')
const isAlertModalOpen = ref(false)

const props = defineProps<MenuHeaderProps>()
const emit = defineEmits<{
  (e: 'update:leftDrawerOpen', data: boolean): void;
  (e: 'update:currentConversationIndex', data: number): void;
}>()

watch(() => props.currentConversationIndex, (index) => {
  chatsStore.setActiveChatIndex(index);
}, { immediate: true })

function toggleLeftDrawer() {
  emit("update:leftDrawerOpen", !props.toggleLeftDrawer)
}

function setCurrentConversation(index) {
  emit("update:currentConversationIndex", index);
}
</script>

<template>
    <q-drawer
        :model-value="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
        @update:model-value="toggleLeftDrawer"
    >
      <q-toolbar class="bg-grey-3">
        <q-avatar class="cursor-pointer">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>

        <q-space />

        <q-btn round flat icon="message" @click="isAlertModalOpen = true" />
        <q-btn round flat icon="more_vert">
          <q-menu auto-close :offset="[110, 8]">
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section>Создать группу</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Профиль</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Арихив</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Избранное</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Настройки</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Выйти</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
            round
            flat
            icon="close"
            class="WAL__drawer-close"
            @click="toggleLeftDrawer"
        />
      </q-toolbar>

      <q-toolbar class="bg-grey-2">
        <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>

      <q-scroll-area style="height: calc(100% - 100px)">
        <q-list>
          <person-item-component
              v-for="(conversation, index) in conversations"
              :key="conversation.id"
              :avatar="conversation.avatar"
              :name="conversation.person"
              :caption="conversation.caption"
              :time="conversation.time"
              :is-message-sent="conversation.sent"
              :is-deleted="conversation.deleted"
              @click="setCurrentConversation(index)"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <modal-alert-widget
      v-model:is-modal-open="isAlertModalOpen"
    />
</template>

<style scoped lang="scss">

</style>