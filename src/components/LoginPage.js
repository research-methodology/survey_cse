import React, { Component } from 'react';
import {  Button,Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


class Login extends Component{
    constructor(props) {
        super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    };
    handleLogin(event) {
            this.props.loginUser({email: this.email.value, password: this.password.value});
        event.preventDefault();

    }
      render(){
return(
    <div className="container">
    <div className="row">
    <Breadcrumb>
  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
  <BreadcrumbItem active>Login</BreadcrumbItem>
</Breadcrumb> 
<div className="col-12">
<h3>Login-page</h3>
<hr/>
</div>
<Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        </div>
                        </div>
);

}}
export default Login;