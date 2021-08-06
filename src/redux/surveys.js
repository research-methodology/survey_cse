import * as ActionTypes from './ActionTypes';

export const Surveys = (state = {
    isLoading:false,
    errMess: null,
    surveys: localStorage.getItem('surveys') === null ? []: JSON.parse(localStorage.getItem('surveys')),
    surveyurl:null,
    surveyChangeToggle:false,
    results:[]
}, action) => {
    switch (action.type) {

        case ActionTypes.CREATE_NEW_SURVEY:
            return {...state, isLoading: true, errMess: null,surveyurl:null}
        case ActionTypes.CREATE_NEW_SURVEY_SUCCESS:
            //let prevSurvey = [...state.Surveys];
            return {...state, isLoading: false, errMess: null,surveyurl:action.payload}

        case ActionTypes.CREATE_NEW_SURVEY_FAILURE:
            return {...state, isLoading: false, errMess: action.payload,surveyurl:null};
        case ActionTypes.SURVEYS_LOADING:
            return {...state,isLoading:true,errMess:null}
        case ActionTypes.LOADING_SURVEYS_FAILED:
            return{...state,isLoading:false,errMess:action.payload}
        case ActionTypes.GET_SURVEYS:
            return{...state,isLoading:false,errMess:null, surveys:[...action.payload]}
        case ActionTypes.SURVEY_CHANGE_TOGGLE:
            return {...state,isLoading: false,errMess: null, surveyChangeToggle: !state.surveyChangeToggle}
        default:
            return state;
    }
}