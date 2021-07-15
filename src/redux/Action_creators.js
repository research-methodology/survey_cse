import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
export const logout = (token) =>(dispatch) =>{
    dispatch({type: ActionTypes.LOGOUT_REQUEST});
    return fetch(baseUrl + "user/logout",{
        method:"POST",
        headers:{
            "Authorization":token
        },
        credentials: "same-origin"
    }).then(response =>{
        if(response.status === 200 || response.status === 201){
            console.log("logout successfull ")
            dispatch({type: ActionTypes.LOGOUT_SUCCESS});
        }
    },error => {
        throw error;
  }).catch(error =>  { console.log('Logout', error.message); 
  dispatch({type: ActionTypes.LOGOUT_FAILURE,payload:error.message});

});
};
export const Verifyuser=(token)=>(dispatch)=>{
    //console.log('Received token '+token);
    dispatch({type:ActionTypes.VERIFY_USER_REQUEST});
return fetch(baseUrl+'user/verification/'+token,{
method:"PUT",
headers:{
    "Content-Type": "application/json"
},
credentials: "same-origin"
}).then(response =>{
    if(response.status === 200 || response.status === 201){
        console.log("verified successfull ")
        dispatch({type: ActionTypes.VERIFY_USER});
    }
},error => {
    throw error;
}).catch(error =>  { console.log('Verfication', error.message); 
dispatch({type: ActionTypes.VERIFY_FAILURE});
});
}
export const  Signup_form=(first_name,last_name,email,password,confirm_password) =>(dispatch)=>{
    dispatch({type:ActionTypes.SIGNUP_REQUEST});
    console.log(baseUrl);
    const newUser={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        confirm_password:confirm_password
    }
    //console.log(JSON.stringify(newUser));

    return fetch(baseUrl + "user/signup", {
       
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            dispatch({type:ActionTypes.SIGNUP_SUCCESS})
          return response;
        } else {
          var error = new Error('Error '  + ': ' + response.message);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => {
         console.log('Signup', response); console.log('Thank you for signing up!\n') })
    .catch(error =>  {
        dispatch({type:ActionTypes.SIGNUP_FAILURE})
         console.log('Signup', error.message); console.log('Your signup request could not be processed\nError: '+error.message); });
};
export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    //console.log(JSON.stringify(creds));

    return fetch(baseUrl + 'user/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => response.json())
    .then(response => {
        console.log(JSON.stringify(response));
        if (response.status === 201) {
            return response;
        } else {
            var error = new Error('Error ' + ': ' + response.message);
            error.response = response;
            //console.log(JSON.stringify(err))
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => {
        console.log("this is response");
        console.log(response);
        if (response.status === 201) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            //localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

// export const requestLogout = () => {
//     return {
//       type: ActionTypes.LOGOUT_REQUEST
//     }
// }
  
// export const receiveLogout = () => {
//     return {
//       type: ActionTypes.LOGOUT_SUCCESS
//     }
// }

// Logs the user out
// export const logoutUser = () => (dispatch) => {
//     dispatch(requestLogout())
//     localStorage.removeItem('token');
//     localStorage.removeItem('creds');
//     dispatch(receiveLogout())
// }
export const createNewSurvey=(result) =>(dispatch) =>{
    dispatch({type:ActionTypes.CREATE_NEW_SURVEY});
    
    return fetch(baseUrl + "survey/",{
        method:"POST",
        body:JSON.stringify(result),
        headers:{
            "Authorization":localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        credentials: "same-origin"
    }).then(response =>{

        if(response.status === 200 || response.status === 201){

            let createdSurvey =JSON.parse(response.body);

            console.log("sending survey successfull ")
            dispatch({type: ActionTypes.CREATE_NEW_SURVEY_SUCCESS,payload:createdSurvey});
        }
    },error => {
        throw error;
  }).catch(error =>  { console.log('Survey', error.message); 
  dispatch({type: ActionTypes.CREATE_NEW_SURVEY_FAILURE, payload:error.message});

});
}

export const saveSurveyResult = (result) => (dispatch) =>{
    
}