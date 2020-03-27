import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import HScrollBox from './index';
import Card from '../_storybookWrappers/Card';

const SAMPLE_TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const Text = styled.span`
  white-space: nowrap;
`;

const stories = storiesOf('Components|HScrollBox', module).addParameters({
  component: HScrollBox,
  componentSubtitle: 'Box with horizontal scroll',
});

stories.add('default', () => (
  <Card>
    <HScrollBox>
      <Text>{SAMPLE_TEXT}</Text>
    </HScrollBox>
  </Card>
));
