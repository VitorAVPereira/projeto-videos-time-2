async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Roque123$#@!",
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
    console.log('Insert ok ')
    return rows
}

//insertProduto({titulo:"teste",genero:"teste",ano:"2001",sinopse:"teste",classificacao:"teste",imagens:"teste",trailer:"teste"})

module.exports = {selectFilmes,selectSingle,insertProduto}