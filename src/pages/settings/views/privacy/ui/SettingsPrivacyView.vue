<script setup lang="ts">
interface ISettingsProfileProps {
  userSettings: Record<string, Record<string, any>>
}

const props = defineProps<ISettingsProfileProps>()

const emit = defineEmits<{
  (e: 'update:userSettings', data: typeof props.userSettings): void
}>()
</script>

<template>
  <q-card class="q-mb-md">
    <q-card-section>
      <div class="text-h6">Приватность</div>
    </q-card-section>
    <q-card-section>
      <q-toggle v-model="userSettings.privacy.showProfile" label="Показывать профиль" @update:model-value="emit('update:userSettings', userSettings)" />
      <q-toggle v-model="userSettings.privacy.showEmail" label="Показывать email" @update:model-value="emit('update:userSettings', userSettings)" />
      <q-toggle v-model="userSettings.privacy.showPhone" label="Показывать телефон" @update:model-value="emit('update:userSettings', userSettings)" />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">

</style>