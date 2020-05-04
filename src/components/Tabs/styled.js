import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-wrap: nowrap;
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

export const Content = styled.div`
  margin-top: -1px;
  border-top: 1px solid #cdcdcd;
  padding-top: 10px;
`;
