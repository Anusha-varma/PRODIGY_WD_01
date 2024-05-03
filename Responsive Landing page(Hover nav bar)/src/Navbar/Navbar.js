import Home from "../Home/Home";
import { useState } from "react";
import About from "../About/About";
import Tech from "../Tech/Tech";
import './Navbar.css';
function Navbar(){
    let [hidden, setHidden] = useState(true)
    const [first, setFirst] = useState(true)
    const [firs, setfirs] = useState(true)
    return (<div className="Box">
      <div className="container">
      <h1 className="nav"
       onMouseEnter={()=>setHidden(false)}
       onMouseLeave={()=>setHidden(true)}
       >
        Home
      </h1>
      <h1 className="nav"
       onMouseEnter={()=>setfirs(false)}
       onMouseLeave={()=>setfirs(true)}
       >
        Technologies
      </h1>
     
      <h1 className="nav"
       onMouseEnter={()=>setFirst(false)}
       onMouseLeave={()=>setFirst(true)}>
        AboutUs
      </h1></div>
      {first&&firs?<Home/>:null}
      {first?null:<About/>}
      {firs?null:<Tech/>}
      </div>
    );
}
export default Navbar;