import type { Meta, StoryObj } from "@storybook/react-vite";

import { DottedLine } from "../../src/components/dotted-line";

const meta = {
  component: DottedLine,
} satisfies Meta<typeof DottedLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
