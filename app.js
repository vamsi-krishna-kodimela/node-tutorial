//import http
const http = require("http");
const fs = require('fs');

//create Server
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.write("<html><head><title>Enter Message</title></head><form action='/message' method='POST'><input type='text' name='message' /><button type='submit'>Send</button></form></body></html>");
        return res.end();
    }

    if(url=='/message' && method == 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    
    res.write("<html><head><title>Welcom to My Node Server</title></head><body><h1>Welcom to node.js</h1></body></html>");
    res.end();
});

//start listening on port
server.listen(3000);