var WebSocketServer = require('websocket').server;
var http = require('http');

console.log('Server starting');
var httpServer = http.createServer(function (request, response) {
    // we need an http server to bind and open port for out websocket server
});
httpServer.listen(11235, function () { });

//WEB SOCKET SERVER
var connections = [];
webSocketServer = new WebSocketServer({ httpServer });
webSocketServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);
    var connectionIndex = connections.push(connection);
    console.log('Connection accepted: ', connectionIndex);

    connection.on('message', function (message) {
        console.log('Received message', JSON.stringify(message.utf8Data));
        connections.forEach(conn => conn.sendUTF(JSON.stringify(message.utf8Data)));
    });

    connection.on('close', function (connection) {
        console.log('Connection closed: ', connectionIndex);
    });
});
console.log('Server started');
