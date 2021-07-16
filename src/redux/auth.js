import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Auth = (state = {
        isLoading: false,
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
        errMess: null,
        isVerified:false,
        isSignUpConfirmed:false
        
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
                token: '',
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
                        errMess: action.message,
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
        default:
            return state
    }
}