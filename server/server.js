const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('/feedback', (req, res) => {
  const feedback = ['hola', 'hi', 'hello', 'howdy']
  console.log(feedback)
  res.json({ feedback: feedback })
})

server.post('/feedback', async (req, res) => {
  console.log(req.body)
})

module.exports = server
