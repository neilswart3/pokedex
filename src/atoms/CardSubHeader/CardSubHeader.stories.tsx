import { Meta, StoryObj } from '@storybook/react';
import { CardSubHeader } from '.';

const meta: Meta = {
  title: 'Atoms/CardSubHeader',
  component: CardSubHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CardSubHeader>;

export const Default: Story = {
  args: {
    children: 'Card Sub Header',
  },
};
