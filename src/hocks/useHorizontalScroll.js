import { useEffect, useState, useReducer } from 'react';
import { useSwipeable } from 'react-swipeable';

const INIT = 'INIT';
const SCROLL_IN_START = 'SCROLL_IN_START';
const SCROLL_IN_MIDDLE = 'SCROLL_IN_MIDDLE';
const SCROLL_IN_END = 'SCROLL_IN_END';

const initialState = {
  isScroll: true,
  isStart: false,
  isEnd: false,
  wrapperWidth: 0,
  trackWidth: 0,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case INIT:
      const { wrapper, track } = payload;
      const wrapperWidth = wrapper.clientWidth;
      const trackWidth = track.scrollWidth;
      const isScroll = trackWidth > wrapperWidth;

      return {
        ...state,
        isEnd: !isScroll,
        isStart: true,
        wrapperWidth,
        trackWidth,
        isScroll,
      };
    case SCROLL_IN_START:
      return {
        ...state,
        isStart: true,
        isEnd: false,
      };
    case SCROLL_IN_MIDDLE:
      return {
        ...state,
        isStart: false,
        isEnd: false,
      };
    case SCROLL_IN_END:
      return {
        ...state,
        isStart: false,
        isEnd: true,
      };
    default:
      return state;
  }
};

export const useHorizontalScroll = (isUseTouch = true, isUseWheel = true) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [wrapper, setWrapper] = useState(undefined);
  const [track, setTrack] = useState(undefined);
  const [offset, setOffset] = useState(0);
  const [first, setFirst] = useState(null);

  const onResize = () =>
    dispatch({
      type: INIT,
      payload: { wrapper, track },
    });

  const onDrag = offset => {
    if (offset >= state.trackWidth - state.wrapperWidth) {
      setOffset(state.trackWidth - state.wrapperWidth);
    } else if (offset <= 0) {
      setOffset(0);
    } else {
      setOffset(offset);
    }
  };

  const checkOffset = () => {
    if (offset >= state.trackWidth - state.wrapperWidth) {
      dispatch({ type: SCROLL_IN_END });
    } else if (offset <= 0) {
      dispatch({ type: SCROLL_IN_START });
    } else {
      dispatch({ type: SCROLL_IN_MIDDLE });
    }
  };

  const { ref, onMouseDown } = useSwipeable({
    onSwiping(e) {
      if (e.first) {
        setFirst(offset);
      }
      const sign = e.deltaX > 0 ? 1 : -1;
      const nextOffset = first + sign * Math.abs(e.deltaX);
      onDrag(nextOffset);
    },
    trackMouse: true,
    trackTouch: true,
    preventDefaultTouchmoveEvent: true,
    delta: 5,
  });

  const onWheel = e => {
    setOffset(track.scrollLeft);
  };

  const handlers = {
    onMouseDown: isUseTouch && state.isScroll ? onMouseDown : null,
    onWheel: isUseWheel && state.isScroll ? onWheel : null,
    ref(wrapper) {
      setWrapper(wrapper && wrapper);
      setTrack(wrapper && wrapper.firstElementChild);
      return ref(wrapper);
    },
  };

  useEffect(() => {
    if (track) {
      checkOffset();
      track.scrollTo({
        left: offset,
      });
    }
  }, [offset]);

  useEffect(() => {
    if (wrapper) {
      dispatch({
        type: INIT,
        payload: { wrapper, track },
      });
    }
  }, [wrapper]);

  useEffect(() => {
    window.addEventListener(`resize`, onResize);
    return () => {
      window.removeEventListener(`resize`, onResize);
    };
  }, []);

  return { handlers, isStart: state.isStart, isEnd: state.isEnd };
};
