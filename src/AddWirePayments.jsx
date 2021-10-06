import React, { useContext, useState } from 'react';
import { UnitContext } from './context/unitContext';
import { Container, Col, Row, Button, Form, FormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AddWirePayments = () => {
  const { addPayment } = useContext(UnitContext);
  const history = useHistory();
  const [businessName, setBusinessName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      data: {
        type: 'wirePayment',
        attributes: {
          amount: parseInt(amount),
          description: 'Wire Payment from Sandbox',
        },
        relationships: {
          account: {
            data: {
              type: 'depositAccount',
              id: businessId,
            },
          },
        },
      },
    };
    history.push('/accounts');
    await addPayment(data);
  };
  return (
    <Container className='mt-5'>
      <h1 className='text-center'>Unit API</h1>
      <Row>
        <h4>Add Payments</h4>
      </Row>

      <Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='businessName'>Business Name</Form.Label>
                <Form.Control
                  type='text'
                  name='businessName'
                  id='businessName'
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleType'>Account ID</Form.Label>
                <Form.Control
                  type='text'
                  name='entityType'
                  id='exampleType'
                  value={businessId}
                  onChange={(e) => setBusinessId(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleNumber'>Account Type</Form.Label>
                <Form.Control
                  type='text'
                  name='number'
                  id='exampleNumber'
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='am'>Amount</Form.Label>
                <Form.Control
                  type='text'
                  name='am'
                  id='am'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Col className='mt-3'>
            <FormGroup>
              <Button type='submit'>Add</Button>
            </FormGroup>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};
export default AddWirePayments;
