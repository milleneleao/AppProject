import React from 'react';
import Header from './components/headerLogIn';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import './css/dashboard.css';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';
import moment from "moment";

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      id: undefined,
      kidName: undefined,
      credit: 0,
      image: "./images/mom-icon.png",
      data: []
    }
  }


  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    let url = `http://localhost:3001/clients/dashboard/${this.props.location.state.uid}`;
    let response = await fetch(url);
    let data = await response.json(); // read response body and parse as JSON
    console.log(data);

    var buf = data.image;
    if (buf === "null") {
      buf = "./images/mom-icon.png"
    }

    url = `http://localhost:3001/clients/course/${this.props.location.state.uid}`;
    response = await fetch(url);
    let dataCourse = await response.json(); // read response body and parse as JSON
    console.log(dataCourse);
    var aux = null;
    if (!dataCourse.data) {
      aux = []
    }else{
      console.log(dataCourse.data);
      aux = JSON.parse(dataCourse.data)
    }

    console.log(aux);
    
    this.setState({
      id: this.props.location.state.uid,
      kidName: data.kidsName,
      credit: data.credit,
      image: buf,
      data: aux
    });

  }

  moreInfo(e) {
    this.props.history.push({
      pathname: '/AboutCourse',
      state: {
        uid: this.props.location.state.uid
      }
    });
  }

  async startCourse(e) {
    let url = `http://localhost:3001/clients/username`;
    let response = await fetch(url);
    let data = await response.json(); // read response body and parse as JSON
    let nameTeacher = data.username;

    this.props.history.push({
      pathname: '/classRoom',
      state: {
        uid: this.props.location.state.uid,
        client: this.state.kidName,
        color:"text-project-color-6",
        alignment:"text-right",
        name_receiver:nameTeacher,
        img: './images/mom-icon.png'
      }
    });
  }


  render() {
    const picture = {
      width: "100px",
      height: "100px"
    };

    return (
      <div className="container-fluid" >

        <Header uid={this.props.location.state.uid} />
        <div className="container mt-3">
          <div className="row border">
            <div className="col-4 p-4 border-right">
              <div className="row">
                <div className="col-6 float-left ">
                  <img className="rounded-circle  p-3 border" src={this.state.image} alt="" style={picture} />
                </div>
                <div className="col-6 float-right p-2">
                  <h4 className="text-center">{this.state.kidName}</h4>
                  <p className="font-weight-bold text-center"><Translate content="textUserID" /> {this.state.id}</p>
                </div>
              </div>
            </div>
            <div className="col-4 p-4 text-center border-right">
              <h1>0</h1>
              <p className="font-weight-bold"><Translate content="textNotifications" /></p>
            </div>
            <div className="col-4 p-4 text-center border-right">
              <h4><Translate content="textBalance" /></h4>
              <h2>${this.state.credit} CAD</h2>
              {// <button type="button" className="btn btn-outline-project-color-6 pt-2"><Translate content="btnCredits" /></button>
              }
            </div>
          </div>

          <div className="row border mt-4">
            <div className="col-12  text-center h2"><Translate content="textMyCourses" /></div>
            { 
              this.state.data.map((item, index) => { 
                
              return (
            
                <div className="col-12 h2 border-bottom border-warning" key={item.id}>
                  <div className="row">
                  
                    <div className="col-9 m-auto float-left">
                      <h5>{moment(item.start).format("MMMM, D YYYY h:mm:ss a")} - {moment(item.end).format("h:mm:ss a")} </h5>
                    </div>
             
                    <div className="col-3 m-auto pb-2">
                      <button type="button" className="btn btn-outline-project-color-6 float-right"  onClick={() => this.startCourse()}>Start Now</button>
                    </div>
                  </div>
                </div>
              
              )
            })}

          </div>


          <div className="row border  mt-4">
            <div className="col-12 my-3 text-center h2"><Translate content="textRecCourses" /></div>
            <div className="col-12">

              <div className="row">
                <div className="col-4 border-top border-right p-2 pt-4">
                  <div className="card border-0 ">
                    <img className="card-img-top mx-auto" src="./images/dis_1.jpg" alt="Card image cap" style={{ paddingLeft: "40px" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center">Hello ABC - English - Step 01</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="text-center">
                        <button type="button" className="btn btn-outline-project-color-6" onClick={() => this.moreInfo()}><Translate content="btnMoreInfo" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 border-top  border-right p-2 pt-4">
                  <div className="card border-0">
                    <img className="card-img-top mx-auto" src="./images/dis_1.jpg" alt="Card image cap" style={{ paddingLeft: "40px" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center">Hello ABC - English - Step 02</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="text-center">
                        <button type="button" className="btn btn-outline-project-color-6">Coming Soon</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 border-top p-2 pt-4">
                  <div className="card border-0 ">
                    <img className="card-img-top mx-auto" src="./images/dis_1.jpg" alt="Card image cap" style={{ paddingLeft: "40px" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center">Hello ABC - English - Step 03</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="text-center">
                        <button type="button" className="btn btn-outline-project-color-6">Coming Soon</button>
                      </div>
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

export default Dashboard;