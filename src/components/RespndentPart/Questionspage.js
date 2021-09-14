import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {Loading} from '../LoadingComponent';
import { useParams } from "react-router";
var Renderitems = ({ items,SubmitSurveyrespons,Respond}) => {
  const categories  = items['categories'] || [];
  let answers = null;

// var SubmitSurvey=(output)=>(props)=>{
// props.SubmitSurveyrespons(output);
// }
  const [start, setStart] = useState(0);
  const [output,setOutput] = useState({});
  const [answerStates,setAnswerStates] = useState({});
  const params = useParams()
  const surveyid=params.surveyId;
  // var [SubmitSurveyrespons,setSubmitSurveyrespons]=useState(SubmitSurvey({}));
  // var categorycount=categories[count-1];
  // console.log({...categorycount});
  let handleFinish = (event)=>{
    //alert(JSON.stringify(output));
    let lastOutput = [];
    let keyQuestion = Object.keys(output);
    keyQuestion.forEach(qtn =>{
        lastOutput.push(output[qtn]);
    })
    //console.log('Resiponses from respondent is: ',lastOutput);
    console.log('response in string', JSON.stringify(lastOutput));
    SubmitSurveyrespons(lastOutput,surveyid);
    event.preventDefault();
  }
  let handleShowMore = () => {
    setStart(start >= (categories.length - 1) ? start : start + 1);
    
  };
  let handleShowPrev = () =>{
    setStart(start<=0? 0 : (start - 1)  );
  }
  function handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    let [category, question,type] = name.split(',');
    let prevOutput = {...output};
    prevOutput[question]= {
      category,
      question,
        wayOfAnswering: type
    };

    if(prevOutput[question]["answer"] === undefined){

      prevOutput[question]["answer"] = [];
    }
    if(type === 'Checkbox'){
      
      let checked = event.target.checked;
      setAnswerStates({...answerStates, [name]:checked});
      if(checked){
        prevOutput[question]["answer"].push(value);
      }
      else{
        for( let i = 0; i < prevOutput[question]["answer"].length; i++){ 
    
          if ( prevOutput[question]["answer"][i] === value) { 
      
            prevOutput[question]["answer"].splice(i, 1); 
          }
      
      }
      }
    }
    else{
            setAnswerStates({...answerStates, [name]: value});
      prevOutput[question]["answer"] = [value];

    }
    setOutput(prevOutput);
    

  }
  // setCategories(categories.shift())
  let results = null;
  if(categories !== null  && categories !== undefined){
 results = categories.slice(start, (start + 1)).map((category) => {
    var questions = category.questions.map((question) => {
        let answersField = "";
      if (question.wayOfAnswering === "Textfield"){
          if(answerStates[category.categoryName +","+question.question+",Textfield,null"] === undefined){
              let prev =answerStates;
              prev[category.categoryName +","+question.question+",Textfield,null"] = "";
              setAnswerStates(prev);
          }
        answersField = (
                  <Input onChange={handleChange} type="textarea" className="form-control"
                         value={answerStates[category.categoryName +","+question.question+",Textfield,null"]}
                         name={category.categoryName +","+question.question+",Textfield,null"}
                  key={category.categoryName +","+question.question+",Textfield,null"}

                  />
        );
      } else if (question.wayOfAnswering === "Checkbox") {
          
        answers = question.answers.map((answer, index) => {
            let pName = category.categoryName +","+question.question+",Checkbox," + answer.answer;
            if(answerStates[pName] === undefined){
                //let prev = answerStates;

                //prev[category.categoryName +","+question.question+",Checkbox," + answer.answer] = false;
                setAnswerStates({...answerStates, [pName]: false});
            }
          return (
            <React.Fragment key={category.categoryName +","+question.question+",Checkbox," + answer.answer + index}>
              
              
              
                <FormGroup check>
                <input
                      type="checkbox"
                      checked={answerStates[pName]}
                      onChange={handleChange}
                      name={pName}
                      value={answer.answer}
                      className="form-check-input"
                      key={category.categoryName +","+question.question+",Checkbox," + answer.answer}

                    />
                  <Label class="form-check-label" for={answer.answer + "ocia"}>{answer.answer}</Label>
                  
                    
                    
                
                </FormGroup>
             
            </React.Fragment>
          );
        });

        answersField =(
            <React.Fragment key={category.categoryName +","+question.question+",Checkbox,"}>
                {answers}
            </React.Fragment>
            
          )


      } else if (question.wayOfAnswering === "Radio") {
        answers = question.answers.map((answer) => {
            let pName = category.categoryName +","+question.question+",Radio,null";
            if(answerStates[pName] === undefined){
                setAnswerStates({...answerStates,[pName]: ""});
            }
          return (
            <React.Fragment key={category.categoryName +","+question.question+",Radio,null"}>
              
                <FormGroup check>
                  <Input onChange={handleChange} type="radio" value={answer.answer} name={pName}
                  id={category.categoryName +","+question.question+",Radio,null"}
                         checked={answerStates[pName] === answer.answer}
                  />
                  <Label>{answer.answer}</Label>
                </FormGroup>
              
            </React.Fragment>
          );
        });

        answersField = (
            <React.Fragment key={category.categoryName +","+question.question+",radio,"}>
                {answers}
            </React.Fragment>
        )
      } else if (question.wayOfAnswering === "Dropdown") {
          let pName = category.categoryName +","+question.question+",Dropdown,null";
          if(answerStates[pName] === undefined){
              setAnswerStates({...answerStates,[pName]: ""});
          }
        answers = question.answers.map((answer) => {
          return (
            <React.Fragment key={category.categoryName +","+question.question+",Dropdown,null"+answer.answer}>
              
                <option value={answer.answer} selected={answerStates[pName] === answer.answer}>
                  {answer.answer}
                </option>
              
            </React.Fragment>
          );
        });

        answersField = (
            <React.Fragment key={category.categoryName +","+question.question+",Dropdown,null"}>
                <select className="custom-select" name={category.categoryName +","+question.question+",Dropdown,null"} onChange={handleChange}
                id={category.categoryName +","+question.question+",Dropdown,null"}

                >
                    <option>Choose..</option>
                    {answers}
                </select>
            </React.Fragment>
        )
      }
      return(
          <div className="eachQuestion-container">
              <Form>
                  <FormGroup>
                      <Label>{question.question}</Label>
                      {answersField}
                  </FormGroup>
              </Form>
          </div>
      )
    });
    return (
      <div>
       
        {/*<h2> {category.categoryName}</h2>*/}
        
        {questions}
      </div>
    );
  });
  }
  let prev = null;
let next = null;

if(Respond.isLoading){
    next =<Button className="btn-lg ml-4 mt-3 bg-secondary"><Loading/></Button>
}
else{
  next = (start=== categories.length-1)? (<Button className="btn-lg ml-4 mt-3 bg-secondary" onClick={handleFinish}>
    
  Finish survey
  </Button>) : (<Button className="btn-lg ml-4 mt-3 bg-secondary" onClick={handleShowMore}>
Next category
</Button>)
prev = start === 0? null :(<Button className="btn-lg ml-4 mt-3 bg-light text-dark" onClick={handleShowPrev}>
Prev category
</Button>)
}
  return items ? (
    <div>
      <div>{results}</div>
      <div className="">
      {prev}
      {next}
      </div>
      
      
    </div>
  ) : (
    <div className="bg-danger col-md">No questions yet here!</div>
  );
};

function RenderQuestions(props) {
  const [questionsToDiplay] = useState(
    props.QuestionInfo
  );
  let msg = null;
  if(props.Respond.errMess !== null){
      msg =<div class="alert alert-danger" role="alert">
      {props.Respond.errMess} Not sent
    </div>
  }
  else if(props.Respond.isresponded){
        msg= <div class="alert alert-primary" role="alert">
Your survey results uploaded successful
</div>
  }
       
  return (
    <div className="">
     
        {msg}
        
      <Renderitems
        items={props.QuestionInfo}
        questionsToDiplay={questionsToDiplay} SubmitSurveyrespons={props.SubmitSurveyrespons} Respond={props.Respond} 
      />
    </div>
  );
}
export default RenderQuestions;
