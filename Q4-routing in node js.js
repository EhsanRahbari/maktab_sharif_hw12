const http = require("http");
const routes = ["/home", "/about", "/help", "/faq", "/stuff"];
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello web application!");
      res.end();
    } else {
      const existingRoute = routes.find((data) => data === req.url);
      if (existingRoute) {
        res.write(`this is where ${existingRoute} things gets there!`);
        res.end();
      } else {
        res.write("Not found!");
        res.end();
      }
    }

    // console.log(existingRoute);
  })
  .listen(3000);
