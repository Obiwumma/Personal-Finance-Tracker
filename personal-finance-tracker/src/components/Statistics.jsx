import React from 'react'
import PieChartStat from './PieChartStat';
import BarChartStat from './BarChartStat';
import { Link } from "react-router-dom";

function Statistics() {

  
  return (
    <div>  
      <header className='flex justify-end mb-10'>
        <Link to='/'>
        <button className=' border py-1 px-5 rounded-full'>Back</button></Link>
      </header>
      <div className='grid lg:grid-cols-2'>
        <BarChartStat/>
        <PieChartStat/>
      </div>
    </div>
  )
}

export default Statistics
