import 'react-phone-input-2/lib/style.css';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { validatePhoneNumber } from 'rocketo-helpers';
import styled from 'styled-components';
import { Label } from '../Input';

export default styled(({ className, label, onChange = () => {}, ...props }) => (
  <div className={className}>
    <Label>
      {label && <span>{label}</span>}
      <PhoneInput
        buttonClass="phone-number-button"
        enableLongNumbers // For better UX on paste local phone numbers.
        isValid={phone => validatePhoneNumber(`+${phone}`)}
        inputClass="phone-number-input"
        onChange={(_1, _2, event) => onChange(event)}
        {...props}
      />
    </Label>
  </div>
))`
  .phone-number-input {
    width: 100% !important;
    height: 43px !important;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    border: 1px solid #dad2d2 !important;
    border-radius: 10px !important;

    :focus {
      border: 1px solid #08d9d6 !important;
    }

    ::placeholder {
      color: #353535;
      font-style: italic;
    }

    :disabled {
      cursor: not-allowed;
    }
  }
  .phone-number-button,
  .phone-number-button > .selected-flag {
    border-radius: 10px 0 0 10px !important;
  }
`;
