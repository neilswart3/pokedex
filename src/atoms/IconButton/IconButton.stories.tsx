import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '.';

const meta: Meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    shadow: false,
    round: false,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: '🚀',
  },
};
