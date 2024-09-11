import { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Atoms/ButtonBla',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
  args: {
    children: 'something',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
