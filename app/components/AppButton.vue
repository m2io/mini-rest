<script setup lang="ts">
const { variant = 'primary', icon } = defineProps<{
	variant?: 'primary' | 'secondary'
	icon?: keyof typeof ICONS
}>()

const computedButtonClass = computed(() => {
	const classes = {
		'flex items-center justify-center rounded transition-colors duration-150': true,
	}

	const buttonClasses = {
		'bg-primary text-white hover:bg-primary-light border border-primary-dark': variant === 'primary' && !icon,
		'bg-zinc-800 text-zinc-50 hover:bg-zinc-700 border border-zinc-700': variant === 'secondary' && !icon,
		'px-2 h-7 text-sm font-medium': !icon,
	}

	const iconClasses = {
		'hover:bg-zinc-800 hover:text-zinc-50 p-1 text-zinc-400 border border-transparent': icon,
	}

	return {
		...classes,
		...buttonClasses,
		...iconClasses,
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
