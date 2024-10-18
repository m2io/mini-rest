import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '@/components/AppButton.vue'

const meta = {
	title: 'App / Button',
	component: AppButton,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AppButton>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryBaseButton: Story = {
	render: (args) => ({
		components: { AppButton },
		setup() {
			return { args }
		},
		template: `<AppButton v-bind="args">Base Button</AppButton>`,
	}),
}

export const PrimaryIconButton: Story = {
	render: (args) => ({
		components: { AppButton },
		setup() {
			return { args }
		},
		template: `<AppButton v-bind="args"></AppButton>`,
	}),
	args: {
		icon: 'close',
	},
}
