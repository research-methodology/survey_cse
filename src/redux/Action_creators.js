import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
import React , {useRef,useState}from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';
import { Button } from 'reactstrap';
Modal.setAppElement('#root');


export const SubmitSurveyrespons=(output,surveyid)=>(dispatch)=>{
    dispatch({type: ActionTypes.RESIPONDING_REQUEST});
    console.log("Survey id is: ",surveyid);
    return fetch(`${baseUrl}surveys/answers/${surveyid}`,{
method:"PUT",
body:JSON.stringify(output),
headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
    })
    .then((response)=>{
        console.log('Response from the user: ',response)
        if (response.status===200||response.status===201 || response.ok) {
            dispatch({type: ActionTypes.RESIPONDING_SUCCESS})
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.message);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
      .then(response => response.json())
      .then(response => { console.log('Responding', response); console.log('Thank you for responding our servey !\n'+JSON.stringify(response)); })
      .catch(error =>  { console.log('Responding', error.message); console.log('Your survey results could not be processed\nError: '+error.message);
      dispatch({type: ActionTypes.RESIPONDING_FAILED});
    });
  
};
// export const Autologout=(ExpirationDate)=>(dispatch)=>{
//     setTimeout(()=>{
// logout(localStorage.getItem('token'));
//     },ExpirationDate)
// }
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
            //window.location="/login";
            localStorage.removeItem('token');
        }
    },error => {
        throw error;
  }).catch(error =>  { console.log('Logout', error.message); 
  dispatch({type: ActionTypes.LOGOUT_FAILURE,payload:error.message});

});
};
// const logmeoutout=()=>{
//     console.log("User is logging out");
//     logout(localStorage.getItem('token'));
   
// }

export default function IdleTimerCounter(){
  
    const [modalIsopen,setmodelopen]=useState(false);
    const IdleTimerRef=useRef(null);
    const SessionTimeoutRef=useRef(null);
   
    // const ClosedTab=()=>(dispatch)=>{
    //     dispatch({type:ActionTypes.ISTIMEOUT});
    //    // props.setState({count:true});
    //     dispatch( logout(localStorage.getItem('token')));
    //
    //     localStorage.clear();
    // }
    //window.addEventListener('beforeunload',ClosedTab);
    
 var currentlocation=window.location.pathname;
   const logmeout=()=>{
    fetch(baseUrl + "user/logout",{
        method:"POST",
        headers:{
            "Authorization":localStorage.getItem('token')
        },
        credentials: "same-origin"
    }).then(response =>{
        if(response.status === 200 || response.status === 201){
            console.log("logout successfull ");
            localStorage.removeItem('token');
            window.location='/login';
            setmodelopen(false);
            clearTimeout(SessionTimeoutRef.current);
        }
        
        },error => {
            throw error;
      }).catch(error =>  { console.log('Logout', error.message); localStorage.removeItem('token'); window.location='/login';
    });
  
    
   }
   const onIdle=()=>{
    console.log("User is idle");
   setmodelopen(true);
   SessionTimeoutRef.current=setTimeout(logmeout,60*1000);
   }

   const StayActive=()=>{
       setmodelopen(false);
       clearTimeout(SessionTimeoutRef.current);
   }
    return(
       localStorage.getItem('token')!==null?
        <div>
            <Modal isOpen={modalIsopen}><h2>You've been idle for a while!</h2>
            <p>You will be logged out soon</p>
            {  localStorage.setItem('currentlocation',currentlocation)}
            <div><Button onClick={logmeout}>Log me out</Button><Button onClick={StayActive}>Keep me signed in</Button></div>
            </Modal>
            <IdleTimer ref={IdleTimerRef} timeout={1200000} onIdle={onIdle}> </IdleTimer>
        </div>:null
    )
}

//Function to fetch user data for setting profile
export const Userprofile=(token = localStorage.getItem('token'))=>(dispatch)=>{
    dispatch({type:ActionTypes.USERPROFILE_LOADING});
    return fetch(baseUrl+'user/profile',{
        method:"GET",
        headers:{
            "Authorization":token,
            'Content-Type':'application/json'
        },
        credentials: "same-origin"
    }).then(response=>response.json())
    .then(response=>{
        console.log('Users credentials',response.data);
        if(response.status===200||response.status===201){
            localStorage.setItem('usercreds',JSON.stringify(response.data));
            dispatch({type:ActionTypes.GOT_USERPROFILE,payload:response.data});
        
        }
    },error => {
        throw error;
  }).catch(error =>  {
    console.log('your profile ', error); 
    dispatch({type: ActionTypes.USERPROFILE_FAILED, payload:error.message});
 });
}
export const GetsurveyId=(surveyid)=>(dispatch)=>{
    dispatch({type:ActionTypes.REQUESTSURVEY});
   // console.log("the id of the survey is: ",surveyid);
    return fetch(`https://cst-survey-backend.herokuapp.com/api/v1/surveys/${surveyid}/questions`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        },
        credentials: "same-origin"

    })
    .then(response=>response.json())
    .then(response=>{
        
        console.log('response now is is:',response);
        if(response.status === 200 || response.status === 201){
            console.log("survey url got successfull ")
            dispatch({type: ActionTypes.REQUESTINGSURVEY_SUCCESS,payload:response.questions});
            
        }
        else{
            dispatch({type: ActionTypes.REQUESTINGSURVEY_FAILED, payload:response.message});
        }
    },error => {
        throw error;
    }).catch(error =>  { console.log('Requesting survey', error.message); 
    dispatch({type: ActionTypes.REQUESTINGSURVEY_FAILED});
    });
    
}
export const Verifyuser=(token)=>(dispatch)=>{
    //console.log('Received token '+token);
    dispatch({type:ActionTypes.VERIFY_USER_REQUEST});
return fetch(baseUrl+'user/verification/'+token,{
method:"PUT",
headers:{
    "Content-Type": "application/json"
},
credentials: "same-origin"
}).then(response => response.json())
    .then(response =>{
    if(response.status === 200 || response.status === 201){
        console.log("verified successfull ")
        dispatch({type: ActionTypes.VERIFY_USER});
    }
    else{
        dispatch({type: ActionTypes.VERIFY_FAILURE, payload:response.message});
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
// export const fetchUser=()
    return fetch(baseUrl + "user/signup", {
       
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => response.json())
    .then(response => {
        if (response.ok|| response.status ==='success' || response===200) {
            dispatch({type:ActionTypes.SIGNUP_SUCCESS})
          return response;
        } else {
            let msg = null;
            if(response.error){
                msg = response.error;
            }
            else if( response.message){
                msg = response.message
            }
            else{
                msg = response.statusText;
            }
          var error = new Error('Error '  + ': ' + msg);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => {
        if(response.status === 200 || response.status ===201) {
            console.log('Signup', response);
            console.log('Thank you for signing up!\n')
        }
        else {
            let msg = response.message === undefined? response.statusText : response.message;
            let error = new Error("error " + msg);

            console.log("this is response" + JSON.stringify(response));
            error.response = response;
            throw error;
        }
    })
    .catch(error =>  {
        console.log("this is error testing" + JSON.stringify(error))
        dispatch({type:ActionTypes.SIGNUP_FAILURE, payload:error.message})
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
        token: response,
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
   // const expiresIn=3600000;//timeout at 1 hour
    //const [isExpired,setExpired]=useState(false);
    dispatch(requestLogin(creds));
    
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
        if (response.status === 201|| response.status ==='success' || response===200) {
            
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
        if (response.status === 201 || response.status ==='success' || response===200) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            //localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(receiveLogin(response));
            dispatch({type:ActionTypes.LOGIN_SUCCESS})
            // runLogoutTimer(dispatch,expiresIn);//allow auto signout after token expiration time
            // setExpired(true);
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
    console.log('Ressults=> ',result);
    return fetch(baseUrl + "surveys/create",{
        method:"POST",
        body:JSON.stringify(result),
        headers:{
            "Authorization":localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        credentials: "same-origin"
    }).then(response=>response.json()).then(response =>{
        console.log('Respons :',response);

        if(response.status === 200 || response.status === 201){

            //let createdSurvey =response.body;

            console.log("sending survey successfull ", response)
            dispatch({type: ActionTypes.CREATE_NEW_SURVEY_SUCCESS,payload:response.surveyURL, message:"Create new survey successful"});
             console.log('survey url is : ',response.surveyURL);
             //alert('survey url is : '+response.surveyURL);
        }
    },error => {
        throw error;
  }).catch(error =>  {
    console.log('Survey', error); 
    dispatch({type: ActionTypes.CREATE_NEW_SURVEY_FAILURE, payload:error.message});
});
}
export const fetchSurveys=()=>(dispatch)=>{
 
    dispatch({type:ActionTypes.SURVEYS_LOADING});
    //localStorage.removeItem('surveys');
    return fetch(baseUrl+"surveys/user/surveys",{
        method:"GET",
          headers:{
            "Authorization":localStorage.getItem('token'),
            'Content-Type':'application/json'
        },
        credentials: "same-origin"
    })
    .then(surveys=>surveys.json()).then(response =>{
        //console.log("the status is ",response.status);
        console.log('your surveys before are :',response);
       if(response.status===200||response.status === 201){
        console.log('your surveys are :',response.surveys);
        localStorage.setItem('surveys',JSON.stringify(response.surveys));
            dispatch({type: ActionTypes.GET_SURVEYS,payload:response.surveys});
        
       }
       else if(response.status === 404){
           dispatch({type: ActionTypes.GET_SURVEYS, payload:[]});
       }
       else{
        localStorage.setItem('surveys',JSON.stringify([]));
       }
   },error => {
       throw error;
 }).catch(error =>  {
   console.log('your surveys ', error); 
   dispatch({type: ActionTypes.LOADING_SURVEYS_FAILED, payload:error.message});
});

}
export const saveSurveyResult = (result) => (dispatch) =>{
    
}
//Function that manages expiration of token

export  const HandleSessionexpired=()=>(dispatch)=>{
    var duration=10;//expires after 10 minutes
      setInterval(updateTimer,1000);
    function updateTimer(){ 
        duration--;
        console.log(duration); 
        if(duration<1){
            dispatch({type:ActionTypes.ISTIMEOUT});
            dispatch(logout(localStorage.getItem('token')));
            localStorage.clear();
    //  props.setState({count:true});
        }
        //console.log('at '+duration+'token is '+token);
    }
    window.addEventListener('mousemove',resetTimer);

    function resetTimer(){
        duration=10;
    }  
    window.addEventListener('unload',ClosedTab);
    function ClosedTab(){
        dispatch({type:ActionTypes.ISTIMEOUT});
       // props.setState({count:true});
        //dispatch( logout(localStorage.getItem('token')));
       
        localStorage.clear();
    } 
   
}

export const postFeedback = (feedback) => (dispatch) => {
        dispatch({type:ActionTypes.LOADING_FEEDBACK});
    return fetch(baseUrl + 'user/feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok|| response.status===200 || response.status===201) {
            dispatch({type:ActionTypes.FEEDBACK_SENT});
          return response;
          
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!\n'+JSON.stringify(response)); })
    .catch(error =>  { console.log('Feedback', error.message); 
    dispatch({type:ActionTypes.FEEDBACK_FAILED,payload:error.message}); 
});
};


