const express = require('express')
const next = require('next')
var http = require('http');

const dev = process.env.NODE_ENV !== 'production'


function getPort(port) {
    // console.log('process.argv: ' + process.argv[2]);
    if(process.argv[2]){
        return process.argv[2];
    }else{
        return 3000
    }
    // if(process.argv.find((arg) => arg === '--port')){
    //     return process.argv[process.argv.indexOf('--port') + 1];
    // }
    // while (true) {
    //     try {
    //         console.log('port: ' + port);

    //         var server = http.createServer(function (req, res) {
    //             res.end('test');
    //         });
    //         try {
    //             server.listen(3000).on('error', function (e) {
    //                 console.log('port: ' + port + ' is already in use');
    //                 port++;
    //                 return
    //             });
    //             server.on('listening', function () {
    //                 server.close();
    //                 return port;
    //             });
    //         } catch (error) {
    //             console.log('port: ' + port + ' is already in use');
    //             port++;
    //         }
    //         port++;
    //     }
    //     catch (err) {
    //         console.log('port: ' + port + ' is already in use');
    //         port++;
    //     }
    // }
}

let port = getPort();
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

        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:'+port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })