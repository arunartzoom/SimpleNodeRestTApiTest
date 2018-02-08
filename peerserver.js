var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 8080,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('certificates/key.pem', 'utf8'),
        cert: fs.readFileSync('certificates/cert.pem', 'utf8')
    }
});


console.log("Attempted to start the peerjs server !");