import * as ActionTypes from './ActionTypes';

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
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answersa1"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answere1"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answers1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1a", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1d"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3a", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1dssa"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1s"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1s", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1s", "answer2a"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1a"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1aasd"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1s"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1a", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3a", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1afd"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1s", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1a"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1a", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1a", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1a"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1s"],
                        wayOfAnswering: 'Textfieldrg'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1hrd"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answerads1"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1dfa"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1ere"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1a", "answer2a"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3a", "answer1a"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1aqqa"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1a", "answer2a"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1a"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1a", "answer2a"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1a"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1a", "answer2a"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1a"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1hraa"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1hrds"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1oiu"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1iuj"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1cced"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1wqa"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1erer"],
                        wayOfAnswering: 'Textfield'
                    }
                ],
                [
                    {
                        question:"question1",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question2",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question3",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question4",
                        answer:["answer3", "answer1"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question5",
                        answer:["answer1defsa"],
                        wayOfAnswering:'Textfield'
                    },
                    {
                        question:"question6",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question7",
                        answer:["answer1"],
                        wayOfAnswering: "Dropdown"
                    },
                    {
                        question:"question8",
                        answer:["answer1", "answer2"],
                        wayOfAnswering:'Checkbox'
                    },
                    {
                        question:"question9",
                        answer:["answer1"],
                        wayOfAnswering:'Radio'
                    },
                    {
                        question:"question10",
                        answer:["answer1", "answer2"],
                        wayOfAnswering: 'Checkbox'
                    },
                    {
                        question:"question11",
                        answer:["answer1"],
                        wayOfAnswering: 'Dropdown'
                    },
                    {
                        question:"question12",
                        answer:["answer1dwewes"],
                        wayOfAnswering: 'Textfield'
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