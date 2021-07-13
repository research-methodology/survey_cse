import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
var Renderitems = ({ items, questionsToDiplay }) => {
  const { category } = items || [];
  let answers = null;
  const [count, setCount] = useState(1);
  const [categories, setCategories] = useState(category);

  // var categorycount=categories[count-1];
  // console.log({...categorycount});
  let handleShowMore = () => {
    return [setCount(count >= categories.length ? count : count + 1)];
  };
  // setCategories(categories.shift())
  const results = categories.slice(0, count).map((category) => {
    var questions = category.questions.map((question) => {
        let answersField = "";
      if (question.wayofanswering === "TextField") {
        answersField = (
          <div>
            
            <br />
            <div>
              
                  <Input type="textarea" name="answerText" />
                
            </div>
          </div>
        );
      } else if (question.wayofanswering === "Checkbox") {
          
        answers = question.answers.map((answer, index) => {
          return (
            <React.Fragment key={answer + index + "daefd"}>
              
              
              
                <FormGroup check>
                <input
                      type="checkbox"
                      onChange={(e) => console.log(e.target.checked)}
                      name={answer.id}
                    />
                  <Label>{answer.answer}</Label>
                  
                    
                    
                
                </FormGroup>
             
            </React.Fragment>
          );
        });

        answersField =(
            <React.Fragment>  
                {answers}
            </React.Fragment>
            
          )


      } else if (question.wayofanswering === "Radio") {
        answers = question.answers.map((answer) => {
          return (
            <React.Fragment>
              
                <FormGroup check>
                  <Input type="radio" value={answer.answer} name={question.question} />
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
      } else if (question.wayofanswering === "Dropdown") {
        answers = question.answers.map((answer) => {
          return (
            <React.Fragment>
              
                <option value={answer.answer} name={answer.id}>
                  {answer.answer}
                </option>
              
            </React.Fragment>
          );
        });

        answersField = (
            <React.Fragment>
                <select>
                {answers}
                </select>
            </React.Fragment>
        )
      }
      return(
          <div>
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
  return items ? (
    <div>
      {results}

      <Button className="btn-lg ml-4 mt-3 bg-warning" onClick={handleShowMore}>
        Next category
      </Button>
      
    </div>
  ) : (
    <div className="bg-danger col-md">No questions yet here!</div>
  );
};

function RenderQuestions(props) {
  const [questionsToDiplay, setQuestionsToDisplay] = useState(
    props.Questioninfo["categories"][0]
  );
  return (
    <div className="">
      <Renderitems
        items={props.Questioninfo}
        questionsToDiplay={questionsToDiplay}
      />
    </div>
  );
}
export default RenderQuestions;
