import React, { Component } from 'react';
import HeaderLogIn from './components/headerLogIn';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';
import moment from "moment";
counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
counterpart.setLocale('en');



class PayPage extends Component {
    constructor() {
        super();
        this.backClick = this.backClick.bind(this);
        this.handleClickPay = this.handleClickPay.bind(this);
        this.loadData = this.loadData.bind(this);
        this.state = {
            jsonCourses: [],
            total: 0,
            credit: 0
        }
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        var total = 0;

        let url = `http://localhost:3001/clients/credit/${this.props.location.state.uid}`;
        let response = await fetch(url);
        let commits = await response.json(); // read response body and parse as JSON
        var credit = commits.data;

        if (this.props.location.state.courseType === 'Trial') {
            total = 5
        } else {
            total = 15
        }

        this.setState({
            total: total,
            jsonCourses: this.props.location.state.courses,
            credit: credit,
            msgVisible: 'invisible'
        });

        console.log(this.props.location.state.courses);
        console.log(JSON.stringify(this.props.location.state.courses));
    }

    backClick(e) {
        this.props.history.push({
            pathname: '/AboutCourse',
            state: {
                uid: this.props.location.state.uid
            }
        });
    }

    async handleClickPay(e) {
        if (this.state.total <= this.state.credit) {
 
            let url = 'http://localhost:3001/clients/course';
            let dataToSend = {
                userData: {
                    uid: this.props.location.state.uid,
                    cco: 1,
                    data_course: JSON.stringify(this.state.jsonCourses)
                }
            };
            let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson);
            }).catch(err => console.log('Error ', err));

            console.log(response);

            let newCredit = this.state.credit - this.state.total;
            url = 'http://localhost:3001/clients/credit';
            dataToSend = {
                userData: {
                    uid: this.props.location.state.uid,
                    valor: newCredit
                }
            };
            response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(responseJson => {
                }).catch(err => console.log('Error ', err));

            

            this.props.history.push({
                pathname: '/dashboard',
                state: {
                    uid: this.props.location.state.uid
                }
            });
        } else {
            this.setState({
                msgVisible: 'visible'
            });
        }
    }

    render() {
        return (
            <div>
                <HeaderLogIn uid={this.props.location.state.uid} />
                <div className="container-fluid">
                    <div className="container m-5 mx-auto">
                        <div className="row mb-5">
                            <div className="col col-lg-3 float-right text-center ">
                            </div>
                            <div className="col col-lg-6 float-right  text-center ">
                                <div>
                                    <button className="btn  btn-secondary btn-lg " data-dismiss="modal" onClick={() => this.backClick()}>Back</button>
                                </div>
                            </div>
                            <div className="col col-lg-3 float-right text-center ">
                            </div>
                        </div>
                        <div className="row  my-auto">
                            <div className="col-8 " style={{ backgroundColor: "#F0EFE8" }}>
                                <div className="">
                                    <h5 className="text text-center pt-3 "> Review </h5>
                                </div>
                                <div className="text ">
                                    {this.state.jsonCourses.map((item, index) => {
                                        return (<div key={item.id}>{item.id}) {moment(item.start).format("MMMM, D YYYY: h:mm:ss a")} - {moment(item.end).format("h:mm:ss a")}  </div>)
                                    })}
                                </div>
                            </div>
                            <div className="col-1 " style={{ backgroundColor: "write" }}>  </div>
                            <div className="col-3 p-2 text-center " style={{ backgroundColor: "#F0EFE8" }}>
                                <p className="pt-2"> Your Credit {this.state.credit} CAD </p>
                                <Translate content="txtForBalanceBox1" component="h3" className="text-center mx-auto " />
                                <p className="text-center mx-auto display-4 pb-2" style={{ marginTop: "20px" }}> {this.state.total} CAD</p>
                                <button type="button" className="btn btn-secondary mb-4 " onClick={() => this.handleClickPay()}>Pay</button>
                                <div className={`text-danger  ${this.state.msgVisible} mt-4`}>Insufficient credit!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PayPage;