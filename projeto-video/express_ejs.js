const express = require('express')
const app = express()
const port = 8000
app.set("view engine","ejs")

app.use(express.static('projeto-videos-time-2'))
app.use("/imagens",express.static("imagens"))


app.get("/",(req, res) => {
    
    res.render(`index`,{titulo:"Alugue seu filme favorito!"})
    
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
 

app.listen(port,()=> console.log ("Servidor rodando com nodemon "))

