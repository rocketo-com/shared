import styled, { css } from 'styled-components';
import { showCheck, clickBox } from './animations';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 11px;
  color: #252a34;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.75;
    cursor: not-allowed;
  `}
`;

export const Icon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: #ebebeb;
  border-radius: 3px;

  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 0.3s;

  ${({ checked }) =>
    checked &&
    css`
      animation-name: ${clickBox};
    `}

  :after,
  :before {
    position: absolute;
    content: '';

    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: 0.05s;
  }

  :after {
    top: 10px;
    left: 5px;
    width: 5px;
    height: 2px;
    transform: rotate(45deg);
  }

  :before {
    top: 9px;
    left: 7px;
    width: 8px;
    height: 2px;
    transform: rotate(-45deg);
  }

  ${({ checked }) =>
    checked &&
    css`
      :after {
        animation-name: ${showCheck};
      }
    `}

  ${({ checked }) =>
    checked &&
    css`
      :before {
        animation-name: ${showCheck};
        animation-delay: 0.05s;
      }
    `}
`;
