import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Headphones from './components/Headphones';
import Speaker from './components/Speaker';
import Earphones from './components/Earphones';
import Headphones1 from './components/Headphones1';

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/headphones' element={<Headphones/>} />
      <Route path='/speakers' element={<Speaker/>} />
      <Route path='/earphones' element={<Earphones/>} />
      <Route path='headphones1' element={<Headphones1/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
