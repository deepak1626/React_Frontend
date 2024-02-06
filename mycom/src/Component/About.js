import React from "react";
import '../App.css'
import Header from "./Header";
import img from '../Image/p2.avif'
import img1 from '../Image/pr1.png'
import img2 from '../Image/pr2.png'
import img3 from '../Image/pr3.png'
import img4 from '../Image/pr4.png'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const About = () => {
    return (
        <>
        <Header/>
        <div  className="container-fluid">
            <div className="row about-row">
                <div  className="col-md-6">
                    <h1 className="abouth1">Trend Fashion <br></br>Collection</h1>
                    <p className="about-text">"Lorem ipsum is placeholder text commonly used in the graphic,<br></br>
                       print, and publishing industries for previewing layouts <br></br>
                       and visual mockups"..</p>
                       <button  className="btn btn-primary btn-lg  Abbtn">Shop Now</button>
                    </div>
                <div className="col-md-6">
                {<img src={img} alt='' height="auto" width="100%"></img>}
                </div>

            </div>
            </div>

           <div className="back">
           <h2 className="hh1">Why you picking us..</h2>
           <p>Lorem ipsum is placeholder text commonly used in <br></br>
              the graphic print, and publishing industries <br></br>
               for previewing layouts and visual.</p>
               <div className="row mt-5">
               <div className="col-md-3">{<img src={img1} alt='' height="150px" width="150px"></img>}
               <h5 className="abh5">Free shipping</h5>
               <p>In publishing and graphic design,</p>
               </div> 
               <div className="col-md-3">{<img src={img2} alt='' height="150px" width="150px"></img>}
               <h5 className="abh5">Spport 24/7</h5>
               <p>In publishing and graphic design,</p>
               </div>   
               <div className="col-md-3">{<img src={img3} alt='' height="150px" width="150px"></img>}
               <h5 className="abh5">Money Return</h5>
               <p>In publishing and graphic design,</p>
               </div> 
               <div className="col-md-3">{<img src={img4} alt='' height="150px" width="150px"></img>}
               <h5 className="abh5">Order discount</h5>
               <p>In publishing and graphic design,</p>
               </div> 

               </div>
          
            

        </div>
        <Footer/>
        </>

    )
}
export default About;