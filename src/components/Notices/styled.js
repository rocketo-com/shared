import styled from 'styled-components';

export const Wrap = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 20px;
  z-index: 10000;
  overflow: hidden;
  font-family: Montserrat;

  &:empty {
    display: none;
  }
`;

export const Inner = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;
  padding: 20px 30px 20px 20px;
  margin-right: -30px;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  &:empty {
    display: none;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  opacity: 1;
  width: 340px;
  padding: 15px 15px 15px 17px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: #252a34;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 7px rgba(205, 205, 205, 0.42);
`;

export const StyledCardInner = styled.div`
  display: flex;

  svg {
    min-width: 32px;
    margin-top: 4px;
    margin-right: 15px;
  }

  & > div {
    flex-grow: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;

  :empty {
    display: none;
  }
`;

export const Content = styled.div`
  word-break: break-word;
  font-size: 14px;
`;

export const Cross = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  width: 17px;
  height: 17px;

  &:after {
    position: absolute;
    content: '';
    top: 7px;
    left: -2px;
    width: 15px;
    height: 2px;
    background: #252a34;
    transform: rotate(45deg);
  }

  &:before {
    position: absolute;
    content: '';
    top: 7px;
    left: -2px;
    width: 15px;
    height: 2px;
    background: #252a34;
    transform: rotate(135deg);
  }
`;
