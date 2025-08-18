import { useState } from 'react'
import './App.css'


import Category from './components/category'

function App() {
  


  return (
    <>
    <div className='m-4 p-4 bg-[#b0b4b9] flex-col items-center justify-center h-svh font-sans '>
      <header>
        <h1 className=' font-semibold text-3xl'>Finance Tracker</h1>
        <div><p className='text-2xl font-semibold '>$2,000.00</p></div>
      </header>

      <>
        <Category/>
      </>

      <main>
        <div className='text-2xl font-semibold'>Transaction</div>
        <div className='bg-white h-44 border rounded-lg'>{/* Transaction list */}</div>
      </main>

    </div>
    </>
  )
}

export default App
