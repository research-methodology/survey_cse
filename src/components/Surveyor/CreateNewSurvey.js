import {Breadcrumb, BreadcrumbItem, Button} from "reactstrap";
import React, { useState } from "react";
import { Row, Input, Form, Label } from "reactstrap";
import AnswersComponet from "./AnswersComponet";
import CategoriesComponent from "./CategoriesComponent";
import QuestionsComponet from "./QuestionsComponet";
import {Link} from "react-router-dom";
import { Loading } from "../LoadingComponent";
import {useParams} from "react-router-dom";
//import {findAllByPlaceholderText} from "@testing-library/react";
export default function CreateNewSurvey(props) {
    const params = useParams()
    let index=params.index;
    let SelectedSurvey = props.Surveys.surveys[index] === undefined? []: props.Surveys.surveys[index];
    console.log("Selected survey=: ",SelectedSurvey);
    const surveyId=SelectedSurvey._id;
    //console.log('Survey id is: ',surveyId)
    //let Updatabaledata=SelectedSurvey;
    let testInfo = localStorage.getItem('surveyInfo') === null ?{
            surveyTitle:"Testing Survey title",
            surveys:{
                Default:{
                    questions:{}
                }

            }} : JSON.parse(localStorage.getItem('surveyInfo'));
            let temp=SelectedSurvey;
            let EditableData=SelectedSurvey;
            //console.log('Temp data ',temp)
       
            let ArleadDone={};
            let mysurveys={}
                if(localStorage.getItem('SelectedSurvey')===null){
                    ArleadDone['surveyTitle']=temp['surveyTitle'];
                    //console.log('title is : ',ArleadDone.surveyTitle)
                    for(const key in temp['categories']){
                        
                        
                        //console.log(`category ${key} : `)
                        for(const data in temp['categories'][key]){
                            let categoryData=temp['categories'][key];
                            let questionsdata={};
                            let questAnswers={}
                            if(data=='questions'){
                                questionsdata['questions']={};
                                //console.log('data ',data)
                                for(const question in categoryData[data] ){
                                    let quest=categoryData[data][question]['question'];
                                    let way=categoryData[data][question]['wayOfAnswering']
                                    //console.log('question found',quest)
                                    let answers=categoryData[data][question]['answers'];
                                    //console.log('way of answering ',way)
                                    //questAnswers['answers']=answers;
                                   let answer={}
                                    for(const answ in answers){
                                        
                                        answer[answers[answ]['answer']]={};
                                  
                                       // let answer=answers[answ];
                                        //console.log('Answers....: '+JSON.stringify(answ),answers[answ])
                                        //questAnswers['answers'][answer['answer']]={};
                                
                                    }
                                    //console.log('single answer ',answer)
                                    questAnswers['wayOfAnswering']=way;
                                    questAnswers['answers']=answer;
                                    //console.log('right now answers are: ',questAnswers)
                                   // console.log('right now answers type is: ',typeof questAnswers['answers'])
                
                                    questionsdata['questions'][quest]=questAnswers;
                                }
                                 
                                // console.log('data  values',categoryData['categoryName'])
                                mysurveys[categoryData['categoryName']]=questionsdata;
                                
                                 //ArleadDone[categoryData['categoryName']]=questionsdata;
                            }
                           //console.log('my cats ',mysurveys)
                            ArleadDone['surveys']=mysurveys;
                        
                            
                          
                           
                            // for (var cat in )
                           // console.log(`${data} :${ temp['categories'][key][data]} \n`)
                        }
                
                    }
                }
                else{
                 ArleadDone=JSON.parse(localStorage.getItem('SelectedSurvey'));
                }
               
            
            
            
          
            console.log('now arleaddone data is :',ArleadDone)
           
            console.log('current data: ', JSON.parse(localStorage.getItem('SelectedSurvey')))
            let InitialData={};
            let IsUpudate=false;
            let IsCreatenew=false;
            if( ArleadDone.surveyTitle===undefined){
                InitialData=testInfo;
                IsCreatenew=true;
                IsUpudate=false;
            }
            else{
                InitialData=ArleadDone;
                IsUpudate=true;
                IsCreatenew=false;
                localStorage.removeItem('surveyInfo')
            }
            //console.log('edit? :',IsUpudate)
            //console.log('create? :',IsCreatenew)
           
            //console.log("Test the data now:\n",InitialData)
        
    function addNewCategory(newCategory){
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][newCategory] ={};
        setsurveyInfo(currentSurveyInfo);
        console.log('currently we get ',currentSurveyInfo)
        localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
        localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
        console.log('in local storage we get ',currentSurveyInfo)
        ArleadDone=localStorage.getItem('SelectedSurvey');

    };
    function editQuestion (oldQuestion, newQuestion) {
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][selectedCategory]["questions"][newQuestion] = currentSurveyInfo["surveys"][selectedCategory]["questions"][oldQuestion];
        delete currentSurveyInfo["surveys"][selectedCategory]["questions"][oldQuestion];
        setsurveyInfo(currentSurveyInfo);
        localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
        localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
        ArleadDone=localStorage.getItem('SelectedSurvey');
        setSelectedQuestion(newQuestion);

    }
    function editAnswer (oldAnswer, newAnswer) {
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"][newAnswer] = currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"][oldAnswer];
        delete currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"][oldAnswer];
        setsurveyInfo(currentSurveyInfo);
        localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
        localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
        ArleadDone=localStorage.getItem('SelectedSurvey');
    }
    function editCategory (oldCategory, newCategory) {
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][newCategory] = currentSurveyInfo["surveys"][oldCategory];
        delete currentSurveyInfo["surveys"][oldCategory];
        setsurveyInfo(currentSurveyInfo);
        localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
        localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
        ArleadDone=localStorage.getItem('SelectedSurvey');
        setSelectedCategory(newCategory);
    }
    function addNewQuestion(newQuestion){
        let currentSurveyInfo = {...surveyInfo};
        if(selectedCategory !== null){
            if(currentSurveyInfo["surveys"][selectedCategory]["questions"] === null || currentSurveyInfo["surveys"][selectedCategory]["questions"] === undefined){
                currentSurveyInfo["surveys"][selectedCategory]["questions"] = {};
            }
            
            currentSurveyInfo["surveys"][selectedCategory]["questions"][newQuestion] ={};
            setsurveyInfo(currentSurveyInfo);
            localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
            localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
            ArleadDone=localStorage.getItem('SelectedSurvey');
            console.log('in local storage again  we get ',currentSurveyInfo)
        }
        else{
            currentSurveyInfo["surveys"]["Default"]["questions"][newQuestion] ={};
            setsurveyInfo(currentSurveyInfo);
            localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
            localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
            ArleadDone=localStorage.getItem('SelectedSurvey');
        }
    }
    function addNewAnswer(newAnswer){
        if(selectedQuestion !==null){
            let currentSurveyInfo = {...surveyInfo};
            if(currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"]===null || currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"]=== undefined){
                currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"]={};
            }
            currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"][newAnswer]={};
            setsurveyInfo(currentSurveyInfo);
            localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
            localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
            ArleadDone=localStorage.getItem('SelectedSurvey');
        }

    }
    function setWayOfAnsweringOnSelectedQuestion(selected){
        setWayOfAnswering(selected);
        let currentSurveyInfo = {...surveyInfo};
        currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["wayOfAnswering"] = selected;
        setsurveyInfo(currentSurveyInfo);
        localStorage.setItem('surveyInfo',JSON.stringify(currentSurveyInfo));
        localStorage.setItem('SelectedSurvey',JSON.stringify(currentSurveyInfo));
        ArleadDone=localStorage.getItem('SelectedSurvey');
        
    }
    
    function handleFinish(event) {
        if(surveyTitle === null){
            alert("fill title first")
            return
        }
        let currentSurveyInfo = surveyInfo;
        let readyData = {surveyTitle};
        let categoriesA = Object.keys(currentSurveyInfo["surveys"]);
       
        readyData["categories"] = [];
        categoriesA.forEach(category =>{
            let categ = {
                categoryName:category,
                questions:[]
            };
            let questions =!currentSurveyInfo["surveys"][category]["questions"] ?[] : Object.keys(currentSurveyInfo["surveys"][category]["questions"]);
            questions.forEach(question =>{
                
                let answers =!currentSurveyInfo["surveys"][category]["questions"][question]["answers"]?[] : Object.keys(currentSurveyInfo["surveys"][category]["questions"][question]["answers"]);
                let quest = {
                    question:question,
                    wayOfAnswering:currentSurveyInfo["surveys"][category]["questions"][question]["wayOfAnswering"],
                    answers:[...answers]
                }
                categ.questions.push(quest);
            })
            readyData.categories.push(categ);
        })
if(IsCreatenew===true){
   
    props.createNewSurvey(readyData);
    localStorage.removeItem('surveyInfo');
}
if(IsUpudate===true){
    console.log('Just for a test ', EditableData)
    console.log('Read data ',readyData)
 
    console.log('Check before submission data now :',JSON.parse(localStorage.getItem('SelectedSurvey')))
    props.UpdateSurvey(readyData,surveyId);
    localStorage.removeItem('SelectedSurvey');
}
        
        
    }

    function ChangeSurveyTitle(event){
        
        //currentSurveyInfo.surveyTitle = event.value;
        
        setsurveyTitle(event.target.value)
       

    }
    let title=null;
    if(IsUpudate===true){
       title=InitialData.surveyTitle;
   
    }
    else
    title=null
     
    const [surveyInfo, setsurveyInfo] = useState(InitialData);
    const [selectedCategory, setSelectedCategory] = useState("Default");
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [surveyTitle, setsurveyTitle] = useState(title);
     const [wayOfAnswering, setWayOfAnswering] = useState('Choose');
    let [showDelete,setShowDelete] = useState('null,null');
    
  let Finish = null;
 // console.log('Loading submission ',props.Surveys.submitisLoading)
  if(props.Surveys.submitisLoading){
      Finish=(<Button><Loading/></Button>);
  }
  else{
    if (IsUpudate) Finish=
    (<Button onClick={handleFinish}>
                  Update Survey
              </Button> )
     else Finish=
     (<Button onClick={handleFinish}>
                   Finish
               </Button> )
  }
  
    let handleEnterAndLeave = (event) =>{
        let [category] = (event.target.id).split(',');

        let type = event.type;
        if(type === 'mouseenter'){
            if(category!==null || undefined)
            setShowDelete(category+',showIt');
        }
        else if(type === 'mouseleave'){
            setShowDelete(category+',hideIt');
        }
    }
    
    let questionArray = true;
    if(selectedCategory===null ||surveyInfo["surveys"][selectedCategory] ===undefined || surveyInfo["surveys"][selectedCategory]["questions"] ===undefined){
        questionArray = false;
    }
    let answerArray = true;
    if(selectedQuestion===null || surveyInfo["surveys"][selectedCategory] === undefined || surveyInfo["surveys"][selectedCategory]["questions"]===undefined ||
    surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion] === undefined || surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"] === undefined ||surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"] ===  null ){
        answerArray = false;
    }
    let enableChooseWayOfAnswering = false;
    if(selectedQuestion !==null){
        let currentSurveyInfo = {...surveyInfo};
        if(currentSurveyInfo["surveys"][selectedCategory]===undefined || currentSurveyInfo["surveys"][selectedCategory]["questions"] === undefined || currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]===null ||currentSurveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]=== undefined){
            enableChooseWayOfAnswering = false;
        }
        else{
            enableChooseWayOfAnswering = true;
        }
    }


    console.log('Check  data now :',JSON.parse(localStorage.getItem('SelectedSurvey')))
  return (
     
    <div>
      <div className="">
          <div className="container">
             
              <div className="row">
                  <div className="col-12 ">
                      <Breadcrumb>
                          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                          <BreadcrumbItem><Link to="/dashboard" onClick={props.fetchSurveys}>Dashboard</Link></BreadcrumbItem>
                          <BreadcrumbItem active>Create new survey</BreadcrumbItem>
                      </Breadcrumb>
                  </div>
              </div>
      <div className="row">
            <div className="col-12 mt-3 mb-3 colorAndB2 text-center">
                <h2>Creation of new survey</h2>
                <p>Use following cards to create your survey.</p>
                <p>Affter selecting category, questions in that category will shown on questions card. <br/> Same to answers that will shown after selection of question </p>
            </div>
        </div>
          </div>
        <div className="surveyContainer  container-survey">
            <div className="row row-content ">
                <div className="col-12 col-md-9">
                    <Form>
                        <Row>
                            <div className="col-11 ml-2">
                                <Label>Survey title</Label>
                                <div onChange={ChangeSurveyTitle} contentEditable="true" className="d-flex justify-content-center m-2 border border-primary rounded border-3 h-50 align-items-center"> {title} </div>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
            <div className="scrollable-x">
            <div className="scrollpart">
        
        <div className="row">
          <div className="col-4">
              <h6 className="m-1">Categories</h6>
            <CategoriesComponent editCategory={editCategory} categories={Object.keys(surveyInfo["surveys"])}
                                 selectedCategory={selectedCategory} handleEnterAndLeave={handleEnterAndLeave} showDelete={showDelete}
                                 setSelectedCategory={setSelectedCategory} addNewCategory={addNewCategory} />
          </div>
          <div className="col-4">
              <h6 className="m-1"> Questions in selected category</h6>
              <QuestionsComponet selectedQuestion={selectedQuestion} editQuestion={editQuestion}  handleEnterAndLeave={handleEnterAndLeave} showDelete={showDelete}
                                 questions={questionArray ?Object.keys(surveyInfo["surveys"][selectedCategory]["questions"]):[]}
              setSelectedQuestion={setSelectedQuestion}  addNewQuestion={addNewQuestion}/>
          </div>
          <div className="col-4">
              <h6 className="m-1"> Answer of selected question</h6>
            <AnswersComponet editAnswer={editAnswer} answers={answerArray?Object.keys(surveyInfo["surveys"][selectedCategory]["questions"][selectedQuestion]["answers"] ):[]}
                             addNewAnswer={addNewAnswer} handleEnterAndLeave={handleEnterAndLeave} showDelete={showDelete}
            setWayOfAnsweringOnSelectedQuestion={setWayOfAnsweringOnSelectedQuestion} wayOfAnswering={wayOfAnswering} selectedQuestion={selectedQuestion} enableChooseWayOfAnswering = {enableChooseWayOfAnswering}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
            {Finish}
        </div>
                {props.Surveys.message && (
                    <div className="alert alert-success mt-2" role="alert">
                        {props.Surveys.message}, <b>go to dashboard to view more!</b>
                    </div>
                )}
      </div>
    </div></div>
    </div></div>
  );
}
