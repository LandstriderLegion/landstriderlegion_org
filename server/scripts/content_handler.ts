import http from 'http';
import mongo from 'mongodb';
import pug from 'pug';
const dbUrl = 'mongodb://localhost:5000/';

interface dbCollection {
   [key: string]: mongo.Collection
};

console.log('Content Handler running on port 3001');

// Connect content database
var db: dbCollection;
const mongoClient: mongo.MongoClient = new mongo.MongoClient(dbUrl);
mongoClient.connect((err, client) => {
   if (client) {
      const database = client.db('content');
      db = { 
         events: database.collection('events'), 
         news: database.collection('news')
      };
   } else throw err;
});

// Compile templates
const templates = {
   events: pug.compileFile('./templates/event.pug'),
   news: pug.compileFile('./templates/news.pug')
};


http.createServer(async (req, res) => {
   var url = req.url!.split('/');

   var article: string = "";
   try {
      if (url[1] == "news") {
         var content = await db.news.findOne({ id: url[2] });
         
         if (content) {
            article = templates.news({
               title: content.title,
               description: content.desc,
               content: content.content,
               date: content.pub
            });
         }
         
      } else if (url[1] == "events") {
         var content = await db.events.findOne({ id: url[3], date: { year: url[2] }});
         if (content) {
            article = templates.events({
               title: content.title,
               description: content.description,
               content: content.content,
               date: `${content.date.month} ${content.date.date}, ${content.date.year}`,
               place: content.place,
               docks: content.docks,
               org: content.org
            })
         }
            
      }
      res.writeHead(200, {'Content-type': 'text/html'});
   } catch(error) {
      res.writeHead(404, {'Content-type': 'text/html'});
      res.write(error);
   }

   res.write(article);
   res.end();
   console.log('Processed request');
}).listen(3001);