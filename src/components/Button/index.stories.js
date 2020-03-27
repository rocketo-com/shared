import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import Button from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Button', module).addParameters({
  component: Button,
  componentSubtitle: 'Displays an button component',
});

stories.add('default', () => (
  <Card>
    <Button onClick={action('button click')}>Default button</Button>
  </Card>
));

const variantsSelect = (defaultValue = 'default') =>
  select(
    'variant',
    {
      primary: 'primary',
      secondary: 'secondary',
      default: 'default',
      light: 'light',
    },
    defaultValue,
  );

stories.add('with all props', () => {
  const buttonText = text('children', 'Button');
  const disabled = boolean('disabled', false);
  const plusIcon = boolean('plusIcon', false);

  return (
    <Card>
      <Button
        plusIcon={plusIcon}
        disabled={disabled}
        variant={variantsSelect()}
        onClick={action('button click')}
      >
        {buttonText}
      </Button>
    </Card>
  );
});
