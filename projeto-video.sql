-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: projeto_video
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `carrinho_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `qtd` varchar(45) NOT NULL,
  `ano` varchar(45) NOT NULL,
  `valor` varchar(45) NOT NULL,
  `filmes_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`carrinho_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
INSERT INTO `carrinho` VALUES (37,'CAPITÃO AMÉRICA: O PRIMEIRO VINGADOR','1','2011','23',NULL),(38,'OS VINGADORES - THE AVENGERS','1','2012','23',NULL);
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `contato_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefone` varchar(100) DEFAULT NULL,
  `assunto` varchar(250) DEFAULT NULL,
  `comentarios` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`contato_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (1,'caroline','caroline@gmail.com','1123456789','olá','não consigo acessar'),(2,'Fernando','fernando@sep.com','226578690','Abrir Reclamação','Olá'),(3,'josé','jose@gmail.com','11222334456','Olá','Abrir um chamado'),(4,'camila','camila@gmail.com','8899776655','Sem acesso','não consigo fazer o acesso a plataforma'),(5,'chico','chico@gmail.com','23435672','sem aluguel','não consigo fazer aluguel');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupom`
--

DROP TABLE IF EXISTS `cupom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupom` (
  `cupom_id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  `desconto` varchar(50) NOT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cupom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupom`
--

LOCK TABLES `cupom` WRITE;
/*!40000 ALTER TABLE `cupom` DISABLE KEYS */;
INSERT INTO `cupom` VALUES (1,'cupom de 1 ano de cadastro','10%','1099'),(2,'cupom de incentivo1 ','20%','2099'),(3,'cupom de incentivo2','20%','2088');
/*!40000 ALTER TABLE `cupom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filmes`
--

DROP TABLE IF EXISTS `filmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filmes` (
  `filmes_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `sinopse` longtext NOT NULL,
  `classificacao` varchar(10) NOT NULL,
  `imagens` varchar(255) NOT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `promo` int DEFAULT '0',
  `pref` int DEFAULT '0',
  `valor` varchar(45) NOT NULL,
  PRIMARY KEY (`filmes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filmes`
--

LOCK TABLES `filmes` WRITE;
/*!40000 ALTER TABLE `filmes` DISABLE KEYS */;
INSERT INTO `filmes` VALUES (1,'CAPITÃO AMÉRICA: O PRIMEIRO VINGADOR','Ação',2011,'2ª Guerra Mundial. Steve Rogers (Chris Evans) é um jovem que aceitou ser voluntário em uma série de experiências que visam criar o supersoldado americano. Os militares conseguem transformá-lo em uma arma humana, mas logo percebem que o supersoldado é valioso demais para pôr em risco na luta contra os nazistas. Desta forma, Rogers é usado como uma celebridade do exército, marcando presença em paradas realizadas pela Europa no intuito de levantar a estima dos combatentes. Para tanto passa a usar uma vestimenta com as cores da bandeira dos Estados Unidos, azul, branca e vermelha. Só que um plano nazista faz com que Rogers entre em ação e assuma a alcunha de Capitão América, usando seus dons para combatê-los em plenas trincheiras da guerra.','+12','capitao.jpeg','https://www.youtube.com/embed/pAhkM_0gQ-0',0,1,'10,90'),(4,'OS VINGADORES - THE AVENGERS','Aventura',2012,'Loki (Tom Hiddleston) retorna à Terra enviado pelos chitauri, uma raça alienígena que pretende dominar os humanos. Com a promessa de que será o soberano do planeta, ele rouba o cubo cósmico dentro de instalações da S.H.I.E.L.D. e, com isso, adquire grandes poderes. Loki os usa para controlar o dr. Erik Selvig (Stellan Skarsgard) e Clint Barton/Gavião Arqueiro (Jeremy Renner), que passam a trabalhar para ele. No intuito de contê-los, Nick Fury (Samuel L. Jackson) convoca um grupo de pessoas com grandes habilidades, mas que jamais haviam trabalhado juntas: Tony Stark/Homem de Ferro (Robert Downey Jr.), Steve Rogers/Capitão América (Chris Evans), Thor (Chris Hemsworth), Bruce Banner/Hulk (Mark Ruffalo) e Natasha Romanoff/Viúva Negra (Scarlett Johansson). Só que, apesar do grande perigo que a Terra corre, não é tão simples assim conter o ego e os interesses de cada um deles para que possam agir em grupo.','+12','avengers.jpg','https://www.youtube.com/embed/6Y6zOSn8ff4',0,1,'9,99'),(5,'CAPITÃO AMÉRICA: GUERRA CIVIL','Ação',2016,'Em Capitão América: Guerra Civil, Steve Rogers (Chris Evans) é o atual líder dos Vingadores, super-grupo de heróis formado por Viúva Negra (Scarlett Johansson), Feiticeira Escarlate (Elizabeth Olsen), Visão (Paul Bettany), Falcão (Anthony Mackie) e Máquina de Combate (Don Cheadle). O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark (Robert Downey Jr.), o Homem de Ferro.','+12','filme3.jpeg','https://www.youtube.com/embed/FRLYZn5PGuA',0,1,'15,50'),(6,'DOUTOR ESTRANHO','Aventura',2016,'Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas. Devido a falhas da medicina tradicional, ele parte para um lugar inesperado em busca de cura e esperança, um misterioso enclave chamado Kamar-Taj, localizado em Katmandu. Lá descobre que o local não é apenas um centro medicinal, mas também a linha de frente contra forças malignas místicas que desejam destruir nossa realidade. Ele passa a treinar e adquire poderes mágicos, mas precisa decidir se vai voltar para sua vida comum ou defender o mundo.','+12','estranho.jpg','https://www.youtube.com/embed/DavLd8Nj2TQ',0,1,'10,25'),(7,'THOR: RAGNAROK','Ficção',2017,'Em Thor: Ragnarok, Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e impedir o Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett).','+12','thor2.jpg','https://www.youtube.com/embed/UvNnqWLruXA',0,1,'19,99'),(8,'HOMEM DE FERRO','Ação',2008,'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.','+12','homem.jpg','https://www.youtube.com/embed/xXAdp_KJ-0A',0,0,'9,99'),(10,'CAPITÃ MARVEL','Ação',2019,'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls.','+13','captain.jpeg','https://www.youtube.com/embed/JhY6Yy4wtb4',1,1,'20,00'),(13,'PANTERA NEGRA','Ação',2018,'Em Pantera Negra, após a morte do rei TChaka (John Kani), o príncipe TChalla (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. Tchalla logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.','+14','filme11.jpeg','https://www.youtube.com/embed/wL4a4MafSjQ',0,1,'16,50'),(14,'SHANG-CHI E A LENDA DOS DEZ ANÉIS','Ação',2021,'Em Shang-Chi e a Lenda dos Dez Anéis, Shang-Chi (Simu Liu) é um jovem chinês que abandonou seu país e seu pai, que lhe treinou desde criança nas artes marciais para ser um assassino ao seu dispor. Seu pai porta Dez Anéis que lhe dão poderes e longevidade, vivendo por séculos. Porém ao conhecer a mãe de Shang-Chi, ele se apaixona e tenta mudar sua vida, mas ela morre anos depois de dar a luz para a irmã mais nova de Shang-Chi, voltando causar tumulto na China. Após completar 18 anos, Shang-chi foge de seu pai em uma missão que vingaria a morte de sua mãe, mas o passado segue Shang-Chi e agora seu pai está atrás do colar que poderia resgatar sua falecida mãe. Mas o que o pai de Shang-Chi não sabe é que o mal está à espreita e ele está caindo na armadilha de um antigo e poderoso mal.','+12','shang.jpg','https://www.youtube.com/embed/wAmkU6FEKUw',0,1,'17,40'),(15,'X-MEN: DIAS DE UM FUTURO ESQUECIDO','Ficção',2014,'No futuro, os mutantes são caçados impiedosamente pelos Sentinelas, gigantescos robôs criados por Bolívar Trask (Peter Dinklage). Os poucos sobreviventes precisam viver escondidos, caso contrário serão também mortos. Entre eles estão o professor Charles Xavier (Patrick Stewart), Magneto (Ian McKellen), Tempestade (Halle Berry), Kitty Pryde (Ellen Page) e Wolverine (Hugh Jackman), que buscam um meio de evitar que os mutantes sejam aniquilados. O meio encontrado é enviar a consciência de Wolverine em uma viagem no tempo, rumo aos anos 1970. Lá ela ocupa o corpo do Wolverine da época, que procura os ainda jovens Xavier (James McAvoy) e Magneto (Michael Fassbender) para que, juntos, impeçam que este futuro trágico para os mutantes se torne realidade.','+14','xmen.jpg','https://www.youtube.com/embed/w1dIkYegWuQ',1,1,'14,20'),(16,'DEADPOOL 2','Aventura',2018,'Quando o super soldado Cable (Josh Brolin) chega em uma missão para assassinar o jovem mutante Russel (Julian Dennison), o mercenário Deadpool (Ryan Reynolds) precisa aprender o que é ser herói de verdade para salvá-lo. Para isso, ele recruta seu velho amigo Colossus e forma o novo grupo X-Force, sempre com o apoio do fiel escudeiro Dopinder (Karan Soni)','+12','deadpool.jpg','https://www.youtube.com/embed/fZWN2UBMK3Q',0,0,'11,14'),(17,'X-MEN: FÊNIX NEGRA','Aventura',2019,'Os X-Men são considerados heróis nacionais e o professor Charles Xavier (James McAvoy) agora dispõe de contato direto com o presidente dos Estados Unidos. Quando uma missão espacial enfrenta problemas, o governo convoca a equipe mutante para ajudá-lo. Liderado por Mística (Jennifer Lawrence), os X-Men partem rumo ao espaço em uma equipe composta por Fera (Nicholas Hoult), Jean Grey (Sophie Turner), Ciclope (Tye Sheridan), Tempestade (Alexandra Shipp), Mercúrio (Evan Peters) e Noturno (Kodi Smit-McPhee). Ao tentar resgatar o comandante da missão, Jean Grey fica presa no ônibus espacial e é atingida por uma poderosa força cósmica, que acaba absorvida em seu corpo. Após ser resgatada e retornar à Terra, aos poucos ela percebe que há algo bem estranho dentro de si, o que desperta lembranças de um passado sombrio e, também, o interesse de seres extra-terrestres.','+12','filme18.jpeg','https://www.youtube.com/embed/LKegxGRTYX0',0,1,'10,30'),(18,'LOGAN','Ação',2017,'Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.','+16','filme19.jpeg','https://www.youtube.com/embed/KPND6SgkN7Q',0,1,'9,99'),(19,'HULK','Ação',2003,'Bruce Banner é um cientista e trabalha ao lado de sua grande paixão, a bela Betty Ross, em um projeto que envolve a reconstituição de tecidos com a utilização da radiação gama. O problema todo começa quando, após ter seus genes alterados por um acidente envolvendo a radiação gama, Bruce Banner passa a se transformar em um ser gigantesco e verde que expressa no corpo todos os seus demônios mais íntimos e pessoais.','+10','filme9.jpeg','https://www.youtube.com/embed/T5IylJ3yHSU',0,1,'14,99'),(20,'VINGADORES: GUERRA INFINITA','Ficção',2018,'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas. Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.','+14','infinity.jpg','https://www.youtube.com/embed/4jGRyEa2jhE',0,0,'12,00'),(21,'ETERNOS','Ficção',2021,'Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.','+12','filme12.jpeg','https://www.youtube.com/embed/lRrSFvZUgGw',0,1,'28,27'),(22,'VIÚVA NEGRA','Ação',2021,'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.','+12','viuvanegra.jpg','https://www.youtube.com/embed/Gm3o0bfGP3g',0,1,'17,24'),(23,'HOMEM-FORMIGA','Ficção',2015,'Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.','+12','formiga.jpeg','https://www.youtube.com/embed/wITUolzfkwI',0,1,'15,37'),(24,'HOMEM-FORMIGA E A VESPA','Ficção',2018,'Scott Lang lida com as consequências de suas escolhas tanto como super-herói quanto como pai. Enquanto tenta reequilibrar sua vida com suas responsabilidades como o Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente. Scott deve mais uma vez vestir o uniforme e aprender a lutar ao lado da Vespa, trabalhando em conjunto para descobrir segredos do passado.','+12','homemf.jpeg','https://www.youtube.com/embed/g1BbrEGkRuc',0,1,'16,98'),(25,'HOMEM DE FERRO 3','Ação',2013,'Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.','+12','ironman.jpg','https://www.youtube.com/embed/igfXmU1r_mc',0,1,'9,90'),(26,'X-MEN APOCALIPSE','Ação',2016,'O primeiro mutante destruidor do mundo, Apocalipse, está de volta disposto a acabar com a humanidade. Professor Xavier conta com Mística, Fera e Mercúrio, além de novos alunos, para impedir o vilão.','+12','filme21.jpg','https://www.youtube.com/embed/3vYpPwBKJ28',0,1,'16,98');
/*!40000 ALTER TABLE `filmes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servico`
--

DROP TABLE IF EXISTS `servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servico` (
  `servicos_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`servicos_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servico`
--

LOCK TABLES `servico` WRITE;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` VALUES (1,'aluguel','aluguel_basic',10,'xx'),(2,'aluguel','aluguel_plus',18,'ww'),(3,'assinatura','assinatura_basic',20,'vv'),(4,'assinatura','assinatura_plus',30,'yy');
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_tbl`
--

DROP TABLE IF EXISTS `session_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session_tbl` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_tbl`
--

LOCK TABLES `session_tbl` WRITE;
/*!40000 ALTER TABLE `session_tbl` DISABLE KEYS */;
INSERT INTO `session_tbl` VALUES ('vRi6bN-WJJPMHvZR01agGAU3B9wn2vOH',1656435836,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-06-28T16:03:01.539Z\",\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `session_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(55) NOT NULL,
  `email` varchar(155) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `data_inicio` date DEFAULT NULL,
  `preferencia` varchar(100) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `conf_senha` varchar(45) DEFAULT NULL,
  `adm` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'José Almeida Campos','jose_all@hotmail.com','11994326765','2021-03-08','Comédia','123456','123456',1),(3,'Ana Spanovitzka','anasptk@gmail.com','12993872769','2022-05-20','Comédia','123456','123456',0),(4,'Charles Santos da Costa','charles_costa@gmail.com','11993654789','2019-04-14','Ação','123456','123456',0),(5,'Cauê Bernardo Breno Ferreira','caue_bernardo_ferreira@ozsurfing.com.br','11982345876','2022-01-10','Ação','123456','123456',0),(6,'Carolina Jaqueline Analu Almada','carolina_jaqueline_almada@eletrotex.com.br','27991502110','2019-05-22','Comédia','123456','123456',0),(7,'Miguel Vitor Gabriel Drumond','miguel.vitor.drumond@gracomonline.com.br','42994379787','2022-05-17','Drama','123456','123456',0),(9,'Benjamin Miguel Viana','benjamin_viana@homtail.com','11992982091','2021-04-13','Ação','123456','123456',0),(10,'Davi Manuel Monteiro','davi_monteiro@campanati.com.br','84997718980','2022-02-15','Ação','123456','123456',0),(11,'Sueli Heloise Carvalho','sueli.heloise.carvalho@maiamaquinas.com.br','61986629162','2021-03-11','Ação','123456','123456',0),(12,'Benjamin Bruno Mendes','benjamin_bruno_mendes@camarasjc.sp.gov.br','47988431661','2020-01-29','Comédiia','123456','123456',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendas` (
  `vendas_id` int NOT NULL AUTO_INCREMENT,
  `cliente` int NOT NULL,
  `servico` int NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `produto` int DEFAULT NULL,
  `qnt_telas` int DEFAULT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`vendas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (3,1,1,9.90,23,1,'Lorem aluguel333'),(4,2,1,9.90,18,1,'Lorem aluguel2'),(5,1,2,17.90,8,2,'Lorem aluguel');
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
