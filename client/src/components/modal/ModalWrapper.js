import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { closeModal } from '../../actions/modalActions';

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  return (
    <Modal open={open} onClose={() => dispatch(closeModal())} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default ModalWrapper;
