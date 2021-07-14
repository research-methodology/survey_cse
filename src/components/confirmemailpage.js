import { NavLink } from 'react-router-dom';
import React from 'react'
export default function confirmemail(){
return(
<div className="container">
    <div className="d-flex justify-content-center">
       <p className="">     
       Thank you for creating account with us please go to your email and make confirmation  <a className="btn btn-social-icon btn-google" href="http://gmail.com/"><i className="fa fa-envelope fa-sm"></i></a> to login please click the link here 
                                          <a className="bg-secondary" href='/login'><span className="fa fa-sign-in fa-sm"></span> Login</a>
                                     </p>
    </div>
</div>
);
}