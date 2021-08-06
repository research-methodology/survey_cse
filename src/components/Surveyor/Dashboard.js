import React, {useState} from 'react'
import PrevCard from './PrevCard'
import {Link, Redirect, Route, Switch} from "react-router-dom";
import { useEffect } from 'react';
import { Loading } from '../LoadingComponent';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup,Label,Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {baseUrl} from "../../shared/baseUrl";
import SurveyPage from "./SurveyPage";

//    const [surveys,setsurveys]=useState([]);


 let DashboardHome = (props) => {

     const [isModalOpen,setModelopen]=useState(false);

    let loading = null;
    if(props.surveys.isLoading){
        loading = <div className="m-3">
            <b>Fetching</b>
            <Loading/>
        </div>
    }
    let prevs = props.surveys.surveys.map((survey, index) =>{
        return (
            <React.Fragment>
                <Col>
                    <div className="m-3">
                        <PrevCard type={survey.type?survey.type:"survey"} index={index-1} surveyTitle={survey.surveyTitle} description={survey.description} surveyId={survey._id}/>

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
    else if(props.auth.usercreds && !props.auth.profileLoading){
        modelbody=(  <ModalBody>
            <Form>

                <FormGroup>
                    <Label>First_name: </Label><Label><h6>{props.auth.usercreds.first_name}</h6></Label>
                  
                </FormGroup>
                <FormGroup>
                    <Label>Last_name: </Label><Label><h6>{props.auth.usercreds.last_name}</h6></Label>
                </FormGroup>
                <FormGroup>
                <Label>Email: </Label><Label><h6>{props.auth.usercreds.email}</h6></Label>
                </FormGroup>

            </Form>
        </ModalBody>);
    }
    const toggleModal=()=>{
            setModelopen(!isModalOpen);     
      }
    return (
        <React.Fragment>
           
            <div className="d-flex justify-content-end mt-3 mr-4" ><Button className="btn-lg colorAndB2" type="button" onClick={toggleModal}>View your profile</Button></div>

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
                {loading}

            </Row>     
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
         <ModalHeader toggle={toggleModal}>User profile</ModalHeader>
         {modelbody}
       
     </Modal>
        </div>
        </React.Fragment>
    )
}

let Dashboard = props =>{
    const [surveys,setSurveys] = useState({
        isLoading:false,
        errMess: null,
        surveys:localStorage.getItem('surveys') === null ? [{type: "CreateNew", goto: "createNewSurvey"}]: JSON.parse(localStorage.getItem('surveys')) ,
        surveyurl:null,
        surveyChangeToggle:false,
        results:[]
    });
    let fetchSurveys=()=>{
        setSurveys({...surveys,isLoading: true});
        fetch(baseUrl+"surveys/user/surveys",{
            method:"GET",
            headers:{
                "Authorization":localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            credentials: "same-origin"
        })
            .then(surveys=>surveys.json()).then(response =>{
            //console.log("the status is ",response.status);
            console.log('your surveys before are :',response);
            if(response.status===200||response.status === 201){
                console.log('your surveys are :',response.surveys);
                props.setSurveys({...surveys,surveys: [{
                        type: "CreateNew",
                        goto: "createNewSurvey"
                    }, ...response.surveys]})
                localStorage.setItem('surveys',JSON.stringify([{
                    type: "CreateNew",
                    goto: "createNewSurvey"
                }, ...response.surveys]));




            }
            else if(response.status === 404){

                props.setSurveys({...surveys,isLoading: false, surveys: []});
            }
            else{
                localStorage.setItem('surveys',JSON.stringify([]));
            }
        },error => {
            throw error;
        }).catch(error =>  {
            console.log('your surveys ', error);
            setSurveys({...surveys,isLoading: false, errMess: error.message});
        });

    }
    useEffect(() =>{
        fetchSurveys();
    }, [surveys.surveyChangeToggle])
     return(
         <div>
             <Switch>
                 <Route exact path="/dashboard/SurveyResult/:index" component={() => <SurveyPage Surveys={surveys} /> } />
                 <Route exact path="/dashboard"component={() => <DashboardHome surveys={surveys} setSurveys={setSurveys} Userprofile={props.Userprofile} auth={props.auth}/>} />

                 <Redirect to="/dashboard"/>
             </Switch>
         </div>
     )
}
export default Dashboard;