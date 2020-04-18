import React, { Component } from 'react';
import UIfx from 'uifx';
import mp3File from './sounds/a.mp3';




class Letter extends Component {
    
    render() {
        const sound = new UIFx({asset: mp3File});
        return(
            <div>
              <img className="mx-auto card-img-top img-fluid p-1" id="animation" onClick={sound.play} src="../Letterimg/a.png" alt="upper case letter" />
              <img className="mx-auto card-img-top img-fluid p-1" id="animation" onClick={sound.play} src="../Letterimg/a-lower-case.png" alt="upper case letter" />
            </div>
        );
    }
}

export default Letter;