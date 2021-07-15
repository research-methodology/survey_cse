import * as ActionTypes from './Action_Types';

export const Surveys = (state = {
    isLoading:false,
    errMess: null,
    surveys: [
        {
            surveyTitle:"surveyTitle",
            categories:[{
                categoryName:'category 1',
                questions:[
                    {
                    question:'Question 1 in category 1',
                    wayOfAnswering:'TextField',
                        answers:[{
                            answer:'',
                                id:11 
                        }
                    ]
                    
                }
                ,
                {
                    question:'Question 2 in category 1',
                    wayOfAnswering:'Radio',
                        answers:[{
                            answer:'Answer 1',
                                id:21  
                        },
                        {
                            answer:'Answer 2',
                                id:22 
                        }
                        
                    ]
                    
                },
                {
                    question:'Question 3 in category 1',
                    wayOfAnswering:'Dropdown',
                        answers:[{
                            answer:'Answer 1',
                                id:31  
                        },
                        {
                            answer:'Answer 2',
                                id:32 
                        }
                        
                    ]
                    
                }

            ]
            
        },
        {
            categoryName:'category 2',
            questions:[
                {
                question:'Question 1 in category 2',
                wayOfAnswering:'TextField',
                    answers:[{
                        answer:'',
                            id:11 
                    }
                ]
                
            }

            ,
            {
                question:'Question 2 in category 2',
                wayOfAnswering:'Checkbox',
                    answers:[{
                        answer:'Answer 1',
                            id:21  
                    },
                    {
                        answer:'Answer 2',
                            id:22 
                    }
                    
                ]
                
            },
            {
                question:'Question 3 in category 2',
                wayOfAnswering:'Dropdown',
                    answers:[{
                        answer:'Answer 1',
                            id:31  
                    },
                    {
                        answer:'Answer 2',
                            id:32 
                    }
                    
                ]
                
            }

        ]
        
    }
    ],
            survey:[
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answer1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer12", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer11"]
                    },
                    {
                        question:"question4",
                        answer:["answer33", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answerw1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2","answer3"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer21", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answerr1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1w"]
                    },
                    {
                        question:"question2",
                        answer:["answer1"]
                    },
                    {
                        question:"question3",
                        answer:["answers1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3f", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answerf1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1s", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answers1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2s"]
                    },
                    {
                        question:"question11",
                        answer:["answers1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2s"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answer1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer12", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer11"]
                    },
                    {
                        question:"question4",
                        answer:["answer33", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answerw1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2","answer3"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer21", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answerr1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1w"]
                    },
                    {
                        question:"question2",
                        answer:["answer1"]
                    },
                    {
                        question:"question3",
                        answer:["answers1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3f", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answerf1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1s", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answers1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2s"]
                    },
                    {
                        question:"question11",
                        answer:["answers1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2s"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answer1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer12", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer11"]
                    },
                    {
                        question:"question4",
                        answer:["answer33", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answerw1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2","answer3"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer21", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answerr1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1w"]
                    },
                    {
                        question:"question2",
                        answer:["answer1"]
                    },
                    {
                        question:"question3",
                        answer:["answers1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3f", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answerf1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1s", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answers1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2s"]
                    },
                    {
                        question:"question11",
                        answer:["answers1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2s"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answer1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"]
                    },
                    {
                        question:"question2",
                        answer:["answer12", "answer2"]
                    },
                    {
                        question:"question3",
                        answer:["answer11"]
                    },
                    {
                        question:"question4",
                        answer:["answer33", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answer1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answerw1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2","answer3"]
                    },
                    {
                        question:"question9",
                        answer:["answer1"]
                    },
                    {
                        question:"question10",
                        answer:["answer21", "answer2"]
                    },
                    {
                        question:"question11",
                        answer:["answerr1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2"]
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1w"]
                    },
                    {
                        question:"question2",
                        answer:["answer1"]
                    },
                    {
                        question:"question3",
                        answer:["answers1"]
                    },
                    {
                        question:"question4",
                        answer:["answer3f", "answer1"]
                    },
                    {
                        question:"question5",
                        answer:["answerf1"]
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"]
                    },
                    {
                        question:"question7",
                        answer:["answer1"]
                    },
                    {
                        question:"question8",
                        answer:["answer1s", "answer2"]
                    },
                    {
                        question:"question9",
                        answer:["answers1"]
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2s"]
                    },
                    {
                        question:"question11",
                        answer:["answers1"]
                    },
                    {
                        question:"question12",
                        answer:["answer1", "answer2s"]
                    }
                ]
                
            ]
        },{
            surveyTitle: 'Love in families',
            description:"this survey is about how family menber love each other in Rwanda"

        },
        {
            surveyTitle: 'is sport important',
            description:"this survey is for peaple in Nyamirambo"
        }
    ],
    results:[]
}, action) => {
    switch (action.type) {

        case ActionTypes.CREATE_NEW_SURVEY:
            return {...state, isLoading: true, errMess: null}
        case ActionTypes.CREATE_NEW_SURVEY_SUCCESS:
            let prevSurvey = [...state.Surveys];
            prevSurvey.push(action.payload);
            return {...state, isLoading: false, errMess: null, Survey: prevSurvey}

        case ActionTypes.CREATE_NEW_SURVEY_FAILURE:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}