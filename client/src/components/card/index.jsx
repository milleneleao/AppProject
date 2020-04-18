import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
//{handleClick, id, type, flipped, height, width}gives access to the properties
export default function Card({ handleClick, id, type, flipped, solved, height, width, disabled }){
    return <div
        //div container that holds the card
        className = {`flip-container ${flipped ? 'flipped' : ''}`}
        style ={{
            width, height
        }}
        onClick = {() => disabled ? null : handleClick(id)}
    >
        <div className="flipper">
            <img
                style={{
                    height, width
                }}
                //if card is flipped className is front otherwise back
                className={flipped ? 'front' : 'back'}
                //this is for img
                src={flipped || solved ? `./Cardimg/${type}.png` : `./Cardimg/back.jpg`}
                />
        </div>
    </div>
}
//js object with properties
Card.propTypes = {
   handleClick: PropTypes.func.isRequired,
   id: PropTypes.number.isRequired,
   flipped: PropTypes.bool.isRequired,
   solved: PropTypes.bool.isRequired,
   type: PropTypes.string.isRequired,
   height: PropTypes.number.isRequired,
   width: PropTypes.number.isRequired,
   disabled: PropTypes.bool.isRequired
   
}