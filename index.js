const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url);

    res.write('<h1>Salam Alaykum 21</h1>')
    res.end();
})

server.listen(3000, ()=> {
    console.log("server is working on 3000 PORT");
    
})