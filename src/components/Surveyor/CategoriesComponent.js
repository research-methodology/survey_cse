
import React, {useState} from 'react'
import { Button, Modal, ModalBody,ModalHeader ,Form, FormGroup,Label, Input} from 'reactstrap'
import {HandleTrashCategory} from './HandleTrashComponent'
export default function CategoriesComponent(props) {
    
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const togglerEditModal = () => {
       
        setIsEditModalOpen(!isEditModalOpen);
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const togglerModal = () =>setIsModalOpen(!isModalOpen);
    
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
  var category1=localStorage.getItem('category')||'';
  const handleEdit=()=>{
      
    var newValue='new category';
    if(document.getElementById('editedCategory')!==null){
        newValue=document.getElementById('editedCategory').value;
        console.log('now the category is ',newValue);
    }
    else{
        console.log('it is not getting it');
    }
   
    console.log(props.categories);
    
   for( var i = 0; i < props.categories.length; i++){ 
       console.log(props.categories[i]);                         
      if (props.categories[i] === category1) { 
       props.categories[i]=newValue;
       console.log('new value:',props.categories[i]);
      }
   }
   var surveyInfo=localStorage.getItem('surveyInfo');
   //console.log('Type is: '+typeof surveyInfo);
   var mySurveyObject=JSON.parse(surveyInfo);
   for (var key in mySurveyObject.surveys) {
        
      
      var previouskey='';
      var currentvalue=mySurveyObject.surveys[key];
       if(key===category1){
           //console.log('Found key ',key);
          previouskey=key; 
       key=newValue;
       mySurveyObject.surveys[newValue]=currentvalue;
       console.log(`${key}: ${mySurveyObject.surveys[key]}`);
       console.log(`got value: ${mySurveyObject.surveys[newValue]}`)
        window.location.reload();
        localStorage.removeItem('category');
       }
       if(previouskey!==''){
           console.log(`previous key and value: \n ${mySurveyObject.surveys[previouskey]}`)
           delete mySurveyObject.surveys[previouskey];

       }
      


           
         // console.log(`${key}: ${mySurveyObject.surveys[key]}`);
   }
localStorage.removeItem('surveyInfo');
localStorage.setItem('surveyInfo',JSON.stringify(mySurveyObject));


   togglerEditModal();
 
}

    let categories = props.categories.map((category, index) =>{
        //category1=category;
        function HandleDelete(event){
            console.log(event.target);
            event.stopPropagation();
            HandleTrashCategory(category,props.categories);
            window.location.reload();
           }
        function EditCategory(event){
            localStorage.setItem('category',category);
            event.stopPropagation();
            togglerEditModal();
            
        }
          
            
        let btn = "";
        let [cCategory,action] =  props.showDelete.split(',');
        if(category===cCategory && action ==='showIt' && category !=='Default'){
           
            //console.log('chosen category ',category1);
            btn = category===props.selectedCategory?<Button key={category + index} id={category} onClick={handleClick} className="w-100 bg-light text-dark d-flex justify-content-end align-items-center">
                    {category}
                    <div className={"btn-group ml-5 pl-5"}>
                         
                        <Button onClick={event=>EditCategory(event)} className="bg-light text-dark "><span className="fa fa-edit"></span></Button>
                     
                        <Button onClick={event=>HandleDelete(event)} className="bg-danger "><span className="fa fa-trash"></span></Button>
                    </div>
                   </Button>
                :<Button key={category + index} id={category} onClick={handleClick} className="w-100 d-flex justify-content-end align-items-center">{category}
                    <div className={"btn-group  ml-5 pl-5"}>
                        <Button className="bg-light text-dark "><span className="fa fa-edit"></span></Button>
                        <Button className="bg-danger "><span className="fa fa-trash"></span></Button>
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
console.log('Currently category: ',category1);
   
    return (
        <div> {isEditModalOpen?
               <div>
                   <Modal isOpen={isEditModalOpen} toggle={togglerEditModal}>
                        <ModalHeader toggle={togglerEditModal}>Edit Category</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={handleEdit}>
                                <FormGroup>
                                    <Label htmlFor="category">Category</Label>
                                    <Input type="text" id="editedCategory" name="editedcategory"/>
                                </FormGroup>
                                <Button onClick={handleEdit} type="button" value="Edit">Save</Button>
                            </Form>
                        </ModalBody>
                    </Modal> 
                    </div>
                    
                    :null
                    
}
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
