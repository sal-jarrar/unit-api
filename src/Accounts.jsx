import React, { useContext, useEffect, useState } from 'react';
import { UnitContext } from './context/unitContext';
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Table,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Accounts = () => {
  const { unitState, getAccounts, createAccount } = useContext(UnitContext);
  const [businessName, setBusinessName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [businessId, setBusinessId] = useState('');

  useEffect(() => {
    getAccounts();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      data: {
        type: 'depositAccount',
        attributes: {
          depositProduct: 'checking',
          tags: {
            purpose: 'checking',
          },
          idempotencyKey: '3a1a33be-4e12-4603-9ed0-820922389fb7',
        },
        relationships: {
          customer: {
            data: {
              type: 'customer',
              id: businessId,
            },
          },
        },
      },
    };
    await createAccount(data);
  };
  return (
    <Container className='mt-5'>
      <h1 className='text-center'>Unit API</h1>
      <Row>
        <h4>List of All Accounts</h4>
      </Row>
      <Table className='mt-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>Business Name</th>
            <th>Balance</th>
            <th>Available</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {unitState.accounts &&
            unitState.accounts.map((account) => (
              <tr key={account.id}>
                <th scope='row'>{account.id}</th>
                <td>{account.attributes.name}</td>
                <td>{account.attributes.balance}</td>
                <td>{account.attributes.available}</td>
                <td>{account.relationships.customer.data.id}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Row>
        <Link to='/wire-payments'>
          <Button>Add Payments</Button>
        </Link>
      </Row>
      <Row>
        <h4>Create an Business Account</h4>
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
                <Form.Label htmlFor='exampleType'>Business ID</Form.Label>
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
          </Row>

          <Col className='mt-3'>
            <FormGroup>
              <Button type='submit'>Create</Button>
            </FormGroup>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Accounts;
