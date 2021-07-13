import { Component } from 'react';
import {  Jumbotron} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
    
        
      }
      

    render() {
        return(
            <div>
             <div className="container mt-3">
                 <Jumbotron >
                    <div className="">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Serveying Appliction</h1>
                                <p>We bring you all the required needs for conducting research and we also get ypu in touch with people you want to be your respondents!</p>
                            </div>

                        </div>
                     
                    </div>
                    <div className="d-flex align-self-end justify-content-center mt-5">   <button className="btn bg-warning"> Start Now</button></div>
                </Jumbotron></div>
                
            </div>
        );
    }
}
export default Header;