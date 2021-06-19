//modules
const { ESRCH } = require('constants');
const fs = require('fs');
const http = require('http');
const path = require('path');


const app = http.createServer((req, res)=>{
    res.writeHead(200, {
      'Content-Type': 'text/html'  
    })
    fs.readFile(path.join(__dirname, 'dot', 'index.html'), (err, content)=>{
        if(err){
            res.writeHead(500)
            res.end('Error Found')
        }else{
            res.writeHead(200, {
                'Content-Type':'text/html'
            });
        }
        res.end(content)
    })
        // Checking error 
        fs.readFile(path.join(__dirname, 'dot','error.html'), (err, data)=>{
            if(err){
                res.writeHead(500)
                res.end('Error Found.')
            }else{
                res.writeHead(404,{
                    'Content-Type' : 'text/html'
                })
                res.end(data);
            }
        })
        })

 const PORT = process.env.PORT || 5000;

 app.listen(PORT, ()=>{
     console.log(`Server is Running at Prot ${PORT}`)
 })   