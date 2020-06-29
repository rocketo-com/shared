import React from 'react';
import styled from 'styled-components';
import LoadingRing from './LoadingRing';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: not-allowed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  opacity: 0.5;
  background: #f5f5f7;
`;

const LoadingOverlay = ({ text, ...props }) => (
  <Root>
    <Overlay />
    <LoadingRing {...props} />
    {text}
  </Root>
);

export default LoadingOverlay;
