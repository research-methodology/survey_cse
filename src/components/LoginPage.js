import React, { Component } from 'react';
import {  Button,Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

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
          let msg = null;
          if(this.props.auth.errMess !== null){
              msg =<div className="alert alert-danger" role="alert">
              {this.props.auth.errMess} 
            </div>
          }
          else if(this.props.auth.isAuthenticated){
                msg= <div className="alert alert-primary" role="alert">
       you are logged in
     </div>
             }
        let loginB = <Button type="submit" value="submit" color="primary">Login</Button>;
        if(this.props.auth.isLoading){
            loginB =<Button color="light"><Loading/></Button>     
        }
return(
    <div className="container text-center">
        <div className="text-center">
        {msg}
        </div>
        
    <div className="row">
    <Breadcrumb>
  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
  <BreadcrumbItem active>Login</BreadcrumbItem>
</Breadcrumb> 
<div className="col-12">
<h3>Login-page</h3>
<hr/>
</div>
    </div>
        <div className="row">
            <div className="col-12 col-md-5 offset-md-3">
                <div className="surveyContainer m-1 pl-5 pr-5">
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
                            {loginB}
                            
                        </Form>
                        </div>
                        </div>
        </div>
    </div>
);

}}
export default Login;