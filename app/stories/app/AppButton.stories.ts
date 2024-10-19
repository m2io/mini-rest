import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from '@/components/AppButton.vue'
import { ICONS } from '@/icons'

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

export const SecondaryBaseButton: Story = {
	render: (args) => ({
		components: { AppButton },
		setup() {
			return { args }
		},
		template: `<AppButton v-bind="args">Base Button</AppButton>`,
	}),
	args: {
		variant: 'secondary',
	},
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

export const AllIconButtons: Story = {
	render: (args) => ({
		components: { AppButton },
		setup() {
			const icons = Object.keys(ICONS)
			return { args, icons }
		},
		template: `
		<div class="flex flex-wrap gap-2">
			<AppButton v-for="icon in icons" v-bind="args" :icon="icon" />
		</div>`,
	}),
}
