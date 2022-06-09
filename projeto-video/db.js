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
    const [rows] = await conectado.query("SELECT titulo FROM filmes")
    // console.log(rows)
    return rows
}

// selectFilmes()

async function selectFilmes1(){
    const conectado1 = await conecta()
    const [rows] = await conectado1.query("SELECT titulo,sinopse FROM filmes")
    // console.log(rows)
    return rows
}

// selectFilmes1()

async function selectFilmes2(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT titulo,genero,ano,classificacao,sinopse FROM filmes")
    // console.log(rows)
    return rows
}

// selectFilmes2()
module.exports = {selectFilmes,selectFilmes1,selectFilmes2}
