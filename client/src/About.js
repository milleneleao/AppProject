import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
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
        <div className="container-fluid ">
        <div className="row text-center p-5 ">
          <div className="card-group ">
            <div className="card pt-2 border-0">
              <img className="mx-auto card-img-top img-fluid p-1" src="./images/Brennan.jpg" alt="Brennan Robinson" />
              <div className="card-body">
                <Translate content="nameB" component="h5" className="card-title text-center h4" />
                <Translate content="decriptionB" component="p" className="card-text text-justify" />
                <Translate content="contact" component="p" className="h5 pb-1 text-center" />
                <p className="h5 pb-1 text-center">
                  <a href="https://www.linkedin.com/in/brennan-robinson-5724bb1a1/" target="_blank" rel="noopener noreferrer" ><i className="text-center fa fa-linkedin" ></i></a>
                  <a href="https://github.com/brennan-robinson" target="_blank" rel="noopener noreferrer" className="px-3 text-center fa fa-github"> </a>
                  <a href="mailto: brennanlemon@gmail.com" className="text-center fa fa-envelope"> </a>
                </p>
              </div>
            </div>
            <div className="card pt-2 border-0">
              <img className="mx-auto card-img-top img-fluid p-1" src="./images/Millene.jpg" alt="FotoCollaborator" />
              <div className="card-body">
                <Translate content="nameM" component="h5" className="card-title text-center h4" />
                <Translate content="decriptionM" component="p" className="card-text text-justify" />
                <Translate content="contact" component="p" className="h5 pb-1 text-center" />
                <p className="h5 pb-1 text-center">
                  <a href="https://www.linkedin.com/in/millene-leao/" target="_blank" rel="noopener noreferrer"><i className="text-center fa fa-linkedin" ></i></a>
                  <a href="https://github.com/milleneleao" target="_blank" rel="noopener noreferrer" className="px-3 text-center fa fa-github"> </a>
                  <a href="mailto: milleneleao@gmail.com" className="text-center fa fa-envelope"> </a>
                </p>
              </div>
            </div>
            <div className="card pt-2 border-0">
              <img className="mx-auto card-img-top img-fluid p-1" src="./images/Olha.jpg" alt="FotoCollaborator" />
              <div className="card-body">
                <Translate content="nameO" component="h5" className="card-title text-center h4" />
                <Translate content="decriptionO" component="p" className="card-text text-justify" />
                <Translate content="contact" component="p" className="h5 pb-1 text-center" />
                <p className="h5 pb-1 text-center">
                  <a href="https://www.linkedin.com/in/olha-olga-tymoshchuk-a5a926184/" target="_blank" rel="noopener noreferrer"><i className="text-center fa fa-linkedin" ></i></a>
                  <a href="https://github.com/OlhaTymoshchuk5" target="_blank" rel="noopener noreferrer" className="px-3 text-center fa fa-github"> <i className="text-center fa fa-linkedin" ></i></a>
                  <a href="mailto: olga.timoschuk2612@gmail.com" className="text-center fa fa-envelope"> </a>
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
        <Footer />
      </div>
    )
  }
}
export default About;
