import React, { useState, useEffect } from 'react';
import { Portal } from 'react-portal';
import { Ring } from '../Loading';
import { Inner, Header, Overlay, Title, StyledIcon, Buttons } from './styled';

const Modal = ({
  onClose,
  onOpen,
  open,
  children,
  openBy,
  title,
  isSubmitLoading,
  isSubmitDisabled,
  onSubmit,
  width = '750',
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen && onOpen();
  };
  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const submit = () => {
    if (!onSubmit) return null;

    if (isSubmitLoading) return <Ring size="md" />;

    const onHandleSubmit = event => !isSubmitDisabled && onSubmit(event, handleClose);

    return (
      <StyledIcon
        isSubmitDisabled={isSubmitDisabled}
        onClick={onHandleSubmit}
        name="circle-check-green"
        size="34"
      />
    );
  };

  return (
    <>
      {openBy({ handleOpen })}
      <Portal>
        <Overlay isOpen={isOpen} onClick={handleClose} />
        <Inner isOpen={isOpen} width={width}>
          <Header>
            <Title>{title}</Title>
            <Buttons>
              {submit()}
              <StyledIcon onClick={handleClose} name="circle-close" size="34" />
            </Buttons>
          </Header>
          {typeof children === 'function' ? children({ handleClose }) : children}
        </Inner>
      </Portal>
    </>
  );
};

// @TODO: added prop-types for _shared
// Modal.propTypes = {
//   open: PropTypes.bool,
//   children: PropTypes.func,
//   openBy: PropTypes.func,
//   title: PropTypes.string,
//   width: PropTypes.string,
//   isSubmitLoading: PropTypes.bool,
//   isSubmitDisabled: PropTypes.bool,
//   onSubmit: PropTypes.func,
// };

Modal.defaultProps = {
  open: false,
};

export default Modal;
