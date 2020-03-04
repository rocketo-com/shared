import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const Text = styled.span`
  display: inline-block;
  max-width: 200px;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ error }) =>
    error &&
    `
    padding: 1px 5px;
    color: #ff2e63;
    background: #ffe5ec;
  `}

  :empty {
    display: none;
  }
`;
