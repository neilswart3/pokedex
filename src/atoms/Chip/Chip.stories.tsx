import { Meta, StoryObj } from '@storybook/react';
import { Chip } from '.';

const meta: Meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Chip',
    bgLight: false,
    textLight: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
    textLight: true,
  },
};
