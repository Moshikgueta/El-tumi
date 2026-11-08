/* Versões em espanhol e inglês do site do El Tumi.
   Funciona traduzindo os textos da página (português → espanhol ou inglês) na hora em que a pessoa troca o idioma.
   Para acrescentar ou corrigir uma tradução, edite os dicionários ES e EN abaixo: "texto em português": "tradução".
   As avaliações dos clientes ficam no idioma original (são citações). */
(function(){
const ES = {
  // topo e navegação
  "Café peruano":"Café peruano","Cardápio":"Carta","Avaliações":"Reseñas","Visite":"Visítanos",
  "Café especial com alma":"Café de especialidad con alma",", aqui no Bigorrilho.":", aquí en Bigorrilho.",
  "Cafés especiais filtrados na Mupeco, o método que mais ressalta a nossa torra, e sabores peruanos: salteña, alfajor, limeñito e mazamorra morada. Puxe uma cadeira.":
    "Cafés de especialidad filtrados en la Mupeco, el método que más resalta nuestro tueste, y sabores peruanos: salteña, alfajor, limeñito y mazamorra morada. Toma asiento.",
  "Cardápio em modo feed":"La carta en modo feed","Cardápio completo":"Carta completa","Como chegar":"Cómo llegar",
  "Ter a sáb 10h–18h · Dom 12h–18h":"Mar a sáb 10h–18h · Dom 12h–18h","Filtrado na Mupeco":"Filtrado en la Mupeco",
  // destaques
  "Destaques":"Destacados","O que faz a gente voltar.":"Lo que hace que vuelvas.",
  "O Mupeco, os cafés especiais e os sabores peruanos, em fotos da casa. Toque numa foto para ampliar.":
    "La Mupeco, los cafés de especialidad y los sabores peruanos, en fotos de la casa. Toca una foto para ampliarla.",
  "O Mupeco":"La Mupeco","Cafés especiais":"Cafés de especialidad","Cafés gelados":"Cafés helados","No balcão":"En la barra",
  "Café com laranja":"Café con naranja","As fotos do café entram aqui em breve.":"Pronto, las fotos del café.",
  // mupeco
  "O método":"El método","Mupeco: o café passa pela cerâmica.":"Mupeco: el café pasa por la cerámica.",
  "Um copo de cerâmica sobre um vaso de barro, sem filtro de papel. O café fica com mais óleos naturais e mais corpo. Arraste para preparar uma xícara.":
    "Una taza de cerámica sobre un vaso de barro, sin filtro de papel. El café queda con más aceites naturales y más cuerpo. Desliza para preparar una taza.",
  "Preparo":"Preparación","Arraste para começar":"Desliza para empezar","Café moído":"Café molido","Água quente":"Agua caliente",
  "Descendo para o vaso":"Bajando al vaso","Servindo":"Sirviendo","Pronto. Bom café!":"¡Listo! Buen café.",
  "Café no copo de cerâmica":"Café en la taza de cerámica",
  "Grãos especiais moídos vão direto no copo de cerâmica, apoiado sobre o vaso de barro.":"Granos de especialidad molidos van directo a la taza de cerámica, apoyada sobre el vaso de barro.",
  "A água cobre o pó devagar e o café começa a se abrir.":"El agua cubre el café molido despacio y el café empieza a abrirse.",
  "Pela cerâmica":"Por la cerámica",
  "Sem papel no meio: o café atravessa a cerâmica e desce para o vaso. Dá para ver subir pela janela.":"Sin papel de por medio: el café atraviesa la cerámica y baja al vaso. Se ve subir por la ventana.",
  "Na xícara":"En la taza","Servido do vaso de barro: mais óleos naturais do grão e um corpo mais encorpado.":"Servido desde el vaso de barro: más aceites naturales del grano y más cuerpo.",
  "Filtro de papel":"Filtro de papel","Óleos naturais":"Aceites naturales","Corpo":"Cuerpo",
  "Comparação ilustrativa: o papel retém parte dos óleos do café; a cerâmica deixa passar.":"Comparación ilustrativa: el papel retiene parte de los aceites del café; la cerámica los deja pasar.",
  // cardápio: interface
  "Do Peru para a nossa mesa.":"Del Perú a nuestra mesa.",
  "O cardápio completo da casa. Filtre pelos favoritos, veganos e sem glúten, ou procure pelo nome.":"La carta completa de la casa. Filtra por favoritos, veganos y sin gluten, o busca por nombre.",
  "Ver em modo feed e curtir":"Ver en modo feed y dar me gusta","Cafés":"Cafés","Sem café":"Sin café","Salgados":"Salados",
  "Postres":"Postres","Experiências":"Experiencias","Alcoólicos":"Con alcohol","Favoritos do Tumi":"Favoritos del Tumi",
  "Vegano":"Vegano","SG":"SG","Sem glúten":"Sin gluten","doces":"dulces","Ver como é feito →":"Ver cómo se prepara →",
  "Combinações da casa para provar sem pressa.":"Combinaciones de la casa para probar sin prisa.",
  "Nada encontrado com esse filtro.":"No hay nada con ese filtro.","Limpar filtros":"Quitar filtros",
  "Troque seu leite integral por Naveia":"Cambia tu leche entera por Naveia","sem custo adicional.":"sin costo adicional.",
  "Gostou?":"¿Te gustó?","Conte como foi sua experiência e nos avalie no Google.":"Cuéntanos tu experiencia y déjanos una reseña en Google.",
  // cardápio: itens
  "Coado do dia":"Café filtrado del día","Pequeno 100ml":"Pequeño 100ml","Médio 180ml":"Mediano 180ml",
  "Café com rapadura andina":"Café con chancaca andina","Café com leite e rapadura":"Café con leche y chancaca",
  "Filtrado na hora":"Filtrado al momento","Aeropress, Koar, Prensa Francesa ou V60":"Aeropress, Koar, prensa francesa o V60",
  "Método que mais ressalta nossa torra. Servido em 300ml":"El método que más resalta nuestro tueste. Servido en 300ml",
  "Cold tônica":"Cold tónica","Espresso tônica":"Espresso tónica","Refresco de café":"Refresco de café",
  "Cold brew, suco de limão e xarope de frutas":"Cold brew, jugo de limón y jarabe de frutas",
  "Espresso, água tônica e rapadura andina":"Espresso, agua tónica y chancaca andina",
  "Chocolate":"Chocolate","Quente 200ml":"Caliente 200ml","Gelado 300ml":"Helado 300ml",
  "Mate com leche":"Mate con leche","Quente 200ml | Gelado 300ml":"Caliente 200ml | Helado 300ml",
  "Matcha, suco de laranja e água tônica":"Matcha, jugo de naranja y agua tónica","Mate gelado":"Mate helado",
  "Água com gás e xarope de frutas amarelas":"Agua con gas y jarabe de frutas amarillas",
  "Água com gás e xarope de milho roxo":"Agua con gas y jarabe de maíz morado","Suco de laranja":"Jugo de naranja",
  "Pão de queijo":"Pan de queso","3 pães de queijo":"3 panes de queso","Pães tostados com manteiga":"Pan tostado con mantequilla",
  "Carne, queijo ou palmito":"Carne, queso o palmito","Queijo quente vegano":"Sándwich de queso vegano",
  "Sanduíche inspirado na ‘causa limeña’, feito com pão de abóbora e recheado com frango, maionese e legumes":
    "Sándwich inspirado en la ‘causa limeña’, hecho con pan de zapallo y relleno de pollo, mayonesa y verduras",
  "Creme limeño com toque de limão e canela":"Crema limeña con un toque de limón y canela",
  "Bolo simples. Verificar sabor do dia":"Queque simple. Consulta el sabor del día",
  "Sobremesa cremosa e típica peruana. Feita com milho roxo, frutas e especiarias":"Postre cremoso y típico peruano. Hecho con maíz morado, frutas y especias",
  "Camadas de biscoitos e xarope de frutas, finalizado com confeitos":"Capas de galleta y jarabe de frutas, terminado con grageas",
  "Servida em aniversários, à base de pão de ló, mousse e gelatina de frutas":"La de los cumpleaños: bizcochuelo, mousse y gelatina de frutas",
  "Mini degustação":"Mini degustación","Sente-se no balcão ou sofá e prove os nossos 3 cafés. Servido 100ml por café":"Siéntate en la barra o en el sofá y prueba nuestros 3 cafés. 100ml por café",
  "Salteña, queque, leche dulce ou chocolate quente/gelado":"Salteña, queque, leche dulce o chocolate caliente/helado",
  "Salteña, alfajor e dulce de leche médio":"Salteña, alfajor y dulce de leche mediano",
  "Turrón Doña Clorinda e filtrado na Mupeco (300ml)":"Turrón Doña Clorinda y filtrado en la Mupeco (300ml)",
  "3 pães de queijo, brigadeiro e mocha médio":"3 panes de queso, brigadeiro y mocha mediano",
  "Espresso, rum e limeñito":"Espresso, ron y limeñito","Milho roxo, rum e água com gás":"Maíz morado, ron y agua con gas",
  "Espresso, rum, água tônica e rapadura andina":"Espresso, ron, agua tónica y chancaca andina",
  "Cold brew, rum, xarope de frutas e suco de limão":"Cold brew, ron, jarabe de frutas y jugo de limón",
  "Matcha, rum, água tônica e suco de laranja":"Matcha, ron, agua tónica y jugo de naranja",
  "Mate, rum, xarope de frutas e suco de limão":"Mate, ron, jarabe de frutas y jugo de limón",
  "Frutas amarelas, pisco, água com gás e suco de limão":"Frutas amarillas, pisco, agua con gas y jugo de limón",
  // avaliações
  "Quem provou":"Quienes lo probaron","Avaliações e imprensa.":"Reseñas y prensa.",
  "O que os clientes e a imprensa dizem do El Tumi. Toque numa foto para ampliar.":"Lo que dicen los clientes y la prensa del El Tumi. Toca una foto para ampliarla.",
  "★★★★★ Avaliações de clientes no Google, com as fotos deles":"★★★★★ Reseñas de clientes en Google, con sus fotos (en portugués, como fueron escritas)",
  "Na imprensa":"En la prensa",
  "O Mupeco é o destaque da casa: uma experiência diferente até para quem já conhece prensa francesa e V60.":"La Mupeco es la estrella de la casa: una experiencia distinta incluso para quien ya conoce la prensa francesa y la V60.",
  "Degustação de três cafés especiais preparados em método peruano inédito no Brasil.":"Degustación de tres cafés de especialidad preparados con un método peruano inédito en Brasil.",
  "Avaliação da comunidade elogiando a experiência de provar o método peruano Mupeco.":"Reseña de la comunidad que elogia la experiencia de probar el método peruano Mupeco.",
  "· resumo da matéria":"· resumen del artículo","· imprensa":"· prensa","· guia de cafés especiais":"· guía de cafés de especialidad",
  // história
  "Nossa história":"Nuestra historia","A cultura peruana da família, encontrando o café especial de Curitiba.":"La cultura peruana de la familia, encontrándose con el café de especialidad de Curitiba.",
  "Pooljon Benito e Clara Olstan, fundadores":"Pooljon Benito y Clara Olstan, fundadores",
  "O El Tumi nasceu de dois cunhados que quiseram juntar duas coisas que amam: as receitas e os costumes peruanos da família e a cena de cafés especiais de Curitiba.":
    "El Tumi nació de dos cuñados que quisieron juntar dos cosas que aman: las recetas y costumbres peruanas de la familia y la escena de cafés de especialidad de Curitiba.",
  "O nome vem do":"El nombre viene del",", a faca cerimonial que virou um dos símbolos mais conhecidos do Peru, usada como amuleto de boa sorte.":", el cuchillo ceremonial que se volvió uno de los símbolos más conocidos del Perú, usado como amuleto de buena suerte.",
  // visite
  "Na mesma rua, a poucos passos.":"En la misma calle, a pocos pasos.",
  "Passe para um café: a gente fica na Alameda Augusto Stellfeld, no Bigorrilho.":"Pasa por un café: estamos en la Alameda Augusto Stellfeld, en Bigorrilho.",
  "Estamos abertos agora. Passe para um café: a gente fica na Alameda Augusto Stellfeld, no Bigorrilho.":"Estamos abiertos ahora. Pasa por un café: estamos en la Alameda Augusto Stellfeld, en Bigorrilho.",
  "Seg":"Lun","Ter":"Mar","Qua":"Mié","Qui":"Jue","Sex":"Vie","Sáb":"Sáb","Dom":"Dom","Fechado":"Cerrado",
  "Mora ou trabalha no Bigorrilho? Passa para um café da tarde. Siga a gente no Instagram para ver o que saiu do forno no dia.":
    "¿Vives o trabajas en Bigorrilho? Pasa por un café de la tarde. Síguenos en Instagram para ver lo que salió del horno ese día.",
  "Seguir no Instagram":"Seguir en Instagram",
  // feed
  "Cardápio El Tumi":"Carta El Tumi","♥ Mais amados":"♥ Más queridos","Enviar":"Enviar","★ Favorito do Tumi":"★ Favorito del Tumi",
  "Como é":"Cómo es","Deslize · toque 2× para curtir":"Desliza · toca 2× para dar me gusta","Os mais amados":"Los más queridos",
  "Suas curtidas neste aparelho.":"Tus me gusta en este dispositivo.","Contagem de curtidas de todos os visitantes do site.":"Me gusta de todos los visitantes del sitio.",
  "Ainda sem curtidas. Toque duas vezes num item que você ama.":"Todavía no hay me gusta. Toca dos veces algo que te encante.",
  "Link copiado":"Enlace copiado","Rodapé":"Pie de página",
  // placeholders
  "Buscar no cardápio":"Buscar en la carta",
  "Café":"Café","com alma":"con alma","peruana.":"peruana.","Role para ver":"Desliza para ver",
  // loja
  "Loja":"Tienda",
  "Loja Tumi":"Tienda Tumi",
  "Leve o Tumi para casa.":"Llévate el Tumi a casa.",
  "Nosso café, o Mupeco e os produtos da casa. Monte o pedido aqui e retire no café.":"Nuestro café, la Mupeco y los productos de la casa. Arma tu pedido aquí y recógelo en el café.",
  "Pagamento e retirada no café. A gente confirma a disponibilidade pelo Instagram.":"Pago y retiro en el café. Confirmamos la disponibilidad por Instagram.",
  "Café Tumi 250g":"Café Tumi 250g",
  "O café da casa, o mesmo que vai na Mupeco.":"El café de la casa, el mismo que usamos en la Mupeco.",
  "O filtro peruano de cerâmica, para fazer o ritual em casa.":"El filtro peruano de cerámica, para hacer el ritual en casa.",
  "Mupeco + Café Tumi 250g, para presentear.":"Mupeco + Café Tumi 250g, para regalar.",
  "Caneca Tumi":"Taza Tumi",
  "Caneca de cerâmica com o logo da casa.":"Taza de cerámica con el logo de la casa.",
  "Camiseta Tumi":"Polo Tumi",
  "Algodão, com o TUMI estampado no peito.":"De algodón, con TUMI estampado en el pecho.",
  "Ecobag Tumi":"Bolsa Tumi",
  "Para levar o café, o pão e o que mais couber.":"Para llevar el café, el pan y lo que quepa.",
  "Caixa de alfajores":"Caja de alfajores",
  "Alfajores peruanos da casa para levar.":"Alfajores peruanos de la casa para llevar.",
  "Da casa":"De la casa",
  "Feito no Peru":"Hecho en Perú",
  "Em grãos":"En grano",
  "Moído para filtro":"Molido para filtro",
  "Moído para espresso":"Molido para espresso",
  "4 unidades":"4 unidades",
  "6 unidades":"6 unidades",
  "Consulte":"Consultar",
  "preço no café":"precio en el café",
  "Adicionar":"Agregar",
  "Sua sacola":"Tu bolsa",
  "Total":"Total",
  "Seu nome":"Tu nombre",
  "Enviar pedido":"Enviar pedido",
  "O pedido é copiado e o Direct do Instagram abre. É só colar e enviar.":"El pedido se copia y se abre el Direct de Instagram. Solo pégalo y envíalo.",
  "Sua sacola está vazia.":"Tu bolsa está vacía.",
  "A consultar":"A consultar",
  "Para separarmos seu pedido":"Para separar tu pedido",
  "Pedido copiado. Cole no Direct.":"Pedido copiado. Pégalo en el Direct.",
  "Adicione pelo menos um produto.":"Agrega al menos un producto.",
  "Digite seu nome.":"Escribe tu nombre."
};
const DIAS = {hoje:"hoy",amanhã:"mañana",domingo:"domingo",segunda:"lunes",terça:"martes",quarta:"miércoles",quinta:"jueves",sexta:"viernes",sábado:"sábado"};
const RULES = [
  [/^Aberto · até (.+)$/, (m,h)=>`Abierto · hasta las ${h}`],
  [/^Fechado · abre (\S+) às (.+)$/, (m,d,h)=>`Cerrado · abre ${DIAS[d]||d} a las ${h}`],
  [/^· (\d+) (mês|meses) atrás · Google$/, (m,n,u)=>`· hace ${n} ${u==="mês"?"mes":"meses"} · Google`],
  [/^Foto de (.+) no Google$/, (m,n)=>`Foto de ${n} en Google`],
  [/^(.+) na sacola$/, (m,n)=>`${tr(n,"es").trim()} en tu bolsa`],
  [/^(\d+) \/ (\d+)$/, m=>m]
];
const EN = {
  // top & navigation
  "Café peruano":"Peruvian café","Cardápio":"Menu","Avaliações":"Reviews","Visite":"Visit",
  "Café especial com alma":"Specialty coffee with a",", aqui no Bigorrilho.":" soul, right here in Bigorrilho.",
  "Cafés especiais filtrados na Mupeco, o método que mais ressalta a nossa torra, e sabores peruanos: salteña, alfajor, limeñito e mazamorra morada. Puxe uma cadeira.":
    "Specialty coffee brewed in the Mupeco, the method that best brings out our roast, plus Peruvian flavours: salteña, alfajor, limeñito and mazamorra morada. Pull up a chair.",
  "Cardápio em modo feed":"Menu in feed mode","Cardápio completo":"Full menu","Como chegar":"Directions",
  "Ter a sáb 10h–18h · Dom 12h–18h":"Tue–Sat 10am–6pm · Sun 12pm–6pm","Filtrado na Mupeco":"Mupeco pour-over",
  "¡Hola, vecino!":"¡Hola, vecino! Hello, neighbour!",
  // highlights
  "Destaques":"Highlights","O que faz a gente voltar.":"What keeps people coming back.",
  "O Mupeco, os cafés especiais e os sabores peruanos, em fotos da casa. Toque numa foto para ampliar.":
    "The Mupeco, our specialty coffee and Peruvian flavours, in photos from the house. Tap a photo to enlarge it.",
  "O Mupeco":"The Mupeco","Cafés especiais":"Specialty coffee","Cafés gelados":"Iced coffee","No balcão":"At the bar",
  "Café com laranja":"Coffee with orange","peruana":"Peruvian","As fotos do café entram aqui em breve.":"Photos coming soon.",
  // mupeco
  "O método":"The method","Mupeco: o café passa pela cerâmica.":"Mupeco: coffee filtered through clay.",
  "Um copo de cerâmica sobre um vaso de barro, sem filtro de papel. O café fica com mais óleos naturais e mais corpo. Arraste para preparar uma xícara.":
    "A ceramic cup on a clay vessel, no paper filter. The coffee keeps more natural oils and more body. Drag to brew a cup.",
  "Preparo":"Brewing","Arraste para começar":"Drag to start","Café moído":"Ground coffee","Água quente":"Hot water",
  "Descendo para o vaso":"Dripping into the vessel","Servindo":"Pouring","Pronto. Bom café!":"Ready. Enjoy!",
  "Café no copo de cerâmica":"Coffee in the ceramic cup",
  "Grãos especiais moídos vão direto no copo de cerâmica, apoiado sobre o vaso de barro.":"Freshly ground specialty beans go straight into the ceramic cup, resting on the clay vessel.",
  "A água cobre o pó devagar e o café começa a se abrir.":"Water slowly covers the grounds and the coffee starts to bloom.",
  "Pela cerâmica":"Through the clay",
  "Sem papel no meio: o café atravessa a cerâmica e desce para o vaso. Dá para ver subir pela janela.":"No paper in between: the coffee passes through the clay into the vessel. You can watch it rise in the window.",
  "Na xícara":"In the cup","Servido do vaso de barro: mais óleos naturais do grão e um corpo mais encorpado.":"Served from the clay vessel: more of the bean's natural oils and a fuller body.",
  "Filtro de papel":"Paper filter","Óleos naturais":"Natural oils","Corpo":"Body",
  "Comparação ilustrativa: o papel retém parte dos óleos do café; a cerâmica deixa passar.":"Illustrative comparison: paper holds back some of the coffee oils; clay lets them through.",
  // menu UI
  "Do Peru para a nossa mesa.":"From Peru to our table.",
  "O cardápio completo da casa. Filtre pelos favoritos, veganos e sem glúten, ou procure pelo nome.":"Our full menu. Filter by favourites, vegan and gluten-free, or search by name.",
  "Ver em modo feed e curtir":"View in feed mode and like","Cafés":"Coffee","Sem café":"No coffee","Salgados":"Savoury",
  "Postres":"Desserts","Experiências":"Experiences","Alcoólicos":"Drinks with alcohol","Favoritos do Tumi":"Tumi favourites",
  "Vegano":"Vegan","V":"V","SG":"GF","Sem glúten":"Gluten-free","doces":"sweets","Ver como é feito →":"See how it's made →",
  "Combinações da casa para provar sem pressa.":"House combos to enjoy slowly.",
  "Nada encontrado com esse filtro.":"Nothing matches that filter.","Limpar filtros":"Clear filters",
  "Troque seu leite integral por Naveia":"Swap whole milk for Naveia oat milk","sem custo adicional.":"at no extra cost.",
  "Gostou?":"Enjoyed it?","Conte como foi sua experiência e nos avalie no Google.":"Tell us about your visit and review us on Google.",
  // menu items
  "Coado do dia":"Filter coffee of the day","Pequeno 100ml":"Small 100ml","Médio 180ml":"Medium 180ml",
  "Café com rapadura andina":"Coffee with Andean raw sugar","Café com leite e rapadura":"Coffee with milk and raw cane sugar (chancaca)",
  "Filtrado na hora":"Brewed to order","Aeropress, Koar, Prensa Francesa ou V60":"Aeropress, Koar, French press or V60",
  "Método que mais ressalta nossa torra. Servido em 300ml":"The method that best brings out our roast. Served in 300ml",
  "Cold tônica":"Cold brew tonic","Espresso tônica":"Espresso tonic","Refresco de café":"Coffee refresher",
  "Cold brew, suco de limão e xarope de frutas":"Cold brew, lime juice and fruit syrup",
  "Espresso, água tônica e rapadura andina":"Espresso, tonic water and Andean raw sugar",
  "Quente 200ml":"Hot 200ml","Gelado 300ml":"Iced 300ml","Leche dulce":"Leche dulce (sweet milk)","Té":"Tea",
  "Mate com leche":"Mate with milk","Quente 200ml | Gelado 300ml":"Hot 200ml | Iced 300ml",
  "Matcha, suco de laranja e água tônica":"Matcha, orange juice and tonic water","Mate gelado":"Iced mate",
  "Água com gás e xarope de frutas amarelas":"Sparkling water and yellow-fruit syrup",
  "Água com gás e xarope de milho roxo":"Sparkling water and purple-corn syrup","Suco de laranja":"Orange juice",
  "Pão de queijo":"Pão de queijo (cheese bread)","3 pães de queijo":"3 cheese breads","Pães tostados com manteiga":"Toast with butter",
  "Carne, queijo ou palmito":"Beef, cheese or heart of palm","Queijo quente vegano":"Vegan grilled cheese",
  "Sanduíche inspirado na ‘causa limeña’, feito com pão de abóbora e recheado com frango, maionese e legumes":
    "Sandwich inspired by ‘causa limeña’, on pumpkin bread with chicken, mayo and vegetables",
  "Creme limeño com toque de limão e canela":"Lima-style cream with a hint of lime and cinnamon",
  "Bolo simples. Verificar sabor do dia":"Simple cake. Ask for today's flavour",
  "Sobremesa cremosa e típica peruana. Feita com milho roxo, frutas e especiarias":"Creamy traditional Peruvian dessert made with purple corn, fruit and spices",
  "Camadas de biscoitos e xarope de frutas, finalizado com confeitos":"Layers of biscuit and fruit syrup, topped with sprinkles",
  "Servida em aniversários, à base de pão de ló, mousse e gelatina de frutas":"The Peruvian birthday cake: sponge, mousse and fruit jelly",
  "Mini degustação":"Mini tasting","Sente-se no balcão ou sofá e prove os nossos 3 cafés. Servido 100ml por café":"Sit at the bar or on the sofa and taste our 3 coffees. 100ml each",
  "Tumi descafeinado":"Tumi decaf","Salteña, queque, leche dulce ou chocolate quente/gelado":"Salteña, queque, leche dulce or hot/iced chocolate",
  "Salteña, alfajor e dulce de leche médio":"Salteña, alfajor and a medium dulce de leche coffee",
  "Turrón Doña Clorinda e filtrado na Mupeco (300ml)":"Turrón Doña Clorinda and a Mupeco pour-over (300ml)",
  "3 pães de queijo, brigadeiro e mocha médio":"3 cheese breads, a brigadeiro and a medium mocha",
  "Espresso, rum e limeñito":"Espresso, rum and limeñito","Milho roxo, rum e água com gás":"Purple corn, rum and sparkling water",
  "Espresso, rum, água tônica e rapadura andina":"Espresso, rum, tonic water and Andean raw sugar",
  "Cold brew, rum, xarope de frutas e suco de limão":"Cold brew, rum, fruit syrup and lime juice",
  "Matcha, rum, água tônica e suco de laranja":"Matcha, rum, tonic water and orange juice",
  "Mate, rum, xarope de frutas e suco de limão":"Mate, rum, fruit syrup and lime juice",
  "Frutas amarelas, pisco, água com gás e suco de limão":"Yellow fruit, pisco, sparkling water and lime juice",
  // reviews
  "Quem provou":"Who's tried it","Avaliações e imprensa.":"Reviews and press.",
  "O que os clientes e a imprensa dizem do El Tumi. Toque numa foto para ampliar.":"What guests and the press say about El Tumi. Tap a photo to enlarge it.",
  "★★★★★ Avaliações de clientes no Google, com as fotos deles":"★★★★★ Guest reviews on Google, with their photos (in Portuguese, as written)",
  "Na imprensa":"In the press",
  "O Mupeco é o destaque da casa: uma experiência diferente até para quem já conhece prensa francesa e V60.":"The Mupeco is the star of the house: a different experience even if you already know the French press and V60.",
  "Degustação de três cafés especiais preparados em método peruano inédito no Brasil.":"A tasting of three specialty coffees brewed with a Peruvian method new to Brazil.",
  "Avaliação da comunidade elogiando a experiência de provar o método peruano Mupeco.":"Community review praising the experience of trying the Peruvian Mupeco method.",
  "· resumo da matéria":"· article summary","· imprensa":"· press","· guia de cafés especiais":"· specialty coffee guide",
  // story
  "Nossa história":"Our story","A cultura peruana da família, encontrando o café especial de Curitiba.":"A family's Peruvian roots, meeting Curitiba's specialty coffee.",
  "Pooljon Benito e Clara Olstan, fundadores":"Pooljon Benito and Clara Olstan, founders",
  "O El Tumi nasceu de dois cunhados que quiseram juntar duas coisas que amam: as receitas e os costumes peruanos da família e a cena de cafés especiais de Curitiba.":
    "El Tumi was started by two in-laws who wanted to bring together two things they love: their family's Peruvian recipes and traditions, and Curitiba's specialty coffee scene.",
  "O nome vem do":"The name comes from the",", a faca cerimonial que virou um dos símbolos mais conhecidos do Peru, usada como amuleto de boa sorte.":", a ceremonial knife that became one of Peru's best-known symbols, carried as a good-luck charm.",
  // visit
  "Na mesma rua, a poucos passos.":"Just a few steps away.",
  "Passe para um café: a gente fica na Alameda Augusto Stellfeld, no Bigorrilho.":"Drop by for a coffee: we're on Alameda Augusto Stellfeld, in Bigorrilho.",
  "Estamos abertos agora. Passe para um café: a gente fica na Alameda Augusto Stellfeld, no Bigorrilho.":"We're open now. Drop by for a coffee: we're on Alameda Augusto Stellfeld, in Bigorrilho.",
  "Seg":"Mon","Ter":"Tue","Qua":"Wed","Qui":"Thu","Sex":"Fri","Sáb":"Sat","Dom":"Sun","Fechado":"Closed",
  "10h":"10am","18h":"6pm","12h":"12pm",
  "Mora ou trabalha no Bigorrilho? Passa para um café da tarde. Siga a gente no Instagram para ver o que saiu do forno no dia.":
    "Visiting Curitiba? Stop by for an afternoon coffee. Follow us on Instagram to see what's fresh out of the oven today.",
  "Seguir no Instagram":"Follow on Instagram",
  // feed
  "Cardápio El Tumi":"El Tumi menu","♥ Mais amados":"♥ Most loved","Enviar":"Share","★ Favorito do Tumi":"★ Tumi favourite",
  "Como é":"How it works","Deslize · toque 2× para curtir":"Swipe · double-tap to like","Os mais amados":"Most loved",
  "Suas curtidas neste aparelho.":"Your likes on this device.","Contagem de curtidas de todos os visitantes do site.":"Likes from everyone who visits the site.",
  "Ainda sem curtidas. Toque duas vezes num item que você ama.":"No likes yet. Double-tap something you love.",
  "Link copiado":"Link copied",
  "Buscar no cardápio":"Search the menu",
  "Café":"Coffee","com alma":"with a","peruana.":"Peruvian soul.","Role para ver":"Scroll to see",
  // shop
  "Loja":"Shop",
  "Loja Tumi":"Tumi shop",
  "Leve o Tumi para casa.":"Take Tumi home.",
  "Nosso café, o Mupeco e os produtos da casa. Monte o pedido aqui e retire no café.":"Our coffee, the Mupeco and house goods. Build your order here and pick it up at the café.",
  "Pagamento e retirada no café. A gente confirma a disponibilidade pelo Instagram.":"Pay and pick up at the café. We confirm availability on Instagram.",
  "Café Tumi 250g":"Tumi coffee 250g",
  "O café da casa, o mesmo que vai na Mupeco.":"Our house coffee, the same one we brew in the Mupeco.",
  "O filtro peruano de cerâmica, para fazer o ritual em casa.":"The Peruvian clay filter, to enjoy the ritual at home.",
  "Mupeco + Café Tumi 250g, para presentear.":"Mupeco + Tumi coffee 250g, a perfect gift.",
  "Kit Ritual del Café":"Ritual del Café gift set",
  "Caneca Tumi":"Tumi mug",
  "Caneca de cerâmica com o logo da casa.":"Ceramic mug with our logo.",
  "Camiseta Tumi":"Tumi T-shirt",
  "Algodão, com o TUMI estampado no peito.":"Cotton, with TUMI printed on the chest.",
  "Ecobag Tumi":"Tumi tote bag",
  "Para levar o café, o pão e o que mais couber.":"For your coffee, bread and whatever else fits.",
  "Caixa de alfajores":"Box of alfajores",
  "Alfajores peruanos da casa para levar.":"Our Peruvian alfajores, to take away.",
  "Da casa":"House",
  "Feito no Peru":"Made in Peru",
  "Em grãos":"Whole bean",
  "Moído para filtro":"Ground for filter",
  "Moído para espresso":"Ground for espresso",
  "4 unidades":"4 pieces",
  "6 unidades":"6 pieces",
  "Consulte":"Ask us",
  "preço no café":"price at the café",
  "Adicionar":"Add",
  "Sua sacola":"Your bag",
  "Total":"Total",
  "Seu nome":"Your name",
  "Enviar pedido":"Send order",
  "O pedido é copiado e o Direct do Instagram abre. É só colar e enviar.":"Your order is copied and Instagram Direct opens. Just paste and send.",
  "Sua sacola está vazia.":"Your bag is empty.",
  "A consultar":"To be confirmed",
  "Para separarmos seu pedido":"So we can set your order aside",
  "Pedido copiado. Cole no Direct.":"Order copied. Paste it in Direct.",
  "Adicione pelo menos um produto.":"Add at least one product.",
  "Digite seu nome.":"Please enter your name."
};
const DIAS_EN = {hoje:"today",amanhã:"tomorrow",domingo:"Sunday",segunda:"Monday",terça:"Tuesday",quarta:"Wednesday",quinta:"Thursday",sexta:"Friday",sábado:"Saturday"};
const h12 = h => { const m=h.match(/^(\d+)h(\d*)$/); if(!m) return h; let n=+m[1]; const ap=n>=12?"pm":"am"; n=n%12||12; return n+(m[2]?":"+m[2]:"")+ap; };
const RULES_EN = [
  [/^Aberto · até (.+)$/, (m,h)=>`Open · until ${h12(h)}`],
  [/^Fechado · abre (\S+) às (.+)$/, (m,d,h)=>`Closed · opens ${DIAS_EN[d]||d} at ${h12(h)}`],
  [/^· (\d+) (mês|meses) atrás · Google$/, (m,n,u)=>`· ${n} ${u==="mês"?"month":"months"} ago · Google`],
  [/^Foto de (.+) no Google$/, (m,n)=>`Photo by ${n} on Google`],
  [/^(.+) na sacola$/, (m,n)=>`${tr(n,"en").trim()} added to your bag`]
];
const DICTS = {es:[ES,RULES], en:[EN,RULES_EN]};
function tr(s, l){
  const [D,RU]=DICTS[l];
  const lead=s.match(/^\s*/)[0], trail=s.match(/\s*$/)[0], core=s.trim();
  if(!core) return s;
  if(D[core]!==undefined) return lead+D[core]+trail;
  for(const [re,fn] of RU){ const m=core.match(re); if(m) return lead+fn(...m)+trail; }
  return s;
}
let lang = "pt", busy = false;
const ATTRS = ["placeholder"];
function apply(root){
  busy = true;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[]; if(root.nodeType===3) nodes.push(root); while(w.nextNode()) nodes.push(w.currentNode);
  for(const n of nodes){
    if(n.parentElement && n.parentElement.closest("script,style,[data-no-tr]")) continue;
    if(n.__tr!==undefined && n.nodeValue!==n.__tr && n.nodeValue!==n.__pt){ n.__pt=undefined; } // o site trocou o texto
    if(n.__pt===undefined) n.__pt=n.nodeValue;
    const v = lang==="pt" ? n.__pt : tr(n.__pt, lang);
    n.__tr = lang==="pt" ? undefined : v;
    if(n.nodeValue!==v) n.nodeValue=v;
  }
  const els = root.nodeType===1 ? [root,...root.querySelectorAll("[placeholder]")] : [];
  for(const el of els) for(const a of ATTRS){ if(!el.hasAttribute||!el.hasAttribute(a)) continue;
    const k="__pt_"+a; if(el[k]===undefined) el[k]=el.getAttribute(a);
    el.setAttribute(a, lang==="pt" ? el[k] : tr(el[k], lang)); }
  busy = false;
}
new MutationObserver(ms=>{ if(busy||lang==="pt") return;
  for(const m of ms){ if(m.type==="characterData") apply(m.target); else m.addedNodes.forEach(n=>apply(n)); }
}).observe(document.body,{childList:true,subtree:true,characterData:true});
function setLang(l){
  if(!["pt","es","en"].includes(l)) l="pt";
  lang=l; localStorage.setItem("eltumi-lang",l); document.documentElement.lang = {pt:"pt-BR",es:"es",en:"en"}[l];
  document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===l));
  apply(document.body);
}
document.addEventListener("click",e=>{ const b=e.target.closest("[data-lang]"); if(b) setLang(b.dataset.lang); });
// idioma inicial: ?lang=… no link, a última escolha, ou o idioma do celular (pt → português, es → espanhol, outros → inglês)
const q=new URLSearchParams(location.search).get("lang");
const nav=(navigator.language||"pt").toLowerCase();
const start = ["pt","es","en"].includes(q) ? q : (localStorage.getItem("eltumi-lang") || (nav.startsWith("pt")?"pt":nav.startsWith("es")?"es":"en"));
if(start!=="pt") setLang(start);
})();
