import React from "react";
import Header from "./Header";
import { Link, NavLink } from "react-router-dom";
import { IoMdMailUnread } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import imglog from '../Image/lgn.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const Login = () => {
    return (
        <>
        <Header/>
        <section className="container">
            <div className="row">
            
            <div className="col-md-6">
            <form className="fr">
                   
                   <div class="form-group">
                   <h1 className="loginh">Login</h1>
                   </div>
                   <div id="icoid" class="form-group">
                   <h4 className="ico"> <IoMdMailUnread /> </h4>
                   <input type="email1" class="form-control" id="email" placeholder="Enter your email" name="email"></input>
                   </div>
                   <div id="icoid" class="form-group"> 
                     <h4 className="ico"> <FaLock /></h4>
                    <input type="password1" class="form-control" id="pwd" placeholder="Enter your password" name="pswd"></input></div>
 
                    <div class="form-group">
                   <h6 className="head6log"> Forgot password ?</h6>
                  <input type="submit" class=" btn btn-primary form-control" value="Login"></input>
                  <p className="text-center m-3">Dont have an account ?<NavLink to="/Signup" id="nlv">sign up</NavLink></p>
                  
                  </div> </form>

            </div>
            <div className="col-md-6 p-0">
            <img src={imglog} alt='' className="img-fuild imgi" width="100%" height="420px"></img>
            </div>
            </div>
        </section>
        <Footer/>
        </>

    )
}
export default Login;


{/* <section className="ss">
        <div className="container">
            <div className="row bg-white">
                <div className="col-md-6">
                <form className="fr">
                   
                <div class="form-group">
                <h4>Login</h4>
                  <p>Doesn't have an account yet  <NavLink to="#" id="nlv">sign up</NavLink></p>
            
               </div>
            
                <div class="form-group">
                
                   <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
               </div>

               <div class="form-group">
                 <label for="pwd">Password:</label>
                 <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
               </div>

               
               <div class="form-group">
               <input type="submit" class="form-control btn btn-info" value="Login"></input>
               
               </div>

               <div class="form-group">
               <div className="row m-3">
                <div className="col-md-6">
                   <h4 className="text-info text-center"><span>Google</span></h4>

                </div>
                <div className="col-md-6">
               <h4 className="text-info text-center"><span>Facebook</span></h4>
                </div>
               </div>
    
               
               </div>

               
               
               
            
                </form>
                </div>
                <div className="col-md-6">
                {<img src={log} className="img-fuild" alt='' height="450px" width="100%"></img>}
                </div>

            </div>

        </div>
        </section> */}