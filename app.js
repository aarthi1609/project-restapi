const express = require('express')
const jsonServer = require('json-server')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000


app.use(bodyParser.json())

const jsonServerMiddleware = jsonServer.router('db.json')
app.use('/api', jsonServerMiddleware)

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

app.post('/api/users', (req, res) => {
  users.push({
    id : users.length + 1,
    name : req.body.name, 
    age  : req.body.age
 })
  res.status(201).json(users)
})

app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (user){
    user.name = req.body.name,
    user.age = req.body.age
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id !== parseInt(req.params.id))
  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0]
    res.json(index)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)
})

