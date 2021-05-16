import * as http from 'http';
import {UAHRates} from './exchange-rates';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/rates/UAH') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify(UAHRates));

        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
