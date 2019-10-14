import ResponsiveMenu from 'react-responsive-navbar';
import React from "react";
import { Link, Redirect } from "react-router-dom";

import styled from 'styled-components';

import { Navbar } from 'reactstrap';

const NavbarDropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

const StyledNavbar = styled.div`
  
  ul {
    height: 50px;
    background-color: white;
    text-align: center;
    margin: 0px;
  }
  li {
    padding-top: 20px;
    display: inline-block;
    font-size: 13px;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    color: black;
    &:hover {
      color: gray;
      border-bottom: 1px solid
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const listItem = styled.li`
  position: relative;
  display: block;
  &:hover ${NavbarDropdown} {
    display: block;
  };
`;

class TopNav extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default TopNav;