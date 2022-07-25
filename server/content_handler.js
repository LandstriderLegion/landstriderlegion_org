const http = require('http');
const mongo = require('mongodb');
const dbUrl = 'mongodb://localhost:5000/';
const pug = require("pug");

console.log('Content Handler running on port 3001');

// Connect content database
const client = new mongo.MongoClient(dbUrl);
await client.connect()
const database = client.db('content')
const db = { 
   events: database.collection('events'), 
   news: database.collection('news')
};

// Compile templates
const templates = {
   events: pug.compileFile('./templates/event.pug'),
   news: pug.compileFile('./templates/news.pug')
};


http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'application/json'});

   var cat = req.url.split('/')[1]

   if (cat == "news") {
      var content = await db.news.findOne({ id: req.url.split('/')[2] })
      var article = templates.news({
         title: content.title,
         description: content.desc,
         content: content.content,
         date: content.pub
      })

      res.write(article)
   }

   res.end();
   console.log('Processed request');
}).listen(3001);