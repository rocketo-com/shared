import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import LoadingRing from './LoadingRing';
import LoadingFill from './LoadingFill';
import LoadingOverlay from './LoadingOverlay';
import Card from '../_storybookWrappers/Card';
import PseudoButton from '../_storybookWrappers/PseudoButton';

const stories = storiesOf('Components|Loading', module).addParameters({
  component: LoadingRing,
  componentSubtitle:
    "Displays a loadings components. Now we don't have support icons in this system and rocketo icon is not display",
});

// @TODO: need upgrade this story after finish implementing icons feature

stories.add('ring', () => (
  <Card center>
    <LoadingRing />
  </Card>
));

stories.add('fill', () => {
  const progressText = text('text', '');

  return (
    <Card center>
      <PseudoButton>
        <LoadingFill text={progressText} />
      </PseudoButton>
    </Card>
  );
});

const sizesLoading = (defaultValue = 'lg') =>
  select(
    'size',
    {
      md: 'md',
      lg: 'lg',
    },
    defaultValue,
  );

stories.add('with sizes', () => (
  <Card center>
    <LoadingRing size={sizesLoading()} />
  </Card>
));

stories.add('overlay', () => {
  const progressText = text('text', '');

  return (
    <Card empty>
      Some text or blocks which was hidden under overlay
      <LoadingOverlay text={progressText} />
    </Card>
  );
});
