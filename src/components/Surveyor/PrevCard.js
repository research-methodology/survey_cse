import React from 'react'
import { CardText, Card, Button, CardTitle, Label } from 'reactstrap';

export default function PrevCard(props) {
   const SurveyUrl=`http://cst-survey-frontend.herokuapp.com/respondent/${props.surveyId}`;
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
            <Card className="colorAndB2 PrevCard1" body style={{ borderColor: '#333', height:'200px'}}>
        <CardTitle tag="h5">{props.surveyTitle}</CardTitle>
        <CardText>{props.description}</CardText>
        <Button href={"/SurveyResult/" + (props.index)} > View </Button>
        <Label className="mt-2">Share your survey via :<a href={SurveyUrl}>{SurveyUrl}</a></Label>
      </Card>
        </div>
    }
    return (
        <div>
        {crd}
        </div>
    )
}
