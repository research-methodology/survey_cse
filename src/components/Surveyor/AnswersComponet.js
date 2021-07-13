import React,{useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input, Row} from 'reactstrap'

export default function AnswersComponet(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);
    

    function handleCreateAnswer(event) {
        event.preventDefault();
        let newAnswer = document.getElementById('newAnswerTextField').value;
        props.addNewAnswer(newAnswer);
        togglerModal();
    }
    let answers = props.answers.map((answer) =>{
        return(
            <div className="m-1">
                <Button className="w-100">{answer}</Button>
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


    return (
        <div>
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
            <div className="addItemsCards container-fluid " style={{background:"#333", color:'white'}}>
                <div className="row">
                <Form className="col-12 mb-3 mt-3" style={{background: "#334"}}> 
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
