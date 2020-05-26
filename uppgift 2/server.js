let http = require('http');
let fs = require('fs');
 
let onRequest = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Filen hittades inte!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
 
http.createServer(onRequest).listen(8000);