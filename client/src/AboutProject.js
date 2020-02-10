import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/about.css';
import AboutData from './Data/aboutproject.json';

class AboutProject extends Component {
    render() {
      return (
          <div>
          <Header />
          <div>
          <div className="container" >
            <div className="row" style={{ marginLeft: "120px"}}>
            {AboutData.map((item, index) => {
                return (
                <div className="col-4" key={item.id}>
                    <img src={item.photo} className="mx-auto img-fluid m-5 pr-5" style={{ width: "200px", height: "200px" }} alt="..." />
                    <h5 className="text-center  pr-5" style={{ marginRight: "95px" }}>{item.name}</h5>
                </div>
            )
        })} 
         </div>   
         </div> 
        </div>
        <Footer />
        </div>
      )
    }
  }
  
  export default AboutProject;