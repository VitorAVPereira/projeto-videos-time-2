const fs = require('fs')

fs.unlink('log-users-1.txt',function(err){
    if (err) throw err
    console.log('Arquivo excluído com sucesso')
})