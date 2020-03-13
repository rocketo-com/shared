import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import TextOrInput from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|TextOrInput', module).addParameters({
  component: TextOrInput,
  componentSubtitle: 'Displays a TextOrInput component',
});

const typesSelect = (defaultValue = 'text') =>
  select(
    'type',
    {
      text: 'text',
      phone: 'phone',
      number: 'number',
    },
    defaultValue,
  );

const canEditSelect = (defaultValue = true) =>
  select(
    'canEdit',
    {
      true: true,
      false: false,
    },
    defaultValue,
  );

stories.add('default', () => {
  const value = text('value', 'TextOrInput content');
  const placeholder = text('placeholder', 'Placeholder');

  return (
    <Card center>
      <TextOrInput type={typesSelect()} canEdit={canEditSelect()} placeholder={placeholder}>
        {value}
      </TextOrInput>
    </Card>
  );
});

stories.add('phone', () => {
  const value = text('value', '+7931341792');
  const placeholder = text('placeholder', 'Placeholder');

  return (
    <Card center>
      <TextOrInput type="phone" placeholder={placeholder} canEdit={canEditSelect()}>
        {value}
      </TextOrInput>
    </Card>
  );
});

stories.add('email', () => (
  <Card center>
    <TextOrInput type="email">vlad@email.com</TextOrInput>
  </Card>
));
