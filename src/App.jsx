import React from 'react'
import Home from './pages/Home'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className=' bg-gray-200 min-h-[100vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path=':id' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App