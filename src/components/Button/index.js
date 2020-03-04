import React, { forwardRef } from 'react';
import { Root, IconPlus } from './styled';

const Button = forwardRef(({ variant, children, plusIcon, type, ...props }, ref) => (
  <Root ref={ref} variant={variant} type={type} {...props}>
    {plusIcon && <IconPlus variant={variant} />}
    {children}
  </Root>
));

Button.defaultProps = {
  variant: 'default',
  type: 'button',
};

export default Button;
