import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar,Modal,InputGroup,Form,Button } from 'react-bootstrap';
import { useGetAllUserDataQuery } from '../Services/apiConfig2';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const { data, error, isLoading } = useGetAllUserDataQuery()
 
  const navigate = useNavigate()

  const handleLogout = () => {

    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('ltk');
    window.location.href = '/';


  };

 const conditionalHeader = () => {
  if (data) {
    console.log("to go forward i need data", data.email)
    sessionStorage.setItem('loginStatus', 'loggedIn');
    sessionStorage.setItem('userInfo', data.email);

    return (
      <>
        <button className='btn btn-success'>
          <span className='glyphicon glyphicon-user'> Hi {data.email} </span>
        </button>
        &nbsp;
        <button className='btn btn-danger' onClick={handleLogout}>
          <span className='glyphicon glyphicon-log-out'></span> Logout
        </button>
      </>
    );
  }
 } 


  
 
  // const conditionalHeader = () => {n
  //   if (data) {
  //     console.log("to go forward i need data", data.email)
  //     sessionStorage.setItem('loginStatus', 'loggedIn');
  //     sessionStorage.setItem('userInfo', data.email);
   
  //     return (
  //       <>
  //         <button className='btn btn-success'>
  //           <span className='glyphicon glyphicon-user'> Hi {data.email} </span>
  //         </button>
  //         &nbsp;
  //         <button className='btn btn-danger' onClick={handleLogout}>
  //           <span className='glyphicon glyphicon-log-out'></span> Logout
  //         </button>
  //       </>
  //     );
  //   }
  //   else {
  //     return (
  //       <>
  //         <Link className='btn btn-success' to="/login">
  //           <span className='glyphicon glyphicon-log-in' > LogIn</span>
  //         </Link>
  //         &nbsp;
  //         <Link className='btn btn-warning' to="/register">
  //           <span className='glyphicon glyphicon-user'> Register</span>
  //         </Link>
  //       </>
  //     );
  //   }
  // }
// const handleClose=()=>
// {

// }
  return (
    <div>
  
    {/* <Modal centered size="sm" backdrop="static" keyboard="false" show={close} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <InputGroup className="mb-3">
               <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
              <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
      </Modal.Body>
        <Modal.Footer>
        <Button variant="danger">close</Button>
        </Modal.Footer>
       </Modal>   */}
       // end of Modal

      <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
        <a className="navbar-brand" href="#">Sohrab</a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Disabled</a>
            </li>
            <li className="nav-item" style={{ alignSelf: "end" }}>
              {conditionalHeader()}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header;