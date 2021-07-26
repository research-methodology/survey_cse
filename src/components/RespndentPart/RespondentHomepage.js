import React,{useEffect, useState} from 'react';
import { Row,Col } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import RenderQuestions from './Questionspage';
let surveyid="60febb8863e419002ccb8e6b";

const fetchURL=`${baseUrl}/surveys`;
const getQuestions = (surveyid) => fetch(`${fetchURL}/${surveyid}/questions`)
.then(res => res.json()
);

function RespondentHome(props) {
      let Questioninfo=props.Surveys.surveys[0];

const [surveyInfo,setsurveyInfo] = useState(Questioninfo);

 useEffect(() => {
    getQuestions().then(response=>{console.log('survey from backend: ',response.questions);
setsurveyInfo(response.questions);

});
  }, []);
        return ( 
            
            <div className="container">
                
                <div className="">
                <div>
                <h2 className="m-3 p-3 d-flex justify-content-center bg-secondary">{surveyInfo.surveyTitle}</h2>
                </div>
                <Row>
                    <Col offset md={{size: 7, offset: 3}}>
                    <div className="surveyContainer d-flex justify-content-center">
            <div><RenderQuestions  QuestionInfo={surveyInfo} Respond={props.respond} SubmitSurveyrespons={props.SubmitSurveyrespons}/></div>
                </div>
                    </Col>
                </Row>
                
            </div>
            </div>
         );
    }
export default RespondentHome;