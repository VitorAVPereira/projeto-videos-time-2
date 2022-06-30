async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host: "localhost",

        user: "sareh",
        password: "SAr@1365",

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
104
    return rows
105
}
106
​
107
​
108
​
109
//////////////////////carrrinho
110
async function insertCarrinho(filmes) {
111
    const conectado = await conecta()
112
    const values = [filmes.titulo, filmes.qtd, filmes.ano, filmes.valor, filmes.filmes_id]
113
    const [rows] =
114
        await conectado.query("INSERT INTO carrinho (titulo,qtd,ano,valor,filmes_id)VALUES (?,?,?,?,?)", values)
115
}
116
async function selectCarrinho() {
117
    const conectado = await conecta()
118
    const [rows] = await conectado.query("SELECT * FROM carrinho ORDER BY carrinho_id DESC")
119
    return rows
120
}
121
​
122
async function deleteCarrinho(id) {
123
    const conectado = await conecta();
124
    const values = [id]
125
    return await conectado.query("DELETE FROM carrinho Where carrinho_id=?", values)
126
}
127
​
128
async function deleteallCarrinho() {
129
    const conectado = await conecta();
130
    return await conectado.query("TRUNCATE TABLE carrinho")
131
}
132
​
133
////////////
134
​
135
​
136
​
137
async function updateLoginAdm(adm,email) {
138
    const conectado = await conecta()
139
    const values = [adm,email]
140
    return await conectado.query("UPDATE usuario set adm=? where usuario_id=?",values)
141
}
142
​
143
async function selectLoginAdm(email,senha) {
144
    const conectado = await conecta()
145
    const values = [email,senha]
146
    const [rows] = await conectado.query("SELECT * FROM usuario Where email=? AND senha=? AND adm=1",values)
147
    return rows
148
}
149
​
150
async function insertCadastroAdm(usuario) {
151
    const conectado = await conecta()
152
    const values = [usuario.nome, usuario.email, usuario.senha, usuario.conf_senha]
153
    const [rows] =
154
    await conectado.query("INSERT INTO usuario (nome,email,senha,conf_senha,adm)VALUES (?,?,?,?,1)", values)
155
    return rows
156
}
157
async function selectRelatorioChamada(){
158
    const conectado = await conecta()
159
    const [rows] = await conectado.query("SELECT * FROM contato ORDER BY contato_id DESC")
160
    return rows
161
}
162
​
163
async function updateProduto(titulo,genero,ano,sinopse,classificacao,imagens,trailer,id) {
164
    const conectado = await conecta()
165
    const values = [titulo,genero,ano,sinopse,classificacao,imagens,trailer,id]
166
    return await conectado.query("UPDATE filmes set titulo=?,genero=?,ano=?,sinopse=?,classificacao=?,imagens=?,trailer=? Where filmes_id=?",values)
167
}
168
async function perfilDoUsuario(email){
169
    
170
    const conectado = await conecta()
171
    const values=[email]
172
    const [rows] = await conectado.query("SELECT nome,email,telefone,data_inicio,preferencia,usuario_id FROM usuario WHERE email=?",values)
173
    return rows
174
}
175
async function update_user(nome,telefone,preferencia,senha,conf_senha,id) {
176
    const conectado = await conecta()
177
    const values = [nome,telefone,preferencia,senha,conf_senha,id]
178
    return await conectado.query("UPDATE usuario SET nome=?,telefone=?,preferencia=?,senha=?,conf_senha=? WHERE usuario_id=?",values)
179
}
180
async function selectUsuario(email){
181
    const conectado = await conecta()
182
    const values = [email]
183
    const [rows] = await conectado.query("SELECT * FROM usuario where email=?",values)
184
    //console.log(rows)
185
    return rows
186
}
187
​
188
​
189
async function relatorioDoUsuario(){

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
    const [rows] = await conectado.query("SELECT nome,email,telefone,data_inicio,preferencia,usuario_id FROM usuario WHERE email=?",values)
    return rows
}
async function update_user(nome,telefone,preferencia,senha,conf_senha,id) {
    const conectado = await conecta()
    const values = [nome,telefone,preferencia,senha,conf_senha,id]
    return await conectado.query("UPDATE usuario SET nome=?,telefone=?,preferencia=?,senha=?,conf_senha=? WHERE usuario_id=?",values)
}
async function selectUsuario(email){
    const conectado = await conecta()
    const values = [email]
    const [rows] = await conectado.query("SELECT * FROM usuario where email=?",values)
    //console.log(rows)
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
    selectUsuario,
    update_user,
    perfilDoUsuario,
    relatorioDoUsuario
}

