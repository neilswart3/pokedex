import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Stack from '.';

const meta: Meta = {
  title: 'Atoms/Stack',
  component: () => (
    <Stack>
      <div>something 1</div>
      <div>something 2</div>
    </Stack>
  ),
  parameters: {},
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {},
};
