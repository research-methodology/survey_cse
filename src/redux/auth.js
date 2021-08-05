import * as ActionTypes from './ActionTypes';
import {logout} from './Action_creators';


// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Auth = (state = {
        isLoading: false,
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
        usercreds:localStorage.getItem('usercreds') ? JSON.parse(localStorage.getItem('usercreds')) : {},
        errMess: null,
        isVerified:false,
        isSignUpConfirmed:false,
        istimeout:false,
        profileLoading:false,
        loadingfeedback:false,
        feedbacksent:false,
        feedbackfailed:false,
        sendingError:null,
       
    }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false,
                user: action.creds,
                errMess:null,
                isVerified:false,isSignUpConfirmed:false
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: null,
                token: action.token,
                isVerified:false,isSignUpConfirmed:false
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message,
                isVerified:false,isSignUpConfirmed:false
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: true,
                errMess:null,
                isVerified:false,isSignUpConfirmed:false
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                user: null,
                errMess:null,
                isVerified:false,isSignUpConfirmed:false
            };
            case ActionTypes.LOGOUT_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message,
                isVerified:false,isSignUpConfirmed:false
            };
            case ActionTypes.VERIFY_USER_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    error:null,
                    isVerified:false,isSignUpConfirmed:false

                };
            case ActionTypes.VERIFY_USER:
                return{
                    ...state,
                    isLoading: false,
                    user: action.creds,
                    token: action.token,
                    isAuthenticated: false,
                    isVerified:true,isSignUpConfirmed:false

                };
                case ActionTypes.VERIFY_FAILURE:
                    return {...state,
                        isLoading: false,
                        isAuthenticated: false,
                        errMess: action.payload,
                        token: '',
                        user:null,
                        isVerified:false,isSignUpConfirmed:false
                    };
                    case ActionTypes.SIGNUP_REQUEST:
                    return {...state,
                        isLoading: true,
                        isAuthenticated: false,
                        errMess:  null,
                        token: null,
                        user:null,
                        isVerified:false,isSignUpConfirmed:false
                    };
                    case ActionTypes.SIGNUP_SUCCESS:
                    return {...state,
                        isLoading: false,
                        isAuthenticated: false,
                        errMess:  null,
                        token: null,
                        user:null,
                        isVerified:false,isSignUpConfirmed:true
                    };
                    case ActionTypes.SIGNUP_FAILURE:
                        return {...state,
                            isLoading: false,
                            isAuthenticated: false,
                            errMess: action.payload,
                            isVerified:false,isSignUpConfirmed:false
            };
            case ActionTypes.USERPROFILE_LOADING:
                return{
                    profileLoading: true,
                    errMess: null,
                    usercreds:null,
                    isAuthenticated:true
                }
            case ActionTypes.GOT_USERPROFILE:
                return {
                    profileLoading:false,
                    errMess:null,
                    usercreds:action.payload,
                    isAuthenticated:true
                }
            case ActionTypes.USERPROFILE_FAILED:
                return{
                    profileLoading:false,
                    errMess:action.payload,
                    usercreds:null,
                    isAuthenticated:true
                }
            case ActionTypes.ISTIMEOUT:
                return{
                    ...state,
                   istimeout:true,
                    isLoading: false,
                    isAuthenticated: false,
                    errMess: "Time out please login again!",
                    
                }
            case ActionTypes.LOADING_FEEDBACK:
                return{
                    ...state,
                    feedbackfailed:false,
                    loadingfeedback:true,
                    feedbacksent:false,
                    sendingError:null
                }
            case ActionTypes.FEEDBACK_FAILED:
               return{
                ...state,
                feedbackfailed:true,
                loadingfeedback:false,
                feedbacksent:false,
                sendingError:action.payload
               }
            case ActionTypes.FEEDBACK_SENT:
                return{
                    ...state,
                    feedbackfailed:false,
                    loadingfeedback:false,
                    feedbacksent:true,
                    sendingError:null
                }
        default:
            return state
    }
}
/* Auto logout function*/ 
// export const runLogoutTimer=(dispatch,timer)=>{

//     setTimeout(()=>{
//         let token = localStorage.getItem("token");
//         dispatch(logout(token));
//         console.log('user token=>'+token+"Expiration time="+timer);
//     },timer)

//    const msg= <div className="alert alert-primary" role="alert">
//     Your session has been expired ! Login again
//   </div>
//     }