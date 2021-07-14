
import { Button } from 'reactstrap';
import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {Verifyuser} from '../redux/Action_creators'
let token={};
class Verifyemail extends Component {
    constructor(props) {
        super(props);
        this.Handleverify = this.Handleverify.bind(this);
    }
componentDidMount(){
token=this.props.match.params.token;
}
  
         Handleverify=()=>(dispatch)=>{
          console.log('params are : '+token);
        // this.props.Verifyuser(token);
        dispatch(Verifyuser(token))
        this.props.history.push("/login");
        // Redirect("/login");
        }
    render() { 
        
        return (  
            <div className="d-flex justify-content-center col-12 col-md">
            <p className="row m-5">     
            Thank you , you are in a good way, click here to verify membership  &nbsp; <Button className="btn-block bg-secondary" onClick={this.Handleverify}>verify membership</Button>
         </p>
         </div>
        );
    }
}
 
export default withRouter(Verifyemail);
