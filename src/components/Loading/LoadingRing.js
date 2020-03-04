import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from '../Icon';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const sizes = {
  lg: {
    root: '64px',
    div: '51px',
    border: '3px',
    margin: '6px',
  },
  md: {
    root: '34px',
    div: '25px',
    border: '3px',
    margin: '6px',
  },
  sm: {
    root: '22px',
    div: '13px',
    border: '2px',
    margin: '5px',
  },
};

const HalfScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Root = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => sizes[size].root};
  height: ${({ size }) => sizes[size].root};
  z-index: 25;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => sizes[size].div};
    height: ${({ size }) => sizes[size].div};
    margin: ${({ size }) => sizes[size].margin};
    border: ${({ size, color }) => `${sizes[size].border} solid ${color}`};
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => `${color} transparent transparent transparent`};
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 11px;
  left: 11px;
`;

const LoadingRing = ({ halfScreen, color = '#00cad1', size = 'lg' }) => {
  const ring = (
    <Root size={size} color={color}>
      {size === 'lg' && <StyledIcon name="rocketo-logo-circle" fill="#00cad1" size="41" />}
      <div />
      <div />
      <div />
      <div />
    </Root>
  );

  return halfScreen ? <HalfScreen>{ring}</HalfScreen> : ring;
};

export default LoadingRing;
