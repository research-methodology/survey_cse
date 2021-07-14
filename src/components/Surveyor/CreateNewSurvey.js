import { Button } from "reactstrap";
import React, { useState } from "react";
import { Row, Input, Form, Label } from "reactstrap";
import AnswersComponet from "./AnswersComponet";
import CategoriesComponent from "./CategoriesComponent";
import QuestionsComponet from "./QuestionsComponet";
export default function CreateNewSurvey() {
    let testInfo = {
        surveyTitle:"Testing Survey title",
        surveys:{
        
    }}
    function addNewCategory(newCategory){
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][newCategory] ={};
        setsurveyInfo(currentSurveyInfo);
    };
    function addNewQuestion(newQuestion){
        if(selectedCategory !== null){
            let currentSurveyInfo = {...surveyInfo};
            if(currentSurveyInfo["surveys"][selectedCategory]["questions"] === (null || undefined)){
                currentSurveyInfo["surveys"][selectedCategory]["questions"] = {};
            }
            
            currentSurveyInfo["surveys"][selectedCategory]["questions"][newQuestion] ={};
            setsurveyInfo(currentSurveyInfo);
        }
    }
    function addNewAnswer(newAnswer){
        if(selectedQuestion !==null){
            let currentSurveyInfo = {...surveyInfo};
            if(currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"]===(null || undefined)){
                currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"]={};
            }
            currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"][newAnswer]={};
            setsurveyInfo(currentSurveyInfo);
        }
    }
    function setWayOfAnsweringOnSelectedQuestion(selected){
        setWayOfAnswering(selected);
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["wayOfAnswering"] = selected;
        setsurveyInfo(currentSurveyInfo);

        
    }
    function handleFinish(event) {
        if(surveyTitle === null){
            alert("fill title first")
            return
        }
        let currentSurveyInfo = surveyInfo;
        let readyData = {};
        let categoriesA = Object.keys(currentSurveyInfo["surveys"]);
        readyData["categories"] = [];
        categoriesA.forEach(category =>{
            let categ = {
                categoryName:category,
                questions:[]
            };
            let questions = Object.keys(currentSurveyInfo["surveys"][category]["questions"]);
            questions.forEach(question =>{
                
                let answers = Object.keys(currentSurveyInfo["surveys"][category]["questions"][question]["answers"]);
                let quest = {
                    question:question,
                    wayOfAnswering:currentSurveyInfo["surveys"][category]["questions"][question]["wayOfAnswering"],
                    answers:[...answers]
                }
                categ.questions.push(quest);
            })
            readyData.categories.push(categ);
        })

        alert(JSON.stringify(readyData));
    }
    function ChangeSurveyTitle(event){
        //currentSurveyInfo.surveyTitle = event.value;
        setsurveyTitle(event.target.value)
    }
    const [surveyInfo, setsurveyInfo] = useState(testInfo);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [surveyTitle, setsurveyTitle] = useState(null);
     const [wayOfAnswering, setWayOfAnswering] = useState('Choose');
    
    let questionArray = true;
    if(selectedCategory===null ||surveyInfo["surveys"][selectedCategory]["questions"] ===undefined){
        questionArray = false;
    }
    let answerArray = true;
    if(selectedQuestion===null ||surveyInfo["surveys"][selectedCategory]["questions"]===undefined || 
    surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion] === undefined || surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"] === (undefined && null) ){
        answerArray = false;
    }
    let enableChooseWayOfAnswering = false;
    if(selectedQuestion !==null){
        let currentSurveyInfo = {...surveyInfo};
        if(currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]===null ||currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]=== undefined){
            enableChooseWayOfAnswering = false;
        }
        else{
            enableChooseWayOfAnswering = true;
        }
    }
  return (
    <div>
      <div className="container">
      <div className="row">
            <div className="col-12 mt-3 mb-3" style={{background:"#333", color:"white"}}>
                <h2>Creation of new survey</h2>
                <p>Use following cards to create your survey.</p>
                <p>Affter selecting category, questions in that category will shown on questions card. <br/> Same to answers that will shown after selection of question </p>
            </div>
        </div>
        <div className="surveyContainer scrollable-x">
            <div className="scrollpart">
        <div className="row row-content ">
          <div className="col-12 col-md-9">
            <Form>
              <Row>
                <Label>Survey title</Label>
                <Input onChange={ChangeSurveyTitle} type="text" />
              </Row>
            </Form>
          </div>
        </div>
        
        <div className="row">
          <div className="col-4">
              <h6 className="m-1">Categories</h6>
            <CategoriesComponent categories={Object.keys(surveyInfo["surveys"])}selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} addNewCategory={addNewCategory} />
          </div>
          <div className="col-4">
              <h6 className="m-1"> Questions in selected category</h6>
              <QuestionsComponet selectedQuestion={selectedQuestion} questions={questionArray ?Object.keys(surveyInfo["surveys"][selectedCategory]["questions"]):[]} 
              setSelectedQuestion={setSelectedQuestion}  addNewQuestion={addNewQuestion}/>
          </div>
          <div className="col-4">
              <h6 className="m-1"> Answer of selected question</h6>
            <AnswersComponet answers={answerArray?Object.keys(surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"] ):[]} addNewAnswer={addNewAnswer}
            setWayOfAnsweringOnSelectedQuestion={setWayOfAnsweringOnSelectedQuestion} wayOfAnswering={wayOfAnswering} selectedQuestion={selectedQuestion} enableChooseWayOfAnswering = {enableChooseWayOfAnswering}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
            <Button onClick={handleFinish}>
                Finish
            </Button>
        </div>
      </div>
    </div></div>
    </div>
  );
}
