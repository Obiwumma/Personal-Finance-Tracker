import React from 'react'
import PieChartStat from './PieChartStat';
import BarChartStat from './BarChartStat';
import { Link } from "react-router-dom";

function Statistics() {

  
  return (
    <div>  
      <header>
        <Link to='/'>Back</Link>
      </header>
      <BarChartStat/>
      <PieChartStat/>
    </div>
  )
}

export default Statistics
