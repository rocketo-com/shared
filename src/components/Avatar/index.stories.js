import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Avatar from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|Avatar', module).addParameters({
  component: Avatar,
  componentSubtitle: 'Displays an avatar component',
});

stories.add('default', () => (
  <Card>
    <Avatar
      name="John Galt"
      id="90bf5583-7bf5-4775-9860-cc06ce828631"
      src="https://ui-avatars.com/api/?name=John+Galt&color=fff&background=53c0be&size=500"
    />
  </Card>
));

stories.add('broken url', () => (
  <Card>
    <Avatar
      name="John Galt"
      id="90bf5583-7bf5-4775-9860-cc06ce828631"
      src="https://google.com/abc/def"
    />
  </Card>
));

stories.add(
  'with all props',
  () => {
    const firstName = text('firstName', '');
    const lastName = text('lastName', '');
    const name = text('name', 'John Galt');
    const id = text('id', '90bf5583-7bf5-4775-9860-cc06ce828631');
    const src = text(
      'current avatar',
      'https://ui-avatars.com/api/?name=John+Galt&color=fff&background=53c0be&size=500',
    );

    return (
      <Card>
        <Avatar firstName={firstName} lastName={lastName} name={name} id={id} src={src} />
      </Card>
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  },
);
