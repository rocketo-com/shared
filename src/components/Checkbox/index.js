import React from 'react';
import { Wrap, Icon, Input, Label } from './styled';

const Checkbox = ({ className, disabled, value, onChange, label, touched, error }) => (
  <>
    <Wrap className={className}>
      <Label disabled={disabled}>
        <Icon checked={value} />
        <Input type="checkbox" checked={Boolean(value)} disabled={disabled} onChange={onChange} />
        <span>{label}</span>
      </Label>
    </Wrap>

    {touched && error && <p>{error}</p>}
  </>
);

export const RFCheckbox = ({ input, meta, ...props }) => (
  <Checkbox {...input} {...meta} {...props} />
);

export default Checkbox;
