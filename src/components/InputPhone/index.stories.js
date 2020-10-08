import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import InputPhone from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|InputPhone', module).addParameters({
  component: InputPhone,
  componentSubtitle: 'Displays a input phone component',
});

stories.add('default', () => {
  const label = text('label', 'Phone');
  const placeholder = text('placeholder', 'Phone number');

  return (
    <Card width="auto">
      <InputPhone label={label} placeholder={placeholder} />
    </Card>
  );
});
