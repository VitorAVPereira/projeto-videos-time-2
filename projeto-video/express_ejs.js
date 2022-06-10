(async () => {
   const express = require('express')
   const app = express()
   const db = require("./db.js")
   const port = 8000
   const url = require ("url")
 
   const bodyParser = require ("body-parser")

   app.use(bodyParser.urlencoded({extended:false}))
   app.use(bodyParser.json())

app.set("view engine","ejs")

app.use(express.static('projeto-videos-time-2'))
app.use("/imagens",express.static("imagens"))
app.use("/js",express.static("js"))

const consulta = await db.selectFilmes()
console.log(consulta[0])


app.get("/",(req, res) => {
    
    res.render(`index`,{
       titulo:"Alugue seu filme favorito!",
       filmes:consulta,
       galeria:consulta})
    
})

app.get("/index",(req, res) => {
    
   res.render(`index`,{
      titulo:"Alugue seu filme favorito!",
      filmes:consulta,
      galeria:consulta})
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

app.get("/promocao",(req, res) => {
    
   res.render(`promocao`),{
      promo:consulta
   }
   
})

app.get("/singleprefer",(req, res) => {
    
   res.render(`singleprefer`)
   
})

app.get("/addProduto",(req, res) => {
    
   res.render(`addProduto`)
   
})

app.post("/addProduto", async (req, res) => {
   const info=req.body
   await db.insertProduto({
      titulo:info.cad_titulo,
      genero:info.cad_genero,
      ano:info.cad_ano,
      sinopse:info.cad_sinopse,
      classificacao:info.cad_class,
      imagens:info.cad_img,
      trailer:info.cad_trailer
   })
   res.redirect("/promocao")
})

app.get("/single",async(req, res) => {

   let infoUrl = req.url
   let urlProp = url.parse(infoUrl, true)
   let q = urlProp.query
   const consultaSingle = await db.selectSingle(q.id)
   // const consultaInit = await db.selectSingle(7)
   res.render(`singleproduto`, {
         filmes: consulta,
         galeria: consultaSingle,
         // init: consultaInit
 
      })

   })
// app.get("/singleproduto",async(req,res)=>{
//    let infoUrl = req.url
//    let urlProp = url.parse(infoUrl, true)
//    let q = urlProp.query
//    const consultaSingle = await db.selectSingle(q.id)
//    const consultaInit = await db.selectSingle(7)
//    res.render(`singleproduto`, {
//        filmes: consulta,
//        galeria: consultaSingle,
//        init: consultaInit
//    })
// })

app.listen(port,()=> console.log ("Servidor rodando com nodemon no servidor 8000"))
})()

