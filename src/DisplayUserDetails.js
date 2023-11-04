import React from 'react';
import Card from 'react-bootstrap/Card';
import { Table, Row,Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useLocation} from 'react-router-dom';


const DisplayUserusers=()=> {
    let locate= useLocation();

    let user= locate.state;
  
  return <>
  <Row xs={1} md={2} className="g-1">
     
    <Card className='userCard'>
      <Card.Header >
      <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="/">Back</Nav.Link>
          </Nav.Item>
        </Nav>
      <h5>{`${user.name.title} ${user.name.first} ${user.name.first}`}</h5></Card.Header>
      <Card.Body>
        <Card.Title><img src={user.picture.large} alt={`${user.name.first}pic`} id='userImage'  /></Card.Title>
        <Card.Text>
        <Table borderless responsive='sm' size="sm">
        <tbody>
          <tr>
            <td className="profileCells">Address:</td>
            <td>{`${user.location.street.number}, ${user.location.street.name}, 
            ${user.location.city}, ${user.location.state}`}</td>
          </tr>
          <tr>
            <td className="profileCells">Country</td>
            <td>{user.location.country}</td>
          </tr>
          <tr>
            <td className="profileCells">Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td className="profileCells">Phone Number</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td className="profileCells">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className="profileCells">Date of Birth</td>
            <td>{user.dob.date}</td>
          </tr>
          <tr>
            <td className="profileCells">Nationality</td>
            <td>{user.nat}</td>
          </tr>
        </tbody>
      </Table>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    </Row>
  </>
}

export default DisplayUserusers;