import React from 'react'
import './card.css';

function card(props) {
    const classes = `${props.className} card`
  return (
    <div className={classes}> 
        {props.children}
    </div>
  )
}

export default card