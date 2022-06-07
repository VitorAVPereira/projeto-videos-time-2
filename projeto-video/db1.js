async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "v19",
        password: "Sendokai123$",
        database:"projeto_video"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

// conecta()

async function selectFilmes1(){
    const conectado1 = await conecta()
    const [rows] = await conectado1.query("SELECT titulo,sinopse FROM filmes")
    return rows
}

module.exports = {selectFilmes1}

