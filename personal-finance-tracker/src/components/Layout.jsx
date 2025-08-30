import React from 'react'
import { useState } from 'react'

import Modal from './Modal'
import StatHeader from './StatHeader'
import ThemeIcons from './ThemeIcon'
import Category from './category'
import TransactionList from './List'

function Layout() {
   const [isOpen, setIsOpen] = useState(false)

  

    function closeModal() {
      setIsOpen(false)
    }

  return (
    
      <div>
          <Modal isOpen={isOpen} onClose={closeModal} />
          <div className='m-4 p-6 bg-gray-50 min-h-screen font-sans rounded-lg '>
            
           

            <div className='flex items-center justify-center'>
              <Category /> 
            </div>

            <main>
              <TransactionList />
            </main>

            <button className='bg-green-600 hover:bg-green-700 h-16 w-16 fixed bottom-6 right-6 rounded-full flex items-center justify-center text-5xl text-white shadow-lg transition' onClick={() => setIsOpen(true)} > + </button>

          </div>
        </div>
  
  )
}

export default Layout
