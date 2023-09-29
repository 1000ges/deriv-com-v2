import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentLess from '.';

const meta = {
  title: 'Blocks/Hero/Content-Less',
  component: ContentLess,
} satisfies Meta<typeof ContentLess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title Goes Here',
    description:
      'Description goes here description goes here description goes here description goes here',
    children: <p className="text-center">This is a content less block</p>,
  },
};
