import React from 'react'
import { CardText, Card, Button, CardTitle } from 'reactstrap';
export default function PrevCard(props) {
    var crd = '';
    if(props.type === 'CreateNew'){
        crd = <div>
            <Card  className="d-flex justify-content-center align-items-center color1" body style={{  height:'200px', width:'400px' }}>
                <CardText>
                    <Button className="colorAndB2"><a href='/createNewSurvey'><span className="fa fa-plus"></span> Create new Survey</a></Button>
                </CardText>
            </Card>
        </div>
    }
    else{
        crd = <div>
            <Card className="colorAndB2" body style={{ borderColor: '#333', height:'200px', width:'400px' }}>
        <CardTitle tag="h5">{props.surveyTitle}</CardTitle>
        <CardText>{props.description}</CardText>
        <Button href="/SurveyResult">View</Button>
      </Card>
        </div>
    }
    return (
        <div>
        {crd}
        </div>
    )
}
