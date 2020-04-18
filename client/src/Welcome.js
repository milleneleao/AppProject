import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';
import './css/welcome.css';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);



class Welcome extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header />
          <div id="content">
            <div className="row">
              <div className="col col-lg-12">
                <img src="./images/coverC.jpg" className="img-fluid" alt="banner0" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
                <Translate content="header" component="h2" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/coverC.jpg" className="img-fluid" alt="banner" />
              </div>
              <div className="col col-lg-6 my-auto">
                <Translate content="aboutT" component="p" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
                <Translate content="headerTwo" component="h2" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6 my-auto">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgl" alt="Step1" />
              </div>
              <div className="col col-lg-6 text-center my-auto " id="dis_text">
                <Translate content="headerSix" component="h6" />
                <Translate content="stepOne" component="p" />
              </div>
            </div>
            <div className="row ">
              <div className="col col-lg-6 text-center my-auto " id="dis_text">
                <Translate content="headerSixTwo" component="h6" />
                <Translate content="stepTwo" component="p" />
              </div>
              <div className="col col-lg-6 m-auto ">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgr" alt="Step2" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6 my-auto">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgl" alt="Step3" />
              </div>
              <div className="col col-lg-6 text-center my-auto " id="dis_text">
                <Translate content="headerSixThree" component="h6" />
                <Translate content="stepThree" component="p" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <div class="containerImg">
                <img src="./images/canva.jpg" className="img-fluid mt-5" alt="banner2" />
                <div class="transparent"><p>Get more information about the course</p></div>
                <Link to="/aboutcourse"> <button class="btn">Click Here</button></Link>
                </div>
              </div>
            </div>
            <Footer />
          </div>

        </div>


    )
  }
}

export default Welcome;