import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderLogIn extends Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);

    this.state = {
      path: "./images/mom-icon.png"
    }

  }
  componentDidMount() {
    this.loadData();
  }


  async loadData() {
    let url = `http://localhost:3001/clients/image/${this.props.uid}`;
    let response = await fetch(url);
    let commits = await response.json(); // read response body and parse as JSON
    var buf = commits.data;
    if (buf === "null" || buf === null){
      buf = "./images/mom-icon.png"
    }
    this.setState({
      success: true,
      path: buf
    })
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  bg-project-color-3">
        <div className="col-4">
        <Link to={{
          pathname: '/dashboard',
          state: {
            uid: this.props.uid
          }
        }}><img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} /></Link>
        </div>
        <div className="col-8">
          <div className="btn-group  float-right">
            <button type="button" className="btn btn-outline-color-2 " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle float-rigth img-thumbnail" src={`${this.state.path}`} alt="Logo" style={{ width: "40px", height: "auto" }}  />
            </button>
            <div className="dropdown-menu">
           {   // <a className="dropdown-item" href="/Profile">Edit Profile</a>
          }
              <a className="dropdown-item" href="/">Log out</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderLogIn;
