import React, { Component } from 'react';
import HeaderLogIn from './components/headerLogIn';
import Login from './Login';
import './css/aboutcourse.css';
import Header from './components/header';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
counterpart.setLocale('en');

class AboutCourse extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClickFull.bind(this);
        this.handleClick = this.handleClickTrial.bind(this);
        this.handleClick = this.handleClickBook.bind(this);
        this.state = {
            course: null,
            total: 0,
            message: "",
            visible: false,
            isdisable: true
        }
    }

    handleClickBook(e) {
        if (this.state.total === 0) {
            this.setState({
                message: "txtSelect",
                visible: true
            });
        } else {
            this.setState({
                message: "",
                visible: false
            });
            this.props.history.push({
                pathname: '/Calendar',
                state: {
                  course: this.state.course,
                  uid: this.props.location.state.uid
                }
              });
        }
    }
    handleClickFull(e) {
        this.setState({
            course: "Full",
            total: 15
        });
    }
    handleClickTrial(e) {
        this.setState({
            course: "Trial",
            total: 5
        });
    }

    componentDidMount(){
        var header = "";
        var isDisabled;
        if(!this.props.location.state){ //
            header = <Header />;
            isDisabled = true;
        }
        else{
            header = <HeaderLogIn uid={this.props.location.state.uid} />;
            isDisabled = false;
        }
        this.setState({
            setHeader: header,
            disabled: isDisabled

        });
    }
    render() {
        
        return (
            <div>
                {//<HeaderLogIn uid={this.props.location.state.uid} />
                }
                {this.state.setHeader}
                <div id="page-container">
                    <div id="content-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-8" style={{ backgroundColor: "#F0EFE8", margin: "10px", marginRight: "50px" }}>
                                    <iframe width="560" height="315" style={{ margin: "10px", marginLeft: "85px" }} src="https://www.youtube.com/embed/DUKN1eVUxFs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    <Translate content="txtTitleCourse" component="h5" className="text mx-auto" />
                                    <Translate content="txtAboutCourse" component="p" />
                                </div>
                                <div className="col-3" style={{ backgroundColor: "#F0EFE8", margin: "10px" }}>
                                    <Translate content="txtForBalanceBox1" component="h3" className="text-center mx-auto " style={{ marginTop: "90px" }} />
                                    <p className="text-center mx-auto display-4" style={{ marginTop: "20px" }}> {this.state.total} CAD</p>
                                    <button type="button" disabled={this.state.disabled} className="btn btn-secondary" style={{ marginLeft: "95px" }} onClick={() => this.handleClickBook()}> <Translate content="btnBook" /></button>
                                    <div className={`text-danger text-center ${this.state.visible}  my-2`}><Translate content={`${this.state.message}`} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ backgroundColor: "#F0EFE8", margin: "10px" }}>
                                    <Translate content="txtBookCourseTitle" component="h5" className="text mx-auto mt-2" />
                                    <div className="container-fluid" style={{ backgroundColor: "white", margin: "5px" }}>
                                        <div className="row  p-3">
                                            <div className="col-6">
                                                <Translate content="txtTrial" component="h5" className="text mx-auto" />
                                                <Translate content="txtTrialDesc" component="p" className="text mx-auto" />
                                            </div>
                                            <div className="col-6">
                                                <button type="button" disabled={this.state.disabled} className="btn btn-secondary" style={{ marginTop: "18px", marginLeft: "440px" }} onClick={() => this.handleClickTrial()}><Translate content="btnSelect" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-fluid" style={{ backgroundColor: "white", margin: "5px", marginBottom: "10px" }}>
                                        <div className="row  p-3">
                                            <div className="col-6">
                                                <Translate content="txtCourse" component="h5" className="text mx-auto" />
                                                <Translate content="txtCourseDesc" component="p" className="text mx-auto" />
                                            </div>
                                            <div className="col-6">
                                                <button type="button" disabled={this.state.disable} className="btn btn-secondary" style={{ marginTop: "18px", marginLeft: "440px" }} onClick={() => this.handleClickFull()}><Translate content="btnSelect" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{ backgroundColor: "#F0EFE8", margin: "10px" }}>
                                    <Translate content="txtTeacher" component="h5" className="text mx-auto" />
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
                </div>
            </div>
        )
    }
}

export default AboutCourse;