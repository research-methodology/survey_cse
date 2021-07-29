import React, {useState} from 'react'
import PrevCard from './PrevCard'
import {Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { Loading } from '../LoadingComponent';

//    const [surveys,setsurveys]=useState([]);
export default function Dashboard(props) {
    //  useEffect(()=>{
    // //     props.fetchSurveys();
      
    //  },[]);
     if(props.Surveys.surveys.length === 0 && !props.Surveys.isLoading){
        props.fetchSurveys();
    }
    console.log(props.Surveys.surveys);
    let surveys = [
        {
            type: "CreateNew",
            goto: "createNewSurvey"
        },
        ...props.Surveys.surveys
        
    ];
    let loading = null;
    if(props.Surveys.isLoading){
        loading = <div className="m-3">
            <h2>Previous Surveys</h2>
            <Loading/>
        </div>
    }

    let prevs = surveys.map(survey =>{
        return (
            <React.Fragment>
            <Col>
            <div className="m-3">
            <PrevCard type={survey.type?survey.type:"survey"} surveyTitle={survey.surveyTitle} description={survey.description} />

            </div>

                </Col>
                {loading === null ? null : <Col> {loading}</Col>}
            </React.Fragment>
        )
    })
    // if(props.Surveys.errMess){
    //     return (
    //
    //         <Row>
    //
    //         <h4>Failed to fetch surveys!</h4>
    //
    //         </Row>
    //     );
    // }
    // if( props.Surveys.isLoading)
    // {
    //     return <Loading/>
    // }
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
