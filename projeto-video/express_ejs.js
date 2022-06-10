(async () => {
   const express = require('express')
   const app = express()
   const db = require("./db.js")
   const bodyParser = require("body-parser")
   const port = 8000
   const url = require ("url")
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('projeto-videos-time-2'))
app.use("/imagens",express.static("imagens"))
app.use("/js",express.static("js"))
app.use("/adm", express.static("adm"))

const consulta = await db.selectFilmes()
const updatePref = await db.updatePref()
const selectPref = await db.selectPref()

console.log(consulta[0])



app.get("/",(req, res) => {
    res.render(`index`,{
       titulo:"Alugue seu filme favorito!",
       filmes:consulta,
       pref:selectPref})
    
})

app.get("/index",(req, res) => {
   res.render(`index`,{
      titulo:"Alugue seu filme favorito!",
      filmes:consulta,
      pref:selectPref})
})
 
app.post("/cadastro",async (req,res)=>{
   const info = req.body
   await db.insertCadastro({
       nome:info.nomeContato,
       email:info.emailContato,
       telefone:info.telefoneContato,
       senha:info.senha,
       conf_senha:info.senhaC
   })      
   res.redirect('/index')
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
   filmes:consulta})
})

app.get("/promocao",async(req, res) => {
   const consultaPromo = await db.selectPromo()
   res.render(`promocao`,{
         filmes:consulta,
         galeria:consultaPromo})
   
})

app.get("/singleprefer",(req, res) => {
    
   res.render(`singleprefer`)
   
})

app.get("/atualiza-promo",async(req,res)=>{
         
   let infoUrl = req.url
   let urlProp = url.parse(infoUrl, true)
   let q = urlProp.query
   // let qs = url.parse(req.url,true).query
   await db.updatePromo(q.promo,q.id)//localhost:8080/atualiza-promo?promo=1&id=8
   res.send("<h2> Lista de promocoes atualizada </h2><a href='/promocao'>voltar</a>")
})


app.get("/upd-promo", (req, res) => {
   res.render(`adm/atualiza-promo`, {
       filmes: consulta,
       galeria: consulta
   })
})

app.get("/single",async(req, res) => {

   let infoUrl = req.url
   let urlProp = url.parse(infoUrl, true)
   let q = urlProp.query
   const consultaSingle = await db.selectSingle(q.id)
   await db.updatePref(q.id)
   res.render(`singleproduto`, {
         filmes: consulta,
         galeria: consultaSingle,
 
      })

   })

app.listen(port,()=> console.log ("Servidor rodando com nodemon no servidor 8000"))
})()

