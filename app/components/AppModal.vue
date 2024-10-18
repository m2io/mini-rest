<script setup lang="ts">
const { fullHeight = false, showCloseButton = true } = defineProps<{
	fullHeight?: boolean
	title?: string
	showCloseButton?: boolean
}>()

const showModal = defineModel<boolean>({ default: false })

function onBackdropClick() {
	showModal.value = false
}
</script>

<template>
	<Teleport to="body">
		<Transition
			appear
			mode="out-in"
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="ease-in transition duration-100"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0 "
		>
			<div
				v-if="modelValue"
				class="fixed inset-0 bg-zinc-900/30 backdrop-blur-md z-50"
				@click="onBackdropClick"
			></div>
		</Transition>
		<Transition
			appear
			mode="out-in"
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="opacity-0 scale-95 blur-sm"
			enter-to-class="opacity-100 scale-100 blur-none"
			leave-active-class="ease-in transition duration-100"
			leave-from-class="opacity-100 scale-100 blur-none"
			leave-to-class="opacity-0 scale-95 blur-sm"
		>
			<div
				v-if="modelValue"
				class="absolute top-24 w-full max-w-4xl inset-x-1/2 -translate-x-1/2 z-[1020] flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 will-change-transform px-4 py-3 shadow-modal z-100"
				:class="{
					'inset-y-24': fullHeight,
				}"
			>
				<header class="flex items-center justify-between empty:hidden">
					<h2
						v-if="title"
						class="text-lg text-zinc-50 font-medium tracking-w"
					>
						{{ title }}
					</h2>
					<AppButton
						v-if="showCloseButton"
						icon="close"
						@click="showModal = false"
					/>
				</header>
				<slot></slot>
			</div>
		</Transition>
	</Teleport>
</template>
