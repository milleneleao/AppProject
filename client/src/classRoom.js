import React, { Component } from 'react';
import './css/about.css';
import Chat from './components/chat';
import Header from './components/headerLogIn';

class classRoom extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <Header uid={this.props.location.state.uid} />
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-3">
              <Chat 
              name_client={this.props.location.state.client} 
              color={this.props.location.state.color}
              alignment={this.props.location.state.alignment}
              name_receiver={this.props.location.state.name_receiver}
              img={this.props.location.state.img}
              />
              
            </div>
            <div className="col-9">
            </div>
          </div>
        </div>
      </div>


    )
  }

}

export default classRoom;
