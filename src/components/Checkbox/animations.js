import { keyframes } from 'styled-components';

export const showCheck = keyframes`
  0% {
    background: transparent;
  }

  25% {
    background: linear-gradient(to right, #19223d, #19223d 25%, transparent 25%, transparent 100%);
  }

  50% {
    background: linear-gradient(to right, #19223d, #19223d 50%, transparent 50%, transparent 100%);
  }

  75% {
    background: linear-gradient(to right, #19223d, #19223d 75%, transparent 75%, transparent 100%);
  }

  100% {
    background: #19223d;
  }
`;

export const clickBox = keyframes`
  0% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;
