import React from "react"
const HandleTrash=(itemTodelete,itemList=[])=>{
   var surveyInfo=localStorage.getItem('surveyInfo');
   //console.log('Type is: '+typeof surveyInfo);
   var mySurveyObject=JSON.parse(surveyInfo);
   //console.log('Type is now: '+typeof mySurveyObject);
    for( var i = 0; i < itemList.length; i++){ 
         console.log(itemList[i]);                         
        if ( itemList[i] === itemTodelete) { 

            for (const key in mySurveyObject.surveys) {

                console.log(`${key}: ${mySurveyObject.surveys[key]}`);
                if(key===itemTodelete)
                   delete mySurveyObject.surveys[key];
                   console.log(`${key}: ${mySurveyObject.surveys[key]}`);
            }
            delete itemList[i];
            itemList.splice(i, 1); 
            i--; 
          
            alert(itemTodelete+' Successfully deleted!');
            //console.log(itemList[i]); 
            
        }

       localStorage.removeItem('surveyInfo');
       localStorage.setItem('surveyInfo',JSON.stringify(mySurveyObject));

        console.log('categories are: ',JSON.stringify(mySurveyObject));
    }

    console.log('after delete '+mySurveyObject.surveys)
   
}
export default HandleTrash;