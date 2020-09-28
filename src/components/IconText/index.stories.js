import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { color, text } from '@storybook/addon-knobs';
import IconText from './index';
import Card from '../_storybookWrappers/Card';

const stories = storiesOf('Components|IconText', module).addParameters({
  component: IconText,
  componentSubtitle: 'Displays a texted icon component',
});

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-size: 10px;
  min-width: 100px;
  text-align: center;

  div {
    margin-top: 10px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWithName = ({ ...props }) => (
  <IconWrap>
    <IconText {...props} />
    <div>{props.name}</div>
  </IconWrap>
);

stories.add('text icons', () => {
  const fill = color('fill', 'white');
  const stroke = color('stroke', 'red');
  const size = text('size', '30');
  const sizeFactor = text('sizeFactor', '0.6');
  const maxLength = text('maxLength', '2');

  const texts = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '42',
    '88',
    '256',
    '1024',
    'a',
    'ab',
    'abc',
    'A',
    'AB',
  ];

  return (
    <Card width="auto">
      <Wrap>
        {texts.map(number => (
          <IconWithName
            text={number}
            fill={fill}
            stroke={stroke}
            size={size}
            sizeFactor={sizeFactor}
            maxLength={maxLength}
          />
        ))}
      </Wrap>
    </Card>
  );
});
