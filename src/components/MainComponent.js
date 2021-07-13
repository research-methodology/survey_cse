
import React, { Component } from 'react';
import {Loading} from './LoadingComponent';
import Header from './HeaderComponent';
import RespondentHome from './RespndentPart/RespondentHomepage'
import Signuppage from './SignupPage'; 
import{ Footer} from './FooterComponent';
import {connect} from "react-redux";
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {Signup_form,loginUser,logoutUser} from '../redux/Action_creators';
import {actions} from 'react-redux-form';
import Login from './LoginPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './HomeComponent';
import Navigation from './Navigation';
import Dashboard from './Surveyor/Dashboard';
import CreateNewSurvey from './Surveyor/CreateNewSurvey';
import SurveyPage from './Surveyor/SurveyPage';
const mapStateToProps = state =>{
    return{

    }
}

const mapDispatchToProps = dispatch => ({
    resetSignupForm:()=>{dispatch(actions.reset('signup'))},
    loginUser:(crid) => dispatch(loginUser(crid)),
  Signup_form: (first_name,last_name,email,password,confirm_password) => dispatch(Signup_form(first_name,last_name,email,password,confirm_password)),
});
const SignupForm=(props)=>{
    return(
<Signuppage resetSignupForm={props.resetSignupForm}
                     Signup_form={props.Signup_form}                   
    />
    ); 
}  

class Main extends Component{
    constructor(props) {
        super(props);
    // this.state={
    //     resetSignupForm:()=>actions.reset('signup'),
    //     Signup_form:(firstname,lastname,email,password,agree)=>Signup_form(firstname,lastname,email,password,agree),
    //     loginUser: (creds) => loginUser(creds),
    //     logoutUser: () => logoutUser(),
    // }
      }
  
render(){
    const Logingin=()=>{
        return(
            <div className="col-7 col-md-12"><Login loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/></div>
        );
    }
    const signuphandles=()=>{
        return(
        <div><Signuppage Signup_form={this.props.Signup_form} resetSignupForm={this.props.resetSignupForm}/>
        </div>
        );
          
    };
        return(
            <div>
                <Navigation />
                <TransitionGroup>
                    <CSSTransition 
                    appear
                    classNames="fade" timeout ={{enter: 300, exit: 200}}>
                        <Switch>
                            <Route path="/home" component={Home}/>

                            <Route path="/login" component={Logingin}/>
                            <Route path='/signup' component={signuphandles}
                       />
                       <Route path="/dashboard" component={() => <Dashboard />} />
                            <Route path="/createNewSurvey" component={() => <CreateNewSurvey />} />

                            <Route path="/respondent" component={() => <RespondentHome/>} />
                            <Route path="/SurveyResult" component={() => <SurveyPage /> } />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <br/>    <br/>    <br/>
               <Footer/> 
            </div>
        )
    }

}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
