import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
  let hightFill = '0%';
  if(props.maxValue > 0){
    hightFill = Math.round((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar--graph'>
        <div className='chart-bar--fill' style={{height:hightFill}}>
        </div>
      </div>
        <div className='chart--label'>
          {props.label}
        </div>

    </div>
  )
}

export default ChartBar