import ResponsiveMenu from 'react-responsive-navbar';
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

const Menu = styled.div`
  
  ul {
    padding: 1px;
    background-color: white
  }
  li {
    display: inline-block;
    font-size: 15px;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    &:hover {
      color: white;
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

class HomeNav extends Component {
  render(){
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="800px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <Menu>
          <ul>
            <li className="nav-item">
              <Link to="/signin" className={window.location.pathname === "/movie" ? "nav-link active" : "nav-link"}>
                Sign in
              </Link>
            </li>
            <li className="nav-item">
                {/* haven't written the code for the page yet */}
              <Link
            to="/register"
            className={window.location.pathname === "/results" ? "nav-link active" : "nav-link"}
              >
                Register
              </Link>
            </li>
          </ul>
          </Menu>
        }
        />  
    );
  }
}

export default HomeNav;