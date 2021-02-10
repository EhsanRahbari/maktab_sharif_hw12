let http = require('http');

let url = {
    add : "myaddress.com"
};

//create a server object:
http.createServer(function (req, res) {
    if (req.url ==="/json" && req.method === "GET"){
        res.write(JSON.stringify(url));
        res.end();
    }
    //  res.write('Hello World!'); //write a response to the client
    // res.end(); //end the response
}).listen(8080); //the server object listens on port 8080



