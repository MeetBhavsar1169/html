
const http= require('http')
const fs= require('fs')
const read=fs.readFileSync('payment.html')
const server = http.createServer((req,res)=>{

        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.end(read)
    }
)
server.listen(8000,'127.0.0.1',()=>{
   console.log("lsitening to port 8000")  
})