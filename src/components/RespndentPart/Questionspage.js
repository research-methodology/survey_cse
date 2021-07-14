import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
var Renderitems = ({ items }) => {
  const categories  = items['categories'];
  let answers = null;
  const [start, setStart] = useState(0);
  const [output,setOutput] = useState({});
  // var categorycount=categories[count-1];
  // console.log({...categorycount});
  let handleFinish = () =>{

    alert(JSON.stringify(output));
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
    let prevOutput = output;
    prevOutput[question]= {...prevOutput[question],
      category,
      question
    };
    
    if(prevOutput[question]["answer"] === undefined){

      prevOutput[question]["answer"] = [];
    }
    if(type === 'Checkbox'){
      
      let checked = event.target.checked;
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
      if (question.wayOfAnswering === "TextField") {
        answersField = (
                  <Input onChange={handleChange} type="textarea" className="form-control" name={category.categoryName +","+question.question+",TextFeld,null"} />
        );
      } else if (question.wayOfAnswering === "Checkbox") {
          
        answers = question.answers.map((answer, index) => {
          return (
            <React.Fragment key={answer + index + "daefd"}>
              
              
              
                <FormGroup check>
                <input
                      type="checkbox"
                      onChange={handleChange}
                      name={category.categoryName +","+question.question+",Checkbox," + answer.answer}
                      value={answer.answer}
                      className="form-check-input"
                      id={answer.answer + "ocia"}
                    />
                  <Label class="form-check-label" for={answer.answer + "ocia"}>{answer.answer}</Label>
                  
                    
                    
                
                </FormGroup>
             
            </React.Fragment>
          );
        });

        answersField =(
            <React.Fragment>  
                {answers}
            </React.Fragment>
            
          )


      } else if (question.wayOfAnswering === "Radio") {
        answers = question.answers.map((answer) => {
          return (
            <React.Fragment>
              
                <FormGroup check>
                  <Input onChange={handleChange} type="radio" value={answer.answer} name={category.categoryName +","+question.question+",Radio,null"} />
                  <Label>{answer.answer}</Label>
                </FormGroup>
              
            </React.Fragment>
          );
        });

        answersField = (
            <React.Fragment>
                {answers}
            </React.Fragment>
        )
      } else if (question.wayOfAnswering === "Dropdown") {
        answers = question.answers.map((answer) => {
          return (
            <React.Fragment>
              
                <option value={answer.answer}>
                  {answer.answer}
                </option>
              
            </React.Fragment>
          );
        });

        answersField = (
            <React.Fragment>
                <select className="custom-select" name={category.categoryName +","+question.question+",Dropdown,null"} onChange={handleChange}>
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
       
        <h2> {category.categoryName}</h2>
        
        {questions}
      </div>
    );
  });
  }
  
  let prev = start === 0? null :(<Button className="btn-lg ml-4 mt-3 bg-light text-dark" onClick={handleShowPrev}>
  Prev category
</Button>)
let next = (start=== categories.length-1)? (<Button className="btn-lg ml-4 mt-3 bg-secondary" onClick={handleFinish}>
Finish survey
</Button>) : (<Button className="btn-lg ml-4 mt-3 bg-secondary" onClick={handleShowMore}>
Next category
</Button>)
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
  const [questionsToDiplay, setQuestionsToDisplay] = useState(
    props.QuestionInfo["categories"][0]
  );
  return (
    <div className="">
      <Renderitems
        items={props.QuestionInfo}
        questionsToDiplay={questionsToDiplay}
      />
    </div>
  );
}
export default RenderQuestions;
