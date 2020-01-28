import React from 'react';


function Footer() {
  return (
    <div className=" bg-light" style={{position: "absolute", bottom: "0",width: "100%",height: "2.5rem"}}>
      <div className="row  pt-2">
        <div className="col-6 ">
          <a href="www.google.com" className="text-project-color-2 pl-5">About Us</a>
          <a href="www.google.com" className="text-project-color-2 pl-5">About Project</a>
        </div>
        <div className="col-6 text-right ">
          <p className="text-project-color-2 pr-5">&copy;2020 - Group2.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

