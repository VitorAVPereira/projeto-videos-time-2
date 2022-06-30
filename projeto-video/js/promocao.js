 var filmes = [
       ["CAPITÃO AMÉRICA: O PRIMEIRO VINGADOR", "capitao.jpeg", "Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana, eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.", "Ano: 2011", "Categoria: Ação, Aventura, Ficção científica", "Classificação Indicativa: 12 anos"],

       ["OS VINGADORES - THE AVENGERS", "avengers.jpg", "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.", "Ano: 2012", "Categoria: Ação, Aventura", "Classificação Indicativa: 12 anos"],

       ["CAPITÃO AMÉRICA: GUERRA CIVIL", "guerracivil.jpeg", "Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.", "Ano:  2016", "Categoria: Ação, Aventura", "Classificação Indicativa: 12 anos"],

       ["DOUTOR ESTRANHO", "estranho.jpg", "Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas. Devido a falhas da medicina tradicional, ele parte para um lugar inesperado em busca de cura e esperança, um misterioso enclave chamado Kamar-Taj, localizado em Katmandu. Lá descobre que o local não é apenas um centro medicinal, mas também a linha de frente contra forças malignas místicas que desejam destruir nossa realidade. Ele passa a treinar e adquire poderes mágicos, mas precisa decidir se vai voltar para sua vida comum ou defender o mundo.", "Ano: 2016", "Categoria: Ação", "Classificação Indicativa: 12 anos"],

       ["THOR: RAGNAROK", "thor2.jpg", "Em Thor: Ragnarok, Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett).", "Ano: 2017", "Categoria: Ação, Aventura", "Classificação Indicativa: 10 anos"],

      ["HOMEM DE FERRO", "homem.jpg", "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.", "Ano: 2008", "Categoria: Ação, Ficção científica", "Classificação Indicativa: 12 anos"],

      ["CAPITÃ MARVEL", "captain.jpeg", "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls.", "Ano: 2019", "Categoria: Ação, Aventura, Fantasia", "Classificação Indicativa: 12 anos"],

      ["PANTERA NEGRA", "panter.jpg", "Em Pantera Negra, após a morte do rei TChaka (John Kani), o príncipe TChalla (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. Tchalla logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.", "Ano: 2018", "Categoria: Ação, Ficção Científica", "Classificação Indicativa: 12 anos"],

     ["SHANG-CHI E A LENDA DOS DEZ ANÉIS", "shang.jpg", "Em Shang-Chi e a Lenda dos Dez Anéis, Shang-Chi (Simu Liu) é um jovem chinês que abandonou seu país e seu pai, que lhe treinou desde criança nas artes marciais para ser um assassino ao seu dispor. Seu pai porta Dez Anéis que lhe dão poderes e longevidade, vivendo por séculos. Porém ao conhecer a mãe de Shang-Chi, ele se apaixona e tenta mudar sua vida, mas ela morre anos depois de dar a luz para a irmã mais nova de Shang-Chi, voltando causar tumulto na China. Após completar 18 anos, Shang-chi foge de seu pai em uma missão que vingaria a morte de sua mãe, mas o passado segue Shang-Chi e agora seu pai está atrás do colar que poderia resgatar sua falecida mãe. Mas o que o pai de Shang-Chi não sabe é que o mal está à espreita e ele está caindo na armadilha de um antigo e poderoso mal.", "Ano: 2021", "Categoria: Ação, Aventura", "Classificação Indicativa: 12 anos"],

     ["X-MEN: DIAS DE UM FUTURO ESQUECIDO", "xmen.jpg", "No futuro, os mutantes são caçados impiedosamente pelos Sentinelas, gigantescos robôs criados por Bolívar Trask (Peter Dinklage). Os poucos sobreviventes precisam viver escondidos, caso contrário serão também mortos. Entre eles estão o professor Charles Xavier (Patrick Stewart), Magneto (Ian McKellen), Tempestade (Halle Berry), Kitty Pryde (Ellen Page) e Wolverine (Hugh Jackman), que buscam um meio de evitar que os mutantes sejam aniquilados. O meio encontrado é enviar a consciência de Wolverine em uma viagem no tempo, rumo aos anos 1970. Lá ela ocupa o corpo do Wolverine da época, que procura os ainda jovens Xavier (James McAvoy) e Magneto (Michael Fassbender) para que, juntos, impeçam que este futuro trágico para os mutantes se torne realidade.", "Ano: 2014", "Categoria: Ação, Aventura", "Classificação Indicativa: 12 anos"],

     ["DEADPOOL 2", "deadpool.jpg", "Em Capitã Marvel, Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite.", "Ano: 2019", "Categoria: Ação, Ficção científica", "Classificação Indicativa: 14 anos"],

    ["LOGAN", "logan.jpg", "Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.", "Ano: 2017", "Categoria: Ação, Aventura", "Classificação Indicativa: 16 anos"],

    ["HULK", "hulk.jpg", "Bruce Banner é um cientista e trabalha ao lado de sua grande paixão, a bela Betty Ross, em um projeto que envolve a reconstituição de tecidos com a utilização da radiação gama. O problema todo começa quando, após ter seus genes alterados por um acidente envolvendo a radiação gama, Bruce Banner passa a se transformar em um ser gigantesco e verde que expressa no corpo todos os seus demônios mais íntimos e pessoais.", "Ano: 2003", "Categoria: Ação, Fantasia", "Classificação Indicativa: 10 anos"],

     ["VINGADORES: GUERRA INFINITA", "infinity.jpg", "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas. Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.", "Ano: 2018", "Categoria: Ficção Científica", "Classificação Indicativa: 14 anos"],

     ["ETERNOS", "eternos.jpeg", "Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.", "Ano: 2021", "Categoria: Ficão Científica", "Classificação Indicativa: 12 anos"],

     ["VIÚVA NEGRA", "viuvanegra.jpg", "Em Viúva Negra, acompanhamos a vida de Natasha Romanoff (Scarlett Johansson) após os eventos de Guerra Civil. Se escondendo do governo norte-americano devido a sua aliança com o time do Capitão América, Natasha ainda precisa confrontar partes de sua história, que ela tanto evita, quando surge uma conspiração perigosa ligada ao seu passado.", "Ano: 2021", "Categoria: Ação", "Classificação Indicativa: 12 anos"],

    ["HOMEM-FORMIGA", "formiga.jpeg", "Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas. ", "Ano: 2015", "Categoria: Ficção científica", "Classificação Indicativa: 12 anos"],

     ["HOMEM-FORMIGA E A VESPA", "homemf.jpeg", "Scott Lang lida com as consequências de suas escolhas tanto como super-herói quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente. Scott deve mais uma vez vestir o uniforme e aprender a lutar ao lado da Vespa, trabalhando em conjunto para descobrir segredos do passado.", "Ano: 2018", "Categoria: Aventura", "Classificação Indicativa: 12 anos"],

     ["HOMEM DE FERRO 3", "ironman.jpg", "Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.", "Ano: 2013", "Categoria: Ação", "Classificação Indicativa: 12 anos"],

     ["X-MEN: FÊNIX NEGRA", "feni.jpeg", "Os X-Men são considerados heróis nacionais e o professor Charles Xavier (James McAvoy) agora dispõe de contato direto com o presidente dos Estados Unidos. Quando uma missão espacial enfrenta problemas, o governo convoca a equipe mutante para ajudá-lo. Liderado por Mística (Jennifer Lawrence), os X-Men partem rumo ao espaço em uma equipe composta por Fera (Nicholas Hoult), Jean Grey (Sophie Turner), Ciclope (Tye Sheridan), Tempestade (Alexandra Shipp), Mercúrio (Evan Peters) e Noturno (Kodi Smit-McPhee). Ao tentar resgatar o comandante da missão, Jean Grey fica presa no ônibus espacial e é atingida por uma poderosa força cósmica, que acaba absorvida em seu corpo. Após ser resgatada e retornar à Terra, aos poucos ela percebe que há algo bem estranho dentro de si, o que desperta lembranças de um passado sombrio e, também, o interesse de seres extra-terrestres.", "Ano: 2019", "Categoria: Aventura", "Classificação Indicativa: 12 anos"],

    ["X-MEN: APOCALIPSE", "apo.jpeg", "O primeiro mutante destruidor do mundo, Apocalipse, está de volta disposto a acabar com a humanidade. Professor Xavier conta com Mística, Fera e Mercúrio, além de novos alunos, para impedir o vilão.", "Ano: 2016", "Categoria: Ação, Aventura", "Classificação Indicativa: 12 anos"]
 ]

 var galeria = document.querySelector("#conteudo")


 for (var i = 0; i < filmes.length; i++) {
    var descricao = (filmes[i][2]).substring(0, 90)

    var div = document.createElement('div');

    div.className = 'col-sm-4'

    var conteudo = document.createElement('div')
    conteudo.className = 'row'

    conteudo.innerHTML += '<h3 class="col-sm-12 mt-4"> ' + filmes[i][0] + '</h3>'

   conteudo.innerHTML += '<div class="col-sm-5 mt-4"><a href="singleproduto" class="col-"><img src="../imagens/' + filmes[i][1] + '" class="w-100"/></a></div>'


  conteudo.innerHTML += '<div class="col-sm-7 mt-4"> <p>' + filmes[i][4] + "</br>" + filmes[i][3] + "</br>" + "</br>" + filmes[i][5] + "<br />" + "</br>" + descricao + '<a> ...</a>' + '</p></div>'

   div.appendChild(conteudo)

    galeria.appendChild(div)
 }

  //IDENTIFICAÇÃO DO USUÁRIO 
  let user = localStorage.emailUser
  let bemVindo = document.querySelector("#bemVindo")
  let entrar = document.querySelector("#entrar")
  let sair = document.querySelector("#sair")
  let cadastro = document.querySelector("#cadastro")
  
  //SAUDAÇÃO
  function msgUser() {
      let nomeUser = user.substring(0, user.indexOf('@'))
      bemVindo.innerHTML = 'Olá <b>' + nomeUser + '<b/>'
      entrar.style.display = "none"
      cadastro.style.display = "none"
  }
  
  //ESCONDE O BOTÃO ENTRAR
  function resetUser() {
      sair.style.display = "none"
  }
  sair.onclick = function () {
      localStorage.removeItem("emailUser")
      location.href = 'index.html'
  }
  localStorage.emailUser ? msgUser() : resetUser()
