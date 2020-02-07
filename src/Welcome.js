import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/about.css';
import './css/welcome.css';

class Welcome extends Component {
    render() {
      return (
        <div>
          <Header />
          <div id="page-container" className="ontainer-lg">
            <div className="row">
              <div className="col col-lg-12">
                <img src="./images/coverC.jpg" className="img-fluid" alt="Responsive image"/>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
                <h2>About VIP KId</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/coverC.jpg" className="img-fluid p-5" alt="Responsive image"/>
              </div>
              <div className="col col-lg-6 p-3">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
                <h2>How Does It Work?</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgl" alt="Responsive image"/>
              </div>
              <div className="col col-lg-6 text-center mt-5 " id="dis_text">
                <h6>1. Choose the course</h6>
                <p>We have a huge variety of courses</p>
              </div>
            </div>
            <div className="row">
            <div className="col col-lg-6 text-center mt-5" id="dis_text">
                <h6>2. Book the lesson</h6>
                <p>We have a huge variety of courses</p>
              </div>
              <div className="col col-lg-6">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgr" alt="Responsive image"/>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgl" alt="Responsive image"/>
              </div>
              <div className="col col-lg-6 text-center mt-5 " id="dis_text">
                <h6>3. Start your journey</h6>
                <p>We have a huge variety of courses</p>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <img src="./images/canva.jpg" className="img-fluid mt-5" alt="Responsive image"/>
              </div>
              </div>
          <Footer />
          </div>
        </div>
        
      )
    }
  }
  
  export default Welcome;