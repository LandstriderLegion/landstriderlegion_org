import mongo from 'mongodb';
const dbUrl = 'mongodb://localhost:5000/';

// Check if the databases are initialized
require('fs').readdir('/data/db', (err: Error, dir: Array<string>) => {
   if (err) throw err
   if (!dir.length) {
      // initialize database
      mongo.MongoClient.connect(dbUrl, (err, db) => {
         if (err) throw err;
      
         var dbo = db!.db('content');
         console.log('Created content database');
         dbo.createCollection('news', (err, res) => {
            if (err) throw err;
            console.log('Created news collection');
         })
         dbo.createCollection('events', (err, res) => {
            if (err) throw err;
            console.log('Created events collection');
         })
         
         dbo = db!.db('data');
         console.log('Created data database');
         dbo.createCollection('journals', (err, res) => {
            if (err) throw err;
            console.log('Created journals collection');
         })
         dbo.createCollection('bgs', (err, res) => {
            if (err) throw err;
            console.log('Created bgs collection');
         })
      })

   }
})