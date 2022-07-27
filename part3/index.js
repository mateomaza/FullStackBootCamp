const express = require('express')
const app = express()
const corp = require('corp')
const logger = require('./loggerMiddleware.js')

app.use(express.json())
app.use(corp())
app.use(logger)

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', function (req, res) {
  res.json(notes)
})

app.get('/api/notes/:id', function (req, res) {
  const { id } = req.params
  const note = notes.find(note => note.id === Number(id))
  note ? res.json(note) : res.status(404).end()
})

app.post('/api/notes', function (req, res) {
  const note = req.body

  if (note === undefined || note.content === undefined) {
    return res.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    date: new Date().toISOString(),
    important: note.important !== undefined ? note.important : false
  }
  console.log(newNote)

  notes = [...notes, newNote]

  res.status(201).json(newNote)
})

app.delete('/api/notes/:id', function (req, res) {
  const { id } = req.params
  notes = notes.filter(note => note.id !== Number(id))
  res.status(204).end()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
