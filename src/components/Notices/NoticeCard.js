import React from 'react';
import { NOTICES_TITLES } from '../../constants/notices';
import Icon from '../Icon';
import { StyledCard, StyledCardInner, Header, Content, Cross } from './styled';

const NOTICES_ICONS = {
  INFO: 'info',
  SUCCESS: 'circle-check-green',
  ERROR: 'error',
  WARNING: 'warning',
};

const NoticeCard = ({ hideNotice, notice }) => {
  const iconName = NOTICES_ICONS[notice.type];

  return (
    <StyledCard>
      <StyledCardInner>
        {iconName && <Icon name={iconName} size={32} />}
        <div>
          <Header>{NOTICES_TITLES[notice.type] || ''}</Header>
          <Content>{notice.value}</Content>
        </div>
      </StyledCardInner>
      <Cross onClick={() => hideNotice(notice.id)} />
    </StyledCard>
  );
};

export default NoticeCard;
