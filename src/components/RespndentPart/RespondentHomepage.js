import React,{useEffect, useState} from 'react';
import { Row,Col } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import RenderQuestions from './Questionspage';
import {useLocation,useParams} from 'react-router-dom'
let surveyid="";

const fetchURL='https://cst-survey-backend.herokuapp.com/api/v1/surveys/';


const getQuestions = (surveyid) => fetch(`${fetchURL}/${surveyid}/questions`)
.then(res => res.json()
);
function RespondentHome(props) {
      //let Questioninfo=props.Surveys.surveys[0];
    //   const search=useLocation().search;;
    //     const surveyId = new URLSearchParams(search).get('surveyId');
    //   const getQuestions = () => {
        
    //  }
    const params = useParams()
    surveyid=params.surveyId;
    //console.log('survey id is',surveyid);

const [surveyInfo,setsurveyInfo] = useState({});

 useEffect(() => {
    
    getQuestions(surveyid)
    .then(response=>{console.log('survey from backend: ',response.questions);
setsurveyInfo(response.questions);
});
  }, []);
        return ( 
            surveyInfo!==undefined?
            <div className="container">
                
                <div className="">
                <div>
                <h2 className="m-3 p-3 d-flex justify-content-center bg-secondary">{surveyInfo.surveyTitle}</h2>
                </div>
                <Row>
                    <Col offset md={{size: 7, offset: 3}}>
                    <div className="surveyContainer d-flex justify-content-center">
            <div><RenderQuestions  QuestionInfo={surveyInfo} Respond={props.respond} SubmitSurveyrespons={props.SubmitSurveyrespons} sid={surveyid}/></div>
                </div>
                    </Col>
                </Row>
                
            </div>
            </div>
            :<div><h4>Survey not yet found</h4></div>
         );
    }
export default RespondentHome;