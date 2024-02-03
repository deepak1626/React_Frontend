import React from "react";
import '../App.css'
import Header from "./Header";
import img from '../Image/pd.avif'
import img1 from '../Image/im1.jpg'
import img2 from '../Image/im2.jpg'
import img3 from '../Image/im3.jpg'
import img4 from '../Image/cd1.jpg'
import img5 from '../Image/cd2.jpg'
import img6 from '../Image/cd3.jpg'
import img7 from '../Image/md1.jpg'
import img8 from '../Image/md2.jpg'
import img9 from '../Image/md1.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Footer from "./Footer";

const Product = () => {
    return (
        <>
        <Header/>


        <div  className="container-fluid">
            <div  id="ddd" className="row">
                <div  className="col-md-6">
                    <h1 className="abouth1">Stylish & Dashing</h1>
                    <p className="about-text">"Lorem ipsum is placeholder commonly used in the graphic,<br></br>
                       print, and publishing industries for layouts <br></br></p>
                       <button id="bt" className="btn btn-primary btn-lg m-5">Shop Now</button>
                    </div>
                <div className="col-md-6">
                {<img src={img} alt='' height="auto" width="100%"></img>}
                </div>

            </div>

            <div className="row m-5">
                <div className="col-md-4">
                    {<img className="img-thumbnail" src={img1} alt='' height="auto" width="100%"></img>}</div>
                <div className="col-md-4">
                    {<img className="img-thumbnail" src={img2} alt='' height="auto" width="100%"></img>}</div>
                <div className="col-md-4">
                    {<img className="img-thumbnail" src={img3} alt='' height="auto" width="100%"></img>}</div>
            </div>


                 <div className="tc">
                <h4 className="">Feature Product</h4>
                <p>Filler text is text that shares some characteristics of a real<br></br>
                 written text, but is random or otherwise</p>
                 </div>

                 <div className="row m-5">
                    <div className="col-md-4">
                    <div class="card">
                     
                        <div class="card-body p-0">
                        {<img src={img4} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                        <h4>Latest in fashion's</h4>
                            <p>We are gradually adding new functionality</p>
                            
                        </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card">
                     
                        <div class="card-body p-0">
                        {<img src={img5} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                            <h4>Trading Wear's</h4>
                            <p>We are gradually adding new functionality</p>
                            
                        </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card">
                      
                        <div class="card-body p-0">
                        {<img src={img6} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                        <h4>Top Fashion's</h4>
                            <p>We are gradually adding new functionality</p>
                            
                        </div>
                         </div>
                    </div>

                

            </div>
                
            <div className="tc">
                <h4 className="">Men's Fashion</h4>
                <p>Filler text is text that shares some characteristics of a real<br></br>
                 written text, but is random or otherwise</p>
                 </div>

            <div className="row m-5">
                    <div className="col-md-4">
                    <div class="card">
                       
                        <div class="card-body p-0">
                        {<img src={img7} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                        <h4>Men's Fashion</h4>
                            <p>Starting with 999Rs...</p>
                            
                        </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card">
                       
                        <div class="card-body p-0">
                        {<img src={img8} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                            <h4>Men's Fashion</h4>
                            <p> <p>Starting with 666Rs...</p></p>
                            
                        </div>
                         </div>
                    </div>

                    <div className="col-md-4">
                    <div class="card">
                       
                        <div class="card-body p-0">
                        {<img src={img9} alt='' height="auto" width="100%"></img>}
                        </div>
                        <div class="card-footer">
                        <h4>Trading Fashion</h4>
                            <p> <p>Starting with 599Rs...</p></p>
                            
                        </div>
                         </div>
                    </div>

                

            </div>





            </div>

            
           <Footer/>    
        </>

    )
}
export default Product;