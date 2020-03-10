import styled from 'styled-components';
import Icon from '../Icon';
import Input from '../Input';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({ isInput, canEdit }) => !isInput && canEdit && 'cursor: pointer'};
`;

export const StyledIcon = styled(Icon)`
  margin-left: 14px;
  opacity: 0;
  transition: 0.2s opacity;

  ${Wrap}:hover & {
    opacity: 1;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
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
