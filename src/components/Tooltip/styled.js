import styled from 'styled-components';

export const TipHover = styled.div`
  padding: 10px 15px;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: ${({ top }) => `${top}px` || 'calc(100% + 10px)'};
  background: #252a34;
  border-radius: 4px;
  box-shadow: 0 22px 17px 0 rgba(205, 205, 205, 0.5);
  transition: 0.2s;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-transform: none;
  word-break: break-word;
  z-index: 40;
  text-align: center;
  width: ${({ width }) => width}px;

  ${({ position }) => {
    if (position === 'left') {
      return `
        left: 0;
      `;
    }

    if (position === 'right') {
      return `
        right: 0;
      `;
    }

    // center position
    return `
      left: 50%;
      transform: translateX(-50%);
    `;
  }}
`;

export const Root = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;

  :hover {
    ${TipHover} {
      visibility: visible;
      opacity: 1;
      transition-delay: 1s;
    }
  }
`;
