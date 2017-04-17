var http = require('http'),
    requestHandlers = require('./requestHandlers'),
    staticFile = require('node-static'),
    file = new staticFile.Server('../client', {cache: 0}),
    url = require('url');

function start() {
    function ifRequest (request, response) {
        var callerName = url.parse(request.url).pathname,
            path = callerName.split('/'),
            collection = path[1],
            id = path[path.length-1];

        console.log(collection);
    	if (collection === 'feedbacks') {
            if (request.method === 'GET') {
               response.writeHead(200, {"Content-Type": "application/json"});
               response.write(requestHandlers.getFeedbacks());
               response.end();

        } else if (request.method === 'PUT') {
            var Info = '';

            request.on("data", function(infa) {
               Info += infa;
            });

            request.on("end", function() {
                requestHandlers.changeFeedback(id, Info);
                response.writeHead(200);
                response.write('');
                response.end();
            });
        } else if (request.method === 'POST') {
            var Info = '';

                request.on("data", function(infa) {
                    Info += infa;
                });
                request.on("end", function() {
                   var feedback = requestHandlers.addFeedback(Info);

                    response.writeHead(200);
                    response.write(feedback);
                    response.end();
                });
            }
          
            else if (request.method === 'DELETE') {
                requestHandlers.removeFeedback(id);
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end();
            } 
        } 
           file.serve(request, response);
       }

       http.createServer(ifRequest).listen(8080);
       console.log('server is running on 8080');
}

exports.start = start;