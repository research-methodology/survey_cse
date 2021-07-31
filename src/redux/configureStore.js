
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import { Surveys } from './surveys';
import {RequestSurveyURL}from './RequestURL'
import {Respond} from './Respond';
import {Initial_signup_fields,Initial_Login_fields,InitialFeedback} from './Forms';


export const ConfigureStore=()=>{
const store=createStore(
combineReducers({ 
   auth: Auth,
   Surveys:Surveys,
   respond:Respond,
   requesturl:RequestSurveyURL,
   ...createForms({
     
      signup:Initial_signup_fields,
      login:Initial_Login_fields,
      feedback: InitialFeedback
   })
}),applyMiddleware(thunk,logger)
);
return store;
}