import React from "react";
import Header from "./Header";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const Contact = () => {
    return (
        <>
        <Header/>

        <section className="sss">
            <div className="container">
                <div className="row">
                    <div id="rw" className="col-md-6">
                        <h1 className="let">Let's chat</h1>
                        
                        <p className="text-center text-white m-5">free feel send to a message in the contact form</p>

                    </div>
                    <div className="col-md-6 contact">
                       <h2 className="let1">Contact</h2>
                    <form>
                        
                       <input type="text" class="form-control" placeholder="Name*" id="name" name="name"></input><br/>
                       <input type="emaill" class="form-control" placeholder="Email*" id="email" name="email"></input><br/>
                       <input type="text" class="form-control" placeholder="Company*" id="text" name="text"></input><br/>
                       <input type="text" class="form-control" placeholder="Phone*" id="text" name="text"></input><br/>
                       <textarea class="form-control"  placeholder="Message*" rows="5" id="comment" name="text"></textarea><br/>
                       <button type="submit" class="btn btn-primary ">Submit</button><br/><br/>
                    </form>

                      </div>

                </div>

            </div>
        </section>
        <Footer/>
        </>

    )
}
export default Contact;