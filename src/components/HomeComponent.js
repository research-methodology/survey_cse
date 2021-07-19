import { Component } from 'react';
import {  Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    
        
      }
      

    render() {
        return(
            <div className="text-center">
             <div className="container mt-3">
                 <Jumbotron className="colorAndB1" >
                    <div className="">
                        <div className="row row-header">
                            <div className="col-12">
                                <h1>Serveying Appliction</h1>
                                <p>We bring you all the required needs for conducting research and we also get ypu in touch with people you want to be your respondents!</p>
                            </div>

                        </div>
                     
                    </div>
                    <div className="d-flex align-self-end justify-content-center mt-5"><button className="btn color2"> <NavLink className="nav-link" to='/signup'>Start Now</NavLink></button></div>
                </Jumbotron></div>
                
            </div>
        );
    }
}
export default Home;