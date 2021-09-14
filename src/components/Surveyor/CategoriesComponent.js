
import React, {useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'
import HandleTrash from './HandleTrashComponent'
export default function CategoriesComponent(props) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () => setIsModalOpen(!isModalOpen);
    //let addClass = (event) =>{
        // let id = event.target.id;
        // //let element = document.querySelector("." + id);
        // let element = document.getElementsByClassName(id)[0];
        // element.classList.remove("hideIt");

    //}
    //let removeClass = (event) =>{
        // let id = event.target.id;
        // //let element = document.querySelector("." + id);
        // let element = document.getElementsByClassName(id)[0];
        // element.classList.add("hideIt");
    //}

    // let element = null;
    //
    // if(document.readyState === "complete") {
    //     // Fully loaded!
    //     element = document.querySelector(".categoryButton");
    //
    //     element.addEventListener("mouseover", event => {
    //         console.log("Mouse in");
    //         element.classList.add("showDeleteAndEdit");
    //     });
    //
    //     element.addEventListener("mouseout", event => {
    //         console.log("Mouse out");
    //         element.classList.remove("showDeleteAndEdit");
    //     });
    // }
    // else if(document.readyState === "interactive") {
    //     // DOM ready! Images, frames, and other subresources are still downloading.
    // }
    // else {
    //     // Loading still in progress.
    //     // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.
    //
    //     window.addEventListener("DOMContentLoaded", () => {
    //         // DOM ready! Images, frames, and other subresources are still downloading.
    //     });
    //
    //     window.addEventListener("load", () => {
    //         // Fully loaded!
    //     });
    // }
    //

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
        let btn = "";
        let [cCategory,action] =  props.showDelete.split(',');
        if(category===cCategory && action ==='showIt' && category !=='Default'){
            btn = category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark d-flex justify-content-end align-items-center">
                    {category}
                    <div className={"btn-group ml-5 pl-5"}>
                        <Button className="bg-light text-dark"><span className="fa fa-edit"></span></Button>
                        <Button onClick={HandleTrash(category,props.categories)} className="bg-danger"><span className="fa fa-trash"></span></Button>
                    </div>
                   </Button>
                :<Button key={category + index} id={category} onClick={handleClick} className="w-100 d-flex justify-content-end align-items-center">{category}
                    <div className={"btn-group  ml-5 pl-5"}>
                        <Button className="bg-light text-dark"><span className="fa fa-edit"></span></Button>
                        <Button className="bg-danger"><span className="fa fa-trash"></span></Button>
                    </div>
                </Button>
        }
        else{
            btn = category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark categoryButton">
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
