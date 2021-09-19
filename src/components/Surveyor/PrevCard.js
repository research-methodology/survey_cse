import React, {useEffect, useState} from 'react'
import { CardText, Card, Button, CardTitle, Label } from 'reactstrap';
import {Loading} from './../LoadingComponent';
//import * as ActionTypes from '../../redux/ActionTypes';
import {baseUrl} from '../../shared/baseUrl'

export default function PrevCard(props) {
   // let type=null;
    //let deletionError=null;
    const [deleteloading,setdeleteloading]=useState(false);
    //const [surveydeleted,setsurveydeleted]=useState(false);
    const [deletionerror,setdeletionerror]=useState(null);

    const deleteSingleSurvey=(surveyId)=>{
        setdeleteloading(true);
    
        return fetch(baseUrl+`surveys/delete/${surveyId}`,{
            method:'DELETE',
            headers:{
                "Authorization":localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            credentials: "same-origin"
        })
        .then(response=>response.json())
        .then(response=>{
            if(response.status===200||response.status===201||response.ok){
                (props.fetchSurveys()); 
               return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
              }
        },error => {
            throw error;
      })
      .then(response => { console.log('Survey deletion', response); 
      //alert(response.message);
      //setsurveydeleted(true);
      localStorage.removeItem("surveys");
      localStorage.setItem("deleteMessage",response.message);
      props.setDeleteMessage(response.message)
      })
      .catch(error =>  { console.log('Survey deletion ', error.message); 
     setdeletionerror(error);
    
      }
        )
      
    }
    
 
//console.log("deleted? ",surveydeleted);
  
   const SurveyUrl=`http://cst-survey-frontend.herokuapp.com/respondent/${props.surveyId}`;
   const deleteSurvey=()=>{
       if(window.confirm('Do you really want to delete this survey?')){
         deleteSingleSurvey(props.surveyId);
       }
    }
    //      switch(type){
    //         case ActionTypes.DELETESURVEY_REQUEST:
              
    //              setdeleteloading(true);
           
    //          case ActionTypes.DELETSURVEY_FAILED:
    //              setdeletionerror(deletionError);
    //          case ActionTypes.SURVEYDELETED:
    //              setsurveydeleted(true);
    //          default:
    //              console.log("Nothing shown");
    //     }
    //    }
   function SetEdit(){
       let index=props.index;
       let link=`/editSurvey/${index}`;
       
       //let SelectedSurvey = props.survey.surveys[index] === undefined? []: props.survey.surveys[index];
       localStorage.removeItem('SelectedSurvey');
       window.location=link;
   }
let msg=null;
let editButton=<Button className="bg-light text-dark w-30 mr-5 btn" onClick={SetEdit}>Edit Survey <span className="fa fa-edit"></span></Button>
   let deltesurveybtn =  <Button onClick={deleteSurvey} className="bg-danger w-30"> Delete survey </Button>;
   if(deleteloading){
      // console.log("it is loading");
    deltesurveybtn  =(<Button color="light"><Loading/></Button> ); 
   }
   
          if(deletionerror!==null){
              msg =<div className="alert alert-danger" role="alert">
              {deletionerror} 
            </div>
          }
          // else if(surveydeleted){
          //   console.log("Survey deleted successfully!");
          //   msg =<div className="alert alert-primary" role="alert">
          //  Survey is deleted successfully
          // </div>
          // }
    var crd = '';
    if(props.type === 'CreateNew'){
        localStorage.removeItem('SelectedSurvey');
        localStorage.removeItem('surveyInfo');
        crd = <div>
            <Card  className="d-flex justify-content-center align-items-center color1 PrevCard1" body style={{  height:'200px'}}>
                <CardText><a href='/createNewSurvey'>
                    <Button className="colorAndB2"><span className="fa fa-plus"></span> Create new Survey</Button></a>
                </CardText>
            </Card>
        </div>
    }
    else{
        crd = <div>
              
            <Card className="colorAndB2 PrevCard1" body style={{ borderColor: '#333', height:'250px'}}>
        <CardTitle tag="h5">{props.surveyTitle}</CardTitle>
        <CardText>Share your survey via :<a href={SurveyUrl}>{SurveyUrl}</a></CardText>
        <Button href={"/SurveyResult/" + (props.index)} > View results</Button>
       <div className="w-100 mt-2 bg-light d-flex justify-content-center align-items-center">{editButton}{deltesurveybtn}</div>
      </Card>
        </div>
    }
    return (
        <div>
      {msg}
        {crd}
        </div>
    )
}
