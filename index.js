const express =require('express')
const app = express()
const newses = require('./All-News.json')
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) =>{
  res.send('hi this is changed server')
})

app.get('/news-categories', (req, res) =>{
  res.send(require('./Categories.json'))
})

app.get('/news', (req, res) =>{
  res.send(require('./All-News.json'))
})

app.get('/news/:id', (req, res) =>{
  const id = parseInt(req.params.id)

  const news = newses.find(nw => parseInt(nw.category_id) === id);
  res.send(news)
})

app.listen(port, () =>{
  console.log(`port is ${port}`);
})