import React from 'react';
import { useSelector } from 'react-redux';
import LoginModal from '../form/LoginModal';
import SignupModal from '../form/SignupModal';

const ModalManager = () => {
  const modalLookup = {
    LoginModal,
    SignupModal,
  };
  const currentModal = useSelector((state) => state.modal);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
