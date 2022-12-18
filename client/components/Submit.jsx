import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Submit() {
  const [submission, setSubmission] = useState({})

  function handleChange(e) {
    const {value} = e.target
    setSubmission({...submission, value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(submission)
  }

  return(
  <>
   <form>
    <textarea rows="6" name="content" cols="55" onChange={handleChange}></textarea>
    <br></br>
    <button onClick={handleSubmit}>Submit</button>
   </form>
   <Link to='/feedbacks'>View Feedbacks</Link>
  </>
  )
}

export default Submit