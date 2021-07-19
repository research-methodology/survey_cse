import React from 'react'
import PrevCard from './PrevCard'
import {Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from "react-router-dom";
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
            <div className="row">
                <div className="col-12">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                </Breadcrumb>
                </div>
            </div>
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
