const http = require('http');
const fs = require('fs');
const path = require('path');

const myport = 7000;
const myroot = http.createServer((req,res)=>{
    if(req.url==="/")
        {
        fs.readFile("./public/index.html",function(err,html){
            res.writeHead(250,{"Content-Type":"UTF-8"});
            res.end(html);
        })
    }
    else  if(req.url==="/about")
        {
        fs.readFile("./public/about.html",function(err,html){
            res.writeHead(250,{"Content-Type":"UTF-8"});
            res.end(html);
        })
    }
    else if(req.url.match("\.css$"))
        {
            var csspath = path.join(__dirname,'public',req.url);
            console.log(csspath);
            var readpath = fs.createReadStream(csspath,"UTF-8");
            res.writeHead(258,{"Content-Type":"text/css"});
           readpath.pipe(res);

        }
        else if(req.url.match("\.js$"))
            {
                var csspath = path.join(__dirname,'public',req.url);
                console.log(csspath);
                var readpath = fs.createReadStream(csspath,"UTF-8");
                res.writeHead(258,{"Content-Type":"text/js"});
               readpath.pipe(res);
            }
            else if(req.url.match("\.jpg$"))
                {
                    var csspath = path.join(__dirname,'public',req.url);
                    console.log(csspath);
                    var readpath = fs.createReadStream(csspath);
                    res.writeHead(258,{"Content-Type":"text/image"});
                   readpath.pipe(res);
                }
                else
                {
                    fs.readFile("./public/error.html",function(err,html){
                        res.writeHead(404,{"Content-Type":"UTF-8"});
                        res.end(html);
                    }) 
                }
            
        


})
myroot.listen(myport,()=>{
    console.log(`server starting ${myport}`);

})