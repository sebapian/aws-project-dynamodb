import React from 'react'

export default function Feedback({feedbacks}) {
  
  return(
    <div>
      <p>Previous Feedbacks:</p>
      <ul>
          {feedbacks.map((feedback) => {
            return <li>{feedback}</li>
          })}
      </ul>
    </div>
  )
}
