import React from 'react';
import styled from 'styled-components';

const NumberIcon = styled.div`
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  background-color: ${props => props.stroke};
  color: ${props => props.fill};

  border-radius: 50%;

  font-weight: bold;
  font-size: ${props => `${props.size * (props.sizeFactor ? props.sizeFactor : 0.6)}px`};
  line-height: ${props => `${props.size}px`};
  text-align: center;

  cursor: default;

  display: flex;
  justify-content: center;
`;

const IconText = ({ text, size, stroke, fill, maxLength = 2, ...props }) => {
  if (!text) return null;

  let label = String(text);
  if (label.length > maxLength) {
    label = '...';
  }
  return (
    <NumberIcon size={size} stroke={stroke} fill={fill} {...props}>
      {label}
    </NumberIcon>
  );
};

export default IconText;
