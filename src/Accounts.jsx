import React, { useContext, useEffect } from 'react';
import { UnitContext } from './context/unitContext';
import { Container, Row, Table } from 'react-bootstrap';

const Accounts = () => {
  const { unitState, getAccounts } = useContext(UnitContext);
  console.log(unitState);
  useEffect(() => {
    getAccounts();
  }, []);
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
    </Container>
  );
};

export default Accounts;
