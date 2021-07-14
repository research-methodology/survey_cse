import React,{useState} from 'react';
import { Row,Col } from 'reactstrap';
import RenderQuestions from './Questionspage';
const fetchURL = "";
//const getQuestions = () => fetch(fetchURL).then(res => res.json());
function RespondentHome(props) {
      let Questioninfo=props.Surveys.surveys[0];

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
                    
            <div><RenderQuestions  QuestionInfo={surveyInfo}/></div>
                </div>
                    </Col>
                </Row>
                
            </div>
            </div>
         );
    }
export default RespondentHome;