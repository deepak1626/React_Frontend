import React from "react";
import '../App.css'
import Header from "./Header";
import img from '../Image/dd.avif'
import img1 from '../Image/client.jpg'
import { SiFireship } from "react-icons/si";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import arrival from '../Image/hm.jpg'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaAngleDoubleLeft } from "react-icons/fa";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
            <Header />
           
            <div className="container-fluid">
                <div className="row homerow">
                    <div id="col-6" className="col-md-6">
                        <h2 className="homeh2">All what you need is here<br></br>
                            New fashion collection<br></br>
                            Every season</h2>
                        <h4 className="text-white">Sale offers</h4>
                        <p className="text-white">Hero can be anyone. Even a man knowing something as simple and</p>
                        <p className="text-white"> reassuring as putting a coat around a young boy shoulders</p>
                        <p className="text-white"> to let him know the world hadn’t ended.</p>
                        <button className="btn btn-primary btn-lg ml-5 homebtn">Shop Now</button>
                    </div>
                    <div className="col-md-6 p-0">
                        {<img src={img}  alt='' height="100%" width="100%"></img>}
                    </div>

                </div>
                <div className="container mx-auto d-block">
                    <h1 className="shoph1">---Why Shop With Us---</h1>

                    <div className="row p-0">
                        <div className="col-md-4">
                            <div class="card crd">
                                <div class="card-body">
                                    <div className="divicon"> <RiTruckLine /></div>
                                    <h2>Fast Delivery</h2>
                                    <p className="paregraph1">variation of passges od lorm <br></br>ipsum available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card crd">
                                <div class="card-body">
                                    <div className="divicon"><SiFireship /></div>
                                    <h2>Free Shiping</h2>
                                    <p className="paregraph1">variation of passges od lorm <br></br> ipsum available</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card crd">
                                <div class="card-body">
                                    <div className="divicon"><BsCoin /></div>
                                    <h2>Best Quality</h2>
                                    <p className="paregraph1">variation of passges od lorm <br></br> ipsum available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row m-0 p-0 arrival">
                    <div className="col-md-6 m-0 p-0">
                        <img className="img" src={arrival} alt='' width="100%" height="500px"></img>
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <h1 className="arivalhed">#New Arrivals</h1>
                        <p className="aritext">

                            Vitae fugiat laboriosam officia perferendis provident aliquid
                            voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                            Tenetur commodi, nisi remvel, ea eaque ab ipsa,
                            autem similique ex unde!

                        </p>
                        <button className="btn btn-danger btn-lg mx-auto d-block m-5">Shop Now</button>
                    </div>
                </div>




                <div className="sub-bg">
                    <h1 className="sub">Subscribe To Get Discount Offers</h1>

                    <form>
                        <input type="email sub" className="subinput" placeholder="   Enter your email"></input><br></br>
                        <button className="btn btn-danger m-5">subscribe</button>
                    </form>
                </div>

                <div className="carasole">
                    <h1 className="carasl">Customer Testimonial</h1>
                    <img className="img-fluid rounded-circle" src={img1} alt='' width="200px" height="200px"></img>
                    <p className="m-5">Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis<br></br>
                        reprehenderit, et, perspiciatis, debitis totam estdeserunt eiuss officiis ipsum ducimus <br></br>
                        ad labore modi voluptatibus accusantium <br></br>sapiente nam! Quaerat.</p>


                </div>


               {/*  <div id="cl-item" class="carousel slide" data-ride="carousel">


                    <ul class="carousel-indicators">
                        <li data-target="#cl-item" data-slide-to="0" class="active"></li>
                        <li data-target="#cl-item" data-slide-to="1"></li>
                        <li data-target="#cl-item" data-slide-to="2"></li>
                    </ul>


                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="carasole">
                                <h1 className="carasl">Customer Testimonial</h1>
                                <img className="img-fluid rounded-circle" src={img1} alt='' width="200px" height="200px"></img>
                                <p className="m-5">Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis<br></br>
                                    reprehenderit, et, perspiciatis, debitis totam estdeserunt eiuss officiis ipsum ducimus <br></br>
                                    ad labore modi voluptatibus accusantium <br></br>sapiente nam! Quaerat.</p>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="carasole">
                                <h1 className="carasl">Customer Testimonial 1</h1>
                                <img className="img-fluid rounded-circle" src={img1} alt='' width="200px" height="200px"></img>
                                <p className="m-5">Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis<br></br>
                                    reprehenderit, et, perspiciatis, debitis totam estdeserunt eiuss officiis ipsum ducimus <br></br>
                                    ad labore modi voluptatibus accusantium <br></br>sapiente nam! Quaerat.</p>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="carasole">
                                <h1 className="carasl">Customer Testimonial 2</h1>
                                <img className="img-fluid rounded-circle" src={img1} alt='' width="200px" height="200px"></img>
                                <p className="m-5">Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis<br></br>
                                    reprehenderit, et, perspiciatis, debitis totam estdeserunt eiuss officiis ipsum ducimus <br></br>
                                    ad labore modi voluptatibus accusantium <br></br>sapiente nam! Quaerat.</p>


                            </div>
                        </div>
                    </div>




                    <NavLink class="carousel-control-next" data-slide="next" to="#cl-item">
                        <span class="carousel-control-next-icon bg-danger">< FaAngleDoubleLeft /> </span>
                    </NavLink>
                    <NavLink class="carousel-control-next" data-slide="next" to="#cl-item">
                        <span class="carousel-control-next-icon bg-danger"><FaAngleDoubleRight /></span>
                    </NavLink>

                </div> */}




            </div>
            <Footer />
        </>

    )
}
export default Home;