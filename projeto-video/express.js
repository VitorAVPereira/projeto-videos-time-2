const express = require('express')
const app = express()
const port = 3000

//Gera as url estáticas das imagens
app.use(express.static('node'))
app.use('/imagens',express.static('imagens'))

//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //res.end('<h1>Página Home</h1>')
    res.sendFile(`${__dirname}/raiz/index.html`)
})

app.get("/index.html",(req,res)=>{
   res.sendFile(`${__dirname}/raiz/index.html`)
})

app.get("/login.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/login.html`)
})

app.get("/cadastro.html",(req,res)=>{
   res.sendFile(`${__dirname}/raiz/cadastro.html`)
})

app.get("/produto.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/produto.html`)
 })

 app.get("/contato.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/contato.html`)
 })

 app.get("/promocao.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/promocao.html`)
 })

 app.get("/perfilDoUsuario.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/perfilDoUsuario.html`)
 })

 app.get("/singleproduto.html",(req,res)=>{
    res.sendFile(`${__dirname}/raiz/singleproduto.html`)
 })

 app.get("/carrinho.html",(req,res)=>{
   res.sendFile(`${__dirname}/raiz/carrinho.html`)
})

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))