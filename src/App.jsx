import React from 'react'
import './index.css'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Headphones from './components/Headphones';
import Speaker from './components/Speaker';
import Earphones from './components/Earphones';
import Headphones1 from './components/Headphones1';
import Headphones2 from './components/Headphones2';
import Headphones3 from './components/Headphones3';
import Speakers1 from './components/Speakers1';
import Speakers2 from './components/Speaker2';
import Earphones1 from './components/Earphones1';

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
      <Route path='headphones2' element={<Headphones2/>}/>
      <Route path='headphones3' element={<Headphones3/>}/>
      <Route path='/speakers1' element={< Speakers1/>} />
      <Route path='/speakers2' element={< Speakers2/>} />
      <Route path='/earphones1' element={<Earphones1/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
