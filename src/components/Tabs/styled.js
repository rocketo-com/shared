import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  z-index: 1;
  overflow-y: hidden;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: -30px;
  padding-bottom: 30px;
  overflow-x: scroll;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.2s;
  border-bottom: 2px solid transparent;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #08d9d6;
    border-color: #08d9d6;
  `}
`;

export const ContentItem = styled.div`
  display: none;
  ${({ isActive }) =>
    isActive &&
    `
      display: block;
    `}
`;

export const Content = styled.div`
  margin-top: -1px;
  border-top: 1px solid #cdcdcd;
  padding-top: 10px;
`;
