async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",

        user: "root",
        password: "86545324Gato.",

        database:"projeto_video"
    })
    global.connection = conn
    return connection
}

const { builtinModules } = require("module")
const { getMaxListeners } = require("process")
const session = require("express-session")
const mysqlSession = require("express-mysql-session")(session)

// conecta()


async function makeSession(app,opt){
    
    const dia = 1000 * 60 * 60 * 24;
    const min15 = 1000 * 60 * 60 / 4;
    const conectado = await conecta()

    const  sessionStore = new mysqlSession(opt,conectado)
    app.use(session({
        secret: "hrgfgrfrty84fwir767",
        saveUninitialized:true,
        store:sessionStore,
        cookie: { maxAge: dia},
        resave: false 
    }))

}

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes ORDER BY filmes_id ASC")
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM filmes where filmes_id=?",values)
    return rows
}


async function insertProduto(filmes) {
    const conectado = await conecta()
    const values = [filmes.titulo, filmes.genero, filmes.ano, filmes.sinopse, filmes.classificacao, filmes.imagens, filmes.trailer]
    const [rows] =
        await conectado.query("INSERT INTO filmes (titulo,genero,ano,sinopse,classificacao,imagens,trailer)VALUES (?,?,?,?,?,?,?)", values)
    }

async function updatePromo(promo,id) {
    const conectado = await conecta()
    const values = [promo,id]
    return await conectado.query("UPDATE filmes set promo=? where filmes_id=?",values)
}

async function updatePref(id) {
    const conectado = await conecta()
    const values = [id]
    return await conectado.query("UPDATE filmes set pref=1 where filmes_id=?",values)
}

async function selectPref() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes where pref=1 ORDER BY filmes_id asc")
    return rows
}

async function selectPromo() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes where promo=1")
    return rows
}

async function insertCadastro(usuario) {
    const conectado = await conecta()
    const values = [usuario.nome, usuario.email, usuario.telefone, usuario.preferencia, usuario.senha,usuario.conf_senha]
    const [rows] =
    await conectado.query("INSERT INTO usuario (nome,email,telefone,preferencia,senha,conf_senha)VALUES (?,?,?,?,?,?)", values)
    return rows
}

async function selectUsers(email,senha) {
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario Where email=? AND senha=?", values)
    return rows
}
async function insertContato(contato){
    const conectado = await conecta() 
    const values = [contato.nome,contato.email,contato.telefone,contato.assunto,contato.comentarios]
    const [rows] = 
    await conectado.query("INSERT INTO contato(nome,email,telefone,assunto,comentarios) VALUES (?,?,?,?,?)",values)  
    return rows
}



//////////////////////carrrinho
async function insertCarrinho(filmes) {
    const conectado = await conecta()
    const values = [filmes.titulo, filmes.qtd, filmes.ano, filmes.valor, filmes.filmes_id]
    const [rows] =
        await conectado.query("INSERT INTO carrinho (titulo,qtd,ano,valor,filmes_id)VALUES (?,?,?,?,?)", values)
}
async function selectCarrinho() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM carrinho ORDER BY carrinho_id DESC")
    return rows
}

async function deleteCarrinho(id) {
    const conectado = await conecta();
    const values = [id]
    return await conectado.query("DELETE FROM carrinho Where carrinho_id=?", values)
}

async function deleteallCarrinho() {
    const conectado = await conecta();
    return await conectado.query("TRUNCATE TABLE carrinho")
}

////////////



async function updateLoginAdm(adm,email) {
    const conectado = await conecta()
    const values = [adm,email]
    return await conectado.query("UPDATE usuario set adm=? where usuario_id=?",values)
}

async function selectLoginAdm(email,senha) {
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario Where email=? AND senha=? AND adm=1",values)
    return rows
}

async function insertCadastroAdm(usuario) {
    const conectado = await conecta()
    const values = [usuario.nome, usuario.email, usuario.senha, usuario.conf_senha]
    const [rows] =
    await conectado.query("INSERT INTO usuario (nome,email,senha,conf_senha,adm)VALUES (?,?,?,?,1)", values)
    return rows
}
async function selectRelatorioChamada(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM contato ORDER BY contato_id DESC")
    return rows
}

async function updateProduto(titulo,genero,ano,sinopse,classificacao,imagens,trailer,id) {
    const conectado = await conecta()
    const values = [titulo,genero,ano,sinopse,classificacao,imagens,trailer,id]
    return await conectado.query("UPDATE filmes set titulo=?,genero=?,ano=?,sinopse=?,classificacao=?,imagens=?,trailer=? Where filmes_id=?",values)
}
async function perfilDoUsuario(email){
    
    const conectado = await conecta()
    const values=[email]
    const [rows] = await conectado.query("SELECT nome,email,telefone,data_inicio,preferencia FROM usuario WHERE email=?",values)
    return rows
}

async function relatorioDoUsuario(){
    
    const conectado = await conecta()
    const values=[]
    const [rows] = await conectado.query("SELECT * FROM usuario",values)
    return rows
}


module.exports = {
    selectFilmes,
    selectSingle,
    selectLoginAdm,
    updatePromo,
    updateLoginAdm,
    selectPromo,
    selectUsers,
    insertCadastro,
    updatePref,
    updateProduto,
    selectPref,
    insertProduto,
    insertContato,
    insertCarrinho,
    insertCadastroAdm,
    selectCarrinho,
    deleteCarrinho,
    makeSession,
    selectRelatorioChamada,
    deleteallCarrinho,
    perfilDoUsuario,
    relatorioDoUsuario
    
}



async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",

        user: "root",
        password: "86545324Gato.",

        database:"projeto_video"
    })
    global.connection = conn
    return connection
}

const { builtinModules } = require("module")
const { getMaxListeners } = require("process")
const session = require("express-session")
const mysqlSession = require("express-mysql-session")(session)

// conecta()


async function makeSession(app,opt){
    
    const dia = 1000 * 60 * 60 * 24;
    const min15 = 1000 * 60 * 60 / 4;
    const conectado = await conecta()

    const  sessionStore = new mysqlSession(opt,conectado)
    app.use(session({
        secret: "hrgfgrfrty84fwir767",
        saveUninitialized:true,
        store:sessionStore,
        cookie: { maxAge: dia},
        resave: false 
    }))

}

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes ORDER BY filmes_id ASC")
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM filmes where filmes_id=?",values)
    return rows
}


async function insertProduto(filmes) {
    const conectado = await conecta()
    const values = [filmes.titulo, filmes.genero, filmes.ano, filmes.sinopse, filmes.classificacao, filmes.imagens, filmes.trailer]
    const [rows] =
        await conectado.query("INSERT INTO filmes (titulo,genero,ano,sinopse,classificacao,imagens,trailer)VALUES (?,?,?,?,?,?,?)", values)
    }

async function updatePromo(promo,id) {
    const conectado = await conecta()
    const values = [promo,id]
    return await conectado.query("UPDATE filmes set promo=? where filmes_id=?",values)
}

async function updatePref(id) {
    const conectado = await conecta()
    const values = [id]
    return await conectado.query("UPDATE filmes set pref=1 where filmes_id=?",values)
}

async function selectPref() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes where pref=1 ORDER BY filmes_id asc")
    return rows
}

async function selectPromo() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes where promo=1")
    return rows
}

async function insertCadastro(usuario) {
    const conectado = await conecta()
    const values = [usuario.nome, usuario.email, usuario.telefone, usuario.preferencia, usuario.senha,usuario.conf_senha]
    const [rows] =
    await conectado.query("INSERT INTO usuario (nome,email,telefone,preferencia,senha,conf_senha)VALUES (?,?,?,?,?,?)", values)
    return rows
}

async function selectUsers(email,senha) {
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario Where email=? AND senha=?", values)
    return rows
}
async function insertContato(contato){
    const conectado = await conecta() 
    const values = [contato.nome,contato.email,contato.telefone,contato.assunto,contato.comentarios]
    const [rows] = 
    await conectado.query("INSERT INTO contato(nome,email,telefone,assunto,comentarios) VALUES (?,?,?,?,?)",values)  
    return rows
}



//////////////////////carrrinho
async function insertCarrinho(filmes) {
    const conectado = await conecta()
    const values = [filmes.titulo, filmes.qtd, filmes.ano, filmes.valor, filmes.filmes_id]
    const [rows] =
        await conectado.query("INSERT INTO carrinho (titulo,qtd,ano,valor,filmes_id)VALUES (?,?,?,?,?)", values)
}
async function selectCarrinho() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM carrinho ORDER BY carrinho_id DESC")
    return rows
}

async function deleteCarrinho(id) {
    const conectado = await conecta();
    const values = [id]
    return await conectado.query("DELETE FROM carrinho Where carrinho_id=?", values)
}

async function deleteallCarrinho() {
    const conectado = await conecta();
    return await conectado.query("TRUNCATE TABLE carrinho")
}

////////////



async function updateLoginAdm(adm,email) {
    const conectado = await conecta()
    const values = [adm,email]
    return await conectado.query("UPDATE usuario set adm=? where usuario_id=?",values)
}

async function selectLoginAdm(email,senha) {
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuario Where email=? AND senha=? AND adm=1",values)
    return rows
}

async function insertCadastroAdm(usuario) {
    const conectado = await conecta()
    const values = [usuario.nome, usuario.email, usuario.senha, usuario.conf_senha]
    const [rows] =
    await conectado.query("INSERT INTO usuario (nome,email,senha,conf_senha,adm)VALUES (?,?,?,?,1)", values)
    return rows
}
async function selectRelatorioChamada(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM contato ORDER BY contato_id DESC")
    return rows
}

async function updateProduto(titulo,genero,ano,sinopse,classificacao,imagens,trailer,id) {
    const conectado = await conecta()
    const values = [titulo,genero,ano,sinopse,classificacao,imagens,trailer,id]
    return await conectado.query("UPDATE filmes set titulo=?,genero=?,ano=?,sinopse=?,classificacao=?,imagens=?,trailer=? Where filmes_id=?",values)
}
async function perfilDoUsuario(email){
    
    const conectado = await conecta()
    const values=[email]
    const [rows] = await conectado.query("SELECT nome,email,telefone,data_inicio,preferencia FROM usuario WHERE email=?",values)
    return rows
}

async function relatorioDoUsuario(){
    
    const conectado = await conecta()
    const values=[]
    const [rows] = await conectado.query("SELECT * FROM usuario",values)
    return rows
}


module.exports = {
    selectFilmes,
    selectSingle,
    selectLoginAdm,
    updatePromo,
    updateLoginAdm,
    selectPromo,
    selectUsers,
    insertCadastro,
    updatePref,
    updateProduto,
    selectPref,
    insertProduto,
    insertContato,
    insertCarrinho,
    insertCadastroAdm,
    selectCarrinho,
    deleteCarrinho,
    makeSession,
    selectRelatorioChamada,
    deleteallCarrinho,
    perfilDoUsuario,
    relatorioDoUsuario
    
}


