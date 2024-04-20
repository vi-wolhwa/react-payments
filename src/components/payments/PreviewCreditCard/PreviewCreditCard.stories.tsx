import PreviewCreditCard from '@components/payments/PreviewCreditCard/PreviewCreditCard';

import { generateArgTypes } from '@utils/generateArgTypes';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Payments/PreviewCreditCard',
  component: PreviewCreditCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자의 카드 정보를 신용카드 형태로 보여주는 컴포넌트',
      },
    },
  },
  argTypes: {
    cardNumbers: {
      control: 'array',
      description: '카드 번호 16자리',
    },
    expiration: {
      ...generateArgTypes({ control: 'object' }),
      description: '유효기간(YY/MM)',
    },
    ownerName: {
      ...generateArgTypes({ control: 'text' }),
      description: '소유자 이름',
    },
  },
  args: {
    cardNumbers: ['', '', '', ''],
    expiration: { month: '', year: '' },
    ownerName: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PreviewCreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '컴포넌트의 기본 상태' } },
  },
};

export const VisaCard: Story = {
  parameters: {
    docs: { description: { story: '비자 카드를 입력했을 때의 상태' } },
  },

  args: {
    cardNumbers: ['4123', '1231', '2342', '4535'],
    expiration: { month: '05', year: '28' },
    ownerName: 'NAMSUMIN',
  },
};

export const MasterCard: Story = {
  parameters: {
    docs: { description: { story: '마스터 카드를 입력했을 때의 상태' } },
  },

  args: {
    cardNumbers: ['5012', '3456', '7890', '0000'],
    expiration: { month: '05', year: '28' },
    ownerName: 'NAMSUMIN',
  },
};