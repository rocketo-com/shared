import styled, { css } from 'styled-components';
import Input from '../Input';

const getStyle = flat => css`
  background: ${flat === 'grey' ? '#f5f5f7' : '#fff'};
  box-shadow: ${flat === 'grey' ? '0px 1px 1px #d1d1d1' : 'none'};
  border: 1px solid ${flat === 'grey' ? 'transparent' : '#dad2d2'};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 16px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  border-radius: 7px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #575757;
  ${({ flat }) => getStyle(flat)};

  ${({ readOnly }) =>
    readOnly &&
    `
      cursor: not-allowed;
    `}

  ${({ isOpen, withSearch }) =>
    isOpen &&
    !withSearch &&
    `
      border: 1px solid #08d9d6;
    `}

  ${({ error }) =>
    error &&
    `
      border: 1px solid red;
    `}
`;

export const StyledInput = styled(Input)`
  margin: 10px;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 19px;
  right: 26px;

  :after,
  :before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: #575757;
    width: 9px;
    height: 2px;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: 0.2s;
  }

  :before {
    left: 5px;
    transform: rotate(-45deg);
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    :after {
      top: -1px;
      transform: rotate(-45deg);
    }

    :before {
      top: -1px;
      transform: rotate(45deg);
    }
  `}
`;

export const Option = styled.div`
  padding: 10px 16px;

  :hover {
    background: #f5f5f7;
  }
`;

export const Popover = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: -2px;
  width: calc(100% + 4px);
  opacity: 0;
  z-index: 15;
  transform: scaleY(0);
  transform-origin: top;
  border-radius: 7px;
  overflow: hidden;
  transition: 0.2s;

  ${({ flat }) => getStyle(flat)};

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scaleY(1);
      opacity: 1;
    `}
`;

export const Label = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 6px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #85858d;
`;
