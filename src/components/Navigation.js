import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import logo from '../assets/images/logo.png';
export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isNavOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    };
    // componentDidMount(){
    //     this.props.Userprofile();
    //     console.log('User info for profile is',this.props.auth.usercreds);
    // }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        this.props.Userprofile();
       
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    handleLogout(){
        let token = localStorage.getItem("token");
        this.props.logout(token);
        localStorage.removeItem("token");
    }
        render(){
            let modelbody={};
           
            
            if(this.props.auth.isLoading){
                modelbody=<Label color="light"><Loading/></Label>
            }
            else{
                modelbody=(  <ModalBody>
                    <Form>
    
                        <FormGroup>
                            <Label>First_name: </Label><Label><h5>{this.props.auth.usercreds.first_name}</h5></Label>
                          
                        </FormGroup>
                        <FormGroup>
                            <Label>Last_name: </Label><Label><h5>{this.props.auth.usercreds.last_name}</h5></Label>
                        </FormGroup>
                        <FormGroup>
                        <Label>Email: </Label><Label><h5>{this.props.auth.usercreds.email}</h5></Label>
                        </FormGroup>

                    </Form>
                </ModalBody>);
            }
            let toggling = (<Nav className="ml-auto" navbar>
            <div class="btn-group" role="group" aria-label="Basic example">
                <Button ><NavLink className="nav-link" to='/login'><span className="fa fa-sign-in fa-lg"></span> Login</NavLink></Button>
            
            
                <Button className="bg-light text-dark"><NavLink className="nav-link text-dark" to='/signup'><span className="fa fa-user-plus fa-lg"></span> Signup</NavLink></Button>
            </div>
        </Nav>)
        if(this.props.auth.isAuthenticated){
            
            let logoutB = <NavItem>
            <Button onClick={this.handleLogout} ><span className="fa fa-sign-out fa-lg"></span> Sign out</Button>
        </NavItem> ;
        if(this.props.auth.isLoading){
            logoutB = <Button color="light"><Loading/></Button>;
        }
            toggling = (
            
                <Nav className="ml-auto" navbar>
             <NavItem>
             <NavLink className="nav-link" to='/dashboard' ><span className="fa fa-dashboard fa-lg"></span>Dashboard</NavLink>
             </NavItem>  <NavItem> 
                &nbsp;<Button onClick={this.toggleModal}><span className="fa fa-user fa-lg"></span>Profile</Button>
            </NavItem> 
            &nbsp;                  
             {logoutB}
            
             
            </Nav>  
            
            )
        }
        
            return(
                
                <React.Fragment>
                                 <Navbar dark expand="md">
            
                            <div className="container-fluid">
                            <NavbarToggler onClick={this.toggleNav} />
                                <NavbarBrand className="" href="/">
                                     <img src={logo} style={{width:"60px"}} alt="logo"/>
                                    <span>DoServey </span>
                                    </NavbarBrand>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                    </NavItem>
                                    
                                    </Nav>
                                    {toggling}
                                </Collapse>
                                
                            </div>
                    </Navbar>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>User profile</ModalHeader>
                    {modelbody}
                  
                </Modal>
                    </React.Fragment>
            );
                       
                
            
        }
   
    }
