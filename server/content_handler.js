const http = require('http');
const mongo = require('mongodb');
const dbUrl = 'mongodb://localhost:5000/content';

console.log('Content Handler running on port 3001');

// Connect content database
const client = new mongo.MongoClient(dbUrl);
var db = { 
   events: client.collection('events'), 
   news: client.collection('news')
};


http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'application/json'});

   if (req.url == '/' || req.url == '/news' || req.url == '/events') {
      res.write(`Please specify parameters`);
   }

   res.end();
   console.log('Processed request');
}).listen(3001);