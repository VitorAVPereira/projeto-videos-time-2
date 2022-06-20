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
// const selectPref = await db.selectPref()

console.log(consulta[0])



app.get("/",async(req, res) => {
   const selectPref = await db.selectPref()
    res.render(`index`,{
       titulo:"Alugue seu filme favorito!",
       filmes:consulta,
       pref:selectPref})
    
})

app.get("/index",async(req, res) => {
   const selectPref = await db.selectPref()
   res.render(`index`,{
      titulo:"Alugue seu filme favorito!",
      filmes:consulta,
      pref:selectPref})
})
 
app.get("/cadastro",async(req, res) => {   
   res.render(`cadastro`,{
   titulo:"Cadastre-se em nosso site!",
   })
   
})

app.post("/cadastro",async (req,res)=>{
   const info = req.body
   await db.insertCadastro({
       nome:info.nomeContato,
       email:info.emailContato,
       telefone:info.telefoneContato,
       senha:info.senha,
       conf_senha:info.conf_senha
   })      
   res.redirect('/index')
})


 
app.get("/carrinho",async(req, res) => {
   const consultaCarrinho = await db.selectCarrinho()
      res.render(`carrinho`,{
      titulo:"Garanta já a sua sessão!",
      carrinho:consultaCarrinho
   })
   })
   app.post("/carrinho",async(req,res)=>{
      const info = req.body
      await db.insertCarrinho({
         titulo:info.titulo,
         qtd: info.qtd,
         ano: info.ano,
         valor:info.valor,
         filmes_id: info.filmes_id
   
      })
      res.send(req.body)
   })  
   app.post("/delete-carrinho",async(req,res)=>{
      const info = req.body
      await db.deleteCarrinho(info.id)
      res.send(info)
   })

   
   
app.get("/contato",async(req,res)=>{
   let infoUrl = req.url
   let urlProp = url.parse(infoUrl,true)
   let q = urlProp.query
  const consultaContato = await db.selectSingle(q.id)
  const consultaInit = await db.selectSingle(4)
  res.render(`contato`,{
      titulo:"A gente quer te ouvir",
      filmes:consulta,
      galeria: consultaInit
  })
})

app.post("/contato",async(req,res)=>{
   const info=req.body
   await db.insertContato({
   nome:info.nomeContato,
   email:info.emailContato,
   telefone:info.telefoneContato,
   assunto:info.assuntoContato,
   comentarios:info.comentarios
})
   res.redirect("/index")
})


app.get("/login",(req, res) => {
    
   res.render(`login`,{
   titulo:"Vamos começar? Entre no nosso site aqui",
   })
   
})

app.post("/login", async (req, res) => {
   let info = req.body
   let consultaUsers = await db.selectUsers(info.email, info.senha)
   consultaUsers == "" ? res.send("Usuário não encontrado!") : res.redirect("/")
   const s = req.session
   consultaUsers != "" ? s.nome=info.nome : null
})

app.get("/perfilDoUsuario",(req, res) => {
    
   res.render(`perfilDoUsuario`,{
   titulo:"Sua sessão, suas regras!",
   })
   
})

app.get("/produto",(req, res) => {
    
   res.render(`produto`,{
   titulo:"Tem tudo para todas as idades",
   filmes:consulta})
})

app.get("/singleprefer",(req, res) => {
    
   res.render(`singleprefer`,{
   titulo:"Seus preferidos estão aqui!",
   })
   
})


app.get("/addProduto",(req, res) => {
    
   res.render(`addProduto`)
   
})  

app.get("/promocao",async(req, res) => {
   const consultaPromo = await db.selectPromo()
   res.render(`promocao`,{
         titulo:"É promoção que você quer?!",
         filmes:consulta,
         galeria:consultaPromo})
   
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
         titulo:"Tem tudo pra todas as idades!",
         filmes: consulta,
         galeria: consultaSingle,
 
      })
   })
   app.post("/singleproduto",async(req,res)=>{
      const info = req.body
       await db.insertCarrinho({
         qtd: info.qtdTelas
      })
      res.redirect("/carrinho")
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

