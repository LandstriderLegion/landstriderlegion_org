const http = require('http')

console.log('API running on port 3000')
http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/html'})
   
   if (req.url == '/') {   // /
      res.write(`<title>Landstrider Legion API</title>`)
      res.write(`<h1 style="text-align:center;font-family:monospace">Hey you're not supposed to see me!!</h1>`)
      res.write(`<p style="text-align:center;font-family:sans-serif">I'm an API, here to manage all the data! Unless you're a developer, there's nothing to see here.<br>Click <a href="/index.html">here</a> to return home and continue browsing the website.`)
   }
   
   res.end()
   console.log('Processed request')
}).listen(3000)