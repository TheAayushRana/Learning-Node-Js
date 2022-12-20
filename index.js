// HTTP Method
const http = require("http");
const fs = require("fs");
const path = require("path");

// Creating Server
const app = http.createServer((req, res) => {
  // to set response headers which means what type of response we need like Content type should be in html format or plain
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  // req.url gives the url of requested link
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
        if (err) {
          console.log("ERROR", err);
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === "/about") {
      fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
        if (err) {
          console.log("ERROR", err);
          throw err;
        }
        res.end(data);
      });
    }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let contentType = "text/html";
  const ext = path.extname(filePath); // it will fetch extension

  if (!ext) {
    // if without ext file is received like about then .html is added to it
    filePath += ".html";
  }

  // set content-type on the basis of file extension
  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/js";
      break;
    default:
      contentType = "text/html";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          req.writeHead(500);
          res.end("Error!!");
        } else {
          res.writeHead(404, {
            "Content-Type": contentType,
          });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});