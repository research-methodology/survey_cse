import React,{useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'
import {HandleTrashQuestions} from './HandleTrashComponent'
export default function QuestionsComponet(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);


    let handleClick = (event) =>{
        let question = event.target.id;
        props.setSelectedQuestion(question);
    }
    let questions = props.questions.map((question, index) =>{
        let btn = "";
        function HandleDelete(event){
            console.log(event.target);
            event.stopPropagation();
            HandleTrashQuestions(question,props.questions);
            window.location.reload();
           }
        let [cCategory,action] =  props.showDelete.split(',');
        if(question===cCategory && action ==='showIt'){
            btn = question===props.selectedQuestion?<Button key={question + index} id={question} onClick={handleClick} className="w-100 bg-light text-dark d-flex justify-content-end align-items-center">
                    {question}
                    <div className={"btn-group ml-5 pl-5"}>
                        <Button className="bg-light text-dark"><span className="fa fa-edit"></span></Button>
                        <Button onClick={event=>HandleDelete(event)}className="bg-danger"><span className="fa fa-trash"></span></Button>
                    </div>
                </Button>
                :<Button key={question + index} id={question} onClick={handleClick} className="w-100 d-flex justify-content-end align-items-center">{question}
                    <div className={"btn-group  ml-5 pl-5"}>
                        <Button className="bg-light text-dark"><span className="fa fa-edit"></span></Button>
                        <Button className="bg-danger"><span className="fa fa-trash"></span></Button>
                    </div>
                </Button>
        }
        else{
            btn = question===props.selectedQuestion?<Button key={question + index} id={question} onClick={handleClick} className="w-100 bg-light text-dark categoryButton">
                    {question}
                    <i class="fa fa-angle-double-right ml-3 "></i></Button>
                :<Button key={question + index} id={question} onClick={handleClick} className="w-100 categoryButton">{question} </Button>
        }
        return(
            <div className="m-1" onMouseEnter={props.handleEnterAndLeave} onMouseLeave={props.handleEnterAndLeave}>
                {btn}
            </div>
            
        )

    })

    function handleAddNewQuestion(event){
        event.preventDefault();
        let newQuestion = document.getElementById('newQuestionTextField').value;
        props.addNewQuestion(newQuestion);
        togglerModal();
    }
    return (
        <div>
            <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Create new Question</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleAddNewQuestion}>
                        <FormGroup>
                            <Label htmlFor="question">Question</Label>
                            <Input type="text" id="newQuestionTextField" name="question"/>
                        </FormGroup>
                        
                        
                        <Button onClick={handleAddNewQuestion} type="button" value="create">Create</Button>
                    </Form>
                </ModalBody>
            </Modal> 
        <div className="mt-3">
            <div className="addItemsCards color1">
                <div>
                    <Button onClick={togglerModal} className="m-1"><span className="fa fa-plus" ></span> Add new question</Button>
                </div>
                <div>
                    {questions}
                </div>

            </div>
        </div>
        </div>
    )
}
