import React, { Component } from 'react';
import HeaderLogIn from './components/headerLogIn';
import Calendar from './components/calendar';
import './css/about.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


//create a conmonent that will change the text inside the tag 
class DashboardTemp extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <HeaderLogIn />
        <div className="container">
          <div className=" float-right p-3">
            <button className="btn btn-project-color-4 btn-lg" data-dismiss="modal">Next</button>
          </div>
          <div className="row">
            <div className="col col-lg-12 mt-5">
              <Calendar>
              </Calendar>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DashboardTemp;
