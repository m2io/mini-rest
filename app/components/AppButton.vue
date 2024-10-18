<script setup lang="ts">
const { icon } = defineProps<{
	icon?: keyof typeof ICONS
}>()

const computedButtonClass = computed(() => {
	return {
		'flex items-center justify-center rounded text-zinc-400': true,
		'hover:bg-zinc-800 hover:text-zinc-50 p-1': icon,
	}
})
</script>

<template>
	<button :class="computedButtonClass">
		<slot></slot>
		<AppIcon
			v-if="icon"
			:icon="icon"
		/>
	</button>
</template>
