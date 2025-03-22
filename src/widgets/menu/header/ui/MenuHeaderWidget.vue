<script setup lang="ts">
interface MenuHeaderProps {
  currentConversation: object;
  leftDrawerOpen: boolean;
}

const props = defineProps<MenuHeaderProps>()
const emit = defineEmits<{
  (e: 'update:leftDrawerOpen', data: boolean): void;
}>()

function toggleLeftDrawer() {
  emit("update:leftDrawerOpen", !props.toggleLeftDrawer)
}
</script>

<template>
  <q-header elevated>
    <q-toolbar class="bg-grey-3 text-black">
      <q-btn
          round
          flat
          icon="keyboard_arrow_left"
          class="WAL__drawer-open q-mr-sm"
          @click="toggleLeftDrawer"
      />

      <q-btn round flat>
        <q-avatar>
          <img :src="currentConversation.avatar">
        </q-avatar>
      </q-btn>

      <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>

      <q-space/>

      <q-btn round flat icon="search" />
      <q-btn round flat>
        <q-icon name="attachment" class="rotate-135" />
      </q-btn>
      <q-btn round flat icon="more_vert">
        <q-menu auto-close :offset="[110, 0]">
          <q-list style="min-width: 150px">
            <q-item clickable>
              <q-item-section>Контактная информация</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Блокировать</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Выбрать сообщения</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Выключить уведомления</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Удалить переписку</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">

</style>