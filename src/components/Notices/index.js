import React, { useEffect, useState, useCallback } from 'react';
import uuid from 'uuid/v4';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NoticeCard from './NoticeCard';
import { Wrap, Inner } from './styled';
import { subscribeOnShowNotice } from '../../events/notices';

const DELAY_TO_AUTO_HIDE = 5000;
let timeout;

const Notices = ({ className }) => {
  const [log, setLog] = useState([]);

  const createNotice = (type, value) => ({
    id: uuid(),
    type,
    value,
  });

  const createNewNotice = useCallback((type, value) => {
    const stringValue = typeof value === 'string' ? value : value.toString();

    const newNotice = createNotice(type, stringValue);

    setLog([...log, newNotice]);
  });

  const hideNotice = id => {
    const newLog = [...log.filter(l => l.id !== id)];

    setLog(newLog);
  };

  const hideLastNotice = innerLog => {
    timeout = setInterval(() => {
      const firstNotice = innerLog.shift();
      if (firstNotice) {
        hideNotice(firstNotice.id);
      }
    }, DELAY_TO_AUTO_HIDE);
  };

  useEffect(() => {
    const unsubscribe = subscribeOnShowNotice(createNewNotice);

    return () => unsubscribe();
  }, [createNewNotice]);

  useEffect(() => {
    if (log.length) {
      hideLastNotice(log);
    }

    return () => clearInterval(timeout);
  }, [log]);

  return (
    <Wrap className={className}>
      <Inner>
        {!!log.length && (
          <TransitionGroup>
            {log.map(item => (
              <CSSTransition key={item.id} timeout={300} classNames="notices">
                <NoticeCard notice={item} hideNotice={hideNotice} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </Inner>
    </Wrap>
  );
};

export default Notices;
