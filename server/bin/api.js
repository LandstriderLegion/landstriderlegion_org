"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
console.log('API running on port 3000');
http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.write(req.url);
    if (req.url == '/' || req.url == '/api') {
        res.write(`Please specify parameters`);
    }
    res.end();
    console.log('Processed request');
}).listen(3000);
