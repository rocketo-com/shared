import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Phone from 'react-phone-number-input/input';

const paddings = {
  sm: '3px 5px',
  md: '10px 15px',
  lg: '15px 17px',
};

const fontSizes = {
  sm: '12px',
  md: '14px',
  lg: '14px',
};

const backgroundsFlat = {
  grey: 'linear-gradient(180deg, #f5f5f6 0%, #f5f5f6 100%)',
  white: '#fff',
};

const shaker = keyframes`
  0% {
    transform: translateX(5px);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX(0);
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Label = styled.label`
  span {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 6px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #85858d;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ size }) => paddings[size]};
  font-family: Montserrat;
  font-weight: normal;
  font-size: ${({ size }) => fontSizes[size]};
  line-height: 21px;
  border: none;
  background: ${({ flat }) => backgroundsFlat[flat]};
  box-shadow: ${({ flat }) => (flat === 'grey' ? 'inset 0px 1px 1px #d1d1d1' : 'none')};
  border: ${({ flat }) => (flat === 'grey' ? '1px solid transparent' : '1px solid #dad2d2')};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  outline: none;

  :focus {
    border: 1px solid ${({ error }) => (error ? 'red' : '#08d9d6')};
  }

  ::placeholder {
    color: #353535;
    font-style: italic;
  }

  ${({ error }) =>
    error &&
    `
    border: 1px solid red;
  `};

  :disabled {
    cursor: not-allowed;
  }

  ${({ isShakerAnimation }) =>
    isShakerAnimation &&
    css`
      animation: 300ms ${shaker} linear;
    `}
`;

export const Error = styled.div`
  position: absolute;
  bottom: -26px;
  left: 0;
  font-size: 11px;
  padding: 4px;
  border-radius: 8px;
  color: red;
  background: #fff;
  border: 1px solid #dad2d2;

  :empty {
    display: none;
  }
`;
