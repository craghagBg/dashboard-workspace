import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const CreateAlert = ({ pairNames, createAlertHandler }) => {
  const [show, setShow] = useState(false);
  const [pair, setPair] = useState(pairNames[0]);
  const [value, setValue] = useState(0);

  const onChangePair = e => setPair(e.target.value);
  const onChangeValue = e => setValue(e.target.value);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    createAlertHandler({ pair, value });
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow}>🔔</div>
      <Modal show={show} onHide={handleClose} dialogClassName="text-dark">
        <Modal.Header closeButton>
          <Modal.Title>Create Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Ceate Alert On:</Form.Label>
                <Form.Control as="select" onChange={onChangePair}>
                  {pairNames.map((p, key) => {
                    return (
                      <option key={key} value={p}>
                        {p}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  onChange={onChangeValue}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CreateAlert.propTypes = {
  pairNames: PropTypes.array.isRequired,
  createAlertHandler: PropTypes.func.isRequired
};

export default CreateAlert;
