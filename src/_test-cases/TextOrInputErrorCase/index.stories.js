import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextOrInput from '../../components/TextOrInput';
import Card from '../../components/_storybookWrappers/Card';
import withNotices from '../../components/_storybookWrappers/withNotices';
import { notice } from '../../events';

const stories = storiesOf('Test Cases|TextOrInputErrorCase', module).addParameters({
  component: TextOrInput,
  componentSubtitle: 'Displays a TextOrInput test case error',
});

const REQUEST_DELAY = 1000;

const RIGHT_VALUE = '+79313417925';

const exampleRequest = async value => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      if (value === RIGHT_VALUE) {
        res();
      } else {
        rej(new Error(`Use number ${RIGHT_VALUE}`));
      }
    }, REQUEST_DELAY);
  });
};

stories.add('phone error', () => {
  const [value, setValue] = useState('+7931341792');

  const onUpdate = async () => {
    await exampleRequest(value);
  };

  const onSave = response => {
    if (response.error) {
      notice.showError(response.error);
    } else {
      notice.showSuccess('Good job!');
    }
  };

  const card = () => (
    <>
      <Card center>
        For success update number should be equal +79313417925, just add 5 at the end. All another
        phone numbers will produce an error
      </Card>
      <Card center>
        <TextOrInput onUpdate={onUpdate} onChange={setValue} onSave={onSave} type="phone">
          {value}
        </TextOrInput>
      </Card>
    </>
  );

  const story = withNotices(card);

  return story({ onUpdate });
});
