import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const TopNavbar = ({auth: { isAuthenticated }, logout }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



    return (
      <div>
          <Navbar expand="md" light color="light"  
          >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret
                
              >
                NightIn
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/recipes" className={window.location.pathname === "/recipes" ? "nav-link active" : "nav-link"}>
                  Search for Recipes
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/movie" className={window.location.pathname === "/movie" ? "nav-link active" : "nav-link"}>
                    Search for Movies
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                NightOut
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/food" className={window.location.pathname === "/food" ? "nav-link active" : "nav-link"}>
                  Search for Food
                  </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/theaters" className={window.location.pathname === "/theaters" ? "nav-link active" : "nav-link"}>
                  Search for Movie Theaters
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Link
                to="/profile"
                className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
              >
                Profile
              </Link>
            </NavItem>
          { isAuthenticated ? <h1> Not Authenticated </h1> : 
            <NavItem>
            <a
              onClick={logout}
              >
                Logout
            </a>
          </NavItem> }
          </Nav>
          </Collapse>
          </Navbar>
        </div>
        ) ;
  }

TopNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(TopNavbar);