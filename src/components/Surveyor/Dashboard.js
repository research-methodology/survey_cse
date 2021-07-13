import React from 'react'
import PrevCard from './PrevCard'
import {Row, Col} from 'reactstrap'
export default function Dashboard() {
    let surveys = [
        {
            type: "CreateNew",
            goto: "createNewSurvey"
        },
        {
            type:"survey",
            title: 'Love in families',
            description:"this survey is about how family menber love each other in Rwanda"

        },
        {
            type:"survey",
            title: 'is sport important',
            description:"this survey is for peaple in Nyamirambo"
        }
    ];

    let prevs = surveys.map(survey =>{
        return (
            <Col>
            <div className="m-3"> 
            <PrevCard type={survey.type} title={survey.title} description={survey.description} />
        
            </div>
                
                </Col>
        )
    })
    return (
        <div className="container">
            <Row>
                <Col>
                <div className="mt-3" style={{ background:'#333', padding:'4px', color:'white'}} >
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
