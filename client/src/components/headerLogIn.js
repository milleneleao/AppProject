import React, { Component } from 'react';

class HeaderLogIn extends Component {


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  bg-project-color-2">
        <div className="col-4">
          <img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} />
        </div>
        <div className="col-8">
          <div class="btn-group  float-right">
            <button type="button"  class="btn btn-outline-color-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="rounded-circle float-rigth" src="https://picsum.photos/50" alt="Logo" />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/Profile">Edit Profile</a>
              <a className="dropdown-item" href="/">Log out</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderLogIn;
