import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { color } from '@storybook/addon-knobs';
import Icon from './index';
import Card from '../_storybookWrappers/Card';

const reqSvgs = require.context('../../resources/svgs/', true, /\.svg$/);

const svgs = reqSvgs.keys().reduce((images, path) => {
  const name = path.slice(2).split('.')[0];

  images[name] = reqSvgs(path);
  return images;
}, {});

const stories = storiesOf('Components|Icons', module).addParameters({
  component: Icon,
  componentSubtitle: 'Displays an icon component',
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
    <Icon {...props} />
    <div>{props.name}</div>
  </IconWrap>
);

const ICONS_WITH_STROKE = ['arrow-bold', 'c10n-bubble', 'check', 'pencil', 'mail', 'phone', 'push'];
const ICONS_WITH_FILL = [
  'arrow',
  'menu',
  'cross',
  'circle-plus-fill',
  'circle-close-fill',
  'like',
  'message',
  'star',
  'star-rounded',
  'refresh-arrow',
  'rocketo-logo-circle',
];

stories.add('all icons', () => {
  const fill = color('fill', '#00cad1');
  const stroke = color('stroke', '#00cad1');

  return (
    <Card width="auto">
      <Wrap>
        {Object.keys(svgs).map(svg => (
          <IconWithName
            name={svg}
            fill={fill}
            stroke={ICONS_WITH_STROKE.includes(svg) ? stroke : undefined}
            size="30"
          />
        ))}
      </Wrap>
    </Card>
  );
});

stories.add('icons with stroke', () => {
  const stroke = color('stroke', '#00cad1');

  return (
    <Card width="auto">
      <Wrap>
        {Object.keys(svgs)
          .filter(name => ICONS_WITH_STROKE.includes(name))
          .map(svg => (
            <IconWithName name={svg} stroke={stroke} size="30" />
          ))}
      </Wrap>
    </Card>
  );
});

stories.add('icons with fill', () => {
  const fill = color('fill', '#00cad1');

  return (
    <Card width="auto">
      <Wrap>
        {Object.keys(svgs)
          .filter(name => ICONS_WITH_FILL.includes(name))
          .map(svg => (
            <IconWithName name={svg} fill={fill} size="30" />
          ))}
      </Wrap>
    </Card>
  );
});

stories.add('icons with fill or stroke', () => {
  const fillOrStroke = color('fill/stroke', '#00cad1');

  return (
    <Card width="auto">
      <Wrap>
        {Object.keys(svgs)
          .filter(name => ICONS_WITH_STROKE.includes(name) || ICONS_WITH_FILL.includes(name))
          .map(svg => (
            <IconWithName
              name={svg}
              size="30"
              stroke={ICONS_WITH_STROKE.includes(svg) ? fillOrStroke : undefined}
              fill={ICONS_WITH_FILL.includes(svg) ? fillOrStroke : undefined}
            />
          ))}
      </Wrap>
    </Card>
  );
});

stories.add('icons without fill or stroke', () => (
  <Card width="auto">
    <Wrap>
      {Object.keys(svgs)
        .filter(name => !ICONS_WITH_STROKE.includes(name) && !ICONS_WITH_FILL.includes(name))
        .map(svg => (
          <IconWithName name={svg} size="30" />
        ))}
    </Wrap>
  </Card>
));
