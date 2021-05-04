const express = require("express");
let fs = require('fs');

const app = express();
const PORT = process.env.port || 8000;
app.use(express.static('src'))


app.get("/", function(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./src/html/index.html', null, function (error, data) {
        if (error) {
            resp.writeHead(404);
            resp.write('file not found');
        } else {
            resp.write(data);
        }
        resp.end();
    });
});

app.listen(8000);