const http = require('http')

console.log('API running on port 3000')
http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'application/json'})
   
   if (req.url == '/' || req.url == '/api') {   // /
      res.write(`Please specify parameters`)
   }
   
   res.end()
   console.log('Processed request')
}).listen(3000)