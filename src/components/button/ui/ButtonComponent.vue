<template>
	<div class="wrapper-btn">
		<q-btn
			v-bind="$props"
			dense
			no-caps
			:color="color"
			:text-color="textColor"
			:outline="variant === 'secondary'"
			unelevated
		>
			<template
				v-for="(_, slot) in ($slots as Readonly<QBtnSlots>)"
				#[slot]="...scope"
			>
				<slot :name="`${slot}`" v-bind="scope || {}" />
			</template>
		</q-btn>
	</div>
</template>

<script setup lang="ts">
import type { QBtnProps, QBtnSlots } from 'quasar';
import { computed } from 'vue';

type Props = Omit<QBtnProps, 'dense' | 'noCaps' | 'color' | 'textColor'> & { variant?: 'primary' | 'secondary' };

const props = withDefaults(defineProps<Props>(), {
	variant: 'primary',
});
defineSlots<QBtnSlots>();

const color = computed(() => {
	if (props.variant === 'primary') {
		return 'primary';
	} else {
		return 'secondary';
	}
});
const textColor = computed(() => {
	if (props.variant === 'primary') {
		return 'white';
	} else {
		return 'primary';
	}
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
