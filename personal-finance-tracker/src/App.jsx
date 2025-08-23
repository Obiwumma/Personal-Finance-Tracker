import { useState, useEffect } from 'react'
import './App.css'

// import { transactions } from './data/transactions'



import Category from './components/Category'
import ThemeIcons from './components/ThemeIcon'
import Modal from './components/Modal'
import TransactionList from './components/List'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
    <Modal isOpen={isOpen} onClose={closeModal} />
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
        <TransactionList/>
      </main>

      <button className='bg-green-600 hover:bg-green-700 h-16 w-16 fixed bottom-6 right-6 rounded-full flex items-center justify-center text-5xl text-white shadow-lg transition' onClick={() => setIsOpen(true)} > + </button>

    </div>
    </>
  )
}

export default App
