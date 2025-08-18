import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const dropdownBtn = document.getElementById('dropdownBtn')
// const dropdownMenu = document.getElementById('dropdownMenu')

// dropdownBtn.addEventListener('click' , function() {
//   dropdownMenu.classList.toggle('hidden')
// })

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-4 p-4 bg-[#b0b4b9] flex-col items-center justify-center h-svh '>
      <header>
        <h1 className='font-sans font-semibold text-3xl'>Finance Tracker</h1>
        <div><p className='text-2xl font-semibold '>$2,000.00</p></div>
      </header>

      <div className="relative bg-white border rounded-lg p-2">
        {/* <!-- Fake select button --> */}
        <button id='dropdownBtn' class=" w-full px-4 py-2 bg-[#b0b4b9] border rounded">
          All
          <span className="float-right">▼</span>
        </button>
        
        {/* <!-- Dropdown options --> */}
        <div id='dropdownMenu' className="absolute hidden w-full bg-white border rounded shadow-lg">
          <div className="p-2 hover:bg-blue-100">some</div>
          <div className="p-2 hover:bg-blue-100">few</div>
        </div>
      </div>

      <main>
        <div>Transaction</div>
        <div>{/* Transaction list */}</div>
      </main>

    </div>
    </>
  )
}

export default App
