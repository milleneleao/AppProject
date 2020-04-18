import React, { Component } from 'react';
import HeaderLogIn from './components/headerLogIn';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import StarRatings from 'react-star-ratings';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
counterpart.setLocale('en');

class ClassroomPage extends Component {
    constructor() {
        super();
        this.changeRating = this.changeRating.bind(this);
        this.state = { 
          rating: 4 
        };
        this.handleClick = this.handleClickFull.bind(this);
        this.handleClick = this.handleClickTrial.bind(this);
        this.handleClick = this.handleClickBook.bind(this);
        this.state = {
            course: null,
            total: 0,
            message: "",
            visible: false
        }
    }

    changeRating(rating) {
      this.setState({
        rating: rating
      })
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
    render() {
      
        return (
            <div>
                <HeaderLogIn uid="0" />
                <div id="page-container">
                    <div id="content-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-6" style={{height: "250px", backgroundColor: "#F0EFE8", margin: "10px", paddingTop: "10px"}}>
                                    <Translate content="txtTeacherVid" component="h5" className="text mx-auto" />
                                </div>
                                <div className="col" style={{ backgroundColor: "#F0EFE8", margin: "10px", paddingTop: "10px"}}>
                                    <Translate content="txtContent" component="h5" className="text mx-auto" />
                                    <div className="card-body">
                                    <h5 className="card-title text-center">Hello ABC - English - Step 01</h5>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{height: "250px", backgroundColor: "#F0EFE8", margin: "10px", paddingTop: "10px"}}>
                                    <Translate content="txtStudentVid" component="h5" className="text mx-auto" />
                                </div>
                                <div className="col" style={{ backgroundColor: "#F0EFE8", margin: "10px", paddingTop: "10px"}}>
                                    <Translate content="txtGameArea" component="h5" className="text mx-auto" />
                                </div>
                            </div>
                            <div style={{marginLeft:"70%", marginTop:"10px"}}>
                              <StarRatings
                              rating={this.state.rating}
                              starRatedColor="ffc60a"
                              starHoverColor="d3af36"
                              changeRating={this.changeRating}
                              starDimension="40px"
                              starSpacing="15px"
                              />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassroomPage;