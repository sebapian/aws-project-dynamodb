import React, { useState, useEffect } from 'react'
import Submit from './Submit'
import Feedback from './Feedback'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <h1>Cotiss Feedback Website</h1>
      <Routes>
        <Route path="/" element={<Submit/>}/>
        <Route path="/feedbacks" element={<Feedback />}/>
      </Routes>
    </>
  )
}

export default App
