import React,{useState} from 'react';
import { Row,Col } from 'reactstrap';
import RenderQuestions from './Questionspage';
const fetchURL = "";
//const getQuestions = () => fetch(fetchURL).then(res => res.json());
function RespondentHome() {
      let Questioninfo={
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
    ]

}
const [surveyInfo, setsurveyInfo] = useState(Questioninfo);

// useEffect(() => {
//     getQuestions().then(data => setsurveyInfo(data));
//   }, []);
        return ( 
            
            <div className="container">
                
                <div className="">
                <div>
                <h2 className="m-3 p-3 d-flex justify-content-center bg-secondary">Servey title</h2>
                </div>
                <Row>
                    <Col offset sm={{size: 7, offset: 3}}>
                    <div className="surveyContainer d-flex justify-content-center">
                    
            <div><RenderQuestions  Questioninfo={surveyInfo}/></div>
                </div>
                    </Col>
                </Row>
                
            </div>
            </div>
         );
    }
export default RespondentHome;