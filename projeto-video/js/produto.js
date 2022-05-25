let trailerArr=["https://www.youtube.com/embed/RxeD6EOoyYs","https://www.youtube.com/embed/2m1drlOZSDw","https://www.youtube.com/embed/wxN1T1uxQ2g",
"https://www.youtube.com/embed/_wUjoIp6v8o","https://www.youtube.com/embed/U2yDAZQL89s","https://www.youtube.com/embed/r0dSJpHUD1k"]

 let randfilmes=trailerArr[Math.floor(Math.random() * trailerArr.length)];
 console.log(randfilmes)

document.querySelector("#f1").innerHTML=randfilmes
