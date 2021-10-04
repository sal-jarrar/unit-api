import React, { useContext, useEffect } from 'react';
import { UnitContext } from './context/unitContext';
import { Container, Row, Table } from 'react-bootstrap';

const App = () => {
  const { unitState, getCustomers } = useContext(UnitContext);
  console.log(unitState);
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <Container className='mt-5'>
      <h1 className='text-center'>Unit API</h1>
      <Row>
        <h4>List of All Customers</h4>
      </Row>
      <Table className='mt-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>BusinessCustomer</th>
            <th>City</th>
            <th>Phone</th>
            <th>EntityType</th>
          </tr>
        </thead>
        <tbody>
          {unitState.customers &&
            unitState.customers.map((customers) => (
              <tr key={customers.id}>
                <th scope='row'>{customers.id}</th>
                <td>{customers.attributes.name}</td>
                <td>{customers.attributes.address.city}</td>
                <td>{customers.attributes.phone.number}</td>
                <td>{customers.attributes.entityType}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
