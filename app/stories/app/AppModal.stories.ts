import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '@/components/AppButton.vue'
import AppModal from '@/components/AppModal.vue'

const meta = {
	title: 'App / Modal',
	component: AppModal,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AppModal>

export default meta

type Story = StoryObj<typeof meta>

export const BaseModal: Story = {
	render: (args) => ({
		components: { AppModal, AppButton },
		setup() {
			const showModal = ref(false)
			return { args, showModal }
		},
		template: `
			<AppButton @click="showModal = true">Show Modal</AppButton>
			<AppModal v-bind="args" v-model="showModal">
				<div>Modal Content</div>
			</AppModal>
		`,
	}),
}

export const ModalFullHeight: Story = {
	render: (args) => ({
		components: { AppModal, AppButton },
		setup() {
			const showModal = ref(false)
			return { args, showModal }
		},
		template: `
			<AppButton @click="showModal = true">Show Modal</AppButton>
			<AppModal v-bind="args" v-model="showModal">
				<div>Modal Content</div>
			</AppModal>
		`,
	}),
	args: {
		title: 'Modal Title',
		fullHeight: true,
	},
}
