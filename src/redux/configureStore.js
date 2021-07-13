
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import {Initial_signup_fields,Initial_Login_fields} from './Forms';


export const ConfigureStore=()=>{
const store=createStore(
combineReducers({ 
   auth: Auth,
   ...createForms({
     
      signup:Initial_signup_fields,
      login:Initial_Login_fields
   })
}),applyMiddleware(thunk,logger)
);
return store;
}