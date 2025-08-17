import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-4 p-4 bg-[#b0b4b9] flex-col items-center justify-center h-svh '>
      <header>
        <h1 className='font-sans font-semibold text-3xl'>Finance Tracker</h1>
        <div><p className='text-2xl font-semibold '>$2,000.00</p></div>
      </header>

      <div class="relative">
  {/* <!-- Fake select button --> */}
  <button class="px-4 py-2 bg-white border rounded">
    Select Option
    <span class="float-right">▼</span>
  </button>
  
  {/* <!-- Dropdown options --> */}
  <div class="absolute hidden w-full bg-white border rounded shadow-lg">
    <div class="p-2 hover:bg-blue-100">Option 1</div>
    <div class="p-2 hover:bg-blue-100">Option 2</div>
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
