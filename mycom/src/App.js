import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
import Login from "./Component/Login";
import Signup from "./Component/Signup";







function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter> 
      
     
      </>
            
      
 );
}

export default App;

