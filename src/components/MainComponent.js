
import React, { Component,Suspense, lazy  } from 'react';

import Signuppage from './SignupPage'; 
import{ Footer} from './FooterComponent';
import {connect} from "react-redux";
//import Contact from './COntactCOmponent';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {Signup_form,loginUser,logoutUser,  postFeedback,logout, createNewSurvey,Verifyuser,SubmitSurveyrespons,HandleSessionexpired,HandleSession,GetsurveyId,fetchSurveys,Userprofile,UpdateSurvey} from '../redux/Action_creators';
import {actions} from 'react-redux-form';
import Login from './LoginPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './HomeComponent';
import Navigation from './Navigation';
//import Dashboard from './Surveyor/Dashboard';
//import CreateNewSurvey from './Surveyor/CreateNewSurvey';
//import SurveyPage from './Surveyor/SurveyPage';
import confirmemail from './confirmemailpage';
import Verifyemail from './Verifyuser';
import {FRONT_LOGOUT} from "../redux/ActionTypes";

const CreateNewSurvey=lazy(()=>import('./Surveyor/CreateNewSurvey'))
const SurveyPage=lazy(()=>import('./Surveyor/SurveyPage'))
const Contact=lazy(()=>import('./COntactCOmponent'))
const Dashboard=lazy(()=>import('./Surveyor/Dashboard'))
const RespondentHome=lazy(()=> import ('./RespndentPart/RespondentHomepage'))
const mapStateToProps = state =>{
    return{
        auth: state.auth,
        Surveys:state.Surveys,
        respond:state.respond,
        requesturl:state.requesturl,
    }
  
}
const mapDispatchToProps = dispatch => ({
    frontLogout:() =>{dispatch({type:FRONT_LOGOUT})},
    createNewSurvey:(result) =>{dispatch(createNewSurvey(result))},
    UpdateSurvey:(result,surveyid) =>{dispatch(UpdateSurvey(result,surveyid))},
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    resetSignupForm:()=>{dispatch(actions.reset('signup'))},
    loginUser:(props,crid) => dispatch(loginUser(props,crid)),
    logout:(token) =>dispatch(logout(token)),
    Verifyuser:(token)=>dispatch(Verifyuser(token)),
    SubmitSurveyrespons:(output,surveyId)=>dispatch(SubmitSurveyrespons(output,surveyId)),
  Signup_form: (first_name,last_name,email,password,confirm_password) => dispatch(Signup_form(first_name,last_name,email,password,confirm_password)),
  IStimeouthandeler:()=>dispatch(HandleSessionexpired()) ,
  GetsurveyId:(surveyId) =>dispatch(GetsurveyId(surveyId)) , 
  fetchSurveys:()=>dispatch(fetchSurveys()),
  Userprofile:()=>dispatch(Userprofile()),

  

});
//const msg=null;

class Main extends Component{
    constructor(props) {
        super(props);
        
    // this.state={
    //     resetSignupForm:()=>actions.reset('signup'),
    //     Signup_form:(firstname,lastname,email,password,agree)=>Signup_form(firstname,lastname,email,password,agree),
    //     loginUser: (creds) => loginUser(creds),
    //     logoutUser: () => logoutUser(),
    // }

    this.state={
        count:false
    }
      }

      componentDidMount() {

          if (this.props.auth.isAuthenticated) {
              this.props.fetchSurveys();
              if (localStorage.getItem('usercreds') == {} || localStorage.getItem('usercreds') == null || localStorage.getItem('usercreds') == undefined) {
                  this.props.Userprofile();
              }
          }
          window.addEventListener("unload", (ev) =>
          {
                  localStorage['myUnloadEventFlag']=new Date().getTime();
          });
          window.addEventListener("load", (ev) =>
          {
                  let t0 = Number(localStorage['myUnloadEventFlag']);
                  if (isNaN(t0)) t0=0;
                  let t1=new Date().getTime();
                  let duration=t1-t0;
                  if (duration<10*1000) {
                  } else {
                      this.props.frontLogout();
                  }
             // }
          });
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
                
                <Navigation fetchSurveys={this.props.fetchSurveys} auth={this.props.auth} logout={this.props.logout} Userprofile={this.props.Userprofile} />
                <TransitionGroup>
                    <CSSTransition
                    appear
                    classNames="fade" timeout ={{enter: 300, exit: 200}}>
                         <Suspense fallback={<h1>Loading...</h1>}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                             
                            <Route path="/login" component={Logingin}/>
                            <Route path='/signup' component={() => <Signuppage Signup_form={this.props.Signup_form} resetSignupForm={this.props.resetSignupForm }auth={this.props.auth}/>}
                        
                       />
                       <Route exact path="/verification/:token" component={()=><Verifyemail Verifyuser={this.props.Verifyuser} auth={this.props.auth} />}/>
                       <PrivateRoute path="/dashboard"  component={() => <Dashboard Surveys={this.props.Surveys}  fetchSurveys={this.props. fetchSurveys} Userprofile={this.props.Userprofile} auth={this.props.auth}/>} />
                            <PrivateRoute path="/createNewSurvey" component={() => <CreateNewSurvey createNewSurvey={this.props.createNewSurvey}  Surveys={this.props.Surveys} fetchSurveys={this.props.fetchSurveys}  />} />
                            <Route path="/confirmemail" component={confirmemail}/>
                            <Route path="/respondent/:surveyId" component={() => <RespondentHome Surveys={this.props.Surveys} SubmitSurveyrespons={this.props.SubmitSurveyrespons} respond={this.props.respond} GetsurveyId={this.props.GetsurveyId}  requesturl={this.props. requesturl}/>} />
                            <PrivateRoute path="/SurveyResult/:index" component={() => <SurveyPage Surveys={this.props.Surveys} /> } />
                            <PrivateRoute path="/editSurvey/:index" component={()=> <CreateNewSurvey UpdateSurvey={this.props.UpdateSurvey}Surveys={this.props.Surveys} fetchSurveys={this.props.fetchSurveys}  />}/>
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} auth={this.props.auth} postFeedback={this.props.postFeedback} />} />
                            <Redirect to="/home" />
                        </Switch>
                        </Suspense>
                    </CSSTransition>
                </TransitionGroup>
                <br/>    <br/>    <br/>
               <Footer/>       
              
            </div>
     
        )
    }
    

}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
