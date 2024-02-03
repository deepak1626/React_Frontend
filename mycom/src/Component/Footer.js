import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer =() =>{
    return(
        <>

     <section className="container-fluid">
        <div className="row footer1 ">
            <div className="col-md-3">
                <h4 className="borderb">Company</h4> <hr/>
                <ol>
                    <li className="flist"><NavLink id="fnav" to="/">About us</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Our Servises</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Privacy & Policy</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Affiliate Program</NavLink></li>
                   
                </ol>
            </div>
            <div className="col-md-3">
                <h4 className="borderb">Get Help</h4> <hr/>
                <ol>
                    <li className="flist"><NavLink id="fnav" to="/">FQA</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Shipping</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Returns</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Order Status</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Payment option</NavLink></li>
                   
                </ol>
            </div>
            <div className="col-md-3">
                <h4 className="borderb">Online shop</h4> <hr/>
                <ol>
                    <li className="flist"><NavLink id="fnav" to="/">Watch</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Bag</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Shoes</NavLink></li>
                    <li className="flist"><NavLink id="fnav" to="/">Dress</NavLink></li>
                   
                </ol>
            </div>
            <div className="col-md-3 ">
                <h4 className="borderb">Follow Us</h4> <hr/>
                <div className="mt-5">
                <NavLink id="fnavi" to="/">  <FaFacebookF /></NavLink>
                    <NavLink id="fnavi" to="/"><FaTwitter /></NavLink>
                    <NavLink id="fnavi" to="/"> <FaInstagram /></NavLink>
                    <NavLink id="fnavi" to="/"><FaLinkedinIn /></NavLink>
                    </div>
                
                    
                
            </div>

            <hr className="mt-3"></hr>
        <h6 className="text-center m-3">Designed By <span><NavLink to=""  className="text-warning">Deepak Rathod</NavLink> </span></h6>

        </div>
       
     </section>
     
        
        </>

    )

}
export default Footer;