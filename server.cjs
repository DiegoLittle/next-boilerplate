const express = require('express')
const next = require('next')
var http = require('http');

const dev = process.env.NODE_ENV !== 'production'


// function getPort(port) {
//     while (true) {
//         try {
//             console.log('port: ' + port);

//             var server = http.createServer(function (req, res) {
//                 res.end('test');
//             });
//             try {
//                 server.listen(3000).on('error', function (e) {
//                     console.log('port: ' + port + ' is already in use');
//                     port++;
//                     return
//                 });
//                 server.on('listening', function () {
//                     server.close();
//                     return port;
//                 });
//             } catch (error) {
//                 console.log('port: ' + port + ' is already in use');
//                 port++;
//             }
//             port++;
//         }
//         catch (err) {
//             console.log('port: ' + port + ' is already in use');
//             port++;
//         }
//     }
// }

// let port = getPort(3000);

const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.post('*', (req, res) => {
            return handle(req, res)
        })
        server.put('*', (req, res) => {
            return handle(req, res)
        })
        server.delete('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3005, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })