import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { approveApplication } from './api';

const ApproveApp = ({ buttonLabel, appId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        {buttonLabel}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Approve Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are You sure you want to approve this Application ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={async () => {
              setShow(false);
              const data = {
                data: {
                  type: 'applicationApprove',
                  attributes: {
                    reason: 'sandbox',
                  },
                },
              };
              await approveApplication(data, appId);
            }}
          >
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApproveApp;
