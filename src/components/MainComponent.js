
import React, { Component } from 'react';
import RespondentHome from './RespndentPart/RespondentHomepage'
import Signuppage from './SignupPage'; 
import{ Footer} from './FooterComponent';
import {connect} from "react-redux";
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {Signup_form,loginUser,logoutUser, logout, createNewSurvey,Verifyuser} from '../redux/Action_creators';
import {actions} from 'react-redux-form';
import Login from './LoginPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './HomeComponent';
import Navigation from './Navigation';
import Dashboard from './Surveyor/Dashboard';
import CreateNewSurvey from './Surveyor/CreateNewSurvey';
import SurveyPage from './Surveyor/SurveyPage';
import confirmemail from './confirmemailpage';
import Verifyemail from './Verifyuser';
const mapStateToProps = state =>{
    return{
        auth: state.auth,
        Surveys:state.Surveys

    }
}

const mapDispatchToProps = dispatch => ({
    createNewSurvey:(result) =>{dispatch(createNewSurvey(result))},
    resetSignupForm:()=>{dispatch(actions.reset('signup'))},
    loginUser:(crid) => dispatch(loginUser(crid)),
    logout:(token) =>dispatch(logout(token)),
    Verifyuser:(token)=>dispatch(Verifyuser(token)),
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
            <div className="col-7 col-md-12"><Login auth={this.props.auth}
             loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/></div>
        );
    }
    const signuphandles=()=>{
        return(
        <div><Signuppage Signup_form={this.props.Signup_form} resetSignupForm={this.props.resetSignupForm}/>
        </div>
        );
          
    };
    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={(props) => {
            // let userCollection = JSON.parse(localStorage.getItem('userCollection'));
            // let typeOfUser = userCollection.typeOfUser;
            if(localStorage.getItem('token') !== null){
                    return <Component {...props} />
                
            }
            else {
                return <Redirect to={{
                    pathname: '/home',
                    state: {from: props.location}
                }}/>
            }
        }}/>
    );
        return(
            <div>
                <Navigation auth={this.props.auth} logout={this.props.logout} />
                <TransitionGroup>
                    <CSSTransition 
                    appear
                    classNames="fade" timeout ={{enter: 300, exit: 200}}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                             
                            <Route path="/login" component={Logingin}/>
                            <Route path='/signup' component={signuphandles}
                        
                       />
                       <Route exact path="/verification/:id" component={()=><Verifyemail Verifyuser={this.props.Verifyuser} />}/>
                       <PrivateRoute path="/dashboard" component={() => <Dashboard Surveys={this.props.Surveys}  />} />
                            <PrivateRoute path="/createNewSurvey" component={() => <CreateNewSurvey createNewSurvey={this.props.createNewSurvey} />} />
                            <Route path="/confirmemail" component={confirmemail}/>
                            <Route path="/respondent" component={() => <RespondentHome Surveys={this.props.Surveys} />} />
                            <PrivateRoute path="/SurveyResult" component={() => <SurveyPage Surveys={this.props.Surveys} /> } />
                            
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
