import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '.';

const meta: Meta = {
  title: 'Atoms/Stack',
  component: () => (
    <Stack>
      <div>something 1</div>
      <div>something 2</div>
    </Stack>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    flow: 'col',
    reverse: false,
  },
};
