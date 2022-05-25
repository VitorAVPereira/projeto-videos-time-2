


let trailerArr=["https://www.youtube.com/embed/RxeD6EOoyYs","https://www.youtube.com/embed/2m1drlOZSDw","https://www.youtube.com/embed/wxN1T1uxQ2g",
"https://www.youtube.com/embed/_wUjoIp6v8o",
"https://www.youtube.com/embed/wAmkU6FEKUw","https://www.youtube.com/embed/U2yDAZQL89s","https://www.youtube.com/embed/r0dSJpHUD1k","https://www.youtube.com/embed/w1dIkYegWuQ","https://www.youtube.com/embed/KPND6SgkN7Q"]






function carregarImagem() {
    let randfilmes=trailerArr[Math.floor(Math.random() * trailerArr.length)];
    console.log(randfilmes)
    var imagem = document.getElementById("fml")
    imagem.src = randfilmes
  }
  function carregarImagem1() {
    let randfilmes=trailerArr[Math.floor(Math.random() * trailerArr.length)];
    console.log(randfilmes)
    var imagem = document.getElementById("fml1")
    imagem.src = randfilmes
  }
  function carregarImagem2() {
    let randfilmes=trailerArr[Math.floor(Math.random() * trailerArr.length)];
    console.log(randfilmes)
    var imagem = document.getElementById("fml2")
    imagem.src = randfilmes
  }

  carregarImagem()
  carregarImagem1()
  carregarImagem2()


