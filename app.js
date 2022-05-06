const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen('3050',function(req,res) {
  console.log('express server started at port 3050');
})