async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "Ni28",
        password: "Nikolle6414#@!",
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

async function updatePromo(promo,id) {
    const conectado = await conecta()
    const values = [promo,id]
    //console.log(rows)
    return await conectado.query("UPDATE filmes set promo=? where filmes_id=?",values)
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
    console.log('Insert ok ')
    return rows
}

module.exports = {
    selectFilmes,
    selectSingle,
    updatePromo,
    selectPromo,
    insertCadastro
}