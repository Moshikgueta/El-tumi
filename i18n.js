/* Versão em espanhol do site do El Tumi.
   Funciona traduzindo os textos da página (português → espanhol) na hora em que a pessoa troca o idioma.
   Para acrescentar ou corrigir uma tradução, edite o dicionário ES abaixo: "texto em português": "texto em espanhol".
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
  "Buscar no cardápio":"Buscar en la carta"
};
const DIAS = {hoje:"hoy",amanhã:"mañana",domingo:"domingo",segunda:"lunes",terça:"martes",quarta:"miércoles",quinta:"jueves",sexta:"viernes",sábado:"sábado"};
const RULES = [
  [/^Aberto · até (.+)$/, (m,h)=>`Abierto · hasta las ${h}`],
  [/^Fechado · abre (\S+) às (.+)$/, (m,d,h)=>`Cerrado · abre ${DIAS[d]||d} a las ${h}`],
  [/^· (\d+) (mês|meses) atrás · Google$/, (m,n,u)=>`· hace ${n} ${u==="mês"?"mes":"meses"} · Google`],
  [/^Foto de (.+) no Google$/, (m,n)=>`Foto de ${n} en Google`],
  [/^(\d+) \/ (\d+)$/, m=>m]
];
function toES(s){
  const lead=s.match(/^\s*/)[0], trail=s.match(/\s*$/)[0], core=s.trim();
  if(!core) return s;
  if(ES[core]!==undefined) return lead+ES[core]+trail;
  for(const [re,fn] of RULES){ const m=core.match(re); if(m) return lead+fn(...m)+trail; }
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
    if(n.__es!==undefined && n.nodeValue!==n.__es && n.nodeValue!==n.__pt){ n.__pt=undefined; } // o site trocou o texto
    if(n.__pt===undefined) n.__pt=n.nodeValue;
    const v = lang==="es" ? toES(n.__pt) : n.__pt;
    n.__es = lang==="es" ? v : undefined;
    if(n.nodeValue!==v) n.nodeValue=v;
  }
  const els = root.nodeType===1 ? [root,...root.querySelectorAll("[placeholder]")] : [];
  for(const el of els) for(const a of ATTRS){ if(!el.hasAttribute||!el.hasAttribute(a)) continue;
    const k="__pt_"+a; if(el[k]===undefined) el[k]=el.getAttribute(a);
    el.setAttribute(a, lang==="es" ? toES(el[k]) : el[k]); }
  busy = false;
}
new MutationObserver(ms=>{ if(busy||lang!=="es") return;
  for(const m of ms){ if(m.type==="characterData") apply(m.target); else m.addedNodes.forEach(n=>apply(n)); }
}).observe(document.body,{childList:true,subtree:true,characterData:true});
function setLang(l){
  lang=l; localStorage.setItem("eltumi-lang",l); document.documentElement.lang = l==="es"?"es":"pt-BR";
  document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed", b.dataset.lang===l));
  apply(document.body);
}
document.addEventListener("click",e=>{ const b=e.target.closest("[data-lang]"); if(b) setLang(b.dataset.lang); });
const q=new URLSearchParams(location.search).get("lang");
const start = q==="es"||q==="pt" ? q : (localStorage.getItem("eltumi-lang") || ((navigator.language||"").toLowerCase().startsWith("es")?"es":"pt"));
if(start==="es") setLang("es");
})();
