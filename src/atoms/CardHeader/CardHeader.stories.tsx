import { Meta, StoryObj } from '@storybook/react';
import { CardHeader } from '.';

const meta: Meta = {
  title: 'Atoms/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Default: Story = {
  args: {
    children: 'Card Header',
  },
};
