const http = require('http');
const port = 3000;

let jobs = [{task: "Invade Russia", done: true},
            {task: "Insult Mexico", done: true},
            {task: "Tweet", done: false}]


function handleMyRequest(request, response) {
  if (request.url === '/api/todos' && request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(jobs));

  } else if (request.url === '/api/teapot') {
      response.writeHead('418');
      response.end()
  }   else {
      response.writeHead('404');
      response.end()
  }

}

const server = http.createServer(handleMyRequest)

console.log('Server is running on port ${post}')

server.listen(port);
