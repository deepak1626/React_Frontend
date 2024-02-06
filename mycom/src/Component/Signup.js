import React from "react";
import '../App.css'
import Header from "./Header";
import imglog from '../Image/n.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";


const Signup = () => {
    return (
        <>
            <Header />

            <div className="container m-5 mx-auto d-block" >
                <div className="row m-0">
                    <div className="col-md-6">
                    <img src={imglog} alt='' className="img-fuild" width="100%" height="100%"></img>
                    </div>

                    <div className="col-md-6">
                    <form className="frm-s">
                    <div class="form-group p-3">
                        <h4 className="ml-5">---Sign Up---</h4>
                        <label className="labletext">Full Name</label>
                        <input type="text1" class="form-control" placeholder="Name...." ></input><br/>
                        <label className="labletext">Email</label>
                        <input type="text1" class="form-control" placeholder="Email...."></input><br/>
                        <label className="labletext">Username</label>
                        <input type="text1" class="form-control" placeholder="Username...."></input><br/>
                        <label className="labletext">Password</label>
                        <input type="text1" class="form-control" placeholder="*******"></input><br/>
                        <label className="labletext">Repeat Password</label>
                        <input type="password" class="form-control" placeholder="*******"></input><br/>
                        <input type="checkbox"></input>
                        <label className="labletext ms-2">I agree to the term of user</label><br></br>

                       
                        <button type="submit" class="btn btn-center mb-0 btn-info mx-auto d-block text-white ">Sign Up</button><br/><br/>

                        
                        </div>
                     </form>
 
                    </div>
                </div>

            </div>
                   
        </>

    )
}
export default Signup;