var http = require('http'),
    url = require('url'),
    requestHandlers = require('./requestHandlers'),
    static = require('node-static'),
    file = new static.Server('../client', { cache: 0 });

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/'),
            collection = path[1],
            id = path[path.length-1];

        if (pathname === '/countries') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(requestHandlers.getCountries());
            response.end();
        }
        console.log(path);
        if (collection === 'students') {
			console.log(0);
			if (request.method === 'POST') {
                var body = '';

				request.on('data', function(data) {
					body += data;					
				});

				request.on('end', function() {
					var studentJSON = JSON.parse(body);
                    var student = requestHandlers.addStudent(studentJSON);	
                
					response.writeHead(200, {'Content-Type': 'application/json'});
					response.write(JSON.stringify(student));
					response.end();				
				});			
		    }
			
			if (request.method === 'PUT') {
                var body = '';

				request.on('data', function(data) {
					body += data;					
				});

				request.on('end', function() {
					var studentJSON = JSON.parse(body);
                    var student = requestHandlers.changeData(id, body);	
                
					response.writeHead(200, {'Content-Type': 'application/json'});
					response.write(JSON.stringify(student));
					response.end();				
				});
                console.log(1);				
		    }
			
		    if (request.method === 'GET') {
			
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(requestHandlers.getStudents());
                response.end();			
            }
		}

        if (request.method === 'DELETE') {

            if (collection === 'countries') {
                requestHandlers.removeCountry(id);
            }
            response.end();
        }

        file.serve(request, response);
    }
    
    function requestPayload (req, id) {
        var buffer = '';

        req.on('data', function (data) {
            buffer += data;
        });
        req.on('end', function() {
            requestHandlers.changeData(id, buffer);	

            response.writeHead(200, {'Content-Type': 'application/json'});
		    response.write(buffer);
            response.end();			
        });
		
	

    };

    http.createServer(onRequest).listen(8888);
    console.log('Server has started 8888');
}

exports.start = start;