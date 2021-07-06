import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
// import Search from './Search';

function Header() {
    return (
       <Navbar bg="primary" variant="dark">
    <Navbar.Brand className="p-3" >Employee Directory</Navbar.Brand>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form> */}
    {/* <Search  className="mr-sm-2"/> */}
  </Navbar>
    )
}

export default Header;