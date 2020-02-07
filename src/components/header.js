import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar  bg-project-color-2">
      <Link to="/"><img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} /></Link>
        
      <div className="float-right pr-3">
      <select className="custom-select mr-2" style={{width: "200px"}}>
          <option selected data-thumbnail="./img/canada.jpg">English</option>
          <option value="1" >Portugese</option>
          <option value="2">Ukrainian</option>
        </select>
      <button type="button" className="btn btn-outline-project-color-1 mr-2 btn-rounded">LOG IN</button>
      <button type="button" className="btn btn-outline-project-color-1  btn-rounded">SIGN UP</button>
     </div>
    </nav>
  );
}

export default Header;
