(async () => {
   const session = require ("express-session")
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


app.locals.idProd=''


const options ={
   expiration: 10800000,
   createDatabaseTable: true,
   schema: {
       tableName: 'session_tbl',
       columnNames: {
           session_id: 'session_id',
           expires: 'expires',
           data: 'data'
       }
   }  
}

await db.makeSession(app,options,session)


function checkFirst(req, res, next) {
   if (!req.session.userInfo) {
     res.redirect('/promocao');
   } else {
     next();
   }
 }

function checkAuth(req, res, next) {
   if (!req.session.userInfo) {
     res.send('Você não está autorizado para acessar esta página');
   } else {
     next();
   }
 }



var userInfo=''
app.locals.info = {
user:userInfo
}

const consulta = await db.selectFilmes()
const updatePref = await db.updatePref()
// const selectPref = await db.selectPref()


app.get("/login",(req, res) => {
   res.render('login',{
      titulo:"Alugue seu filme favorito!"
   })
})

app.use('/logout', function (req, res) {
   req.app.locals.info = {}
   req.session.destroy()
   res.clearCookie('connect.sid', { path: '/' });
   res.redirect("/login") 

})

app.post("/login", async (req,res)=>{
   const {email,senha} = req.body
   const logado = await db.selectUsers(email,senha)
   if(logado != ""){
   req.session.userInfo = email
   userInfo = req.session.userInfo
   req.app.locals.info.user= userInfo
   res.redirect('/')
   } else {res.send("<h2>Login ou senha não conferem</h2>")}
})

app.get("/",checkFirst,async(req, res) => {
   const selectPref = await db.selectPref()
   res.cookie({ sameSite: 'none', secure: true });
    res.render(`index`,{
       titulo:"Alugue seu filme favorito!",
       filmes:consulta,
       pref:selectPref
       })
    
})

app.get("/index",checkFirst,async(req, res) => {
   const selectPref = await db.selectPref()
   res.render(`index`,{
      titulo:"Alugue seu filme favorito!",
      filmes:consulta,
      pref:selectPref,
      })
})


app.get("/cadastro",async(req, res) => {
    
   res.render(`cadastro`)
   
})

app.post("/cadastro",async (req,res)=>{
   const info = req.body
   await db.insertCadastro({
       nome:info.nomeContato,
       email:info.emailContato,
       telefone:info.telefoneContato,
       preferencia:info.preferenciaContato,
       senha:info.senha,
       conf_senha:info.conf_senha
   })      
   res.redirect('/index')
})


 
app.get("/carrinho",checkAuth,async(req, res) => {
   const consultaCarrinho = await db.selectCarrinho()
      res.render(`carrinho`,{
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
         filmes_id:info.filmes_id
   
      })
      res.send(req.body)
   })  

   app.post("/delete-carrinho",async(req,res)=>{
      const info = req.body
      await db.deleteCarrinho(info.id)
      res.send(info)
   })

   app.post("/delete-carrinhoall",async(req,res)=>{
      const info = req.body
      await db.deleteallCarrinho(info)
      res.send(info)
   })

   
   
app.get("/contato",async(req,res)=>{
   let infoUrl = req.url
   let urlProp = url.parse(infoUrl,true)
   let q = urlProp.query
  const consultaContato = await db.selectSingle(q.id)
  const consultaInit = await db.selectSingle(4)
  res.render(`contato`,{
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
   res.redirect("/contatoOk")
})



app.get("/perfilDoUsuario",checkAuth,async(req, res) => {
    
   let infoUrl = req.url
   let urlProp = url.parse(infoUrl, true)
   let q = urlProp.query
   const perfil = await db.perfilDoUsuario( req.app.locals.info.user)
   res.render(`perfilDoUsuario`,{
   user:perfil
   })
   
})

app.get("/relatorio-usuario",async(req, res) => {
    
   const perfil = await db.relatorioDoUsuario()
   res.render(`adm/relatorio-usuario`,{
   user: perfil
   })
   
})
app.get("/atualiza_usuario",async(req, res) => {
 
   const perfil= await db.selectUsuario(req.app.locals.info.user)  
   res.render('atualiza_usuario',{
      email:req.app.locals.info.user,
       user:perfil
       
   })
})

app.post("/atualiza_usuario",(req, res) => { 
   req.app.locals.info.user = req.body.email
   res.send('usuario Exibido com Sucesso')
})
app.post("/update_user",async(req, res) => { 
   

   const b = req.body

   await db.update_user(
     b.nome,
     b.telefone,
     b.preferencia,
     b.senha,
     b.conf_senha,b.id)
   res.send('usuario Atualizado com Sucesso')
})


app.get("/produto",(req, res) => {
    
   res.render(`produto`,{
   filmes:consulta})
})

app.get("/singleprefer",(req, res) => {
    
   res.render(`singleprefer`)
   
})

// ==========================ADM===============================

app.get("/addProduto",(req, res) => {
    
   res.render(`adm/addProduto`)
   
})  

app.get("/promocao",async(req, res) => {
   const consultaPromo = await db.selectPromo()
   res.render(`promocao`,{
         filmes:consulta,
         galeria:consultaPromo})
   
})
app.get("/cupom",async(req, res) => {
    
   res.render(`cupom`)
   
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

app.get("/relatorio-produto", async (req, res) => {
   const selectFilmes = await db.selectFilmes() 
   res.render(`adm/relatorio-produto`,{
   titulo:"Alugue seu filme favorito!",
   filmes: selectFilmes,
 
   })
})




//teste tab panel na indexAdm

app.get("/indexAdm", async (req, res) => {
   const selectFilmes = await db.selectFilmes() 
   res.render(`adm/indexAdm`,{
   titulo:"Alugue seu filme favorito!",
   filmes: selectFilmes,
 
   })
})


app.get("/indexAdm",async (req, res) => {
   const consultaChamada = await db.selectRelatorioChamada()
      res.render(`adm/indexAdm`,{
      chamada: consultaChamada,
   })
   })

//teste tab panel na indexAdm




app.get("/atualiza_produtos",async(req, res) => {
   const produto = await db.selectSingle(req.app.locals.idProd)  
   res.render('adm/atualiza_produtos',{
       galeria:consulta,
       id:req.app.locals.idProd,
       produtoDaVez:produto

   })
})

app.post("/atualiza_produtos",(req, res) => { 
   req.app.locals.idProd = req.body.id
   res.send('Produto Exibido com Sucesso')
})

app.post("/atualiza-filme",async(req, res) => { 
   //titulo,genero,ano,classificacao,imagens,trailer,id
   const b = req.body
   await db.updateProduto(b.titulo,b.genero,b.ano,b.sinopse,b.classificacao,b.imagens,b.trailer,b.id)
   res.send('Produto Atualizado com Sucesso')
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

   //Adm Login 

   app.get("/loginAdm",async(req, res) => {
      const consultaPromo = await db.selectLoginAdm()
      res.render(`adm/loginAdm`,{
            filmes:consulta,
            galeria:consultaPromo})
      
   })

   app.post("/loginAdm", async (req, res) => {
      const {email,senha} = req.body
      let consultaUsers = await db.selectLoginAdm(email,senha)
      if(consultaUsers != ""){
         req.session.userInfo = email
         userInfo = req.session.userInfo
         req.app.locals.info.user= userInfo
         res.redirect('indexAdm')
         } else {res.send("<h2>Acesso de Adm negado</h2>")}
      })


   app.use('/logoutAdm', function (req, res) {
         req.app.locals.info = {}
         req.session.destroy()
         res.clearCookie('connect.sid', { path: '/' });
         res.redirect("loginAdm") 

      })

   app.get("/",(req, res) => {
    
      res.render(`adm/indexAdm`,{titulo:"Alugue seu filme favorito!"})
      
  })
  
  app.get("/indexAdm",(req, res) => {
      
     res.render(`adm/indexAdm`)
     
  })
   
  app.get("/cadastroAdm",(req, res) => {
      
     res.render(`adm/cadastroAdm`)
     
  })

  app.post("/cadastroAdm", async (req, res) => {
   const info=req.body
   await db.insertCadastroAdm({
     nome:info.nomeContato,
     email:info.emailContato,
     senha:info.senha,
     conf_senha:info.senhaC
   })
   res.redirect("adm/indexAdm")
})
  
  app.get("/cadastroProduto",(req, res) => {
      
     res.render(`adm/cadastroProduto`)
     
  })

  
  
  app.get("/contatoOk",(req, res) => {
    
   res.render(`contatoOk`,{
   filmes:consulta})
})

  
  app.get("/relatorio",(req, res) => {
      
     res.render(`adm/relatorio`)
     
  })
  app.get("/relatorio-chamada",async(req, res) => {
   const consultaChamada = await db.selectRelatorioChamada()
      res.render(`adm/relatorio-chamada`,{
      titulo:"Garanta já a sua sessão!",
      chamada:consultaChamada
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
