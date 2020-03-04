import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;

  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const Icon = ({ name, size, height = 16, width = 16, stroke, fill, ...props }) => {
  if (!name) return null;

  return (
    <SVG {...props} height={size || height} width={size || width} stroke={stroke} color={fill}>
      <use fill={fill} xlinkHref={`#${name}`} />
    </SVG>
  );
};

export default Icon;
