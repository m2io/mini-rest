<script setup lang="ts">
const { fullHeight = false } = defineProps<{
	fullHeight?: boolean
	title?: string
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
				class="fixed inset-0 bg-zinc-950/10 backdrop-blur-sm z-50"
				@click="onBackdropClick"
			></div>
		</Transition>
		<Transition
			appear
			mode="out-in"
			enter-active-class="transition duration-150 ease-out"
			enter-from-class="opacity-0 scale-95 blur-md"
			enter-to-class="opacity-100 scale-100 blur-none"
			leave-active-class="ease-in transition duration-100"
			leave-from-class="opacity-100 scale-100 blur-none"
			leave-to-class="opacity-0 scale-95 blur-md"
		>
			<div
				v-if="modelValue"
				class="absolute inset-x-8 md:w-full md:max-w-3xl md:inset-x-1/2 md:-translate-x-1/2 z-[1020] flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 will-change-transform px-4 py-3 shadow-modal z-100 space-y-4"
				:class="{
					'top-12': !fullHeight,
					'inset-y-12': fullHeight,
				}"
			>
				<header
					v-if="title"
					class="flex items-center justify-between empty:hidden"
				>
					<h2 class="text-zinc-50 font-medium">
						{{ title }}
					</h2>
					<AppButton
						class="ml-auto"
						icon="close"
						@click="showModal = false"
					/>
				</header>
				<div>
					<slot></slot>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>
