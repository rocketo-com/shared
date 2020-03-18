import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: 0.5s box-shadow;
    box-shadow: ${({ isStart, isEnd }) =>
      !isStart && !isEnd
        ? `inset 20px 0 10px -10px rgba(205, 205, 205, 0.418652), inset -20px 0 10px -10px rgba(205, 205, 205, 0.418652)`
        : !isStart
        ? `inset 20px 0 10px -10px rgba(205, 205, 205, 0.418652)`
        : !isEnd
        ? `inset -20px 0 10px -10px rgba(205, 205, 205, 0.418652)`
        : `none`};
  }
`;

export const Track = styled.div`
  overflow-x: scroll;
  margin: 0;
  padding: 0;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
