import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/about.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
counterpart.setLocale('en');

//create a conmonent that will change the text inside the tag 
class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div id="page-container">
        <div id="content-wrap">
        <div className="card-group m-auto pt-5 px-3">
              <div className="card pt-2 border-0">
<<<<<<< HEAD:src/About.js
                <img className="mx-auto card-img-top img-fluid p-1" src="./images/Brennan.jpg" alt="Brennan Robinson" />
=======
                <img className="mx-auto card-img-top img-fluid p-1" src="./images/Brennan.jpg" alt="FotoCollaborator" />
>>>>>>> 73b68d450f99bab57cd382ec13f2787eba16b597:client/src/About.js
                <div className="card-body">
                    <Translate content="nameB" component="h5" className="card-title text-center h4"/>
                    <Translate content="decriptionB" component="p" className="card-text text-justify"/>
                    <Translate content="contact" component="p" className="h5 pb-1 text-center"/>
                    <p  className="h5 pb-1 text-center">
                    <a href="https://www.linkedin.com/in/brennan-robinson-5724bb1a1/" target="_blank" className="text-center fa fa-linkedin" ></a>
                    <a href="https://github.com/brennan-robinson"  target="_blank" className="px-3 text-center fa fa-github"> </a>
                    <a href="mailto: brennanlemon@gmail.com" className="text-center fa fa-envelope"> </a>
                    </p>
                </div>
              </div>
              <div className="card pt-2 border-0">
                <img className="mx-auto card-img-top img-fluid p-1" src="./images/Millene.jpg" alt="FotoCollaborator" />
                <div className="card-body">
                    <Translate content="nameM" component="h5" className="card-title text-center h4"/>
                    <Translate content="decriptionM" component="p" className="card-text text-justify"/>
                    <Translate content="contact" component="p" className="h5 pb-1 text-center"/>
                    <p  className="h5 pb-1 text-center">
                    <a href="https://www.linkedin.com/in/millene-leao/" target="_blank" className="text-center fa fa-linkedin" ></a>
                    <a href="https://github.com/milleneleao"  target="_blank" className="px-3 text-center fa fa-github"> </a>
                    <a href="mailto: milleneleao@gmail.com" className="text-center fa fa-envelope"> </a>
                    </p>
                </div>
              </div>
              <div className="card pt-2 border-0">
                <img className="mx-auto card-img-top img-fluid p-1" src="./images/Olha.jpg" alt="FotoCollaborator" />
                <div className="card-body">
                    <Translate content="nameO" component="h5" className="card-title text-center h4"/>
                    <Translate content="decriptionO" component="p" className="card-text text-justify"/>
                    <Translate content="contact" component="p" className="h5 pb-1 text-center"/>
                    <p  className="h5 pb-1 text-center">
                    <a href="https://www.linkedin.com/in/olha-olga-tymoshchuk-a5a926184/" target="_blank" className="text-center fa fa-linkedin" ></a>
                    <a href="https://github.com/OlhaTymoshchuk5"  target="_blank" className="px-3 text-center fa fa-github"> </a>
                    <a href="mailto: olga.timoschuk2612@gmail.com" className="text-center fa fa-envelope"> </a>
                    </p>
                </div>
              </div>
        </div>
        </div>
        <Footer />
        </div>
      </div>
    )
  }
}

export default About;
