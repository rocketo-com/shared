import React, { useState, useEffect, useRef } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import clickOutside from '../../utils/clickOutside';
import { Wrap, Body, StyledInput, StyledIcon, Option, Popover, Label } from './styled';

// @TODO: added prop–types for the component

const FOCUS_DELAY = 100;

const Select = ({
  className = '',
  // DEPRECATED
  defaultValue = null,
  value: outerValue = null,
  label,
  onChange,
  customOption,
  options,
  placeholder,
  readOnly,
  tabIndex,
  withSearch,
  error,
  touched,
}) => {
  if (defaultValue) {
    // eslint-disable-next-line no-console
    console.info(
      '"defaultValue" prop for Select component is deprecated. Please, use prop "value" instead',
    );
  }

  const select = useRef(null);
  const input = useRef(null);
  const [search, setSearch] = useState('');
  const [value, setValue] = useState(defaultValue || outerValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = event => setSearch(event.target.value);

  const toggle = () => readOnly || setIsOpen(!isOpen);

  clickOutside(select, () => setIsOpen(false));

  const handleOnChange = v => {
    onChange(v);
    setValue(v);
  };

  useEffect(() => {
    let timeout = '';

    if (withSearch && input.current && isOpen) {
      timeout = setTimeout(() => {
        input.current.focus();
      }, FOCUS_DELAY);
    }

    if (!isOpen) {
      setSearch('');
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (defaultValue !== value || outerValue !== value) {
      setValue(defaultValue || outerValue);
    }
  }, [defaultValue, outerValue]);

  const active = options.find(o => o.key === value);

  const items = withSearch
    ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  const searchInput = withSearch && (
    <StyledInput ref={input} flat="white" onChange={handleSearch} value={search} />
  );

  const activeComponent = () => {
    if (active) {
      if (customOption) {
        return customOption({ option: active });
      }

      return active.label;
    }

    return placeholder;
  };

  return (
    <Wrap ref={select} className={className}>
      {label && <Label>{label}</Label>}
      <Body
        onClick={toggle}
        isOpen={isOpen}
        flat="white"
        readOnly={readOnly}
        tabIndex={tabIndex}
        withSearch={withSearch}
        error={touched && error}
      >
        {activeComponent()}
        <Popover isOpen={isOpen}>
          {searchInput}
          <Scrollbars autoHeight autoHeightMax={200}>
            {items.map(option => {
              const onHandleClick = () => handleOnChange(option.key);
              const optionComponent = customOption ? customOption({ option }) : option.label;

              return (
                <Option key={option.key} onClick={onHandleClick}>
                  {optionComponent}
                </Option>
              );
            })}
          </Scrollbars>
        </Popover>

        <StyledIcon isOpen={isOpen} />
      </Body>
    </Wrap>
  );
};

Select.defaultProps = {
  className: '',
  defaultValue: null,
  onChange: () => {},
  options: [],
  placeholder: 'Select',
  flat: 'grey',
};

export const RFSelect = ({ input, ...props }) => <Select {...input} {...props} />;

export default Select;
