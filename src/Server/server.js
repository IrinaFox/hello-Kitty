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

<<<<<<< HEAD
    if (path === 'categories') {
      if (request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(requestHandlers.getStudentList());
        response.end();
      }
    }

=======
    //Categories
    if (path === 'categories') {
        if (request.method === 'GET') {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(requestHandlers.getCategories());
            response.end();
        }

        if (request.method === 'DELETE') {
            console.log(id);
            console.log(pathname);
            requestHandlers.deleteCategory(id);
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end();
        }

        if (request.method === 'POST') {
            var postData = '';

            request.addListener("data", function(postDataChunk) {
                postData += postDataChunk;
            });

            request.addListener("end", function() {
                var category = requestHandlers.addCategory(postData);

                response.writeHead(200);
                response.write(category);
                response.end();
            });
      }

      if (request.method === 'PUT') {
          var postData = '';

          request.addListener("data", function(postDataChunk) {
              postData += postDataChunk;
          });

          request.addListener("end", function() {
              requestHandlers.changeCategory(id, postData);

              response.writeHead(200);
              response.write('');
              response.end();
          });
      }
    }

    //Places
>>>>>>> origin/categoriesIra
    if (path === 'places') {
      if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(requestHandlers.getPlaces());
        response.end();
      }
    }

<<<<<<< HEAD
=======
    //Participants
>>>>>>> origin/categoriesIra
    if (path === 'participants') {
      if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(requestHandlers.getParticipants());
        response.end();
      }
    }

<<<<<<< HEAD
=======
    //Feedbacks
>>>>>>> origin/categoriesIra
    if (path === 'feedbacks') {
      if (request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(requestHandlers.getFeedbacks());
        response.end();
      }
    }
<<<<<<< HEAD
    
    if (path === 'events') {
      if (request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(requestHandlers.getEvents());
        response.end();
      }
    }
=======
>>>>>>> origin/categoriesIra
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server running on port 8888');
}

exports.start = start;
