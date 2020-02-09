import React, { Component } from 'react';
import Modal from './Modal.js'
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    modal: false,
    modalType: 0 //0 - SignUp - 1 - Login
  }

  selectModal = (info = 0) => {
    this.setState({
      modal: !this.state.modal, // true/false toggle
      modalType: info
    })
  }
  render() {
    return (
      <nav className="navbar  bg-project-color-2">
      <Link to="/"><img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} /></Link>        
      <div className="float-right pr-3">
          <select className="custom-select mr-2" style={{width: "200px"}}>
          <option selected data-thumbnail="./img/canada.jpg">English</option>
          <option value="1" >Portugese</option>
          <option value="2">Ukrainian</option>
          </select>
          <button onClick={() => this.selectModal(1)} type="button" className="btn btn-outline-project-color-1 mr-2 btn-rounded">LOG IN</button>
          <button onClick={() => this.selectModal(0)} type="button" className="btn btn-outline-project-color-1  btn-rounded">SIGN UP</button>
          <Modal
              displayModal={this.state.modal}
              modalType={this.state.modalType}
              closeModal={this.selectModal}
          />
        </div>
      </nav>
    );
  }
}

export default Header;
