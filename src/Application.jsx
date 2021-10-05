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

const Application = (props) => {
  const { unitState, getApplications, createApplication } =
    useContext(UnitContext);
  // const [data, setData] = useState();
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessStreet, setBusinessStreet] = useState('');
  const [businessCity, setBusinessCity] = useState('');
  const [businessState, setBusinessState] = useState('');
  const [businessPostalCode, setBusinessPostalCode] = useState('');
  const [businessCountry, setBusinessCountry] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [ein, setEin] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [ssn, setSsn] = useState('');
  const [email, setEmail] = useState('');
  const [officerNumber, setOfficerNumber] = useState('');
  const [officerStreet, setOfficerStreet] = useState('');
  const [officerCity, setOfficerCity] = useState('');
  const [officerState, setOfficerState] = useState('');
  const [officerPostalCode, setOfficerPostalCode] = useState('');
  const [officerCountry, setOfficerCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      data: {
        type: 'businessApplication',
        attributes: {
          name: businessName,
          address: {
            street: businessStreet,
            city: businessCity,
            state: businessState,
            postalCode: businessPostalCode,
            country: 'US',
          },
          phone: {
            countryCode: '1',
            number: businessNumber,
          },
          stateOfIncorporation: 'CA',
          entityType: businessType,
          ip: '127.0.0.1',
          ein,
          officer: {
            fullName: {
              first: firstName,
              last: lastName,
            },
            dateOfBirth,
            ssn,
            email,
            phone: {
              countryCode: '1',
              number: officerNumber,
            },
            address: {
              street: officerStreet,
              city: officerCity,
              state: officerState,
              postalCode: officerPostalCode,
              country: 'US',
            },
          },
          contact: {
            fullName: {
              first: firstName,
              last: lastName,
            },
            email,
            phone: {
              countryCode: '1',
              number: officerNumber,
            },
          },
          beneficialOwners: [
            {
              fullName: {
                first: 'James',
                last: 'Smith',
              },
              dateOfBirth: '2012-04-05',
              ssn: '574567625',
              email: 'james@unit-finance.com',
              phone: {
                countryCode: '1',
                number: '2025550127',
              },
              address: {
                street: '650 Allerton Street',
                city: 'Redwood City',
                state: 'CA',
                postalCode: '94063',
                country: 'US',
              },
            },
            {
              fullName: {
                first: 'Richard',
                last: 'Hendricks',
              },
              dateOfBirth: '2012-04-03',
              ssn: '574572795',
              email: 'richard@unit-finance.com',
              phone: {
                countryCode: '1',
                number: '2025550158',
              },
              address: {
                street: '470 Allerton Street',
                city: 'Redwood City',
                state: 'CA',
                postalCode: '94063',
                country: 'US',
              },
            },
          ],
          tags: {
            userId: '2ab1f266-04b9-41fb-b728-cd1962bca52b',
          },
          idempotencyKey: '3a1a33be-4e12-4603-9ed0-820922389fb9',
        },
      },
    };
    await createApplication(data);
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Container className='mt-5'>
      <h2>List Of All Applications</h2>
      <Table className='mt-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>Business Type</th>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
            <th>Entity Type</th>
            <th>Business Status</th>
          </tr>
        </thead>
        <tbody>
          {unitState.applications &&
            unitState.applications
              .filter((app) => app.type === 'businessApplication')
              .map((application) => (
                <tr key={application.id}>
                  <th scope='row'>{application.id}</th>
                  <td>{application.type}</td>
                  <td>{application.attributes.name}</td>
                  <td>{application.attributes.address.city}</td>
                  <td>{application.attributes.phone.number}</td>
                  <td>{application.attributes.entityType}</td>
                  <td>{application.attributes.status}</td>
                </tr>
              ))}
        </tbody>
      </Table>
      <Row>
        <h4>Create a Business Application</h4>
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
                <Form.Label htmlFor='exampleType'>Business Type</Form.Label>
                <Form.Control
                  type='text'
                  name='entityType'
                  id='exampleType'
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleNumber'>Business Number</Form.Label>
                <Form.Control
                  type='text'
                  name='number'
                  id='exampleNumber'
                  value={businessNumber}
                  onChange={(e) => setBusinessNumber(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleEin'>EIN Number</Form.Label>
                <Form.Control
                  type='text'
                  name='ein"'
                  id='exampleEin'
                  value={ein}
                  onChange={(e) => setEin(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleAddress2'>
                  Business Address{' '}
                </Form.Label>
                <Form.Control
                  type='text'
                  name='address2'
                  id='exampleAddress2'
                  placeholder='123 street'
                  value={businessStreet}
                  onChange={(e) => setBusinessStreet(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='exampleCity'>City</Form.Label>
                <Form.Control
                  type='text'
                  name='city'
                  id='exampleCity'
                  value={businessCity}
                  onChange={(e) => setBusinessCity(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='exampleState'>State</Form.Label>
                <Form.Control
                  type='text'
                  name='state'
                  id='exampleState'
                  value={businessState}
                  onChange={(e) => setBusinessState(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='examplePostalCode'>PostalCode</Form.Label>
                <Form.Control
                  type='text'
                  name='postalCode'
                  id='examplepostalCode'
                  value={businessPostalCode}
                  onChange={(e) => setBusinessPostalCode(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='examplecountry'>Country</Form.Label>
                <Form.Control
                  type='text'
                  name='country'
                  id='examplcountry'
                  value={businessCountry}
                  onChange={(e) => setBusinessCountry(e.target.Value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Form.Label htmlFor='officerName'>
                    Officer First Name
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='firstName'
                    id='officerName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label htmlFor='ln'>Officer Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastName'
                    id='ln'
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Form.Label htmlFor='email'>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label htmlFor='officerNumber'>
                    Officer Number
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='officerNumber'
                    id='officerNumber'
                    value={officerNumber}
                    onChange={(e) => setOfficerNumber(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label htmlFor='dob'>Date Of Birth</Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    id='dob'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label htmlFor='exampleSsn'>SSN Number</Form.Label>
                  <Form.Control
                    type='text'
                    name='ssn"'
                    id='exampleSsn'
                    placeholder='000000005'
                    value={ssn}
                    onChange={(e) => setSsn(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='officerStreet'>
                  Officer Address{' '}
                </Form.Label>
                <Form.Control
                  type='text'
                  name='officerStreet'
                  id='officerStreet'
                  placeholder='123 street'
                  value={officerStreet}
                  onChange={(e) => setOfficerStreet(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Form.Label htmlFor='officerCity'>City</Form.Label>
                <Form.Control
                  type='text'
                  name='officerCity'
                  id='officerCity'
                  value={officerCity}
                  onChange={(e) => setOfficerCity(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='officerState'>State</Form.Label>
                <Form.Control
                  type='text'
                  name='officerState'
                  id='officerState'
                  value={officerState}
                  onChange={(e) => setOfficerState(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='OfficerPostalCode'>PostalCode</Form.Label>
                <Form.Control
                  type='text'
                  name='officerPostalCode'
                  id='OfficerPostalCode'
                  value={officerPostalCode}
                  onChange={(e) => setOfficerPostalCode(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Form.Label htmlFor='officerCountry'>Country</Form.Label>
                <Form.Control
                  type='text'
                  name='officerCountry'
                  id='officerCountry'
                  value={officerCountry}
                  onChange={(e) => setOfficerCountry(e.target.value)}
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

export default Application;
// {
//     type: 'businessApplication',
//     attributes: {
//       name: '',
//       address: {
//         street: '',
//         city: '',
//         state: '',
//         postalCode: '',
//         country: '',
//       },
//       phone: {
//         countryCode: '1',
//         number: '',
//       },
//       stateOfIncorporation: 'CA',
//       entityType: '',
//       ein: '',
//       officer: {
//         fullName: {
//           first: '',
//           last: '',
//         },
//         dateOfBirth: '',
//         ssn: '',
//         email: '',
//         phone: {
//           countryCode: '1',
//           number: '',
//         },
//         address: {
//           street: '',
//           city: '',
//           state: '',
//           postalCode: '',
//           country: '',
//         },
//       },
//       contact: {
//         fullName: {
//           first: '',
//           last: '',
//         },
//         email: '',
//         phone: {
//           countryCode: '1',
//           number: '',
//         },
//       },
//       beneficialOwners: [
//         {
//           fullName: {
//             first: 'James',
//             last: 'Smith',
//           },
//           dateOfBirth: '2012-04-05',
//           ssn: '574567625',
//           email: 'james@unit-finance.com',
//           phone: {
//             countryCode: '1',
//             number: '2025550127',
//           },
//           address: {
//             street: '650 Allerton Street',
//             city: 'Redwood City',
//             state: 'CA',
//             postalCode: '94063',
//             country: 'US',
//           },
//         },
//         {
//           fullName: {
//             first: 'Richard',
//             last: 'Hendricks',
//           },
//           dateOfBirth: '2012-04-03',
//           ssn: '574572795',
//           email: 'richard@unit-finance.com',
//           phone: {
//             countryCode: '1',
//             number: '2025550158',
//           },
//           address: {
//             street: '470 Allerton Street',
//             city: 'Redwood City',
//             state: 'CA',
//             postalCode: '94063',
//             country: 'US',
//           },
//         },
//       ],
//     },
//   }
