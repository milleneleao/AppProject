import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/about.css';
import './css/welcome.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);

counterpart.setLocale('en');

class Welcome extends Component {
    render() {
      return (
        <div className="container-fluid">
          <Header />
          <div id="page-container" >
            <div className="row">
              <div className="col col-lg-12">
                <img src="./images/coverC.jpg" className="img-fluid" alt="Responsive image"/>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
                <Translate content="header" component="h2" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/coverC.jpg" className="img-fluid" alt="Responsive image"/>
              </div>
              <div className="col col-lg-6 pt-5">
              <Translate content="aboutT" component="p" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12 text-center p-5">
              <Translate content="headerTwo" component="h2" />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6">
                <img src="./images/dis_1.jpg" className="img-fluid " id="dis_imgl" alt="Responsive image"/>
              </div>
              <div className="col col-lg-6 text-center mt-5 " id="dis_text">
                <Translate content="headerSix" component="h6" />
                <Translate content="stepOne" component="p" />
              </div>
            </div>
            <div className="row">
            <div className="col col-lg-6 text-center mt-5" id="dis_text">
                <Translate content="headerSixTwo" component="h6" style={{ marginRight: "60px"}}/>
                <Translate content="stepTwo" component="p" style={{ marginRight: "60px"}} />
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
                <Translate content="headerSixThree" component="h6" />
                <Translate content="stepThree" component="p" />
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