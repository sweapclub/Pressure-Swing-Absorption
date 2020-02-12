const http = require('http');
const express = require('express');
const app = new express();

app.use(express.static('dist/pressure-swing-absorption'));
// app.use(express.static(__dirname+'/dist'));
app.get('/*', function(request, response) {
  // response.sendFile('absolutePathToYour/htmlPage.html');
  response.sendFile('dist/pressure-swing-absorption/index.html', {
    root: __dirname
  });
});

const server = http.createServer(app);
server.listen(8080, 'localhost', () =>
  console.log('Moke server is on at : 8080')
);
