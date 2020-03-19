import React from 'react';
import { Wrapper, Track } from './styled';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

const HScrollBox = ({ children }) => {
  const { handlers, isStart, isEnd } = useHorizontalScroll();

  return (
    <Wrapper {...handlers} isStart={isStart} isEnd={isEnd}>
      <Track>{children}</Track>
    </Wrapper>
  );
};

export default HScrollBox;
