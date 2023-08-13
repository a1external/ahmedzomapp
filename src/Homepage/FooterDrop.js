import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Footer'
function Footer() {
  return (
    <>
     <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"></div>
    <div className='fd' >
     <DropdownButton
      align="end"
      title="Dropdown end"
      id="dropdown-menu-align-end"
      style={{marginRight:"10px"}}
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
     
    </DropdownButton>

<DropdownButton
align="end"
title="Dropdown end"
id="dropdown-menu-align-end"
>
<Dropdown.Item eventKey="1">Action</Dropdown.Item>
<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>

</DropdownButton></div>
    
</>  
  );
}

export default Footer;