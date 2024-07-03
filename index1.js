const http = require('http');
const fs = require('fs');
const myroot = http.createServer((req,res)=>{
    if(req.url==='/')
        {
        fs.readFile("./public/index.html",(req,xyz)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(xyz); 
            res.end(); 
        })
    }
    else if(req.url==='/contact')
        {
        fs.readFile("./public/contact.html",(req,xyz)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(xyz); 
            res.end(); 
        })
    }
    else
    {
        fs.readFile("./public/error.html",(req,xyz)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(xyz); 
            res.end(); 
        })

    }


})
myroot.listen(7000,()=>{

    console.log("server starting");
    // console.log(http);
    // console.log(myroot.requestTimeout);
})