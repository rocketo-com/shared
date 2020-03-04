import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select } from '@storybook/addon-knobs';
import Tooltip from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Tooltip', module).addParameters({
  component: Tooltip,
  componentSubtitle: 'Displays a tooltip component',
});

stories.add('default', () => (
  <Card center>
    <Tooltip tip="Default tip">Hover me</Tooltip>
  </Card>
));

const positions = (defaultValue = 'left') =>
  select(
    'position',
    {
      left: 'left',
      right: 'right',
    },
    defaultValue,
  );

stories.add('with all props', () => {
  const tip = text('tip', 'Place for tip');
  const top = number('top', 20);
  const width = number('width', 100);

  return (
    <Card center>
      <Tooltip position={positions()} tip={tip} top={top} width={width}>
        Hover me
      </Tooltip>
    </Card>
  );
});
