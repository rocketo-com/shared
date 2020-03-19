import styled from 'styled-components';

const padding = {
  primary: '10px 25px',
  secondary: '10px 25px',
  default: '10px 25px',
  light: '6px 18px 8px',
};

const borderRadius = {
  primary: '10px',
  secondary: '10px',
  default: '10px',
  light: '18px',
};
const borderWidth = {
  primary: '2px',
  secondary: '2px',
  default: '2px',
  light: '1px',
};

const borderColor = {
  primary: '#08d9d6',
  secondary: '#ff2e63',
  default: '#919198',
  light: '#dad2d2',
};

const fontWeigth = {
  primary: 600,
  secondary: 600,
  default: 600,
  light: 'normal',
};

const backgrounds = {
  primary: '#08d9d6',
  secondary: '#ff2e63',
  default: '#fff',
  light: '#fff',
};

const colors = {
  primary: '#fff',
  secondary: '#fff',
  default: '#919198',
  light: '#0090ff',
};

export const Root = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ variant }) => padding[variant]};
  border-radius: ${({ variant }) => borderRadius[variant]};
  outline: none;
  border: ${({ variant }) => borderWidth[variant]} solid ${({ variant }) => borderColor[variant]};
  background: ${({ variant }) => backgrounds[variant]};
  font-family: Montserrat;
  font-style: normal;
  font-weight: ${({ variant }) => fontWeigth[variant]};
  font-size: 14px;
  line-height: 21px;
  color: ${({ variant }) => colors[variant]};
  cursor: pointer;
  transition: 0.1s;

  :hover {
    opacity: 0.75;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :focus :active {
    backdrop-filter: contrast(40%);
    transform: scale(0.96);
  }
`;

export const IconPlus = styled.i`
  position: relative;
  width: 25px;
  height: 25px;
  z-index: 2;
  margin-left: -10px;
  margin-right: 5px;

  :after,
  :before {
    position: absolute;
    top: 4px;
    left: calc(50% - 1px);
    content: '';
    width: 2px;
    height: 17px;
    background: ${({ variant }) => colors[variant]};
  }

  :after {
    transform: rotate(90deg);
  }
`;
