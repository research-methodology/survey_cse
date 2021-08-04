import { Button } from 'reactstrap';
import React from 'react'
import SurveyDetails from './SurveyDetails'
import {Chart} from "react-google-charts";
import {Loading} from "../LoadingComponent";
import {useParams} from "react-router-dom";
export default function SurveyPage(props) {
    const params = useParams()
    let index=params.index;
    let title = props.Surveys.surveys[index] === undefined ? null : props.Surveys.surveys[index].surveyTitle;
    let results = props.Surveys.surveys[index] === undefined? []: props.Surveys.surveys[index].results;
    console.log("this is survey ", results);
    let surveyResult ={
        surveyTitle:title,
        survey:results}

    let surveyD = {
        survey:{
            
        }
    };
    let length = surveyResult["survey"].length;
    //let questionsAsked = Object.keys(surveyResult["survey"][0]);
    let questionsAsked;
    if(surveyResult["survey"].length === 0)
    {
        questionsAsked = [];
    }
    else{
        questionsAsked = surveyResult["survey"][0].map(each => each.question);
    }

    surveyResult["survey"].forEach(each =>{
        each.forEach(eachQuestion =>{
            if(surveyD["survey"][eachQuestion.question] === undefined){
                surveyD["survey"][eachQuestion.question] = {};
                surveyD["survey"][eachQuestion.question]["answers"] = {};
                surveyD["survey"][eachQuestion.question]["wayOfAnswering"] = eachQuestion.wayOfAnswering;
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

    let questionCards =  questionsAsked.map((question,index1) =>{
        let answers = Object.keys( surveyD["survey"][question]["answers"])
        let data= [];
        let indexing = 0;
        let allData = answers.map((answer, index) => {
            let d = [];
            let qty = parseInt(surveyD["survey"][question]["answers"][answer]);
            if(surveyD["survey"][question]["wayOfAnswering"] !== 'Textfield') {
            d.push(answer);
                d.push(qty);
                if (surveyD["survey"][question]["wayOfAnswering"] === "Checkbox") {
                    if ((qty / length) >= 0.9) {
                        d.push("#09982B");
                    } else if ((qty / length) >= 0.8) {
                        d.push("#0DFB4C");
                    } else if ((qty / length) >= 0.7) {
                        d.push("#C6F113");
                    } else if ((qty / length) >= 0.6) {
                        d.push("#C6E159");
                    } else if ((qty / length) >= 0.5) {
                        d.push("#2A49C4");
                    } else if ((qty / length) >= 0.3) {
                        d.push("#F67373");
                    } else {
                        d.push("#FF0000");
                    }

                    d.push(surveyD["survey"][question]["answers"][answer]);
                }

            return d;}
            else{
                indexing++;
                if(indexing % 2 === 0 ){
                    return <div key={answer+index +"dlkajfljiog"} className="color1 pb-1 mr-1">{answer}</div>;
                }
                else{
                    return <div key={answer+ index +"dlkajfljiog"} className="pb-1 mr-1">{answer}</div>;
                }


            }
            // return(
            //     <React.Fragment>
            //     <dt class="col-6">{answer}</dt>
            //     <dd class="col-6">{surveyD["survey"][question]["answers"][answer]}</dd>
            //     </React.Fragment>
            // )
        })
        if(surveyD["survey"][question]["wayOfAnswering"] === "Checkbox"){
            data = [['Element', 'Density', { role: 'style' }, {sourceColumn: 0, role: 'annotation', type: 'string', calc: 'stringify',},],...allData]
        }
        else if(surveyD["survey"][question]["wayOfAnswering"] === 'Textfield') {
            data = [...allData];
        }
        else {

            data = [['Task', 'Hours per Day'],...allData];
        }

        let chart = null;
        if(surveyD["survey"][question]["wayOfAnswering"] === 'Checkbox'){
            chart =
                <React.Fragment key={question + index1 + "vidsa"}>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="BarChart"
                    loader={<div><Loading/></div>}
                    data={data}
                    options={{
                        title: question,
                        width: "100%",
                        height: 400,
                        bar: { groupWidth: '95%' },
                        legend: { position: 'none' },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '6' }}
                />
                </React.Fragment>

        }
        else if(surveyD["survey"][question]["wayOfAnswering"] === 'Textfield') {
            chart =<div key={question + index1 + "vidadadsa"}>
                <div><h4> {question} </h4></div>
                <div className="scrollable-y heightOfTextfieldC text-center">
                    {data}
                </div>
            </div>
        }
        else{
            chart =<React.Fragment key={question + "dsflskdjfa"}>
                <Chart
                       width="100%" height="300px" chartType="PieChart"
                       loader={<div><Loading/></div>}
                       data={data}
                       options={{
                           title: question,
                           // Just add this option
                           is3D: true,
                       }}
                       rootProps={{ 'data-testid': '2' }}
                />
            </React.Fragment>

        }


        
        return (
            <div key={question + index1 + "keyOnQuestionsSa"} class="col-12 col-md-6" >
                    {/*<h3 class="card-header bg-secondary text-white">{question}</h3>*/}
                    <div class="">
                        {/*<dl class="row">*/}
                            {chart}
                        {/*</dl>*/}
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
            <div className="bg-secondary text-light p-3 w-100 mt-5 ml-3 mr-3 mb-3 d-flex justify-content-center">
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
