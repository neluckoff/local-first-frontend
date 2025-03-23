<template>
	<q-item
		v-ripple
		clickable
	>
		<q-item-section avatar>
			<q-avatar>
				<img :src="avatar" :alt="name">
			</q-avatar>
		</q-item-section>

		<q-item-section>
			<q-item-label lines="1">
				{{ name }}
			</q-item-label>
			<q-item-label class="conversation__summary" caption>
				<q-icon v-if="isMessageSent" name="check" />
				<q-icon v-if="isDeleted" name="not_interested" />
				{{ caption }}
			</q-item-label>
		</q-item-section>

		<q-item-section side>
			<q-item-label caption>
				{{ time }}
			</q-item-label>
			<q-icon name="keyboard_arrow_down" />
		</q-item-section>
	</q-item>
</template>

<script setup lang="ts">
interface PersonItemsProps {
	avatar: string;
	name: string;
	caption: string;
	time: string;
	isMessageSent: boolean;
	isDeleted?: boolean;
}
defineProps<PersonItemsProps>();
</script>

<style scoped lang="scss">
@import './style';
</style>
