import React,{useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'

export default function QuestionsComponet(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);


    let handleClick = (event) =>{
        let question = event.target.id;
        props.setSelectedQuestion(question);
    }
    let questions = props.questions.map((question, index) =>{
        return(
            <div className="m-1">
                {question === props.selectedQuestion?<Button key={question + index} id={question} onClick={handleClick} className="w-100 bg-light text-dark">{question} <i class="fa fa-angle-double-right ml-3"></i></Button>:<Button key={question + index} id={question} onClick={handleClick} className="w-100">{question}</Button>}
                
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
