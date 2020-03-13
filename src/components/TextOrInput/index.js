import React, { useState, useEffect } from 'react';
import { isValidPhoneNumber as validatePhoneNumber } from 'react-phone-number-input';
import { PhoneInput } from '../Input/styled';
import { Fill as LoadingFill } from '../Loading';
import { validateEmail } from '../../utils/validate';
import { Wrap, Text, StyledIcon, StyledInput, Placeholder } from './styled';

/**
 * It’s element which transform from string to input.
 * And also string may be just a string or a component with styles.
 * After click an a text, component transforms to input and set value and onChange to input.
 * After input onBlur, input transform to string.
 */

// @TODO: think about make 'canEdit' prop os equal true by default. Implement it
// and check all places then haven't canEdit prop.

const validateByType = {
  email: validateEmail,
  phone: validatePhoneNumber,
};

const inputByType = {
  email: <StyledInput />,
  text: <StyledInput />,
  phone: <PhoneInput />,
};

const textByType = {
  phone: <Text />,
  email: <Text />,
  text: <Text />,
};

const TextOrInput = ({
  canEdit,
  children,
  onBlurDisabled,
  renderText,
  onSave,
  onUpdate,
  placeholder,
  inputSize = 'sm',
  textOrInputType = 'text',
  type: inputType,
  // Useful when providing children
  forceSave = false,
  ...props
}) => {
  const [type, setType] = useState('text');
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(children || '');
  const [isError, setIsError] = useState(false);
  const [isShakerAnimation, setIsShakerAnimation] = useState(false);

  const isInput = type === 'input';

  const validate = validateByType[inputType] || (() => true);

  useEffect(() => {
    const isValid = validate(value);

    if (!isValid) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    if (type !== textOrInputType) {
      setType(textOrInputType);
    }
  }, [textOrInputType]);

  useEffect(() => {
    setValue(children);
  }, [children]);

  useEffect(() => {
    let timeout = '';

    if (isShakerAnimation) {
      timeout = setTimeout(() => setIsShakerAnimation(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [isShakerAnimation]);

  const save = async () => {
    const isValid = validate(value);

    if (!isValid) {
      setIsShakerAnimation(true);

      return;
    }

    // Update value if we have changes or truthy forceSave
    if (children !== value || forceSave) {
      try {
        setLoading(true);

        const data = await onUpdate(value);

        setType('text');
        onSave({ value, data, error: null });
      } catch (e) {
        setIsError(true);

        onSave({ value: null, data: null, error: e });
      }

      setLoading(false);
    } else {
      setType('text');
    }
  };

  const onBlur = () => {
    if (onBlurDisabled) return;
    save();
  };

  const onChange = eventOrValue => {
    const inputValue =
      eventOrValue && eventOrValue.target ? eventOrValue.target.value : eventOrValue;

    const isValid = validate(inputValue);

    if (!isValid) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    props.onChange(inputValue);
    setValue(inputValue);
  };

  const onKeyUp = event => {
    if (event.key === 'Escape') {
      setValue(children);
      setType('text');

      const isValid = validate(value);

      if (isValid) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }

    if (event.key === 'Enter') {
      save();
    }
  };

  const renderTextComponent = () => {
    const text = renderText || textByType[inputType] || <span />;
    const element = value.length ? text : <Placeholder />;
    const children = value.length ? value : placeholder;

    return React.cloneElement(element, {
      children,
      error: isError,
      ...(canEdit ? { onClick: () => setType('input') } : {}),
    });
  };

  const renderInput = () => {
    const input = inputByType[inputType] || <StyledInput />;

    return React.cloneElement(input, {
      ...props,
      type: inputType,
      size: inputSize,
      touched: isError,
      error: isError,
      autoFocus: true,
      isShakerAnimation,
      onChange,
      onKeyUp,
      onBlur,
      value,
      placeholder,
    });
  };

  const textComponent = renderTextComponent();
  const inputComponent = renderInput();

  return (
    <Wrap isInput={isInput} canEdit={canEdit}>
      {loading && <LoadingFill color="#08d9d6" size="sm" />}
      {isInput ? inputComponent : textComponent}
      {!isInput && canEdit && <StyledIcon name="circle-pencil" width="27" height="28" />}
    </Wrap>
  );
};

TextOrInput.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  // onUpdate triggered when we want to make a request for updated value
  onUpdate: () => {},
  // onSave triggered when we have any results from onUpdate action and provide data or error from request
  onSave: () => {},
  canEdit: true,
  placeholder: '',
};

export default TextOrInput;
