var filmes = [
    ["Doutor Estranho no Multiverso Da Loucura", "filme.jpeg","O aguardado filme trata da jornada do Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário.","Ano: 2011","Categoria: Ação, Aventura, Ficção científica","Classificação Indicativa:"],

    ["Capitão América: O Primeiro Vingador", "filme1.jpeg","2ª Guerra Mundial. Steve Rogers (Chris Evans) é um jovem que aceitou ser voluntário em uma série de experiências que visam criar o supersoldado americano. Os militares conseguem transformá-lo em uma arma humana, mas logo percebem que o supersoldado é valioso demais para pôr em risco na luta contra os nazistas.","Ano: 2012","Categoria: Ação, Aventura, Ficção científica","Classificação Indicativa:"],

    ["Os Vingadores", "filme2.jpeg","Loki (Tom Hiddleston) retorna à Terra enviado pelos chitauri, uma raça alienígena que pretende dominar os humanos. Com a promessa de que será o soberano do planeta, ele rouba o cubo cósmico dentro de instalações da S.H.I.E.L.D. e, com isso, adquire grandes poderes.","Ano:  2016","Categoria: Ação","Classificação Indicativa:"],

    ["Capitão América: Guerra Civil", "filme3.jpeg","Em Capitão América: Guerra Civil, Steve Rogers (Chris Evans) é o atual líder dos Vingadores, super-grupo de heróis formado por Viúva Negra (Scarlett Johansson), Feiticeira Escarlate (Elizabeth Olsen), Visão (Paul Bettany), Falcão (Anthony Mackie) e Máquina de Combate (Don Cheadle).","Ano: 2016","Categoria: Ação","Classificação Indicativa:"],

    ["Doutor Estranho", "filme4.jpeg","Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas.","Ano: 2019","Categoria: Ação/ Aventura","Classificação Indicativa:"],

    ["Vingadores: Guerra Infinita", "filme5.jpeg","Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.","Ano: 2019","Categoria: Ação/Ficção científica","Classificação Indicativa:"],

    ["Guardiões da Galáxia", "filme6.jpeg","Peter Quill foi abduzido da Terra quando ainda era criança. Adulto, fez carreira como saqueador e ganhou o nome de Senhor das Estrelas. Quando rouba uma esfera, na qual o poderoso vilão Ronan, da raça kree, está interessado, passa a ser procurado por vários caçadores de recompensas.  ","Ano: 2014","Categoria: Ação, Aventura, Fantasia","Classificação Indicativa:"],

    ["Thor: Ragnarok", "filme7.jpeg","Em Thor: Ragnarok, Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett).","Ano: 2017","Categoria: Ação/ Fantasia","Classificação Indicativa:"],

    ["Homem de Ferro", "filme8.jpeg","Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro.","Ano: 2008","Categoria: Ação/ Aventura","Classificação Indicativa:"],
    
    ["O Incrível Hulk", "filme9.jpeg","Bruce Banner (Eric Bana) é um cientista que teve problemas em sua infância: ele foi adotado e passou por uma experiência traumática após a morte de seus pais, a qual não lembra de forma alguma. Juntamente com ele trabalha Betty Ross (Jennifer Connelly), sua grande paixão.","Ano: 2003","Categoria: Ação/Ficção científica","Classificação Indicativa:"],
    
    ["Capitã Marvel", "filme10.jpeg","Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite.","Ano: 2019","Categoria: Ação/Ficção científica","Classificação Indicativa:"],
    
    ["Pantera Negra", "filme11.jpeg","Em Pantera Negra, após a morte do rei T'Chaka (John Kani), o príncipe T'Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo.","Ano: 2018","Categoria: Ação/Aventura","Classificação Indicativa:"],
    
    ["Eternos", "filme12.jpeg","Eternos são seres super dotados com características como imortalidade e manipulação de energia cósmica, e eles são frutos de experiências fracassadas de seu próprio criador, o Celestial Arishem, desde a criação da Terra há milhões de anos.","Ano: 2021","Categoria: Ação/Fantasia","Classificação Indicativa:"],
    
    ["Homem-Aranha: Sem Volta Pra Casa", "filme13.jpeg","Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior.","Ano: 2017","Categoria: Ação/Aventura","Classificação Indicativa:"],
    
    ["Shag-Chi e a Lenda dos Dez Anéis", "filme14.jpeg","Em Shang-Chi e a Lenda dos Dez Anéis, Shang-Chi (Simu Liu) é um jovem chinês que abandonou seu país e seu pai, que lhe treinou desde criança nas artes marciais para ser um assassino ao seu dispor. Seu pai porta Dez Anéis que lhe dão poderes e longevidade, vivendo por séculos.","Ano: 2021","Categoria: Ação/Fantasia","Classificação Indicativa:"],
    
    ["Viúva Negra", "filme15.jpeg","Em Viúva Negra, acompanhamos a vida de Natasha Romanoff (Scarlett Johansson) após os eventos de Guerra Civil. Se escondendo do governo norte-americano devido a sua aliança com o time do Capitão América, Natasha ainda precisa confrontar partes de sua história, que ela tanto evita, quando surge uma conspiração perigosa ligada ao seu passado.","Ano: 2021","Categoria: Ação/Aventura","Classificação Indicativa:"],
    
    ["X-Men: Dias de um Futuro Esquecido", "filme16.jpeg","No futuro, os mutantes são caçados impiedosamente pelos Sentinelas, gigantescos robôs criados por Bolívar Trask (Peter Dinklage). ","Ano: 2014","Categoria: Ação/Ficção científica","Classificação Indicativa:"],
    
    ["Deadpool 2", "filme17.jpeg","Quando o super soldado Cable (Josh Brolin) chega em uma missão para assassinar o jovem mutante Russel (Julian Dennison), o mercenário Deadpool (Ryan Reynolds) precisa aprender o que é ser herói de verdade para salvá-lo.","Ano: 2018","Categoria: Ação/Aventura"],
    
    ["X-Men: Fênix Negra", "filme18.jpeg","1992. Os X-Men são considerados heróis nacionais e o professor Charles Xavier (James McAvoy) agora dispõe de contato direto com o presidente dos Estados Unidos. ","Ano:2019","Categoria: Ação/Aventura"],
    
    ["Logan", "filme19.jpeg","Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen).","Ano: 2017","Categoria: Ação/Aventura","Classificação Indicativa:"],
    
    ["X-Men: Apocalipse", "filme21.jpg","O primeiro mutante destruidor do mundo, Apocalipse, está de volta disposto a acabar com a humanidade. Professor Xavier conta com Mística, Fera e Mercúrio, além de novos alunos, para impedir o vilão.,","Ano: 2015","Categoria: Ação/Aventura","Classificação Indicativa:"]
]

var galeria=document.querySelector("#conteudo")

for(var i=0; i<filmes.length; i++){
    
    var div=document.createElement('div');
  
    div.className='col-sm-4'

    var conteudo=document.createElement('div')
    conteudo.className='row'

conteudo.innerHTML+='<h3 class="col-sm-12 mt-4"> ' + filmes[i][0] + '</h3>'

conteudo.innerHTML+='<div class="col-sm-5 mt-4"><a href="singleproduto.html" class="col-"><img src="imagens/' + filmes[i][1] + '" class="w-100"/></a> </div>'


conteudo.innerHTML+='<div class="col-sm-7 mt-4"> <p>' + filmes[i][4]+ "</br>" + filmes[1][3] + "</br>" + "</br>"  + filmes[i][5] + " Livre" + "</br>"  + filmes[i][2] + '</p></div>'
 
    div.appendChild(conteudo)
    
    galeria.appendChild(div)
}