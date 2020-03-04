import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Card from '../_storybookWrappers/Card';
import Notices from './index';
import { notice } from '../../events';

const stories = storiesOf('Components|Notices', module).addParameters({
  component: Notices,
  componentSubtitle: 'Displays a select component',
});

const NoticesLog = ({ customText }) => (
  <>
    <Card>
      <button onClick={() => notice.showError(customText)}>Create notice error</button>
      <button onClick={() => notice.showSuccess(customText)}>Create notice success</button>
      <button onClick={() => notice.showInfo(customText)}>Create notice info</button>
      <button onClick={() => notice.showWarning(customText)}>Create notice warning</button>
    </Card>
    <Notices />
  </>
);

stories.add('default', () => {
  const customText = text('custom text', 'Example of custom text');

  return <NoticesLog customText={customText} />;
});
