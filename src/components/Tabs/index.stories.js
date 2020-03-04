import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import Tabs from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Tabs', module).addParameters({
  component: Tabs,
  componentSubtitle: 'Displays a select component',
});

const tabs = [
  {
    key: 'first',
    header: 'First',
    content: () => <div>First</div>,
  },
  {
    key: 'second',
    header: 'Second',
    content: () => <div>Second</div>,
  },
  {
    key: 'third',
    header: 'Third',
    content: () => <div>Third</div>,
  },
];

stories.add('default', () => (
  <Card>
    <Tabs tabs={tabs} />
  </Card>
));

const longTabs = [
  {
    key: 'first',
    header: 'First long long header',
    content: () => <div>First</div>,
  },
  {
    key: 'second',
    header: 'Second long long header again',
    content: () => <div>Second</div>,
  },
  {
    key: 'third',
    header: 'Finally third header with a lot of symbols',
    content: () => <div>Third</div>,
  },
  {
    key: 'fourth',
    header: 'Fourth long long header',
    content: () => <div>Fourth</div>,
  },
  {
    key: 'fifth',
    header: 'Fifth long long header again',
    content: () => <div>Fifth</div>,
  },
  {
    key: 'sixth',
    header: 'Sixth third header with a lot of symbols',
    content: () => <div>Sixth</div>,
  },
];

stories.add('with long headers', () => {
  const maxTabTextLength = number('maxTabTextLength', 10);

  return (
    <Card>
      <Tabs tabs={longTabs} maxTabTextLength={maxTabTextLength} />
    </Card>
  );
});
