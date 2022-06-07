const express = require('express')
const app = express()
const port = 5000
app.set("view engine","ejs")

app.use(express.static('projeto-videos-time-2'))
app.use("/imagens",express.static("imagens"))
app.use("/js",express.static("js"))

app.get("/",(req, res) => {
    
    res.render(`indexAdm`,{titulo:"Alugue seu filme favorito!"})
    
})

app.get("/indexAdm",(req, res) => {
    
   res.render(`indexAdm`)
   
})
 
app.get("/cadastroAdm",(req, res) => {
    
   res.render(`cadastroAdm`)
   
})

app.get("/cadastroProduto",(req, res) => {
    
   res.render(`cadastroProduto`)
   
})

app.get("/loginAdm",(req, res) => {
    
   res.render(`loginAdm`)
   
})

app.get("/relatorio-chamada",(req, res) => {
    
   res.render(`relatorio-chamada`)
   
})

app.get("/relatorio",(req, res) => {
    
   res.render(`relatorio`)
   
})

app.listen(port,()=> console.log ("Servidor rodando com nodemon no servidor 5000"))

