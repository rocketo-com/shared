import React from 'react';
import { TipHover, Root } from './styled';

const Tooltip = ({ tip, children, className, position, top, width }) => (
  <Root className={className}>
    <TipHover width={width} position={position} top={top}>
      {typeof tip === 'function' ? tip() : tip}
    </TipHover>
    {children}
  </Root>
);

Tooltip.defaultProps = {
  width: 100,
  position: 'left',
};

export default Tooltip;
