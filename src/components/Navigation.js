import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    };
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
        render(){
            return(
                <React.Fragment>
                                 <Navbar dark expand="md">
            
                            <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                                <NavbarBrand className="mr-auto" href="/"><img src="" alt="user Servey Appliction"/></NavbarBrand>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/dashboard'><span className="fa fa-address-card fa-lg"></span>Dashboard</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/respondent'><span className="fa fa-address-card fa-lg"></span>questions</NavLink>
                                    </NavItem>
                                    </Nav>
                                  
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Button ><NavLink className="nav-link" to='/login'><span className="fa fa-sign-in fa-lg"></span> Login</NavLink></Button>
                                        </NavItem>
                                    </Nav>
                                   
                                        <NavItem>
                                            <Button className=""><NavLink className="nav-link" to='/signup'><span className="fa fa-user-plus fa-lg"></span> Signup</NavLink></Button>
                                        </NavItem>
                                    
                                </Collapse>
                               
                            </div>
                    </Navbar>
                    </React.Fragment>
            );
                       
                
            
        }
   
    }
