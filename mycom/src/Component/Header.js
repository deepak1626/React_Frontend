import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
const Header = () => {
    return (
        <>
            <div className="container-fuild">

            <div className="row m-0">
                <div className="col-md-10 p-0 m-0">

                    <ul className="nv">

                        <li className="nl"><NavLink to="/">Home</NavLink></li>
                        <li className="nl"><NavLink to="/About">About</NavLink></li>
                        <li className="nl"><NavLink to="/product">Product</NavLink></li>
                        <li className="nl"><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="col-md-2 p-0 m-0">
                    <ul className="nv">
                        <li className="nl"><NavLink to="/login">Login</NavLink></li>

                        <li className="nl"><NavLink className="text-end" to="/signup">Signup</NavLink></li>
                    </ul>

                </div>
                </div>
                </div>
            </>

            )

}
            export default Header;