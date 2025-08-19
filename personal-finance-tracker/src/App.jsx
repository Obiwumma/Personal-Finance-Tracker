import { useState, useEffect } from 'react'
import './App.css'

import { transactions } from './data/transactions'

import Category from './components/Category'
import ThemeIcons from './components/ThemeIcon'

function App() {


  return (
    <>
    <div className='m-4 p-6 bg-gray-50 min-h-screen font-sans rounded-lg '>
      <header className='flex items-start justify-between'>
        <div>
          <h1 className='font-bold text-3xl text-gray-800'>Finance Tracker</h1>
          <div className='my-4'><p className='text-2xl font-semibold text-gray-800 '>$2,000.00</p></div>
        </div>

        <ThemeIcons/>
      </header>

      <div className='flex items-center justify-center'>
        <Category/> 
      </div>

      <main>
        <div className='text-2xl font-semibold my-4'>Transaction</div>
        <div className='bg-white border rounded-lg shadow-md'>
          
          <div>
            <ul>
              {transactions.map(transaction => (
              <li className=' m-4' key={transaction.id}>
                <div className="flex justify-between my-2 ">
                  <h1 className='text-xl font-semibold'>{transaction.description}</h1>
                  <p className={`text-xl font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                         {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(transaction.amount)}
                          + </p>
                </div>
                <p className='text-xl my-2 font-semibold'>{transaction.category}</p>
                <p className='text-md font-semibold text-[#676f78] '>{transaction.date}</p>
                <hr />
              </li>
              
            ))}
            </ul>
            </div>

        </div>
      </main>

      <button className='bg-green-600 hover:bg-green-700 h-16 w-16 fixed bottom-6 right-6 rounded-full flex items-center justify-center text-5xl text-white shadow-lg transition'> + </button>

    </div>
    </>
  )
}

export default App
