import React from 'react'
import PrevCard from './PrevCard'
import {Row, Col} from 'reactstrap'
export default function Dashboard(props) {
    let surveys = [
        {
            type: "CreateNew",
            goto: "createNewSurvey"
        },
        ...props.Surveys.surveys
        
    ];

    let prevs = surveys.map(survey =>{
        return (
            <Col>
            <div className="m-3"> 
            <PrevCard type={survey.type?survey.type:"survey"} surveyTitle={survey.surveyTitle} description={survey.description} />
        
            </div>
                
                </Col>
        )
    })
    return (
        <div className="container">
            <Row>
                <Col>
                <div className="mt-3 text-center colorAndB2" style={{ padding:'4px'}} >
                    <h2>Your surveys</h2>
                </div>
                </Col>
            </Row>
            <Row>
                {prevs}
                
            </Row>
        </div>
    )
}
