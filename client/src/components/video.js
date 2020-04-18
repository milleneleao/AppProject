import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Video extends Component {
    render() {
        return(
            <div>
               <iframe width="853" height="480" src="https://www.youtube.com/embed/jPABwdH2Dqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
        );
    }
}

export default Video;