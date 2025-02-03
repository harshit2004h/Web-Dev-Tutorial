const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello World!')
})
app.get('/blog', (req, res) => {
  res.send('<h1>Hello Blog</h1>')
})

app.get('/blog/:slug', (req,res) => {
    res.send(`<h1>hello ${req.params.slug}</h1>`)
  })
app.get('/blog/:slug/:second', (req,res) => {
  res.send(`<h1>hello ${req.params.slug} and HELLO ${req.params.second}</h1>`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('<h1>Intro to JS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio enim quae ad vitae inventore cupiditate fugit illum pariatur quas?</h1>')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('<h1>Intro to Python. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio enim quae ad vitae inventore cupiditate fugit illum pariatur quas?</h1>')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})