import React, {useState} from 'react';
// import { NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Welcome = () => {
  const [close, setclose] = useState(true)
  const handleClose=()=>{

      setclose(close)  
  }
  return (
       
      <Modal centered size="sm" backdrop="static" keyboard="false" show={close} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav>
      <Nav.Item>
         <Nav.Link href="/login">LogIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link href="/register"> Register</Nav.Link>
        </Nav.Item>
        </Nav>
      </Modal.Body>
        <Modal.Footer>
        <Button variant="danger">Danger</Button>
        </Modal.Footer>
       </Modal>  

  );
}



export default Welcome;

{/* <div>Welcome</div>
      <div>
        <NavLink className='btn btn-success' to="/login">
          <span className='glyphicon glyphicon-log-in' >LogIn</span>
          <h6>please sign in here</h6>
        </NavLink>
        &nbsp;
        <NavLink className='btn btn-warning' to="/register">
          <span className='glyphicon glyphicon-user'> Register</span>
          <h6>Register your account</h6>
        </NavLink>
      </div> */}
      
