import * as ActionTypes from './ActionTypes';
export const Respond = (state = {
    isLoading: false,
    errMess: null,
    isresponded:false
    
}, action) => {
switch (action.type) {
    case ActionTypes.RESIPONDING_REQUEST:
        return {...state,
            isLoading: true,
            errMess:null,
            isresponded:false
        };
    case ActionTypes.RESIPONDING_SUCCESS:
        return {...state,
            isLoading: false,
            errMess:null,
            isresponded:true
        };
    case ActionTypes.RESIPONDING_FAILED:
        return{
            ...state,
            isLoading:false,
            errMess:action.message
        };
        default:
            return state
    }
}