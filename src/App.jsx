import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Headphones from './components/Headphones';
import Speaker from './components/Speaker';
import Earphones from './components/Earphones';

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/headphones' element={<Headphones/>} />
      <Route path='/speakers' element={<Speaker/>} />
      <Route path='/earphones' element={<Earphones/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
