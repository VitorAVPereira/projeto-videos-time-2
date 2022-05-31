const fs = require('fs')

fs.writeFile('log-users.txt','Arquivo txt para criação',function(err){
    if(err) throw err
    console.log('Arquivo Criado')
})