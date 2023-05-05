import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({ show, message, onConfirm, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Hủy
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;