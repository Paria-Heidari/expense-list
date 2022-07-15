import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.chartData.map(dataPoint => dataPoint.value );
    const totalMax = Math.max(...dataPointValues); // use spread '...' to receive 12 argument instead of array - standalone argument

  return (
    <div className='chart'>
        {props.chartData.map((point,index) =>
             <ChartBar 
             key={index} 
             value={point.value} 
             label={point.label} 
             maxValue={totalMax}
             />)}
    </div>
  )
}

export default Chart