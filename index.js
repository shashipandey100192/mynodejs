const http = require('http');
const myroot = http.createServer((req,res)=>{
    // res.write("welcome to nodejs");
    // res.end();
    if(req.url=='/')
        {
            res.write("welcome to node.js");
            res.end();
        }
    else if(req.url=='/about')
        {
            res.write("this is<h1> about page</h>");
            res.end();
        }
        else
        {
            res.write("page not found 404");
            res.end();
        }


})
myroot.listen(7000,()=>{

    console.log("server starting");
    // console.log(http);
    // console.log(myroot.requestTimeout);
})