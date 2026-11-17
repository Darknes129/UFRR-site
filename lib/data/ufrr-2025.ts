import type { EssayPrompt, ExamEdition, Question, SharedText } from '../types';

const DOC_NAME = 'caderno-de-prova-2025-e3-ufrr.pdf';
const EXAM_ID = 'ufrr-integral-2025';
const EXAM_NAME = 'Vestibular UFRR 2025 — Prova Integral';

const makeProv = (pageNumber: number, notes?: string) => ({
  institution: 'UFRR / CPV',
  documentName: DOC_NAME,
  pageNumber,
  isDemoFixture: false,
  notes,
});

export const UFRR_2025_SHARED_TEXTS: SharedText[] = [
  {
    id: 'ufrr-2025-pt-t2',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO II (Português) — Para a questão 03',
    content: `Carregado de mim ando no mundo,
E o grande peso embarga-me as passadas,
Que como ando por vias desusadas,
Faço o peso crescer, e vou-me ao fundo.

O remédio será seguir o imundo
Caminho, onde dos mais vejo as pisadas,
Que as bestas andam juntas mais ousadas,
Do que anda só o engenho mais profundo.

Não é fácil viver entre os insanos,
Erra, quem presumir que sabe tudo,
Se o atalho não soube dos seus danos.

O prudente varão há de ser mudo,
Que é melhor neste mundo, mar de enganos,
Ser louco c'os demais, que só, sisudo.`,
    sourceCitation:
      '(Gregório de Matos. Poemas escolhidos. Organização de José Miguel Wisnik. São Paulo: Cultrix, s.d. p. 253)',
  },
  {
    id: 'ufrr-2025-pt-t3',
    examId: EXAM_ID,
    title: 'Mal secreto',
    referenceLabel: 'TEXTO III (Português) — Para as questões 04 e 05',
    content: `Se a cólera que espuma, a dor que mora
N‘alma, e destrói cada ilusão que nasce,
Tudo o que punge, tudo o que devora
O coração, no rosto se estampasse;

Se se pudesse, o espírito que chora,
Ver através da máscara da face,
Quanta gente, talvez, que inveja agora
Nos causa, então piedade nos causasse!

Quanta gente que ri, talvez, consigo
Guarda um atroz, recôndito inimigo
Como invisível chaga cancerosa!

Quanta gente que ri, talvez existe,
Cuja ventura única consiste
Em parecer aos outros venturosa!`,
    sourceCitation:
      'CORREIA, Raimundo. Mal Secreto. Sinfonias, 1883. Disponível em: https://www.academia.org.br/academicos/raimundo-correia/textos-escolhidos. Acesso em: 12 de set. 2024.',
  },
  {
    id: 'ufrr-2025-pt-t4',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO IV (Português) — Para a questão 06',
    content: `“Ao escrever esta peça, onde combate o mundanismo, praga de sua igreja, o autor quis [...] indicar que sabe, mais do que ninguém, que sua alma é um **velho** catre, cheio de insensatez e de solércia. Ele não tinha o direito de tocar nesse tema, mas ousou fazê-lo, baseado no espírito popular de sua gente, porque acredita que esse povo sofre, é um povo salvo e tem direito a certas intimidades”.`,
    sourceCitation:
      'SUASSUNA, Ariano. Auto da Compadecida. Rio de Janeiro: Nova Fronteira, 2018.',
  },
  {
    id: 'ufrr-2025-pt-t5',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO V (Português) — Para as questões 08 e 09',
    content: `“[...] E assim os favelados acalmaram. E durmiram tranquilos. Ainda não tinham ido falar como Dr Adhemar de Barrós. Eles confiavam nêste grande lider. Reuniram e foram. E foram bem recebidos pelo Dr. Adhemar que não faz seleção. E abria as portas do palacio para a turba. Foi por intermedio do Dr. Adhemar de Barros que o ze povinho conheceu as dependências dos campos eliseos. Citaram ao Dr. Adhemar os seus problemas angustioso. [...] Quantas pessôas que moravam em casas de tijolos invejava os favelados dizia que nós eramos favorecidos pelo políticos. No inicio isto aqui era um primor. Todos os dias, chegava um barracão. Não havia divergência. Reuniram cotisavam e estalavam a luz. Quem tinha radio tocava e a favela, era mais alegre. Eu morava na rua Riachuelo. A casa foi demolida eu passei a residir no Hotel todas admirava. Dizia: granfina! [...]”.`,
    sourceCitation: 'Fonte: JESUS, Carolina Maria de. Ed. São Paulo, 2014, p.24-25.',
  },
  {
    id: 'ufrr-2025-es-t1',
    examId: EXAM_ID,
    title: 'El impacto de la Inteligencia Artificial en el trabajo y el liderazgo — ¿Estamos preparando nuestros perfiles laborales y organizaciones para el cambio?',
    referenceLabel: 'TEXTO I (Español) — Para las cuestiones 64, 65 y 66',
    content: `1 La inteligencia artificial (IA) está transformando el
2 mundo lab oral, y **su** impacto en las relaciones
3 humanas sigue siendo un tema de debate. La
4 principal preocupación es si la IA reemplazará a los
5 humanos en **sus** trabajos, actividades o relaciones.
6 Sin embargo, paradójicamente, hemos sido **nosotros**
7 mismos quienes **nos** hemos ido robotizando y
8 perdiendo las características esenciales que hacen a
9 la condición humana.
10 Durante años de agotador sacrificio, hemos
11 adoptado una lógica eficientista, enfocándonos
12 únicamente en la productividad, la perfección de los
13 resultados y la optimización del rendimiento. De
14 manera que este enfoque ha creado el escenario
15 propicio para que los robots por supuesto nos
16 superen en estas áreas.
17 Los estudios y estadísticas recientes nos muestran
18 que hoy, si algo es repetitivo, entonces podría
19 automatizarse, lo vemos en ámbitos como atención
20 al cliente, la tecnología, finanzas, legales, RRHH entre
21 otros.
22 **El liderazgo en la era IA**
23 Actualmente, muchos líderes no lideran y, bajo el
24 lema de la agilidad, se asemejan más a robots que a
25 seres humanos, priorizando su ego, modernizando
26 mecanismos de control y haciendo alarde de sus
27 puestos en LinkedIn, sus títulos, sus premios y su
28 economía, mientras carecen de las competencias
29 humanas necesarias para esta era laboral. Estos
30 líderes son fácilmente reemplazables por una
31 máquina y son los primeros que se quedarán sin
32 trabajo a medida que avance la tecnología.
33 Por su parte, abusar de la IA en la gestión de
34 personas promueve acompañamientos impersonales.
35 Al incorporarla en demasiadas evaluaciones,
36 directivas y supervisiones, se corre el riesgo de
37 cosificar a las personas, congelar la colaboración,
38 desmotivarlas, aislarlas y generarles nuevos
39 trastornos psicoemocionales, incrementando el
40 malestar. Las personas no queremos abrazos y
41 felicitaciones digitales con vacío emocional el desafío
42 será crear un mix que permita llegar a los objetivos y
43 estar conectados humanamente.
44 La mayor diferenciación de los líderes con las IA
45 radica en nuestra capacidad de establecer lazos
46 empáticos, conexiones emocionales y
47 reconocimiento personalizado, esenciales para el
48 bienestar y la motivación de los equipos.
49 Entonces la escucha activa, la resolución de
50 conflictos, el pensamiento crítico, la creatividad e
51 innovación, la comunicación empática, la calidez, la
52 compasión, la comprensión, la capacidad de tomar
53 decisiones conscientes, el ver más allá de las
54 apariencias, el tender una mano sin esperar nada a
55 cambio, el abrir una puerta y generar un nexo que
56 puede cambiar una vida, la gestión psico emocional y
57 el superarnos día a día más allá del programa familiar
58 o laboral establecido, son indispensables para que
59 los líderes logren desarrollar a sus talentos.`,
    sourceCitation:
      'Adaptado de: https://www.ambito.com/opiniones/el-impacto-la-inteligencia-artificial-el-trabajo-y-el-liderazgo-n6018251 Aceso en 30 de junio de 2024.',
  },
  {
    id: 'ufrr-2025-es-t2',
    examId: EXAM_ID,
    title: '– Brasil pagó R$ 847 millones a organizaciones internacionales en 2024 · El gobierno abonó íntegramente su contribución regular a la ONU',
    referenceLabel: 'TEXTO II (Español) — Para la cuestión 67',
    content: `Brasil pagó R$ 847 millones en deudas con organismos internacionales en el primer semestre del año, anunciaron el miércoles (3) los ministerios de Relaciones Exteriores y de Planificación y Presupuesto. De ese total, R$ 325 millones correspondieron a la contribución regular del país a las Naciones Unidas.

Según la nota ministerial, esta fue la primera vez en la última década que Brasil pagó su cuota a la ONU en el primer semestre del año, por lo que recibió un agradecimiento el 17 de mayo y figura en la Lista de Honor del organismo.

"Al honrar sus contribuciones a los organismos internacionales, Brasil fortalece su papel en la escena mundial, reafirma su compromiso con el multilateralismo y refuerza la integración regional", dice el comunicado.

El año pasado, el país pagó R$ 4,6 mil millones en compromisos financieros, honrando deudas de años anteriores. Los pagos se distribuyeron entre contribuciones regulares a organizaciones internacionales, bancos multilaterales y recomposiciones de fondos que operan en varios países.

Además de la ONU, la nota conjunta mencionó pagos a otras organizaciones internacionales que actúan en áreas prioritarias de la política exterior brasileña, como la Comunidad de Países de Lengua Portuguesa (CPLP) y la Facultad Latinoamericana de Ciencias Sociales (FLACSO).

En cuanto a los compromisos en el área de medio ambiente y cambio climático, Brasil pagó en el primer semestre sus cuotas al Convenio sobre Contaminantes Orgánicos Persistentes (Convenio de Estocolmo), a la Convención de Lucha contra la Desertificación (UNCCD) y al Convenio sobre el Mercurio (Convenio de Minamata).`,
    sourceCitation:
      'Fuente: https://agenciabrasil.ebc.com.br/es/internacional/noticia/2024-07/brasil-pago-r-847-millones-organizaciones-internacionales-en-2024 Aceso en 30 de junio de 2024.',
  },
  {
    id: 'ufrr-2025-es-t3',
    examId: EXAM_ID,
    title: 'La siesta del martes — Gabriel García Márquez',
    referenceLabel: 'TEXTO III (Español) — Para las cuestiones 68 y 69',
    content: `El tren salió del trepidante corredor de rocas bermejas, penetró en las plantaciones de banano, simétricas e interminables, y el aire se hizo húmedo y no se volvió a sentir la brisa del mar. Una humareda sofocante entró por la ventanilla del vagón. En el estrecho camino paralelo a la vía férrea había carretas de bueyes cargadas de racimos verdes. Al otro lado del camino, intempestivos espacios sin sembrar, había ventiladores eléctricos, campamentos de ladrillos rojos y residencias con sillas y mesitas blancas en las terrazas, entre palmeras y rosales polvorientos. Eran las once de la mañana y aún no había empezado el calor.`,
    sourceCitation:
      'Fuente: Adaptado de https://www.literatura.us/garciamarquez/siesta.html',
  },
  {
    id: 'ufrr-2025-es-t4',
    examId: EXAM_ID,
    title: 'El destructivo impacto del cambio climático en México',
    referenceLabel: 'TEXTO IV (Español) — Para las cuestiones 70 y 71',
    content: `*TERESA DE MIGUEL / JORGE GALINDO · México - 01 NOV 2021 - 23:28 BRT*

En abril pasado, México sufrió una sequía histórica que vació las presas de la mayor parte del país y dejó imágenes como la del lago de Cuitzeo, en Michoacán, convertido en un erial. Unos meses después, una feroz temporada de lluvias dejaba graves inundaciones en el Estado de México, Jalisco y Chihuahua y desbordaba el río Tula, en Hidalgo, dejando un rastro de destrucción y decenas de muertos. México siempre ha estado expuesto a fenómenos extremos, pero el cambio climático está aumentando su frecuencia y severidad. El 2021 lo está demostrando.

“No es que no nos esperásemos que estos cambios ocurrieran en eventos extremos, pero pensábamos que serían para niveles de calentamiento mucho mayores y que ocurrirían a finales de este siglo. El cambio climático nos está dando una alerta”, advierte Francisco Estrada Porrúa, coordinador del Programa de Investigación en Cambio Climático de la Universidad Nacional Autónoma de México (UNAM).

Para traducir en números este fenómeno: el impacto económico de los desastres en México -principalmente hidrometeorológicos- aumentó en 2020 un 200% anual hasta superar los 31.000 millones de pesos (unos 1.530 millones de dólares), según el Centro Nacional de Prevención de Desastres.

“Lo que pasa en muchas partes de nuestro país es que a lo mejor la precipitación total que recibes en un año no varía tanto, pero los eventos de precipitación extrema son más y están acompañados de periodos más largos de sequía. Eso lo que nos está complicando mucho es la administración del agua”, explica Estrada Porrúa.`,
    sourceCitation:
      'Fuente: Adaptado de https://elpais.com/mexico/2021-11-02/el-destructivo-impacto-del-cambio-climatico-en-mexico.html . Acceso en 18 de junio de 2024.',
  },
  {
    id: 'ufrr-2025-es-t5',
    examId: EXAM_ID,
    title: '¿Cuáles animales viven en la Amazonía?',
    referenceLabel: 'TEXTO V (Español) — Para la cuestión 72',
    content: `La Amazonía es un lugar increíblemente único. Es el bosque tropical y el sistema fluvial más grande del mundo, y contiene la mayor diversidad biológica del planeta. Es hogar de millones de especies, la mayoría de ellas __aún__ sin describir.

Tanto los bosques como los sistemas de agua dulce de la Amazonía están en riesgo. __Desde__ el año 2000, las precipitaciones en la selva amazónica han disminuido un 69%. Y si el ritmo actual de deforestación continúa, WWF estima que el 27% del bioma __amazónico__ se quedará sin árboles para el año 2030. Proteger y conservar la Amazonía no es una tarea fácil, pero WWF ha estado trabajando para salvar este importante sitio.`,
    sourceCitation:
      'Fuente: Adaptado de https://www.worldwildlife.org/descubre-wwf/historias/cuales-animales-viven-en-la-amazonia-este-y-otros-8-datos-sobre-la-amazonia. Acceso en 19 de junio de 2024.',
  },
  {
    id: 'ufrr-2025-en-t1',
    examId: EXAM_ID,
    title: "Gabriel García Márquez wanted to destroy his last novel. It's about to be released.",
    referenceLabel: 'TEXT I (English) — For questions 64, 65 and 66',
    content: `Towards the end of his life, with his memory destroyed, Gabriel García Márquez **struggled** to complete a novel about the secret sex life of a middle-aged married woman. He **tried** at least five versions and **tinkered** with the text for years, shortening sentences, scribbling in the margins, changing adjectives and dictating notes to his assistant. Finally he **gave up** and **issued** a final, damning verdict.

“He told me directly that the novel had to be destroyed,” said Gonzalo García Barcha, the author‘s younger son.

When García Márquez died in 2014, several drafts, notes, and chapter fragments of the novel were preserved in his archives at the Harry Ransom Center at the University of Texas at Austin. The story remained there, spread across 769 pages, largely unread and forgotten – until García Márquez's sons decided to defy their father's wishes.

Now, a decade after his death, his final novel, Until August, will be released this month and will be published in nearly 30 countries worldwide. The story focuses on a woman named Ana Magdalena Bach, who travels to a Caribbean island every August to visit her mother's grave. On these dark pilgrimages, briefly freed from her husband and family, she always finds a new lover.

The novel adds an unexpected coda to the life and work of García Márquez, a literary giant and Nobel Prize winner, and is likely to raise questions about how estates and publishers should handle posthumous publications that contradict a writer's instructions.

Literary history is littered with examples of famous works that would not have existed if executors and heirs had not ignored the authors' wishes.`,
    sourceCitation:
      'Adapted from: https://spamchronicles.com/entertainment-news/ Accessed on June 30, 2024.',
  },
  {
    id: 'ufrr-2025-fr-t1',
    examId: EXAM_ID,
    title: '80 ans du Débarquement : qui était Emile Bouétard, le premier mort français du D-Day ?',
    referenceLabel: 'TEXTE I (Français) — Pour les questions 64, 65 et 66',
    content: `*Le 80e anniversaire du Débarquement sera célébré jeudi 6 juin à Ohama Beach en Normandie. Le premier mort français du Débarquement s’appelait Emile Bouétard. Un hommage lui a été rendu ce mercredi matin.*

Publié le 05/06/2024 à 19:01 , mis à jour le 06/06/2024 à 08:03 - https://www.ladepeche.fr/2024/06/05/80-ans-du-debarquement-qui-etait-emile-bouetard-le-premier-mort-francais-du-d-day-11996424.php

80 ans plus tard, sa mémoire n‘est pas oubliée. Avant la grande cérémonie internationale du 80e anniversaire du Débarquement, jeudi après-midi à Ohama Beach en Normandie, la première cérémonie organisée a eu lieu ce mercredi matin à Plumelec dans le Morbihan. Une cérémonie pour honorer le caporal Emile Bouétard.

Emile Bouétard est le premier mort français du Débarquement. Ce Breton de 28 ans faisait partie des commandos parachutistes de la France libre intégrés au Special Air Service (SAS) britannique. Dans le cadre de l‘opération Overlord – le nom de code du débarquement allié – cette unité d‘élite était chargée de bloquer l‘avancée des soldats allemands présents en Bretagne vers la Normandie.

(...)

Après sa mort, Emile Bouétard a été enterré dans son village de Pleudihen-sur-Rance. Une stèle a été érigée à sa mémoire. Un monument lui est dédié sur les lieux de son décès à Halliguen. A Plumelec, une place porte son nom. Pour ne jamais l‘oublier, 80 ans après.`,
  },
  {
    id: 'ufrr-2025-fr-t2',
    examId: EXAM_ID,
    title: '80 ans du Débarquement : qui était Emile Bouétard, le premier mort français du D-Day ? (extrait)',
    referenceLabel: 'TEXTE II (Français) — Pour les questions 67, 68 et 69',
    content: `Publié le 05/06/2024 à 19:01 , mis à jour le 06/06/2024 à 08:03 - https://www.ladepeche.fr/2024/06/05/80-ans-du-debarquement-qui-etait-emile-bouetard-le-premier-mort-francais-du-d-day-11996424.php

(...)

Emile Bouétard est le premier mort français du Débarquement. Ce Breton de 28 ans faisait partie des commandos parachutistes de la France libre intégrés au Special Air Service (SAS) britannique. Dans le cadre de l‘opération Overlord – le nom de code du débarquement allié – cette unité d‘élite était chargée de bloquer l‘avancée des soldats allemands présents en Bretagne vers la Normandie.

Dans la nuit du 5 au 6 juin 1944, neuf parachutistes dont Emile Bouétard sont largués vers minuit près de Plumelec. Leur mission : **établir** une base qui servira à des opérations de guérilla en lien avec la résistance. Le pilote les largue à 2 km de la zone prévue. Malheureusement, les renseignements britanniques n‘avaient pas détecté l‘existence d‘un observatoire allemand, non loin de la zone de parachutage. Les neuf parachutistes sont repérés, encerclés, ils se battent jusqu‘à épuisement de leurs munitions. Emile Bouétard est blessé à l‘épaule et à la cuisse. Il **est achevé** par un supplétif géorgien de l‘armée allemande. Les trois opérateurs-radio qui l‘accompagnaient sont faits prisonniers.

(...)

Né en 1915, sixième enfant d‘une famille de sept, Emile Bouétard **était** marin de commerce sur un cargo de la Compagnie générale transatlantique. Au cours d‘une escale à New York en 1942, il quitte sa fonction pour rejoindre les Forces françaises libres en Angleterre. Un long périple qui l‘avait mené à Gibraltar puis à Londres. En février 1943, il s‘était porté volontaire pour servir dans les parachutistes.

(...)

Après sa mort, Emile Bouétard a été enterré dans son village de Pleudihen-sur-Rance. Une stèle a été érigée à sa mémoire. Un monument lui est dédié sur les lieux de son décès à Halliguen. A Plumelec, une place porte son nom. Pour ne jamais l‘oublier, 80 ans après.`,
  },
  {
    id: 'ufrr-2025-fr-t3',
    examId: EXAM_ID,
    title: '80 ans du Débarquement : qui était Emile Bouétard, le premier mort français du D-Day ?',
    referenceLabel: 'TEXTE III (Français) — Pour les questions 70, 71 et 72',
    content: `*Le 80e anniversaire du Débarquement sera célébré jeudi 6 juin à Ohama Beach en Normandie. Le premier mort français du Débarquement s’appelait Emile Bouétard. Un hommage lui a été rendu ce mercredi matin.*

Publié le 05/06/2024 à 19:01 , mis à jour le 06/06/2024 à 08:03 - https://www.ladepeche.fr/2024/06/05/80-ans-du-debarquement-qui-etait-emile-bouetard-le-premier-mort-francais-du-d-day-11996424.php

80 ans plus tard, sa mémoire n‘est pas oubliée. Avant la grande cérémonie internationale du 80e anniversaire du Débarquement, jeudi après-midi à Ohama Beach en Normandie, la première cérémonie organisée a eu lieu ce mercredi matin à Plumelec dans le Morbihan. Une cérémonie pour honorer le caporal Emile Bouétard.

Emile Bouétard est le premier mort français du Débarquement. Ce Breton de 28 ans faisait partie des commandos parachutistes de la France libre intégrés au Special Air Service (SAS) britannique. Dans le cadre de l‘opération Overlord – le nom de code du __débarquement__ allié – cette unité d‘élite était chargée de bloquer l‘avancée des soldats allemands présents en Bretagne vers la Normandie.

Dans la nuit du 5 au 6 juin 1944, neuf parachutistes dont Emile Bouétard sont largués vers minuit près de Plumelec. Leur mission : établir une base qui servira à des opérations de guérilla en lien avec la résistance. Le pilote les largue à 2 km de la zone prévue. Malheureusement, les renseignements britanniques n‘avaient pas détecté l‘existence d‘un observatoire allemand, non loin de la zone de parachutage. Les neuf parachutistes sont repérés, encerclés, ils se battent jusqu‘à épuisement de leurs munitions. Emile Bouétard est blessé à l‘épaule et à la cuisse. Il est achevé par un supplétif géorgien de l‘armée allemande. Les trois opérateurs-radio qui l‘accompagnaient sont faits prisonniers.

(...)

Né en 1915, sixième enfant d‘une famille de sept, Emile Bouétard était marin de commerce sur un cargo de la Compagnie générale transatlantique. Au cours d‘une escale à New York en 1942, il quitte sa fonction pour rejoindre les Forces françaises libres en Angleterre. Un long __périple__ qui l‘avait mené à Gibraltar puis à Londres. En février 1943, il s‘était porté volontaire pour servir dans les parachutistes.

"C‘était un homme très pieux, très proche de sa famille et très volontaire. Il se battait vraiment pour sauver sa famille", raconte à Ouest France François Souquet, auteur du livre "Émile Bouétard, Caporal dans les Free French Paratroops", aujourd‘hui épuisé.

(...)

Après sa mort, Emile Bouétard a été enterré dans son village de Pleudihen-sur-Rance. Une stèle a été érigée à sa mémoire. Un monument lui est dédié sur les lieux de son décès à Halliguen. A Plumelec, une place porte son nom. Pour ne jamais l‘oublier, 80 ans après.`,
  },
];

const TABLE_Q15 = `<table class="w-full text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <thead>
    <tr class="bg-stone-100 dark:bg-stone-800">
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold"></th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">A</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">B</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">C</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold align-middle bg-stone-50 dark:bg-stone-900/50">Quantidade</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">4</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">2</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">R$190,00</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">2</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">4</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">R$191,00</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">2</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">4</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center tabular-nums">R$202,00</td>
    </tr>
  </tbody>
</table>`;

const ESSAY_PROMPT_2025: EssayPrompt = {
  id: 'ufrr-2025-redacao',
  title: 'Propostas de Redação — Vestibular UFRR 2025',
  theme:
    'Tema 1: Os impactos da prática da positividade tóxica na sociedade brasileira contemporânea | Tema 2: A relação do aumento no consumo de artigos mais caros entre os jovens e o pessimismo das novas gerações em relação à vida',
  instructions:
    'Escolha um dos dois temas propostos pela banca da UFRR 2025 e redija um texto dissertativo-argumentativo em até 25 linhas.',
  supportingTexts: [],
  themes: [
    {
      id: 'ufrr-2025-tema-1',
      label: 'Tema 1',
      theme: 'O surpreendente efeito da positividade tóxica na saúde mental',
      instructions:
        'Considerando o conteúdo do texto acima e seus conhecimentos prévios, elabore um texto dissertativo-argumentativo sobre o tema: os impactos da prática da positividade tóxica na sociedade brasileira contemporânea.',
      supportingTexts: [
        {
          label: 'Lucía Blasco — Da BBC News Mundo (14 dezembro 2020)',
          content: `**Pode parecer contraditório, mas a positividade pode ser tóxica.**
[...]
É precisamente nisso que consiste a positividade tóxica ou positivismo extremo: impor a nós mesmos — ou aos outros — uma atitude falsamente positiva, generalizar um estado feliz e otimista seja qual for a situação, silenciar nossas emoções "negativas" ou as dos outros. Já aconteceu de você contar algo negativo sobre sua vida para alguém e, em vez de ouvir e acolher, a pessoa dizer: "Mas pelo menos..." ou então "É só você pensar positivo"?
[...]
Para entender a positividade tóxica, devemos primeiro diferenciá-la da psicologia positiva, um conceito que parece semelhante, mas é diferente. "A psicologia positiva foi popularizada pelo psicólogo Martin Seligman, que trabalhou muito com os problemas da depressão e deu uma perspectiva diferente para lidar com diferentes problemas, situações ou patologias", explica Rodellar.
[...]
O positivismo tóxico está na moda? Baker pensa que sim e atribui isso às redes sociais, "que nos obrigam a comparar nossas vidas com as vidas perfeitas que vemos online". Para Baker, o que devemos lembrar é que "todas as nossas emoções são autênticas e reais, e todas elas são válidas".`,
          source:
            'Texto adaptado de: https://www.bbc.com/portuguese/geral-55278174 Acesso em: 24 jun. 24',
        },
      ],
      maxLines: 25,
    },
    {
      id: 'ufrr-2025-tema-2',
      label: 'Tema 2',
      theme: 'Sem sonho da casa própria, geração Z prioriza desejos e gastos com luxo',
      instructions:
        'Diante do exposto, e a partir das suas reflexões sobre a leitura proposta acima, escreva um texto dissertativo-argumentativo sobre: a relação do aumento no consumo de artigos mais caros entre os jovens e o pessimismo das novas gerações em relação à vida.',
      supportingTexts: [
        {
          label: 'Texto de Paulina Cachero (adaptado)',
          content: `“A economia está péssima, há o aquecimento global, há uma constante agitação política e social em todo o mundo”, disse Holland, que está recebendo apoio financeiro da família enquanto faz doutorado em educação e psicologia na Universidade de Michigan. “É mais fácil gastar dinheiro com coisas que lhe trarão satisfação imediata”.

Normalmente, quando as pessoas estão em uma situação econômica instável, elas diminuem os gastos. Mas, cada vez mais, as gerações mais jovens estão fazendo o oposto, achando que seu futuro financeiro está condenado, não importa o que aconteça. O aumento das dívidas estudantis, o aumento do custo de vida e as mudanças no mercado de trabalho tornaram mais difícil atingir metas financeiras, como comprar uma casa ou poupar para a aposentadoria.

Embora a tendência de gastar com luxos para lidar com o estresse – o chamado “doom spending” – possa capturar o *zeitgeist* econômico do momento, esse hábito não é novo. Stephen Wu, professor de economia do Hamilton College em Clinton, Nova York, publicou uma pesquisa em 2004[...]. Ele argumenta que sentimentos de fatalismo e hábitos de gastos contraintuitivos se tornaram mais comuns nos últimos anos, principalmente após a pandemia e a Grande Recessão. Foi quando as pessoas começaram a perceber que “uma grande parte de seus sucessos e fracassos estava fora de seu controle”, disse Wu. [...]

Pode ser fácil pensar que isso também é razoável quando a mídia social está repleta de imagens de jovens esbanjando em refeições luxuosas, férias glamorosas e produtos de grife. [...]

Compras caras podem parecer equivocadas. Mas se uma pessoa desistiu do sonho de uma vida suburbana com filhos, esse não é necessariamente o caso, disse Maria Melchor, uma criadora de conteúdo de 27 anos focada em educação financeira para a Geração Z.[...]

Em uma entrevista, ela disse que não classificaria o comportamento da geração Z em relação a itens de luxo como um “doom spending”. Em vez disso, é um vislumbre de como a vida poderia ser para um número maior de pessoas, se nem todo o seu dinheiro fosse gasto em imóveis e filhos. As taxas de casamento e natalidade estão em declínio e o trabalho remoto, pelo menos para alguns, abriu a possibilidade de não estar preso a um único lugar.

“Acho que o sonho está mudando”, disse ela.`,
          source:
            'Texto de Paulina Cachero, adaptado de https://www.bloomberglinea.com.br/estilo-de-vida/sem-sonho-da-casa-propria-geracao-z-foca-em-satisfazer-desejos-e-nos-gastos-com-luxo/. Acesso em: 27 jun. 2024.',
        },
      ],
      maxLines: 25,
    },
  ],
  maxLines: 25,
  isDemoFixture: false,
};

export const UFRR_2025_QUESTIONS: Question[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    id: 'ufrr-2025-q01',
    examId: EXAM_ID,
    originalNumber: 1,
    originalCode: 'UFRR 2025 · Q01',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Semântica — Denotação e Conotação',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `TEXTO I — Leia a tirinha abaixo e responda o que se pede:

Na tirinha acima, Dolores, a senhora que está fazendo a compra, entende de maneira exata a resposta do atendente (2º quadrinho). Essa literalidade revela que Dolores compreendeu a mensagem no sentido:`,
    graphics: [
      {
        id: 'ufrr-2025-g-q01',
        type: 'image',
        imageUrl: '/exam-assets/2025/q01-tirinha-batata.jpg',
        caption: 'Disponível em: https://www.instagram.com/p/C0m5oIVPOH- Acesso em: 24 jun. 24.',
        altText: 'Tirinha de Will Tirando: cliente pede combo número dois; atendente diz "Mais três reais você leva uma batata grande"; cliente pergunta "Grande quanto?" com uma batata gigante.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'denotativo' },
      { letter: 'B', text: 'conotativo' },
      { letter: 'C', text: 'apelativo' },
      { letter: 'D', text: 'informativo' },
      { letter: 'E', text: 'emotivo' },
    ],
    answerKey: { questionId: 'ufrr-2025-q01', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2025-q02',
    examId: EXAM_ID,
    originalNumber: 2,
    originalCode: 'UFRR 2025 · Q02',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Semântica e Literatura Regional',
      subtopic: 'O jogo da democracia — Aldenor Pimentel',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia o trecho abaixo retirado do livro **O jogo da democracia**, de Aldenor Pimentel, e responda o que se pede.

__Rico se mantinha de costas para a Democracia.__ Passou perto, sem falar com os ex-companheiros de equipe, como se nem os conhecesse.

*(PIMENTEL, Aldenor. O jogo da democracia. – Rio de Janeiro: Oficina Raquel, 2021. 64p.:il.; p. 48)*

Sobre a história retratada no livro **O jogo da democracia** e considerando o trecho acima sublinhado, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A afirmação de que Rico se mantinha de costas para a Democracia apresenta pelo menos dois sentidos: um literal e um metafórico.',
      },
      {
        letter: 'B',
        text: 'A afirmação de que Rico se mantinha de costas para a Democracia apresenta apenas sentido literal.',
      },
      {
        letter: 'C',
        text: 'A afirmação de que Rico se mantinha de costas para a Democracia apresenta apenas sentido metafórico.',
      },
      {
        letter: 'D',
        text: 'A afirmação de que Rico se mantinha de costas para a Democracia apresenta sua postura antidemocrática.',
      },
      {
        letter: 'E',
        text: 'A afirmação de que Rico se mantinha de costas para a Democracia demonstra que ele ainda pretendia retornar para o seu antigo time.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q02', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2025-q03',
    examId: EXAM_ID,
    originalNumber: 3,
    originalCode: 'UFRR 2025 · Q03',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Barroco',
      subtopic: 'Gregório de Matos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t2'],
    stem: 'Sobre o poema do texto II, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'trata-se de um soneto com rimas interpoladas ou opostas (ABBA) nos quartetos.',
      },
      {
        letter: 'B',
        text: 'o eu lírico apresenta um sentimento de não pertencimento em relação ao mundo em que vive.',
      },
      {
        letter: 'C',
        text: 'embora seja um poema barroco, não apresenta antíteses nem paradoxos.',
      },
      {
        letter: 'D',
        text: 'o soneto faz uso do recurso sintático da inversão, característica comum em obras barrocas.',
      },
      {
        letter: 'E',
        text: 'o eu lírico compara o mundo em que vive a um mar de enganos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q03', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2025-q04',
    examId: EXAM_ID,
    originalNumber: 4,
    originalCode: 'UFRR 2025 · Q04',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Parnasianismo',
      subtopic: 'Raimundo Correia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t3'],
    stem: 'Sobre o texto III, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'trata-se de um soneto pertencente ao período literário do Realismo, por isso obedece à composição clássica de dois quartetos e dois tercetos, cuja linguagem objetiva trata de temas relacionados ao pessimismo e a morte.',
      },
      {
        letter: 'B',
        text: 'trata-se de um soneto pertencente ao período literário do Parnasianismo, por isso obedece à composição clássica de dois quartetos e dois tercetos, cuja linguagem culta trata de temas relacionados aos sentimentos humanos em sua forma mais contida.',
      },
      {
        letter: 'C',
        text: 'trata-se de um poema-prosa pertencente ao período literário do Realismo, por isso não obedece à composição clássica do soneto, e apresenta uma linguagem realista voltada para a temática do pessimismo humano.',
      },
      {
        letter: 'D',
        text: 'trata-se de um poema lírico pertencente ao período literário do Naturalismo, por isso obedece à composição clássica do soneto, e apresenta uma linguagem objetiva, com o detalhamento dos sentimentos e comportamentos humanos.',
      },
      {
        letter: 'E',
        text: 'trata-se de um soneto pertencente ao período literário do Romantismo, por isso está composto por dois quartetos e dois tercetos, e possui uma linguagem direta, com adjetivos realistas que traduzem os sentimentos e atitudes humanas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q04', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2025-q05',
    examId: EXAM_ID,
    originalNumber: 5,
    originalCode: 'UFRR 2025 · Q05',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Interpretação de Poema',
      subtopic: 'Mal Secreto — Raimundo Correia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t3'],
    stem: 'Ainda com relação ao texto III, do poema de Raimundo Correia, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o eu lírico externa a sua benevolência com relação à apreciação da forma como o ser humano inibe suas dores para adaptar-se ao convívio social.',
      },
      {
        letter: 'B',
        text: 'o eu lírico externa a sua inquietação com relação à maneira como o ser humano costuma inibir suas dores e sentimentos para adaptar-se à hipocrisia do perfeccionismo social.',
      },
      {
        letter: 'C',
        text: 'o eu lírico externa o seu desprezo com relação às dores e aos sentimentos da alma humana.',
      },
      {
        letter: 'D',
        text: 'o eu lírico externa a sua complacência com relação à atitude humana em esconder seus sentimentos para não despertar pena nos inimigos.',
      },
      {
        letter: 'E',
        text: 'o eu lírico externa a sua inquietação com relação à forma como o ser humano costuma exibir suas dores e sentimentos de maneira a tentar sensibilizar os outros.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q05', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2025-q06',
    examId: EXAM_ID,
    originalNumber: 6,
    originalCode: 'UFRR 2025 · Q06',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Análise Sintática — Termos Acessórios',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t4'],
    stem: 'Com relação ao Texto IV, ao observar a palavra em destaque, a alternativa que a classifica sintaticamente de maneira CORRETA é:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'complemento nominal formado por um substantivo, na função de adjetivo, que está atribuindo uma característica ao substantivo catre.',
      },
      {
        letter: 'B',
        text: 'adjunto adverbial formado por um adjetivo, na função de substantivo, que está atribuindo uma característica ao substantivo catre.',
      },
      {
        letter: 'C',
        text: 'adjunto adnominal formado por um adjetivo, que está atribuindo uma característica ao pronome um.',
      },
      {
        letter: 'D',
        text: 'adjunto adnominal formado por um adjetivo, que está atribuindo uma característica ao substantivo catre.',
      },
      {
        letter: 'E',
        text: 'complemento nominal formado por um adjetivo, que está atribuindo uma característica ao numeral um.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q06', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2025-q07',
    examId: EXAM_ID,
    originalNumber: 7,
    originalCode: 'UFRR 2025 · Q07',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Modernismo Brasileiro',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Sobre as características e as fases do Modernismo Brasileiro, considere as assertivas a seguir e assinale a alternativa CORRETA.

I. Tem seu surgimento marcado pela Semana de Arte Moderna em 1922.
II. Possui quatro fases de desenvolvimento no Brasil;
III. Tem como característica a experimentação estética e a valorização da identidade brasileira na produção artística, literária e cultural.
IV. Utiliza técnicas tradicionais e clássicas na produção artística, literária e cultural.
V. Possui concordância com os valores burgueses e com a sociedade tradicional da época.
VI. Apresenta rompimento com as estruturas do passado.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I, III e VI estão corretas.' },
      { letter: 'B', text: 'I, II e VI estão corretas.' },
      { letter: 'C', text: 'I, II e III estão corretas.' },
      { letter: 'D', text: 'I, III, IV e VI estão corretas.' },
      { letter: 'E', text: 'Apenas I está correta.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q07', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2025-q08',
    examId: EXAM_ID,
    originalNumber: 8,
    originalCode: 'UFRR 2025 · Q08',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe — Orações Subordinadas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t5'],
    stem: 'No fragmento do texto V “[...] Quantas pessôas que moravam em casas de tijolos invejava os favelados dizia que nós eramos favorecidos pelo políticos [...]”, em termos sintáticos, temos uma oração subordinada que pode ser classificada CORRETAMENTE em:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'oração subordinada adverbial causal.' },
      { letter: 'B', text: 'oração subordinada adverbial condicional.' },
      { letter: 'C', text: 'oração subordinada substantiva objetiva direta.' },
      { letter: 'D', text: 'oração subordinada substantiva predicativa.' },
      { letter: 'E', text: 'oração subordinada adjetiva explicativa.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q08', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2025-q09',
    examId: EXAM_ID,
    originalNumber: 9,
    originalCode: 'UFRR 2025 · Q09',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Brasileira Contemporânea',
      subtopic: 'Carolina Maria de Jesus',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-pt-t5'],
    stem: 'Considerando a leitura da obra integral “Onde estaes felicidade?” da escritora Carolina Maria de Jesus e do texto V, é possível afirmar CORRETAMENTE que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A obra infere uma visão romântica de pobreza, de desigualdade e de discriminação racial.',
      },
      {
        letter: 'B',
        text: 'A obra está permeada de discussões filosóficas e abstratas em torno de questões relacionadas à desigualdade social e econômica vivenciada por muitos moradores de favelas brasileiras.',
      },
      {
        letter: 'C',
        text: 'A obra está recheada de elementos estéticos inovadores, além de problematizar questões sociais, econômicas e políticas importantes que envolvem a população vulnerável.',
      },
      {
        letter: 'D',
        text: 'A obra traz de maneira central reflexões que perpassam os desafios frente à pobreza e à discriminação racial, evidenciando o realismo social.',
      },
      {
        letter: 'E',
        text: 'A obra é dotada de uma complexidade narrativa e estrutural que possibilita compreender de forma detalhada os problemas sociais e culturais vivenciados pela autora.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q09', correctLetter: null },
    provenance: makeProv(5),
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    id: 'ufrr-2025-q10',
    examId: EXAM_ID,
    originalNumber: 10,
    originalCode: 'UFRR 2025 · Q10',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Funções Reais — Domínio e Imagem',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se uma função $f$ é definida por

$$f(x) = \\sqrt{3 - |x - 1|}$$

então, o domínio($D$) e imagem($I$) de $f$ são iguais a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$D = [-2, 4]$ e $I = [0, \\sqrt{3}]$' },
      { letter: 'B', text: '$D = [-2, 4]$ e $I = [\\sqrt{2}, \\sqrt{3}]$' },
      { letter: 'C', text: '$D = [-4, 2]$ e $I = [0, +\\infty)$' },
      { letter: 'D', text: '$D = [-4, 2]$ e $I = [0, \\sqrt{3}]$' },
      { letter: 'E', text: '$D = [-2, 4]$ e $I = [0, +\\infty)$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q10', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2025-q11',
    examId: EXAM_ID,
    originalNumber: 11,
    originalCode: 'UFRR 2025 · Q11',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana — Áreas de Regiões Circulares',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se a figura abaixo é um quadrado de lado $L$.

então o valor da área sombreada é igual a:`,
    graphics: [
      {
        id: 'ufrr-2025-g-q11',
        type: 'image',
        imageUrl: '/exam-assets/2025/q11-quadrado.png',
        altText: 'Quadrado ABCD de lado L com dois arcos de circunferência centrados em D e C (ou vértices inferiores) delimitando região sombreada central.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$L^2\\left(1 - \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{4}\\right)$' },
      { letter: 'B', text: '$L^2\\left(1 + \\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{4}\\right)$' },
      { letter: 'C', text: '$L^2\\left(1 + \\dfrac{\\pi}{6} - \\dfrac{\\sqrt{3}}{8}\\right)$' },
      { letter: 'D', text: '$L^2\\left(1 - \\dfrac{\\pi}{6} + \\dfrac{\\sqrt{3}}{8}\\right)$' },
      { letter: 'E', text: '$L^2\\left(1 - \\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{4}\\right)$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q11', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2025-q12',
    examId: EXAM_ID,
    originalNumber: 12,
    originalCode: 'UFRR 2025 · Q12',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana — Semelhança e Pontos Notáveis',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Na figura a seguir, $ABC$ é um triângulo de lados $AB = 8$ e $AC = 10$.

Se $M$ é ponto médio de $AB$, $P$ é ponto médio $CM$ e $NC = 3$, o perímetro do triângulo $ABC$ é igual a:`,
    graphics: [
      {
        id: 'ufrr-2025-g-q12',
        type: 'image',
        imageUrl: '/exam-assets/2025/q12-triangulo.png',
        altText: 'Triângulo ABC com M ponto médio de AB, segmento CM, ponto médio P de CM e ceviana AP estendida até N em BC.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$25$' },
      { letter: 'B', text: '$26$' },
      { letter: 'C', text: '$27$' },
      { letter: 'D', text: '$28$' },
      { letter: 'E', text: '$29$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q12', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2025-q13',
    examId: EXAM_ID,
    originalNumber: 13,
    originalCode: 'UFRR 2025 · Q13',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Análise Combinatória',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sabendo que o número de inscrição do ENEM é uma sequência de $12$ dígitos, supondo que todos os dígitos sejam números de $0$ a $9$ e que nenhuma inscrição poderá ter dígitos todos iguais a zero, podemos CORRETAMENTE afirmar que a quantidade máxima de números de inscrição que podem ser geradas é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$12^{10}$' },
      { letter: 'B', text: '$9 \\cdot 10^{11}$' },
      { letter: 'C', text: '$10^{6}$' },
      { letter: 'D', text: '$7 \\cdot 10^{6}$' },
      { letter: 'E', text: '$10^{12} - 1$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q13', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2025-q14',
    examId: EXAM_ID,
    originalNumber: 14,
    originalCode: 'UFRR 2025 · Q14',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Trigonometria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Se $0 < x < \\frac{\\pi}{2}$ e $\\operatorname{sen}^2(2x)=1$, então $\\sec^2 x + \\operatorname{cossec}^2 x$ vale:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$1$' },
      { letter: 'B', text: '$4$' },
      { letter: 'C', text: '$0$' },
      { letter: 'D', text: '$-1$' },
      { letter: 'E', text: '$2$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q14', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2025-q15',
    examId: EXAM_ID,
    originalNumber: 15,
    originalCode: 'UFRR 2025 · Q15',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Sistemas Lineares',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma pessoa simulou a compra dos itens A, B e C em quantidades diferentes e encontrou os valores descritos na seguinte tabela:

Podemos afirmar CORRETAMENTE que os preços unitários dos itens A, B e C são, respectivamente:`,
    tableHtml: TABLE_Q15,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'R$ 15,00, R$19,00 e R$22,00' },
      { letter: 'B', text: 'R$ 15,00, R$18,00 e R$20,00' },
      { letter: 'C', text: 'R$ 18,00, R$22,00 e R$20,00' },
      { letter: 'D', text: 'R$ 19,00, R$20,00 e R$21,00' },
      { letter: 'E', text: 'R$ 15,00, R$19,00 e R$20,00' },
    ],
    answerKey: { questionId: 'ufrr-2025-q15', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2025-q16',
    examId: EXAM_ID,
    originalNumber: 16,
    originalCode: 'UFRR 2025 · Q16',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica — Parábola',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'No gráfico temos uma parábola cujo vértice está na origem $O$, o ponto $F$ é o foco da parábola e a reta $\\mathcal{D}$ é sua reta diretriz. Se $A = (6,9)$ e $\\operatorname{tg}(\\beta) = \\frac{1}{3}$, onde $\\beta \\in \\left(0, \\frac{\\pi}{2}\\right)$, então a área do triângulo $\\triangle AFC$ é:',
    graphics: [
      {
        id: 'ufrr-2025-g-q16',
        type: 'image',
        imageUrl: '/exam-assets/2025/q16-parabola.jpg',
        altText: 'Parábola com vértice na origem O, foco F sobre o eixo Y, reta diretriz D horizontal abaixo de X, ponto A=(6,9) na parábola e projeção perpendicular até C na diretriz, formando o triângulo sombreado AFC.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$57$' },
      { letter: 'B', text: '$27$' },
      { letter: 'C', text: '$33$' },
      { letter: 'D', text: '$54$' },
      { letter: 'E', text: '$66$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q16', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2025-q17',
    examId: EXAM_ID,
    originalNumber: 17,
    originalCode: 'UFRR 2025 · Q17',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Números Complexos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Determine a parte imaginária do número complexo $z$, se

$$z = \\frac{i^{2020} + i^{2024}}{i + i^2 + i^3 + i^4 + \\cdots + i^{2025}}$$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$2$' },
      { letter: 'B', text: '$1$' },
      { letter: 'C', text: '$2024^{-1}$' },
      { letter: 'D', text: '$2025^{-1}$' },
      { letter: 'E', text: '$-2$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q17', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2025-q18',
    examId: EXAM_ID,
    originalNumber: 18,
    originalCode: 'UFRR 2025 · Q18',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica — Elipse e Retas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Nas cônicas define-se uma “corda” como o segmento que conecta dois pontos da cônica. Seja a elipse $\\mathcal{E}$ dada por:

$$4y^2 + x^2 - 16y - 2x = -1$$

e $\\mathcal{C}$ uma corda de $\\mathcal{E}$ cujo ponto médio é $M = (4, 1)$. A equação da reta que contém a corda $\\mathcal{C}$ é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$3y - 4x + 8 = 0$' },
      { letter: 'B', text: '$4y - 3x - 13 = 0$' },
      { letter: 'C', text: '$3y - 4x + 13 = 0$' },
      { letter: 'D', text: '$y + 4x - 8 = 0$' },
      { letter: 'E', text: '$4y - 3x + 8 = 0$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q18', correctLetter: null },
    provenance: makeProv(7),
  },

  // ================= BIOLOGIA (Q19–Q27) =================
  {
    id: 'ufrr-2025-q19',
    examId: EXAM_ID,
    originalNumber: 19,
    originalCode: 'UFRR 2025 · Q19',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Fisiologia Celular — Transporte pela Membrana',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A espécie *Mimosa pudica* é famosa pelo fechamento de seus folíolos quando tocados. Isso ocorre, pois, na base do folíolo, existem células que as tornam túrgidas e os folíolos eretos. Esse fenômeno está associado à ação da bomba de sódio e potássio, um exemplo clássico de transporte ativo através da membrana plasmática.

Com base no contexto e na imagem acima, analise as alternativas a seguir e assinale a alternativa CORRETA.`,
    graphics: [
      {
        id: 'ufrr-2025-g-q19',
        type: 'image',
        imageUrl: '/exam-assets/2025/q19-mimosa-pudica.jpg',
        caption: 'Fonte: Lopes,S; Rosso, S. Bio: volume 1. 1. Ed. São Paulo; Saraiva, 2010.',
        altText: 'Ilustração comparando planta de mimosa imperturbada (folíolos abertos) e planta de mimosa quando tocada (folíolos fechados).',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'As células na base do folíolo de *M. pudica* realizam transporte passivo de íons, permitindo que eles se movam de áreas de maior concentração para áreas de menor concentração, resultando no fechamento dos folíolos.',
      },
      {
        letter: 'B',
        text: 'A *M. pudica* utiliza a bomba de sódio e potássio para aumentar a concentração de íons dentro das células, tornando-as mais túrgidas e fazendo com que os folíolos se abram.',
      },
      {
        letter: 'C',
        text: 'As células na base do folíolo de *M. pudica* perdem água através de difusão simples, o que resulta no fechamento dos folíolos.',
      },
      {
        letter: 'D',
        text: 'As células na base do folíolo de *M. pudica* utilizam a bomba de sódio e potássio para transportar íons contra o gradiente de concentração, resultando no fechamento dos folíolos.',
      },
      {
        letter: 'E',
        text: 'O fechamento dos folíolos da *M. pudica* é causado pela entrada passiva de água nas células na base dos folíolos, aumentando sua turgidez.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q19', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2025-q20',
    examId: EXAM_ID,
    originalNumber: 20,
    originalCode: 'UFRR 2025 · Q20',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Citologia e Evolução — Endossimbiose',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Cientistas descobriram uma organela em uma célula eucariótica capaz de fixar nitrogênio, chamada de "nitroplasto". Esta descoberta é rara, pois até então, acreditava-se que apenas bactérias poderiam fixar nitrogênio da atmosfera para uso pelas plantas. (Revista Galileu, 2024).

Com base no contexto e na imagem representativa do processo de formação do nitroplasto, analise as alternativas a seguir e assinale a CORRETA.`,
    graphics: [
      {
        id: 'ufrr-2025-g-q20',
        type: 'image',
        imageUrl: '/exam-assets/2025/q20-b-bigelowii.jpg',
        caption: 'Simbiose entre microalga haptófita B. bigelowii com a cianobactéria UCYN-A. Fonte: https://www.saberatualizadonews.com/2024/04/cientistas-descobrem-uma-organela.html',
        altText: 'Micrografia mostrando a microalga haptófita B. bigelowii em simbiose com a cianobactéria UCYN-A (nitroplasto).',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'O nitroplasto mostra que células eucarióticas podem fixar nitrogênio de forma independente.',
      },
      {
        letter: 'B',
        text: 'O nitroplasto sugere que a fixação de nitrogênio é universal em organelas eucarióticas, sem precisar de endossimbiose.',
      },
      {
        letter: 'C',
        text: 'O nitroplasto em células eucarióticas contradiz a teoria da endossimbiose, mostrando a fixação de nitrogênio como um processo primário.',
      },
      {
        letter: 'D',
        text: 'O nitroplasto apoia a teoria da endossimbiose ao sugerir que uma célula eucariótica incorporou uma bactéria fixadora de nitrogênio.',
      },
      {
        letter: 'E',
        text: 'O nitroplasto sugere que a fixação de nitrogênio surgiu independentemente em diferentes linhagens eucarióticas, sem necessidade de simbiose com bactérias.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q20', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2025-q21',
    examId: EXAM_ID,
    originalNumber: 21,
    originalCode: 'UFRR 2025 · Q21',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Bioenergética e Mudanças Climáticas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `As mudanças climáticas impactam os ecossistemas do Brasil, a exemplo do enunciado da reportagem abaixo, afetando a fotossíntese em plantas e quimiossíntese dos microrganismos. Qual alternativa melhor descreve como essas alterações podem afetar o metabolismo energético em relação aos componentes celulares?

**Queimadas em Roraima causaram a maior degradação florestal dos últimos 15 anos na Amazônia**
Área na Amazônia afetada pelo dano ambiental chegou a 2.846 km² de janeiro a abril, a maior desde 2009. Roraima foi responsável por 99% da degradação.
*Por g1 RR — Boa Vista · 21/05/2024 01h01 · Atualizado há 2 dias*
*Fonte: https://g1.globo.com/rr/roraima/noticia/2024/05/21/queimadas-em-roraima-causaram-a-maior-degradacao-florestal-dos-ultimos-15-anos-na-amazonia.ghtml*`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A variação nos níveis de $\\text{CO}_2$ devido ao desmatamento e queimadas intensifica a quimiossíntese em bactérias, que utilizam este gás para produzir energia em seus lisossomos.',
      },
      {
        letter: 'B',
        text: 'A elevação das temperaturas e a variação da umidade afetam os tilacoides nos cloroplastos, prejudicando a fotossíntese nas plantas.',
      },
      {
        letter: 'C',
        text: 'As mudanças climáticas aumentam a produção de ATP nas mitocôndrias das células vegetais devido à maior disponibilidade de oxigênio atmosférico.',
      },
      {
        letter: 'D',
        text: 'O aumento da temperatura e a redução da umidade elevam a taxa de fotossíntese nas plantas, pois mais luz solar estimula os cloroplastos a produzirem mais glicose.',
      },
      {
        letter: 'E',
        text: 'A acidificação do solo causada pelas mudanças climáticas favorece a fotossíntese em plantas ao aumentar a disponibilidade de nutrientes essenciais nos vacúolos das células vegetais.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q21', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2025-q22',
    examId: EXAM_ID,
    originalNumber: 22,
    originalCode: 'UFRR 2025 · Q22',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Classificação das Plantas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O estado de Roraima possui área territorial de 223.644. 530 km² (IBGE, 2022). É uma região rica em vários tipos de vegetação e relevo. A vegetação em Roraima é composta por floresta tropical, campos, lavrados ou savanas e estepes ou campinas Uma árvore bastante comum nos lavrados de Roraima é conhecida pelo nome vernacular “caimbé” e apresenta como características: um tronco firme, de madeira escura, com casca grossa, folhas ásperas, sementes costumam ser dispersas por aves, desenvolvem flores e frutos e resistem bem ao período seco e ao fogo.

Conhecendo as características gerais das plantas, podemos afirmar CORRETAMENTE que o caimbé pertence ao grupo vegetal:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'gimmospermas.' },
      { letter: 'B', text: 'angiospermas.' },
      { letter: 'C', text: 'briófitas.' },
      { letter: 'D', text: 'pteridófitas.' },
      { letter: 'E', text: 'algas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q22', correctLetter: null },
    editorialNote: 'Grafia “gimmospermas” e pontuação do texto original preservadas.',
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2025-q23',
    examId: EXAM_ID,
    originalNumber: 23,
    originalCode: 'UFRR 2025 · Q23',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Histologia Animal e Adaptações dos Anfíbios',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A Serra do Tepequém é um fascinante destino de ecoturismo localizado no extremo Norte do Brasil. Situada no município de Amajari, essa região montanhosa destaca-se pela sua elevação em meio às planícies de Roraima e também por apresentar uma diversidade única de organismos e habitats, o que resulta em adaptações biológicas distintas para a sobrevivência e reprodução na região. Com foco nas características específicas dos organismos da região, qual das seguintes características descreve uma adaptação específica dos tecidos epitelial e conjuntivo em anfíbios endêmicos da região, como a rã arborícola (*Dendropsophus roraima*)?',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: "O tecido epitelial das rãs arborícolas é permeável, possibilitando a troca gasosa através da pele durante a respiração cutânea nos corpos d'água da região.",
      },
      {
        letter: 'B',
        text: 'O tecido conjuntivo dessas rãs é densamente vascularizado, permitindo a regulação térmica eficiente durante a atividade reprodutiva em ambientes variáveis.',
      },
      {
        letter: 'C',
        text: 'O tecido epitelial das rãs arborícolas da região é altamente queratinizado, proporcionando uma proteção extra contra a perda de água durante os períodos de seca.',
      },
      {
        letter: 'D',
        text: 'O tecido conjuntivo dessas rãs é altamente fibroso, conferindo resistência mecânica aos membros durante os saltos entre as árvores da floresta úmida.',
      },
      {
        letter: 'E',
        text: "O tecido epitelial é espesso e impermeável, ajudando na retenção de umidade durante a estação seca, quando os corpos d'água estão escassos.",
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q23', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2025-q24',
    examId: EXAM_ID,
    originalNumber: 24,
    originalCode: 'UFRR 2025 · Q24',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Zoologia — Répteis Peçonhentos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Nos últimos 5 anos foram notificados 6.791 acidentes causados por animais peçonhentos no estado de Roraima. Destes 47,3% foram serpentes. Entre os acidentes por serpentes há a ocorrência no estado dos quatro gêneros de serpentes: botrópico, crotálico, elapídico e laquético, com predomínio do acidente botrópico (jararaca) em 71, 3% dos casos”.

*Fonte: https://vigilancia.saude.rr.gov.br/wpcontent/uploads/2024/03/relatoriodoencasnegligenciadasroraima_2018-2023.*

A jararaca apresenta quais das características abaixo?`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Dentição opistóglifa (presença de um ou mais dentes inoculadores na região posterior da boca, os dentes apresentam sulcos pelos quais escorre a peçonha) e ausência de fosseta lacrimal.',
      },
      {
        letter: 'B',
        text: 'Dentição proteróglifa (presença de dentes inoculadores, com sulco, na parte anterior da boca) e presença de fosseta lacrimal.',
      },
      {
        letter: 'C',
        text: 'Dentição áglifa (presença de dentes, sem sulco por onde seria inoculada a peçonha) e ausência de fosseta lacrimal.',
      },
      {
        letter: 'D',
        text: 'Dentição opistóglifa (presença de um ou mais dentes inoculadores na região posterior da boca, os dentes apresentam sulcos pelos quais escorre a peçonha) e presença de fosseta lacrimal.',
      },
      {
        letter: 'E',
        text: 'Dentição solenóglifa (presença de um par de dentes articulados e ocos na parte anterior da boca) e presença de fosseta lacrimal.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q24', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2025-q25',
    examId: EXAM_ID,
    originalNumber: 25,
    originalCode: 'UFRR 2025 · Q25',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Genética — Herança Ligada ao Sexo e Autossômica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Uma mulher com coagulação normal e míope casa-se com um homem hemofílico e sem miopia, filho de pai míope. O casal tem uma criança do sexo masculino, hemofílica e sem miopia. Considerando que a hemofilia é uma anomalia ligada ao sexo, condicionada por um alelo recessivo h, localizado na região do cromossomo X não homóloga ao Y, caracterizada pela dificuldade de coagulação do sangue e a miopia é determinada por um gene autossômico recessivo, assinale a alternativa CORRETA.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'A criança herdou o gene para a hemofilia do pai;' },
      { letter: 'B', text: 'Todas as crianças desse casal serão míopes;' },
      { letter: 'C', text: 'Todos os filhos do sexo masculino desse casal serão hemofílicos;' },
      {
        letter: 'D',
        text: 'A mulher é homozigótica para as duas características genéticas;',
      },
      { letter: 'E', text: 'Esse casal pode ter crianças do sexo feminino hemofílicas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q25', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2025-q26',
    examId: EXAM_ID,
    originalNumber: 26,
    originalCode: 'UFRR 2025 · Q26',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Ecologia — Relações Ecológicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Ao longo da vida de um rio, seus canais mudam de posição diversas vezes e não é incomum que o curso do rio “corte” outros trechos de si mesmo, deixando lagos vestigiais chamados de lagos de meandro. Esses lagos ocorrem com frequência na Amazônia e são fundamentais para o equilíbrio da biodiversidade, servindo de berçário para peixes e plantas que, mais tarde, irão para os grandes rios da região.

A partir de coletas de animais em lagos de meandro do Rio Purus, no município de Boca do Acre, pesquisadores do IPAM (Instituto de Pesquisa Ambiental da Amazônia), da UFAC (Universidade Federal do Acre) e do Instituto Boitatá buscam compreender melhor os fatores que regem a variedade de espécies de anuros (grupo de anfíbios que inclui sapos, rãs e pererecas), macrófitas (plantas aquáticas que vivem em ambientes alagados) e macroinvertebrados (pequenos invertebrados que vivem nos rios).

Os anuros podem ser terrestres, aquáticos e encontrados em bancos de macrófitas. Estes bancos consistem em emaranhados de plantas aquáticas e semiaquáticas enraizadas ou livremente flutuantes que fornecem abrigo, alimentação, bem como locais para reprodução, desova e desenvolvimento para muitos organismos.

*Fonte: https://ipam.org.br/pesquisa-investiga-interacoes-ecologicas-em-areas-alagadas-da-amazonia/acesso em: 20 de maio de 2024.*

As relações ecológicas entre anuros e macrófitas e entre anuros e macroinvertebrados são, respectivamente:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'mutualismo e competição;' },
      { letter: 'B', text: 'herbivoria e parasitismo;' },
      { letter: 'C', text: 'colônia e amensalismo;' },
      { letter: 'D', text: 'inquilinismo e esclavagismo.' },
      { letter: 'E', text: 'inquilinismo e predatismo;' },
    ],
    answerKey: { questionId: 'ufrr-2025-q26', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2025-q27',
    examId: EXAM_ID,
    originalNumber: 27,
    originalCode: 'UFRR 2025 · Q27',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Parasitologia e Saúde Pública — Oncocercose',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A Oncocercose é uma doença causada pelo *Onchocerca volvulus*, é considerada a segunda causa mundial de cegueira infecciosa irreversível. A grande importância dessa enfermidade é que a Terra Indígena Yanomami (TIY) é o único espaço no territorial brasileiro endêmico para a doença. Com a recente garimpagem na TIY há a preocupação da vigilância epidemiológica do Estado de Roraima quanto a possibilidade de ocorrência de casos entre os garimpeiros que invadiram essa área endêmica, e, portanto, há necessidade de fortalecimento da assistência na identificação de casos, no diagnóstico e no tratamento precoce.

*Fonte: https://vigilancia.saude.rr.gov.br/wp-content/uploads/2024/03/relatoriodoencasnegligenciadasroraima_2018-2023.pdf/acesso em: 10 de junho de 2024.Adaptado.*

Em relação ao texto acima, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A oncocercose é uma doença parasitária de evolução crônica causada pelo verme nematódeo *Onchocerca volvulus*. Em áreas endêmicas é mais conhecida como “cegueira dos rios” ou “mal do garimpeiro”;',
      },
      {
        letter: 'B',
        text: 'A transmissão da oncocercose se dá pela picada do mosquito *Aedes aegypti*, quando infectados pelas larvas do nematódeo *Onchocerca volvulus*;',
      },
      {
        letter: 'C',
        text: 'No Brasil, a doença está presente de forma restrita à Terra Indígena Yanomami, no estado de Roraima;',
      },
      {
        letter: 'D',
        text: 'Com a exploração do garimpo e o fluxo de pessoas nas Terras Yanomamis, a oncocercose é a doença com mais casos de indivíduos infectados na região norte no ano de 2023;',
      },
      {
        letter: 'E',
        text: 'A vacinação contra a oncocercose reduz o risco de lesões nos olhos, hospitalizações e da morbimortalidade pela doença.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q27', correctLetter: null },
    provenance: makeProv(10),
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    id: 'ufrr-2025-q28',
    examId: EXAM_ID,
    originalNumber: 28,
    originalCode: 'UFRR 2025 · Q28',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Estática e Equilíbrio de Partícula',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um corpo de massa $M$ está suspenso por um fio de comprimento $L$. Uma força horizontal de módulo $F$ é exercida sobre o corpo fazendo com que este se afaste horizontalmente uma distância $x$ de sua posição inicial, ficando equilíbrio a uma altura $y$, em relação à posição inicialmente ocupada, conforme a figura. Sabendo que $x = h/2$ e que a aceleração da gravidade é $g$, o módulo da força $F$ vale:',
    graphics: [
      {
        id: 'ufrr-2025-g-q28',
        type: 'image',
        imageUrl: '/exam-assets/2025/q28-pendulo.png',
        altText: 'Corpo de massa M suspenso por fio de comprimento L na vertical e deslocado horizontalmente de x por uma força horizontal F, formando cateto vertical h e elevação y.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$F = Mg$' },
      { letter: 'B', text: '$F = 2\\,Mg$' },
      { letter: 'C', text: '$F = \\sqrt{Mg}$' },
      { letter: 'D', text: '$F = Mg/2$' },
      { letter: 'E', text: '$F = \\sqrt{2}\\,Mg$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q28', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2025-q29',
    examId: EXAM_ID,
    originalNumber: 29,
    originalCode: 'UFRR 2025 · Q29',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Hidrostática',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um recipiente cilíndrico fechado, de altura igual a $h = 10/\\pi\\text{ cm}$ e base de raio $r$, está completamente cheio com líquido de massa específica $\\mu = 0,3\\text{ g/cm}^3$. A força exercida pelo líquido no fundo do recipiente vale $F = 3\\text{ N}$. Qual o valor de $r$? Considere $\\pi = 3,14$ e $g = 10\\text{ m/s}^2$.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$3,14\\text{ cm}$' },
      { letter: 'B', text: '$2\\text{ cm}$' },
      { letter: 'C', text: '$10\\text{ cm}$' },
      { letter: 'D', text: '$5\\text{ cm}$' },
      { letter: 'E', text: '$1\\text{ cm}$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q29', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2025-q30',
    examId: EXAM_ID,
    originalNumber: 30,
    originalCode: 'UFRR 2025 · Q30',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Impulso e Quantidade de Movimento',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em um sistema isolado de forças externas, um corpo de massa $m$, inicialmente com uma velocidade de $5\\text{ m/s}$, se choca contra uma mola de constante $K = 10\\text{ N/m}$. O tempo de contato do corpo com a mola é de $0,015$ segundos. Durante esse intervalo de tempo a mola aplica sobre o corpo uma força média de $10\\text{ N}$. Após perder o contato com a mola, o corpo atinge uma velocidade de $10\\text{ m/s}$, no sentido oposto ao movimento inicial. Qual a massa do corpo?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$100\\text{ g}$' },
      { letter: 'B', text: '$1\\text{ kg}$' },
      { letter: 'C', text: '$30\\text{ g}$' },
      { letter: 'D', text: '$10\\text{ g}$' },
      { letter: 'E', text: '$150\\text{ g}$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q30', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2025-q31',
    examId: EXAM_ID,
    originalNumber: 31,
    originalCode: 'UFRR 2025 · Q31',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Calorimetria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Suponha que um estudante de ensino médio esteja realizando um experimento de calorimetria. Ele pega uma amostra de substância líquida à temperatura ambiente e aquece-a até uma temperatura inferior à temperatura de mudança de fase. Considere as seguintes afirmações sobre o processo de aquecimento e assinale a alternativa CORRETA.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A quantidade de calor necessária para aquecer a amostra é independente da quantidade de substância usada, sendo apenas função da diferença de temperatura a ser alcançada, considerando um sistema isolado.',
      },
      {
        letter: 'B',
        text: 'O tempo necessário para aquecer a amostra até a temperatura final é inversamente proporcional à massa da amostra; a constante de dilatação térmica é diretamente proporcional ao quadrado da potência fornecida pela fonte de calor, assumindo um sistema ideal sem perdas de energia.',
      },
      {
        letter: 'C',
        text: 'A quantidade de calor necessária para aquecer a amostra da substância depende do calor específico desta e a capacidade térmica da amostra é igual à quantidade de calor necessária para fazer variar sua temperatura em $1\\text{ K}$.',
      },
      {
        letter: 'D',
        text: 'O tempo necessário para aquecer a amostra até a temperatura final é o mesmo, independentemente do material do recipiente que a contém.',
      },
      {
        letter: 'E',
        text: 'A quantidade de calor para aquecer a amostra depende apenas da variação de temperatura e da quantidade de calor necessária para que cada grama da substância sofra uma mudança de temperatura correspondente a $1^{\\circ}\\text{C}$.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q31', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2025-q32',
    examId: EXAM_ID,
    originalNumber: 32,
    originalCode: 'UFRR 2025 · Q32',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Acústica — Efeito Doppler',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um grupo de ornitólogos visita um parque ecológico de Roraima a fim de observar os pássaros da região. Um dos estudiosos, ao olhar para cima, avista um pássaro canoro voando e fica parado contemplando o animal em seu voo. Como se estivesse recompensando seu admirador, o pássaro começa a cantar. Qual a percepção do ornitólogo, a respeito do canto do pássaro, se a ave se movimenta verticalmente em relação a ele?',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O canto do pássaro parecerá mais agudo se estiver subindo e mais grave caso esteja descendo.',
      },
      {
        letter: 'B',
        text: 'A percepção do observador sobre o canto do pássaro não será afetada pelo movimento da ave.',
      },
      {
        letter: 'C',
        text: 'O canto do pássaro parecerá mais grave, esteja ele subindo ou descendo.',
      },
      {
        letter: 'D',
        text: 'O canto do pássaro parecerá mais agudo, esteja ele subindo ou descendo.',
      },
      {
        letter: 'E',
        text: 'O canto do pássaro parecerá mais grave se o pássaro estiver subindo e mais agudo caso esteja descendo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q32', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2025-q33',
    examId: EXAM_ID,
    originalNumber: 33,
    originalCode: 'UFRR 2025 · Q33',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Óptica Geométrica — Lentes Esféricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em uma expedição ao Parque Nacional do Monte Roraima, um grupo de estudantes leva consigo uma lente convergente. Durante a expedição, eles utilizam a lente para observar uma planta nativa. A lente tem uma distância focal de $20\\text{ cm}$. Se a planta está a $30\\text{ cm}$ da lente, quais as características da imagem formada?',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A imagem é virtual, direita e localizada a $60\\text{ cm}$ da lente.',
      },
      {
        letter: 'B',
        text: 'A imagem é real, invertida e localizada a $12\\text{ cm}$ da lente.',
      },
      {
        letter: 'C',
        text: 'A imagem é virtual, direita e localizada a $12\\text{ cm}$ da lente.',
      },
      {
        letter: 'D',
        text: 'A imagem é real, invertida e localizada a $60\\text{ cm}$ da lente.',
      },
      {
        letter: 'E',
        text: 'A imagem é real, invertida e localizada a $30\\text{ cm}$ da lente.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q33', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2025-q34',
    examId: EXAM_ID,
    originalNumber: 34,
    originalCode: 'UFRR 2025 · Q34',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletromagnetismo — Campo Magnético de Fio Retilíneo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Roraima terá uma nova atração turística: um teleférico no Platô da Serra do Tepequém, alimentado por fios aéreos. Considere um cenário onde um fio longo e reto de alimentação aérea conduz uma corrente constante $i$ na direção mostrada na figura. Os engenheiros estão analisando o campo magnético gerado pela corrente em vários pontos ao redor do fio para garantir a segurança e o funcionamento adequado do teleférico. Considere a representação gráfica a seguir, onde os pontos A, B e C, coplanares, encontram-se a uma distância $r_A$, $r_B$ e $r_C$ do fio, respectivamente, de modo que $r_B < r_A < r_C$.

Sobre as intensidades e direções do campo magnético gerado pela corrente elétrica em cada ponto, é CORRETO afirmar que:`,
    graphics: [
      {
        id: 'ufrr-2025-g-q34',
        type: 'image',
        imageUrl: '/exam-assets/2025/q34-fio-corrente.png',
        altText: 'Fio retilíneo vertical com corrente i apontando para cima, ponto B à esquerda e pontos A e C à direita em distâncias crescentes r_B < r_A < r_C.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'O módulo do campo magnético no ponto C é maior que no ponto B, e o sentido do campo no ponto A está saindo perpendicularmente da folha de papel.',
      },
      {
        letter: 'B',
        text: 'O módulo do campo magnético no ponto A é maior que no ponto B, e o sentido do campo no ponto B está perpendicular ao campo no ponto C.',
      },
      {
        letter: 'C',
        text: 'O módulo do campo magnético no ponto B é maior que no ponto A, e o sentido do campo no ponto C está entrando perpendicularmente na folha de papel.',
      },
      {
        letter: 'D',
        text: 'Os módulos do campo magnético nos pontos A e B são idênticos, e o sentido do campo no ponto B está entrando perpendicularmente na folha de papel.',
      },
      {
        letter: 'E',
        text: 'O módulo do campo magnético no ponto B é maior que no ponto C, e o sentido do campo no ponto A está saindo perpendicularmente da folha de papel.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q34', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2025-q35',
    examId: EXAM_ID,
    originalNumber: 35,
    originalCode: 'UFRR 2025 · Q35',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletromagnetismo — Indução Eletromagnética',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um grupo de alunos do curso de engenharia elétrica foi a uma visita técnica na Usina Hidrelétrica de Jatapú, no sul de Roraima. Durante a visita, eles observaram, na prática, a aplicação da indução eletromagnética na produção de energia elétrica. Inspirados pelo que viram, decidiram replicar uma pequena parte do processo em um experimento simples para demonstrar a geração de força eletromotriz (f.e.m.) induzida. Para isso, os alunos utilizaram uma espira quadrada com $0,5\\text{ m}$ de lado, completa e perpendicularmente imersa em um campo magnético uniforme de intensidade $4,0\\text{ Wb/m}^2$, perpendicular às linhas de indução. Eles giraram essa espira até que ela ficasse paralela às linhas do campo.

Sabendo-se que essa espira levou $0,2\\text{ s}$ para mudar de posição, conclui-se que o valor da f.e.m. induzida na espira é igual a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$5\\text{ V}$' },
      { letter: 'B', text: '$5 \\times 10^{-2}\\text{ V}$' },
      { letter: 'C', text: '$6\\text{ V}$' },
      { letter: 'D', text: '$1\\text{ V}$' },
      { letter: 'E', text: '$8\\text{ V}$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q35', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2025-q36',
    examId: EXAM_ID,
    originalNumber: 36,
    originalCode: 'UFRR 2025 · Q36',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrodinâmica — Associação de Resistores',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Felipe, estudante de engenharia, está desenvolvendo um sistema de iluminação com LEDs para concorrer a um projeto de inovação. O estudante dispõe de cinco resistores idênticos, cada um com resistência de $150\\text{ ohms}$. Para garantir a correta operação dos LEDs, o estudante precisa configurar os resistores para limitar a corrente no circuito a $20\\text{ mA}$. A fonte de alimentação fornece uma tensão total de $7\\text{ volts}$. Como o devem ser associados esses resistores para alcançar uma resistência total que produza a corrente nos LEDs de $20\\text{ mA}$?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Todos os cinco resistores devem ser conectados em série.' },
      {
        letter: 'B',
        text: 'Os resistores serão reunidos em dois conjuntos: três resistores devem ser conectados em série e os outros dois em paralelo entre si. A seguir os conjuntos devem ser associados em série.',
      },
      {
        letter: 'C',
        text: 'Os resistores serão reunidos em dois conjuntos: quatro resistores devem ser conectados em série e o quinto em paralelo com a série. A seguir os conjuntos devem ser associados em série.',
      },
      {
        letter: 'D',
        text: 'Os resistores serão reunidos em dois conjuntos: dois resistores devem ser conectados em série e os outros três em paralelo entre si. A seguir os conjuntos devem ser associados em série.',
      },
      { letter: 'E', text: 'Todos os cinco resistores devem ser conectados em paralelo.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q36', correctLetter: null },
    editorialNote: 'Construção original “Como o devem ser associados” mantida verbatim.',
    provenance: makeProv(12),
  },

  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    id: 'ufrr-2025-q37',
    examId: EXAM_ID,
    originalNumber: 37,
    originalCode: 'UFRR 2025 · Q37',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geomorfologia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O relevo, como um dos componentes do meio natural, apresenta uma diversidade enorme de tipos de formas. Essas formas, por mais que possam parecer estáticas e iguais, na realidade são dinâmicas e se manifestam ao longo do tempo e do espaço de modo diferenciado, em função das combinações e interferências múltiplas dos demais componentes do estrato geográfico.

*(ROSS, Jurandyr Luciano Sanches. Geomorfologia: ambiente e planejamento. Editora Contexto, 2008).*

Essas inter-relações, que se traduzem pela troca de energia e matéria entre os componentes são geradoras da história natural do relevo. Podemos afirmar CORRETAMENTE que tais inter-relações:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'promovem a denudação dos solos e aumento dos processos erosivos.',
      },
      {
        letter: 'B',
        text: 'são responsáveis pela evolução, e, portanto, pela gênese do modelado da superfície terrestre.',
      },
      {
        letter: 'C',
        text: 'geram processos hidrológicos que contribuem para as mudanças climáticas.',
      },
      { letter: 'D', text: 'promovem processos terrestres endógenos.' },
      {
        letter: 'E',
        text: 'contribuem para gênese do solo, bem como para processos de desmatamento.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q37', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2025-q38',
    examId: EXAM_ID,
    originalNumber: 38,
    originalCode: 'UFRR 2025 · Q38',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia de Roraima — Relevo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O estado de Roraima é caracterizado por um relevo elaborado com base na relação entre as formas de relevo e os arranjos tectono–estruturais, litologias e variações altimétricas, que distinguem a paisagem do estado em relação ao cenário regional. Diante disso, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o rio Branco apresenta pouca influência na evolução do relevo, condicionando a erosão de suas margens e formação de planícies fluviais.',
      },
      {
        letter: 'B',
        text: 'a serra de Pacaraima representa um extenso divisor hidrográfico entre as bacias dos rios Orenoco e Essequibo, condicionando o relevo regional.',
      },
      {
        letter: 'C',
        text: 'as bacias sedimentares fanerozóicas constituem as unidades de relevos mais elevadas em relação aos relevos regionais.',
      },
      {
        letter: 'D',
        text: 'as principais formas de relevo são elaboradas sobre os terrenos antigos do Cráton Amazônico, constituindo planaltos residuais, relevos dissecados e extensas planícies.',
      },
      { letter: 'E', text: 'todas as alternativas estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q38', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2025-q39',
    examId: EXAM_ID,
    originalNumber: 39,
    originalCode: 'UFRR 2025 · Q39',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geopolítica da Amazônia e Biodiversidade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considerando o significado estratégico e a geopolítica da biodiversidade amazônica, Becker e Stenner (2008) dizem que foi justamente o avanço da tecnologia de satélites que permitiu ao homem olhar a Terra a partir do Cosmos e tomar consciência da unidade do globo como um bem comum, cujo uso deve repousar numa responsabilidade comum. Percebeu-se, então, que a natureza se tornara um bem escasso, e colocou-se o desafio ambiental como uma dupla questão: a da sobrevivência da humanidade e a de sua valorização como capital natural.

*(BECKER, Bertha; STENNER, Claudio. Um futuro para a Amazônia. Editora Oficina de textos, 2008.)*

Partindo do entendimento de Becker e Stenner (2008), é CORRETO afirmar que a natureza foi então revalorizada sob duas lógicas distintas:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '(i) pela lógica da exploração sem limites dos recursos naturais com fins a distribuição de lucros financeiros à sociedade e (ii) a partir da representação socioambiental que a água possui, através de uma lógica monetizada.',
      },
      {
        letter: 'B',
        text: '(i) a natureza é valorizada como capital de realização atual ou futura e como fonte da Ciência, Tecnologia e Inovação contemporânea e (ii) a representação simbólica da lógica cultural que a Amazônia passa a ter no mundo está em torno da biodiversidade e da sustentabilidade.',
      },
      {
        letter: 'C',
        text: '(i) dos processos físicos e naturais como principais meios de planejamento ambiental e (ii) dos processos socioeconômicos de divisão do capital às camadas vulneráveis da sociedade.',
      },
      {
        letter: 'D',
        text: '(i) lógica mercantil e financeira de valorização da economia local e (ii) bioeconomia como fator preponderante de desenvolvimento regional.',
      },
      {
        letter: 'E',
        text: '(i) valorização do setor público como ente representativo de proteção ao meio ambiente e (ii) como unidade biodiversa que promove o desenvolvimento sustentável para todo planeta.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q39', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2025-q40',
    examId: EXAM_ID,
    originalNumber: 40,
    originalCode: 'UFRR 2025 · Q40',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Demografia Brasileira — Censo 2022',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Os dados divulgados pelo Censo Demográfico (IBGE, 2022), apontam uma mudança no padrão de distribuição da população brasileira, considerando as faixas etárias e o percentual de habitantes. Chama a atenção uma maior concentração da população na faixa etária entre 20 a 44 anos na pirâmide etária o que reflete estas mudanças nos padrões em ralação a levantamentos anteriores”.

*(IBGE. Dados do Censo 2022, em https://censo2022.ibge.gov.br/panorama.)*

Sobre a evolução da população brasileira, analise as assertivas a seguir:

I. A evolução etária da base da pirâmide representa o aumento das taxas de natalidade e o crescimento da renda entre a classe trabalhadora.
II. A pirâmide etária apresenta uma concentração de população na faixa adulta, refletindo uma população com alta taxa de mortalidade infantil e baixa expectativa de vida.
III. A pirâmide etária evidencia o envelhecimento da população brasileira, conformada pela queda na taxa de natalidade, melhora na qualidade de vida e expectativa de vida, condições sociais que cumpre a transição.
IV. A evolução etária brasileira é reflexo da transição demográfica que se iniciou na segunda metade do século XX, com a implantação de projetos de ocupação rural.

Com relação a essas assertivas é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'somente a IV está correta.' },
      { letter: 'B', text: 'somente I e III estão corretas.' },
      { letter: 'C', text: 'somente II e IV estão corretas.' },
      { letter: 'D', text: 'somente II e III estão corretas.' },
      { letter: 'E', text: 'somente a III está correta.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q40', correctLetter: null },
    editorialNote: 'Grafia original “em ralação” mantida conforme o caderno.',
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2025-q41',
    examId: EXAM_ID,
    originalNumber: 41,
    originalCode: 'UFRR 2025 · Q41',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Industrialização Brasileira',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A industrialização no Brasil ocorreu de maneira fragmentada, em diferentes fases ao longo do tempo, sendo influenciada por contextos econômicos, políticos e sociais específicos. “Durante os anos que marcaram a política nacionalista de Getúlio Vargas, durante o Estado Novo, o país viveu um momento em que o aparelho político ampliou suas bases para estimular a industrialização, criando vários órgãos como o Ministério do Trabalho, Industria e Comércio (1931); Ministério da Educação (1933) e IBGE (1938)”

*(SCARLATO, Francisco Capuano. O espaço industrial brasileiro – Geografia do Brasil, Edusp, 2011,p.350.)*

Considerando esse contexto, analise as assertivas a seguir:

I. A industrialização no Brasil teve início significativo durante o período do “Estado Novo” (1937-1945), com a implementação de políticas de substituição de importações.
II. A região Sudeste foi a principal beneficiária da industrialização no Brasil, concentrando a maior parte das indústrias de base e de bens de consumo duráveis.
III. A industrialização brasileira foi impulsionada, principalmente, pelo investimento estrangeiro direto, especialmente de países como os Estados Unidos e China.
IV. A expansão da indústria do café alavancou a implantação de subsídios agrícolas e melhorou o cenário para a implantação de indústrias de base.

Com relação a essas assertivas é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'apenas as afirmativas II e IV estão corretas.' },
      { letter: 'B', text: 'apenas as afirmativas II e III estão corretas.' },
      { letter: 'C', text: 'apenas as afirmativas I e II estão corretas.' },
      { letter: 'D', text: 'apenas a IV está correta.' },
      { letter: 'E', text: 'todas as afirmativas estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q41', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2025-q42',
    examId: EXAM_ID,
    originalNumber: 42,
    originalCode: 'UFRR 2025 · Q42',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Cartografia — Fusos Horários do Brasil',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Os fusos horários no Brasil foram implementados em seu território, seguindo critérios geográficos e administrativos, para a melhor administração de um extenso território, o que requer a divisão do país em diferentes fusos horários para melhor organização e sincronização temporal. Considerando esse contexto, analise as assertivas a seguir:

I. O fuso horário oficial de Brasília, que é GMT-3, é adotado como referência para a maior parte do território brasileiro.
II. A divisão dos fusos horários no Brasil leva em consideração principalmente aspectos geopolíticos, como as diferentes fronteiras entre os estados.
III. O Brasil, além do horário oficial, possui outros três fusos horários: GMT-4, GMT-5 e GMT-2.
IV. A distribuição dos fusos horários no Brasil é adotada para reduzir os impactos das diferenças de longitude, facilitando a organização temporal em um país com vasta extensão territorial.

Com relação a essas assertivas é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'somente a I está correta.' },
      { letter: 'B', text: 'somente I e III estão corretas.' },
      { letter: 'C', text: 'somente I, II e IV estão corretas.' },
      { letter: 'D', text: 'somente I e II estão corretas.' },
      { letter: 'E', text: 'somente I, III e IV estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q42', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2025-q43',
    examId: EXAM_ID,
    originalNumber: 43,
    originalCode: 'UFRR 2025 · Q43',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Divisão Social do Trabalho e Desigualdades Regionais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia o texto a seguir:

“[...] proponho que a divisão social do trabalho deva ser a categoria explicativa básica da investigação da dimensão do desenvolvimento, posto que permeia todos os seus processos, em todas as escalas. Expressão do estágio atingido pelo desenvolvimento das forças produtivas, essa categoria mediadora é a adequada para se estudarem as heterogeneidades, hierarquias e especializações *intra* e *inter* qualquer escala (regional, nacional, internacional). Capaz de revelar as mediações e as formas concretas em que se processa e manifesta a reprodução social no espaço, expressa a constituição socioprodutiva interna e suas possibilidades (e a efetividade) de inserção no contexto maior, isto é, sua posição em uma relação hierárquica superior” (BRANDÃO, 2012, p. 69).

*BRANDÃO, Carlos. Território e desenvolvimento: as múltiplas escalas entre o local e global. Campinas: Editora da Unicamp, 2012.*

O Brasil apresenta desigualdades estruturais em sua formação socioeconômica e a divisão social do trabalho se constitui enquanto importante dimensão à compreensão das hierarquias regionais.

Analise as afirmações, a seguir, as quais discorrem acerca dos processos mencionados, a saber, a divisão do trabalho e as desigualdades regionais.

I. A partir de 1950, se esboça uma integração inter-regional no Brasil via produção de mercadorias, com os produtos oriundos do Sudeste, especialmente de São Paulo, alcançando outras regiões do país;
II. O avanço da industrialização para além do Sudeste a partir de 1970 não fez declinar o papel da referida região enquanto área de maior dinamismo econômico do Brasil;
III. A SUDAM (Superintendência do Desenvolvimento da Amazônia) e a SUDENE (Superintendência do Desenvolvimento do Nordeste) surgem como uma tentativa do Governo Federal de promover o desenvolvimento de regiões periféricas, sendo a criação da Zona Franca de Manaus nos anos de 1960 um corolário desta perspectiva;
IV. A reestruturação produtiva que se gesta em 1970, e que se aprofunda em 1990, propiciou o desenvolvimento industrial do Norte e Nordeste, sendo fundamentais neste processo, dentre outros fatores, a mão-de-obra barata e os incentivos governamentais.

Podemos afirmar, CORRETAMENTE, que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'todas as assertivas estão corretas.' },
      { letter: 'B', text: 'apenas II e III estão corretas.' },
      { letter: 'C', text: 'apenas I, II e III estão corretas.' },
      { letter: 'D', text: 'apenas II, III e IV estão corretas.' },
      { letter: 'E', text: 'apenas III e IV estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q43', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2025-q44',
    examId: EXAM_ID,
    originalNumber: 44,
    originalCode: 'UFRR 2025 · Q44',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Redes de Transporte e Logística',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia o texto a seguir:

“Com a mundialização do capital (CHESNAIS, 1996) ocorrida nas últimas décadas, houve uma rápida ampliação dos circuitos espaciais de produção, possibilitada devido à evolução das técnicas e normatizações aplicadas à logística, que relativizam cada vez mais o tempo necessário para percorrer longas distâncias, tornando possível uma maior coesão entre os mercados globais” (SOUZA; SILVEIRA, 2011).

*SOUZA, Vitor; SILVEIRA, Márcio. O transporte rodoviário no Brasil: algumas tipologias da viscosidade. In: SILVEIRA, Rogério (Org.). Circulação, transportes e logísticas: diferentes perspectivas. São Paulo: Outras Expressões, 2011, p. 277-298.*

A eficiência da rede de transporte se mostra elementar às trocas econômicas globais e à competitividade das empresas. Sobre o sistema de transporte e a circulação das mercadorias, é INCORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'as revoluções no transporte decorridas a partir da Segunda Revolução Industrial foram fundamentais para a saída das indústrias dos países centrais para os países periféricos ou semiperiféricos, uma vez que os custos de deslocamento e o tempo despendido à circulação das mercadorias diminuíram.',
      },
      {
        letter: 'B',
        text: 'o Arco Norte vem se notabilizando pela exportação dos grãos, superando, em algumas culturas, o volume exportado pelo porto de Santos. As secas que vêm atingindo a região amazônica, entretanto, podem prejudicar a atividade agroexportadora hidroviária nos portos amazônicos.',
      },
      {
        letter: 'C',
        text: 'há, no Brasil, a primazia do modal rodoviário – o que eleva o custo da produção – sobre os demais meios de transporte, destacando-se a necessidade de maiores investimentos em ferrovias e hidrovias.',
      },
      {
        letter: 'D',
        text: 'a saída de fábricas do setor calçadista da região Sul do Brasil para o Ceará teve como principal elemento a proximidade do estado nordestino aos centros importadores internacionais, diminuindo o custo de transporte.',
      },
      {
        letter: 'E',
        text: 'o projeto de interação nacional durante a Ditadura Militar no Brasil buscou articular a região Norte com o restante do país através da proliferação de rodovias, das quais são exemplos, dentre outras, a BR-230 (Transamazônica), BR-153 (Belém-Brasília) e a BR-319 (Manaus-Porto Velho).',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q44', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2025-q45',
    examId: EXAM_ID,
    originalNumber: 45,
    originalCode: 'UFRR 2025 · Q45',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Economia de Roraima no Século XXI',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Acerca das dinâmicas econômicas do estado de Roraima no século XXI, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O crescimento do PIB responde, nos últimos anos, exclusivamente, à produção da agricultura familiar.',
      },
      {
        letter: 'B',
        text: 'Dado o crescimento agropecuário na última década, o setor primário é aquele que mais contribui para o PIB local.',
      },
      {
        letter: 'C',
        text: 'Tomando exclusivamente a composição industrial do PIB, nota-se a prevalência dos setores da mineração e da produção de madeira em tora.',
      },
      {
        letter: 'D',
        text: 'Roraima se constitui como vetor de expansão da fronteira agrícola, destacando-se, entre outros, o cultivo da soja num contexto de modernização da produção do campo.',
      },
      {
        letter: 'E',
        text: 'Em decorrência das desigualdades sociais e da massa de desempregados, o setor de serviços se encontra em declínio.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q45', correctLetter: null },
    provenance: makeProv(15),
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    id: 'ufrr-2025-q46',
    examId: EXAM_ID,
    originalNumber: 46,
    originalCode: 'UFRR 2025 · Q46',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Clássica — Guerras Greco-Pérsicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A ascensão econômica e cultural da Grécia provocou disputas por rotas comerciais, mercados e matérias-primas entre gregos e persas. Sob o reinado de Dario e Xerxes, os persas expandiram-se sobre as cidades gregas da Ásia Menor e Jônia e, depois, na península balcânica. Surgiu, então, o longo conflito conhecido como Guerras Greco-Pérsicas ou Guerras Médicas (499-475 a.C.).”

*Fonte: COTRIM, Gilberto. História Global. São Paulo: Saraiva, 2010. p. 107.*

De acordo com o trecho de texto acima, assinale a alternativa que contém uma afirmação INCORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As guerras Greco-Pérsicas causaram certa solidariedade entre os gregos que, neste acontecimento, fortaleceram a sua percepção de identidade cultural, contrastando-a com a dos persas.',
      },
      {
        letter: 'B',
        text: 'Inicialmente, sob a liderança de Atenas e Esparta, cidadãos de outras pólis gregas juntaram-se às bem-sucedidas campanhas que buscavam deter a invasão persa.',
      },
      {
        letter: 'C',
        text: 'Embora os gregos tenham saído vitoriosos ao final da guerra, os persas, sob o comando de Xerxes, tiveram uma primeira vitória no confronto conhecido como Batalha de Salamina.',
      },
      {
        letter: 'D',
        text: 'Com o fim das guerras Greco-Pérsicas, Atenas consolidou-se como a pólis grega mais poderosa, isto devido ao seu aparato militar, bem como à sua economia.',
      },
      {
        letter: 'E',
        text: 'A criação da aliança entre diversas cidades gregas, aliança esta que ficou conhecida como Liga de Delos, tinha como objetivo a estratégia de proteção contra os persas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q46', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2025-q47',
    examId: EXAM_ID,
    originalNumber: 47,
    originalCode: 'UFRR 2025 · Q47',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Roma Antiga e Expansão Romana',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Com a expansão romana, grandes transformações afetaram não apenas as populações do Mediterrâneo, mas também os próprios romanos. Situada no centro do mundo mediterrânico, favorecida pelo domínio de um grande mar interior e por uma eficiente rede de estradas, Roma tornou-se uma grande cidade comercial, para onde passaram a afluir produtos oriundos de todas as regiões.”

*Fonte: MORENO, Jean, VIEIRA, Sandro. História: cultura e sociedade. 2.Ed. Curitiba: Positivo, 2013. p. 182.*

Sobre o império Romano é possível afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'mesmo com a importação de produtos das províncias conquistadas, o cotidiano dos romanos não sofreu quaisquer influências culturais devido à repressão militar e religiosa do Império.',
      },
      {
        letter: 'B',
        text: 'um dos efeitos das conquistas romanas foi um processo chamado *æqualitatem* que, em certa medida, promovia um tipo de igualdade social, algo que foi, posteriormente, suprimido pelo patriciado.',
      },
      {
        letter: 'C',
        text: 'as áreas conquistadas foram incorporadas ao *ager publicus*, tornando-se propriedades do Estado romano e foram arrendadas, distribuídas ou vendidas, prioritariamente, aos patrícios.',
      },
      {
        letter: 'D',
        text: 'no contexto político houve um acordo promovido pelo imperador que uniu os aristocratas, cavaleiros, generais e até grande parte da plebe urbana.',
      },
      {
        letter: 'E',
        text: 'durante o Império Romano, era dado o acesso à terra aos pequenos camponeses, as viúvas e aos órfãos dos soldados, isto devido à partilha determinada pelo Senado aos senhores do campo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q47', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2025-q48',
    examId: EXAM_ID,
    originalNumber: 48,
    originalCode: 'UFRR 2025 · Q48',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Idade Média e Feudalismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“O feudalismo é o conjunto de laços pessoais que unem entre si, hierarquicamente, os membros das camadas dominantes da sociedade. Tais laços apoiam-se numa base ‘real’: o benefício que o senhor concede a seu vassalo em troca de um certo número de serviços e de um juramento de fidelidade. Em sentido estrito, o feudalismo é a homenagem e o feudo.”

*Fonte: LE GOFF, Jacques. A civilização medieval. Bauru: EDUSC, 2005. p. 84.*

Sobre o Feudalismo é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'a relação entre suseranos e vassalos manteve totalmente o antigo sistema romano de escravidão por toda Alta Idade Média disfarçada pelo que ficou conhecido como *pacto de vassalagem*.',
      },
      {
        letter: 'B',
        text: 'o feudalismo foi a junção de instituições romanas (como as vilas, o colonato e a clientela) com os elementos germânicos (como o *beneficium*, a economia natural e as relações estabelecidas pelos *comitatus*).',
      },
      {
        letter: 'C',
        text: 'a corveia foi um tipo de remuneração em bens materiais que os nobres feudais repassavam aos soldados mercenários para que a segurança dos feudos existisse contra as invasões e pilhagens comuns naquela época.',
      },
      {
        letter: 'D',
        text: 'no século VI, as invasões ocorridas no Ocidente Europeu cessaram totalmente, fazendo com que o sistema social romano perdurasse por muitos séculos, ainda que esta estrutura social recebesse o nome de feudalismo.',
      },
      {
        letter: 'E',
        text: 'o termo *manso servil* era aplicado aos servos que se destacavam no trabalho no campo e na proteção do senhor feudal, muitas vezes estes eram promovidos ao cargo de *procurator*, um tipo de capataz que administrava todos os demais servos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q48', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2025-q49',
    examId: EXAM_ID,
    originalNumber: 49,
    originalCode: 'UFRR 2025 · Q49',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História da Amazônia — Zona Franca de Manaus',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A partir de 1967, um decreto presidencial transformou Manaus em Zona Franca, imediatamente instalando uma série de indústrias e anunciando uma oferta de quarenta mil empregos. No que toca à divisão do trabalho, as indústrias da Zona Franca operavam as fases finais de montagem e acabamento do produto. Fases que exigiam um número maior de mão de obra”

*Fonte: SOUZA, Márcio. História da Amazônia. Manaus: Valer, 2009. p. 336*

Neste contexto que trata sobre a Zona Franca de Manaus, assinale a alternativa INCORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A Zona Franca de Manaus compreendeu apenas e, exclusivamente, um polo, o industrial, fazendo com que outros setores, como o agropecuário, sofressem certo abandono por parte das metas desenvolvimentistas.',
      },
      {
        letter: 'B',
        text: 'Com o objetivo de viabilizar uma base econômica na região amazônica, a Zona Franca de Manaus buscava ser um modelo de desenvolvimento econômico e de promoção da integração produtiva e social desta região ao país.',
      },
      {
        letter: 'C',
        text: 'Os benefícios da Zona Franca de Manaus foram ampliados, em parte, para uma área superior a 8,5 milhões de quilômetros quadrados ao contemplar o Acre, Rondônia e Roraima, além das cidades de Macapá e Santana no Amapá.',
      },
      {
        letter: 'D',
        text: 'A finalidade inicial da Zona Franca de Manaus era estabelecer incentivos fiscais por 30 anos, com o passar dos anos, o prazo para esses incentivos fiscais foi ampliado, estendendo-se até 2073.',
      },
      {
        letter: 'E',
        text: 'O Polo Industrial em Manaus é administrado pela Superintendência da Zona Franca de Manaus (SUFRAMA), abrigando várias indústrias, especialmente as dos setores de televisão, informática e motocicletas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q49', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2025-q50',
    examId: EXAM_ID,
    originalNumber: 50,
    originalCode: 'UFRR 2025 · Q50',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História de Roraima — Território Federal do Rio Branco',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Foi, portanto, no interesse da SEGURANÇA NACIONAL que o Presidente Getúlio Vargas assinou o Decreto-Lei 5.812 de 13 de setembro de 1943 criando cinco Territórios Federais: Amapá, Rio Branco, Guaporé, Ponta Porã e Iguaçu. Na mensagem presidencial encaminhada ao Congresso nacional com o texto do Decreto-Lei que criou os Territórios Federais está escrito que aquele ato teve como principal objetivo levar *vida à solidão daquela gente* (gente dos lugares escolhidos para serem transformados em territórios federais) e exigências de ocupação efetiva da terra, do seu povoamento, de valorização e de segurança daquelas regiões.” (grifo do autor)

*Fonte: FREITAS, Aimberê. Retrospectiva histórica da economia do Rio Branco (hoje Roraima) até 1960. Boa Vista: IAF, 2020. p.72.*

Neste contexto de criação do Território Federal do Rio Branco, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Ainda que mencionado no Decreto-Lei 5.812, a real criação dos Territórios Federais de Iguaçu e Ponta Porã aconteceu com o sucessor de Getúlio Vargas, Eurico Gaspar Dutra, com a Constituinte de 1946.',
      },
      {
        letter: 'B',
        text: 'Embora tenha sido criado em setembro de 1943, com a nomeação no mês seguinte de seu governador, o Capitão Ene Garcez dos Reis, este só chegou à Boa Vista em dezembro daquele ano devido às dificuldades da viagem.',
      },
      {
        letter: 'C',
        text: 'As autoridades federais implantaram uma infraestrutura básica administrativa no Território Federal do Rio Branco sob o argumento de que os núcleos administrativos existentes eram precários.',
      },
      {
        letter: 'D',
        text: 'Devido aos seus interesses econômicos na região, com destaque à pecuária, o estado do Amazonas reivindicou o controle, acima do Governo Federal, sobre o Território Federal do Rio Branco, criando a Administração Bipartida.',
      },
      {
        letter: 'E',
        text: 'A escolha da capital do Território Federal ocorreu com muita polêmica, pois a cidade de Caracaraí reivindicava esta posição sob a justificativa de estar mais próxima de Manaus e por possuir o único porto de toda a região.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q50', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2025-q51',
    examId: EXAM_ID,
    originalNumber: 51,
    originalCode: 'UFRR 2025 · Q51',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Revolução Francesa',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Segundo Hobsbawm, a Revolução Francesa – apesar de não ter sido um fenômeno isolado – foi o mais fundamental dos fenômenos contemporâneos, tendo consequências profundas.
Duas das classes ou ordens que desempenharam um papel significativo na Revolução foram a Nobreza e o chamado Terceiro Estado.

*SANTIAGO, K. A. Nobreza e o Terceiro Estado segundo Hobsbawm. Disponível em: https://www.revistacontemporaneos.com.br/n1/pdf/resenha-karla.pdf)*

A respeito do quadro social francês no momento da eclosão da Revolução Francesa, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A Nobreza disputava com o Terceiro Estado o controle dos empreendimentos estatais, já que a Nobreza era responsável pela produção no Colbertismo.',
      },
      {
        letter: 'B',
        text: 'O Clero, também era parte do Terceiro Estado, já que o Absolutismo francês rompeu suas ligações com a Igreja Católica Apóstolica Romana por essa não permitir o divórcio de Monarcas.',
      },
      {
        letter: 'C',
        text: 'A Nobreza se aliou com a Burguesia para derrotar o Terceiro Estado, que era formado pelos *Sans Culottes*, os quais ansiavam pela Reforma Agrária na França.',
      },
      {
        letter: 'D',
        text: 'A utilização dos termos Primeiro Estado, Segundo Estado e Terceiro Estado, decorre da estrutura social rígida e pautada no sistemas de castas que regia a França naquele momento.',
      },
      {
        letter: 'E',
        text: 'O Terceiro Estado era formado pela imensa maioria da população, já que reunia diversos segmentos sociais, com destaque para a atuação política da Burguesia.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q51', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2025-q52',
    examId: EXAM_ID,
    originalNumber: 52,
    originalCode: 'UFRR 2025 · Q52',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'República Velha e Movimento Tenentista',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O Marechal Humberto de Alencar Castelo Branco foi o primeiro presidente da Ditadura Civil-Militar instaurada no Brasil após o Golpe de 1964. O Atlas Histórico do Brasil, da Fundação Getúlio Vargas, traz a seguinte informação sobre ele: “Embora concordasse com os princípios que levaram à eclosão da revolta tenentista de julho de 1922, manteve o respeito à hierarquia militar e não participou do movimento. No mês seguinte, foi louvado por sua conduta durante aqueles acontecimentos e, em novembro do mesmo ano, foi promovido a primeiro-tenente.”

*Disponível em: https://atlas.fgv.br/verbete/1205.*

Com base nessas informações, assinale a alternativa que melhor define os objetivos do Movimento Tenentista no Brasil.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Depois do fracasso do movimento em 1922, os tenentistas não falavam mais em nome do exército e propuseram o seguinte programa político nos anos seguintes: voto secreto, combate à corrupção administrativa e à fraude eleitoral, verdadeira representação política, liberdade de imprensa e pensamento, limitação das atribuições do Poder Executivo e restabelecimento do equilíbrio entre os três poderes e correção dos excessos da descentralização federativa.',
      },
      {
        letter: 'B',
        text: 'Com a vitória do Movimento de 1922, os tenentistas elevaram Artur Bernardes à condição de seu principal líder, já que ele havia vencido as eleições. Com esse apoio, Artur Bernardes pôde implementar mudanças estruturais significativas na estrutura produtiva brasileira, promovendo o projeto Positivista defendido pelos jovens oficiais.',
      },
      {
        letter: 'C',
        text: 'Com a derrota do Movimento de 1922, o tenentismo perdeu importância política no cenário brasileiro. A retomada de seus ideais e lideranças, como Luís Carlos Prestes, só foi possível com o Golpe de 1964, quando Prestes se tornou uma figura central, sendo o arquiteto da estratégia adotada pelo novo governo para combater a expansão do comunismo no Brasil.',
      },
      {
        letter: 'D',
        text: 'Com a vitória do movimento de 1922, os tenentistas conseguiram implementar seu projeto político positivista, assumindo funções significativas de liderança política que ainda hoje caracterizam a República Brasileira. Eles defenderam de forma intransigente o direito ao voto secreto e universal, além do funcionamento das instituições jurídicas e legislativas brasileiras.',
      },
      {
        letter: 'E',
        text: 'Após o fracasso do movimento em 1922, os tenentistas foram duramente reprimidos, com muitos sendo mortos ou presos. Sua atuação representava uma inversão das hierarquias militares, já que, como jovens tenentes e oficiais de baixa patente, ansiavam por dominar as Forças Armadas. Eles buscavam implementar um projeto político para o Brasil que combinava elementos do Positivismo e do Socialismo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q52', correctLetter: null },
    provenance: makeProv(18),
  },
  {
    id: 'ufrr-2025-q53',
    examId: EXAM_ID,
    originalNumber: 53,
    originalCode: 'UFRR 2025 · Q53',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Revolução Chinesa e Geopolítica de Taiwan',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“As eleições em Taiwan no sábado (13/1) estão sendo acompanhadas de perto pela China, pelos Estados Unidos e por outros países para quem a situação dessa pequena nação insular é estratégica.
A China vê Taiwan como uma província separatista que um dia voltará a estar sob o controle de Pequim.
No entanto, Taiwan se vê como um país independente, com sua própria Constituição e líderes democraticamente eleitos.
O presidente da China, Xi Jinping, diz que a ‘reunificação’ com Taiwan ‘deve ser cumprida’ — e não descarta o possível uso da força para conseguir isso.”

*(Brown, D. BBC. Como China perdeu Taiwan e qual a situação atual da 'ilha rebelde'. 11 de janeiro de 2024. Disponível em: https://www.bbc.com/portuguese/articles/c72yyjky4emo)*

O trecho traz informações sobre as eleições em Taiwan, uma ilha que se separou da China após a Revolução Chinesa de 1949. A respeito dessa Revolução e dos eventos que a antecederam, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Após os conflitos com as tropas japonesas nas décadas de 1930 e 1940, os comunistas assinaram um armistício aceitando o domínio japonês sobre Taiwan.',
      },
      {
        letter: 'B',
        text: 'Sob a liderança de Chiang Kai-shek, os comunistas passaram a controlar o país em 1949, após uma sangrenta guerra civil contra as forças nacionalistas de predomínio camponês.',
      },
      {
        letter: 'C',
        text: 'Devido à expressiva expansão da economia chinesa no início do século XX, o Partido Comunista se fortaleceu com o predomínio de operários na classe trabalhadora.',
      },
      {
        letter: 'D',
        text: 'Com episódios ocorridos antes e depois da Segunda Guerra Mundial, a Guerra Civil Chinesa entre nacionalistas e comunistas só terminou em 1949, com a vitória dos comunistas.',
      },
      {
        letter: 'E',
        text: 'Nacionalistas e comunistas uniram forças durante as lutas anticoloniais na primeira metade do século XX, mas aceitaram que a Inglaterra mantivesse o domínio sobre algumas regiões, como Taiwan e Tibete.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q53', correctLetter: null },
    provenance: makeProv(18),
  },
  {
    id: 'ufrr-2025-q54',
    examId: EXAM_ID,
    originalNumber: 54,
    originalCode: 'UFRR 2025 · Q54',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Redemocratização e Diretas Já',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Historiador diz que Diretas Já foi movimento popular mais poderoso da história republicana.

“[...] em 25 de abril de 1984, a Câmara dos Deputados iniciava a votação da chamada Emenda Dante de Oliveira, [...], após 20 anos de Ditadura Militar.”

*(Rádio Câmara, 25 de abril de 2014. Entrevista com Antonio José Barbosa. Com adaptações. Disponível: https://www.camara.leg.br/radio/programas/432128-historiador-diz-que-diretas-ja-foi-movimento-popular-mais-poderoso-da-historia-republicana/)*

A respeito da Campanha das Diretas, também conhecida como *Diretas Já*, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As *Diretas Já* foi um movimento popular que lutou pelo fim da ditadura, tendo como um dos resultados mais expressivos a Anistia Política concedida durante o governo Geisel.',
      },
      {
        letter: 'B',
        text: 'A Campanha das Diretas contou com intensa participação de artistas e intelectuais, que acreditavam que a maior parte da população precisava de incentivos para participar das eleições, já que poucos populares manifestavam interesse em votar.',
      },
      {
        letter: 'C',
        text: 'A principal luta do movimento *Diretas Já* era acabar com o voto de cabresto, uma herança dos tempos das eleições imperiais que ainda estava bastante presente nas regiões rurais do Brasil.',
      },
      {
        letter: 'D',
        text: 'O movimento *Diretas Já* não conseguiu alcançar seu objetivo, pois o presidente João Figueiredo possuía grande popularidade, adquirida devido ao combate eficiente à inflação durante seu governo.',
      },
      {
        letter: 'E',
        text: 'As *Diretas Já* defendia a realização de eleições presidenciais diretas em 1985, mas não conseguiu alcançar seu resultado, já que a Emenda Dante de Oliveira não foi aprovada.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q54', correctLetter: null },
    provenance: makeProv(19),
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    id: 'ufrr-2025-q55',
    examId: EXAM_ID,
    originalNumber: 55,
    originalCode: 'UFRR 2025 · Q55',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria — Sais Hidratados',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um sal hidratado, representado por $\\text{MX}\\cdot n\\text{H}_2\\text{O}$ (onde $\\text{M}$ é um metal alcalino, $\\text{X}$ é um ânion não metálico e $n$ é um número inteiro positivo), perde toda a água de hidratação quando aquecido a $150\\,^{\\circ}\\text{C}$. $5,00\\text{ g}$ desse sal hidratado liberam $1,70\\text{ g}$ de água.

Assinale a alternativa que apresenta a fórmula molecular do sal e o valor de $n$.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\text{NaS}$, $3$' },
      { letter: 'B', text: '$\\text{KS}$, $2$' },
      { letter: 'C', text: '$\\text{NaCl}$, $2$' },
      { letter: 'D', text: '$\\text{CaCl}$, $3$' },
      { letter: 'E', text: '$\\text{KOH}$, $2$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q55', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2025-q56',
    examId: EXAM_ID,
    originalNumber: 56,
    originalCode: 'UFRR 2025 · Q56',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Gases Ideais e Transformações Gasosas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere as seguintes situações para um gás ideal submetido a diferentes transformações em um sistema fechado.

I. O gás inicialmente ocupa um volume $V_1$ e tem pressão $P_1$ e temperatura $T_1$.
II. O gás é submetido a uma transformação isotérmica até atingir um novo volume $V_2$.
III. Em seguida, o gás sofre uma transformação isobárica até que sua temperatura atinja $T_3$.
IV. Finalmente, o gás passa por uma transformação isocórica até que a pressão retorne a $P_1$.

Com base nessas transformações, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Após a transformação isocórica, a nova pressão $P_2$ é dada por $P_2 = P_1 V_1 / V_2$.' },
      { letter: 'B', text: 'Após a transformação isobárica, o novo volume $V_3$ é dado por $V_3 = V_1 P_2 / P_1$.' },
      { letter: 'C', text: 'Durante a transformação isotérmica, a pressão final $P_3$ é dada por $P_3 = P_2 T_3 / T_2$.' },
      { letter: 'D', text: 'A temperatura $T_3$ deve ser menor que $T_1$ para que a pressão final $P_3$ seja igual a $P_1$.' },
      { letter: 'E', text: 'Após a transformação isotérmica, a nova pressão $P_2$ é dada por $P_2 = P_1 V_1 / V_2$.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q56', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2025-q57',
    examId: EXAM_ID,
    originalNumber: 57,
    originalCode: 'UFRR 2025 · Q57',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria — Pureza, Reagente Limitante e Rendimento',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma amostra impura de $10,0\\text{ g}$ de óxido de cálcio, contendo $80\\%$ de pureza, é misturada com $100,0\\text{ mL}$ de uma solução de ácido sulfúrico $1,0\\text{ mol/L}$. Após a reação, foram isolados $8,0\\text{ g}$ de sulfato de cálcio.

Com base nesses dados, analise as seguintes afirmações e escolha a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'O ácido sulfúrico é o reagente em excesso.' },
      { letter: 'B', text: 'A massa teórica de $\\text{CaSO}_4$ que deveria ser formada é $9,4\\text{ g}$.' },
      { letter: 'C', text: 'A quantidade de $\\text{CaO}$ puro presente na amostra é $8,0\\text{ g}$.' },
      { letter: 'D', text: 'O rendimento da reação é de aproximadamente $85\\%$.' },
      { letter: 'E', text: 'Óxido de cálcio é o reagente em limitante.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q57', correctLetter: null },
    editorialNote: 'Grafia original “reagente em limitante” mantida na alternativa E conforme o caderno.',
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2025-q58',
    examId: EXAM_ID,
    originalNumber: 58,
    originalCode: 'UFRR 2025 · Q58',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria e Soluções',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O hidróxido de sódio ($\\text{NaOH}$) neutraliza completamente o ácido sulfúrico ($\\text{H}_2\\text{SO}_4$), de acordo com a equação:

$$\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + \\text{H}_2\\text{O}$$

Qual o volume, em mililitros, de uma solução de $\\text{H}_2\\text{SO}_4$ ($1,5\\text{ mol/L}$) que reage com $1,0\\text{ mol}$ de $\\text{NaOH}$.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$100\\text{ mL}$' },
      { letter: 'B', text: '$333\\text{ mL}$' },
      { letter: 'C', text: '$150\\text{ mL}$' },
      { letter: 'D', text: '$50\\text{ mL}$' },
      { letter: 'E', text: '$666\\text{ mL}$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q58', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2025-q59',
    examId: EXAM_ID,
    originalNumber: 59,
    originalCode: 'UFRR 2025 · Q59',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Termoquímica — Lei de Hess e Combustão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A combustão completa de um hidrocarboneto se dá quando há oxigênio suficiente para queimar todo o combustível, resultando em dióxido de carbono e água. E a combustão incompleta acontece quando o oxigênio é insuficiente para queimar todo o combustível, gerando monóxido de carbono e água, ou fuligem (principalmente carbono) e água.

A seguir são apresentadas as reações de combustão do octano ($\\text{C}_8\\text{H}_{18}$):

$$\\text{C}_8\\text{H}_{18(l)} + \\text{O}_{2(g)} \\to \\text{CO}_{2(g)} + \\text{H}_2\\text{O}_{(l)}\\quad\\text{(combustão completa)}$$
$$\\text{C}_8\\text{H}_{18(l)} + \\text{O}_{2(g)} \\to \\text{CO}_{(g)} + \\text{H}_2\\text{O}_{(l)}\\quad\\text{(combustão incompleta)}$$

Calcule o calor ($\\Delta H$) produzido na combustão incompleta de $3,5\\text{ L}$ de octano a $25\\,^{\\circ}\\text{C}$ e assinale a alternativa que o apresenta CORRETAMENTE:

Dados: Massas atômicas ($\\text{C} = 12\\text{ u}$, $\\text{H} = 1\\text{ u}$, $\\text{O} = 16\\text{ u}$)
Densidade $\\text{C}_8\\text{H}_{18(l)} = 0,70\\text{ g/mL}$
$\\Delta H_{\\text{combustão}}(\\text{C}_8\\text{H}_{18}) = -1302,7\\text{ Kcal}$
$\\Delta H^{\\circ}_f(\\text{CO}_{2(g)}) = -94,0\\text{ Kcal}$
$\\Delta H^{\\circ}_f(\\text{CO}_{(g)}) = -26,4\\text{ Kcal}$
$\\Delta H^{\\circ}_f(\\text{H}_2\\text{O}_{(l)}) = -68,3\\text{ Kcal}$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$12.500\\text{ Kcal}$' },
      { letter: 'B', text: '$6.200\\text{ Kcal}$' },
      { letter: 'C', text: '$3.000\\text{ Kcal}$' },
      { letter: 'D', text: '$16.373\\text{ Kcal}$' },
      { letter: 'E', text: '$762\\text{ Kcal}$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q59', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2025-q60',
    examId: EXAM_ID,
    originalNumber: 60,
    originalCode: 'UFRR 2025 · Q60',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Equilíbrio Iônico — Constante de Ionização',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma solução é preparada introduzindo-se $0,018\\text{ Kg}$ de ácido fórmico ($\\text{HCOOH}$) em um balão volumétrico de $1000\\text{ cm}^3$ e completando-se com água destilada.

Sabendo-se que $5,2\\%$ do ácido se ionizou, determine a concentração de ($\\text{HCOOH}$) no equilíbrio e o valor do $K_a$ para o ácido fórmico.

Dados: Massas atômicas $\\text{H} = 1\\text{ u}$, $\\text{C} = 12\\text{ u}$, $\\text{O} = 16\\text{ u}$.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$[\\text{HCOOH}] = 0,39\\text{ mol/L}$; $K_a = 0,0010$' },
      { letter: 'B', text: '$[\\text{HCOOH}] = 0,0039\\text{ mol/L}$; $K_a = 0,10$' },
      { letter: 'C', text: '$[\\text{HCOOH}] = 0,37\\text{ mol/L}$; $K_a = 0,0011$' },
      { letter: 'D', text: '$[\\text{HCOOH}] = 0,0037\\text{ mol/L}$; $K_a = 0,11$' },
      { letter: 'E', text: '$[\\text{HCOOH}] = 0,350\\text{ mol/L}$; $K_a = 0,015$' },
    ],
    answerKey: { questionId: 'ufrr-2025-q60', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2025-q61',
    examId: EXAM_ID,
    originalNumber: 61,
    originalCode: 'UFRR 2025 · Q61',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Gases (Efusão/Difusão) e Isomeria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um experimento foi realizado em um laboratório onde foram comparadas as taxas de difusão de dois gases. Observou-se que um dos gases apresenta uma taxa de difusão $1,036$ vezes maior que o outro. Sabe-se que:

I. O gás X é um hidrocarboneto que sofre adição $1,4$.
II. O gás Y é um hidrocarboneto saturado que ao ser submetido a uma combustão completa, produz $90$ gramas de água.
III. X e Y tem o mesmo número de carbonos.

Com base nas informações do enunciado, podemos afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o gás X se difunde mais rapidamente e possui diastereoisômeros.',
      },
      {
        letter: 'B',
        text: 'o gás X se difunde mais rapidamente e não possui isômeros geométricos.',
      },
      {
        letter: 'C',
        text: 'o gás Y se difunde mais rapidamente e possui isômeros estruturais.',
      },
      {
        letter: 'D',
        text: 'o gás Y se difunde mais lentamente e possui três isômeros constitucionais.',
      },
      {
        letter: 'E',
        text: 'o gás X se difunde mais lentamente e não possui isômeros ópticos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q61', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2025-q62',
    examId: EXAM_ID,
    originalNumber: 62,
    originalCode: 'UFRR 2025 · Q62',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Equilíbrio Ácido-Base, pH e Tratamento de Efluentes',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma indústria química necessita realizar o lançamento de um efluente ($200\\text{ m}^3$) oriundo do processo de curtimento do couro em um corpo d‘água ($10.000.000\\text{ m}^3$). Entre os resíduos a serem lançados na água, está o ácido fórmico ($\\alpha \\simeq 4\\%$ e $\\text{Concentração} = 0,2\\text{ mol/L}$). A Resolução CONAMA Nº 430 DE 13/05/2011 proíbe que as indústrias lancem efluentes com pH menor que 5 ou superior a 9. O setor ambiental da indústria química realizou o tratamento do efluente buscando atender a resolução, com $160.200\\text{ L}$ de base $\\text{XOH}$ de $\\text{pH} = 12$, onde $\\text{X}$ é um metal alcalino.

Dado: $\\log 5,55 = 0,74$

Com base nas informações do enunciado, podemos afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o efluente poderá ser lançado pela indústria química, uma vez que, a quantidade de base utilizada neutralizou parcialmente o pH do ácido fórmico, resultando em um pH final ligeiramente ácido (5,26), mas que atende a resolução do CONAMA.',
      },
      {
        letter: 'B',
        text: 'o efluente não poderá ser lançado, pois a quantidade de base utilizada não foi suficiente para neutralizar completamente o pH do ácido fórmico, resultando em um pH final fora da faixa estabelecida pela resolução CONAMA.',
      },
      {
        letter: 'C',
        text: 'o efluente poderá ser lançado pela indústria química, uma vez que, a quantidade de base utilizada neutralizou completamente o pH do ácido fórmico, resultando em um pH final de 7,00, atendendo assim a resolução do CONAMA.',
      },
      {
        letter: 'D',
        text: 'o efluente poderá ser lançado pela indústria química, uma vez que, a quantidade de base utilizada neutralizou parcialmente o pH do ácido fórmico, resultando em um pH final ligeiramente (8,74), atendendo a resolução do CONAMA.',
      },
      {
        letter: 'E',
        text: 'o efluente poderá ser lançado pela indústria química, uma vez que, a quantidade de base utilizada neutralizou completamente o pH do ácido fórmico, resultando em um pH final de 8,74, atendendo assim a resolução do CONAMA.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q62', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2025-q63',
    examId: EXAM_ID,
    originalNumber: 63,
    originalCode: 'UFRR 2025 · Q63',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Análise Elementar e Isomeria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um composto orgânico contém exclusivamente carbono, hidrogênio e oxigênio. Ao queimar completamente $2,15\\text{ g}$ deste composto, obtêm-se $5,50\\text{ g}$ de dióxido de carbono e $2,25\\text{ g}$ de água.
A alternativa que descreve uma característica INCORRETA do composto é:

Dados: Massas molares: $\\text{CO}_2 = 44\\text{ g/mol}$; $\\text{H}_2\\text{O} = 18\\text{ g/mol}$`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o composto apresenta isomeria geométrica devido à presença de uma dupla ligação carbono-carbono na cadeia principal.',
      },
      {
        letter: 'B',
        text: 'o composto possui isomeria óptica por apresentar um carbono quiral em sua estrutura.',
      },
      { letter: 'C', text: 'o composto possui isomeria de função, aldeído-cetona.' },
      { letter: 'D', text: 'o composto possui isomeria constitucional de posição.' },
      { letter: 'E', text: 'o composto possui cadeia aberta e ramificada.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q63', correctLetter: null },
    provenance: makeProv(21),
  },

  // ================= LÍNGUA ESTRANGEIRA — ESPAÑOL (Q64–Q72) =================
  {
    id: 'ufrr-2025-q64-es',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2025 · Q64 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Pronombres en Español',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t1'],
    stem: 'En las líneas 2, 5, 6 y 7 del texto observamos el uso de algunos pronombres, que aparecen en negrita. Elija la opción que indica respectivamente la clasificación CORRECTA de los pronombres destacados.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Posesivo, posesivo, personal, personal.' },
      { letter: 'B', text: 'Posesivo, interrogativo, personal, demostrativo.' },
      { letter: 'C', text: 'Personal, posesivo, personal, posesivo.' },
      { letter: 'D', text: 'Demostrativo, posesivo, personal, personal.' },
      { letter: 'E', text: 'Interrogativo, demostrativo, posesivo, personal.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q64-es', correctLetter: null },
    editorialNote:
      'Preservado o espaçamento tipográfico original “mundo lab oral” na linha 2 do Texto I.',
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2025-q65-es',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2025 · Q65 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Presente de Indicativo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t1'],
    stem: `El el siguiente párrafo del texto I, verificamos el uso del Tiempo Presente del Modo Indicativo:

“Actualmente, muchos líderes no **lideran** y, bajo el lema de la agilidad, se **asemejan** más a robots que a seres humanos, priorizando su ego, modernizando mecanismos de control y haciendo alarde de sus puestos en LinkedIn, sus títulos, sus premios y su economía, mientras **carecen** de las competencias humanas necesarias para esta era laboral. Estos líderes **son** fácilmente reemplazables por una máquina y **son** los primeros que se quedarán sin trabajo a medida que avance la tecnología.”

Se utilizó este tempo verbal para expresar:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'verdades o valores universales.' },
      { letter: 'B', text: 'que algo es u ocurre de forma permanente.' },
      { letter: 'C', text: 'acciones con valor de futuro.' },
      { letter: 'D', text: 'acciones habituales o actuales.' },
      { letter: 'E', text: 'un hecho pasa anterior al momento del habla.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q65-es', correctLetter: null },
    editorialNote: 'Grafias originais “El el siguiente...” e “tempo verbal” preservadas.',
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2025-q66-es',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2025 · Q66 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Verbos Irregulares en Español',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t1'],
    stem: 'En el texto, verificamos algunos usos de verbos irregulares. Márquelos.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'sigue y lideran' },
      { letter: 'B', text: 'asemejan y carecen' },
      { letter: 'C', text: 'corre y queremos' },
      { letter: 'D', text: 'pueden y radica' },
      { letter: 'E', text: 'muestran y promueve' },
    ],
    answerKey: { questionId: 'ufrr-2025-q66-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2025-q67-es',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2025 · Q67 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Marcadores Discursivos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t2'],
    stem: 'De las palabras que observamos en el texto II, ¿cuáles se pueden caracterizar como marcadores discursivos?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'primera y dice' },
      { letter: 'B', text: 'en cuanto y pagó' },
      { letter: 'C', text: 'además y fue' },
      { letter: 'D', text: 'por lo que y primer' },
      { letter: 'E', text: 'además y en cuanto' },
    ],
    answerKey: { questionId: 'ufrr-2025-q67-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2025-q68-es',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2025 · Q68 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Análisis Textual y Gramatical',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t3'],
    stem: 'A partir del análisis del texto, es INCORRECTO decir que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Hay recurrentes usos de adjetivos para describir el espacio, característica común en muchos textos narrativos.',
      },
      {
        letter: 'B',
        text: '"Salió", "volvió" y "había" son ejemplos de verbos en el pretérito perfecto del modo Indicativo que ayudan a conformar el aspecto narrativo del texto.',
      },
      {
        letter: 'C',
        text: 'El uso de "y" como marcador discursivo coordina palabras y oraciones, indicando una secuencia de descripciones detalladas del lugar.',
      },
      {
        letter: 'D',
        text: 'El "con" sirve como un marcador discursivo que introduce detalles adicionales sobre las casas, enfatizando sus características específicas y enriqueciendo la descripción.',
      },
      {
        letter: 'E',
        text: '"Sin" funciona como un marcador narrativo que niega una posible característica del espacio, pues destaca la ausencia de plantaciones en partes de aquel lugar.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q68-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2025-q69-es',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2025 · Q69 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Semántica y Sinónimos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t3'],
    stem: 'Las palabras “bermejas” y “polvorientos”, utilizadas en el texto, pueden ser sustituidas sin pérdida de sentido, respectivamente, por:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'rojas y angostos' },
      { letter: 'B', text: 'bruñidas y delgados' },
      { letter: 'C', text: 'sombrias y apenados' },
      { letter: 'D', text: 'sucias y arenosos' },
      { letter: 'E', text: 'rojizas y cenicientos' },
    ],
    answerKey: { questionId: 'ufrr-2025-q69-es', correctLetter: null },
    editorialNote: 'Cabeçalho impresso originalmente como “CUESTÓN 69”.',
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2025-q70-es',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2025 · Q70 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Comprensión de Texto en Español',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t4'],
    stem: 'A partir del texto IV, señala la alternativa INCORRECTA.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'la idea central del texto es: el cambio climático está haciendo que sean más rigurosos y usuales los fenómenos extremos que siempre han afectado a México.',
      },
      {
        letter: 'B',
        text: 'el numeral “2021” se escribe por extenso de la siguiente forma: dos mil veintiuno.',
      },
      {
        letter: 'C',
        text: 'El objetivo del autor del texto es relacionar las causas y los orígenes del calentamiento global con sus consecuencias en México.',
      },
      {
        letter: 'D',
        text: 'el fragmento “a lo mejor”, en el último párrafo, es un ejemplo de locución adverbial que expresa idea de posibilidad.',
      },
      {
        letter: 'E',
        text: 'el fragmento “administración del agua”, en el último párrafo, presenta un ejemplo del fenómeno eufonía en lengua española.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q70-es', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2025-q71-es',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2025 · Q71 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Tiempos y Modos Verbales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t4'],
    stem: 'Los verbos “esperásemos” y “pensábamos”, en el segundo párrafo del texto, pueden ser clasificados CORRECTAMENTE como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'dos ejemplos de verbos en el Pretérito Pluscuamperfecto (Indicativo).',
      },
      {
        letter: 'B',
        text: 'Pretérito Pluscuamperfecto de Subjuntivo y Pretérito de Imperativo, respectivamente.',
      },
      {
        letter: 'C',
        text: 'Pretérito Imperfecto de Subjuntivo y Pretérito Pluscuamperfecto de Subjuntivo, respectivamente.',
      },
      {
        letter: 'D',
        text: 'Pretérito Imperfecto de Subjuntivo y Pretérito Imperfecto de Indicativo, respectivamente.',
      },
      {
        letter: 'E',
        text: 'dos ejemplos de verbos en el Pretérito Anterior (Subjuntivo).',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q71-es', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2025-q72-es',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2025 · Q72 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Clases Gramaticales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-es-t5'],
    stem: 'Las palabras “aún” (subrayada en el primer párrafo), “Desde” y “amazónico” (subrayadas en el segundo párrafo) pueden ser clasificadas, respectivamente, como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'adverbio con idea de tiempo, preposición y adjetivo derivado.',
      },
      {
        letter: 'B',
        text: 'conjunción con idea de tiempo, adverbio y adjetivo simples.',
      },
      {
        letter: 'C',
        text: 'conjunción con idea de oposición, conjunción y adjetivo derivado.',
      },
      {
        letter: 'D',
        text: 'adverbio con idea de tiempo, conjunción y adjetivo compuesto.',
      },
      {
        letter: 'E',
        text: 'conjunción con idea de tiempo, preposición y adjetivo simples.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q72-es', correctLetter: null },
    provenance: makeProv(24),
  },

  // ================= LÍNGUA ESTRANGEIRA — INGLÊS (Q64–Q72) =================
  {
    id: 'ufrr-2025-q64-en',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2025 · Q64 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Regular and Irregular Verbs',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-en-t1'],
    stem: 'In the first paragraph of the text, some verbs were used to describe what happened to García Márquez while completing a novel. Choose the option that correctly characterizes the verbs in bold as regular or irregular ones.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'regular, irregular, irregular, regular, regular' },
      { letter: 'B', text: 'regular, regular, regular, irregular, regular' },
      { letter: 'C', text: 'irregular, irregular, regular, regular, regular' },
      { letter: 'D', text: 'irregular, irregular, irregular, regular, irregular' },
      { letter: 'E', text: 'regular, regular, irregular, irregular, regular' },
    ],
    answerKey: { questionId: 'ufrr-2025-q64-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2025-q65-en',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2025 · Q65 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Verb Tenses — Simple Present',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-en-t1'],
    stem: 'In the fourth and fifth paragraphs, the Simple Present Tense is used for the first time in the text. Choose the option that expresses why it happened.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'It indicates daily routines in the text.' },
      { letter: 'B', text: 'It expresses general truth.' },
      { letter: 'C', text: 'It describes some habits of the characters.' },
      { letter: 'D', text: 'It indicates emotional states.' },
      { letter: 'E', text: 'It is used to narrate the story.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q65-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2025-q66-en',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2025 · Q66 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Degrees of Comparison',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-en-t1'],
    stem: `In which of the following alternatives the same kind of comparative was used as in the word in bold in the following excerpt?

“‘He told me directly that the novel had to be destroyed,’ said Gonzalo García Barcha, the author‘s **younger** son.”`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'as good as' },
      { letter: 'B', text: 'better' },
      { letter: 'C', text: 'less important than' },
      { letter: 'D', text: 'badder' },
      { letter: 'E', text: 'the youngest' },
    ],
    answerKey: { questionId: 'ufrr-2025-q66-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2025-q67-en',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2025 · Q67 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Question Tags',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Question tags play an essential role in English grammar. They act as supporting material for the sentence that conforms to the speaker/writer or listener, and he accordingly gets feedback. Analyze the following sentences and provide the suitable tag respectively.

I. Let‘s go to the party, (   )?
II. Open the door, (   )?
III. No one can solve this issue, (   )?
IV. They play the piano, (   )?
V. Everyone attended the ceremony, (   )?

The CORRECT alternative is:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'will you: do you; can‘t you; they do: did them.' },
      { letter: 'B', text: 'shall we; will you; can they; don‘t they; didn‘t they.' },
      { letter: 'C', text: 'don‘t you; won‘t you; isn‘t it: they don‘t; did he.' },
      { letter: 'D', text: 'you go; is it; it can; do they; he did.' },
      { letter: 'E', text: 'you did; you do; he can; did they; it did.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q67-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2025-q68-en',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2025 · Q68 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Collocations: Make vs Do',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'MAKE and DO are similar verbs in English. There are some words, noun phrases or expressions that unmistakably go together with those verbs. Elect from the options below nouns that combine with DO verb only:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'homework; an exercise; a list; a bed; mess.' },
      { letter: 'B', text: 'dinner; law; work; laundry; activity.' },
      { letter: 'C', text: 'an appointment; damage; task; test; statement.' },
      { letter: 'D', text: 'harm; drawing; job; one‘s best; a course.' },
      { letter: 'E', text: 'comment; housework; mistake; love; coffee.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q68-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2025-q69-en',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2025 · Q69 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Vocabulary & Morphology',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Read the following lyrics:

**Just In Time**

I found you just in time
Before you came, my time
Was running low
I was lost
The losing dice were tossed
My bridges all were crossed
Nowhere to go
Now you're here
And now I know just where I'm going
No more doubt or fear
I found my way
For love came just in time
I found you just in time
And changed my lonely life and lucky day

Considering the text above, it is TRUE to affirm:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'the antonym of LOW is sad.' },
      { letter: 'B', text: 'the noun DICE is the plural form of DIE.' },
      { letter: 'C', text: 'the term DOUBT means a feeling or a state of certainty.' },
      { letter: 'D', text: 'the compound form of IN TIME refers to be unpunctual.' },
      { letter: 'E', text: 'the word FEAR is a synonym of BOLDNESS.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q69-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2025-q70-en',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2025 · Q70 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Vocabulary in Context',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `**Strange Fruit**
*By Meeropol*

1 Southern trees bear a strange fruit
2 Blood on the leaves and blood at the root
3 Black bodies swinging in the southern breeze
4 Strange fruit hanging from the poplar trees
5 Pastoral scene of the gallant South
6 The bulging eyes and the twisted mouth
7 Scent of magnolia, sweet and fresh
8 Then the sudden smell of burning flesh
9 Here is a fruit for the crows to pluck
10 For the rain to gather, for the wind to suck
11 For the sun to rot, for the tree to drop
12 Here is a strange and bitter crop

The word “PLUCK” (line 9) above has different meanings in other contexts. Which sentence is NOT quite appropriated at all?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'The children‘s pluck stomachs are a symptom of malnutrition.' },
      { letter: 'B', text: 'Len kills the chicken, then plucks it.' },
      { letter: 'C', text: 'Wendy plucks the guitar strings.' },
      { letter: 'D', text: 'Mike plucked a rose from the vase and offered it to the Joanne.' },
      { letter: 'E', text: 'Jeremy reached out and plucked the child out of the pond.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q70-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2025-q71-en',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2025 · Q71 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Prepositions',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Read the paragraph below and complete the sentences with the proper preposition and choose the LEGITIMATE alternative.

St Christopher was hunched ( ) the edge ( ) the loch, mumbling ( ) himself and swatting ( ) the biting midges. Mungo couldn‘t tell if he was sulking or just sobering ( ). The wind mussed his thin hair; it broke the lock ( ) sweat and pomade and separated the tawny brown ( ) an inch ( ) pure-white roots.

*Young Mungo — By Douglas Stuart (p.53)*`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'at; in; of; to; over; to; of; into.' },
      { letter: 'B', text: 'against; over; about; with; on; for; in; to.' },
      { letter: 'C', text: 'by; of; to; at; up; of; from; of.' },
      { letter: 'D', text: 'by; to; of; between; for; in; to; at.' },
      { letter: 'E', text: 'on; by; on; out; through; to; toward; beyond.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q71-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2025-q72-en',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2025 · Q72 (EN)',
    foreignLanguage: 'Inglês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Conditionals & Verb Forms',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Put the verb in the ACCURATE form in each sentence. Then mark the best option respectively.

• They‘d be rather angry if you ( ) them.
• What would you do if someone ( ) you a lot of money?
• I‘d go out if it ( ) raining.
• If I ( ) that you were ill last night, I ( ) to see you.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'have stayed away from; steal; was; knew; had came.',
      },
      {
        letter: 'B',
        text: 'did not visit; gave; weren‘t; had known; would have gone.',
      },
      { letter: 'C', text: 'forget; rob; is; was aware; have phoned.' },
      {
        letter: 'D',
        text: 'ignored; mugs; is; have understood; will pay a visit.',
      },
      {
        letter: 'E',
        text: 'are aware of; assaults; was; knew; would invite myself.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q72-en', correctLetter: null },
    provenance: makeProv(26),
  },

  // ================= LÍNGUA ESTRANGEIRA — FRANÇAIS (Q64–Q72) =================
  {
    id: 'ufrr-2025-q64-fr',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2025 · Q64 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t1'],
    stem: 'Le texte I a comme thème :',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'L‘histoire des parachutistes français.' },
      { letter: 'B', text: 'L‘anniversaire de 80 ans de la Normandie.' },
      {
        letter: 'C',
        text: 'L‘hommage au Breton considéré le premier mort français du Débarquement.',
      },
      { letter: 'D', text: 'L‘anniversaire de 80 ans de l‘opération Overlord.' },
      { letter: 'E', text: 'L‘hommage aux soldats allemands au Débarquement.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q64-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2025-q65-fr',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2025 · Q65 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t1'],
    stem: 'D‘après le texte, par rapport à l‘objectif de l‘unité des parachutistes, l‘affirmation INCORRECTE est:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'L‘opération Overlord était le nom de code du débarquement allié.',
      },
      {
        letter: 'B',
        text: 'L‘opération Overlord avait l‘objectif de transférer des soldats allemands présents en Bretagne par la Normandie.',
      },
      {
        letter: 'C',
        text: 'L‘ unité d‘élite était chargée de bloquer l‘avancée des soldats allemands présents en Bretagne vers la Normandie.',
      },
      {
        letter: 'D',
        text: 'Des commandos parachutistes de la France libre intégraient le Special Air Service (SAS) britannique pour l‘opération Overlord.',
      },
      {
        letter: 'E',
        text: 'Emile Bouétard avait 28 ans au moment de sa mort au cadre de l‘opération Overlord.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q65-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2025-q66-fr',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2025 · Q66 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Classes Grammaticales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t1'],
    stem: `Les mots soulignées dans l‘extrait:

« Après sa __mort__, Emile Bouétard __a__ été enterré dans son village de Pleudihen-sur-Rance. Une stèle a été érigée à sa mémoire. Un monument lui est dédié __sur__ les lieux de son décès à Halliguen. A Plumelec, __une__ place porte son nom. Pour ne jamais l‘oublier, 80 ans après. »

sont classifiées respectivement comme:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'verbe – préposition – nom - article' },
      { letter: 'B', text: 'nom – article – nom - nombre' },
      { letter: 'C', text: 'verbe – verbe – préposition - article' },
      { letter: 'D', text: 'nom – verbe – préposition - article' },
      { letter: 'E', text: 'nom – préposition – nom - nombre' },
    ],
    answerKey: { questionId: 'ufrr-2025-q66-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2025-q67-fr',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2025 · Q67 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Résumé et Compréhension',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t2'],
    stem: '- Cochez l‘alternative qui contient le résumé correcte de la situation décrite dans l‘extrait «Dans la nuit du 5 au 6 juin 1944, (...) prisonniers. »',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Les neufs parachutistes sont largués par le pilote Emile Bouétard à 2km de Plumelec et ils ont monté la base d‘opérations pour la résistance. Malheureusement, les trois opérateurs-radio sont blessés par l‘armée allemande.',
      },
      {
        letter: 'B',
        text: 'L‘armée allemande a accueilli les neuf parachutistes blessés dont Émile Bouétard qui faisaent partie de la base de résistance à 2km de Plumelec.',
      },
      {
        letter: 'C',
        text: 'Emile Bouétard faisait partie des neuf parachutistes largués près de Plumelec, où ils devraient établir une base de résistance contre les Allemands. En raison d\'une erreur de localisation, il a été tué par un membre de l‘armée allemande.',
      },
      {
        letter: 'D',
        text: 'Dans la nuit du 5 au 6 juin 1944, le pilote a detecté un observatoire allemand près de la zone de parachutage. Alors, il a largué les neuf parachutistes à Plumelec pour se battre jusqu‘à la fin de ses munitions.',
      },
      {
        letter: 'E',
        text: 'Émile Bouétard était le pilote qui a largué les parachutistes à 2km de Plumelec pour établir la base de résistance des allemands. En raison d\'une erreur de localisation, il a été tué par un membre de l‘armée allemande.',
      },
    ],
    answerKey: { questionId: 'ufrr-2025-q67-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2025-q68-fr',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2025 · Q68 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Temps Verbaux',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t2'],
    stem: `Choisissez la bonne réponse :
Par rapport au temps verbal des constructions suivantes présentes dans le texte **établir** - **est achevé** – **était** est correcte les classifier respectivement comme:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'infinitif – passé simple - impartait' },
      { letter: 'B', text: 'imparfait – passé composé - infinitif' },
      { letter: 'C', text: 'passé simple – imparfait - infinitif' },
      { letter: 'D', text: 'infinitif – passé composé - imparfait' },
      { letter: 'E', text: 'imparfait – passé simple – imparfait' },
    ],
    answerKey: { questionId: 'ufrr-2025-q68-fr', correctLetter: null },
    editorialNote: 'Grafia original “impartait” na alternativa A preservada.',
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2025-q69-fr',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2025 · Q69 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Classes Grammaticales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t2'],
    stem: `Selon la classification des mots signalés, cochez la bonne réponse:

« __Au cours__ d‘une escale à New York en 1942, __il__ quitte sa fonction pour rejoindre les Forces françaises __libres__ en Angleterre. »`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'préposition – pronom - adjectif.' },
      { letter: 'B', text: 'adverbe – pronom - adjectif' },
      { letter: 'C', text: 'adjectif – nom - pronom.' },
      { letter: 'D', text: 'adverbe – nom - pronom.' },
      { letter: 'E', text: 'adjectif – pronom - adjectif.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q69-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2025-q70-fr',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2025 · Q70 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Futur Simple',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t3'],
    stem: `Cochez l‘alternative dans laquelle les verbes sont correctement conjugués au futur sinple de l‘indicatif :

« Au cours d‘une escale à New York en 1942, il __quitte__ sa fonction pour rejoindre les Forces françaises libres en Angleterre. Un long périple qui __l’avait mené__ à Gibraltar puis à Londres. »`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'aura quitté - menera' },
      { letter: 'B', text: 'quitterait – aura mené' },
      { letter: 'C', text: 'quittera – aura mené' },
      { letter: 'D', text: 'aura quitté – menerait' },
      { letter: 'E', text: 'quittera - menera' },
    ],
    answerKey: { questionId: 'ufrr-2025-q70-fr', correctLetter: null },
    editorialNote: 'Grafia original “futur sinple” mantida no enunciado.',
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2025-q71-fr',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2025 · Q71 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Référence Anaphorique',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t3'],
    stem: 'Dans l‘extrait: « 80 ans plus tard, sa mémoire n‘est pas oubliée. » à quoi fait reférence *sa mémoire* ?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'au Débarquement.' },
      { letter: 'B', text: 'aux parachutistes.' },
      { letter: 'C', text: 'à François Souquet.' },
      { letter: 'D', text: 'à Émile Bouétard.' },
      { letter: 'E', text: 'aux Allemands.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q71-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2025-q72-fr',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2025 · Q72 (FR)',
    foreignLanguage: 'Francês',
    year: 2025,
    edition: 'UFRR 2025',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Vocabulaire et Synonymie',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2025-fr-t3'],
    stem: 'Quelle est la meilleure option pour remplacer les mots soulignés dans le texte, sans perdre leur sens?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'déchargement – voyage.' },
      { letter: 'B', text: 'rembarquement – excursion.' },
      { letter: 'C', text: 'chargement – déplacement.' },
      { letter: 'D', text: 'rembarquement – voyage.' },
      { letter: 'E', text: 'chargement – excursion.' },
    ],
    answerKey: { questionId: 'ufrr-2025-q72-fr', correctLetter: null },
    provenance: makeProv(29),
  },
];

export const UFRR_2025_EXAM: ExamEdition = {
  id: EXAM_ID,
  name: EXAM_NAME,
  shortName: 'UFRR 2025 Integral',
  year: 2025,
  edition: 'UFRR 2025',
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
  essayPrompt: ESSAY_PROMPT_2025,
  importStatus: 'validated',
  answerKeyStatus: 'pending_gabarito',
  sourceDocumentName: DOC_NAME,
  isDemoFixture: false,
  rulesSummary: [
    '72 questões objetivas (A–E) distribuídas em 8 disciplinas — sendo Q64 a Q72 selecionadas conforme idioma escolhido (Espanhol, Inglês ou Francês).',
    'Duração oficial de 5 horas incluindo Redação (Tema 1 ou Tema 2, máx. 25 linhas).',
    'Gabarito oficial pendente de vinculação: respostas e tempos ficam salvos para recálculo automático futuro.',
  ],
  scoringRulesNote:
    'Edição UFRR 2025 importada fielmente do caderno oficial, incluindo tabela estruturada na Q15 e notícia nativa na Q21.',
  questionIds: UFRR_2025_QUESTIONS.map((q) => q.id),
};
