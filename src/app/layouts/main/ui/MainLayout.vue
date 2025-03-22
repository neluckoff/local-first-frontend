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
          <q-input rounded outlined dense class="WAL__field col-grow q-mr-sm" bg-color="white" v-model="message" placeholder="Type a message" />
          <q-btn round flat icon="mic" />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import PersonItemComponent from "@/components/person-item/index.js";
import MenuHeaderWidget from "@/widgets/menu/header/index.js";
import MenuSidebarWidget from "@/widgets/menu/sidebar/index.js";

const conversations = [
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
]

const $q = useQuasar()

const leftDrawerOpen = ref(false)
const message = ref('')
const currentConversationIndex = ref(0)

const currentConversation = computed(() => {
  return conversations[ currentConversationIndex.value ]
})

const style = computed(() => ({
  height: $q.screen.height + 'px'
}))
</script>

<style lang="scss">
@import './style';
</style>