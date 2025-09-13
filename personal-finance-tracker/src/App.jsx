import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






import Layout from './components/Layout';
import Statistics from './components/Statistics';
import StatHeader from './components/StatHeader';
import ThemeIcons from './components/ThemeIcon';
import PageNotFound from './components/PageNotFound';

function App() {
 

  return (
    <div className='m-4 p-6 bg-gray-50 min-h-screen font-sans rounded-lg dark:bg-black dark:text-white '>
      <BrowserRouter >
       <header className=''>
            
        <StatHeader/>

        {/* <ThemeIcons/> */}
      </header>
        <Routes>
          <Route path='/' element={<Layout />}  />
          <Route path='stats' element={<Statistics/>}  />
          <Route path='*' element={<PageNotFound/>}  />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
