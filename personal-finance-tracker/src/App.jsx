import { useState, useEffect } from 'react'
import './App.css'

import { transactions } from './data/transactions'

import Category from './components/category'
import LargerCategory from './components/largerCategory'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Example breakpoint

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  return (
    <>
    <div className='m-4 p-4 bg-[#b0b4b9] flex-col items-center justify-center h-svh font-sans rounded-lg '>
      <header>
        <h1 className=' font-semibold text-3xl'>Finance Tracker</h1>
        <div className='my-4'><p className='text-2xl font-semibold '>$2,000.00</p></div>
      </header>

      <div className='flex items-center justify-center'>
        {isMobile ? <Category/> : <LargerCategory/>}
      </div>

      <main>
        <div className='text-2xl font-semibold my-4'>Transaction</div>
        <div className='bg-white border rounded-lg'>
          

          <div>
            <ul>
              {transactions.map(transaction => (
              <li className=' m-4' key={transaction.id}>
                <div className="flex justify-between my-2 ">
                  <h1 className='text-xl font-semibold'>{transaction.description}</h1>
                  <p className='text-xl font-semibold'>{transaction.amount}</p>
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

      <div className='bg-[#dfdada] h-20 w-20 fixed bottom-5  right-5 pb-4 rounded-[50%] flex items-center justify-center text-7xl text-[#5e5858] '>+</div>

    </div>
    </>
  )
}

export default App
