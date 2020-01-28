import React from 'react';


function Header() {
  return (
    <nav className="navbar  bg-project-color-2">
      <img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} />
      <div className="float-right pr-3">
      <button type="button" className="btn btn-outline-project-color-1 mr-2 btn-rounded">LOG IN</button>
      <button type="button" className="btn btn-outline-project-color-1  btn-rounded">SIGN UP</button>
     </div>
    </nav>
  );
}

export default Header;
