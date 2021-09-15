import React,{useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input, Row} from 'reactstrap'
import {HandleTrashAnswer} from './HandleTrashComponent'
export default function AnswersComponet(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);


    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const togglerModalEdit = () => setIsModalOpenEdit(!isModalOpenEdit);

    const [oldAnswer, setOldAnswer] = useState(null);
    const [newAnswer, setNewAnswer] = useState(null);
    function HandleEdit(event, answer){
        event.preventDefault();

        setOldAnswer(answer);
        togglerModalEdit();
    }
    function handleCreateAnswer(event) {
        event.preventDefault();
        let newAnswer = document.getElementById('newAnswerTextField').value;
        props.addNewAnswer(newAnswer);
        togglerModal();
    }
    let answers = props.answers.map((answer, index) =>{
        let btn = "";
        function HandleDelete(event){
            console.log(event.target);
            event.stopPropagation();
            HandleTrashAnswer(answer,props.answers);
            window.location.reload();
           }
        let [cCategory,action] =  props.showDelete.split(',');
        if(answer===cCategory && action ==='showIt'){
            btn = <Button key={answer + index} id={answer} className="w-100 bg-secondary d-flex justify-content-end align-items-center">
                    {answer}
                    <div className={"btn-group ml-5"}>
                        <Button onClick={(event) => HandleEdit(event, answer)} className="bg-light text-dark"><span className="fa fa-edit"></span></Button>
                        <Button onClick={event=>HandleDelete(event)} className="bg-danger"><span className="fa fa-trash"></span></Button>
                    </div>
                </Button>

        }
        else{
            btn = <Button key={answer + index} id={answer} className="w-100 bg-secondary categoryButton">
                    {answer}
                    </Button>
        }
        return(
            <div className="m-1" onMouseEnter={props.handleEnterAndLeave} onMouseLeave={props.handleEnterAndLeave}>
                {btn}
            </div>
            
        )
    })

    function handleChange1(event){
        props.setWayOfAnsweringOnSelectedQuestion(event.target.value);
    }
    let btn="";
    if(props.wayOfAnswering==="Textfield" || !props.enableChooseWayOfAnswering){
        btn=<Button onClick={togglerModal} className="m-1" disabled ><span className="fa fa-plus" ></span> Add new answer</Button>
    }
    else{
        btn = <Button onClick={togglerModal} className="m-1" ><span className="fa fa-plus" ></span> Add new answer</Button>
    }
    let chooseWayOfAnswering =null;
    if(!props.enableChooseWayOfAnswering){
        chooseWayOfAnswering=(<select disabled onChange={handleChange1} className="col-5">
        <option value="Checkbox"> select question first </option>
        
    </select>)
    }
    else{
        chooseWayOfAnswering=(<select onChange={handleChange1} value={props.wayOfAnswering} className="col-5">
    <option value="Choose">Choose...</option>
    <option value="Checkbox"> Checkbox </option>
    <option value={"Radio"}>Radio</option>
    <option value="Dropdown">Dropdown</option>
    <option value="Textfield">Textfield</option>
</select>)
    }

    function handleEditAnswer(event){
        event.preventDefault();

        props.editAnswer(oldAnswer,newAnswer);
        togglerModalEdit();
    }
    return (
        <div>
            <Modal isOpen={isModalOpenEdit} toggle={togglerModalEdit}>
                <ModalHeader toggle={togglerModalEdit}>Edit Answer</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleEditAnswer}>
                        <FormGroup>
                            <Label htmlFor="answer">oldValue</Label>
                            <Input type="text" id="oldAnswerEdit" name="editAnswer" value={oldAnswer} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="answer">new value</Label>
                            <Input type="text" id="editAnswerTextField" onChange={(event)=> setNewAnswer(event.target.value)} value={newAnswer} name="answer"/>
                        </FormGroup>


                        <Button onClick={handleEditAnswer} type="button" value="edit">Edit</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Add onather Answer</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleCreateAnswer} className="">
                        <FormGroup>
                            <Label htmlFor="Answer">Answer</Label>
                            <Input type="text" id="newAnswerTextField" name="Answer"/>
                        </FormGroup>
                        
                        
                        <Button onClick={handleCreateAnswer} type="button" value="create">Create</Button>
                    </Form>
                </ModalBody>
            </Modal> 
        
        <div className="mt-3  pr-3">
            <div className="addItemsCards container-fluid color1">
                <div className="row">
                <Form className="col-12 mb-3 mt-3" >
              <Row>
                <Label className="col-7 ">Choose way of answering</Label>
                {chooseWayOfAnswering}
              </Row>
            </Form>
                </div>
                <div>
                    {
                        btn
                       }
                
                </div>
                <div>
                    {answers}
                </div>

            </div>
        </div>
        </div>
    )
}
