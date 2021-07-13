import React from 'react'
import { CardText, Card, Button, CardTitle } from 'reactstrap';
export default function PrevCard(props) {
    var crd = '';
    if(props.type === 'CreateNew'){
        crd = <div>
            <Card  className="d-flex justify-content-center align-items-center" body inverse style={{ backgroundColor: 'grey', height:'200px', width:'400px' }}>
                <CardText>
                    <Button><a href='/createNewSurvey'><span className="fa fa-plus"></span> Create new Survey</a></Button>
                </CardText>
            </Card>
        </div>
    }
    else{
        crd = <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height:'200px', width:'400px' }}>
        <CardTitle tag="h5">{props.title}</CardTitle>
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
