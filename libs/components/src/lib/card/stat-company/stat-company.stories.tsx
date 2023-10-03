import type { Meta, StoryObj } from '@storybook/react';
import StatCompany from '.';

const meta = {
  title: 'Components/Card/StatCompany',
  tags: ['auto-docs'],
  parameters: {
    layout: 'centered',
  },
  component: StatCompany,
} satisfies Meta<typeof StatCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Stat Card Title',
    description: 'Stat Card description',
    color: 'white',
  },
};
