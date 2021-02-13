const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    // root, get
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./public/index.html","utf-8", (err, data) => {
        if (err) console.log("this is an error");
        // response.setHeader("Content-type", "text/html");
        response.write(data);
        response.end();
      });
    } //test , get
    else if (request.url === "/test" && request.method === "GET") {
      response.write("hello from test!");
      response.end();
    }
    else if (request.url==="/style.css" && request.method === "GET"){
      fs.readFile("./public/style.css","utf-8", (err, data) => {
        if (err) console.log("this is an error");
        // response.setHeader("Content-type", "text/html");
        response.write(data);
        response.end();
      });
    }else if (request.url==="/main.js" && request.method === "GET"){
      fs.readFile("./public/main.js","utf-8", (err, data) => {
        if (err) console.log("this is an error");
        // response.setHeader("Content-type", "text/html");
        response.write(data);
        response.end();
      });
    }
      else if (request.url==="/public/partnumber300.300.jpg" && request.method === "GET"){
        fs.readFile("./public/partnumber300.300.jpg", (err, data) => {
          if (err) console.log("this is an error");
          // response.writeHead(200 , {'Content-type' : 'img/jpg'})
          // response.setHeader("Content-type", "img/jpg");
          response.write(data);
          response.end();
        });
    }
    else {
      response.write("bad request");
      response.end();
    }
  })
  .listen(3000);

console.log("server has been started");
