'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('node-static'),
    file = new staticFile.Server('../Client', {cache: 0}),
    requestHandlers = require('./requestHandlers');

function start () {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/')[1],
            id = pathname.split('/')[2];

        console.log('METHOD: ' + request.method + ' PATHNAME:' + pathname);

        if (path === 'categories') {
            if (request.method === 'GET') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getStudentList());
                response.end();
            }
        }

      if (path === 'places') {
          if (request.method === 'GET') {

              response.writeHead(200, {'Content-Type': 'application/json'});
              response.write(requestHandlers.getPlaces());
              response.end();
            }
      }

      file.serve(request, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server running on port 8888');
}

exports.start = start;
