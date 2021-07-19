
import React, { Component } from 'react';
import RespondentHome from './RespndentPart/RespondentHomepage'
import Signuppage from './SignupPage'; 
import{ Footer} from './FooterComponent';
import {connect} from "react-redux";
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {Signup_form,loginUser,logoutUser, logout, createNewSurvey,Verifyuser,SubmitSurveyrespons} from '../redux/Action_creators';
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
        Surveys:state.Surveys,
        respond:state.respond
    }
}

const mapDispatchToProps = dispatch => ({
    createNewSurvey:(result) =>{dispatch(createNewSurvey(result))},
    resetSignupForm:()=>{dispatch(actions.reset('signup'))},
    loginUser:(crid) => dispatch(loginUser(crid)),
    logout:(token) =>dispatch(logout(token)),
    Verifyuser:(token)=>dispatch(Verifyuser(token)),
    SubmitSurveyrespons:(output)=>dispatch(SubmitSurveyrespons(output)),
  Signup_form: (first_name,last_name,email,password,confirm_password) => dispatch(Signup_form(first_name,last_name,email,password,confirm_password)),
});


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
            <div className=""><Login auth={this.props.auth}
             loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/></div>
        );
    }
    // const signuphandles=()=>{
    //     return(
    //     <div>
    //     </div>
    //     );
          
    // };
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
                            <Route path='/signup' component={() => <Signuppage Signup_form={this.props.Signup_form} resetSignupForm={this.props.resetSignupForm }auth={this.props.auth}/>}
                        
                       />
                       <Route exact path="/verification/:token" component={()=><Verifyemail Verifyuser={this.props.Verifyuser} auth={this.props.auth} />}/>
                       <PrivateRoute path="/dashboard" component={() => <Dashboard Surveys={this.props.Surveys}  />} />
                            <PrivateRoute path="/createNewSurvey" component={() => <CreateNewSurvey createNewSurvey={this.props.createNewSurvey} />} />
                            <Route path="/confirmemail" component={confirmemail}/>
                            <Route path="/respondent" component={() => <RespondentHome Surveys={this.props.Surveys} SubmitSurveyrespons={this.props.SubmitSurveyrespons} respond={this.props.respond}/>} />
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
