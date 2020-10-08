import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Input from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Input', module).addParameters({
  component: Input,
  componentSubtitle: 'Displays an input component',
});

stories.add('default', () => (
  <Card>
    <Input onChange={action('input changed')} />
  </Card>
));

const sizesSelect = (defaultValue = 'lg') =>
  select(
    'size',
    {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    },
    defaultValue,
  );

const typesSelect = (defaultValue = 'text') =>
  select(
    'type',
    {
      text: 'text',
      // @deprecated Use InputPhone instead
      'phone (deprecated)': 'phone',
      number: 'number',
    },
    defaultValue,
  );

const flatSelect = (defaultValue = 'grey') =>
  select(
    'flat',
    {
      grey: 'grey',
      white: 'white',
    },
    defaultValue,
  );

stories.add('with all props', () => {
  const placeholder = text('placeholder', 'Write your text');
  const label = text('label', 'Label');
  const readOnly = boolean('readOnly', false);
  const error = text('error', '');

  return (
    <Card>
      <Input
        label={label}
        readOnly={readOnly}
        error={error}
        touched={error}
        onChange={action('input changed')}
        size={sizesSelect()}
        flat={flatSelect()}
        type={typesSelect()}
        placeholder={placeholder}
      />
    </Card>
  );
});
