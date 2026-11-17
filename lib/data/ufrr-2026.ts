import type { EssayPrompt, ExamEdition, Question, SharedText } from '../types';

const DOC_NAME = 'prova-ufrr-2026-pi.pdf';
const EXAM_ID = 'ufrr-integral-2026';
const EXAM_NAME = 'Vestibular UFRR 2026 — Prova Integral';

const makeProv = (pageNumber: number, notes?: string) => ({
  institution: 'UFRR / CPV',
  documentName: DOC_NAME,
  pageNumber,
  isDemoFixture: false,
  notes,
});

export const UFRR_2026_SHARED_TEXTS: SharedText[] = [
  {
    id: 'ufrr-2026-pt-t1',
    examId: EXAM_ID,
    title: 'Lira I',
    referenceLabel: 'TEXTO I (Português) — Para as questões 01 e 02',
    content: `Eu, Marília, não sou algum **__vaqueiro__**,
Que viva de guardar alheio gado;
De tosco trato, d‘ expressões grosseiro,
Dos frios gelos, e dos sóis queimado.
Tenho próprio casal, e nele assisto;
Dá-me vinho, legume, fruta, azeite;
Das brancas ovelhinhas tiro o leite,
E mais as finas lãs, de que me visto.
Graças, Marília bela,
Graças à minha Estrela!

[...]

Mas tendo tantos dotes da ventura,
Só apreço lhes dou, gentil Pastora,
Depois que teu afeto me segura,
Que queres do que tenho ser senhora.
É bom, minha Marília, é bom ser dono
De um rebanho, que cubra monte, e prado;
Porém, gentil Pastora, o teu agrado
Vale mais q‘um rebanho, e mais q‘um trono.
Graças, Marília bela,
Graças à minha Estrela!

[...]

Irás a divertir-te na floresta,
Sustentada, Marília, no meu braço;
Ali descansarei a quente sesta,
Dormindo um leve sono em teu regaço:
Enquanto a luta jogam os Pastores,
E **__emparelhados__** correm nas campinas,
Toucarei teus cabelos de boninas,
Nos troncos gravarei os teus louvores.
Graças, Marília bela,
Graças à minha Estrela!`,
    sourceCitation:
      'GONZAGA, Tomás Antonio. Marília de Dirceu, PARTE I, 1792. 1. ed. São Paulo: Ediouro.',
  },
  {
    id: 'ufrr-2026-pt-t2',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO II (Português) — Para a questão 03',
    content: `“Sim. Bola. E falante! Mas também muda. É que falar me fazia perder o ar. O que ninguém sabia é que eu era uma tagarela: respondia tudo o que eu queria e mais um bocado, mas apenas nos meus pensamentos. Melhor assim. Porque depois que eu soltasse a primeira palavra, mesmo que a da poesia menos doce ou do dicionário mais salgado, só iria parar de falar quando eu terminasse murcha”.`,
    sourceCitation:
      'SANDRA, Leão de. A mirabolante bola de antes. Boa Vista-RR: Ed. Do autor, 2023.',
  },
  {
    id: 'ufrr-2026-pt-t3',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO III (Português) — Para as questões 04 e 05',
    content: `[...]
Era hora de descanso; passeávamos, conversando. Falamos dos colegas. Vi então, de dentro da brandura patriarcal do Rebelo, descascar-se uma espécie de inesperado Tersito, produzindo injúrias e maldições. “Uma corja! Não imagina, meu caro Sérgio. Conte como uma desgraça ter de viver com esta gente.” E esbeiçou um lábio sarcástico para os rapazes que passavam. “[...] Aquele é o Malheiro, [...]. Forte como um touro, todos o temem, muitos o cercam, os inspetores não podem com ele; o diretor respeita-o; faz-se a vista larga para os seus abusos... Este que passou por nós, olhando muito, é o Cândido, com aqueles modos de mulher, aquele arzinho de quem saiu da cama, com preguiça nos olhos... Este sujeito... Há de ser seu conhecido. Mas faço exceções: ali vem o Ribas, está vendo? feio, coitadinho! como tudo, mas uma pérola. É a mansidão em pessoa. Primeira voz do Orfeão, uma vozinha de moça que o diretor adora. É estudioso e protegido. Faz a vida cantando como os serafins. Uma pérola!”

— **Ali** está um de joelhos...
— De joelhos... Não há perguntar; é o Franco. Uma alma penada. Hoje é o primeiro dia, ali está de joelhos o Franco. Assim atravessa as semanas, os meses, assim o conheço, nesta casa, desde que entrei. De joelhos como um penitente expiando a culpa de uma raça.

[...]

Ia por diante Rebelo com os extraordinários avisos, quando senti puxarem-me a blusa. Quase cai. Voltei-me; vi a distância uma cara amarela, de gordura balofa, olhos vesgos sem pestanas, virada para mim, esgarçando a boca em careta de riso cínico. Um sujeito evidentemente mais forte do que eu. Não obstante apanhei com raiva um pedaço de telha e arremessei. O tratante livrou-se, injuriando-me com uma gargalhada, e sumiu-se. “Muito bem”, aplaudiu Rebelo.`,
    sourceCitation: 'POMPÉIA, Raul. O ateneu. Editora Ática, 2007. p. 32-33',
  },
  {
    id: 'ufrr-2026-pt-t4',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO IV (Português) — Para a questão 06',
    content: `[...]
A neblina de melancolia, baixada sobre o colégio da altura da cordilheira, repercussão da tristeza verde das matas, pesava-me aos ombros como a loba de um seminarista, como o voto de um frade; eu passeava na circunscrição do recreio como num claustro, olhando as paredes, brancas como túmulos caiados, limitando as preocupações do espírito à minha humilhação diante de Deus, sem olhar para cima, na modéstia curvada dos brutos — anulando-me a mim mesmo na angústia do pensamento religioso, como no saco de pano bicudo, preto, do farricoco.

O céu, que a imaginação buscara dantes, como os cânticos buscam os zimbórios, cala agora sobre mim como um solidéu de bronze.

Triste e feliz.
[...]`,
    sourceCitation: 'POMPÉIA, Raul. O ateneu. Editora Ática, 2007. p. 55.',
  },
  {
    id: 'ufrr-2026-pt-t5',
    examId: EXAM_ID,
    title: 'Becos da Memória (Fragmentos I e II)',
    referenceLabel: 'TEXTO V (Português) — Para as questões 07, 08 e 09',
    content: `**Fragmento I**

“E na tentativa de recompor esse tecido esgarçado ao longo do tempo, escrevo. Escrevo sabendo que estou perseguindo uma sombra, um vestígio talvez. E como a memória é também vítima do esquecimento, invento, invento. [...] Um deles insiste: resistência, resistência, resistência...”

**Fragmento II**

“A lembrança da favela se entranhou em mim como o cheiro de café na roupa de quem torra. Por mais que eu tente, não sai. Às vezes, tento escrever sobre outras coisas, mas o beco me chama, me puxa, me exige.”`,
    sourceCitation: 'EVARISTO, Becos da Memória. Rio de Janeiro: Pallas, 2018, p.12.',
  },
  {
    id: 'ufrr-2026-es-t1',
    examId: EXAM_ID,
    title: 'Imagina bien, rinde mejor: el poder del entrenamiento psicológico en el deporte',
    referenceLabel: 'TEXTO I (Español) — Para las cuestiones 64, 65 y 66',
    content: `1. La preparación mental se ha convertido en una parte esencial del rendimiento deportivo, con aplicaciones en el tratamiento de lesiones, el perfeccionamiento de habilidades físicas y la gestión del estrés.

2. Cuando pensamos en un deportista, lo que suele venirnos a la cabeza es la imagen de un cuerpo en movimiento: un regate preciso, una entrada a canasta en el momento justo, un saque que decide un partido. Sin embargo, detrás de esos gestos técnicos hay un componente menos visible, pero igual de entrenable: la preparación psicológica como parte esencial del rendimiento adaptativo expresado en el deporte.

3. Un buen ejemplo es la **reciente** final de Roland Garros 2025, en la que Carlos Alcaraz consiguió **remontar** dos sets en contra a Jannik Sinner, salvando bolas de partido y manteniéndose firme durante casi seis horas de juego. Al finalizar el encuentro, **el** propio Alcaraz no habló sólo de **su** físico o su técnica, sino de su fortaleza mental. No se refería a una **cualidad** innata, sino a algo que entrena a diario. El entrenamiento psicológico, en sus distintas formas, es una herramienta utilizada por muchos deportistas para prepararse ante lo que aún no ha ocurrido. Y funciona.

4. Este tipo específico de entrenamiento no se basa en imaginar por imaginar, sino en practicar sin ejecutar el movimiento visible, en simular sin desgastar. Lo que se llama imaginería motora implica representar mentalmente un movimiento con la mayor fidelidad posible: sintiendo el gesto, visualizando el entorno, anticipando sonidos, emociones y secuencias. Desde fuera parece reposo. Desde dentro, es un entrenamiento completo.

5. La investigación ha demostrado que imaginar un movimiento activa en el cerebro áreas similares a las que se utilizan al realizarlo físicamente, como la corteza motora, premotora y el cerebelo. […] Cuanto más se parece esa simulación a la realidad, más potente es el aprendizaje.`,
    sourceCitation:
      'Fuente: Adaptado de https://elpais.com/salud-y-bienestar/enformate/2025-08-18/imagina-bien-rinde-mejor-el-poder-del-entrenamiento-psicologico-en-el-deporte.html.',
  },
  {
    id: 'ufrr-2026-es-t2',
    examId: EXAM_ID,
    title: 'Biografía de Quino',
    referenceLabel: 'TEXTO II (Español) — Para las cuestiones 67 y 68',
    content: `1. QUINO, Joaquín Salvador Lavado Tejón, nace en la región andina de Mendoza (Argentina) el 17 de julio de 1932, aunque en los registros oficiales, es **anotado** el 17 de agosto. Desde su nacimiento fue nombrado Quino para distinguirlo de su tío Joaquín Tejón, apreciado pintor y diseñador gráfico, con el que, a los tres años de edad, descubrió su vocación.

2. A los trece años se matriculó en la Escuela de Bellas Artes, pero en 1949, “Cansado de dibujar ánforas y yesos”, la abandona y piensa en una sola profesión posible: dibujante de historieta y humor.

3. Determinado firmemente a lograr sus objetivos, a la edad de dieciocho años se trasladó a Buenos Aires en busca de un editor dispuesto a publicar sus dibujos, pero pasaría tres años de **penurias** económicas antes de ver su sueño hecho realidad.`,
    sourceCitation: 'Adaptado de https://www.quino.com.ar/biografia',
  },
  {
    id: 'ufrr-2026-es-t3',
    examId: EXAM_ID,
    title: 'Luto en el Zoológico de Cali: murió la tigresa de Bengala “Indira”, tras un incidente en su recinto, ¿qué pasó?',
    referenceLabel: 'TEXTO III (Español) — Para la cuestión 69',
    content: `A través de sus redes sociales, el Zoológico de Cali mostró su tristeza por el fallecimiento de Indira, una tigresa de Bengala que recibió cuidados durante 21 años por los profesionales del establecimiento.

Según se indicó, Indira murió luego de un incidente con su hijo Kanú, con quien compartió durante más de 12 años. A pesar de que el personal de veterinarios atendieron inmediatamente la situación, su corazón dejó de latir.

El enfrentamiento ocurrió durante la tarde del sábado, 16 de agosto, en el recinto de tigres, causada por límites territoriales entre la hembra y el macho.

“Hoy estamos muy adoloridos y muy tristes por la partida de Indira, porque llevaba 21 años con nuestra familia y Kanú, que nació aquí en nuestro zoológico, hijo de Indira, lleva alrededor de 13 años”, se explicó desde la entidad.`,
    sourceCitation:
      'Adaptado de https://www.elpais.com.co/cali/luto-en-el-zoologico-de-cali-murio-la-tigresa-de-bengala-indira-tras-un-incidente-en-su-recinto-que-paso-1717.html',
  },
  {
    id: 'ufrr-2026-es-t4',
    examId: EXAM_ID,
    title: 'LOS ANILLOS FATIGADOS',
    referenceLabel: 'TEXTO IV (Español) — Para las cuestiones 70 y 71',
    content: `Hay ganas de volver, de amar, de no ausentarse,
y hay ganas de morir, combatido por dos
aguas encontradas que jamás han de istmarse.
Hay ganas: de un **__gran__** beso que amortaje a la Vida,
que acaba en el áfrica de una agonía ardiente,
suicida!
Hay ganas de... no tener ganas. Señor;
a ti yo **__te__** señalo. con el dedo **__deicida__**:
hay ganas de no haber tenido corazón.`,
    sourceCitation: 'Adaptado de: https://www.poesi.as/cv18020618.htm',
  },
  {
    id: 'ufrr-2026-es-t5',
    examId: EXAM_ID,
    title: 'El País: Publicadas las primeras imágenes que revelan el misterioso proceso de implantación de un embrión humano',
    referenceLabel: 'TEXTO V (Español) — Para la cuestión 72',
    content: `“Sabemos más sobre el desarrollo embrionario de las moscas, los peces o los pollos que sobre el de los seres humanos”, arroja Samuel Ojosnegros, investigador del Instituto de Bioingeniería de Cataluña (IBEC). Y tiene razón: durante las primeras semanas, el embrión humano se desarrolla oculto en el interior del útero, allí donde los ojos de la ciencia no alcanzan a ver. Lo que ocurre en esa ventana de tiempo entre la implantación y la primera ecografía es una incógnita.

Sin embargo, eso está empezando a cambiar. Un grupo de científicos del IBEC, entre los que está Ojosnegros, **__ha conseguido__** grabar por primera vez la implantación de embriones humanos en tiempo real. Para lograrlo utilizaron un novedoso sistema de laboratorio que simula las capas externas del útero y permite recrear un escenario de implantación **__como si__** estuviera sucediendo dentro del cuerpo de una mujer, solo que con óvulos donados. Las imágenes las divulga este viernes la revista Science Advances.`,
    sourceCitation:
      'Disponível em: https://elpais.com/ciencia/2025-08-15/publicadas-las-primeras-imagenes-que-revelan-el-misterioso-proceso-de-implantacion-de-un-embrion-humano.html. Acesso em: 18 ago. 2025',
  },
  {
    id: 'ufrr-2026-en-t1',
    examId: EXAM_ID,
    title: 'I Have a Dream (Excerpts)',
    referenceLabel: 'TEXT I (English) — For questions 64, 65 and 66',
    content: `Read the text bellow and answer the questions that follow.

[…]
Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity.

But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land. And so we've come here today to dramatize a shameful condition.

[…]

I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."

I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.

I have a dream that one day even the state of Mississippi, a state sweltering _____ the heat _____ injustice, sweltering _____ the heat _____ oppression, will be transformed _____ an oasis _____ freedom and justice.

I have a dream that my four little children will one day live in a nation **where** they will not be judged by the color of **their** skin but by the content of **their** character.

I have a dream today!

[…]`,
    sourceCitation:
      'Martin Luther King Jr., I have a Dream Speech, delivered on August 28th 1963 at the Lincoln Memorial.',
  },
  {
    id: 'ufrr-2026-en-t2',
    examId: EXAM_ID,
    title: 'Biomes of the World',
    referenceLabel: 'TEXT II (English) — For question 69',
    content: `Biomes are areas of land or water that share the same climate. Earth has several major biomes. Deserts receive little rain and have extreme temperatures. Forests receive more rain and have moderate temperatures. The trees in a deciduous forest lose their leaves every autumn. The trees in the taiga are mostly evergreens, many of which have needle-like leaves. Grasslands cover the most area of land on Earth. Rain is usually seasonal, so there is a dry season during which dust storms may be created. The tundra is located at very high elevations and near the North and South Pole. Few plants grow in the tundra, and the ground is permanently frozen. There are two types of aquatic biomes: marine and freshwater. Marine biomes cove about three-fourths of Earth’s surface and include all the world’s oceans. Freshwater biomes are bodies of water such as lakes, rivers, and ponds.`,
  },
  {
    id: 'ufrr-2026-fr-t1',
    examId: EXAM_ID,
    title: '« ILS SONT INAUDIBLES »… YANN BARTHES ET « QUOTIDIEN » NE VONT PLUS INVITER DE POLITIQUES EN PLATEAU',
    referenceLabel: 'TEXTE I (Français) — Pour les questions 64, 65 et 66',
    content: `Quotidien de retour dans votre quotidien, avec un petit changement. Le célèbre talk-show présenté par Yann Barthès fait sa rentrée ce lundi sur TMC. Et si l‘équipe des chroniqueurs sera la même que la saison dernière, les invités, eux, ne seront pas tout à fait identiques. Car comme l‘explique Yann Barthès dans un entretien accordé à la Tribune Dimanche, Quotidien va tout simplement… « arrêter de recevoir des politiques » sur son plateau. La raison ? « (Ils) sont devenus inaudibles et déroulent leurs éléments de langage sur tous les plateaux », justifie le présentateur.

Ce dernier évoque notamment une « interview que j‘ai faite cette saison avec Manon Aubry. Elle commençait une phrase et j‘étais capable de la finir car je l‘avais entendue pendant une semaine ».

**Cap sur la présidentielle américaine**

Depuis plusieurs années déjà, les représentants du RN n‘étaient pas les bienvenus à l‘antenne. « Je souhaite recevoir des personnes qui me respectent et respectent nos équipes sur le terrain. Ce n‘est pas le cas », dit encore Yann Barthès.

Et cette règle du « 0 politique » n‘aura pas d‘exception ? Si, car le come-back d‘une « grande figure dans le débat public » ou la sortie d‘un ouvrage, par exemple, pourront être des entorses au règlement. Et de politique dans Quotidien, on en parlera beaucoup en cette rentrée. Surtout de politique… américaine.`,
    sourceCitation:
      'Publié le 01/09/2024 à 19:01, à 14:22 - https://www.20minutes.fr/arts-stars/medias/4107851-20240901-inaudibles-yann-barthes-quotidien-vont-plus-inviter-politiques-plateau',
  },
  {
    id: 'ufrr-2026-fr-t2',
    examId: EXAM_ID,
    title: 'En Guadeloupe, des lycéens remontent à la source de l‘information : « Comment on peut savoir, nous, que ce n‘est pas vrai ? »',
    referenceLabel: 'TEXTE II (Français) — Pour les questions 67, 68 et 69',
    content: `Une « course-poursuite armée dans le lycée », un impressionnant crocodile dévoreur d‘oies et de dindes, des confusions sémantiques qui mènent à des contresens voire de fausses informations… mais aussi des échanges passionnés, des vérifications journalistiques, des enregistrements d‘interviews et des montages radio. Les six mois de résidence de journaliste menés en Guadeloupe par la correspondante de l‘Agence France-Presse (AFP), entre septembre 2023 et mars 2024, ont été surprenants, riches et instructifs, tant pour les élèves que pour la professionnelle.

La reporter intervenait pour le compte de l‘association Entre Les Lignes, spécialisée dans l‘éducation aux médias et à l‘information. Elle regroupe plus de 270 journalistes bénévoles, issus des rédactions de l‘AFP, du Groupe Le Monde (Le Monde, Télérama, Courrier international, La Vie, Le HuffPost), de L’Obs et de Contexte.

Soixante-quinze élèves répartis dans trois classes du lycée professionnel Louis-Delgrès, au Moule, ont pu suivre ces séances : une première partie consacrée aux ateliers pédagogiques créés par Entre Les Lignes et une deuxième portant sur la création d‘une interview, en lien avec l‘environnement.

Une autre fois, en décembre, les élèves se montrent agités quand il faut parler de ce qu‘ils ont vu ou entendu aux infos : « Madame, ici, hier, il y a eu une course-poursuite, ils étaient armés, juste devant le lycée et personne n’en a parlé. » Je n‘ai pas connaissance de cette information, en effet. Au moment où je les vois, je ne dispose donc que de leur témoignage, et nous cherchons à démêler le vrai du faux : « Que s’est-il passé exactement ? Quand ? Où ? Pourquoi ? Avec qui ? Comment ? Qu’est-ce que vous avez vu ? »

Nous reprenons, ensemble, la règle des « 5 W » – piliers du journalisme, de l‘anglais what (« quoi »), when (« quand »), who (« qui »), where (« où ») et why (« pourquoi ») –, afin de donner une information précise et située dans le temps et l‘espace. Certains récits concordent, mais les témoignages directs manquent, ou ne concernent qu‘une partie de la scène. Je leur dis qu‘ils sont les pièces d‘un puzzle, que leur témoignage compte, et qu‘il faut aussi compléter l‘information avec d‘autres sources.
(...)
L‘occasion, aussi, de démontrer à ces jeunes qu‘ils ont été ma source première dans cette affaire, et que chacun peut porter l‘information, sans pour autant colporter la rumeur. (...)
En effet, « sans ça », sans ce travail effectué avec un professionnel, la majorité de la classe serait toujours convaincue, aujourd‘hui, de la présence d‘un crocodile en Guadeloupe. Car l‘article n‘a mentionné la version de l‘OFB que bien plus tard dans la journée.
(...)`,
    sourceCitation:
      'Par Cécile Rémusat (journaliste à l‘Agence France-Presse (AFP)) · Publié le 11 juillet 2024 à 15h07, modifié le 12 juillet 2024 à 08h20 - https://www.lemonde.fr/entre-les-lignes/article/2024/07/11/.',
  },
  {
    id: 'ufrr-2026-fr-t3',
    examId: EXAM_ID,
    title: 'Comment l’insécurité énergétique fragilise les démocraties (extrait)',
    referenceLabel: 'TEXTE III (Français) — Pour les questions 70, 71 et 72',
    content: `L‘invasion de l‘Ukraine par la Russie et les tensions au Proche et au Moyen-Orient ont encore montré récemment que la sécurité énergétique de la France et de l‘Europe peut rapidement vaciller. Alors que risque-t-on lorsque celle-ci n‘est pas garantie ? Et comment l‘assurer ? Dans ce deuxième épisode spécial « énergie » de « La fabrique du savoir », un podcast du Monde produit en partenariat avec La Nuit de l‘énergie 2024, organisée par l‘Ecole normale supérieure, rencontre avec Laurence Tubiana, économiste et diplomate, aujourd‘hui présidente et directrice générale de la Fondation européenne pour le climat.

**À partir de quand parle-t-on de sécurité énergétique ? Et quels sont les piliers fondamentaux pour la maintenir ?**

D‘abord, il faut se rappeler qu‘on a besoin d‘énergie pour tout faire et que ces besoins grandissent. Quand on voit aujourd‘hui la consommation de l‘activité numérique et celle que nous promet déjà l‘activité de l‘intelligence artificielle, on ne peut que constater que notre vie, notre développement économique et social sont intimement liés à l‘énergie. La question de la sécurité énergétique a commencé à se poser lors de la crise du pétrole des années 1970. Elle a mis en évidence l‘existence de pouvoirs asymétriques : d‘un côté, des pays qui contrôlent la ressource et, de l‘autre, ceux qui la demandent. Lorsque les pays pétroliers ont décidé de s‘organiser pour contrôler le prix du pétrole, cela a très rapidement créé un choc énorme pour les pays développés. Avec beaucoup de conséquences : en Europe, la nécessité de s‘ajuster à ces prix très élevés et de trouver des alternatives – notamment en France avec le nucléaire –, et pour les États-Unis la course pour devenir complètement autonomes.

**Selon l’Insee, en 2022, le taux d’indépendance énergétique en France était de 50,6 %. Que peut-on dire de ce chiffre ?**

Il est d‘autant plus intéressant que la France se targue, à juste titre − en tout cas pour ce qui est de l‘électricité − d‘être indépendante en termes de production non pas primaire, puisqu‘on importe de l‘uranium, mais pour sa transformation dans les usines nucléaires. Mais l‘électricité ne représente pas une si grosse part de notre consommation d‘énergie. On a tendance à oublier qu‘on importe beaucoup de pétrole et de gaz, d‘où la panique quand la Russie a envahi l‘Ukraine en 2022. Même si la France parie sur le nucléaire pour son indépendance énergétique, cela ne suffit pas. Elle reste très largement dépendante du reste du monde.

**Comment la dépendance (ou l’indépendance) énergétique a-t-elle évolué au cours des dernières années ?**

Revenons aux années 1970 : non seulement la France a lancé une nouvelle source de production d‘électricité par le nucléaire, mais elle a aussi produit un très gros effort en matière d‘efficacité. La consommation d‘énergie a alors beaucoup diminué. Cet effort a notamment reposé sur l‘innovation technologique avec cette campagne publicitaire connue : « *En France on n’a pas de pétrole, mais on a des idées.* » Mais, au fil du temps, nous avons un peu oublié que les ressources étaient limitées. Le pétrole n‘était pas cher et beaucoup de pays étaient devenus exportateurs. Mais l‘invasion russe récente a créé un choc pour des pays totalement dépendants, comme l‘Allemagne et même la France. Les prix ont flambé et on a craint de ne pas avoir assez de gaz pour se chauffer. Il y a eu une urgence à s‘adapter à moins de gaz et du gaz plus cher, une urgence à trouver un nouveau fournisseur en renforçant nos relations avec les pays du Golfe – le Qatar, les Emirats arabes unis –, mais aussi et surtout avec les États-Unis. Et c‘est donc leur gaz liquide, importé par méthaniers, qui approvisionne aujourd‘hui l‘Europe.
(...)`,
    sourceCitation:
      'Par Caroline Andrieu et Joséfa Lopez · Publié le 11 octobre 2024 à 15h00, modifié le 30 octobre 2024 à 12h02 https://www.lemonde.fr/podcasts/article/2024/10/11/comment-l-insecurite-energetique-fragilise-les-democraties_6349157_5463015.html',
  },
];

const SVG_Q61_FRUTOSE_HMF = `<svg viewBox="0 0 540 310" class="w-full h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="currentColor" stroke="none">
    <!-- Top Left: Frutose -->
    <text x="15" y="25">HO</text>
    <text x="86" y="42">O</text>
    <text x="115" y="26">OH</text>
    <text x="148" y="96">OH</text>
    <text x="48" y="128">HO</text>
    <text x="103" y="128">OH</text>
    <text x="85" y="150" font-size="13.5">Frutose</text>
  </g>
  <!-- Frutose Ring -->
  <polyline points="38,24 55,24 55,46"/>
  <polyline points="55,46 82,39"/>
  <polyline points="99,39 124,52 124,88 73,88 55,46"/>
  <line x1="124" y1="52" x2="124" y2="30"/>
  <line x1="124" y1="88" x2="145" y2="91"/>
  <line x1="73" y1="88" x2="64" y2="112"/>
  <line x1="124" y1="88" x2="113" y2="112"/>

  <!-- Arrow Frutose -> 1 -->
  <line x1="185" y1="68" x2="265" y2="68"/>
  <polygon points="265,64 275,68 265,72" fill="currentColor" stroke="none"/>

  <!-- Top Right: 1 -->
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="currentColor" stroke="none">
    <text x="380" y="18" font-size="14">1</text>
    <text x="292" y="27">HO</text>
    <text x="364" y="42">O</text>
    <text x="458" y="42">OH</text>
    <text x="330" y="128">HO</text>
    <text x="382" y="128">OH</text>
  </g>
  <polyline points="315,24 333,24 333,48"/>
  <polyline points="333,48 360,39"/>
  <polyline points="377,39 405,53 392,90 350,90 333,48"/>
  <line x1="405" y1="53" x2="432" y2="38"/>
  <line x1="432" y1="38" x2="454" y2="38"/>
  <line x1="402" y1="49" x2="429" y2="34"/>
  <line x1="350" y1="90" x2="343" y2="112"/>
  <line x1="392" y1="90" x2="389" y2="112"/>

  <!-- Arrow 1 -> 2 -->
  <line x1="378" y1="138" x2="378" y2="178"/>
  <polygon points="374,178 378,188 382,178" fill="currentColor" stroke="none"/>

  <!-- Bottom Right: 2 -->
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="currentColor" stroke="none">
    <text x="398" y="198" font-size="14">2</text>
    <text x="298" y="206">HO</text>
    <text x="370" y="220">O</text>
    <text x="466" y="220">O</text>
    <text x="352" y="301">HO</text>
  </g>
  <polyline points="321,203 339,203 339,226"/>
  <polyline points="339,226 366,217"/>
  <polyline points="383,217 411,230 398,268 356,268 339,226"/>
  <line x1="358" y1="262" x2="345" y2="230"/>
  <line x1="356" y1="268" x2="362" y2="286"/>
  <line x1="411" y1="230" x2="438" y2="215"/>
  <line x1="438" y1="215" x2="462" y2="215"/>
  <line x1="438" y1="220" x2="462" y2="220"/>

  <!-- Arrow 2 -> HMF -->
  <line x1="278" y1="246" x2="212" y2="246"/>
  <polygon points="212,242 202,246 212,250" fill="currentColor" stroke="none"/>

  <!-- Bottom Left: HMF -->
  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="currentColor" stroke="none">
    <text x="15" y="206">HO</text>
    <text x="90" y="220">O</text>
    <text x="180" y="220">O</text>
    <text x="76" y="297" font-size="13.5">HMF</text>
  </g>
  <polyline points="38,203 56,203 56,228"/>
  <polyline points="56,228 86,217"/>
  <polyline points="103,217 132,230 120,268 70,268 56,228"/>
  <line x1="74" y1="262" x2="62" y2="231"/>
  <line x1="116" y1="262" x2="125" y2="233"/>
  <line x1="132" y1="230" x2="158" y2="216"/>
  <line x1="158" y1="216" x2="177" y2="216"/>
  <line x1="158" y1="221" x2="177" y2="221"/>
</svg>`;

const SVG_Q63_NITRACAO = `<svg viewBox="0 0 540 125" class="w-full h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Benzene left -->
  <polygon points="40,42 64,28 88,42 88,70 64,84 40,70"/>
  <line x1="46" y1="45" x2="46" y2="67"/>
  <line x1="64" y1="34" x2="82" y2="45"/>
  <line x1="64" y1="78" x2="82" y2="67"/>
  <line x1="88" y1="42" x2="108" y2="30"/>

  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" fill="currentColor" stroke="none">
    <text x="110" y="33">H</text>
    <text x="128" y="65" font-size="16">+</text>
    <text x="150" y="64">HNO</text>
    <text x="183" y="69" font-size="10.5">3</text>
    <text x="235" y="38" font-size="13">H</text>
    <text x="245" y="32" font-size="10">+</text>
    <text x="224" y="51" font-size="10.5">(Concentrado)</text>
  </g>

  <!-- Reaction Arrow -->
  <line x1="205" y1="60" x2="294" y2="60"/>
  <polygon points="294,56 304,60 294,64" fill="currentColor" stroke="none"/>

  <!-- Nitrobenzene right -->
  <polygon points="325,48 349,34 373,48 373,76 349,90 325,76"/>
  <line x1="331" y1="51" x2="331" y2="73"/>
  <line x1="349" y1="40" x2="367" y2="51"/>
  <line x1="349" y1="84" x2="367" y2="73"/>
  <line x1="373" y1="48" x2="394" y2="36"/>

  <g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="currentColor" stroke="none">
    <text x="396" y="38">N</text>
    <text x="407" y="32" font-size="10">+</text>
    <text x="396" y="13">O</text>
    <text x="424" y="53">O</text>
    <text x="435" y="45" font-size="11">–</text>
    <text x="458" y="64" font-size="16">+</text>
    <text x="484" y="64">H</text>
    <text x="495" y="69" font-size="10.5">2</text>
    <text x="502" y="64">O</text>
  </g>
  <line x1="399" y1="24" x2="399" y2="15"/>
  <line x1="404" y1="24" x2="404" y2="15"/>
  <line x1="410" y1="36" x2="423" y2="44"/>
</svg>`;

const ESSAY_PROMPT_2026: EssayPrompt = {
  id: 'ufrr-2026-redacao',
  title: 'Propostas de Redação — Vestibular UFRR 2026',
  theme:
    'Tema 1: Os efeitos identitários na geração Z resultantes da cultura da performance em ambiente digital | Tema 2: Os impactos do uso excessivo da IA na capacidade intelectual e cognitiva do pensamento humano',
  instructions:
    'Escolha um dos dois temas propostos pela banca da UFRR 2026 e produza um texto dissertativo-argumentativo em até 25 linhas (com título na folha de rascunho/texto).',
  supportingTexts: [],
  themes: [
    {
      id: 'ufrr-2026-tema-1',
      label: 'Tema 1',
      theme:
        'NA CULTURA DA PERFORMANCE, O LAZER É SÓ MAIS UM JOB — Os efeitos identitários na geração Z resultantes da cultura da performance em ambiente digital.',
      instructions:
        'A partir da leitura do texto acima, elabore um texto dissertativo-argumentativo sobre: os efeitos identitários na geração Z resultantes da cultura da performance em ambiente digital.',
      supportingTexts: [
        {
          label: 'A Geração Z cresce sob a pressão de transformar até o tempo livre em entrega',
          content: `Na cultura digital contemporânea o que antes era descanso, prazer ou passatempo, hoje se transforma em palco de performance. Hobbies viram credencial, séries viram capital cultural, ir à academia vira selo de disciplina e autocuidado — tudo precisa ser mostrado, validado, produtivo. Há uma pressão constante para demonstrar que se está "vivendo bem", com um portfólio de interesses, hábitos saudáveis e repertório atualizado. O tempo livre, que deveria ser espaço de respiro, se torna mais uma arena de comparação. E essa lógica performática afeta em cheio a Gen Z, que cresceu mediando sua identidade por meio de telas, reações e algoritmos.

Essa geração sente que precisa estar sempre *on*, não só conectada, mas presente, relevante, interessante. Existe uma urgência em demonstrar valor até nos momentos de descontração — como se não bastasse assistir a uma série, é preciso entender a estética, a crítica, os memes. Como se o corpo na academia ou o prato do brunch precisassem ser parte de uma narrativa coerente sobre quem se é. No fundo, é a diluição da fronteira entre o ser e o parecer, entre o viver e o publicar.`,
          source:
            'Disponível em: https://casamundopesquisa.substack.com/i/161040322/na-cultura-da-performance-o-lazer-e-so-mais-um-job Acesso em: 27 jun. 25',
        },
      ],
      maxLines: 25,
    },
    {
      id: 'ufrr-2026-tema-2',
      label: 'Tema 2',
      theme:
        'SEDENTARISMO COGNITIVO: O QUE ACONTECE QUANDO DEIXAMOS A INTELIGÊNCIA ARTIFICIAL PENSAR POR NÓS?',
      instructions:
        'Diante do exposto, e a partir das suas reflexões sobre a leitura proposta acima, disserte sobre os impactos do uso excessivo da IA na capacidade intelectual e cognitiva do pensamento humano.',
      supportingTexts: [
        {
          label: 'Texto La Nación (adaptado)',
          content: `Todos os dias, as pessoas ouvem sobre as infinitas possibilidades que a inteligência artificial generativa (GenAI) pode fazer para aumentar a produtividade: traduzir, escrever, criar planos, sugerir itinerários, combinar ingredientes e muito mais. Isso leva muitas pessoas a se inclinarem para a dependência cognitiva dessas ferramentas, como foi o caso dos mecanismos de busca na Internet e da chegada dos smartphones.

Este fenômeno deu origem ao chamado “efeito Google”, que descreve a tendência de esquecer informações facilmente acessíveis online ou armazenadas em dispositivos móveis porque delegamos a eles a responsabilidade de lembrar desses dados. [...]

E se as capacidades desses novos algoritmos levassem os usuários a uma espécie de "sedentarismo intelectual" [...]?

Um estudo de 2024 da Universidade de Toronto descobriu que o uso de grandes modelos de linguagem e sistemas de IA generativos reduz a capacidade dos humanos de pensar criativamente, resultando em ideias mais homogêneas e convencionais e menos propostas inovadoras. Os pesquisadores dizem que, embora essas ferramentas possam melhorar o desempenho no curto prazo, elas podem reduzir a capacidade dos humanos de pensar de forma independente e criativa ao longo do tempo. [...]`,
          source:
            'Texto La Nación, adaptado de https://oglobo.globo.com/economia/tecnologia/noticia/2025/03/29/sedentarismo-cognitivo-o-que-acontece-quando-deixamos-a-inteligencia-artificial-pensar-por-nos.ghtml. Acesso em: 27 jun. 2025.',
        },
      ],
      maxLines: 25,
    },
  ],
  maxLines: 25,
  isDemoFixture: false,
};

export const UFRR_2026_QUESTIONS: Question[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    id: 'ufrr-2026-q01',
    examId: EXAM_ID,
    originalNumber: 1,
    originalCode: 'UFRR 2026 · Q01',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Arcadismo',
      subtopic: 'Tomás Antônio Gonzaga',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t1'],
    stem: 'O texto I foi retirado da obra *Marília de Dirceu*, de Tomás Antônio Gonzaga, e trata-se de:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Um poema lírico cuja temática é a idealização da figura feminina e a exaltação da natureza, características pertencentes ao período literário Romantismo, no qual o amor era visto como um refúgio na natureza.',
      },
      {
        letter: 'B',
        text: 'Um poema lírico cuja temática é a comparação da figura feminina à natureza e a exaltação do amor como algo sublime, características pertencentes ao período literário Realismo, no qual o amor era visto como um sentimento idílico.',
      },
      {
        letter: 'C',
        text: 'Um poema lírico cuja temática é a vida pastoril e o bucolismo, características pertencentes ao período literário Arcadismo, no qual se fazia o uso da expressão latina *fugere urbem* (fugir da cidade), para acentuar a vida no campo como lugar ideal para a felicidade.',
      },
      {
        letter: 'D',
        text: 'Um poema lírico cuja temática é a vida pastoril e o bucolismo, características pertencentes ao período literário Arcadismo, no qual fazia-se o uso da expressão latina *carpe diem* (aproveitar o dia), para acentuar a busca pela felicidade no amor.',
      },
      {
        letter: 'E',
        text: 'Um poema lírico cuja temática é a idealização da natureza e do amor sublime, características pertencentes ao período literário Naturalismo, no qual fazia-se uso da expressão *aureo mediocratis* (equilíbrio dourado), como defesa de uma vida simples e moderada, sem excessos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q01', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2026-q02',
    examId: EXAM_ID,
    originalNumber: 2,
    originalCode: 'UFRR 2026 · Q02',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Morfologia e Formação de Palavras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t1'],
    stem: 'Considerando o texto I e de acordo com as regras gramaticais de estrutura e formação das palavras, é CORRETO afirmar que as palavras em destaque foram compostas pelos seguintes processos de formação, respectivamente:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Derivação prefixal, derivação parassintética.' },
      { letter: 'B', text: 'Derivação sufixal, derivação prefixal e sufixal.' },
      { letter: 'C', text: 'Derivação sufixal, derivação prefixal.' },
      { letter: 'D', text: 'Derivação imprópria, derivação parassintética.' },
      { letter: 'E', text: 'Derivação sufixal, derivação sufixal.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q02', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2026-q03',
    examId: EXAM_ID,
    originalNumber: 3,
    originalCode: 'UFRR 2026 · Q03',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Figuras de Linguagem',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t2'],
    stem: 'Com relação ao texto II, pode-se observar que há a predominância de duas figuras de linguagem. A alternativa que as classifica de maneira CORRETA é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Metáfora, sinestesia.' },
      { letter: 'B', text: 'Personificação, metáfora.' },
      { letter: 'C', text: 'Personificação, catacrese.' },
      { letter: 'D', text: 'Personificação, sinestesia.' },
      { letter: 'E', text: 'Comparação, sinestesia.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q03', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2026-q04',
    examId: EXAM_ID,
    originalNumber: 4,
    originalCode: 'UFRR 2026 · Q04',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Realismo e Naturalismo',
      subtopic: 'O Ateneu — Raul Pompéia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t3'],
    stem: 'A partir da leitura completa da obra *O Ateneu* e do texto III, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A obra retrata a vida escolar de Sérgio, sendo narrada por ele mesmo aos 11 anos de idade, e explora os acontecimentos que o marcam dentro do ambiente escolar hostil.',
      },
      {
        letter: 'B',
        text: 'A obra apropriou-se das tendências literárias do final do século XIX e apresenta trechos com evidentes referências às teorias determinista e da evolução de Darwin.',
      },
      {
        letter: 'C',
        text: 'A obra denuncia, entre outros temas, o autoritarismo, a corrupção e a opressão vivenciados em espaço escolar, a partir das experiências de Sérgio adulto.',
      },
      {
        letter: 'D',
        text: 'A respeito das personagens, a obra apresenta ao leitor descrições: físicas, de maneira excêntrica; e psicológicas, de maneira subjetiva e detalhada.',
      },
      {
        letter: 'E',
        text: 'A obra tem caráter memorialístico e, embora seja classificada como naturalista, apresenta algumas características realistas, impressionistas e expressionistas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q04', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2026-q05',
    examId: EXAM_ID,
    originalNumber: 5,
    originalCode: 'UFRR 2026 · Q05',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Semântica e Dêixis',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t3'],
    stem: 'Com relação ao “ali” destacado no texto III, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'É um advérbio que tem valor dêitico-temporal.' },
      { letter: 'B', text: 'É um advérbio que tem valor dêitico-epanafórico.' },
      { letter: 'C', text: 'É um advérbio que tem valor dêitico-discursivo.' },
      { letter: 'D', text: 'É um advérbio que tem valor dêitico-espacial.' },
      { letter: 'E', text: 'É um advérbio que tem valor dêitico-social.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q05', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2026-q06',
    examId: EXAM_ID,
    originalNumber: 6,
    originalCode: 'UFRR 2026 · Q06',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Interpretação Literária',
      subtopic: 'O Ateneu — Raul Pompéia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t4'],
    stem: 'O fragmento “como num claustro”, retirado do texto IV acima, é uma comparação feita pelo autor para indicar:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Maturidade.' },
      { letter: 'B', text: 'Religiosidade.' },
      { letter: 'C', text: 'Musicalidade.' },
      { letter: 'D', text: 'Objetividade.' },
      { letter: 'E', text: 'Mortalidade.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q06', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2026-q07',
    examId: EXAM_ID,
    originalNumber: 7,
    originalCode: 'UFRR 2026 · Q07',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Contemporânea',
      subtopic: 'Becos da Memória — Conceição Evaristo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t5'],
    stem: `A partir dos fragmentos e considerando a leitura integral da obra *Becos da Memória*, da escritora Conceição Evaristo, observa-se que a autora constrói uma narrativa em que memória, fabulação e resistência se entrelaçam como mecanismos de reexistência. O passado individual da narradora ganha também uma dimensão coletiva na obra, transformando-se em denúncia das violências sociais sofridas na/pela comunidade.

Diante desse contexto, assinale a alternativa que representa CORRETAMENTE o papel do conceito de memória na construção narrativa de *Becos da Memória*:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A narração acompanha a tentativa da protagonista de apagar as dores do passado, reinventando-se como forma de superação individual.',
      },
      {
        letter: 'B',
        text: 'A memória da narradora é marcada por uma nostalgia intimista, voltada à preservação idealizada da infância e das experiências vividas no beco.',
      },
      {
        letter: 'C',
        text: 'A presença da fabulação revela a incapacidade da narradora de distinguir o real do imaginário, tornando seu testemunho pouco confiável.',
      },
      {
        letter: 'D',
        text: 'O beco surge como um espaço de marginalidade absoluta, desprovido de simbolismo e significado histórico para a narradora.',
      },
      {
        letter: 'E',
        text: 'A escrita configura-se como uma reconstrução afetiva e política de um espaço social silenciado, em que a memória, mesmo fragmentada, torna-se um ato de resistência e denúncia.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q07', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2026-q08',
    examId: EXAM_ID,
    originalNumber: 8,
    originalCode: 'UFRR 2026 · Q08',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe do Período Composto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t5'],
    stem: 'Com base no fragmento I do texto V, extraído da obra *Becos da Memória*, de Conceição Evaristo, analise as estruturas oracionais que o compõem. Considerando os processos sintáticos envolvidos, especialmente quanto às oraçōes subordinadas e aos termos da oração, assinale a alternativa CORRETA:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'No trecho “como a memória é também vítima do esquecimento, invento, invento”, a oração com “como” está fazendo uma comparação com a ação de inventar, indicando semelhança entre as ideias.',
      },
      {
        letter: 'B',
        text: 'O período “Escrevo sabendo que estou perseguindo uma sombra” é formado por duas orações principais, ligadas sem conectivo, ou seja, por coordenação.',
      },
      {
        letter: 'C',
        text: 'No trecho “Um deles insiste: resistência, resistência, resistência...”, a palavra “resistência” funciona como sujeito da oração e exerce a ação de insistir.',
      },
      {
        letter: 'D',
        text: 'Em “Escrevo sabendo que estou perseguindo uma sombra”, a parte “sabendo que estou perseguindo uma sombra” mostra o modo como a ação de escrever acontece. O trecho “que estou perseguindo uma sombra” completa o sentido do verbo “sabendo”.',
      },
      {
        letter: 'E',
        text: 'Em “na tentativa de recompor esse tecido esgarçado ao longo do tempo, escrevo”, a expressão “de recompor esse tecido...” é o sujeito da oração, pois é quem faz a ação de escrever.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q08', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2026-q09',
    examId: EXAM_ID,
    originalNumber: 9,
    originalCode: 'UFRR 2026 · Q09',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Colocação Pronominal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-pt-t5'],
    stem: 'Considerando a norma padrão da língua portuguesa e a possibilidade de reescrita do trecho da *Becos da Memória*, de Conceição Evaristo: “sabendo que estou perseguindo uma sombra”, assinale a alternativa que apresenta uma análise CORRETA sobre a colocação pronominal e seus efeitos de sentido:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Caso a autora tivesse usado o pronome “me” com o verbo “perseguindo”, a forma adequada seria “estou me perseguindo”, pois o verbo “sabendo” não impede o uso da próclise.',
      },
      {
        letter: 'B',
        text: 'A reescrita do trecho com próclise “que me estou perseguindo” estaria em desacordo com a norma padrão, pois a colocação do pronome antes do verbo auxiliar não é permitida em construções desse tipo.',
      },
      {
        letter: 'C',
        text: 'A posição do pronome em “estou perseguindo” respeita a regra da próclise, pois a forma verbal iniciada por gerúndio exige, obrigatoriamente, a colocação do pronome antes do verbo.',
      },
      {
        letter: 'D',
        text: 'A construção “estou perseguindo” admite a próclise do pronome por conta da forma verbal composta (verbo auxiliar + principal), mas a ênfase da autora justificaria também a ênclise: “perseguindo-me”.',
      },
      {
        letter: 'E',
        text: 'Segundo a norma padrão, a única forma correta para expressar essa ideia com pronome oblíquo seria “perseguindo-me”, já que orações subordinadas exigem sempre a ênclise.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q09', correctLetter: null },
    provenance: makeProv(6),
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    id: 'ufrr-2026-q10',
    examId: EXAM_ID,
    originalNumber: 10,
    originalCode: 'UFRR 2026 · Q10',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Funções Compostas e Bijetoras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se $f: \\mathbb{R} \\to \\mathbb{R}$ e $h: \\mathbb{R} \\to \\mathbb{R}$ são funções reais, não constantes e bijetoras tais que

I. $(f + h)$ é injetora e sobrejetora
II. $f \\circ (f + h) = h$
III. $h \\circ (f + h) = f$

O valor de $h(2026)$ é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$2026$' },
      { letter: 'B', text: '$506,5$' },
      { letter: 'C', text: '$1013$' },
      { letter: 'D', text: '$2025$' },
      { letter: 'E', text: '$4052$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q10', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2026-q11',
    examId: EXAM_ID,
    originalNumber: 11,
    originalCode: 'UFRR 2026 · Q11',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana',
      subtopic: 'Circunferência e Áreas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Seja $\\Omega$ uma circunferência de centro $O$, na qual os pontos $A$, $B$, $C$ e $D$ pertencem a $\\Omega$, com $O \\in \\overline{AD}$, $\\overline{AC} \\cap \\overline{BO} = \\{F\\}$, $\\overline{AC} \\cap \\overline{BD} = \\{E\\}$ e $\\overline{BO} \\perp \\overline{AD}$. Se $\\overline{AF} = 3$ e $\\overline{EC} = 1$ então a área do triângulo $\\triangle FED$ é:',
    graphics: [
      {
        id: 'ufrr-2026-g-q11',
        type: 'image',
        imageUrl: '/exam-assets/2026/q11-circulo.png',
        altText: 'Circunferência de centro O com diâmetro AD, raio OB perpendicular a AD, cordas AC e BD cruzando-se em E e triângulo FED destacado.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$2,5$' },
      { letter: 'B', text: '$2$' },
      { letter: 'C', text: '$1,5$' },
      { letter: 'D', text: '$1$' },
      { letter: 'E', text: '$3$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q11', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2026-q12',
    examId: EXAM_ID,
    originalNumber: 12,
    originalCode: 'UFRR 2026 · Q12',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana',
      subtopic: 'Polígonos Regulares',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Na figura, está representada uma parte de um polígono regular. Se $D\\hat{A}B = y$ e $D\\hat{A}E = 13y$, então o número de diagonais desse polígono é?',
    graphics: [
      {
        id: 'ufrr-2026-g-q12',
        type: 'image',
        imageUrl: '/exam-assets/2026/q12-poligono.png',
        altText: 'Parte de um polígono regular com vértices consecutivos E, A, B, C, D e ângulos DAB = y e DAE = 13y.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$243$' },
      { letter: 'B', text: '$405$' },
      { letter: 'C', text: '$170$' },
      { letter: 'D', text: '$810$' },
      { letter: 'E', text: '$520$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q12', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2026-q13',
    examId: EXAM_ID,
    originalNumber: 13,
    originalCode: 'UFRR 2026 · Q13',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Trigonometria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Se $x \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ e $3\\operatorname{sen} x - 2 = 0$, então o valor de $\\cos(3x)$ é igual a:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\dfrac{7\\sqrt{5}}{27}$' },
      { letter: 'B', text: '$\\dfrac{7\\sqrt{5}}{9}$' },
      { letter: 'C', text: '$-\\dfrac{7\\sqrt{5}}{9}$' },
      { letter: 'D', text: '$\\dfrac{5\\sqrt{5}}{27}$' },
      { letter: 'E', text: '$-\\dfrac{7\\sqrt{5}}{27}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q13', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2026-q14',
    examId: EXAM_ID,
    originalNumber: 14,
    originalCode: 'UFRR 2026 · Q14',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Trigonometria e Geometria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'No gráfico abaixo, o arco $\\widehat{PNR}$ é parte de uma circunferência de centro $O$, $MN$ é paralelo a $OR$ e $PO$ é perpendicular a $OR$. Se $\\alpha \\in \\left(0, \\frac{\\pi}{2}\\right)$, $OM=2$ e $MN=1$, então o valor da cotangente de $\\alpha$ é igual a:',
    graphics: [
      {
        id: 'ufrr-2026-g-q14',
        type: 'image',
        imageUrl: '/exam-assets/2026/q14-arco.png',
        altText: 'Setor circular PNR de centro O, segmento perpendicular PO a OR, segmento MN paralelo a OR e ângulo alfa em R.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$\\dfrac{\\sqrt{5}+1}{2}$' },
      { letter: 'B', text: '$\\dfrac{2}{\\sqrt{5}-1}$' },
      { letter: 'C', text: '$\\dfrac{\\sqrt{5}-1}{2}$' },
      { letter: 'D', text: '$\\dfrac{4}{\\sqrt{5}+1}$' },
      { letter: 'E', text: '$\\dfrac{\\sqrt{3}-1}{2}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q14', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2026-q15',
    examId: EXAM_ID,
    originalNumber: 15,
    originalCode: 'UFRR 2026 · Q15',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Sequências, Fatoriais e Somatórios',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O valor da soma:

$$S = \\frac{1!}{3!} + \\frac{2!}{4!} + \\frac{3!}{5!} + \\frac{4!}{6!} + \\cdots + \\frac{2024!}{2026!}$$

é igual a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\dfrac{1012}{1013}$' },
      { letter: 'B', text: '$\\dfrac{1012}{2024}$' },
      { letter: 'C', text: '$\\dfrac{1010}{2024}$' },
      { letter: 'D', text: '$\\dfrac{1010}{2026}$' },
      { letter: 'E', text: '$\\dfrac{1012}{2026}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q15', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2026-q16',
    examId: EXAM_ID,
    originalNumber: 16,
    originalCode: 'UFRR 2026 · Q16',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica',
      subtopic: 'Divisão de Segmento',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O trajeto de uma corrida é representado pelo segmento $AB$, sendo o ponto de partida $A=(2,1)$ e o ponto de chegada $B=(5,5)$. A posição de um participante ao completar $1/3$ do trajeto é representada pelo ponto $C$ de coordenadas:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$(3; 7/3)$' },
      { letter: 'B', text: '$(3; 4/3)$' },
      { letter: 'C', text: '$(4; 7/3)$' },
      { letter: 'D', text: '$(4; 4/3)$' },
      { letter: 'E', text: '$(7/2; 2)$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q16', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2026-q17',
    examId: EXAM_ID,
    originalNumber: 17,
    originalCode: 'UFRR 2026 · Q17',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Polinômios e Equações Algébricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Sejam **$r$**, **$s$** e **$t$** as raízes da equação $x^3 - 4x^2 + 6x - 4 = 0$ e **$u$**, **$v$** e **$w$** as raízes da equação $x^3 - 3x^2 + 4x - 2 = 0$.

Podemos afirmar que o valor do produto **$r \\cdot s \\cdot t \\cdot u \\cdot v \\cdot w$** é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$24$' },
      { letter: 'B', text: '$1/24$' },
      { letter: 'C', text: '$-8$' },
      { letter: 'D', text: '$8$' },
      { letter: 'E', text: '$1/8$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q17', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2026-q18',
    examId: EXAM_ID,
    originalNumber: 18,
    originalCode: 'UFRR 2026 · Q18',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica',
      subtopic: 'Cônicas — Elipse',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Os pontos $F_1$ e $F_2$ são focos da cônica $C$: $9x^2 + 25y^2 - 225 = 0$. Sabendo que o ponto $P$ pertence a $C$ e que a distância de $P$ a $F_2$ é $1$, então a distância de $P$ a $F_1$ é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$5$' },
      { letter: 'B', text: '$3$' },
      { letter: 'C', text: '$1$' },
      { letter: 'D', text: '$8$' },
      { letter: 'E', text: '$9$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q18', correctLetter: null },
    provenance: makeProv(8),
  },

  // ================= BIOLOGIA (Q19–Q27) =================
  {
    id: 'ufrr-2026-q19',
    examId: EXAM_ID,
    originalNumber: 19,
    originalCode: 'UFRR 2026 · Q19',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Bioenergética Celular',
      subtopic: 'Respiração Aeróbica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Células eucarióticas apresentam mitocôndrias, usinas geradoras de energia que usam um processo metabólico para converter o alimento que você ingere e o ar que você respira em energia que seu corpo necessita para funcionar. Considerando a respiração aeróbica em eucariotos e o respectivo local de ocorrência de cada uma das reações, assinale a alternativa CORRETA:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Glicólise ocorre no citosol, ciclo de Krebs na membrana interna da mitocôndria e cadeia respiratória na membrana externa da mitocôndria.',
      },
      {
        letter: 'B',
        text: 'Glicólise ocorre na matriz mitocondrial, ciclo de Krebs na membrana interna da mitocôndria e cadeia respiratória no espaço intermembranas.',
      },
      {
        letter: 'C',
        text: 'Glicólise ocorre no citosol, ciclo de Krebs na matriz mitocondrial e cadeia respiratória na membrana interna da mitocôndria.',
      },
      {
        letter: 'D',
        text: 'Glicólise ocorre na matriz mitocondrial, ciclo de Krebs no espaço intermembranas e cadeia respiratória na membrana interna da mitocôndria.',
      },
      {
        letter: 'E',
        text: 'Glicólise ocorre na membrana externa da mitocôndria, ciclo de Krebs na matriz mitocondrial e cadeia respiratória na membrana interna da mitocôndria.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q19', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2026-q20',
    examId: EXAM_ID,
    originalNumber: 20,
    originalCode: 'UFRR 2026 · Q20',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Bioenergética Celular',
      subtopic: 'Fotossíntese',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Todos os itens listados a seguir se referem ao processo de fotossíntese:

I. Fotólise da água;
II. Fixação de $\\text{CO}_2$ pela enzima rubisco;
III. Liberação de $\\text{O}_2$;
IV. Redução do $\\text{NADP}$ a $\\text{NADPH}$;
V. Consumo de $\\text{NADPH}$ e $\\text{ATP}$.

Assinale a alternativa que contém os itens referentes à etapa química da fotossíntese.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Somente I e IV.' },
      { letter: 'B', text: 'Somente II e V.' },
      { letter: 'C', text: 'Somente III e V.' },
      { letter: 'D', text: 'Somente I, II e III.' },
      { letter: 'E', text: 'Somente II, III e IV.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q20', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2026-q21',
    examId: EXAM_ID,
    originalNumber: 21,
    originalCode: 'UFRR 2026 · Q21',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Ciclo Celular e Divisão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'As mutações no câncer que afetam o controle do ciclo celular permitem a divisão celular contínua, principalmente por comprometerem a capacidade das células de sair do ciclo. Sobre as fases do ciclo celular, assinale a alternativa CORRETA:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A mitose é a fase relacionada com a formação de gametas e esporos.',
      },
      {
        letter: 'B',
        text: 'Na mitose, a separação das cromátides ocorre durante a fase G.',
      },
      {
        letter: 'C',
        text: 'Na interfase, a duplicação do DNA ocorre durante a fase S.',
      },
      {
        letter: 'D',
        text: 'A interfase é a fase em que uma célula dá origem a células haplóides.',
      },
      {
        letter: 'E',
        text: 'Na interfase, a condensação do DNA ocorre durante a citocinese.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q21', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2026-q22',
    examId: EXAM_ID,
    originalNumber: 22,
    originalCode: 'UFRR 2026 · Q22',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Microbiologia e Saúde Pública',
      subtopic: 'Influenza Aviária',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'No dia 15 de maio de 2025, o Ministério da Agricultura, Pecuária e Abastecimento (MAPA), confirmou a detecção do vírus da influenza aviária de alta patogenicidade (IAAP) em uma granja de aves comerciais no município de Montenegro (RS) (MAPA, 2025). Sobre a influenza aviária, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'É uma doença viral altamente contagiosa que afeta várias espécies de aves domésticas e silvestres e, ocasionalmente alguns mamíferos, bem como o homem.',
      },
      {
        letter: 'B',
        text: 'É uma doença causada pelo vírus H5N1, que afeta aves, e que pode ser transmitido a humanos quando estes ingerem a carne das aves contaminadas ou consomem seus ovos.',
      },
      {
        letter: 'C',
        text: 'É uma doença causada pelo vírus H5N1, que afeta aves, e que pode ser transmitido a humanos por meio do contato direto com as aves infectadas ou por meio de secreções liberadas por elas.',
      },
      {
        letter: 'D',
        text: 'A influenza aviária é uma doença de distribuição mundial e com graves consequências ao comércio internacional de produtos avícolas.',
      },
      {
        letter: 'E',
        text: 'O vírus H5N1 penetra no corpo com o ar inspirado ou pelas mucosas (boca, nariz e olhos), com sintomas semelhantes aos de uma gripe: febre e dores na cabeça e no corpo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q22', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2026-q23',
    examId: EXAM_ID,
    originalNumber: 23,
    originalCode: 'UFRR 2026 · Q23',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Ecologia Marinha e Impactos Ambientais',
      subtopic: 'Branqueamento de Corais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A Década das Nações Unidas sobre Ciência Oceânica, que vai de 2021 a 2030, foi pensada para ajudar a preencher lacunas de conhecimento, além de promover alfabetização oceânica. Uma das grandes preocupações dos pesquisadores é que os corais de todo o mundo estão sofrendo com um fenômeno chamado de branqueamento. Sobre esse fenômeno, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O aumento da temperatura, provocado pelo aquecimento global, não tem relação com esse fenômeno.',
      },
      {
        letter: 'B',
        text: 'Os corais não correm o risco de desaparecer por conta do fenômeno do branqueamento.',
      },
      {
        letter: 'C',
        text: 'A diminuição da concentração de gás carbônico vem provocando diminuição da acidez da água do mar, o que dificulta a formação do esqueleto dos corais, feito de carbonato de cálcio.',
      },
      {
        letter: 'D',
        text: 'O branqueamento é a perda das algas que vivem associadas aos corais.',
      },
      {
        letter: 'E',
        text: 'Os corais, muitas vezes formados de cores variadas, se tornam escuros quando estão sob estresse.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q23', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2026-q24',
    examId: EXAM_ID,
    originalNumber: 24,
    originalCode: 'UFRR 2026 · Q24',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Taxonomia e Sistemática',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Atualmente, a classificação feita dos seres vivos está relacionada a processos evolutivos que só começaram a ser mais aceitos a partir da publicação do livro de Charles Darwin (1809-1882), intitulado *A origem das espécies*.

Sobre essa classificação, analise as afirmativas abaixo:

I. Os sistemas de classificação que se baseiam em relações evolutivas entre os grupos de seres vivos são considerados naturais.
II. As regras de nomenclatura dificultam a comunicação entre pessoas de diferentes nacionalidades e idiomas.
III. O nome da espécie é sempre duplo e é formado por duas palavras escritas em itálico ou sublinhadas.
IV. Atualmente, são sete categorias obrigatórias hierárquicas constantes do Código Internacional de Nomenclatura Zoológica e do Código Internacional de Nomenclatura Botânica.

Considerando as informações que envolvem taxonomia e sistemática, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Estão corretas apenas as afirmativas III e IV.' },
      { letter: 'B', text: 'Estão corretas apenas as afirmativas I, II e III.' },
      { letter: 'C', text: 'Estão corretas apenas as afirmativas I, III e IV.' },
      { letter: 'D', text: 'Estão corretas apenas as afirmativas I e IV.' },
      { letter: 'E', text: 'Estão corretas apenas as afirmativas I e II.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q24', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2026-q25',
    examId: EXAM_ID,
    originalNumber: 25,
    originalCode: 'UFRR 2026 · Q25',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Microbiologia e Resistência Antimicrobiana',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Superbactérias são bactérias resistentes a vários antibióticos.
Com relação à resistência aos antimicrobianos, assinale a alternativa INCORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Água contaminada com antibióticos pode dar início ao surgimento de patógenos resistentes a antibióticos.',
      },
      {
        letter: 'B',
        text: 'Bactérias resistentes são incapazes de transmitir a resistência para outras bactérias por meio da conjugação.',
      },
      {
        letter: 'C',
        text: 'Pode ter relação com o uso excessivo e inadequado de antibióticos por humanos.',
      },
      {
        letter: 'D',
        text: 'Em ambiente hospitalar, há uma seleção de genes bacterianos que determinam a resistência a antibióticos.',
      },
      {
        letter: 'E',
        text: 'Pode ser explicada pelo uso inadequado de antibióticos na agricultura e na pecuária, especialmente em animais utilizados para o consumo humano.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q25', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2026-q26',
    examId: EXAM_ID,
    originalNumber: 26,
    originalCode: 'UFRR 2026 · Q26',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Ecologia Aplicada e Agrotóxicos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `As culturas agrícolas, de modo geral, são muito sensíveis ao ataque de pragas. Por conta disso, o ser humano criou diversos tipos de defensivos agrícolas que protegem as sementes, as plantações e os alimentos estocados contra o ataque de pragas.

Considere as seguintes afirmações sobre defensivos agrícolas e assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A degradação de alguns pesticidas, como os organoclorados, dos quais o diclorodifeniltricloretano (DDT) é um exemplo, é rápida e não tendem a se acumular ao longo das cadeias alimentares.',
      },
      {
        letter: 'B',
        text: 'Os agrotóxicos não destroem insetos que se alimentam de pragas nocivas, como louva-a-deus, as vespas e as joaninhas.',
      },
      {
        letter: 'C',
        text: 'O uso prolongado de inseticidas não favorece o surgimento de linhagens naturalmente resistentes aos seus efeitos.',
      },
      {
        letter: 'D',
        text: 'Os agrotóxicos podem ser vendidos sem a receita de um agrônomo, pois não é obrigatório por lei.',
      },
      {
        letter: 'E',
        text: 'No Brasil, o uso de DDT e de outros organoclorados é proibido e utilizam-se outros grupos de defensivos cuja degradação é mais rápida.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q26', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2026-q27',
    examId: EXAM_ID,
    originalNumber: 27,
    originalCode: 'UFRR 2026 · Q27',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Bioquímica',
      subtopic: 'Ácidos Nucleicos (DNA e RNA)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `As moléculas de RNA são constituídas por nucleotídeos que apresentam os mesmos constituintes básicos do DNA, diferindo apenas quanto ao tipo de açúcar e uma das bases nitrogenadas.

Assinale a alternativa que caracteriza CORRETAMENTE a diferença entre RNA e DNA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O açúcar do RNA é a ribose e quanto à base nitrogenada: ao invés de timina (T), ocorre a uracila (U).',
      },
      {
        letter: 'B',
        text: 'O açúcar do RNA é a desoxirribose e quanto à base nitrogenada: ao invés de timina (T), ocorre a uracila (U).',
      },
      {
        letter: 'C',
        text: 'O açúcar do RNA é a desoxirribose e quanto à base nitrogenada: ao invés de uracila (U), ocorre a timina (T),',
      },
      {
        letter: 'D',
        text: 'O açúcar do RNA é a ribose e quanto à base nitrogenada: ao invés de uracila (U), ocorre a timina (T),',
      },
      {
        letter: 'E',
        text: 'O açúcar do RNA é uma polimerase e quanto à base nitrogenada: ao invés de adenina (A), ocorre a uracila (U).',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q27', correctLetter: null },
    provenance: makeProv(10),
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    id: 'ufrr-2026-q28',
    examId: EXAM_ID,
    originalNumber: 28,
    originalCode: 'UFRR 2026 · Q28',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Cinemática Vetorial e Velocidade Relativa',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Chiquito estava pescando no rio próximo à aldeia, quando viu sua amiga Cecíria remando uma canoa contra a correnteza. Ele, enquanto se divertia vendo o esforço da amiga, lembrou-se de suas aulas de física e ficou pensando sobre os conceitos de física envolvidos na cena que presenciava.

Considerando que $V_c$ é o módulo da velocidade da canoa, $V_r \\neq 0$ e constante é o módulo da velocidade da água do rio, ambas em relação a Chiquito, e que $V_{cr}$ é o módulo da velocidade da canoa em relação ao rio, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Se $V_{cr}=0$, Chiquito verá sua amiga descendo o rio.' },
      { letter: 'B', text: 'Se $V_c$ for menor que $V_r$, Chiquito verá sua amiga subindo o rio.' },
      { letter: 'C', text: 'Se $V_c$ for maior que $V_r$, Chiquito verá sua amiga descendo o rio.' },
      { letter: 'D', text: 'Se $V_c=0$, então $V_{cr}=0$.' },
      {
        letter: 'E',
        text: 'Se $V_c$ for igual a $V_r$, mas as velocidades da canoa e do rio tiverem sentidos contrários, então $V_{cr}=0$.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q28', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2026-q29',
    examId: EXAM_ID,
    originalNumber: 29,
    originalCode: 'UFRR 2026 · Q29',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Trabalho e Energia Mecânica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um dispositivo industrial utilizado para testes de aerodinâmica impulsiona um corpo de massa $1\\text{ kg}$ sobre um trilho, partindo do repouso e da origem das posições. A força $F$ aplicada no corpo é uma função linear da posição. Desconsiderando as forças de atrito e sabendo que, na posição $40\\text{ m}$, o módulo da força vale $F = 40b\\text{ N}$ e na posição $75\\text{ m}$, vale $F = 75b\\text{ N}$, onde $b$ é uma constante diferente de zero, qual o trabalho realizado pela força exercida sobre o corpo desde a origem até a posição $8\\text{ m}$?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$8b\\text{ J}$' },
      { letter: 'B', text: '$75\\text{ J}$' },
      { letter: 'C', text: '$40\\text{ N}\\cdot\\text{m}$' },
      { letter: 'D', text: '$32b\\text{ N}\\cdot\\text{m}$' },
      { letter: 'E', text: '$320b\\text{ J}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q29', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2026-q30',
    examId: EXAM_ID,
    originalNumber: 30,
    originalCode: 'UFRR 2026 · Q30',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Dinâmica do Movimento Circular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Durante o recreio, os curumins se divertem brincando e correndo pelo pátio da escola. Alguns deles brincam com um pedaço de madeira amarrado em uma corda. Eles giram o brinquedo sobre a cabeça e largam a corda. Vence quem consegue lançar o pedaço de madeira mais longe. Nessa brincadeira há conceitos físicos envolvidos. Sabendo disso, assinale a alternativa INCORRETA.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Existe uma força na corda que aponta para a mão do curumim.' },
      { letter: 'B', text: 'O peso do pedaço de madeira aponta sempre para a terra.' },
      {
        letter: 'C',
        text: 'A distância que o pedaço de madeira alcançará depende de sua velocidade tangencial.',
      },
      {
        letter: 'D',
        text: 'Sem a força centrípeta o pedaço de madeira não poderia se manter em uma trajetória curvilínea.',
      },
      {
        letter: 'E',
        text: 'A velocidade escalar média angular do pedaço de madeira e a velocidade escalar média tangencial são independentes.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q30', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2026-q31',
    examId: EXAM_ID,
    originalNumber: 31,
    originalCode: 'UFRR 2026 · Q31',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Acústica e Efeito Doppler',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um morcego voa diretamente em direção a uma grande parede rochosa vertical com velocidade constante $V_1$, emitindo pulsos de ultrassom de frequência $f_o$. O som reflete na parede e retorna, sendo detectado pelo próprio morcego. A parede rochosa pode ser considerada um refletor estacionário. A velocidade do som no ar local é $V_2$.

O processo de detecção do eco inclui, além de $f_o$, duas outras frequências devido ao efeito Doppler ($f_1$ e $f_2$). Este processo pode ser analisado em duas etapas:

1. A frequência $f_1$ com que as ondas sonoras emitidas pelo morcego atingem a parede.
2. A frequência $f_2$ do som refletido pela parede percebida pelo morcego que se aproxima dessa "nova fonte".

Qual das seguintes expressões representa CORRETAMENTE a frequência $f_2$ do eco percebido pelo morcego, considerando as etapas do fenômeno?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$f_2 = f_o \\times \\dfrac{V_2 - V_1}{V_2 + V_1}$' },
      { letter: 'B', text: '$f_2 = f_o \\times \\dfrac{V_2}{V_2 + V_1}$' },
      { letter: 'C', text: '$f_2 = f_o \\times \\dfrac{V_2 - V_1}{V_2}$' },
      { letter: 'D', text: '$f_2 = f_o \\times \\dfrac{V_2 + V_1}{V_2}$' },
      { letter: 'E', text: '$f_2 = \\left[f_o \\times \\dfrac{V_2}{V_2 - V_1}\\right] \\times \\left[\\dfrac{V_2 + V_1}{V_2}\\right]$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q31', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2026-q32',
    examId: EXAM_ID,
    originalNumber: 32,
    originalCode: 'UFRR 2026 · Q32',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Ondulatória',
      subtopic: 'Interferência, Polarização e Difração',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Considerando os fenômenos ondulatórios, qual das seguintes afirmações é CORRETA quando comparamos e aplicamos os conceitos de interferência, polarização e difração às ondas sonoras no ar e às ondas em uma corda esticada?',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A polarização da luz por certos óculos de sol é o mesmo fenômeno que ocorre quando ondas sonoras atravessam as grades de um portão.',
      },
      {
        letter: 'B',
        text: 'Tanto as ondas sonoras no ar, quanto as ondas em uma corda, podem sofrer difração ao contornar obstáculos. Elas também podem sofrer interferência ao se encontrarem com ondas iguais, mas percorrendo caminhos diferentes.',
      },
      {
        letter: 'C',
        text: 'A difração das ondas sonoras ao passarem por uma abertura estreita entre dois objetos resulta em uma mudança na frequência do som percebido por um observador.',
      },
      {
        letter: 'D',
        text: 'Ondas em uma corda esticada não podem sofrer interferência destrutiva, mas sofrem difração ao passar por um obstáculo pequeno.',
      },
      {
        letter: 'E',
        text: 'A interferência sonora é causada pela polarização das ondas sonoras quando refletidas em uma superfície. A difração não ocorre para ondas mecânicas, sendo um fenômeno exclusivo de ondas eletromagnéticas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q32', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2026-q33',
    examId: EXAM_ID,
    originalNumber: 33,
    originalCode: 'UFRR 2026 · Q33',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Termologia e Radiação Térmica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Dois pequenos discos, X e Y, de mesma massa e feitos de materiais distintos, estão inicialmente à mesma temperatura ambiente $T_o$. O disco X possui uma superfície de cor preta e o disco Y, uma superfície de cor branca. Eles são colocados em uma câmara de vácuo. Os discos são, simultaneamente, iluminados por uma fonte de luz branca que fornece certa quantidade de energia luminosa, durante o mesmo intervalo de tempo $\\Delta t$. Observa-se que, ao final desse tempo, a temperatura do Disco X ($T_X$) é maior que a do Disco Y ($T_Y$). Nenhum dos discos sofre mudança de estado físico.

Considerando que a energia luminosa, a qual não é refletida pelos discos, é totalmente convertida em energia interna, e que perdas térmicas dos discos para o ambiente são desprezíveis, qual das seguintes afirmações explica CORRETAMENTE essa diferença entre as temperaturas?`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O disco Y, por ter uma superfície branca, absorve uma fração maior da energia luminosa, fazendo com que sua temperatura final seja maior que a temperatura final do disco X.',
      },
      {
        letter: 'B',
        text: 'O disco X reflete a maior parte da energia luminosa incidente, em comparação ao disco Y, o qual não reflete nenhuma parcela da energia luminosa incidente.',
      },
      {
        letter: 'C',
        text: 'A fonte de luz libera mais energia na forma de calor direto (radiação infravermelha não visível) para o disco X do que para o disco Y.',
      },
      {
        letter: 'D',
        text: 'A diferença de temperatura final dos dois discos se deve, unicamente, à diferença de suas capacidades térmicas.',
      },
      {
        letter: 'E',
        text: 'O disco X absorve uma fração maior da energia luminosa incidente do que o Disco Y, fazendo com que sua temperatura final seja maior que a temperatura final do disco Y.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q33', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2026-q34',
    examId: EXAM_ID,
    originalNumber: 34,
    originalCode: 'UFRR 2026 · Q34',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrodinâmica',
      subtopic: 'Corrente e Carga Elétrica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um estudante de Física desenvolveu um protótipo de tela *touch screen* resistiva como parte de seu trabalho acadêmico. O dispositivo utiliza sensores que, durante o funcionamento, permitem a passagem de uma corrente elétrica constante de $0,07\\text{ A}$, entre suas camadas. Durante a apresentação do projeto, o estudante deixou a tela ligada por uma hora seguida para demonstrar sua eficiência. Com base nesses dados, qual foi a quantidade de carga elétrica que circulou pelo sistema durante esse período de uso?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$0,14\\text{ C}$' },
      { letter: 'B', text: '$504\\text{ C}$' },
      { letter: 'C', text: '$252\\text{ C}$' },
      { letter: 'D', text: '$50,4\\text{ C}$' },
      { letter: 'E', text: '$2,52\\text{ C}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q34', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2026-q35',
    examId: EXAM_ID,
    originalNumber: 35,
    originalCode: 'UFRR 2026 · Q35',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrodinâmica',
      subtopic: 'Potência Elétrica e Disjuntores',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em meio ao apocalipse zumbi, seis sobreviventes conseguem se refugiar em um bunker militar abandonado, o qual possui um sistema elétrico antigo, operando em $220\\text{ V}$ e protegido por um disjuntor capaz de suportar, no máximo, $10\\text{ A}$. Os sobreviventes decidem ligar ao mesmo tempo quatro aparelhos de emergência encontrados no abrigo:

• Gerador de oxigênio portátil: $1100\\text{ W}$
• Purificador de água: $660\\text{ W}$
• Sistema de ventilação de emergência: $880\\text{ W}$
• Rádio de emergência: $220\\text{ W}$

Após acionarem todos os equipamentos, o disjuntor desarmou, interrompendo a energia do bunker. Em termos de porcentagem, o limite da corrente no sistema foi sobrecarregado em?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$10\\%$' },
      { letter: 'B', text: '$13\\%$' },
      { letter: 'C', text: '$20\\%$' },
      { letter: 'D', text: '$30\\%$' },
      { letter: 'E', text: '$3\\%$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q35', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2026-q36',
    examId: EXAM_ID,
    originalNumber: 36,
    originalCode: 'UFRR 2026 · Q36',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletromagnetismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Durante uma saída de campo para mapear áreas próximas ao Linhão, uma equipe em Boa Vista precisa calibrar bússolas usadas em drones e trilhas. Para evitar erros, eles testaram situações comuns no local:

I. Aproximar a bússola de um fio retilíneo por onde passa corrente faz o ponteiro girar, porque a corrente cria um campo magnético ao redor do fio.
II. Colocar a bússola dentro de uma caixa de metal (ferro) tende a reduzir a influência de campos externos, pois o metal deforma as linhas de campo.
III. Colocar um pedaço de ferro dentro de uma bobina aumenta o “poder de ímã” da bobina enquanto a corrente está ligada; ao desligar a corrente, o efeito quase some.

Considerando as assertivas acima, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I, II e III.' },
      { letter: 'B', text: 'I e II apenas.' },
      { letter: 'C', text: 'I e III apenas.' },
      { letter: 'D', text: 'II e III apenas.' },
      { letter: 'E', text: 'Todas as afirmativas estão erradas.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q36', correctLetter: null },
    provenance: makeProv(12),
  },

  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    id: 'ufrr-2026-q37',
    examId: EXAM_ID,
    originalNumber: 37,
    originalCode: 'UFRR 2026 · Q37',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Climatologia da Amazônia',
      subtopic: 'Seca Extrema 2023–2024',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Entre os anos de 2023 e 2024, de acordo com os dados do Boletim de Monitoramento de Secas do CEMADEN/MCTI, a seca na região Amazônica teve um início gradual e silencioso a partir do mês de maio. Nos meses subsequentes, os impactos começaram a ser amplamente reportados, com destaque para os níveis extremamente baixos dos rios [...]. A estação chuvosa na Amazônia, que normalmente se estende de setembro a março, foi marcada por precipitações abaixo da média e temperaturas elevadas, o que determinou a continuidade da seca (déficit hídrico) até outubro de 2024.

*Adaptado de: CEMADEN – Centro de Monitoramento e Alerta de Desastres Naturais. NOTA TÉCNICA Nº 679/2024/SEI-CEMADEN/MCTI, 2024.*

Sobre os mecanismos climáticos que influenciaram diretamente a seca extrema na Amazônia entre 2023 e 2024, é CORRETO afirmar que houve:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Fase negativa da Oscilação Decadal do Pacífico (ODP) e a baixa pressão atmosférica.',
      },
      {
        letter: 'B',
        text: 'Aquecimento do Oceano Pacífico Equatorial (El Niño) associado ao aquecimento do Oceano Atlântico Norte.',
      },
      {
        letter: 'C',
        text: 'Intensa atividade de monções no Sudeste Asiático e o resfriamento da Bacia do Rio Amazonas.',
      },
      {
        letter: 'D',
        text: 'Resfriamento do Oceano Pacífico (La Niña) e o aquecimento do Oceano Atlântico Sul.',
      },
      {
        letter: 'E',
        text: 'Aquecimento das águas do Oceano Índico e o enfraquecimento da Corrente de Humboldt.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q37', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2026-q38',
    examId: EXAM_ID,
    originalNumber: 38,
    originalCode: 'UFRR 2026 · Q38',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geomorfologia e Pedologia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Os processos de desagregação e decomposição das rochas por intemperismo ocorrem na superfície dos continentes, na interação entre litosfera-atmosfera-hidrosfera-biosfera, transformando as rochas duras em materiais móveis, inconsolidados, que podem ser erodidos, transportados e depositados em zonas mais baixas do relevo.”

*(TOLEDO, OLIVEIRA e MELFI, 2009:134)*

Sobre a interação entre intemperismo, relevo e solos no Brasil, é CORRETO afirmar que há:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Maior atuação do intemperismo físico (desagregação mecânica) e formação de relevos dissecados.',
      },
      {
        letter: 'B',
        text: 'Formação de grandes áreas de desertos rochosos, devido à rápida dissolução e transporte de todos os minerais.',
      },
      {
        letter: 'C',
        text: 'Baixa presença de argilominerais e a consequente predominância de solos orgânicos em altitudes elevadas',
      },
      {
        letter: 'D',
        text: 'Predomínio de solos jovens e rasos, com alto teor de minerais primários.',
      },
      {
        letter: 'E',
        text: 'Promove a formação de solos profundos, com alta concentração de óxidos de ferro e alumínio e baixa fertilidade natural.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q38', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2026-q39',
    examId: EXAM_ID,
    originalNumber: 39,
    originalCode: 'UFRR 2026 · Q39',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Cartografia',
      subtopic: 'Escala Cartográfica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Com relação ao processo de construção de mapas, utilizando os conceitos e princípios da Cartografia, a relação entre a escala e a generalização da área mapeada é fundamental para a representação do espaço. Neste contexto, ao se comparar um mapa em escala $1:25.000$ com outro na escala $1:5.000.000$, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O mapa 1:5.000.000 é considerado de grande escala, apresentando menor grau de generalização e mais detalhes.',
      },
      {
        letter: 'B',
        text: 'O mapa 1:25.000 (grande escala) representa uma área menor da superfície, consequentemente, contém mais detalhes.',
      },
      {
        letter: 'C',
        text: 'Os mapas em questão representam a mesma área com o mesmo nível de detalhamento, variando apenas o tamanho da folha impressa.',
      },
      {
        letter: 'D',
        text: 'O mapa 1:25.000 é mais adequado para a representação de fenômenos globais, como o relevo terrestre.',
      },
      {
        letter: 'E',
        text: 'A escala não interfere no nível de generalização, pois esta depende apenas da Projeção Cartográfica adotada.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q39', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2026-q40',
    examId: EXAM_ID,
    originalNumber: 40,
    originalCode: 'UFRR 2026 · Q40',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Agrária e Globalização',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Assim, sob o capitalismo monopolista mundializado, a agricultura passou a estruturar-se sobre uma tríade: a produção de *commodities*, as bolsas de mercadorias e de futuro e a formação das empresas monopolistas mundiais.”

*OLIVEIRA, U. A mundialização do capital e a crise do neoliberalismo: o lugar mundial da agricultura brasileira. Geousp – Espaço e Tempo, v. 19, n. 2, p. 229-245, 2015.*

Acerca da produção agrícola no mundo globalizado, é INCORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Substancialmente, a produção do campo pode ser enquadrada como produção de *commodities* em oferta ao mercado mundial. Mais do que uma questão propriamente de soberania alimentar, a produção agropecuária converte o alimento em mercadoria.',
      },
      {
        letter: 'B',
        text: 'A produção agrícola mundial cresceu com a Revolução Verde no século XX, prescindindo da atuação estatal ao desenvolvimento agrícola, como ocorreu, dentre outros casos, com o Brasil.',
      },
      {
        letter: 'C',
        text: 'Sob o ditame do mercado, sobretudo para fins de exportação, é possível encontrar países que se destacam enquanto produtores de alimentos e que são assolados pela chaga da fome, caso, por exemplo, do Brasil em diversos momentos de sua história.',
      },
      {
        letter: 'D',
        text: 'A financeirização econômica atinge também a agricultura, tendo seus produtos comercializados nas bolsas mundiais com peso de incidir, tais bolsas, no preço destas *commodities*.',
      },
      {
        letter: 'E',
        text: 'A concentração monopolista, sob fusões e aquisições, se verificou também às multinacionais com atuação na área agrícola. No setor de grãos, por exemplo, poucas empresas, dentre elas, a Bunge, a Cargill, e Louis Dreyfus, controlam fatias consideráveis do comércio global.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q40', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2026-q41',
    examId: EXAM_ID,
    originalNumber: 41,
    originalCode: 'UFRR 2026 · Q41',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Recursos Naturais e Energia no Brasil',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O Brasil se destaca por possuir, em abundância, diversos “recursos naturais” que podem ser explorados ou utilizados para fins econômicos, energéticos e/ou sociais.

Sobre o tema, é INCORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'A região Nordeste se destaca na produção de energia eólica.' },
      {
        letter: 'B',
        text: 'A biodiversidade da flora brasileira e, portanto, sua preservação, tem potencial para utilização econômica.',
      },
      {
        letter: 'C',
        text: 'Os datacenters das grandes empresas de tecnologia precisam consumir elevado volume hídrico para poderem operar.',
      },
      {
        letter: 'D',
        text: 'A utilização das usinas hidrelétricas, tornando-se uma energia sustentável, não implica em impactos socioambientais.',
      },
      {
        letter: 'E',
        text: 'A energia solar é de enorme valia para determinadas regiões do Brasil, tendo crescido sua utilização na última década.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q41', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2026-q42',
    examId: EXAM_ID,
    originalNumber: 42,
    originalCode: 'UFRR 2026 · Q42',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia de Roraima',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Acerca da constituição e características contemporâneas do estado de Roraima, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Boa Vista passou por acentuado crescimento urbano e populacional em decorrência do avanço do desmatamento em 1990.',
      },
      {
        letter: 'B',
        text: 'Entre as décadas de 1990 e 2000 ganharam destaque no estado as demarcações das terras indígenas.',
      },
      {
        letter: 'C',
        text: 'Atualmente se verifica o fenômeno da migração de retorno dentre os nordestinos em Roraima.',
      },
      {
        letter: 'D',
        text: 'Roraima se formou enquanto unidade da Federação em 1950.',
      },
      {
        letter: 'E',
        text: 'Mais de 60% da área do estado é formada por terras indígenas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q42', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2026-q43',
    examId: EXAM_ID,
    originalNumber: 43,
    originalCode: 'UFRR 2026 · Q43',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Globalização e Milton Santos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Milton Santos (1926-2001), importante Geógrafo brasileiro, descreve três tipos de globalização: a globalização como fábula, como perversidade e como possibilidade.

Observe a categorização descrita a seguir e a utilize para cada uma dessas tipologias:

**a.** Globalização como fábula.
**b.** Globalização como perversidade.
**c.** Globalização como possibilidade.

Leia atentamente as assertivas da Introdução do livro de Milton Santos (2008, p. 18-20):

I. “Considerando o que atualmente se verifica no plano empírico, podemos, em primeiro lugar, reconhecer um certo número de fatos novos indicativos da emergência de uma nova história. O primeiro desses fenômenos é a enorme mistura de povos, raças, culturas, gostos, em todos os continentes. A isso se acrescente graças aos progressos da informação, a ‘mistura’ de filosofias, em detrimento do racionalismo europeu.”
II. “A máquina ideológica que sustenta as ações preponderantes da atualidade, é feita de peças, que se alimentam e põem em movimento os elementos essenciais à continuidade do sistema. Fala-se, por exemplo, em aldeia global para fazer crer que a difusão instantânea de notícias realmente informa as pessoas. A partir desse mito e do encurtamento das distâncias — para aqueles que realmente podem viajar — também se difunde a noção de tempo e espaço contraídos.”
III. “O desemprego crescente torna-se crônico. A pobreza aumenta e as classes médias perdem em qualidade de vida. A mortalidade infantil permanece, a despeito dos progressos médicos e da informação. A educação de qualidade é cada vez mais inacessível. Alastram-se e aprofundam-se males espirituais e morais, como os egoísmos, os cinismos, a corrupção.”

Assinale a alternativa que apresenta as associações CORRETAS:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'a – II; b – III; c – I.' },
      { letter: 'B', text: 'a – III; b – I; c – II.' },
      { letter: 'C', text: 'a – I; b – III; c – II.' },
      { letter: 'D', text: 'a – II; b – I; c – III.' },
      { letter: 'E', text: 'a – III; b – II; c – I.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q43', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2026-q44',
    examId: EXAM_ID,
    originalNumber: 44,
    originalCode: 'UFRR 2026 · Q44',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geopolítica Contemporânea',
      subtopic: 'Conflito Rússia e Ucrânia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Nos últimos anos, as relações entre a Rússia e a Ucrânia têm sido marcadas por tensões significativas. Qual foi o ponto crucial para a escalada desses conflitos?',
    graphics: [
      {
        id: 'ufrr-2026-g-q44',
        type: 'image',
        imageUrl: '/exam-assets/2026/q44-ucrania-russia.jpg',
        caption: 'CONFLITOS ARMADOS NO MUNDO — https://agenciabrasil.ebc.com.br/internacional/noticia/2022. Acessado em 01/06/2025',
        altText: 'Mapa geopolítico indicando Ucrânia, Rússia e cidades de Kiev, Luhansk, Donetsk, Zaporizhzhya e Kherson.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'A queda do Muro de Berlim em 1989.' },
      { letter: 'B', text: 'O fim e a dissolução da União Soviética em 1991.' },
      { letter: 'C', text: 'A anexação da Crimeia pela Rússia em 2014.' },
      { letter: 'D', text: 'A entrada da Ucrânia na União Europeia.' },
      { letter: 'E', text: 'A assinatura do Tratado de Não Proliferação Nuclear pela Ucrânia.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q44', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2026-q45',
    examId: EXAM_ID,
    originalNumber: 45,
    originalCode: 'UFRR 2026 · Q45',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Blocos Econômicos Mundiais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em 2018, este importante Bloco Econômico Mundial se modernizou e trocou de nome. Em julho de 2020 entrou em vigor com a inclusão de novas disposições sobre o comércio digital, propriedade intelectual e trabalho.

Assinale a alternativa correspondente ao antigo bloco econômico e seu atual nome:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'UNIÃO EUROPEIA/BENELUX' },
      { letter: 'B', text: 'NAFTA/USMCA' },
      { letter: 'C', text: 'MERCOSUL/ALCA' },
      { letter: 'D', text: 'NAFTA/BRICS' },
      { letter: 'E', text: 'APEC/MERCADO COMUM EUROPEU' },
    ],
    answerKey: { questionId: 'ufrr-2026-q45', correctLetter: null },
    provenance: makeProv(15),
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    id: 'ufrr-2026-q46',
    examId: EXAM_ID,
    originalNumber: 46,
    originalCode: 'UFRR 2026 · Q46',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Oriental',
      subtopic: 'Egito Antigo e Invasão Assíria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O antigo Egito experimentou uma série de problemas políticos dentre os quais encontramos a famosa invasão protagonizada pelo povo assírio ocorrida no século VII a.C. onde, pelo período de alguns anos, os egípcios vivenciam a fragmentação e enfraquecimento de seu poder político central.

No contexto desta crise egípcia, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Após um período, o Egito consegue se libertar dos assírios iniciando uma fase de recuperação conhecida como Renascimento Saíta.',
      },
      {
        letter: 'B',
        text: 'O enfraquecimento do Egito diante dos Assírios foi resultado das reformas religiosas promovidas pelo faraó Amenófis III que resultou em uma revolta popular.',
      },
      {
        letter: 'C',
        text: 'Com a saída dos assírios, o Egito experimentou um longo período de paz e prosperidade sob a dinastia Ptolomaica pelo período de nove décadas.',
      },
      {
        letter: 'D',
        text: 'A vigência do poder assírio no Egito nos primeiros seis anos só foi possível por causa dos acordos realizados entre o rei Senaqueribe e a elite agrária e sacerdotal egípcia.',
      },
      {
        letter: 'E',
        text: 'Com a invasão assíria, a casta sacerdotal egípcia buscou secretamente uma coalizão com o reino da Filístia, resultando na libertação e retorno da dinastia Saíta ao poder.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q46', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2026-q47',
    examId: EXAM_ID,
    originalNumber: 47,
    originalCode: 'UFRR 2026 · Q47',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Clássica',
      subtopic: 'Domínio Macedônico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O domínio macedônico marcou um período de supremacia política e militar na Grécia, iniciado por Filipe da Macedônia e posteriormente consolidado por Alexandre, o Grande, quando este reprime de forma decisiva as revoltas encabeçadas por Tebas e Atenas. Com isso, não só há a garantia da submissão das cidades-estado à sua autoridade, como também o início de sua grande campanha militar de conquista na direção do Oriente.

Pensando neste período do domínio macedônico, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Na Batalha de Queroneia, Filipe da Macedônia e seu exército vencem a coalizão liderada por Atenas e Tebas, confirmando a vitória dos macedônios sobre os gregos por volta do ano 338 a.C.',
      },
      {
        letter: 'B',
        text: 'Filipe da Macedônia só logrou êxito sobre a Grécia após formar uma coalizão que ficou conhecida como Liga de Delos, que lutou em 338 a.C. contra a Liga do Peloponeso, esta liderada por Atenas.',
      },
      {
        letter: 'C',
        text: 'A repressão sobre Atenas e Tebas só foi possível por causa do general de Alexandre, Dorímenes, que liderou a frota naval no estreito de Corinto antes do exército marchar contra os atenienses.',
      },
      {
        letter: 'D',
        text: 'Segundo o historiador Calístrato, a hegemonia macedônica teve início no pacto firmado entre Filipe II e os aristocratas de Delfos que viabilizou o auxílio de mercenários ao exército macedônico.',
      },
      {
        letter: 'E',
        text: 'Filipe II aproveitou o contexto das Guerras Greco-Pérsicas, que arrasaram Tebas e enfraqueceram Atenas, para invadir as cidades gregas e consolidar-se como soberano na Grécia antiga.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q47', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2026-q48',
    examId: EXAM_ID,
    originalNumber: 48,
    originalCode: 'UFRR 2026 · Q48',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Idade Média e Feudalismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A partir do século XI, as grandes ondas invasoras que assolaram o Ocidente Europeu diminuíram. No entanto, seus efeitos haviam marcado profundamente a sociedade medieval, a ponto de favorecer o surgimento do feudalismo, uma nova ordem social e política. Feudalismo é um conceito usado atualmente para designar um conjunto de relações políticas, sociais e econômicas que se desenvolveram na Europa Ocidental, com algumas variações locais, entre os séculos XI e XIII. Determinados autores utilizam também o termo "feudo-clericalismo", destacando o poder da Igreja no período.”

*MORENO, Jean, VIEIRA, Sandro. História: cultura e sociedade: memória das origens. 2 ed. Curitiba: Positivo, 2017. p. 236.*

Com relação ao Feudalismo, assinale a alternativa ERRADA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Sem meios para formar amplos grupos de guerreiros profissionais ou empregar tropas mercenárias, os monarcas ampliaram as concessões feitas aos principais senhores regionais, uma vez que o mundo cristão ocidental se encontrava politicamente e economicamente enfraquecido no começo do século XI.',
      },
      {
        letter: 'B',
        text: 'No período feudal, castelos foram construídos por quase todo continente europeu. Tratava-se de moradias à nobreza, fortificadas com grandes muros, fosso, pontes levadiças e capelas. Quando ocorriam as batalhas, sempre que possível, a circunvizinhança se refugiava ultrapassando estes muros.',
      },
      {
        letter: 'C',
        text: 'No período feudal, a moeda era amplamente utilizada nas transações circulando com facilidade entre as camadas sociais substituindo, com isto, o antigo sistema baseado em trocas diretas e vínculos de dependência entre senhores e camponeses. Dessa forma, as relações econômicas se tornaram totalmente monetárias.',
      },
      {
        letter: 'D',
        text: 'Com o passar do tempo, já no século X, as grandes residências dos nobres, os castelos, constituíam-se num núcleo local de poder político, ou seja, a castelania simbolizou o auge da descentralização política na Europa feudal.',
      },
      {
        letter: 'E',
        text: 'No feudalismo, a nobreza não era uma classe homogênea, mas dividida em alta nobreza e pequena nobreza, organizados em uma hierarquia baseada em títulos e na posse de terras, com a relação de suserania e vassalagem definindo a posição de cada membro na cadeia de poder.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q48', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2026-q49',
    examId: EXAM_ID,
    originalNumber: 49,
    originalCode: 'UFRR 2026 · Q49',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Brasil Colônia',
      subtopic: 'Missões Jesuíticas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Com a chegada ao Brasil, em 1549, os jesuítas empreendem um trabalho de catequese junto aos povos indígenas. Para isso, buscaram debelar alguns costumes e tradições culturais que conflitavam com a moral do catolicismo romano, dentre os quais se destacavam o que era visto pela Ordem como poligamia, nudez, paganismo e antropofagia praticada por alguns dos povos originários.

Tendo em mente o período das missões jesuíticas, assinale a alternativa ERRADA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Diariamente, a catequese nos aldeamentos começava com uma missa matinal seguida pelo trabalho nas plantações coletivas, extração das drogas do sertão e atividades artesanais na aldeia.',
      },
      {
        letter: 'B',
        text: 'Enquanto os indígenas adultos trabalhavam para suprir as necessidades materiais da aldeia, as crianças tinham aulas de alfabetização, moral e religião além de aprenderem a contar.',
      },
      {
        letter: 'C',
        text: 'As missões jesuítas eram um alvo predileto das bandeiras de apresamento por encontrarem ali os indígenas “aculturados” chamados de *ladinos*, uma preferência dos compradores de escravo.',
      },
      {
        letter: 'D',
        text: 'Para realizar o trabalho de catequese, os jesuítas obtiveram por parte dos governantes a concessão de sesmarias, onde foram erigidos os aldeamentos, também chamados de Missões.',
      },
      {
        letter: 'E',
        text: 'Os aldeamentos jesuítas permaneceram exclusivamente no litoral da colônia, deixando o interior a mercê dos conquistadores portugueses e espanhóis que massacraram os indígenas considerados “pagãos”.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q49', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2026-q50',
    examId: EXAM_ID,
    originalNumber: 50,
    originalCode: 'UFRR 2026 · Q50',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Revoluções de 1848 (Primavera dos Povos)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O historiador britânico, Eric Hobsbawm, ao analisar a Primavera Árabe de 2011, disse que: “Me lembra 1848, outra revolução impulsionada de forma autônoma, que começou em um país e depois se estendeu por todo um continente em pouco tempo" e ainda acrescentou "Dois anos após 1848, tudo parecia como se houvesse fracassado. Mas no longo prazo não houve fracasso. Conseguiu-se uma boa quantidade de avanços liberais. De modo que foi um fracasso imediato, mas um êxito parcial no médio prazo, ainda que não tenha sido na forma de revolução”.

*Revoluções de 2011 'me lembram 1848', diz Hobsbawm. BBC Brasil. 31/12/2011.*

Sobre os movimentos revolucionários de 1848, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Liderados pelos comunistas, conseguiram estabelecer as bases para o surgimento do comunismo científico, mas foram detidos pela Aristocracia que conseguiu, em aliança com os monarcas, o estabelecimento do despotismo esclarecido.',
      },
      {
        letter: 'B',
        text: 'Foram movimentos populares que instigaram a queda de regimes em muitas partes da Europa Ocidental, mas as forças revolucionárias estavam divididas e enfrentaram um movimento contrarrevolucionário impulsionado pelo medo das mudanças que as Revoluções poderiam gerar.',
      },
      {
        letter: 'C',
        text: 'Apesar de serem populares, o fato de criticarem a religião, fez com que a Igreja Católica e Protestante trabalhassem com os fiéis para que esses deixassem o movimento, o que favoreceu a Aristocracia dominante.',
      },
      {
        letter: 'D',
        text: 'A ideologia anarquista motivou as massas europeias a tentarem, além da mudança do regime político, buscar a completa desconstrução do Estado e das estruturas governamentais.',
      },
      {
        letter: 'E',
        text: 'A Burguesia, por ser a maioria da população, foi a responsável pelos levantes, já que além da mudança do regime político, desejava modificar a regulação da propriedade privada para, dessa forma, conseguir as terras que pertenciam a Igreja Católica no período.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q50', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2026-q51',
    examId: EXAM_ID,
    originalNumber: 51,
    originalCode: 'UFRR 2026 · Q51',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Segundo Reinado e Proclamação da República',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Foi a partir de 1870 que começou a fase mais crítica do reinado de Dom Pedro II, quando o Império já não dava conta em atender as exigências dos diferentes grupos da sociedade que já vivenciava certo conflito entre si. Mas, não obstante estes conflitos, estas insatisfações acabaram levando-os a uma mesma conclusão, ou seja, acabar com a monarquia e instaurar a República no Brasil.

Com base na afirmação acima, marque a resposta certa.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Ao autorizar a entrada e circulação de protestantes no Brasil, Dom Pedro II enfraqueceu as bases políticas da Igreja Católica, favorecendo o movimento positivista que defendia o movimento republicano.',
      },
      {
        letter: 'B',
        text: 'Os fatores que contribuíram para a crise do Império Brasileiro, dentre outros, foram os conflitos do governo imperial com a igreja e o exército, a questão da maçonaria e o processo abolicionista.',
      },
      {
        letter: 'C',
        text: 'A traição de Joaquim Marques Lisboa, o Marquês de Tamandaré, que se aliou aos militares republicanos foi decisiva para que a república fosse declarada e para que família real fosse exilada.',
      },
      {
        letter: 'D',
        text: 'A trama conhecida como *Acordo pelo Progresso*, liderada por Benjamin Constant, Rui Barbosa e Quintino Bocaiúva, foi decisiva para convencer Deodoro da Fonseca a dar o golpe republicano.',
      },
      {
        letter: 'E',
        text: 'Apesar do forte engajamento político da Princesa Isabel, que almejava com veemência ser rainha no Brasil, a monarquia não resistiu, sucumbindo com o golpe republicano em 1887.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q51', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2026-q52',
    examId: EXAM_ID,
    originalNumber: 52,
    originalCode: 'UFRR 2026 · Q52',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Redemocratização e Diretas Já',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A respeito do Movimento das Diretas Já, o site da Câmara dos deputados destaca que:

“As mudanças no cenário político despertam em 1983 um movimento por eleições diretas para Presidente da República, o qual ganha força com a apresentação pelo Deputado Dante de Oliveira, PMDB-MT, de uma emenda constitucional com idêntico objetivo. O movimento, que ficaria conhecido como "Diretas Já", cresce espetacularmente em 1984 e empolga a população, com a realização de comícios em diversas cidades contando com a presença de artistas e lideranças políticas e a participação de multidões nunca antes vistas no Brasil. As maiores manifestações reúnem cerca de 1 milhão de pessoas no Rio e 1,7 milhão em São Paulo.”

*Disponível em: https://www2.camara.leg.br/atividade-legislativa/plenario/discursos/escrevendohistoria/destaque-de-materias/diretas-ja*

Sobre esse movimento, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As “Diretas Já”, apesar do apoio de intelectuais e artistas, não atraia os setores populares, os quais estavam mais preocupados com os efeitos da inflação em suas vidas.',
      },
      {
        letter: 'B',
        text: 'A Emenda Constitucional foi aprovada parcialmente pelo Congresso Nacional, o qual exigiu a realização de um referendo para a população se manifestar sobre o tema, tendo como resultado a derrota da opção de eleição direta para presidente.',
      },
      {
        letter: 'C',
        text: 'A Emenda Constitucional que postulava a eleição direta para presidente, apesar do apoio popular da medida, não conseguiu ser aprovada no Congresso Nacional.',
      },
      {
        letter: 'D',
        text: 'Apesar de derrotada, a Emenda Constitucional foi fundamental, já que consolidou o entendimento de que o Poder Moderador era relevante para o controle presidencial.',
      },
      {
        letter: 'E',
        text: 'A Emenda Constitucional foi aprovada e a partir dela foram convocadas as eleições para a Assembleia Constituinte de 1988, que ficou conhecida como a Constituição Cidadã.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q52', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2026-q53',
    examId: EXAM_ID,
    originalNumber: 53,
    originalCode: 'UFRR 2026 · Q53',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Segunda Guerra Mundial',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A Segunda Guerra Mundial foi um conflito militar de abrangência global, envolvendo a maioria das Nações do planeta, em duas alianças principais: os Aliados e o Eixo. Ainda é visto como o conflito mais destrutivo e abrangente da história.

Sobre as causas da Segunda Guerra Mundial, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A Revolução Bolchevique e o Expansionismo Stalinista sobre os países da Europa Ocidental.',
      },
      {
        letter: 'B',
        text: 'O avanço dos Estados Unidos sobre o Oceano Pacífico e o revanchismo japonês pelo apoio dos EUA aos Chineses na Guerra da Manchúria.',
      },
      {
        letter: 'C',
        text: 'O rompimento das relações diplomáticas entre a França e a Inglaterra e a paralisação do comércio europeu.',
      },
      {
        letter: 'D',
        text: 'As vitórias militares da Itália nas guerras coloniais e o anseio nacionalista italiano de domínio de áreas do Império Austro-húngaro.',
      },
      {
        letter: 'E',
        text: 'A insatisfação alemã com o Tratado de Versalhes após a Primeira Guerra Mundial e o Expansionismo da Alemanha Nazista.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q53', correctLetter: null },
    provenance: makeProv(18),
  },
  {
    id: 'ufrr-2026-q54',
    examId: EXAM_ID,
    originalNumber: 54,
    originalCode: 'UFRR 2026 · Q54',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Guerra Fria e Queda do Muro de Berlim',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia o texto a seguir sobre a Queda do Muro de Berlim.

VARSÓVIA - O ex-presidente polonês e fundador do sindicato Solidariedade, Lech Walesa, afirmou que o papa João Paulo II foi responsável por 50% do sucesso simbolizado pela queda do muro de Berlim [...].

Em declarações à imprensa, Walesa ressaltou que a escolha de João Paulo II como líder máximo da Igreja Católica e sua visita à Polônia, em 1979, ajudaram o povo a se unir para defender a própria dignidade e lutar pela recuperação da soberania nacional.

O ex-presidente também afirmou que atribuir a queda do muro ao ex-líder soviético Mikhail Gorbachev "é uma mentira". Ele "nunca quis derrubar o comunismo, nem o Muro de Berlim", declarou.

Segundo Walesa, "50% da queda do Muro corresponde a João Paulo II, 30% ao Solidariedade e a Lech Walesa, e apenas 20% ao resto do mundo".

*Lech Walesa diz que João Paulo II influenciou a queda do Muro de Berlim. Globo. 09/11/2009.*

Assinale a alternativa que apresenta CORRETAMENTE alguns dos significados da Queda do Muro de Berlim.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A queda representou a consolidação do domínio de Gorbachev na Presidência da União Soviética e o início da construção da liderança de Vladimir Putin.',
      },
      {
        letter: 'B',
        text: 'A queda representou o fortalecimento do cristianismo romano no Leste Europeu e motivou a concessão do Nobel da Paz para o Papa João Paulo II.',
      },
      {
        letter: 'C',
        text: 'A queda fez com que a Alemanha se tornasse o maior país em extensão territorial da Europa e com isso assumisse o domínio da União Europeia.',
      },
      {
        letter: 'D',
        text: 'A queda foi responsável pela construção do acordo Schengen que permitiu a circulação de europeus dentro da União Europeia e fez com que a União Europeia se tornasse o maior bloco econômico do mundo.',
      },
      {
        letter: 'E',
        text: 'A queda representou um primeiro passo para o fim da Guerra Fria e para a reunificação da Alemanha.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q54', correctLetter: null },
    provenance: makeProv(18),
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    id: 'ufrr-2026-q55',
    examId: EXAM_ID,
    originalNumber: 55,
    originalCode: 'UFRR 2026 · Q55',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Sistemas Materiais e Separação de Misturas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere uma amostra composta por areia silicatada, sal de cozinha e limalha de ferro, armazenada em um único recipiente. Ao observar essa amostra, nota-se que seus componentes podem ser visualmente distinguidos, caracterizando um sistema heterogêneo. Com base nesse cenário, analise as seguintes afirmações:

I. A amostra é uma mistura heterogênea trifásica, composta por três substâncias químicas: NaCl (cloreto de sódio), Fe (ferro metálico) e $\\text{SiO}_2$ (dióxido de silício).
II. Como se trata de uma mistura com mais de uma fase visível, ela pode ser classificada como mistura heterogênea trifásica.
III. A separação do cloreto de sódio pode ser realizada por evaporação da água, mas esse processo não permite a recuperação do solvente, sendo a destilação simples o método mais adequado quando se deseja obter tanto o sal quanto a água em suas formas purificadas.
IV. A imantação é eficaz apenas se o ferro estiver na forma metálica e não oxidada ($\\text{Fe}^0$), pois óxidos de ferro, como $\\text{Fe}_2\\text{O}_3$, apresentam menor resposta magnética e podem não ser totalmente removidos por esse processo.

Podemos afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Somente I e II estão corretas.' },
      { letter: 'B', text: 'Somente III e IV estão corretas.' },
      { letter: 'C', text: 'Somente II, III e IV estão corretas.' },
      { letter: 'D', text: 'Somente I, II e III estão corretas.' },
      { letter: 'E', text: 'Todas as afirmações estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q55', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2026-q56',
    examId: EXAM_ID,
    originalNumber: 56,
    originalCode: 'UFRR 2026 · Q56',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria e Rendimento',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Durante uma atividade experimental no laboratório, um estudante investigou a reatividade do sódio metálico em meio aquoso. Para isso, adicionou cuidadosamente sódio metálico, em excesso, em $9,0\\text{ g}$ de água líquida em um tubo, gerando uma reação altamente exotérmica. Ao final da experiência, foram recolhidos $4,48\\text{ L}$ de gás hidrogênio, medidos em condições normais de temperatura e pressão (CNTP). Sabendo que o volume molar de um gás nas CNTP é $22,4\\text{ L/mol}$. Assinale a alternativa CORRETA sobre o rendimento desta reação:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O rendimento real de $\\text{H}_2$ obtido foi de $80\\%$, pois a presença de excesso de sódio garante que todo o hidrogênio possível foi liberado.',
      },
      {
        letter: 'B',
        text: 'O rendimento real de $\\text{H}_2$ obtido foi de $40\\%$, o que indica que a quantidade teórica prevista pela estequiometria não atingiu o rendimento máximo esperado.',
      },
      {
        letter: 'C',
        text: 'O rendimento real de $\\text{H}_2$ obtido foi de $80\\%$, o que indica que a quantidade teórica prevista pela estequiometria não atingiu o rendimento máximo esperado.',
      },
      {
        letter: 'D',
        text: 'O rendimento foi de $75\\%$, pois o volume de hidrogênio obtido representa aproximadamente três quartos do volume teórico esperado.',
      },
      {
        letter: 'E',
        text: 'O rendimento real de $\\text{H}_2$ obtido foi de $40\\%$, pois a presença de excesso de sódio garante que todo o hidrogênio possível foi liberado.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q56', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2026-q57',
    examId: EXAM_ID,
    originalNumber: 57,
    originalCode: 'UFRR 2026 · Q57',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Funções Inorgânicas e Reações',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um composto inorgânico sólido, branco, de alta solubilidade em água, é formado pela reação entre o óxido de magnésio e o ácido nítrico. Ao ser dissolvido em água, conduz corrente elétrica, e em solução aquosa, o cátion do metal permanece inerte frente ao ataque de ácidos fortes. Assinale a alternativa CORRETA:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A ligação entre magnésio e o ânion é predominantemente covalente, pois ambos os elementos possuem eletronegatividade intermediária.',
      },
      {
        letter: 'B',
        text: 'O ânion do sal apresenta geometria linear, com dois átomos de oxigênio ligados ao nitrogênio por ligações simples e uma ligação dativa.',
      },
      {
        letter: 'C',
        text: 'A reação entre o óxido de magnésio e o ácido nítrico é uma reação de neutralização incompleta, pois forma um sal ácido.',
      },
      {
        letter: 'D',
        text: 'A decomposição térmica do sal envolve uma reação de oxirredução, em que o nitrogênio sofre redução de Nox $+5$ para $+4$, sendo o produto gasoso o dióxido de nitrogênio.',
      },
      {
        letter: 'E',
        text: 'O cátion metálico tem número atômico $11$ e pertence à família dos metais alcalino-terrosos, com tendência a formar compostos covalentes em solução aquosa.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q57', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2026-q58',
    examId: EXAM_ID,
    originalNumber: 58,
    originalCode: 'UFRR 2026 · Q58',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Titulação Ácido-Base e Pureza',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Uma indústria de saneamento básico realiza o controle de qualidade de reagentes utilizados no tratamento de água. Um lote de hidróxido de sódio ($\\text{NaOH}$) sólido, utilizado para corrigir o pH da água, apresenta suspeita de impurezas. Para determinar sua pureza, um técnico pesa $20,0\\text{ g}$ do $\\text{NaOH}$ e dissolve em água destilada, obtendo $400\\text{ mL}$ de solução. Em seguida, retira uma alíquota de $25,0\\text{ mL}$ dessa solução e realiza uma titulação com ácido sulfúrico ($\\text{H}_2\\text{SO}_4$) $2,0\\text{ mol}\\cdot\\text{L}^{-1}$, gastando $5,0\\text{ mL}$ do ácido para a neutralização completa. Determine a porcentagem de pureza do hidróxido de sódio presente na amostra analisada?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$20\\%$.' },
      { letter: 'B', text: '$45\\%$.' },
      { letter: 'C', text: '$64\\%$.' },
      { letter: 'D', text: '$82\\%$.' },
      { letter: 'E', text: '$95\\%$.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q58', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2026-q59',
    examId: EXAM_ID,
    originalNumber: 59,
    originalCode: 'UFRR 2026 · Q59',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria e Combustão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A combustão completa do butano ($\\text{C}_4\\text{H}_{10}$) pode ser representada pela equação química a seguir:

$$\\text{C}_4\\text{H}_{10\\text{ (g)}} + \\text{O}_{2\\text{ (g)}} \\to \\text{CO}_{2\\text{ (g)}} + \\text{H}_2\\text{O}_{\\text{ (g)}}$$

Sabendo que a combustão completa de $0,05\\text{ mol}$ de butano ocorre a cada minuto, determine a massa total de dióxido de carbono ($\\text{CO}_2$) formada após $2$ horas de reação contínua.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$24\\text{ g}$' },
      { letter: 'B', text: '$44\\text{ g}$' },
      { letter: 'C', text: '$264\\text{ g}$' },
      { letter: 'D', text: '$528\\text{ g}$' },
      { letter: 'E', text: '$1056\\text{ g}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q59', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2026-q60',
    examId: EXAM_ID,
    originalNumber: 60,
    originalCode: 'UFRR 2026 · Q60',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Eletroquímica',
      subtopic: 'Eletrólise e Leis de Faraday',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Numa célula eletrolítica contendo solução aquosa de sulfato de cobre, flui uma corrente elétrica de $5,0\\text{ A}$ durante $9650\\text{ s}$. Nessa experiência, quantos gramas de cobre metálico são obtidos?

Dado: Constante de Faraday $= 96500\\text{ C}\\cdot\\text{mol}^{-1}$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$31,8\\text{ g}$' },
      { letter: 'B', text: '$63,5\\text{ g}$' },
      { letter: 'C', text: '$10,0\\text{ g}$' },
      { letter: 'D', text: '$15,9\\text{ g}$' },
      { letter: 'E', text: '$5,0\\text{ g}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q60', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2026-q61',
    examId: EXAM_ID,
    originalNumber: 61,
    originalCode: 'UFRR 2026 · Q61',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica',
      subtopic: 'Reações de Desidratação e Compostos Heterocíclicos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A frutose é um monossacarídeo cetônico presente naturalmente em frutas e mel. Quando aquecida, ela pode sofrer transformações estruturais que levam à formação de compostos como o 5-hidroximetilfurfural (HMF), um marcador de degradação térmica de açúcares em alimentos. A figura a seguir ilustra, de forma simplificada, uma das rotas possíveis para a conversão da frutose em HMF.

Com base na figura, analise as afirmativas a seguir:

I. A formação do HMF ocorre por meio de sucessivas reações de eliminação de água (desidratação).
II. A transição do intermediário 1 para o 2 envolve uma redistribuição eletrônica na estrutura, com formação de ligações conjugadas que favorecerão a formação do anel furânico presente no HMF.
III. A reação global pode ser classificada como uma reação de oxidação, pois há conversão de um grupo hidroxila em grupo carbonila.
IV. A formação do anel furânico no HMF depende da criação de um sistema de ligações duplas alternadas, cuja configuração eletrônica final confere caráter aromático à molécula.`,
    graphics: [
      {
        id: 'ufrr-2026-g-q61',
        type: 'svg',
        svgContent: SVG_Q61_FRUTOSE_HMF,
        altText: 'Esquema de conversão da Frutose passando pelos intermediários 1 e 2 até formar o 5-hidroximetilfurfural (HMF).',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'Apenas as afirmativas I e III estão corretas.' },
      { letter: 'B', text: 'Apenas as afirmativas II e IV estão corretas.' },
      { letter: 'C', text: 'Apenas as afirmativas I, II e IV estão corretas.' },
      { letter: 'D', text: 'Apenas a afirmativa III está correta.' },
      { letter: 'E', text: 'Todas as afirmativas estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q61', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2026-q62',
    examId: EXAM_ID,
    originalNumber: 62,
    originalCode: 'UFRR 2026 · Q62',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Polímeros e Estequiometria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O polietileno é um dos polímeros mais utilizados no mundo e está entre os principais constituintes dos microplásticos. Sua produção ocorre pela polimerização por adição do eteno ($\\text{C}_2\\text{H}_4$), em que milhares de moléculas de eteno se unem para formar longas cadeias.

Mecanismo simplificado de reação via radical livre.

**Início:** A cadeia é iniciada por radicais livres, $\\text{R}\\bullet$, produzidos pela reação entre algumas moléculas de eteno e o iniciador à base de oxigênio.

$$\\text{R}\\bullet\\text{ (Radical livre)} + \\text{H}_2\\text{C}=\\text{CH}_2 \\to \\text{R}-\\text{CH}_2\\text{CH}_2\\bullet$$

**Propagação:** Cada vez que um radical livre atinge uma molécula de eteno, um novo radical livre mais longo é formado

$$\\text{R}\\bullet + n\\,\\text{C}_2\\text{H}_4 \\to \\text{R}-(\\text{C}_2\\text{H}_4)_n\\bullet$$
$$\\text{R}\\bullet + m\\,\\text{C}_2\\text{H}_4 \\to \\text{R}-(\\text{C}_2\\text{H}_4)_m\\bullet$$

Formação de duas cadeias poliméricas distintas com comprimentos $n$ e $m$.

**Terminação:** Eventualmente, dois radicais livres colidem entre si, produzindo uma molécula final.

$$\\text{R}-(\\text{C}_2\\text{H}_4)_n\\bullet + \\text{R}-(\\text{C}_2\\text{H}_4)_m\\bullet \\to \\text{R}-(\\text{C}_2\\text{H}_4)_{n+m}-\\text{R}$$

Considere que, em um processo industrial, foram utilizados $280\\text{ g}$ de eteno para formar polietileno com grau médio de polimerização igual a $1.000$ (cada cadeia polimérica contém $1.000$ unidades de eteno). Qual o número aproximado de cadeias poliméricas formadas nesse processo?

Dado: Constante de Avogrado: $6,022 \\cdot 10^{23}\\text{ mol}^{-1}$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$6,02 \\cdot 10^{21}$' },
      { letter: 'B', text: '$2,01 \\cdot 10^{22}$' },
      { letter: 'C', text: '$6,02 \\cdot 10^{23}$' },
      { letter: 'D', text: '$1,00 \\cdot 10^{20}$' },
      { letter: 'E', text: '$2,14 \\cdot 10^{22}$' },
    ],
    answerKey: { questionId: 'ufrr-2026-q62', correctLetter: null },
    editorialNote:
      'Preservada a grafia original “Constante de Avogrado” presente no caderno oficial.',
    provenance: makeProv(21),
  },
  {
    id: 'ufrr-2026-q63',
    examId: EXAM_ID,
    originalNumber: 63,
    originalCode: 'UFRR 2026 · Q63',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica',
      subtopic: 'Substituição Eletrofílica Aromática',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A substituição eletrofílica aromática é uma das reações mais comuns em compostos aromáticos como o benzeno. Nesta reação, um átomo de hidrogênio do anel é substituído por um grupo eletrofílico. Considere o exemplo da nitração do benzeno, realizada em meio ácido:

Com base nessas informações, analise as afirmativas:

I. Os elétrons responsáveis por realizarem a ligação com o íon nitrônio estão em um orbital $p$ não hibridizado, ortogonais ao plano da molécula.
II. Na substituição eletrofílica um intermediário é formado (íon carbônio), sendo este estabilizado por ressonância.
III. A ligação entre o grupo nitro e o anel aromático é do tipo sigma $\\sigma(\\text{sp}^2\\text{-sp}^2)$, respectivamente.
IV. A Reação ocorre por um ataque eletrofílico, onde o íon nitrônio (Base de Lewis) aceita elétrons, pois apresenta um orbital vazio.
V. Para que um composto seja aromático, além de obedecer à regra de Hückel ($4n+2$ elétrons $\\pi$), ele precisa ser cíclico e totalmente conjugado e ter o sistema $\\pi$ plano.

Com base na análise das proposições, assinale a alternativa CORRETA:`,
    graphics: [
      {
        id: 'ufrr-2026-g-q63',
        type: 'svg',
        svgContent: SVG_Q63_NITRACAO,
        altText: 'Reação de nitração do benzeno com HNO3 em meio H+ (Concentrado) formando nitrobenzeno e H2O.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'Apenas as afirmativas I, III e IV estão corretas.' },
      { letter: 'B', text: 'Apenas as afirmativas I, II, III e V estão corretas.' },
      { letter: 'C', text: 'Apenas as afirmativas III e V estão corretas.' },
      { letter: 'D', text: 'Apenas as afirmativas II, III, IV e V estão corretas.' },
      { letter: 'E', text: 'Todas as afirmativas estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q63', correctLetter: null },
    provenance: makeProv(21),
  },

  // ================= LÍNGUA ESTRANGEIRA — ESPAÑOL (Q64–Q72) =================
  {
    id: 'ufrr-2026-q64-es',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2026 · Q64 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Compreensão de Texto em Espanhol',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t1'],
    stem: 'Indica la opción CORRECTA que presenta la idea general del texto:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'La preparación mental es esencial en el rendimiento deportivo, ya que contribuye tanto al desempeño en competiciones como al desarrollo de habilidades y recuperación de lesiones.',
      },
      {
        letter: 'B',
        text: 'Los mejores deportistas son aquellos que, de manera regular, consultan a psicólogos deportivos para optimizar su rendimiento y fortalecer su preparación mental.',
      },
      {
        letter: 'C',
        text: 'La imaginería motora es la mejor estrategia clave para los atletas que buscan mejorar su desempeño, ganar competiciones y consolidar habilidades físicas y mentales.',
      },
      {
        letter: 'D',
        text: 'Los ejemplos de deportistas que aprovecharon el poder del entrenamiento psicológico son fundamentales, mostrando al público cómo la mente influye en su desempeño deportivo y recuperación de lesiones.',
      },
      {
        letter: 'E',
        text: 'La metáfora de la conexión entre pensamiento y acción puede observarse, medirse y aplicarse de manera funcional en el entrenamiento y la competición deportiva.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q64-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2026-q65-es',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2026 · Q65 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Classes de Palavras em Espanhol',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t1'],
    stem: 'Las palabras “reciente”, “remontar”, “el”, “su" y “cualidad”, destacadas en el párrafo 3 del texto, pueden ser clasificadas, respectivamente y CORRECTAMENT, como:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'adjetivo, verbo, artículo, posesivo, sustantivo.' },
      { letter: 'B', text: 'pronombre, demostrativo, numeral, posesivo, sustantivo.' },
      { letter: 'C', text: 'adjetivo, verbo, pronombre, sustantivo, posesivo.' },
      { letter: 'D', text: 'adjetivo, pronombre, posesivo, posesivo, adjetivo.' },
      { letter: 'E', text: 'sustantivo, verbo, artículo, artículo, adjetivo.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q65-es', correctLetter: null },
    editorialNote: 'Grafia “CORRECTAMENT” mantida fielmente conforme impressão original.',
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2026-q66-es',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2026 · Q66 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Verbos Irregulares em Espanhol',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t1'],
    stem: 'Marca los verbos irregulares utilizados en el texto I.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'decide y remontar.' },
      { letter: 'B', text: 'consiguió y habló.' },
      { letter: 'C', text: 'rinde y suele.' },
      { letter: 'D', text: 'refería y entrena.' },
      { letter: 'E', text: 'sintiendo y parece.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q66-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2026-q67-es',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2026 · Q67 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Compreensão de Texto em Espanhol',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t2'],
    stem: 'La idea principal expresa en el texto es:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'La infancia de Quino estuvo marcada por el estudio en la Escuela de Bellas Artes, institución responsable por su éxito.',
      },
      {
        letter: 'B',
        text: 'La perseverancia y la búsqueda de oportunidades fueron fundamentales para Quino alcanzar su sueño.',
      },
      {
        letter: 'C',
        text: 'Quino alcanzó el éxito inmediatamente después de mudarse a Buenos Aires.',
      },
      {
        letter: 'D',
        text: 'Quino comenzó a publicar sus dibujos en diarios europeos y, luego, en periódicos de América Latina.',
      },
      {
        letter: 'E',
        text: 'La situación económica de Quino no influyó de hecho en su carrera como dibujante.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q67-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2026-q68-es',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2026 · Q68 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Vocabulário e Semântica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t2'],
    stem: 'Las palabras “anotado” (párrafo 1) y “penurias” (párrafo 3), utilizadas en el texto II, pueden ser sustituidas sin pérdida de sentido, respectivamente, por:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'glosado, abundancias.' },
      { letter: 'B', text: 'registrado, indigencias.' },
      { letter: 'C', text: 'sacado, estrecheces.' },
      { letter: 'D', text: 'desposeído, profusiones.' },
      { letter: 'E', text: 'nombrado, holguras.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q68-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2026-q69-es',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2026 · Q69 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Tempos e Modos Verbais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t3'],
    stem: 'En el fragmento “una tigresa de Bengala que recibió cuidados durante 21 años por los profesionales del establecimiento”, la palabra “recibió” es:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Verbo en pretérito imperfecto del modo subjuntivo, 3ª persona del singular.',
      },
      {
        letter: 'B',
        text: 'Sustantivo derivado de verbo, con función de núcleo del sujeto.',
      },
      {
        letter: 'C',
        text: 'Verbo en pretérito perfecto compuesto, 3ª persona del singular.',
      },
      {
        letter: 'D',
        text: 'Verbo en pretérito perfecto simple del modo indicativo, 3ª persona del singular.',
      },
      {
        letter: 'E',
        text: 'Verbo en pretérito pluscuamperfecto, 3ª persona del singular.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q69-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2026-q70-es',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2026 · Q70 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Recursos Estilísticos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t4'],
    stem: 'En “aguas encontradas que jamás han de istmarse”, el poeta crea el verbo “istmarse” (a partir de “istmo”). Este procedimiento estilístico puede identificarse como:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Neologismo.' },
      { letter: 'B', text: 'Hipérbole.' },
      { letter: 'C', text: 'Pleonasmo.' },
      { letter: 'D', text: 'Apócope.' },
      { letter: 'E', text: 'Eufonía.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q70-es', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2026-q71-es',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2026 · Q71 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfossintaxe em Espanhol',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t4'],
    stem: 'Las palabras “gran”, “te” y “deicida” (subrayadas en el texto) pueden ser consideradas, respectivamente, como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'conjunción, pronombre complemento, verbo en modo imperativo.',
      },
      {
        letter: 'B',
        text: 'adverbio, conjunción, verbo en modo imperativo.',
      },
      { letter: 'C', text: 'caso de apócope, pronombre personal, adjetivo.' },
      { letter: 'D', text: 'adjetivo, caso de forma reflexiva, adjetivo.' },
      {
        letter: 'E',
        text: 'conjunción con idea de tamaño, caso de apócope, sustantivo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q71-es', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2026-q72-es',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2026 · Q72 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Análise Textual e Concordância',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-es-t5'],
    stem: 'A partir del análisis del texto, es INCORRECTO decir que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'El texto publicado en el periódico El País hace uso del discurso directo, recurso lingüístico que posibilita “dar voz” a autoridades, celebridades o especialistas mencionados en la noticia, en este caso, un científico que investiga el tema.',
      },
      {
        letter: 'B',
        text: 'Según el texto, la principal dificultad que enfrenta la ciencia para estudiar el desarrollo embrionario humano en sus primeras semanas es la invisibilidad del embrión humano dentro del útero.',
      },
      {
        letter: 'C',
        text: 'En el texto, se menciona que los científicos han conseguido grabar la implantación de embriones humanos “en tiempo real”. Esto permite inferir que, antes de este logro, la etapa de implantación de un embrión humano era un misterio.',
      },
      {
        letter: 'D',
        text: 'En el fragmento “un grupo de científicos del IBEC, entre los que está Ojosnegros, ha conseguido grabar”, la forma verbal “ha conseguido” (subrayado en el texto) concuerda con el sustantivo propio singular “Ojosnegros”.',
      },
      {
        letter: 'E',
        text: 'En el segmento “como si estuviera sucediendo dentro del cuerpo de una mujer”, la construcción “como si” (subrayada en el texto) introduce una oración subordinada que expresa una situación hipotética.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q72-es', correctLetter: null },
    provenance: makeProv(24),
  },

  // ================= LÍNGUA ESTRANGEIRA — INGLÊS (Q64–Q72) =================
  {
    id: 'ufrr-2026-q64-en',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2026 · Q64 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Formação de Palavras (Word Formation)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-en-t1'],
    stem: 'The first and second paragraph of Martin Luther King Jr.‘s speech contain the words ‘emancipation’, ‘proclamation’, ‘segregation’ and ‘discrimination’. Choose the CORRECT alternative that indicates, for each of these nouns, the corresponding verb from which it is derived.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '‘to emancipate’, ‘to proclamate’, ‘to segregate’ and ‘to discriminate’.',
      },
      {
        letter: 'B',
        text: '‘to emasculate’, ‘to proclamate’, ‘to segregate’ and ‘to discriminate’.',
      },
      {
        letter: 'C',
        text: '‘to emasculate’, ‘to proclaim’, ‘to segregate’ and ‘to discriminate’.',
      },
      {
        letter: 'D',
        text: '‘to emancipate’, ‘to proclaim’, ‘to segregate’ and ‘to discriminate’.',
      },
      {
        letter: 'E',
        text: '‘to emasculate’, ‘to proclaim’, ‘to segregain’ and ‘to discriminate’.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q64-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2026-q65-en',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2026 · Q65 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reading Comprehension',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-en-t1'],
    stem: 'Which alternative best summarizes the idea of Martin Luther King Jr.‘s dream mentioned in the fourth paragraph:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Martin Luther King Jr.‘s desire is to change the color of the hills of Georgia from red to black.',
      },
      {
        letter: 'B',
        text: 'Martin Luther King Jr.‘s desire is that former slaves‘ descendants are able to buy tables from former slave owners‘ descendants in order to improve Georgia‘s economy.',
      },
      {
        letter: 'C',
        text: 'Martin Luther King Jr.‘s desire is that former slaves‘ descendants are able to get along and coexist with former slave owners‘ descendants only if they were born in Georgia.',
      },
      {
        letter: 'D',
        text: 'Martin Luther King Jr.‘s desire is that former slaves‘ descendants are able to get along and coexist with former slave owners‘ descendants.',
      },
      {
        letter: 'E',
        text: 'Martin Luther King Jr.‘s desire is to dam the Mississippi river so the state can become an oasis.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q65-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2026-q66-en',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2026 · Q66 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Prepositions',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-en-t1'],
    stem: 'Chose the alternative with the prepositions that best complete the gaps in the fifth paragraph.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'with / to / with / of / of / as.' },
      { letter: 'B', text: 'with / of / with / of / into / of.' },
      { letter: 'C', text: 'as / without / as / without / as / onto.' },
      { letter: 'D', text: 'as / with / as / with / as / as.' },
      { letter: 'E', text: 'with / without / with / without / of / onto.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q66-en', correctLetter: null },
    editorialNote: 'Grafia “Chose” mantida fielmente conforme impressão do caderno oficial.',
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2026-q67-en',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2026 · Q67 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Synonyms & Vocabulary',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Synonyms are words that have nearly the same meaning. Read the sentences below and choose the alternative that is a synonym for the underlined word respectively.

• My sister’s room is decorated with __trinkets__ from other countries.
• Dad bought new cooking __utensils__ when we moved to the new apartment.
• The referee gave us her __neutral__ opinion about which team had scored the point.
• The bells __peal__ every day at noon.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Flags, instrument, avowed, ring.' },
      { letter: 'B', text: 'Knickknacks, tools, unbiased, chime.' },
      { letter: 'C', text: 'Souvenirs, set, partial, accord.' },
      { letter: 'D', text: 'Reminders, machine, indifferent, sound.' },
      { letter: 'E', text: 'Stuffs, appliance, negative, play.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q67-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2026-q68-en',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2026 · Q68 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Collocations: Make vs Do',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Complete the sentences with the correct forms of the verbs MAKE or DO in each situation. Mark the suitable alternative:

• Shall I open the window? No, it’s ok. I will ____ it.
• Why do you always ______ the same mistakes?
• What do they ____ in that factory? Shoes.
• I am _______ some coffee. Would you like some?
• I asked you to clean the bathroom. Have you ____ it?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'do, make, make, making, done.' },
      { letter: 'B', text: 'do, do, make, doing, made.' },
      { letter: 'C', text: 'make, make, do, making, done.' },
      { letter: 'D', text: 'make, do, do, making, made.' },
      { letter: 'E', text: 'do, make, do, making, done.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q68-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2026-q69-en',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2026 · Q69 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Main Idea & Reading Comprehension',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-en-t2'],
    stem: 'What is the main idea of this text?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Some biomes receive little rain.' },
      { letter: 'B', text: 'Deserts can be very hot or very cold.' },
      { letter: 'C', text: 'There are four biomes in Brazil.' },
      { letter: 'D', text: 'Rain forest can be a biome too.' },
      { letter: 'E', text: 'Earth has many different biomes.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q69-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2026-q70-en',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2026 · Q70 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Phrasal Verbs',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Identify the sentence where the choice of phrasal verb conveys the closest meaning to “become well known”.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Anyone suspected of getting above himself would soon be cut down to size.',
      },
      {
        letter: 'B',
        text: 'This is the message that we want to get across to the public.',
      },
      {
        letter: 'C',
        text: 'If you want to catch him, you had better get after him at once.',
      },
      {
        letter: 'D',
        text: 'Reporters find ways of getting around government censorship.',
      },
      {
        letter: 'E',
        text: 'I don’t know how the story got about that she was leaving.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q70-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2026-q71-en',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2026 · Q71 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Morphosyntax & Comic Strip Reading',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `TEXT III — Read the comic strip bellow and answer the questions that follow.

Select the alternative that best describes the morphosyntactic category of the word ‘quick’ in the first speech balloon.`,
    graphics: [
      {
        id: 'ufrr-2026-g-en-t3-q71',
        type: 'image',
        imageUrl: '/exam-assets/2026/en-t3-terry-comic.jpg',
        caption: 'Adapted from: https://ifunny.co/picture/i-wish-for-a-thousand-wishes-terry-what-the-am-Fm8Mg96IC',
        altText: 'Tirinha com dois dinossauros vendo um meteoro: "Terry! Quick! Make a wish!" / "I wish for a thousand wishes." / "TERRY WHAT THE HELL?!"',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: '‘Quick’ is usually classified as an adjective, but in the comic strip it works as an adverb.',
      },
      {
        letter: 'B',
        text: "While typically an adverb, 'quick' functions as an adjective in the comic strip.",
      },
      {
        letter: 'C',
        text: "Although 'quick' is generally an adjective, it has the role of a noun in the comic strip.",
      },
      {
        letter: 'D',
        text: "Normally 'quick' is a noun, but it serves an adverbial function within the comic strip.",
      },
      {
        letter: 'E',
        text: "The word 'quick' is commonly an adverb, but in this comic strip, it is functioning as a verb.",
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q71-en', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2026-q72-en',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2026 · Q72 (EN)',
    foreignLanguage: 'Inglês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Humor & Pragmatics',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `TEXT III — Read the comic strip bellow and answer the questions that follow.

Choose the alternative that best summarizes the cause of humor in this comic strip.`,
    graphics: [
      {
        id: 'ufrr-2026-g-en-t3-q72',
        type: 'image',
        imageUrl: '/exam-assets/2026/en-t3-terry-comic.jpg',
        caption: 'Adapted from: https://ifunny.co/picture/i-wish-for-a-thousand-wishes-terry-what-the-am-Fm8Mg96IC',
        altText: 'Tirinha com dois dinossauros vendo um meteoro: "Terry! Quick! Make a wish!" / "I wish for a thousand wishes." / "TERRY WHAT THE HELL?!"',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'The humor stems from the unexpected multiplication of shooting stars that will grant Terry a thousand wishes making him the king of dinosaurs.',
      },
      {
        letter: 'B',
        text: 'The humor is achieved because ‘quick’ is usually an adjective, but in this comic strip it works as an adverb.',
      },
      {
        letter: 'C',
        text: 'The humor is achieved because Terry’s father asks him to make a wish quick before they get extinct, but Terry’s is not capable of thinking fast enough making his father angry.',
      },
      {
        letter: 'D',
        text: 'The humor is achieved because dinosaurs cannot talk, but in the comic strip they do.',
      },
      {
        letter: 'E',
        text: 'The humor stems from the association of the dinosaurs’ mass extinction event to a naive wish of a young dinosaur wish for a thousand wishes.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q72-en', correctLetter: null },
    provenance: makeProv(27),
  },

  // ================= LÍNGUA ESTRANGEIRA — FRANÇAIS (Q64–Q72) =================
  {
    id: 'ufrr-2026-q64-fr',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2026 · Q64 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t1'],
    stem: 'Quelle est la décision annoncée par Yann Barthès?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Ne plus parler de politique' },
      { letter: 'B', text: 'Ne plus inviter de responsables politiques' },
      { letter: 'C', text: 'Arrêter son émission définitivement' },
      { letter: 'D', text: 'Lancer un nouveau programme sportif' },
      { letter: 'E', text: 'Remplacer les journalistes par des robots' },
    ],
    answerKey: { questionId: 'ufrr-2026-q64-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2026-q65-fr',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2026 · Q65 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Conjugaison et Grammaire',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t1'],
    stem: 'Le verbe « ne vont plus inviter » est conjugué…:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Au futur simple, forme affirmative' },
      { letter: 'B', text: 'Au conditionnel passé' },
      { letter: 'C', text: 'À l‘imparfait, voix passive' },
      { letter: 'D', text: 'Au présent de l‘indicatif, forme négative' },
      { letter: 'E', text: 'Au subjonctif présent' },
    ],
    answerKey: { questionId: 'ufrr-2026-q65-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2026-q66-fr',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2026 · Q66 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Analyse de Discours',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t1'],
    stem: 'Quel mot exprime le mieux l‘attitude de l‘auteur face aux politiques?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Complaisante' },
      { letter: 'B', text: 'Déçue' },
      { letter: 'C', text: 'Empathique' },
      { letter: 'D', text: 'Méprisante' },
      { letter: 'E', text: 'Insouciante.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q66-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2026-q67-fr',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2026 · Q67 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t2'],
    stem: "Quel est l'objectif principal des ateliers mentionnés dans l'article ?",
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Apprendre aux élèves à rédiger des articles journalistiques.',
      },
      { letter: 'B', text: "Former les élèves à l'utilisation des réseaux sociaux." },
      { letter: 'C', text: "Enseigner aux élèves l'histoire de la Guadeloupe." },
      {
        letter: 'D',
        text: "Préparer les élèves aux examens de fin d'année.",
      },
      {
        letter: 'E',
        text: 'Sensibiliser les élèves à la désinformation et leur enseigner la vérification des sources.',
      },
    ],
    answerKey: { questionId: 'ufrr-2026-q67-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2026-q68-fr',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2026 · Q68 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Analyse Syntaxique',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t2'],
    stem: "Dans la phrase « Comment on peut savoir, nous, que ce n'est pas vrai ? », quelle est la fonction de « nous »?",
    graphics: [],
    alternatives: [
      { letter: 'A', text: "Complément d'objet direct." },
      { letter: 'B', text: 'Sujet du verbe.' },
      { letter: 'C', text: 'Apposition pour insister sur le sujet.' },
      { letter: 'D', text: 'Complément circonstanciel de cause.' },
      { letter: 'E', text: "Complément d'objet indirect." },
    ],
    answerKey: { questionId: 'ufrr-2026-q68-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2026-q69-fr',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2026 · Q69 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Analyse Syntaxique',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t2'],
    stem: 'Quelle est la fonction du groupe nominal « des lycéens du lycée professionnel Louis-Delgrès » dans la phrase « En Guadeloupe, des lycéens du lycée professionnel Louis-Delgrès ont participé à des ateliers » ?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Complément circonstanciel de lieu.' },
      { letter: 'B', text: "Complément d'objet direct." },
      { letter: 'C', text: "Complément d'objet indirect." },
      { letter: 'D', text: "Complément d'agent." },
      { letter: 'E', text: 'Sujet du verbe.' },
    ],
    answerKey: { questionId: 'ufrr-2026-q69-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2026-q70-fr',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2026 · Q70 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t3'],
    stem: "Quel est le risque principal mentionné dans l‘article ?",
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'L‘instabilité politique causée par la dépendance énergétique',
      },
      { letter: 'B', text: 'La hausse des salaires' },
      { letter: 'C', text: 'Une explosion nucléaire' },
      { letter: 'D', text: 'La faillite des compagnies pétrolières' },
      { letter: 'E', text: 'Le rejet du gaz naturel' },
    ],
    answerKey: { questionId: 'ufrr-2026-q70-fr', correctLetter: null },
    provenance: makeProv(30),
  },
  {
    id: 'ufrr-2026-q71-fr',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2026 · Q71 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Structure Argumentative',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t3'],
    stem: "Quelle structure argumentative retrouve-t-on dans l‘article ?",
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'L‘énumération sans lien logique' },
      { letter: 'B', text: 'La narration fictive' },
      { letter: 'C', text: 'La comparaison comique' },
      {
        letter: 'D',
        text: 'L‘argument d‘autorité et la cause-conséquence',
      },
      { letter: 'E', text: 'L‘ironie systématique' },
    ],
    answerKey: { questionId: 'ufrr-2026-q71-fr', correctLetter: null },
    provenance: makeProv(30),
  },
  {
    id: 'ufrr-2026-q72-fr',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2026 · Q72 (FR)',
    foreignLanguage: 'Francês',
    year: 2026,
    edition: 'UFRR 2026',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Morphosyntaxe — Forme Interrogative',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2026-fr-t3'],
    stem: 'Quelle est la nature grammaticale de « menace-t-elle » ?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Impératif, forme affirmative' },
      { letter: 'B', text: 'Subjonctif passé' },
      { letter: 'C', text: 'Indicatif présent, voix active' },
      { letter: 'D', text: 'Inversion sujet-verbe à l‘interrogatif' },
      { letter: 'E', text: 'Passé simple' },
    ],
    answerKey: { questionId: 'ufrr-2026-q72-fr', correctLetter: null },
    editorialNote:
      'Observação editorial: o fragmento impresso de Texte III no caderno oficial encerra-se antes da ocorrência da expressão “menace-t-elle”; questão preservada integralmente conforme o documento.',
    provenance: makeProv(30),
  },
];

export const UFRR_2026_EXAM: ExamEdition = {
  id: EXAM_ID,
  name: EXAM_NAME,
  shortName: 'UFRR 2026 Integral',
  year: 2026,
  edition: 'UFRR 2026',
  modality: 'Prova Integral',
  totalQuestions: 72,
  officialDurationSeconds: 5 * 3600,
  alternativesPerQuestion: 5,
  subjectBreakdown: [
    { subject: 'Língua Portuguesa', questionCount: 9 },
    { subject: 'Matemática', questionCount: 9 },
    { subject: 'Biologia', questionCount: 9 },
    { subject: 'Física', questionCount: 9 },
    { subject: 'Geografia', questionCount: 9 },
    { subject: 'História', questionCount: 9 },
    { subject: 'Química', questionCount: 9 },
    { subject: 'Língua Estrangeira', questionCount: 9 },
  ],
  hasEssay: true,
  essayPrompt: ESSAY_PROMPT_2026,
  importStatus: 'validated',
  answerKeyStatus: 'pending_gabarito',
  sourceDocumentName: DOC_NAME,
  isDemoFixture: false,
  rulesSummary: [
    '72 questões objetivas com cinco alternativas (A, B, C, D e E) — sendo Q64 a Q72 selecionadas conforme idioma escolhido (Espanhol, Inglês ou Francês).',
    '8 disciplinas com 9 questões cada (Língua Portuguesa integra questões de Literatura; Biologia; Física; Geografia; História; Química; Matemática; Língua Estrangeira).',
    'Duração oficial de 5 horas corridas, incluindo a produção da Redação (Tema 1 ou Tema 2, máx. 25 linhas).',
    'Gabarito oficial ainda não anexado nesta etapa: o simulado e o banco funcionam integralmente com registro de respostas e atualização automática assim que o gabarito for vinculado.',
  ],
  scoringRulesNote:
    'Edição UFRR 2026 importada fielmente do caderno oficial. Quando o gabarito definitivo for importado, todas as tentativas concluídas serão recalculadas automaticamente.',
  questionIds: UFRR_2026_QUESTIONS.map((q) => q.id),
};
