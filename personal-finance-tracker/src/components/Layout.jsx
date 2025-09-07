import React from 'react'
import { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import Modal from './Modal'
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

            <button className='bg-green-600 hover:bg-green-700 fixed bottom-6 right-6 rounded-full flex items-center justify-center text-4xl text-white h-15 w-15 shadow-lg transition' onClick={() => setIsOpen(true)} >
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </button>

          </div>
        </div>
  
  )
}

export default Layout
