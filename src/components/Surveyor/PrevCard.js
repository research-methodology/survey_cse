import React,{useState} from 'react'
import { CardText, Card, Button, CardTitle, Label } from 'reactstrap';
import {Loading} from './../LoadingComponent';
import * as ActionTypes from '../../redux/ActionTypes';
import {baseUrl} from '../../shared/baseUrl'

export default function PrevCard(props) {
    let type=null;
    let deletionError=null;
    const deleteSingleSurvey=(surveyId)=>{
        
        type=ActionTypes.DELETESURVEY_REQUEST
    
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
               type=ActionTypes.SURVEYDELETED;
               (props.fetchSurveys());
            }
            else{
                type= ActionTypes.DELETSURVEY_FAILED;
            }
        },error => {
            throw error;
      }).catch(error =>  {
        console.log('your surveys ', error); 
        deletionError=error;
      type= ActionTypes.DELETSURVEY_FAILED;
     
      }
        )
      
    }
    
   const [deleteloading,setdeleteloading]=useState(false);
   const [surveydeleted,setsurveydeleted]=useState(false);
   const [deletionerror,setdeletionerror]=useState(null);
console.log("deleted? ",surveydeleted);
  
   const SurveyUrl=`http://cst-survey-frontend.herokuapp.com/respondent/${props.surveyId}`;
   const deleteSurvey=()=>{
       if(window.confirm('Do you really want to delete this survey?')){
         deleteSingleSurvey(props.surveyId);
         switch(type){
            case ActionTypes.DELETESURVEY_REQUEST:
              
                 setdeleteloading(true);
           
             case ActionTypes.DELETSURVEY_FAILED:
                 setdeletionerror(deletionError);
             case ActionTypes.SURVEYDELETED:
                 setsurveydeleted(true);
             default:
                 console.log("Nothing shown");
        }
       }
   }
   let msg = null;
   let deltesurveybtn =  <Button onClick={deleteSurvey} className="bg-warning mt-2"> Delete survey </Button>;
   if(deleteloading){
       console.log("it is loading");
    deltesurveybtn  =(<Button color="light"><Loading/></Button> ); 
   }
   
          if(deletionerror!==null){
              msg =<div className="alert alert-danger" role="alert">
              {deletionerror} 
            </div>
          }
          else if(surveydeleted){
            console.log("deleted now? ",surveydeleted);
            msg =<div className="alert alert-primary" role="alert">
           Survey is deleted successfully
          </div>
          }
          else{
              msg=null
          }
    var crd = '';
    if(props.type === 'CreateNew'){
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
       {deltesurveybtn}
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
