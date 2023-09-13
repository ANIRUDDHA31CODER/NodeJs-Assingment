const http=require('http')


const Server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.write('<h1>"I Am Happy To Learn Full Stack Web Development From PW Skills!"</h1>')
}
else{
    res.write('<h1>Error 4004</h1>')
}
res.end();
}
)
Server.listen(5252);
console.log("This server is running on port 5252");