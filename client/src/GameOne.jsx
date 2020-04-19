import React, { useState, useEffect } from 'react';
import Board from './components/board';
import initializeDeck from './deck';



export default function GameOne() {
  //mehod with getter and setter
  const [cards, setCards] = useState([]);
  //at top of the func array with getter method, setter = to state that will store empty array of ids
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimention] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);


  //component update? we need useEffect (function(func that generates a deck of cards), emptyarray in order not to render again and again )
  useEffect(() => {
  resizeBoard()  
  setCards(initializeDeck())
  
  },[])
  //id has to be inside the array. ... means to spread the value to the previous ids and append new id at the end
  
useEffect(() =>{
  preloadImages()
}, cards)  
useEffect(() => {
  const resizeListener = window.addEventListener('resize', resizeBoard)
  return () => window.removeEventListener('resize', resizeListener)
})

const handleClick = (id) => {
  setDisabled(true)
  if(flipped.length === 0){
    setFlipped([id]);
    setDisabled(false);
  }
  else{
    if(sameCardClicked(id)) return
    setFlipped([flipped[0],id]);
    if(isMatch(id)){
      setSolved([... solved, flipped[0], id])
      resetCards()
    }
    else{
      setTimeout(resetCards, 2000);
    }
  }

}

const preloadImages = () => {
  cards.map(card => {
    const src = `./Cardimg/${card.type}.png`
    new Image().src = src
  })
}

const resetCards = () => {
  setFlipped([]);
  setDisabled(false);
}
const sameCardClicked = (id) =>{
  flipped.includes(id)
}
 
const isMatch = (id) =>{
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type
}

const resizeBoard = () => {
  setDimention(
    Math.min(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ),
  )
};
return (
   <div>
      <Board
      dimension = {dimension}
      cards={cards}
      flipped={flipped}
      handleClick={handleClick}
      disabled = {disabled}
      solved = {solved}
      />
   </div>
   
  );
} 