import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Checkbox from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Checkbox', module).addParameters({
  component: Checkbox,
  componentSubtitle: 'Displays an checkbox component',
});

const CheckboxComponent = ({ ...props }) => {
  const label = text('label', 'Label');
  const [value, setValue] = useState(false);

  const onHandleChange = e => {
    action('checkbox changed');
    setValue(e.target.checked);
  };

  return <Checkbox label={label} value={value} onChange={onHandleChange} {...props} />;
};

stories.add('default', () => (
  <Card>
    <CheckboxComponent />
  </Card>
));

stories.add('with all props', () => {
  const disabled = boolean('disabled', false);

  return (
    <Card>
      <CheckboxComponent disabled={disabled} />
    </Card>
  );
});
