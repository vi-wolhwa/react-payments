import CardExpireDateField from '.';

export default {
  title: 'Component/CardExpireDateField',
  component: CardExpireDateField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardExpireDateField {...args} />;

export const DefaultCardExpireDateField = Template.bind({});
