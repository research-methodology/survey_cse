import React, {useState} from 'react'
import PrevCard from './PrevCard'
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { Loading } from '../LoadingComponent';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup,Label,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

//    const [surveys,setsurveys]=useState([]);
export default function Dashboard(props) {
     useEffect(()=>{
        
          // localStorage.removeItem('surveys');
            if(props.Surveys.surveys.length===0 && !props.Surveys.isLoading){
                props.fetchSurveys(); 
                console.log("Surveys of the user is ",props.Surveys.Surveys);
               
            }
        
     },[]);
     const [isModalOpen,setModelopen]=useState(false);
  
     const toggleModal=()=>{
        console.log("Button clicked!");
           setModelopen(!isModalOpen);
           if(props.auth.usercreds==={}){
               props.Userprofile(); 
           } 
    }
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

    let prevs = surveys.map((survey, index) =>{
        return (
            <React.Fragment>
            <Col>
            <div className="m-3">
            <PrevCard type={survey.type?survey.type:"survey"} index={index-1} surveyTitle={survey.surveyTitle} description={survey.description} />

            </div>

                </Col>
                {/* {loading === null ? null : <Col> {loading}</Col>} */}
            </React.Fragment>
        )
    })
    let modelbody=null;

    if(props.auth.profileLoading){
        modelbody=<Label color="light"><Loading/></Label>
    }
    else{
        modelbody=(  <ModalBody>
            <Form>

                <FormGroup>
                    <Label>First_name: </Label><Label><h5>{props.auth.usercreds.first_name}</h5></Label>
                  
                </FormGroup>
                <FormGroup>
                    <Label>Last_name: </Label><Label><h5>{props.auth.usercreds.last_name}</h5></Label>
                </FormGroup>
                <FormGroup>
                <Label>Email: </Label><Label><h5>{props.auth.usercreds.email}</h5></Label>
                </FormGroup>

            </Form>
        </ModalBody>);
    }
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
                  <div ><Button className="btn-lg bg-warning" onclick={toggleModal()}>User profile</Button></div>  
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
            <Modal isOpen={isModalOpen} toggle={toggleModal()}>
         <ModalHeader toggle={toggleModal()}>User profile</ModalHeader>
         {modelbody}
       
     </Modal>
        </div>
    
    )
}
