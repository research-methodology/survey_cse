
import React, {useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'
export default function CategoriesComponent(props) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);


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

        return(
            <div className="m-1">
                {category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark">{category} <i class="fa fa-angle-double-right ml-3"></i></Button>:<Button key={category + index} id={category} onClick={handleClick} className="w-100">{category}</Button>}
                
            </div>
            
        )
    })
    return (
        <div>
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
                <div>
                    {categories}
                </div>

            </div>
        </div>
        </div>
    )
}
