import type { Meta, StoryObj } from "@storybook/react";
import Text from ".";

const meta: Meta<typeof Text> = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		as: "h1",
		children:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio repudiandae hic commodi fugit quasi magnam obcaecati? Sed, omnis aspernatur officiis aut explicabo suscipit quia rem, hic voluptates quisquam accusantium numquam.",
	},
};
