import React from 'react';
import styled from 'styled-components';
import Loading from './LoadingRing';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: not-allowed;
  z-index: 2;
  opacity: 0.7;
`;

const LoadingFill = ({ color = '#fff', size = 'md', className }) => (
  <Root className={className}>
    <Loading size={size} color={color} />
  </Root>
);

export default LoadingFill;
