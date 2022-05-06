const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen('3050',function(req,res) {
  console.log('express server started at port 3050');
})

// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'Testing APM',
  
  // Use if APM Server requires a secret token
  secretToken: 'QzdP4BfL4RhrQLw9jj',
  
  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
  
  // Set the service environment
  environment: 'production'
  })