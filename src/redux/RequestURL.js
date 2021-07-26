import * as ActionTypes from './ActionTypes';
export const RequestSurveyURL = (state = {
    isLoading: false,
    errMess: null,
    isurlfound:false,
    output:null
    
}, action) => {
    switch (action.type) {
        case ActionTypes.REQUESTSURVEY:
            return{
                ...state,
                errMess:null,
                isLoading:true,
                isurlfound:false,
                response:null,
            }
            case ActionTypes.REQUESTINGSURVEY_FAILED:
                return{
                    ...state,
                    errMess:"Unable to fetch the servey",
                    isurlfound:false,
                    isLoading:false,
                    response:null,

                }
                case ActionTypes.REQUESTINGSURVEY_SUCCESS:
                    return{
                        ...state,
                        errMess:null,
                        isurlfound:true,
                        isLoading:false,
                        response:action.payload,
    
                    }
                    default:
                        return state;
}
}