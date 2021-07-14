
import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button,  Label, Col,Row} from 'reactstrap';
import { Control,Form,Errors,actions } from "react-redux-form";
import { Link,Redirect} from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  
const verifypassword=()=>{
    const password=document.getElementById('password').value;
    const confirmpassword=document.getElementById('confirm-password').value;
  return(
    confirmpassword===password
  ); 

}

class Signuppage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleSubmit(values) {   
     
  
        this.props.Signup_form(values.first_name,values.last_name,values.email,values.password,values.confirm_password);
        // window.location.href('confirmpass');
        this.props.resetSignupForm();
         <Redirect to='/confirmemail'/>
      

    }
render(){
    return(

    <div className="container">
    <div className="row">
    <Breadcrumb>

  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
  <BreadcrumbItem active>Signup</BreadcrumbItem>
</Breadcrumb> 
<div className="col-12">
<h3>Signup-page</h3>
<hr/>
</div>
<Form  model="signup" onSubmit={(values)=>this.handleSubmit(values)}>
            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".first_name" id="first_name" name="first_name"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".first_name"
                                        show="touched"
                                        messages={{
                                            required: 'Required  ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="last_name" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".last_name" id="last_name" name="last_name"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".last_name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.password model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        type="password"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password" md={2}>confirm_password</Label>
                                <Col md={10}>
                                    <Control.password model=".confirm_password" id="confirm-password" name="confirm_password"
                                        placeholder="confirm-Password"
                                        className="form-control"
                                        type="password"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15),verifypassword
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".confirm_password"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                            verifypassword:"Passwords do not match"
                                        }}
                                     />
                                </Col>
                            </Row>
                            
                           <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                    
                                         /> {' '}
                                            <strong>By clicking create account you agree to our rules and regulations?</strong>
                                        </Label>
                                   </div>
                                </Col>
                               
                         </Row>

                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Create account
                                    </Button>
                                </Col>
                           </Row>
            </Form>
</div>

</div>

);
}
}
export default Signuppage;