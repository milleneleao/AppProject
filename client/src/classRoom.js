import React, { Component } from 'react';
import './css/classroom.css';
import './css/about.css';
import Puzzle from "./components/puzzle";
import Letter from "./components/letter";
import Chat from './components/chat';
import Header from './components/headerLogIn';
import GameOne from './GameOne.jsx';
import Content from "./components/content";
import StarRatings from 'react-star-ratings';


class classRoom extends React.Component {
  constructor() {
    super();
    this.changeRating = this.changeRating.bind(this);
    this.state = {
      rating: 4,
      gameindex: 0,
      game: <GameOne />
    }  
  }
  
  handleButtonClick() {
    if(this.state.gameindex == 0){
      this.setState({
        game: <Puzzle items={'p A l p e'.split(' ')} />,
        gameindex: 1
      })
    }
    else{
      this.setState({
        game: <Letter />,
        gameindex: 2
      })
    }
    
  }

  changeRating(rating) {
    this.setState({
      rating: rating
    })
  }

  render() {
    return (
      <div class="back">
      <div className="container-fluid">
        <Header uid={this.props.location.state.uid} />
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-3">
            <div style={{marginBottom:"5px"}}> 
            <StarRatings
                rating={this.state.rating}
                starRatedColor="ffc60a"
                starHoverColor="d3af36"
                changeRating={this.changeRating}
                starDimension="40px"
                starSpacing="15px"
            />
            </div>
              <Chat 
              name_client={this.props.location.state.client} 
              color={this.props.location.state.color}
              alignment={this.props.location.state.alignment}
              name_receiver={this.props.location.state.name_receiver}
              img={this.props.location.state.img}
              />
            </div>
            <div className="col-9">
            <Content />
            </div>
            <div className="row"></div>
            <div className="row">
            <div className="col-5">
            <button type="button" class="btn btn-primary ml-3" onClick={() => this.handleButtonClick()}>Next</button>
            </div>
            <div className="col-7">{this.state.game}</div>
            

            
            </div>
            
          </div>
        </div>
      </div>
      </div>

    )
  }

}

export default classRoom;
