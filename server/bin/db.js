"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const dbUrl = 'mongodb://localhost:5000/';
require('fs').readdir('/data/db', (err, dir) => {
    if (err)
        throw err;
    if (!dir.length) {
        mongodb_1.default.MongoClient.connect(dbUrl, (err, db) => {
            if (err)
                throw err;
            var dbo = db.db('content');
            console.log('Created content database');
            dbo.createCollection('news', (err, res) => {
                if (err)
                    throw err;
                console.log('Created news collection');
            });
            dbo.createCollection('events', (err, res) => {
                if (err)
                    throw err;
                console.log('Created events collection');
            });
            dbo = db.db('data');
            console.log('Created data database');
            dbo.createCollection('journals', (err, res) => {
                if (err)
                    throw err;
                console.log('Created journals collection');
            });
            dbo.createCollection('bgs', (err, res) => {
                if (err)
                    throw err;
                console.log('Created bgs collection');
            });
        });
    }
});
