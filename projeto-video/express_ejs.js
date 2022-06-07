(async () => {
   const express = require('express')
   const app = express()
   const db = require("./db.js")
   const port = 8000
app.set("view engine","ejs")

app.use(express.static('projeto-videos-time-2'))
app.use("/imagens",express.static("imagens"))
app.use("/js",express.static("js"))

const consulta = await db.selectFilmes()
const consulta1 = await db.selectFilmes1()
console.log(consulta[0])

app.get("/",(req, res) => {
    
    res.render(`index`,{
       titulo:"Alugue seu filme favorito!",
       filmes:consulta})
    
})

app.get("/index",(req, res) => {
    
   res.render(`index`,{
      titulo:"Alugue seu filme favorito!",
      filmes:consulta})
   
})
 
app.get("/cadastro",(req, res) => {
    
   res.render(`cadastro`)
   
})
 
app.get("/carrinho",(req, res) => {
    
   res.render(`carrinho`)
   
})

app.get("/contato",(req, res) => {
    
   res.render(`contato`)
   
})

app.get("/login",(req, res) => {
    
   res.render(`login`)
   
})

app.get("/perfilDoUsuario",(req, res) => {
    
   res.render(`perfilDoUsuario`)
   
})

app.get("/produto",(req, res) => {
    
   res.render(`produto`,{
   filmes: consulta1})
})

app.get("/promocao",(req, res) => {
    
   res.render(`promocao`)
   
})

app.get("/singleprefer",(req, res) => {
    
   res.render(`singleprefer`)
   
})

app.get("/singleproduto",(req, res) => {
    
   res.render(`singleproduto`)
   
})

app.listen(port,()=> console.log ("Servidor rodando com nodemon no servidor 8000"))
})()

