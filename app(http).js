const http = require('http');


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hey Aliyaan, congratulations on creating your first node server...!");
        res.end();
    }
})


server.listen(3000, () => {
    console.log("Listening on port 3000..!");
})