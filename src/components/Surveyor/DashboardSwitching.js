import {Route, Switch} from "react-router-dom";
import SurveyPage from "./SurveyPage";
import React from "react";

let DashboardSwitching = ()  =>{
    return(
        <div>
            <Switch>
                <Route path="/SurveyResult/:index" component={() => <SurveyPage Surveys={this.props.Surveys} /> } />
            </Switch>
        </div>
    )
}