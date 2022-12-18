import React, {useState, useEffect} from 'react'
import { getFeedback } from '../apiClient'
import { Link } from 'react-router-dom'

export default function Feedback() {
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
  }, [])

  return(
    <div>
      <p>Previous Feedbacks:</p>
      <ul>
          {feedbacks.map((feedback) => {
            return <li>{feedback}</li>
          })}
      </ul>
      <Link to='/'>Go back to submissions</Link>
    </div>
  )
}
