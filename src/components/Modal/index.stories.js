import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import Modal from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Modal', module).addParameters({
  component: Modal,
  componentSubtitle: 'Displays a modal component',
});

stories.add('default', () => (
  <Card center>
    <Modal openBy={({ handleOpen }) => <button onClick={handleOpen}>Open Modal</button>}>
      Modal content
    </Modal>
  </Card>
));

stories.add('with all props', () => {
  const title = text('Title', 'Modal title');
  const width = text('Width', '400');
  const isSubmitLoading = boolean('isSubmitLoading', false);
  const isSubmitDisabled = boolean('isSubmitDisabled', false);

  return (
    <Card center>
      <Modal
        title={title}
        width={width}
        isSubmitLoading={isSubmitLoading}
        isSubmitDisabled={isSubmitDisabled}
        onSubmit={() => {}}
        openBy={({ handleOpen }) => <button onClick={handleOpen}>Open Modal</button>}
      >
        Modal content
      </Modal>
    </Card>
  );
});
