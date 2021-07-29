import React from 'react'
import { CardText, Card, Button, CardTitle } from 'reactstrap';
export default function PrevCard(props) {
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
        <Button > <a href="/SurveyResult">View</a> </Button>
      </Card>
        </div>
    }
    return (
        <div>
        {crd}
        </div>
    )
}
