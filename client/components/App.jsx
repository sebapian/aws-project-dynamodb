import React, { useState, useEffect } from 'react'
import { getFeedback } from '../apiClient'
import Submit from './Submit'
import Feedback from './Feedback'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [feedbacks, setFeedbacks] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getFeedback()
      .then((feedback) => {
        setFeedbacks(feedback)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [feedbacks])

  return (
    <>
      <h1>Cotiss Feedback Website</h1>
      <Routes>
        <Route path="/" element={<Submit/>}/>
        <Route path="/feedbacks" element={<Feedback feedbacks={feedbacks} />}/>
      </Routes>
    </>
  )
}

export default App
