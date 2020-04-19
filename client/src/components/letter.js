import UIfx from 'uifx';
import React, { Component } from 'react';
import '../css/letter.css';
import mp3File from './sounds/a.mp3'


const beep = new UIfx(
    mp3File,
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )



class Letter extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                <div className="col-6">
                    <img  id="animation" onClick={beep.play()}  src="./Cardimg/AA.png" alt="upper case letter" />
                </div>
                <div className="col-6">
                    <img  id="animation" onClick={beep.play()}  src="./Cardimg/a.png" alt="upper case letter" />
                </div>
                </div>
            </div>
        );
    }
}

export default Letter;