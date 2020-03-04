import styled from 'styled-components';
import Icon from '../Icon';

export const Inner = styled.section`
  top: 50%;
  left: 50%;
  width: ${({ width }) => `${width}px`};
  max-height: 90vh;
  min-height: auto;
  overflow-y: auto;
  padding: 35px;
  outline: none;
  position: absolute;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  z-index: 100;
  border-radius: 8px;
  transition: 0.3s;
  transition-timing-function: ease-out;
  transform-origin: left top;
  transform: scale(0, 0) translate(-50%, -50%);
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scale(1, 1) translate(-50%, -50%);
    opacity: 1;
  `};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  transition-delay: 0.1s;
  transition-timing-function: ease-out;
  z-index: 99;
  opacity: 0;
  visibility: hidden;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 35px 25px;
  margin: 0 -35px 30px;
`;

export const Title = styled.h2`
  color: #424242;
  margin: 0;
  flex-grow: 1;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
`;

export const StyledIcon = styled(Icon)`
  margin-left: 15px;
  cursor: pointer;

  ${({ isSubmitDisabled }) =>
    isSubmitDisabled &&
    `
    opacity: 0.75;
    cursor: not-allowed;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
