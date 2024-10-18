<script setup lang="ts">
const MIN_WIDTH = 200
const MAX_WIDTH = 420

const appContainer = useTemplateRef('app-container')
const currentWidth = ref(`${MIN_WIDTH}px`)
const isResizing = ref(false)

function startResize(e: MouseEvent) {
	if (!e.target) {
		return
	}

	isResizing.value = true
	document.body.classList.add('cursor-col-resize')
	document.addEventListener('mousemove', resize)
}

function stopResize() {
	isResizing.value = false
	document.body.classList.remove('cursor-col-resize')
	document.removeEventListener('mousemove', resize)
}

function resize(e: MouseEvent) {
	if (!appContainer.value) {
		return
	}

	const newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, e.clientX))
	currentWidth.value = `${newWidth}px`
}

onMounted(() => {
	document.addEventListener('mouseup', stopResize)
})

onUnmounted(() => {
	document.removeEventListener('mousemove', resize)
	document.removeEventListener('mouseup', stopResize)
})

const showModal = ref(false)

useMagicKeys({
	passive: false,
	onEventFired(e) {
		if (e.metaKey && e.key === ',' && e.type === 'keydown') {
			e.preventDefault()
			showModal.value = true
			return
		}

		if (e.key === 'Escape' && e.type === 'keydown' && showModal.value) {
			e.preventDefault()
			showModal.value = false
		}
	},
})
</script>

<template>
	<AppIconSprite />
	<div
		ref="app-container"
		class="grid h-full w-full grid-rows-[1fr] overflow-hidden"
		:style="{
			'grid-template-columns': `${currentWidth} 1px auto`,
		}"
	>
		<aside class="flex flex-col pt-2 px-4 pb-2">
			<div class="mt-auto ">
				<AppButton
					icon="settings"
					@click="showModal = true"
				/>
			</div>

			<p class="text-xs text-zinc-700 mt-4">
				MiniRest &copy; 2024
			</p>
		</aside>
		<div
			class="relative group -left-2 my-2.5 w-4 z-50 cursor-col-resize block"
			@mousedown="startResize"
		>
			<div
				class="mx-auto h-full w-[1px] rounded-full transition duration-500 ease-out group-hover:bg-zinc-600"
				:class="{ 'bg-zinc-600': isResizing }"
			>
			</div>
		</div>
		<main class="my-2 mr-2 flex flex-col rounded border border-zinc-900 bg-zinc-925 overflow-hidden">
			App Content
		</main>

		<AppModal
			v-model="showModal"
			title="Settings"
		>
			<AppSettings />
		</AppModal>
	</div>
</template>
