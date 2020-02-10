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
            {AboutData.map((item, index) => {
                return (
            <div className="container" key={item.id}>
            <div className="row">
                <div className="col-3">
                    <img src={item.photo} className="mx-auto img-fluid p-1" alt="..." />
                    <h5 className="text-center">{item.name}</h5>
                </div>
            </div>   
            </div>
            )
        })} 
         
         
        </div>
        <Footer />
        </div>
        
      )
    }
  }
  
  export default AboutProject;
