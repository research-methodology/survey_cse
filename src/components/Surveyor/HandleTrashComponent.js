import React from "react"
const HandleTrash=(itemTodelete,itemList)=>{
   
    for( var i = 0; i < itemList.length; i++){ 
        console.log(itemList[i]);                         
       if ( itemList[i] === itemTodelete) { 
        delete itemList[i];
        itemList.splice(i, 1); 
        i--; 
      
        alert(itemTodelete+' Successfully deleted!');
       }
    }

}
export const HandleTrashQuestions=(itemTodelete,itemList)=>{
    HandleTrash(itemTodelete,itemList);
    var surveyInfo=localStorage.getItem('surveyInfo');
    //console.log('Type is: '+typeof surveyInfo);
    var mySurveyObject=JSON.parse(surveyInfo);
    for (const categories in mySurveyObject.surveys) {
        for (const category in mySurveyObject.surveys[categories]){
            console.log(`Questions: ${JSON.stringify(mySurveyObject.surveys[categories][category])}`)
            for (const question in mySurveyObject.surveys[categories][category]){
                console.log(`Questions are: ${question}`);
                for(const answers in mySurveyObject.surveys[categories][category][question] ){
                    for(const answer in mySurveyObject.surveys[categories][category][question][answers])
                    console.log('answers: '+answer);
                }
                if(question===itemTodelete){
                    delete  mySurveyObject.surveys[categories][category][question];
                    console.log(`Questions are: ${question}`);
                    console.log(`Questions: ${JSON.stringify(mySurveyObject.surveys[categories][category])}`)
                }

            }
        }
    
    }
    localStorage.removeItem('surveyInfo');
    localStorage.setItem('surveyInfo',JSON.stringify(mySurveyObject));


}
export const HandleTrashAnswer=(itemTodelete,itemList)=>{
    HandleTrash(itemTodelete,itemList);
    var surveyInfo=localStorage.getItem('surveyInfo');
    //console.log('Type is: '+typeof surveyInfo);
    var mySurveyObject=JSON.parse(surveyInfo);
    for (const categories in mySurveyObject.surveys) {
        for (const category in mySurveyObject.surveys[categories]){
            console.log(`Questions: ${JSON.stringify(mySurveyObject.surveys[categories][category])}`)
            for (const question in mySurveyObject.surveys[categories][category]){
                console.log(`Questions are: ${question}`);
             for(const answers in mySurveyObject.surveys[categories][category][question] ){
                for(const answer in mySurveyObject.surveys[categories][category][question][answers]){
                console.log('answers: '+answer);
                if(answer===itemTodelete){
                    delete mySurveyObject.surveys[categories][category][question][answers][answer]
                }
            }
             }
            }
        }
    
    }
    localStorage.removeItem('surveyInfo');
    localStorage.setItem('surveyInfo',JSON.stringify(mySurveyObject));


}
export const HandleTrashCategory=(itemTodelete,itemList=[])=>{
   var surveyInfo=localStorage.getItem('surveyInfo');
   //console.log('Type is: '+typeof surveyInfo);
   var mySurveyObject=JSON.parse(surveyInfo);
   //console.log('Type is now: '+typeof mySurveyObject);
   HandleTrash(itemTodelete,itemList);
 
            for (const key in mySurveyObject.surveys) {

                console.log(`${key}: ${mySurveyObject.surveys[key]}`);
                if(key===itemTodelete)
                   delete mySurveyObject.surveys[key];
                   console.log(`${key}: ${mySurveyObject.surveys[key]}`);
            }
     
       

       localStorage.removeItem('surveyInfo');
       localStorage.setItem('surveyInfo',JSON.stringify(mySurveyObject));

        console.log('categories are: ',JSON.stringify(mySurveyObject));
    }

  
   

