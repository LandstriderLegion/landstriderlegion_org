"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const mongodb_1 = __importDefault(require("mongodb"));
const pug_1 = __importDefault(require("pug"));
const dbUrl = 'mongodb://localhost:5000/';
;
var errorPage;
require('fs').readFile('../pages/error.html', (err, data) => {
    if (err)
        console.error(err);
    errorPage = data.toString('utf8');
});
console.log('Content Handler running on port 3001');
var db;
const mongoClient = new mongodb_1.default.MongoClient(dbUrl);
mongoClient.connect((err, client) => {
    if (err)
        throw err;
    if (client) {
        const database = client.db('content');
        db = {
            events: database.collection('events'),
            news: database.collection('news')
        };
    }
    else
        throw 'NO DATABASE';
});
const templates = {
    events: pug_1.default.compileFile('./templates/event.pug'),
    news: pug_1.default.compileFile('./templates/news.pug')
};
http_1.default.createServer(async (req, res) => {
    var url = req.url.split('/');
    var article = 'article';
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
        }
        else if (url[1] == "events") {
            var content = await db.events.findOne({ id: url[3], date: { year: url[2] } });
            if (content) {
                article = templates.events({
                    title: content.title,
                    description: content.description,
                    content: content.content,
                    date: `${content.date.month} ${content.date.date}, ${content.date.year}`,
                    place: content.place,
                    docks: content.docks,
                    org: content.org
                });
            }
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
    }
    catch (error) {
        res.writeHead(404, { 'Content-type': 'text/html' });
        var article = errorPage;
    }
    res.write(article);
    res.end();
    console.log('Processed request');
}).listen(3001);
