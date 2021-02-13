// calling the http package
const http = require('http');
// a server which response with the url
http.createServer((req , res)=>{
    res.write(req.url);
    res.end();
}).listen(3000);
