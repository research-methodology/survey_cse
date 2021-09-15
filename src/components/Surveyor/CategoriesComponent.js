
import React, {useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'
import {HandleTrashCategory} from './HandleTrashComponent'
export default function CategoriesComponent(props) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);

    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const togglerModalEdit = () => setIsModalOpenEdit(!isModalOpenEdit);

    const [oldCategory, setOldCategory] = useState(null);
    const [newCategory, setNewCategory] = useState(null);
    function HandleEdit(event, category){
        event.preventDefault();

        setOldCategory(category);
        togglerModalEdit();
    }
    let handleClick=(event) =>{
        let category = event.target.id;
        props.setSelectedCategory(category);
    }
    function handleCreateCategory(event) {
        event.preventDefault ();
        let newCategory = document.getElementById('newCategoryTextField').value;
        props.addNewCategory(newCategory);
        togglerModal();
    }
  
    let categories = props.categories.map((category, index) =>{
        function HandleDelete(event){
            console.log(event.target);
            event.stopPropagation();
            HandleTrashCategory(category,props.categories);
            window.location.reload();
           }
        let btn = "";
        let [cCategory,action] =  props.showDelete.split(',');
        if(category===cCategory && action ==='showIt' && category !=='Default'){
            btn = category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark d-flex justify-content-end align-items-center mainbtn">
                    {category}
                    <div className={"btn-group ml-5"}>
                         
                        <Button onClick={(event) => HandleEdit(event, category)} className="bg-light text-dark innerbtn"><span className="fa fa-edit"></span></Button>
                        <Button onClick={event=>HandleDelete(event)} className="bg-danger innerbtn"><span className="fa fa-trash"></span></Button>
                    </div>
                   </Button>
                :<Button key={category + index} id={category} onClick={handleClick} className="w-100 d-flex justify-content-end align-items-center mainbtn">{category}
                    <div className={"btn-group ml-5"}>
                        <Button onClick={(event) => HandleEdit(event, category)} className="bg-light text-dark innerbtn"><span className="fa fa-edit"></span></Button>
                        <Button onClick={event=>HandleDelete(event)} className="bg-danger innerbtn"><span className="fa fa-trash"></span></Button>
                    </div>
                </Button>
        }
        else{
            btn = category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark categoryButton mainbtn">
                    {category}
                    <i class="fa fa-angle-double-right ml-3 "></i></Button>
                :<Button key={category + index} id={category} onClick={handleClick} className="w-100 categoryButton">{category} </Button>
        }

        return(
            <div className="m-1" id={category + ",categoryB"} onMouseEnter={props.handleEnterAndLeave} onMouseLeave={props.handleEnterAndLeave}>
                {btn}

            </div>

        )
    })
    function handleEditAnswer(event){
        event.preventDefault();

        props.editCategory(oldCategory,newCategory);
        togglerModalEdit();
    }
    return (
        <div>
            <Modal isOpen={isModalOpenEdit} toggle={togglerModalEdit}>
                <ModalHeader toggle={togglerModalEdit}>Edit category</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleEditAnswer}>
                        <FormGroup>
                            <Label htmlFor="category">oldValue</Label>
                            <Input type="text" id="oldCategoryEdit" name="editCategory" value={oldCategory} disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="category">new value</Label>
                            <Input type="text" id="editCategoryTextField" onChange={(event)=> setNewCategory(event.target.value)} value={newCategory} name="question"/>
                        </FormGroup>


                        <Button onClick={handleEditAnswer} type="button" value="edit">Edit</Button>
                    </Form>
                </ModalBody>
            </Modal>
           <Modal isOpen={isModalOpen} toggle={togglerModal}>
                <ModalHeader toggle={togglerModal}>Create new Category</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleCreateCategory}>
                        <FormGroup>
                            <Label htmlFor="category">Category</Label>
                            <Input type="text" id="newCategoryTextField" name="category"/>
                        </FormGroup>
                        
                        
                        <Button onClick={handleCreateCategory} type="button" value="create">Create</Button>
                    </Form>
                </ModalBody>
            </Modal> 
        
        <div className="mt-3">
            <div className="addItemsCards color1">
                <div>
                    <Button onClick={togglerModal} className="m-1"><span className="fa fa-plus" ></span> Create new category</Button>
                </div>
                {/*<div>*/}
                {/*    <div className="m-1">*/}
                {/*        {"Default" === props.selectedCategory ?*/}
                {/*            <Button key={"Default + index"} id={"Default"} onClick={handleClick}*/}
                {/*                    className="w-100 color1 text-dark" data-toggle="tooltip" data-placement="top" title="Selected by default">{"Default"} <i*/}
                {/*                className="fa fa-angle-double-right ml-3"></i></Button> :*/}
                {/*            <Button key={"Default + index"} id={"Default"} onClick={handleClick}*/}
                {/*                    className="w-100 color1 text-dark" data-toggle="tooltip" data-placement="top" title="Selected by default">{"Default"}</Button>}*/}

                {/*    </div>*/}
                {/*</div>*/}
                <div>
                    {categories}
                </div>

            </div>
        </div>
        </div>
    )
}
