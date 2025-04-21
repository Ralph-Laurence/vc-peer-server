const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
});

const server = require('https').Server(app);
const peerServer = ExpressPeerServer(server, {
    path: '/peervc'
});

app.use('/peervc', peerServer);
server.listen(process.env.PORT, 'https://videocall-peer-server.glitch.me');