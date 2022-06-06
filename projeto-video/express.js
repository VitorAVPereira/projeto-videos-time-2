const express = require('express')
const app = express()
const port = 5000

//Gera as url estáticas das imagens
app.use(express.static('node'))
app.use('/imagens',express.static('imagens'))

//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //res.end('<h1>Página Home</h1>')
    res.sendFile(`${__dirname}/html/index.html`)
})

app.get("/index",(req,res)=>{
   res.sendFile(`${__dirname}/html/index.html`)
})

app.get("/login",(req,res)=>{
    res.sendFile(`${__dirname}/html/login.html`)
})

app.get("/cadastro",(req,res)=>{
   res.sendFile(`${__dirname}/html/cadastro.html`)
})

app.get("/produto",(req,res)=>{
    res.sendFile(`${__dirname}/html/produto.html`)
 })

 app.get("/contato",(req,res)=>{
    res.sendFile(`${__dirname}/html/contato.html`)
 })

 app.get("/promocao",(req,res)=>{
    res.sendFile(`${__dirname}/html/promocao.html`)
 })

 app.get("/perfilDoUsuario",(req,res)=>{
    res.sendFile(`${__dirname}/html/perfilDoUsuario.html`)
 })

 app.get("/singleproduto",(req,res)=>{
    res.sendFile(`${__dirname}/html/singleproduto.html`)
 })

 app.get("/carrinho",(req,res)=>{
   res.sendFile(`${__dirname}/html/carrinho.html`)
})

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))