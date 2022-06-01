http.createServer(function(req,res){
    fs.readFile('../index.html',function(err,data){
    if(err) throw err
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write(data)
    return res.end() 
})
}).listen(8080) 