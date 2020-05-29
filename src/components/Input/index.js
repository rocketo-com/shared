import React, { forwardRef, useState, useEffect } from 'react';
import { formatPhoneNumber } from 'rocketo-helpers';
import { Wrap, Label, StyledInput, Error } from './styled';

const FILTERS_MAP = {
  phone: formatPhoneNumber,
};

const Input = forwardRef((props, ref) => {
  const {
    className,
    error,
    label,
    touched,
    value,
    onChange,
    type,
    flat,
    readOnly,
    disabled,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState(value);

  const handleSetInputValue = (v = '') => {
    const filterHelper = FILTERS_MAP[type];

    if (filterHelper) {
      const filteredValue = filterHelper(v);
      if (filteredValue) {
        setInputValue(filteredValue);
      } else {
        setInputValue('');
      }
    } else {
      setInputValue(v);
    }
  };

  const handleOnChange = event => {
    handleSetInputValue(event.target.value);
    onChange(event);
  };

  useEffect(() => {
    handleSetInputValue(value);
  }, [value]);

  return (
    <Wrap className={className}>
      <Label>
        {label && <span>{label}</span>}
        <StyledInput
          ref={ref}
          flat="white"
          disabled={readOnly || disabled}
          error={touched && error}
          type={type}
          onChange={handleOnChange}
          value={inputValue}
          {...rest}
        />
        {touched && error && <Error>{error}</Error>}
      </Label>
    </Wrap>
  );
});

Input.defaultProps = {
  flat: 'grey',
  type: 'text',
  size: 'md',
};

// eslint-disable-next-line react/no-multi-comp
export const RFInput = forwardRef(({ input, meta, ...props }, ref) => (
  <Input ref={ref} {...input} {...meta} {...props} />
));

export { Label };

export default Input;
