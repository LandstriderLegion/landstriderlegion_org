const http = require('http')
const mongo = require('mongodb')

console.log('Content Handler running on port 3001')
http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'application/json'})

   if (req.url == '/' || req.url == '/news' || req.url == '/events') {
      res.write(`Please specify parameters`)
   }


   res.end()
   console.log('Processed request')
}).listen(3001)