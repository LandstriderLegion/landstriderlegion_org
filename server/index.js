const http = require('http')

console.log('Running on port 3000')
http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/html'})
   res.write(`<title>Landstrider Legion | Under Construction!</title>`)
   res.write(`<h1 style="text-align:center;font-family:monospace">o7 commander! Welcome to the Landstrider Legion!</h1>`)
   res.write(`<p style="text-align:center;font-family:sans-serif">We're making some big changes to our site, and hope to have it back and running as soon as possible!<br>Make sure to visit our <a href="https://discord.gg/nyyguW8T62">Discord</a> for more information!`)
   res.end()
   console.log('Processed request')
}).listen(3000)