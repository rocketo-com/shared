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
  const placeholder = text('placeholder', 'Placeholder');

  return (
    <Card center>
      <TextOrInput type={typesSelect()} canEdit={canEditSelect()} placeholder={placeholder}>
        TextOrInput content
      </TextOrInput>
    </Card>
  );
});

stories.add('phone', () => (
  <Card center>
    <TextOrInput type="phone">+7931341792</TextOrInput>
  </Card>
));

stories.add('email', () => (
  <Card center>
    <TextOrInput type="email">vlad@email.com</TextOrInput>
  </Card>
));
