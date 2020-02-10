import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/about.css';
import AboutData from './data/about.json';
//create a conmonent that will change the text inside the tag 
class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div id="page-container">
        <div id="content-wrap">
        <div className="card-group m-auto pt-5 px-3">
          {AboutData.map((item, index) => {
            return (
              <div className="card pt-2 border-0"  key={item.id}>
                <img className="mx-auto card-img-top img-fluid p-1" src={item.photo} alt="FotoCollaborator" />
                <div className="card-body">
                  <h5 className="card-title text-center h4">{item.name}</h5>

                  <p className="card-text text-justify">{item.description}</p>
                  <p className="h5 pb-1  text-center">Contact</p> 
                  <p className="text-center">
                    <a href={item.url_lin} target="_blank" className="text-center fa fa-linkedin" ></a>
                    <a href={item.url_git}  target="_blank" className="px-3 text-center fa fa-github"> </a>
                    <a href={item.url_mai} className="text-center fa fa-envelope"> </a>
                    </p>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <Footer />
        </div>
      </div>
    )
  }
}

export default About;
