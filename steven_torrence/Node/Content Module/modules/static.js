const http = require('http');
const fs = require('fs');

module.exports = function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } 
    else if (request.url === '/dojo.html') {
        fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
            response.write(contents);
            response.end();
        });
    } 
    else if (request.url === '/stylesheets/styles.css') {
        fs.readFile('stylesheets/styles.css', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
};