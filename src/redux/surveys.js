import * as ActionTypes from './ActionTypes';

export const Surveys = (state = {
    isLoading:false,
    errMess: null,
    surveys: localStorage.getItem('surveys') === null ? []: JSON.parse(localStorage.getItem('surveys')),
    surveyurl:null,
    results:[],
    surveydeleted:false,
    deletesurveyloading:false,
    submitisLoading:false,
    message:null,

}, action) => {
    switch (action.type) {

        case ActionTypes.CREATE_NEW_SURVEY:
            return {...state, submitisLoading: true, errMess: null,surveyurl:null, message: null}
        case ActionTypes.CREATE_NEW_SURVEY_SUCCESS:
            //let prevSurvey = [...state.Surveys];
            return {...state, submitisLoading: false, errMess: null,surveyurl:action.payload, message:action.message}

        case ActionTypes.CREATE_NEW_SURVEY_FAILURE:
            return {...state, submitisLoading: false, errMess: action.payload,surveyurl:null, message: null};
        case ActionTypes.SURVEYS_LOADING:
            return {...state,isLoading:true,errMess:null, message: null}
        case ActionTypes.LOADING_SURVEYS_FAILED:
            return{...state,isLoading:false,errMess:action.payload, message: null}
        case ActionTypes.GET_SURVEYS:
            return{...state,isLoading:false,errMess:null, surveys:[...action.payload], message: null}
        
        default:
            return state;
    }
}