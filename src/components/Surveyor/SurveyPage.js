import { Button } from 'reactstrap';
import React from 'react'
import SurveyDetails from './SurveyDetails'
export default function SurveyPage(props) {
    let surveyResult ={
        surveyTitle:props.Surveys.surveys[0].surveyTitle,
        survey:props.Surveys.surveys[0].survey}

    let surveyD = {
        survey:{
            
        }
    };
    //let questionsAsked = Object.keys(surveyResult["survey"][0]);
    let questionsAsked = surveyResult["survey"][0].map(each => each.question);
    surveyResult["survey"].forEach(each =>{
        each.forEach(eachQuestion =>{
            if(surveyD["survey"][eachQuestion.question] === undefined){
                surveyD["survey"][eachQuestion.question] = {};
                surveyD["survey"][eachQuestion.question]["answers"] = {};
                //surveyD["survey"][eachQuestion.question]["answers"][eachQuestion.answer]=1;
                eachQuestion.answer.forEach(eachAnswer =>{
                    surveyD["survey"][eachQuestion.question]["answers"][eachAnswer]=1;
                }) 

                //surveyD["survey"][eachQuestion.question]["totalAnswers"] = 1;
            }
            else{
                eachQuestion.answer.forEach(eachAnswer =>{
                    if(surveyD["survey"][eachQuestion.question]["answers"][eachAnswer]===undefined ||surveyD["survey"][eachQuestion.question]["answers"][eachAnswer]===null){
                        surveyD["survey"][eachQuestion.question]["answers"][eachAnswer] = 1;
                        
                    }
                    else{
                        let value = parseInt(surveyD["survey"][eachQuestion.question]["answers"][eachAnswer]);
                        surveyD["survey"][eachQuestion.question]["answers"][eachAnswer] =  (value + 1);
                    }
                }) 

                
                // let tAnswer = surveyD["survey"][eachQuestion]["totalAnswers"];
                //     surveyD["survey"][eachQuestion]["totalAnswers"] = (tAnswer + 1);
            }
            //surveyD["survey"][eachQuestion][];
        })
    })

    let questionCards =  questionsAsked.map(question =>{
        let answers = Object.keys( surveyD["survey"][question]["answers"])
        let ans = answers.map(answer => {
            return(
                <React.Fragment>
                <dt class="col-6">{answer}</dt>
                <dd class="col-6">{surveyD["survey"][question]["answers"][answer]}</dd>
                </React.Fragment>
            )
        })

        
        return (
            <div class="card col-sm-5 col-md-4 col-lg-3 m-3" style={{width:"400px"}}>
                    <h3 class="card-header bg-secondary text-white">{question}</h3>
                    <div class="card-body">
                        <dl class="row">
                            {ans}
                        </dl>
                    </div>
                    {/* <div class="card-footer">
                    <dl class="row">
                    <dt class="col-6">Total Respondent</dt>
                <dd class="col-6">{surveyD["survey"][question]["totalAnswers"]}</dd>
                        </dl>
                    </div> */}
                </div>
        )
    })
    function toggle_visibility(id) {
        var e = document.getElementById(id);
        if(e.style.display === 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';
        
    }


    function toggleShowDetail(){
        toggle_visibility("surveyDetails");
    }
    return (
        <div className="container">
            <div className="bg-secondary text-light p-3 w-100 m-3 d-flex justify-content-center">
                <h2>{surveyResult.surveyTitle}</h2>
            </div>
            <div>
                    <h4>Total Respondents is  {surveyResult["survey"].length}</h4>
                </div>
            <div className="row surveyContainer">
                {questionCards}
            </div>
            <div className="mt-3">
                <div>
                    <Button onClick={toggleShowDetail}>Show details </Button>
                </div>
                <div id="surveyDetails" style={{display:"none"}}>
            <SurveyDetails questionsAsked={questionsAsked} surveyResult={surveyResult} />
            </div>
            </div>
        </div>
    )
}
