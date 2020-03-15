import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/aboutcourse.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
counterpart.setLocale('en');

class AboutCourse extends Component{
    render(){
        return(
            <div>
                <Header />
                <div id="page-container">
                <div id="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div class="col-8" style={{ backgroundColor:"#F0EFE8",  margin: "10px", marginRight: "50px"  }}>
                                <iframe width="560" height="315" style={{margin: "10px", marginLeft: "85px" }} src="https://www.youtube.com/embed/DUKN1eVUxFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                <Translate content="txtTitleCourse" component="h5" className="text mx-auto"/>
                                <Translate content="txtAboutCourse" component="p" />
                                </div>
                            <div class="col-3"  style={{ backgroundColor:"#F0EFE8", margin: "10px"}}>
                                <Translate content="txtForBalanceBox1" component="h5" className="text-center mx-auto" style={{ marginTop: "90px" }}/>   
                                <p className="text-center mx-auto"style={{ marginTop: "20px" }}>0 CAD</p>
                                <button type="button" className="btn btn-secondary" style={{ marginLeft: "95px" }}> <Translate content="btnBook" /></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"  style={{ backgroundColor:"#F0EFE8", margin: "10px"}}>
                                <Translate content="txtBookCourseTitle" component="h5" className="text mx-auto mt-2" />
                                <div className="container-fluid" style={{ backgroundColor:"white", margin: "5px"}}>
                                    <div className="row">
                                    <div className="col-6">
                                        <Translate content="txtTrial" component="h5" className="text mx-auto" />
                                        <Translate content="txtTrialDesc" component="p" className="text mx-auto" />
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-secondary" style={{ marginTop:"18px", marginLeft: "440px" }}><Translate content="btnBook" /></button>
                                    </div>
                                    </div>
                                </div>
                                <div className="container-fluid" style={{ backgroundColor:"white", margin: "5px", marginBottom:"10px"}}>
                                    <div className="row">
                                    <div className="col-6">
                                        <Translate content="txtCourse" component="h5" className="text mx-auto"/>
                                        <Translate content="txtCourseDesc" component="p" className="text mx-auto"/>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-secondary" style={{ marginTop:"18px", marginLeft: "440px" }}><Translate content="btnBook" /></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"  style={{ backgroundColor:"#F0EFE8", margin: "10px"}}>
                                <Translate content="txtTeacher" component="h5" className="text mx-auto"/>
                                    <div className="row">
                                    <div className="col-2">
                                        <img className="rounded-circle mw-100 p-3 ml-3 border" src="./images/mom-icon.png" alt="" style={{ width: "100px", height: "100px" }} />
                                    </div>
                                     <div className="col">
                                     <Translate content="txtTeacherAbout" component="p" /> 
                                    </div>
                                    </div>
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

export default AboutCourse;