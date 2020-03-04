import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { text, boolean, select } from '@storybook/addon-knobs';
import Select from './index';
import Card from '../_storybookWrappers/Card';
import { options } from './storiesHelpers';

const stories = storiesOf('Components|Select', module).addParameters({
  component: Select,
  componentSubtitle: 'Displays a select component',
});

stories.add('default', () => (
  <Card>
    <Select options={options} />
  </Card>
));

const flatSelect = (defaultValue = 'grey') =>
  select(
    'flat',
    {
      grey: 'grey',
      white: 'white',
    },
    defaultValue,
  );

const CustomOption = styled.div`
  display: flex;
  align-items: center;
  color: red;

  :hover {
    opacity: 0.75;
  }
`;

stories.add('with custom options', () => (
  <Card>
    <Select
      options={options}
      customOption={({ option }) => <CustomOption>{option.label}</CustomOption>}
    />
  </Card>
));

stories.add('with all props', () => {
  const placeholder = text('placeholder', 'Select your option');
  const label = text('label', 'Label');
  const readOnly = boolean('readOnly', false);
  const error = text('error', '');
  const withSearch = boolean('withSearch', false);

  return (
    <Card>
      <Select
        label={label}
        readOnly={readOnly}
        error={error}
        options={options}
        touched={error}
        withSearch={withSearch}
        flat={flatSelect()}
        placeholder={placeholder}
      />
    </Card>
  );
});
