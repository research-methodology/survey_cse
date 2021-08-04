
import React, { Component } from 'react';
import RespondentHome from './RespndentPart/RespondentHomepage'
import Signuppage from './SignupPage'; 
import{ Footer} from './FooterComponent';
import {connect} from "react-redux";
import Contact from './COntactCOmponent';
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom';
import {Signup_form,loginUser,logoutUser,  postFeedback,logout, createNewSurvey,Verifyuser,SubmitSurveyrespons,HandleSessionexpired,HandleSession,GetsurveyId,fetchSurveys,Userprofile} from '../redux/Action_creators';
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
        respond:state.respond,
        requesturl:state.requesturl,
    }
  
}
const mapDispatchToProps = dispatch => ({
    createNewSurvey:(result) =>{dispatch(createNewSurvey(result))},
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
      
      componentDidMount(){
          
          if(this.props.auth.isAuthenticated){
               this.props.Userprofile();  
               this.props.fetchSurveys();
          }
          
      
//       if(state.timeout===true){
//           logout(localStorage.getItem('token'));
//           localStorage.removeItem('token');
//       }
//     if(this.props.auth.isAuthenticated){
//     console.log("is authenticated :"+this.props.auth.isAuthenticated)
//     this.props.IStimeouthandeler();  
//     console.log('tokens so far: '+ localStorage.getItem('token'))

// }
// if(this.props.auth.istimeout)
// {
//     logout(localStorage.getItem('token'));
//     localStorage.clear(); 
//     console.log('tokens now: '+ localStorage.getItem('token'))
// }

    window.addEventListener('beforeunload',this.onUnmount);
      }
      onUnmount=()=>{
          alert('You are about to leave');
          logout(localStorage.getItem('token'));
      }
      componentWillUnmount(){
          window.removeEventListener('beforeunload',this.onUnmount);
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
                <Navigation auth={this.props.auth} logout={this.props.logout} Userprofile={this.props.Userprofile} />
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
                       <PrivateRoute path="/dashboard" onEnter={()=>this.props.IStimeouthandeler()} onChange={()=>this.props.IStimeouthandeler()} component={() => <Dashboard Surveys={this.props.Surveys}  fetchSurveys={this.props. fetchSurveys} Userprofile={this.props.Userprofile} auth={this.props.auth} />} />
                            <PrivateRoute path="/createNewSurvey" component={() => <CreateNewSurvey createNewSurvey={this.props.createNewSurvey} />} />
                            <Route path="/confirmemail" component={confirmemail}/>
                            <Route path="/respondent/:surveyId" component={() => <RespondentHome Surveys={this.props.Surveys} SubmitSurveyrespons={this.props.SubmitSurveyrespons} respond={this.props.respond} GetsurveyId={this.props.GetsurveyId}  requesturl={this.props. requesturl}/>} />
                            <PrivateRoute path="/SurveyResult/:index" component={() => <SurveyPage Surveys={this.props.Surveys} /> } />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} auth={this.props.auth} postFeedback={this.props.postFeedback} />} />
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
