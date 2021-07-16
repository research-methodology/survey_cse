
import { Button } from 'reactstrap';
import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Loading } from './LoadingComponent';
//import {Verifyuser} from '../redux/Action_creators'
let token={};
class Verifyemail extends Component {
    constructor(props) {
        super(props);
        this.Handleverify = this.Handleverify.bind(this);
    }
         Handleverify=()=>{
        token=this.props.match.params.token;
          console.log('params are : '+token);

        this.props.Verifyuser(token);
    
        //this.props.history.push("/login");
        // Redirect("/login");
        if(this.props.auth.isVerified){
            console.log("is verified");
            this.props.history.push("/login");
        }
        }
    render() { 
        let btn = <Button className="btn-block bg-secondary" onClick={this.Handleverify}>confrim registration</Button>
        if(this.props.auth.isLoading){
            btn = <Button className="btn-block bg-secondary"><Loading/></Button>
        }
        let msg = null;
        if(this.props.auth.errMess !== null){
            msg =<div className="alert alert-danger text-center" role="alert">
                {this.props.auth.errMess}
            </div>
        }
        
        return (
            <div>
                {msg}
            <div className="d-flex justify-content-center col-12 col-md">
            <p className="row m-5">     
            Thank you , you are in a good way, click here to verify membership  &nbsp; {btn}
         </p>
         </div>
            </div>
        );
    }
}
 
export default withRouter(Verifyemail);
