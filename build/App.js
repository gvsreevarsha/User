import React from 'react';
//import logo from './logo.svg';
import './App.css';
import userindex from './components/userindex';
import { Navbar,NavbarBrand } from 'reactstrap';
//import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div class="container" id="Navbar">
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/gitamlogo.png' height="30" width="41" alt='GITAM Bengaluru' />GITAM Bengaluru</NavbarBrand>
                <div class="navbar-nav ">
                    <a class="nav-link" href="#"><span class="fa fa-home fa-lg"></span>DashBoard</a>
                    <a  href="./personaldetails"><span class="fa fa-info fa-lg"></span>Personal Details</a>
                    <a  href="./calender"><span></span>Calender</a>
                    <a  href="./changepassword"><span></span>Change Password</a>
                    <a  href="./logout"><span></span>Logout</a>
                </div>            
            </div>
      </Navbar>
      <userindex />
    </div>
  );
}

export default App;
