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
      name: "",
      data: []
    }
  }


  componentDidMount() {
    this.loadData();
  }

  async loadData() {

    let url = `http://localhost:3001/clients/username`;
    let response = await fetch(url);
    let data = await response.json(); // read response body and parse as JSON
    let nameTeacher = data.username;

    url = `http://localhost:3001/clients/course_teacher`;
    response = await fetch(url);
    let dataCourse = await response.json(); // read response body and parse as JSON
    console.log(dataCourse);
    var aux = null;
    if (!dataCourse.data) {
      aux = []
    } else {
      console.log(dataCourse.data);
      aux = JSON.parse(dataCourse.data)
    }

    this.setState({
      id: this.props.location.state.uid,
      data: aux,
      name: nameTeacher
    });

  }

  async startCourse(student,uid) {
    console.log(student);
    console.log(uid);
    let url = `http://localhost:3001/clients/image/${uid}`;
    let response = await fetch(url);
    let commits = await response.json(); // read response body and parse as JSON
    var buf = commits.data;
    if (buf === "null" || buf === null){
      buf = "./images/mom-icon.png"
    }


    this.props.history.push({
      pathname: '/classRoom',
      state: {
        uid: this.props.location.state.uid,
        client: this.state.name,
        color:"text-project-color-7",
        alignment:"text-rigth",
        name_receiver:student,
        img: buf
      }
    });
  }


  render() {
    return (
      <div className="container-fluid" >

        <Header uid={this.props.location.state.uid} />
        <div className="container mt-3">
          <div className="row border">
            <div className="col-12 p-4 text-center">
               <h4> Welcome {this.state.name} </h4> 
            </div>

          </div>

          <div className="row  mt-4">
            <div className="col-12 border-bottom text-center h2 pb-2">Hello ABC - English - Step 01</div>
            <div className="col-12 h2" >
              <div className="row">
                <div className="col-3 m-auto text-center">
                  <h5>Date: </h5>
                </div>

                <div className="col-5 m-auto text-center">
                  <h5>Student</h5>
                </div>

                <div className="col-4 m-auto pb-2">

                </div>

              </div>
            </div>
            {
              this.state.data.map((item, index) => {

                return (

                  <div className="col-12 h2" key={item.id}>
                    <div className="row border-top border-bottom p-2">

                      <div className="col-3 m-auto text-center">
                        <h5>{moment(item.start).format("MMMM, D YYYY h:mm:ss a")} {moment(item.end).format("h:mm:ss a")} </h5>
                      </div>

                      <div className="col-5 m-auto text-center">
                        <h5>{item.student} </h5>
                      </div>

                      <div className="col-4 m-auto pb-2">
                        <button type="button" className="btn btn-outline-project-color-6 float-right" onClick={() => this.startCourse(item.student,item.uid)}>Start Now</button>
                      </div>

                    </div>
                  </div>

                )
              })}

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;