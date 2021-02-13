const http = require("http");
const fs = require('fs');
//that server which sends the html file
http.createServer((req , res)=>{
    fs.readFile('index.html' , 'utf8' , (err , data)=>{
        if(err) console.log("there was an error!");
        res.write(data);
        res.end();
    })
}).listen(3000);