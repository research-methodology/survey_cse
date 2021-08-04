import React, {useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import {Row, Col, Table} from "reactstrap";
let numberOfItem = 12;
export default function SurveyDetails(props) {

 
    const [productToDisplay] = useState(props.surveyResult["survey"]);

    //let questionsAsked = Object.keys(productToDisplay[0]);

    let titles = [];
    titles.push(<th>id</th>);
    props.questionsAsked.forEach(question =>{
        titles.push(<th>{question}</th>);
    })
    let initial_values = (start = 0, endIndex = numberOfItem, indexing = 0) => {
        if (productToDisplay === null || productToDisplay === undefined) {
            console.log("SurveyResult is undefined or null");
            return [];
        }

        
        let opElement1New = productToDisplay.slice(start, endIndex);
        let menu1New = opElement1New.map((oneSurvey, index) => {
            let data = [];
            oneSurvey.forEach(eachQuestion =>{
                let anss = eachQuestion.answer.map(each => (<spa>{each},</spa>));
                data.push(<td>{anss}</td>)
            })
            // props.questionsAsked.forEach(question =>{
            //     data.push(<td>{oneSurvey[question]}</td>);
            // })
            return (
                <tr key={oneSurvey +index + "oneSurvey"}>
                    <th> {indexing === 0 ? (index + 1) : (++indexing)}</th>
                    {data}
                </tr>
            )
        });


        const arrNew = [...menu1New];
        return arrNew;
    }


    const [activeTab, setActiveTab] = useState('1');
    const [hasMoreS, setHasMoreS] = useState(true);
    const [itemToFetch, setItemToFetch] = useState(numberOfItem);
    const [itemToStartOn, setItemToStartOn] = useState(numberOfItem);
    const [items2, setItems2] = useState(initial_values());

    let funMenuNew = (dailyUsange = productToDisplay, reset = false) => {
        let start;
        if (!reset) {
            start = itemToStartOn;
        } else {
            start = 0;
        }

        let last = start + itemToFetch;


        let lastIndex = (dailyUsange.length < last) ? dailyUsange.length : last;
        if (dailyUsange.length >= lastIndex) {
            let indexing = start;
            
            setItemToStartOn(lastIndex);
            let menuNew = initial_values(start, lastIndex, indexing);
            if (dailyUsange.length === lastIndex) {
                // this.setState({hasMoreS: false});
                setHasMoreS(false);
            }
            return menuNew;
        } else {
            // this.setState({hasMores:false});
            setHasMoreS(false);
            return [];

        }

    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    
    let fetchMoreData = () => {

        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {

            let item2 = [...items2, ...funMenuNew()];

            setItems2(item2);
        }, 1500);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>


            <Row>

                <Col sm="12">
                    <div className="d-flex justify-content-center bg-secondary mt-4">
                        <h3>{props.surveyResult.surveyTitle} </h3>
                    </div>
                            <div>

                                <div id="scrollableDivInDailyResourcesReports"
                                     className="card fixedDiv square scrollbar-cyan bordered-cyan styling1">
                                    <div className="card-body">
                                        <div className="mt-2">
                                            <InfiniteScroll
                                                scrollableTarget={"scrollableDivInDailyResourcesReports"}
                                                dataLength={items2.length}
                                                next={fetchMoreData}
                                                hasMore={hasMoreS}
                                                loader={<span
                                                    className="fa fa-lg fa-spinner text-warning"><b>Loading</b></span>}
                                                endMessage={
                                                    <p> no more results </p>
                                                }

                                            >
                                                <div className="">
                                                    <Table className="table-striped">
                                                        <thead>
                                                        <tr>
                                                            {titles}
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {

                                                            items2.map(
                                                                (item, i) => {
                                                                    return (
                                                                        item

                                                                    )
                                                                }
                                                            )
                                                        }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </InfiniteScroll>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                    

                </Col>

            </Row>

        </div>
    );





















    

    
}
