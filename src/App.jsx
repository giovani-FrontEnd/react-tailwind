import './index.css';
// import Components 
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'
// import Router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Motion 
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
// import {CursorContext} from './context/CursorContext'


function App() {
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0})

  const handleMouseEvent = (e) => {
    setCursorPosition({x: e.clientX, y: e.clientY})
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseEvent)
  })

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>

      <div style={{left: cursorPosition.x, top: cursorPosition.y}} className='cursor w-[32px] h-[32px] rounded-full bg-primary fixed top-0 left-0 pointer-events-none z-50'></div>
    </>
  )
}

export default App
