const fs = require('fs')

fs.appendFile('log-users-1.txt',', arquivo para atualização',function (err){
    if (err) throw err
    console.log('Arquivo atualizado')
})