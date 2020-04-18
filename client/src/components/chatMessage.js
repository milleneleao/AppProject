import React from 'react'

export default ({ name, message, color,alignment }) =>
  <div className={`${alignment}`}>
    <strong className={`${color}`}>{name}: </strong>
    <i>{message}</i>
  </div>
