const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./homepage.html')
const homeCss = readFileSync('./homepage.css')

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
     else if (url === '/homepage.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeCss);
        res.end();
    }
    else if (url === '/history'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>History</h1>')
        res.end()
    }
    else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)