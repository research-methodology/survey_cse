import React from 'react'
import { CardText, Card, Button, CardTitle, Label } from 'reactstrap';
import {Loading} from './../LoadingComponent';

export default function PrevCard(props) {
   const SurveyUrl=`http://cst-survey-frontend.herokuapp.com/respondent/${props.surveyId}`;
   const deleteSingleSurvey=()=>{
       if(window.confirm('Do you really want to delete this survey?')){
         props.deleteSingleSurvey(props.surveyId);
       }
   }
   let deltesurveybtn =  <Button onClick={deleteSingleSurvey} className="bg-warning mt-2"> Delete survey </Button>;
   if(props.survey.deletesurveyloading){
    deltesurveybtn  =<Button color="light"><Loading/></Button>     
   }
   let msg = null;
          if(props.survey.errMess !== null){
              msg =<div className="alert alert-danger" role="alert">
              {props.survey.errMess} 
            </div>
          }
          else if(props.survey.surveydeleted){
            msg =<div className="alert alert-primary" role="alert">
           Survey is deleted successfully
          </div>
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
              {msg}
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
      
        {crd}
        </div>
    )
}
