async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mah123$#@!",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

// conecta()

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes ORDER BY filmes_id ASC")
    //console.log(rows)
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM filmes where filmes_id=?",values)
    //console.log(rows)
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
    //console.log(rows)
    return await conectado.query("UPDATE filmes set promo=? where filmes_id=?",values)
}

async function updatePref(id) {
    const conectado = await conecta()
    const values = [id]
    //console.log(rows)
    return await conectado.query("UPDATE filmes set pref=1 where filmes_id=?",values)
}

async function selectPref() {
    const conectado = await conecta()
    //console.log(rows)
    const [rows] = await conectado.query("SELECT * FROM filmes where pref=1 ORDER BY filmes_id asc")
    return rows
}

async function selectPromo() {
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM filmes where promo=1")
    //console.log(rows)
    return rows
}

async function insertCadastro(usuario) {
    const conectado = await conecta()
    const values = [usuario.nome, usuario.email, usuario.telefone, usuario.senha,usuario.conf_senha]
    const [rows] =
    await conectado.query("INSERT INTO usuario (nome,email,telefone,senha,conf_senha)VALUES (?,?,?,?,?)", values)
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
    console.log("Insert ok!")
    return rows
}

async function insertCarrinho(filmes) {
    const conectado = await conecta()
    const values = [filmes.titulo, filmes.qtd, filmes.ano, filmes.valor]
    const [rows] =
        await conectado.query("INSERT INTO carrinho (titulo,qtd,ano,valor)VALUES (?,?,?,?)", values)
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





module.exports = {
    selectFilmes,
    selectSingle,
    updatePromo,
    selectPromo,
    selectUsers,
    insertCadastro,
    updatePref,
    selectPref,
    insertProduto,
    insertContato,
    insertCarrinho,
    selectCarrinho,
    deleteCarrinho
}

