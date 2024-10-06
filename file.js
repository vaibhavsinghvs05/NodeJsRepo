// const fs = require('fs');

//  function file(filepath, data){
//     fs.writeFileSync(filepath, data);
//  }

//  module.exports = file;

// const msg = fs.readFileSync('./text.txt', 'utf-8', (err)=>{});
// const result = msg.match(/"PhoneNo."\s*:\s*(\d+)/);
// console.log(result[1]);

const http = require('http');
const { URL } = require('url');
const server = http.createServer((req, res)=>{
    // const myUrl = url.parse(req.url);
    // console.log(myUrl);
    // console.log(req.method);

    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    if(myUrl.pathname === '/favicon.ico'){ 
        res.writeHead(204);
        return res.end();
    }

    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('Request received');
    console.log(myUrl.searchParams.get('i'));
}).listen(8080);




