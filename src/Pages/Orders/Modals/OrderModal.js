import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CancelModal = ({ showCancel, handleCancelClose, handleCancelOrder }) => {
  return (
    <Modal show={showCancel} onHide={handleCancelClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hủy đơn hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn có chắc muốn hủy đơn hàng này?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelClose}>
          Quay lại
        </Button>
        <Button variant="danger" onClick={handleCancelOrder}>
          Hủy đơn hàng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CancelSuccessModal = ({
  showCancelSuccess,
  handleCancelSuccessClose,
}) => {
  return (
    <Modal
      show={showCancelSuccess}
      onHide={handleCancelSuccessClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thông báo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thành công</h4>
        <p>Đơn hàng của bạn đã được hủy</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={handleCancelSuccessClose} variant="success">
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DeliveredModal = ({
  showDelivered,
  handleDeliveredClose,
  handleDelivered,
}) => {
  return (
    <Modal show={showDelivered} onHide={handleDeliveredClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn xác nhận đã nhận được đơn hàng này?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeliveredClose}>
          Quay lại
        </Button>
        <Button variant="success" onClick={handleDelivered}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export { CancelModal, CancelSuccessModal, DeliveredModal };
