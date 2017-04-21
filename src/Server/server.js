'use strict';

var http = require('http'),
    url = require('url'),
    requestHandlers = require('./requestHandlers');

function start () {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/')[1],
            id = pathname.split('/')[2];

        console.log('METHOD: ' + request.method + ' PATHNAME:' + pathname);

        //Categories
        if (path === 'categories') {
            if (request.method === 'GET') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getCategories());
                response.end();
            }

            if (request.method === 'DELETE') {
                requestHandlers.deleteCategory(id);
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end();
            }

            if (request.method === 'POST') {
                var postData = '';

                request.addListener('data', function(postDataChunk) {
                    postData += postDataChunk;
                });

                request.addListener('end', function() {
                    var category = requestHandlers.addCategory(postData);

                    response.writeHead(200);
                    response.write(category);
                    response.end();
                });
          }

          if (request.method === 'PUT') {
              var postData = '';

              request.addListener('data', function(postDataChunk) {
                  postData += postDataChunk;
              });

              request.addListener('end', function() {
                  requestHandlers.changeCategory(id, postData);

                  response.writeHead(200);
                  response.write('');
                  response.end();
              });
          }
        }

        //Places
        if (path === 'places') {
          if (request.method === 'GET') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(requestHandlers.getPlaces());
            response.end();
          }
          if (request.method === 'DELETE') {
            requestHandlers.removePlace(id);
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end();
          }
          if (request.method === 'POST') {
            var body = '';

            request.on('data', function(data) {
              body += data;         
            });

            request.on('end', function() {
              var placeJSON = JSON.parse(body),
                  place = requestHandlers.addPlace(placeJSON);  
                
              response.writeHead(200, {'Content-Type': 'application/json'});
              response.write(JSON.stringify(place));
             response.end();       
            });     
          }
          if (request.method === 'PUT') {
              var body = '';

              request.on("data", function(data) {
                 body += data;
              });
  
              request.on("end", function() {
                  requestHandlers.changePlace(id, body);

                  response.writeHead(200);
                  response.write('');
                  response.end();
              });
          }
        }

        //Participants
      if (path === 'participants') {
        if (request.method === 'GET') {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.write(requestHandlers.getParticipants(id));
          response.end();
        }

        if (request.method === 'DELETE') {
          requestHandlers.deleteParticipant(id);
          response.writeHead(200, {"Content-Type": "application/json"});
          response.end();
        }
        if (request.method === 'POST') {
          var postData = '';

          request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
          });

          request.addListener('end', function() {
            var person = requestHandlers.addPerson(postData);

            response.writeHead(200);
            response.write(person);
            response.end();
          });
        }

        if (request.method === 'PUT') {
          var postData = '';

          request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
          });

          request.addListener('end', function() {
            requestHandlers.changeParticipant(id, postData);

            response.writeHead(200);
            response.write("");
            response.end();
          });
        }
      }

        //Feedbacks
        if (path === 'feedbacks') {
            if (request.method === 'GET') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getFeedbacks());
                response.end();
            }
        }

        //Events
        if (path === 'events') {
            if (request.method === 'GET') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getEvents());
                response.end();
            }
        }
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server running on port 8888');
}
exports.start = start;
