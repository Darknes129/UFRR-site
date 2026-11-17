import type { EssayPrompt, ExamEdition, Question, SharedText } from '../types';

const DOC_NAME = 'CADERNOS DE PROVA Vestibular 2024 - E3-PI.pdf';
const EXAM_ID = 'ufrr-integral-2024';
const EXAM_NAME = 'Vestibular UFRR 2024 — Prova Integral';

const makeProv = (pageNumber: number, notes?: string) => ({
  institution: 'UFRR / CPV',
  documentName: DOC_NAME,
  pageNumber,
  isDemoFixture: false,
  notes,
});

const SVG_Q29_GRAFICO_VT = `<svg viewBox="0 0 340 240" class="w-full max-w-[340px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ufrr24-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L7,4 L0,8 Z" fill="currentColor" stroke="none" />
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="56" y1="200" x2="305" y2="200" marker-end="url(#ufrr24-arrow)" />
  <line x1="72" y1="214" x2="72" y2="26" marker-end="url(#ufrr24-arrow)" />
  <!-- Dashed guides -->
  <line x1="72" y1="58" x2="252" y2="58" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <line x1="162" y1="108" x2="162" y2="200" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <line x1="252" y1="58" x2="252" y2="200" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <!-- Graph line -->
  <polyline points="72,108 162,108 252,58" stroke-width="2.5" />
  <!-- Labels -->
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="13">
    <text x="20" y="34" font-weight="600">v (m/s)</text>
    <text x="292" y="220" font-weight="600">t(s)</text>
    <text x="54" y="63" text-anchor="end">7</text>
    <text x="54" y="113" text-anchor="end">5</text>
    <text x="58" y="196" text-anchor="end">0</text>
    <text x="162" y="218" text-anchor="middle">2</text>
    <text x="252" y="218" text-anchor="middle">4</text>
  </g>
</svg>`;

const SVG_Q30_TRAJETORIA_ABC = `<svg viewBox="0 0 320 200" class="w-full max-w-[320px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Right triangle ABC -->
  <polygon points="70,38 70,158 265,158" />
  <!-- Vertex labels -->
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" font-weight="600">
    <text x="64" y="32" text-anchor="middle">C</text>
    <text x="62" y="174" text-anchor="end">B</text>
    <text x="272" y="164">A</text>
  </g>
  <!-- Dimensions -->
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="13">
    <text x="56" y="102" text-anchor="end">3 m</text>
    <text x="168" y="176" text-anchor="middle">4 m</text>
  </g>
</svg>`;

const SVG_Q35_IMA = `<svg viewBox="0 0 360 210" class="w-full max-w-[340px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">
  <!-- Bar magnet -->
  <rect x="108" y="88" width="72" height="32" fill="none" />
  <rect x="180" y="88" width="72" height="32" fill="currentColor" fill-opacity="0.18" />
  <text x="216" y="109" fill="currentColor" stroke="none" font-family="sans-serif" font-size="15" font-weight="700" text-anchor="middle">N</text>
  <!-- Dashed circular regions 1, 2, 3, 4 -->
  <circle cx="62" cy="104" r="34" stroke-dasharray="3 3" />
  <circle cx="298" cy="104" r="34" stroke-dasharray="3 3" />
  <circle cx="180" cy="44" r="34" stroke-dasharray="3 3" />
  <circle cx="180" cy="164" r="34" stroke-dasharray="3 3" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" font-weight="600" text-anchor="middle">
    <text x="62" y="109">1</text>
    <text x="298" y="109">2</text>
    <text x="180" y="49">3</text>
    <text x="180" y="169">4</text>
  </g>
</svg>`;

const SVG_Q61_SETA_ENZIMA = `<svg viewBox="0 0 260 90" class="w-full max-w-[260px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ufrr24-down-arrow" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
      <path d="M1,1 L4,7 L7,1 Z" fill="currentColor" stroke="none" />
    </marker>
  </defs>
  <line x1="70" y1="8" x2="70" y2="78" marker-end="url(#ufrr24-down-arrow)" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14">
    <text x="92" y="30">Retinol</text>
    <text x="92" y="48">desigrogenase</text>
    <text x="92" y="66">(enzima)</text>
  </g>
</svg>`;

export const UFRR_2024_SHARED_TEXTS: SharedText[] = [
  {
    id: 'ufrr-2024-pt-t1',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO I (Português) — Para a questão 01',
    content: `– Ufa, que treino puxado – comentou Mara.
– Mas foi muito bom.
– E, durante a partida, já deu para perceber quem joga melhor em cada posição – analisou Joca.
– Sim, mas no nosso time a gente decide todo mundo junto – disse Dani.
– Claro.
– Democracia é assim mesmo – comentou Beto.
– Democracia? – questionou Rico
– É.
– Grande coisa, votar e ser votado.
– Não, Rico, democracia é muito mais que votar e ser votado – contrapôs Joca.
– É, -cracia significa poder – explicou Dani.
– Só se for poder do Demo mesmo – comentou Rico.
– Nada disso. Demo quer dizer povo. Democracia é o povo no poder.
– Afinal, todo poder emana do povo, e deve ser exercido para ele e por ele, em nome do bem comum. Pelo menos, foi assim que eu aprendi na escola – filosofou Beto.`,
    sourceCitation: 'PIMENTEL, Aldenor. O jogo da democracia. RJ: Oficina Raquel, 2021.',
  },
  {
    id: 'ufrr-2024-pt-t2',
    examId: EXAM_ID,
    title: 'Triste Bahia (Gregório de Mattos)',
    referenceLabel: 'TEXTO II (Português) — Para a questão 02',
    content: `Triste Bahia! Ó quão dessemelhante
Estás e estou do nosso antigo estado!
Pobre te vejo a ti, tu a mi empenhado,
Rica te vi eu já, tu a mi abundante.

A ti trocou-te a máquina mercante,
Que em tua larga barra tem entrado,
A mim foi-me trocando, e tem trocado,
Tanto negócio e tanto negociante.

Deste em dar tanto açúcar excelente
Pelas drogas inúteis, que abelhuda
Simples aceitas do sagaz Brichote.

Oh se quisera Deus que de repente
Um dia amanheceras tão sisuda
Que fora de algodão o teu capote!`,
    sourceCitation:
      'Extraído de "História concisa da Literatura Brasileira", de Alfredo Bosi, Editora Cultrix, 1994, SP.',
  },
  {
    id: 'ufrr-2024-pt-t3',
    examId: EXAM_ID,
    title: 'É pedra, é plástico, por Plínio Lopes',
    referenceLabel: 'TEXTO III (Português) — Para as questões 04 e 05',
    content: `Localizada a mil km da costa de Vitória, no Espírito Santo, a Ilha da Trindade abrigou a pesquisadora e geóloga Fernanda Avelar Santos, de 30 anos, durante setenta dias em 2019. Ela escolheu esse local para conduzir uma pesquisa, que será usada em sua tese de doutorado, sobre o impacto de processos geológicos no meio ambiente e na vida humana. Diariamente, aproveitando a beleza daquela ilha isolada no meio do Atlântico, Santos interrompia o trabalho acadêmico para passear nas praias desertas e contemplar o mar.

Ela não demorou muito tempo para estranhar a quantidade de lixo que se acumulava nas areias e nas pedras. Trindade é o território oceânico mais remoto do Brasil. A ilha é ocupada por não mais do que quarenta pessoas, na maioria militares e pesquisadores que descartam corretamente o lixo que produzem. A sujeira, portanto, só poderia vir do mar.

Instigada, Santos passou a olhar com mais atenção para o lixo que aparecia na orla. Certo dia, em uma de suas caminhadas, se deparou com um afloramento de aproximadamente 12 m² que cobria a superfície de várias rochas numa área conhecida como Parcel das Tartarugas, próxima aos ninhos de tartarugas-verde e de recifes. Ela sacou seu martelo e bateu numa das pedras até tirar uma amostra daquilo que, segundo ela, parecia um conglomerado – um tipo de rocha sedimentar comum em praias do mundo todo. A diferença é que essa tinha uma coloração verde. “Será que é plástico?”, ela se perguntou.

Como estava sem internet na ilha – cortesia de um corte de gastos do governo federal no programa que leva conectividade a locais remotos –, Santos teve de esperar chegar ao continente para descobrir. Levou a amostra de rocha até a Universidade Federal do Paraná (UFPR), onde cursa o doutorado, e, após submetê-la à análise dos laboratórios de geologia e de química, confirmou: aquelas pedras eram realmente formadas por plástico. (...)`,
    sourceCitation:
      'Adaptado da Revista Piauí. Disponível em https://piaui.folha.uol.com.br/e-pedra-e-plastico/, acessado em 12/09/23',
  },
  {
    id: 'ufrr-2024-pt-t4',
    examId: EXAM_ID,
    title: 'Pronominais',
    referenceLabel: 'TEXT IV (Português) — Para as questões 07 e 08',
    content: `Dê-me um cigarro
Diz a gramática
Do professor e do aluno
E do mulato sabido
Mas o bom negro e o bom branco
Da Nação Brasileira
Dizem todos os dias
Deixa disso camarada
Me dá um cigarro.`,
    sourceCitation:
      'ANDRADE, Oswald. Obras completas, Volumes 6-7. Rio de Janeiro: Civilização Brasileira, 1972.',
  },
  {
    id: 'ufrr-2024-pt-t5',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO V (Português) — Para a questão 09',
    content: `O pae de Felicidade ficou contente. Era o seu sonho casa-la pórque ela ja era uma moça. E tinha recêio de mórrer e ela ficar sosinha neste mundo de meu Deus. Sóube que José dos Anjos era um homem bóm. Honesto, e amigo do trabalho. E para êle o homem não precisa ser rico. Basta ser bom ja era alguma coisa de valor. Marcara o casamento para o mês de Maio. José dos Anjós queria adórnar a capela com cuias e flôres de são josé e rosas. A flôr predileta Felicidade.

Plantóu sua rocinha para ter fartura em casa. Cavou a terra para dar curso ao regato e a agua passou perto do ranchinho. Dava gôsto ver o ranchinho com suas parades de pau a pique barreada. Construiu um altar para são josé. Felicidade preparava o seu enxoval com carinho. Quando chegou o ambicionado dia, José dos anjos rejubilar-se. Todas das amigas compareceram. As flôres que exalava seus perfumes mesclava-se com o ambiente. José dos anjos fez monjolo para ela tórrar farinha.`,
    sourceCitation:
      'JESUS, Carolina Maria de. Onde estaes felicidade? SP: Me Parió Revolução, 2014.',
  },
  {
    id: 'ufrr-2024-bio-t1',
    examId: EXAM_ID,
    title: 'Cigarro eletrônico pode causar câncer bucal',
    referenceLabel: 'TEXTO I (Biologia) — Para a questão 19',
    content: `*Equipe Oncoguia*

Consumido principalmente entre os jovens de 18 a 24 anos, o cigarro eletrônico possui aparência atraente e descolada, com diversas cores e formatos. Mesmo sendo proibida a comercialização e propaganda no país, por meio da Resolução de 2009 da Agência Nacional de Vigilância Sanitária (Anvisa), não é difícil de ser encontrado em lojas e tabacarias. Perigo anunciado, a popularização dos dispositivos esconde os malefícios à saúde. Os produtos utilizados para gerar o vapor dos cigarros, incluem quantidades de nicotina e substâncias citotóxicas, que além de gerar dependência, alteram o DNA das células da boca e de todo trato respiratório, aumentando o risco da ocorrência de tumores, alertam especialistas.

Também conhecido como câncer oral ou carcinoma de células escamosas, o câncer de boca afeta os tecidos da cavidade oral e áreas adjacentes, como os lábios, língua, gengivas, bochechas e céu da boca. Feridas que não cicatrizam, incômodo ao engolir e sangramentos são os sintomas mais comuns da doença. A estimativa é que o Brasil registre 15 mil novos casos em 2023, segundo o Instituto Nacional do Câncer (INCA). Com relação já estabelecida pelos médicos, o tabagismo e consumo excessivo de álcool aumentam em vinte vezes a propensão à doença. (...)`,
    sourceCitation:
      'Fonte: Cigarro eletrônico pode causar câncer bucal - Instituto Oncoguia. https://www.oncoguia.org.br/conteudo/cigarro-eletronico-pode-causar-cancer-bucal/16317/7/. Acesso em 19/09/2023.',
  },
  {
    id: 'ufrr-2024-es-t1',
    examId: EXAM_ID,
    title: 'EL CAMBIO CLIMÁTICO CONSTIYE LA MAYOR AMENAZA MEDIOAMBIENTAL A LA QUE SE ENFRENTE LA HUMANIDAD',
    referenceLabel: 'TEXTO I (Español) — Para las cuestiones 64, 65 y 66',
    content: `El cambio climático es la modificación de la temperatura y del resto de variables del clima, que se está produciendo con una velocidad e intensidad sin precedentes en la historia de la humanidad, como consecuencia de la actividad humana.

Está ocurriendo en todo el mundo y sus consecuencias pueden ser devastadoras, tanto para el medio ambiente como para las personas. La actividad humana, en concreto y principalmente, la quema de combustibles fósiles que generan gases de efecto invernadero, es la causa detrás de esta grave amenaza medioambiental, la mayor a la que se enfrenta la humanidad. Los impactos del cambio climático ya son perceptibles y quedan puestos en evidencia por datos de la Organización Meteorológica Mundial (OMM).

La temperatura media mundial ha aumentado ya 1,11 ± 0,13 °C desde la época preindustrial. Los siete años transcurridos desde 2015 son los más cálidos de los que se tienen datos. La década de 2011 a 2020 fue la más cálida jamás registrada. Las emisiones de gases de efecto invernadero a nivel global siguen aumentando cada año, alcanzando el máximo de 59 GT CO2 eq. en 2019 (IPCC, 2022).

En octubre de 2022, la concentración media mensual de CO2, medida por la Oficina Nacional de Administración Oceánica y Atmosférica (NOAA) de Estados Unidos en su observatorio de Mauna Loa, en Hawai, volvió a alcanzar un máximo histórico acumulado de 420,99 partes por millón (ppm), una cantidad de CO2 que no se registraba desde hace tres millones de años.

El contenido calorífico de los océanos ha alcanzado niveles sin precedentes. En algún momento de 2021, gran parte del océano se vio afectado por al menos una ola de calor marina intensa. El nivel medio del mar a escala mundial alcanzó un nuevo máximo en 2021, tras aumentar una media de 4,5 mm anuales durante el período 2013-2021. Esta cifra es más del doble que la registrada entre 1993 y 2002.

Pero hoy también estamos viendo cómo se manifiestan con mayor intensidad los impactos del cambio climático: los fenómenos meteorológicos extremos, como danas, tormentas y huracanes, olas de calor más intensas, duraderas y frecuentes que nunca antes, mega-incendios y a las sequías.`,
    sourceCitation:
      'FUENTE: Adaptado de https://es.greenpeace.org/es/trabajamos-en/cambio-climatico/ .. Acceso en 18 septiembre de 2023.',
  },
  {
    id: 'ufrr-2024-es-t2',
    examId: EXAM_ID,
    title: 'BRASIL: UNA "MEGAOLA" DE CALOR RECORD ALCANZA TEMPERATURAS DE HASTA 40ºC',
    referenceLabel: 'TEXTO II (Español) — Para las cuestiones 67, 68 y 69',
    content: `Brasil se encuentra en medio de una de las olas de calor más fuertes de su historia, con temperaturas de más de 40ºC aún durante el invierno. El fenómeno que la produce se conoce como bloqueo climático, e impide la entrada de frentes fríos, lo que eleva las temperaturas a cifras inéditas para el mes.

Se espera que las temperaturas sigan aumentando, ya que el fenómeno alcanzará su punto álgido este fin de semana. Todo el país sufrirá el calor, con excepción del estado sureño de Rio Grande do Sul, que experimentará otra semana de lluvias mientras se recupera de las recientes tormentas.

Los efectos de esto, combinados con áreas de baja presión térmica en Argentina, provocarán un período prolongado de tiempo soleado y temperaturas por encima de lo normal. Se espera que las altas temperaturas afecten a varios estados, con un calor “muy intenso” o “extremo”, marcado por mediciones cercanas a los 40°C.

El Instituto Nacional de Meteorología (Inmet) emitió una alerta por baja humedad en la mayor parte del país. Hasta ahora, la temperatura más alta registrada fue de 44,8°C en Nova Maringá, Mato Grosso, en noviembre de 2020. “Récords mensuales, e incluso absolutos, pueden caer durante este evento de calor extremo”, pronosticaron las autoridades.

Los meteorólogos prevén que el pico de esta ola de calor se produzca durante el próximo fin de semana, entre el 23 y el 24 de septiembre, con especial incidencia en las capitales de Curitiba, San Pablo y Río de Janeiro.

Este invierno, Brasil vivió su julio más caluroso desde que comenzaron las mediciones oficiales en 1961, con una temperatura promedio de 23°C. A su vez, en agosto registró otra fuerte ola de calor que afectó a 19 de los 26 estados del país.

El cambio climático y el fenómeno de El Niño probablemente están amplificando las temperaturas más altas y las condiciones meteorológicas más secas.

La ciudad de San Pablo es uno de los lugares donde las temperaturas pueden batir récords. Entre los muchos días de calor intenso a extremo en el estado, la temperatura estará cerca o por encima de los 40ºC. En el interior y en la capital se prevén temperaturas de hasta 37ºC a 39ºC.`,
    sourceCitation:
      'Fuente: https://www.ambito.com/mundo/brasil-una-megaola-calor-record-alcanza-temperaturas-40c-n5823761 . Acceso en 18 de septiembre de 2023.',
  },
  {
    id: 'ufrr-2024-es-t3',
    examId: EXAM_ID,
    title: '¿CUÁNTO CALOR PUEDE SOPORTAR UN SER HUMANO?',
    referenceLabel: 'TEXTO III (Español) — Para las cuestiones 70, 71 y 72',
    content: `Ante los récords de temperatura en todo el mundo es imprescindible anticipar los límites de calor y humedad que puede soportar el cuerpo humano.

El término científico internacional para medir esa capacidad de resistencia es la “temperatura de globo y bulbo húmedo (TGBH)”, que combina el cálculo del calor con el grado de humedad.

Los expertos calculan como término medio que una persona joven, perfectamente sana, morirá al cabo de seis horas de exposición a una temperatura TGBH de 35º C (95 grados Fahrenheit). Esa temperatura equivale a 35° C de calor seco y 100% de humedad, o 46° C con un 50% de humedad. Al llegar a ese punto crítico, el sudor, la principal herramienta del cuerpo para reducir su temperatura central, no logra evaporarse de la piel, lo que eventualmente conduce a un golpe de calor, un colapso de los órganos internos y la muerte.

Joy Monteiro, un investigador en India que el mes pasado publicó un estudio en Nature que analiza las temperaturas de bulbo húmedo en el sur de Asia, dijo que la mayoría de las olas de calor mortales en la región estaban muy por debajo del umbral teórico 35° C. La resistencia humana a esas temperaturas es “tremendamente diferente en función de cada persona”, dijo.

Los océanos del mundo alcanzaron una temperatura máxima histórica la semana pasada, superando el récord anterior de 2016, según el observatorio climático de la Unión Europea.`,
    sourceCitation:
      'Fuente: Adaptado de https://www.elpais.com.co/salud/cuanto-calor-puede-soportar-un-ser-humano-1138.html. Acceso en 18 de septiembre de 2023.',
  },
  {
    id: 'ufrr-2024-en-t1',
    examId: EXAM_ID,
    title: 'Why your perception of climate change threats might depend on where you live - new research',
    referenceLabel: 'TEXTO I (English) — For questions 64 and 65',
    content: `Our planet has just seen its hottest month on record, with many places on fire or flooded. [...] However, not everyone notices or feels this threat to the same extent. [...] In our study, we wanted to find out how British people who live in cities experience the threat of climate change, compared with people who live rurally. Based on a representative sample of 1,071 survey respondents from across the UK, we found that people in rural areas showed higher degrees of place attachment than people living in cities, as we expected. However, we were surprised to see that the perceived threat of climate change in the most rural locations was lower. […] there are three compelling explanations.

1. Awareness
People in rural areas may not be as aware of climate change as people in cities. [...] However, looking more closely, the effect is mostly down to education rather than whether people live in rural areas or not. [...]

2. Experience
People in rural areas may not experience climate change in the same way as people in cities. This is because rural areas have higher levels of green space than urban areas. For example, you will feel the heat less when you are surrounded by trees.

3. Resilience
[...] Rural people may be aware of climate change and they may experience it like everyone else, but they may have better ways of coping with it than city dwellers because of their closer relationship with nature. This may have taught them to be more flexible in how they deal with change. [...]

Climate change is certainly worrying for most of us and sometimes linked with heightened anxiety. [...] What matters is what we do in our everyday lives, how much we recognise that things are changing and whether we are willing to take action.`,
    sourceCitation:
      'Disponível e adaptado de: https://theconversation.com/why-your-perception-of-climate-change-threats-might-depend-on-where-you-live-new-research-212888 Acesso em: 13 set. 2023.',
  },
  {
    id: 'ufrr-2024-en-t2',
    examId: EXAM_ID,
    title: 'Ovid on climate change (Eliza Griswold)',
    referenceLabel: 'TEXTO II (English) — For question 66',
    content: `Bastard, the other boys teased him,
till Phaethon unleashed the steeds
of Armageddon. He couldn’t hold
their reins. Driving the sun too close
to earth, the boy withered rivers,
torched Eucalyptus groves, until the hills
burst into flame, and the people’s blood
boiled through the skin. Ethiopia,
land of burnt faces. In a boy’s rage
for a name, the myth of race begins.`,
    sourceCitation:
      'Disponível em: https://www.poetryfoundation.org/poetrymagazine/poems/55952/ovid-on-climate-change. Acesso em: 18 set. 2023.',
  },
  {
    id: 'ufrr-2024-en-t3',
    examId: EXAM_ID,
    title: 'For a livable climate: Net-zero commitments must be backed by credible action',
    referenceLabel: 'TEXT III (English) — For questions 67 and 68',
    content: `**What is net zero?**
Put simply, net zero means cutting greenhouse gas emissions to as close to zero as possible, with any remaining emissions re-absorbed from the atmosphere, by oceans and forests for instance.

**How can net zero be achieved?**
Transitioning to a net-zero world is one of the greatest challenges humankind has faced. It calls for nothing less than a complete transformation of how we produce, consume, and move about. The energy sector is the source of around three-quarters of greenhouse gas emissions today and holds the key to averting the worst effects of climate change. Replacing polluting coal, gas and oil-fired power with energy from renewable sources, such as wind or solar, would dramatically reduce carbon emissions.

**Is there a global effort to reach net zero?**
Yes, a growing coalition of countries, cities, businesses and other institutions are pledging to get to net-zero emissions. More than 70 countries, including the biggest polluters – China, the United States, and the European Union – have set a net-zero target, covering about 76% of global emissions. More than 3,000 businesses and financial institutions are working with the Science-Based Targets Initiative to reduce their emissions in line with climate science. And more than 1000 cities, over 1000 educational institutions, and over 400 financial institutions have joined the Race to Zero, pledging to take rigorous, immediate action to halve global emissions by 2030.

**How do we ensure commitments are turned into action?**
The growth in net-zero pledges has been accompanied by a proliferation of criteria with varying levels of robustness. To develop stronger and clearer standards for net-zero emissions pledges by non-State entities such as businesses, investors, cities and regions, and speed up their implementation, UN Secretary-General António Guterres in March 2022 established a High-Level Expert Group on the Net-Zero Emissions Commitments of Non-State Entities. The Expert Group presented its recommendations at COP27 on 8 November 2022.

**Are we on track to reach net zero by 2050?**
No, commitments made by governments to date fall far short of what is required. Current national climate plans – for 193 Parties to the Paris Agreement taken together – would lead to a sizable increase of almost 11% in global greenhouse gas emissions by 2030, compared to 2010 levels. Getting to net zero requires all governments – first and foremost the biggest emitters – to significantly strengthen their Nationally Determined Contributions (NDCs) and take bold, immediate steps towards reducing emissions now. The Glasgow Climate Pact called on all countries to revisit and strengthen the 2030 targets in their NDCs by the end of 2022, but only 24 new or updated climate plans were submitted by September 2022.`,
    sourceCitation:
      'Disponível e adaptado de: https://www.un.org/en/climatechange/net-zero-coalition Acesso em: 22 set. 2023.',
  },
  {
    id: 'ufrr-2024-en-t4',
    examId: EXAM_ID,
    title: 'The Climate is Changing!',
    referenceLabel: 'TEXTO IV (English) — For question 69',
    content: `Even with all the measures taken, it will take decades to reverse global warming – so we must be PREPARED to manage extreme weather and natural disasters!

The climate is always changing naturally, but in the last 200 years, human behavior has had an added influence.

• Thinning the ozone layer
• CO2 in the atmosphere => global warming

**What to do?**
Build sturdy cities and houses
Build resilience
Improve water management to deal with droughts
Educate
Make plans: national policies & planning

All nations must work together to help mitigate and adapt to climate change and its impacts for the benefit of people everywhere.`,
    sourceCitation:
      'Disponível e adaptado de: https://eltplanning.com/2023/01/22/useful-resource-comics-uniting-nations/ Acesso em: 22 set. 2023.',
  },
  {
    id: 'ufrr-2024-en-t5',
    examId: EXAM_ID,
    title: 'Opinion Life and style — What’s in your go bag for the apocalypse?',
    referenceLabel: 'TEXTO V (English) — For questions 70 and 71',
    content: `*Emma Beddington*

With more and more people prepping for Armageddon, the answers to this question are revealing – whether it’s Babybels, cash, crossbows or toilet paper
*Sun 24 Sep 2023 14.00 BST*

The author Lauren Groff has become a prepper. “I think everyone should have a go bag right now,” she told National Public Radio (NPR) in the US. “I think every household should have enough food to last through at least two weeks. This is just logical at this point.”

Groff lives in Florida, where dangerously extreme weather has become a fact of life – we’re lucky enough to be spared that in the UK, at least for now. But as a semi-professional catastrophist – one apocalyptic sandwich board short of full doom-monger status – am I missing a trick? Should I have a go bag and what should go in it? Online recommendations include water – one of my least favourite fluids – cereal bars, first aid supplies, spare clothes, medication and paperwork. Practical, but short on bells and whistles (actually, they do recommend taking a whistle).

After asking around for inspiration, I have decided that the first kneejerk answer is very revealing. “Babybels,” said my friend T, instantly, as if he had waited his entire life for me to ask. “Two layers of protection, mouldable wax to make effigies of lost humanity – and you can use the bag to catch fish.” “Dreamies,” said M, still in thrall to her cat and its treat demands come Armageddon. “And Côte d’Or caramelised salted almond chocolate.” F went for cyanide capsules and The Golden Bowl by Henry James (useful for both entertainment and kindling). My husband looked genuinely thrilled with my question – a first for any work-related research I have conducted on him. “A pile of cash (to use for the first few days, before everyone realises it’s worthless) and all the weapons I can find.”

What you pack depends on whether you are prepping for a temporary displacement (toilet paper, paracetamol, passport) or the end of the world (whatever my husband is bringing; he’s looking up crossbows online as I write). But for both scenarios I have decided on my essentials: an insulated flask of dirty martini and several of the big 70g bags of Hula Hoops I usually save for weekends. The apocalypse is no reason to cancel my aperitif. What’s going in yours?`,
    sourceCitation:
      'Disponível e adaptado de:: https://www.theguardian.com/commentisfree/2023/sep/24/whats-in-your-go-bag-for-the-apocalypse Acesso em: 24 de Setembro de 2023.',
  },
  {
    id: 'ufrr-2024-en-t6',
    examId: EXAM_ID,
    title: 'The Earth Song (Michael Jackson)',
    referenceLabel: 'TEXTO VI (English) — For question 72',
    content: `What about sunrise?
What about rain?
What about all the things
That you said we were to gain?
(…)
What have we done to the world?
Look what we've done
What about all the peace
That you pledge your only son?

What about flowering fields?
Is there a time?
What about all the dreams
That you said was yours and mine?
(…)
Hey, what about yesterday?
(What about us?)
What about the seas?
(What about us?)
The heavens are falling down
I can't even breathe
What about apathy?
I need you
What about nature's worth?
It's our planet's womb
What about animals?
We've turned kingdoms to dust
What about elephants?
Have we lost their trust?
What about crying whales?
We're ravaging the seas
What about forest trails?
(Ooh)
(What about us?)
(…)`,
    sourceCitation:
      'Adapted from: www.lyrics.com/lyric/6689956/Michael+Jackson/Earth+Song Last access on September 24,2023',
  },
  {
    id: 'ufrr-2024-fr-t1',
    examId: EXAM_ID,
    title: 'Climat : le G20 échoue à appeler à la sortie des énergies fossiles',
    referenceLabel: 'TEXTE I (Français) — Pour les questions 64 à 72',
    content: `*Réunies en Inde, les principales puissances économiques mondiales ont seulement convenu, samedi, de réduire la production électrique "à partir de charbon", sans mentionner le gaz ou le pétrole.*

Un rendez-vous manqué face à l'urgence climatique? Aucun appel à sortir à terme des énergies fossiles polluantes ne figure dans la déclaration finale du G20, diffusée samedi 9 septembre. Un tel objectif avait pourtant été jugé "indispensable", vendredi, par le premier bilan de l'accord de Paris publié par l'ONU Climat.

Réunis à New Delhi, en Inde, les dirigeants du G20 se contentent d'appeler à "accélérer les efforts vers la réduction de la production d'électricité à partir de charbon", sans suggérer de telles baisses pour le gaz et le pétrole. Ils réaffirment aussi l'engagement à "réduire et rationaliser, à moyen terme, les subventions pour des usages inefficaces des énergies fossiles".

**Un engagement en faveur des renouvelables**
Les principales puissances économiques mondiales reconnaissent toutefois que la limitation du réchauffement à 1,5°C "nécessite une réduction rapide, forte et soutenue des émissions, de 43% d'ici 2030 par rapport à 2019", conformément aux recommandations du Giec, le Groupe intergouvernemental d'experts sur l'évolution du climat de l'ONU.

Pour la première fois, le G20 affirme qu'il "poursuivra et encouragera les efforts visant à tripler les capacités en matière d'énergies renouvelables" d'ici 2030. "Il s'agit d'une avancée significative et surprenante de la part du G20", s'est félicité le groupe de réflexion sur l'énergie Ember, saluant "un grand revirement de la part de l'Arabie saoudite et de la Russie".

Beaucoup de voix s'étaient élevées pour réclamer un engagement plus fort du G20 sur le climat. Le président brésilien, Lula, dont le pays fait partie du G20, avait mis en garde, samedi, contre l'"urgence climatique sans précédent" à laquelle le monde est confronté du fait d'un "manque d'engagement en faveur de l'environnement". "Ce G20 était censé montrer la voie vers un avenir sans énergies fossiles", a réagi l'ONG Global Citizen, samedi, après la déclaration finale, dénonçant "un très mauvais signal pour le monde".`,
    sourceCitation:
      'Fonte: https://www.francetvinfo.fr/monde/environnement/crise-climatique/ - Publié le 09/09/2023 14:59 Mis à jour le 09/09/2023 16:48',
  },
];

const ESSAY_PROMPT_2024: EssayPrompt = {
  id: 'ufrr-2024-redacao',
  title: 'Propostas de Redação — Vestibular UFRR 2024',
  theme: 'Tema 1: Saúde mental e acolhimento | Tema 2: A Inteligência Artificial e o futuro da vida humana',
  instructions:
    'Escolha UM dos dois temas oficiais propostos pela UFRR (Tema 1 ou Tema 2) e redija um texto dissertativo-argumentativo em até 25 linhas (conforme folha de rascunho oficial).',
  supportingTexts: [],
  themes: [
    {
      id: 'tema-1',
      label: 'Tema 1',
      theme: 'Acolhimento e tratamento de transtornos de ordem mental na sociedade contemporânea',
      instructions:
        'A partir da leitura da obra de Carolina Maria de Jesus, percebemos que o personagem José dos Anjos termina a obra isolado, abandonado em sua própria vida, e é visto como “louco”. Em algumas situações vivenciadas, as decepções amorosas, as dificuldades econômicas e os problemas em geral do cotidiano podem afetar a saúde mental e causar transtornos como ansiedade, depressão, entre outros transtornos de ordem mental, principalmente após a pandemia de Covid 19. Nesse contexto, disserte sobre essa temática refletindo sobre medidas que podem ser pensadas para acolhimento e tratamento de pessoas que apresentam esse tipo de problema.',
      supportingTexts: [
        {
          label: 'Excerto da obra de Carolina Maria de Jesus — Onde estaes, Felicidade?',
          content: `“E Jose dós Anjós percorreu. Varias cidades. E as respostas eram como espadas a perfurar-lhe o coração. Ele fói perdendo o interesse pela vida. Não mais procuróu barbeiro. Os cabêlos e as barbas confunde se. Cresçeu até a cintura. Quando êle chega num hospicio e pergunta:

– Felicidade passou por aqui?

Eles dizem... êle é louco! Abatido e sem ilusão, resolveu voltar para gratão o seu desêjo é mórrer no seu ranchinho de sape onde êle e Felicidade fôram felizes.

Isolóu-se por completo. Permaneçe sentado na pórta com os olhos fitós na estrada até a curva onde o automóvel dobróu. Esperando a Felicidade voltar. As vêzes êle impacíenta-se e brada:

_Onde estaes Felicidade!

Os cabêlos e as barbas de Jose dos Anjos, avulumou-se tanto, que parece a juba de um leão.”`,
          source: 'JESUS, Carolina Maria de. Onde estaes, Felicidade?',
        },
      ],
      maxLines: 25,
    },
    {
      id: 'tema-2',
      label: 'Tema 2',
      theme: 'A Inteligência Artificial e o futuro da vida humana',
      instructions:
        'Pensando no desenvolvimento acelerado da Inteligência Artificial, escreva um texto dissertativo-argumentativo sobre os prós e contras da IA para a humanidade.',
      supportingTexts: [
        {
          label: 'Texto de Paulo José Cunha',
          content: `Quando Stanley Kubrick lançou em 1968 o filme 2001 – Uma Odisseia no espaço, as possibilidades da Inteligência Artificial ainda eram extremamente restritas. Mesmo assim, no filme, quando o computador de bordo Hall 9000 se rebela e resolve agir por conta própria assumindo o controle absoluto da nave Discovery One, o jeito que o astronauta Dave encontrou foi usar a força bruta para desligá-lo. Já naquela época, premonitoriamente, Kubrick problematizava a Inteligência Artificial, seus limites, desafios e, principalmente os riscos que ela oferece em relação ao futuro do gênero humano.

Mais de meio século depois, só que agora na vida real, a humanidade está diante de um desafio muito semelhante ao enfrentado pelos tripulantes da Discovery One: como conter o avanço e evitar os riscos trazidos pelo uso indiscriminado das ferramentas da Inteligência Artificial como os sistemas tipo ChatGPT, capazes de produzir textos, conversas e comunicações a um nível quase humano. [...]`,
          source:
            'Texto de Paulo José Cunha, adaptado de https://noticias.unb.br/artigos-main/6568-a-inteligencia-artificial-e-o-futuro-da-vida-humana acesso em 09 de outubro de 2023',
        },
      ],
      maxLines: 25,
    },
  ],
  maxLines: 25,
  isDemoFixture: false,
};

export const UFRR_2024_QUESTIONS: Question[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    id: 'ufrr-2024-q01',
    examId: EXAM_ID,
    originalNumber: 1,
    originalCode: 'UFRR 2024 · Q01',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Morfologia — Formação de Palavras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t1'],
    stem: 'Analisando a palavra Democracia, a partir do processo de formação de palavras, ela é um exemplo de:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Derivação sufixal por utilizar o sufixo “cracia” junto ao radical “demo”.',
      },
      {
        letter: 'B',
        text: 'Composição por aglutinação por formar uma palavra com mais de um radical: demo+cracia.',
      },
      {
        letter: 'C',
        text: 'Derivação prefixal por utilizar o prefixo “demo” junto ao radical “cracia”.',
      },
      {
        letter: 'D',
        text: 'Composição por justaposição por formar uma palavra com mais de um radical: demo+cracia.',
      },
      {
        letter: 'E',
        text: 'Hibridismo por formar uma palavra com mais de um radical: demo+cracia.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q01', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2024-q02',
    examId: EXAM_ID,
    originalNumber: 2,
    originalCode: 'UFRR 2024 · Q02',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Barroco',
      subtopic: 'Gregório de Matos — Triste Bahia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t2'],
    stem: 'A respeito do poema de Gregório de Matos, podemos afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O poema é representante da estética árcade por abordar as mazelas sociais apontadas pelos heróis da inconfidência.',
      },
      {
        letter: 'B',
        text: 'O poema é um soneto do estilo Clássico e retrata a Bahia e suas',
      },
      {
        letter: 'C',
        text: 'sociais desde a fundação do Brasil colônia.',
      },
      {
        letter: 'D',
        text: 'A máquina mercante citada no poema aponta para o sistema mercantilista desde os tempos da *terra brasilis*.',
      },
      {
        letter: 'E',
        text: 'O poema se insere na estética barroca, e revela problemas econômicos da Bahia em relação à cana de açúcar.',
      },
      {
        letter: 'F',
        text: 'A máquina mercante é fruto da política colonialista trazida pelos portugueses, o poema barroco retrata a Bahia do século XVIII.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q02', correctLetter: null },
    editorialNote:
      'Anomalia de diagramação do caderno oficial preservada: a questão 02 foi impressa com 6 alternativas (A–F), dividindo o texto da alternativa B entre as letras B ("...e suas") e C ("sociais...").',
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2024-q03',
    examId: EXAM_ID,
    originalNumber: 3,
    originalCode: 'UFRR 2024 · Q03',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Ortografia — Acentuação Gráfica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Observando as regras da acentuação gráfica, marque a opção que segue a mesma lógica de acentuação da seguinte sequência de palavras: árbitro, lá, pênalti, vôlei, também, à noite.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'automático, é, lâmpada, trégua, café, água.' },
      { letter: 'B', text: 'pórtico, né, epígrafe, régua, reféns, às vezes.' },
      { letter: 'C', text: 'lâmpada, pó, nível, parabéns, à toa.' },
      { letter: 'D', text: 'árvore, pé, fórum, café, refém, às pressas.' },
      { letter: 'E', text: 'catástrofe, fubá, cânfora, você, parabéns, à moda.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q03', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2024-q04',
    examId: EXAM_ID,
    originalNumber: 4,
    originalCode: 'UFRR 2024 · Q04',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Gêneros Textuais e Tipologia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t3'],
    stem: 'O Texto III faz parte da atividade jornalística e é denominando como reportagem. Esse gênero discursivo tem a característica de informar, expor fatos, e convencer o leitor da veracidade da informação. Sobre o texto é CORRETO dizer:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'por ser do gênero reportagem a sequência textual predominante é a expositiva, porque expõe fatos do dia a dia da pesquisadora.',
      },
      {
        letter: 'B',
        text: 'possui preponderância da sequência textual descritiva ao apresentar propriedades e qualidades situacionais, como em “um tipo de rocha sedimentar comum em praias do mundo todo”.',
      },
      {
        letter: 'C',
        text: 'usa ilustrações reais para apresentar as suas ideias e defender um posicionamento ideológico, prevalecendo sequências textuais argumentativas.',
      },
      {
        letter: 'D',
        text: 'mistura sequências expositivas, descritivas e argumentativas por fazer uso do relato da pesquisadora, de exemplos da pesquisa e da exposição dos fatos descobertos.',
      },
      {
        letter: 'E',
        text: 'apesar de ser um texto informativo, ele possui predominância de sequências textuais narrativas, pois é formado pela sucessão de eventos e pela primazia do discurso relatado.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q04', correctLetter: null },
    editorialNote: 'Grafia original “denominando” mantida no enunciado.',
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2024-q05',
    examId: EXAM_ID,
    originalNumber: 5,
    originalCode: 'UFRR 2024 · Q05',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Morfossintaxe e Coesão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t3'],
    stem: 'Analise as afirmativas abaixo referentes ao Texto III e marque a opção CORRETA:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'na frase “A sujeira, portanto, só poderia vir do mar” o termo *só* pertence à classe gramatical adjetivo, posto que se vincula à *sujeira* que é substantivo.',
      },
      {
        letter: 'B',
        text: 'a descrição sobre o *lixo*, nas primeiras frases do 2º e 3º parágrafos, indica periodicidade tanto pelo verbo *acumular* quanto por *aparecer*, posto que os dois verbos estão no pretérito imperfeito do indicativo.',
      },
      {
        letter: 'C',
        text: 'na 1ª frase do 2º parágrafo, o termo *ela* é um caso de coesão por reiteração do referente da frase anterior, no caso *Santos*, por ser um pronome do caso reto.',
      },
      {
        letter: 'D',
        text: 'o sentido de hipótese do verbo *poderia* da frase “A sujeira, portanto, só poderia vir do mar.” é posto porque esse verbo está no futuro do subjuntivo.',
      },
      {
        letter: 'E',
        text: 'o termo *portanto*, da última frase do 2º parágrafo, pode ser movimentado na oração em diversas posições, pois é considerado um termo acessório por ser um advérbio de circunstância.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q05', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2024-q06',
    examId: EXAM_ID,
    originalNumber: 6,
    originalCode: 'UFRR 2024 · Q06',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Teatro Brasileiro',
      subtopic: 'Auto da Compadecida — Ariano Suassuna',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A peça *Auto da Compadecida*, de Ariano Suassuna, foi escrita em 1955 e tornou-se uma das peças mais conhecidas e lidas do Brasil. Sobre ela é INCORRETO afirmar:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'são características da tradição artística nordestina, de influência ibérica e medieval, o nome *Auto* e a presença de alguns personagens no desenrolar da história, como a Compadecida, que opera o milagre do terceiro ato.',
      },
      {
        letter: 'B',
        text: 'é possível encontrar histórias e personagens do cordel, do teatro e da tradição nordestina famosos em outras obras populares, como o cachorro enterrado em latim.',
      },
      {
        letter: 'C',
        text: 'o primeiro ato versa sobre o enterro do cachorro e critica a corrupção eclesiástica, representada por diferentes personagens da hierarquia católica, ao buscar seus próprios interesses por dinheiro.',
      },
      {
        letter: 'D',
        text: 'o *Palhaço* atua como um narrador dos eventos e ao mesmo tempo interlocutor do público, mas, além disso, como um cantador popular nordestino, como demonstra a sua última fala.',
      },
      {
        letter: 'E',
        text: 'o último ato é formado pelo juízo divino e pela intercessão da *Compadecida*, que consegue salvar a todos com três destinos diferentes: o céu, o purgatório e a volta à vida.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q06', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2024-q07',
    examId: EXAM_ID,
    originalNumber: 7,
    originalCode: 'UFRR 2024 · Q07',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Modernismo Brasileiro',
      subtopic: 'Oswald de Andrade — Pronominais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t4'],
    stem: 'A respeito do poema de Oswald de Andrade, enquanto representante de uma estética literária, podemos afirmar CORRETAMENTE que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O poema pertence ao Pré-modernismo pelo fato de ainda se apegar a questões de formalidade da língua portuguesa e por representar uma situação coloquial na vida do brasileiro do início do século XX.',
      },
      {
        letter: 'B',
        text: 'No Pós-Modernismo, a poesia rompe com os padrões estéticos do passado e se alicerça nas transformações pelas quais a sociedade havia passado após a segunda guerra mundial. As artes plásticas, a literatura e a música ganharam tons de irreverência e crítica social.',
      },
      {
        letter: 'C',
        text: 'O Modernismo como movimento estético trouxe a necessidade de adaptar as novas produções artísticas à realidade da época, utilizando uma linguagem mais coloquial para tentar se aproximar da fala cotidiana dos brasileiros.',
      },
      {
        letter: 'D',
        text: 'O Modernismo teve início no século XX e apresentou uma proposta inovadora na linguagem e nas formas de manifestações artísticas; objetivando a continuidade dos padrões estéticos do passado com forte influência europeia.',
      },
      {
        letter: 'E',
        text: 'Ao representar a estética do Pré-modernismo, o poema de Oswald de Andrade estabelece um diálogo com a Semana de Arte Moderna e com as vanguardas europeias.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q07', correctLetter: null },
    editorialNote: 'Cabeçalho original “TEXT IV” (em inglês) mantido no texto-base.',
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2024-q08',
    examId: EXAM_ID,
    originalNumber: 8,
    originalCode: 'UFRR 2024 · Q08',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe — Colocação Pronominal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t4'],
    stem: 'Ainda observando o poema de Oswald de Andrade, escolha a opção CORRETA no que se refere à colocação pronominal:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'No verso “Me dá um cigarro” a colocação pronominal é considerada inadequada, de acordo com a Norma Culta da Língua Portuguesa, e não é aceita em ambientes informais.',
      },
      {
        letter: 'B',
        text: 'Tanto as expressões “Dê-me um cigarro” quanto “Me dá um cigarro” estão corretas de acordo com a Norma Culta da Língua Portuguesa.',
      },
      {
        letter: 'C',
        text: 'O verso “Dê-me um cigarro” utiliza uma conjugação do verbo “dar” na 3.ª pessoa do singular, é usado em situações de formalidade e demonstra o uso da próclise.',
      },
      {
        letter: 'D',
        text: 'O verso “Dê-me um cigarro” utiliza uma conjugação do verbo “dar” na 3.ª pessoa do singular, é usado em situações de formalidade e demonstra o uso da ênclise.',
      },
      {
        letter: 'E',
        text: 'A expressão “Me dá um cigarro” é uma forma imperativa do verbo dar e representa um caso adequado de uso de próclise, de acordo com a Norma Culta da Língua Portuguesa.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q08', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2024-q09',
    examId: EXAM_ID,
    originalNumber: 9,
    originalCode: 'UFRR 2024 · Q09',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Brasileira Contemporânea',
      subtopic: 'Carolina Maria de Jesus',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-pt-t5'],
    stem: 'Sobre a obra *Onde estaes felicidade?*, de Carolina Maria de Jesus, é correto afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A obra aborda o cotidiano de um casal pobre, cuja esposa se encanta pelos presentes de um viajante que se torna seu admirador e abandona seu esposo. Carolina Maria de Jesus é representante da literatura negra e periférica no Brasil.',
      },
      {
        letter: 'B',
        text: 'Em toda a obra perpassa o inconformismo em relação ao lugar social da personagem feminina em relação à pobreza, fato que a faz enlouquecer.',
      },
      {
        letter: 'C',
        text: 'Carolina Maria de Jesus é referência na escrita brasileira sobre a situação cotidiana de precariedade e violência experimentada pelas personagens mulheres, fato que podemos observar na obra *Onde estaes felicidade?*',
      },
      {
        letter: 'D',
        text: 'O casamento de José dos Anjos e Felicidade, apesar da pobreza da realidade vivida, é feliz. Carolina Maria de Jesus apresenta uma escrita fraturada sobre a pobreza e a situação das pessoas negras no Brasil.',
      },
      {
        letter: 'E',
        text: 'Constitui em sua obra a tessitura da palavra a partir das experiências no espaço da favela, isto é, sua narrativa traz o cotidiano periférico não somente como tema, mas como maneira de olhar a si e a cidade.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q09', correctLetter: null },
    provenance: makeProv(6),
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    id: 'ufrr-2024-q10',
    examId: EXAM_ID,
    originalNumber: 10,
    originalCode: 'UFRR 2024 · Q10',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Porcentagem e Conjuntos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em uma pesquisa de opinião, onde foram entrevistadas 200 pessoas, 85% dos entrevistados declararam que já ouviram falar do “efeito estufa”, sendo que 20% deste percentual não conhecem o seu significado. Nestas condições, assinale a alternativa CORRETA.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O percentual de entrevistados que conhecem o significado ou nunca ouviram falar do termo efeito estufa é igual a 100%.',
      },
      {
        letter: 'B',
        text: 'O percentual de entrevistados que conhecem o significado do termo efeito estufa é superior a 70%.',
      },
      {
        letter: 'C',
        text: 'O percentual de entrevistados que conhecem o significado ou nunca ouviram falar do termo efeito estufa é superior a 80%.',
      },
      {
        letter: 'D',
        text: 'O percentual de entrevistados que conhecem o significado ou nunca ouviram falar do termo efeito estufa é superior a 49% e inferior 50%.',
      },
      {
        letter: 'E',
        text: 'O percentual dos entrevistados que não conhecem o significado do termo efeito estufa supera o percentual dos entrevistados que conhecem o termo efeito estufa.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q10', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2024-q11',
    examId: EXAM_ID,
    originalNumber: 11,
    originalCode: 'UFRR 2024 · Q11',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Funções Exponenciais e Logarítmicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A desintegração de um material é a transformação deste material em partes menores no decorrer do tempo. Suponha que uma substância se desintegra em função do tempo, de acordo com a fórmula $Q(t) = Q_0 e^{-rt}$, onde $Q(t)$ é a massa da substância no tempo $t$, dado em anos, $Q_0$ é a massa da substância no tempo inicial, $e$ é o número de Euler e $r$ é a taxa de desintegração. A taxa de desintegração é de 2% ao ano e a massa inicial é de 2000g. (Dados: $1{,}6 < \\ln 5 < 1{,}62$ e $0{,}69 < \\ln 2 < 0{,}7$)

Considere as seguintes proposições:

I. Em mais de 80 e menos do que 81 anos a massa se reduzirá a 400 gramas.
II. Em menos de 81 anos a massa do material se reduzirá a 400 gramas e, consequentemente se reduzirá a 200g em pelos menos 162 anos.
III. A massa do material se reduzirá a 200 g em pelo menos 120 anos.
IV. A massa do material se reduzirá a 400g entre 80 e 81 anos e em 324 anos estará menor do que 3,2g.
V. Se for decorrido um tempo inferior a 34 anos então a massa do material será superior a 1000g.

Com respeito às proposições, marque a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Somente a proposição I está correta.' },
      { letter: 'B', text: 'As proposições II e III estão corretas.' },
      { letter: 'C', text: 'As proposições I, IV e V estão corretas.' },
      { letter: 'D', text: 'A proposição V não está correta.' },
      { letter: 'E', text: 'A proposição II está correta.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q11', correctLetter: null },
    editorialNote: 'Grafia original “pelos menos 162 anos” na proposição II preservada.',
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2024-q12',
    examId: EXAM_ID,
    originalNumber: 12,
    originalCode: 'UFRR 2024 · Q12',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana — Potência de Ponto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Na figura dada temos um triangulo ACE. Se os pontos A, B, D e E estão em uma mesma circunferência e são conhecidas as medidas m(AB)=30u, m(ED)=42u e m(DC)=8u então, a medida do segmento BC vale:',
    graphics: [
      {
        id: 'ufrr-2024-g-q12',
        type: 'image',
        imageUrl: '/exam-assets/2024/q12-triangulo-ace.png',
        altText: 'Triângulo ACE com pontos A, B sobre o lado AC e D, E sobre o lado EC.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '45u' },
      { letter: 'B', text: '10u' },
      { letter: 'C', text: '40u' },
      { letter: 'D', text: '18u' },
      { letter: 'E', text: '20u' },
    ],
    answerKey: { questionId: 'ufrr-2024-q12', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q13',
    examId: EXAM_ID,
    originalNumber: 13,
    originalCode: 'UFRR 2024 · Q13',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Probabilidade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um dado honesto, com 6 faces numeradas de 1 a 6, é lançado duas vezes. Qual é a probabilidade de se obter, nas faces voltadas para cima, números que somados resultam um número ímpar menor do que 7?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '1/6' },
      { letter: 'B', text: '1/9' },
      { letter: 'C', text: '2/3' },
      { letter: 'D', text: '1/12' },
      { letter: 'E', text: '1/4' },
    ],
    answerKey: { questionId: 'ufrr-2024-q13', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q14',
    examId: EXAM_ID,
    originalNumber: 14,
    originalCode: 'UFRR 2024 · Q14',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Trigonometria — Inequações Trigonométricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O conjunto solução da inequação trigonométrica

$$2\\cos^2 x + 7\\cos x + 3 < 0$$

no intervalo $[0, 2\\pi]$ é dado por:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\left]\\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\right[$' },
      { letter: 'B', text: '$\\left]\\dfrac{2\\pi}{5}, \\dfrac{3\\pi}{5}\\right[$' },
      { letter: 'C', text: '$\\left]\\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\right[$' },
      { letter: 'D', text: '$\\left]\\dfrac{\\pi}{6}, \\dfrac{\\pi}{3}\\right[$' },
      { letter: 'E', text: '$\\varnothing$' },
    ],
    answerKey: { questionId: 'ufrr-2024-q14', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q15',
    examId: EXAM_ID,
    originalNumber: 15,
    originalCode: 'UFRR 2024 · Q15',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Trigonometria e Geometria Plana',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Na figura abaixo, ABCD é um retângulo de lados BC=4 e CD=6. Se P e Q são pontos médios de BC e CD respectivamente, então o valor da tangente de α é igual a:',
    graphics: [
      {
        id: 'ufrr-2024-g-q15',
        type: 'image',
        imageUrl: '/exam-assets/2024/q15-retangulo-abcd.jpg',
        altText: 'Retângulo ABCD com pontos médios P em BC e Q em CD, formando o ângulo alfa entre AP e AQ.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$\\dfrac{13}{9}$' },
      { letter: 'B', text: '$\\dfrac{7}{13}$' },
      { letter: 'C', text: '$\\dfrac{13}{7}$' },
      { letter: 'D', text: '$\\dfrac{13}{6}$' },
      { letter: 'E', text: '$\\dfrac{9}{13}$' },
    ],
    answerKey: { questionId: 'ufrr-2024-q15', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q16',
    examId: EXAM_ID,
    originalNumber: 16,
    originalCode: 'UFRR 2024 · Q16',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Equações Algébricas — Relações de Girard',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se $a$, $b$ e $c$ são as raízes da equação $x^3 - x^2 + 4x - 4 = 0$.

Então o valor de $\\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c}$ é?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '-1' },
      { letter: 'C', text: '4' },
      { letter: 'D', text: '-4' },
      { letter: 'E', text: '0' },
    ],
    answerKey: { questionId: 'ufrr-2024-q16', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q17',
    examId: EXAM_ID,
    originalNumber: 17,
    originalCode: 'UFRR 2024 · Q17',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica — Elipse',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A equação da elipse que passa pelo ponto P(0,6) e tem como focos os pontos (-8,0) e (8,0) é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$100x^2 + 36y^2 = 3600$' },
      { letter: 'B', text: '$64x^2 + 100y^2 = 3600$' },
      { letter: 'C', text: '$100x^2 + 64y^2 = 3600$' },
      { letter: 'D', text: '$36x^2 + 100y^2 = 3600$' },
      { letter: 'E', text: '$36x^2 + 64y^2 = 3600$' },
    ],
    answerKey: { questionId: 'ufrr-2024-q17', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2024-q18',
    examId: EXAM_ID,
    originalNumber: 18,
    originalCode: 'UFRR 2024 · Q18',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Polinômios — Teorema do Resto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Dividindo o polinômio $p(x) = x^4 + ax^3 + bx^2 + cx$ por $x + 1$ obtém-se resto igual a 24. Se $p(x)$ é divisível por $x - 1$ e por $x - 2$, então o valor de $(ab)/c$ é?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '10' },
      { letter: 'B', text: '12' },
      { letter: 'C', text: '24' },
      { letter: 'D', text: '48' },
      { letter: 'E', text: '11' },
    ],
    answerKey: { questionId: 'ufrr-2024-q18', correctLetter: null },
    provenance: makeProv(8),
  },

  // ================= BIOLOGIA (Q19–Q27) =================
  {
    id: 'ufrr-2024-q19',
    examId: EXAM_ID,
    originalNumber: 19,
    originalCode: 'UFRR 2024 · Q19',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Biologia Molecular — Ácidos Nucleicos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-bio-t1'],
    stem: 'Segundo o texto I, os produtos utilizados para gerar o vapor dos cigarros alteram o DNA (ácido desoxirribonucleico) das células da boca e de todo trato respiratório. Considerando que o DNA é composto de inúmeros nucleotídeos e que cada nucleotídeo é composto de três partes básicas, sendo elas uma base nitrogenada, uma desoxirribose e um grupamento fosfato, indique a base nitrogenada que não pode ser encontrada no DNA.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Uracila' },
      { letter: 'B', text: 'Citosina' },
      { letter: 'C', text: 'Guanina' },
      { letter: 'D', text: 'Adenina' },
      { letter: 'E', text: 'Timina' },
    ],
    answerKey: { questionId: 'ufrr-2024-q19', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2024-q20',
    examId: EXAM_ID,
    originalNumber: 20,
    originalCode: 'UFRR 2024 · Q20',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Citologia — Divisão Celular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Segundo o site do Instituto Nacional do Câncer (INCA), as células cancerosas apresentam quatro características que as distinguem das células normais: proliferação descontrolada, diferenciação e perda de função, poder de invasão e capacidade de sofrer metástases. Assinale a alternativa que apresenta o principal processo celular relacionado ao comportamento das células cancerosas.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Mitose' },
      { letter: 'B', text: 'Meiose' },
      { letter: 'C', text: 'Somatogênese' },
      { letter: 'D', text: 'Quimiossíntese' },
      { letter: 'E', text: 'Fotossíntese' },
    ],
    answerKey: { questionId: 'ufrr-2024-q20', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2024-q21',
    examId: EXAM_ID,
    originalNumber: 21,
    originalCode: 'UFRR 2024 · Q21',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Histologia Animal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Relacione corretamente a Coluna I com a Coluna II, conforme a classificação dos tipos de tecidos e os seus respectivos exemplos de células. Em seguida, assinale a alternativa com a sequência CORRETA.

**Coluna 1 - Tipos de tecidos**
( 1 ) Tecido Epitelial
( 2 ) Tecido Conjuntivo
( 3 ) Tecido Muscular
( 4 ) Tecido Nervoso

**Coluna 2 - Exemplos dos tipos de células**
( ) Neurônios, astrócitos, oligodendrócitos, células microgliais, células satélites e células de Schwann.
( ) Fibroblastos, fibrócitos, plasmócitos, mastócitos, macrófagos, leucócitos e células adiposas.
( ) Células pavimentosas, cúbicas e cilíndricas.
( ) Fibras musculares.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '4 – 2 – 3 – 1' },
      { letter: 'B', text: '2 – 1 – 3 – 4' },
      { letter: 'C', text: '4 – 2 – 1 – 3' },
      { letter: 'D', text: '1 – 2 – 4 – 3' },
      { letter: 'E', text: '4 – 3 – 2 – 1' },
    ],
    answerKey: { questionId: 'ufrr-2024-q21', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2024-q22',
    examId: EXAM_ID,
    originalNumber: 22,
    originalCode: 'UFRR 2024 · Q22',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Zoologia — Invertebrados (Poríferos)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Segundo o texto retirado do Portal Amazônia “Se você já frequentou um rio da bacia amazônica em período de vazante, que ocorre entre junho e novembro, provavelmente já deve ter entrado em contato com algum organismo que causou uma irritação muito forte na pele. Esse organismo é chamado de cauxi, comumente presente no período de seca. Ao cair na água se dissolve em farpas minúsculas que, em proximidade com a pele, provoca coceiras, irritações e até reações alérgicas”. Esses animais são sésseis e filtradores e essas farpas minúsculas são espículas produzidas por células denominadas de amebócitos.

*Fonte: https://portalamazonia.com/amazonia/portal-amazonia-responde-o-que-e-o-cauxi, acesso 24/09/2023.*

O texto se refere aos:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'artrópodes' },
      { letter: 'B', text: 'poríferos' },
      { letter: 'C', text: 'platelmintos' },
      { letter: 'D', text: 'anelídeos' },
      { letter: 'E', text: 'moluscos' },
    ],
    answerKey: { questionId: 'ufrr-2024-q22', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2024-q23',
    examId: EXAM_ID,
    originalNumber: 23,
    originalCode: 'UFRR 2024 · Q23',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Ciclos de Vida das Embriófitas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `As plantas terrestres formam um grupo monofilético chamado embriófitas, que inclui as briófitas, as plantas vasculares sem sementes, as gimnospermas e as angiospermas. A principal sinapomorfia (caracteres derivados compartilhados) desse grupo, é a presença de um embrião de duração variada, que constitui o esporófito jovem. Além disso, as embriófitas, apresentam ciclo de vida diplobionte, com alternância de gerações entre as fases gametofítica (n) e esporofítica (2n) e com meiose ocorrendo durante a formação de esporos.

Analisando os ciclos de vida dos diferentes grupos de embriófitos considere as informações seguintes.

I. Fase esporofítica é dependente da fase gametofítica, crescendo sobre esta.
II. Fase esporofítica com apenas 1 esporângio.
III. Fase esporofítica depende da gametofítica apenas no início do desenvolvimento, tornando-se independente em seguida.
IV. Esporófito é independente do gametófito, ramificado e com muitos esporângios.
V. Sementes não abrigadas.

Pode-se afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'III e V ocorrem nas gimnospermas e plantas vasculares sem sementes.',
      },
      { letter: 'B', text: 'I ocorre apenas nas briófitas' },
      { letter: 'C', text: 'IV ocorre nas angiospermas e gimnospermas.' },
      { letter: 'D', text: 'I e V ocorrem nas gimnospermas.' },
      {
        letter: 'E',
        text: 'II ocorre nas briófitas e plantas vasculares sem sementes.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q23', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2024-q24',
    examId: EXAM_ID,
    originalNumber: 24,
    originalCode: 'UFRR 2024 · Q24',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Gimnospermas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Ao caminhar pelo Parque Anauá, localizado na Avenida Brigadeiro Eduardo Gomes, Boa Vista, Roraima, os visitantes são alertados por uma placa colocada ao lado de um enorme pinheiro, uma *Araucaria angustifolia* (Bertol.) Kuntze, com o seguinte aviso: Cuidado com os frutos que caem da árvore. Esse alerta está:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'correto, porque o que cai são os estróbilos megaesporangiados (pinhas) que constituem os frutos.',
      },
      {
        letter: 'B',
        text: 'correto, porque o que cai são os estróbilos microesporangiados (pinhas) que constituem os frutos.',
      },
      {
        letter: 'C',
        text: 'incorreto, uma vez que o que cai da árvore são os pinhões, sementes desenvolvidas nos megasporângios, que constituem os frutos.',
      },
      {
        letter: 'D',
        text: 'incorreto, uma vez que o que cai da árvore são os pinhões, sementes desenvolvidas nos megasporângios.',
      },
      {
        letter: 'E',
        text: 'incorreto, uma vez que o que cai da árvore são os pinhões, sementes desenvolvidas nos microsporângios.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q24', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2024-q25',
    examId: EXAM_ID,
    originalNumber: 25,
    originalCode: 'UFRR 2024 · Q25',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Evolução — Seleção Natural',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A teoria da evolução por seleção natural foi elaborada independentemente por dois naturalistas ingleses: Alfred Russell Wallace e Charles Robert Darwin e foi publicada pela primeira vez em 1859. De acordo com essa teoria, os seres vivos vêm se modificando gradualmente ao longo do tempo, por meio de um processo de adaptação evolutiva. Segundo essa teoria:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Os organismos mais bem adaptados, têm maiores chances de sobrevivência, deixando um número maior de descendentes.',
      },
      {
        letter: 'B',
        text: 'Características são selecionadas através do uso e desuso.',
      },
      {
        letter: 'C',
        text: 'A seleção natural elimina os indivíduos que sofreram mutação.',
      },
      {
        letter: 'D',
        text: 'As mutações são dirigidas para genes específicos e acarretam vantagens aos seus portadores.',
      },
      {
        letter: 'E',
        text: 'Características adquiridas são transmitidas aos descendentes.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q25', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2024-q26',
    examId: EXAM_ID,
    originalNumber: 26,
    originalCode: 'UFRR 2024 · Q26',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Genética — Mutações Cromossômicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Recentemente, um cantor popular do Brasil anunciou que seu filho nascera com a Síndrome de Patau. Essa síndrome é uma doença genética rara e grave que segundo o Serviço Nacional de Saúde do Reino Unido (NHS, na sigla em inglês) acomete um bebê a cada 4 mil nascimentos. No Brasil, o diagnóstico da Síndrome de Patau pode ocorrer ainda durante a gestação, por meio de exames pré-natal, alguns disponíveis no Sistema Único de Saúde (SUS). Infelizmente, a maioria dos bebês que nascem com essa condição sobrevivem menos de 3 dias, mas há casos de sobrevivência até aos 10 anos de idade. A Síndrome de Patau é uma trissomia de qual cromossomo?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Do cromossomo 21;' },
      { letter: 'B', text: 'Do cromossomo 18;' },
      { letter: 'C', text: 'Do cromossomo 13;' },
      { letter: 'D', text: 'Do cromossomo X;' },
      { letter: 'E', text: 'Do cromossomo Y;' },
    ],
    answerKey: { questionId: 'ufrr-2024-q26', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2024-q27',
    examId: EXAM_ID,
    originalNumber: 27,
    originalCode: 'UFRR 2024 · Q27',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Parasitologia e Saúde Pública — Malária',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `De acordo com um texto publicado no site da Fiocruz sobre a Malária “Após um período de ações bem-sucedidas de controle da malária no começo dos anos 2010, Roraima passou a registrar, com o passar do tempo, uma escalada nas notificações da doença. Associada, principalmente, ao avanço do garimpo ilegal, a doença passou a atingir majoritariamente os indígenas, sobretudo os yanomamis.”

Sobre a malária, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Os acessos febris característicos da doença ocorrem quando os hepatócitos são rompidos e liberam toxinas na corrente sanguínea.',
      },
      {
        letter: 'B',
        text: 'Pessoas com malária apresentam ulcerações graves na pele, decorrentes da ação da *Leishmania brasiliensis*.',
      },
      {
        letter: 'C',
        text: 'Pessoas com malária apresentam lesões no baço, fígado, rins, decorrentes da ação da *Leishmania chagasi*.',
      },
      {
        letter: 'D',
        text: 'Os acessos febris característicos da doença ocorrem quando as hemácias são rompidas e liberam toxinas na corrente sanguínea.',
      },
      {
        letter: 'E',
        text: 'Pessoas com malária apresentam hipertrofia de órgãos afetados, causado pela *Trypanosoma cruzi*.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q27', correctLetter: null },
    provenance: makeProv(10),
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    id: 'ufrr-2024-q28',
    examId: EXAM_ID,
    originalNumber: 28,
    originalCode: 'UFRR 2024 · Q28',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Dinâmica e Estática — Equilíbrio da Partícula',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Se uma partícula em equilíbrio, em relação a certo referencial, está sob a ação de forças, é CORRETO afirmar que, definitivamente:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'A partícula está em repouso.' },
      { letter: 'B', text: 'A partícula está em movimento.' },
      {
        letter: 'C',
        text: 'As forças que atuam na partícula possuem módulos iguais e sentidos opostos.',
      },
      { letter: 'D', text: 'Existem forças concorrentes atuando na partícula.' },
      {
        letter: 'E',
        text: 'Existe um número par de forças que atuam sobre a partícula.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q28', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2024-q29',
    examId: EXAM_ID,
    originalNumber: 29,
    originalCode: 'UFRR 2024 · Q29',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Cinemática — Gráficos do Movimento',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O gráfico abaixo representa o movimento de um móvel.

Considerando as informações presentes no gráfico, é INCORRETO afirmar que:`,
    graphics: [
      {
        id: 'ufrr-2024-g-q29',
        type: 'svg',
        svgContent: SVG_Q29_GRAFICO_VT,
        altText: 'Gráfico v(m/s) em função de t(s): velocidade constante em 5 m/s de t=0 a t=2s, e segmento linear crescente de (2, 5) até (4, 7).',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'A variação da posição, entre os instantes 0 s e 2 s, foi de 10 m.',
      },
      {
        letter: 'B',
        text: 'Entre os instantes 2 s e 4 s, o móvel estava em movimento uniformemente variado.',
      },
      {
        letter: 'C',
        text: 'No instante t= 3 s, a velocidade do móvel era de 6 m/s.',
      },
      {
        letter: 'D',
        text: 'A distância total percorrida pelo móvel entre os instantes 0 e 4 s foi de 28 m.',
      },
      {
        letter: 'E',
        text: 'No instante t= 4 s a aceleração do móvel era de 1 $\\text{m/s}^2$.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q29', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2024-q30',
    examId: EXAM_ID,
    originalNumber: 30,
    originalCode: 'UFRR 2024 · Q30',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Trabalho e Energia — Força Conservativa',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um corpo de massa 5 kg é transportado do ponto A até o ponto C, de acordo com a figura a seguir.

É CORRETO afirmar que:`,
    graphics: [
      {
        id: 'ufrr-2024-g-q30',
        type: 'svg',
        svgContent: SVG_Q30_TRAJETORIA_ABC,
        altText: 'Triângulo retângulo ABC com ângulo reto em B, segmento horizontal AB de 4 m e segmento vertical BC de 3 m.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'O trabalho da força peso, ao longo da trajetória ABC é maior do que o trabalho realizado pela mesma força, ao longo da trajetória AC.',
      },
      {
        letter: 'B',
        text: 'O trabalho da força peso, ao longo da trajetória ABC é igual ao trabalho realizado pela mesma força, ao longo da trajetória AC.',
      },
      {
        letter: 'C',
        text: 'O trabalho da força peso, ao longo da trajetória ABC é menor do que o trabalho realizado pela mesma força, ao longo da trajetória AC.',
      },
      {
        letter: 'D',
        text: 'O trabalho da força peso, ao longo da trajetória ABC é igual a 350 J (considerando g= 10 $\\text{m/s}^2$).',
      },
      {
        letter: 'E',
        text: 'O trabalho da força peso, ao longo das duas trajetórias é positivo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q30', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2024-q31',
    examId: EXAM_ID,
    originalNumber: 31,
    originalCode: 'UFRR 2024 · Q31',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Termologia — Calorimetria e Mudanças de Estado',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Analise as afirmativas a seguir e marque a alternativa CORRETA.

I. O calor latente é a energia térmica que se transforma em energia potencial de agregação das moléculas de um corpo.
II. Evaporação é o processo de passagem do estado líquido para o estado gasoso e não depende de uma temperatura determinada para acontecer.
III. A solidificação, a liquefação, e a sublimação são transformações endotérmicas.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'As alternativas I e III estão corretas.' },
      { letter: 'B', text: 'As afirmativas I e II estão corretas.' },
      { letter: 'C', text: 'As alternativas II e III estão corretas.' },
      { letter: 'D', text: 'Todas as alternativas estão corretas.' },
      { letter: 'E', text: 'Todas as alternativas estão erradas.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q31', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2024-q32',
    examId: EXAM_ID,
    originalNumber: 32,
    originalCode: 'UFRR 2024 · Q32',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Termodinâmica e Calorimetria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Durante uma aula de Física, um grupo de estudantes realizou um experimento de calorimetria em que colocaram 200 g de água, a 80 °C, em um recipiente de alumínio isolado termicamente e com capacidade térmica de 20 cal/°C. Dentro do recipiente, eles mergulharam um bloco de ferro de 100 g a 20 °C. Após atingir o equilíbrio térmico, eles mediram a temperatura final do sistema. O professor realizou, então, uma dinâmica em que cada aluno devia fazer uma afirmação sobre o experimento realizado e o assunto estudado. Essas afirmações seriam analisadas pelos colegas e julgadas como estando certas ou erradas. A seguir são mostradas as afirmações de quatro alunos da turma.

**Amélia:** A lei zero da termodinâmica estabelece que dois corpos em equilíbrio térmico com um terceiro corpo estão em equilíbrio térmico entre si. Portanto, a temperatura final do sistema é igual para a água, o alumínio e o ferro.

**Bárbara:** A primeira lei da termodinâmica afirma que a variação da energia interna de um sistema pode ser determinada pela diferença entre a quantidade de calor e o trabalho trocados com o meio. Como o recipiente é isolado termicamente e não houve troca de trabalho com o meio, não houve variação da energia interna e a soma das quantidades de calor trocadas entre os corpos é nula.

**Carla:** As variações de temperatura sofridas pelos corpos do experimento são inversamente proporcionais aos seus respectivos calores específicos sensíveis.

**Douglas:** A capacidade térmica é uma grandeza que corresponde à quantidade de calor necessária para fazer variar em 1 ºC, a temperatura de 1 g de cada uma das substâncias envolvidas no experimento.

Das afirmativas acima, estão CORRETAS:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Apenas de Amélia, Bárbara e Carla.' },
      { letter: 'B', text: 'Apenas de Amélia e Bárbara.' },
      { letter: 'C', text: 'Apenas de Amélia, Carla e Douglas.' },
      { letter: 'D', text: 'Apenas de Bárbara e Douglas.' },
      { letter: 'E', text: 'De Amélia, Bárbara, Carla e Douglas.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q32', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2024-q33',
    examId: EXAM_ID,
    originalNumber: 33,
    originalCode: 'UFRR 2024 · Q33',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Óptica Geométrica — Lentes Esféricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A câmera fotográfica é um instrumento óptico que funciona de acordo com os princípios da Óptica Geométrica, que é a parte da Física responsável pelo estudo da luz e dos fenômenos associados a ela. Dentre os elementos que compõem uma câmera fotográfica estão uma lente convergente, um filme fotográfico ou um sensor digital e um diafragma. A distância entre a lente e o filme ou sensor pode ser ajustada para obter uma imagem nítida, dependendo da distância do objeto. A abertura do diafragma, que é um dispositivo que controla a quantidade de luz que entra na câmera, também influencia na qualidade da imagem. Considere as seguintes afirmações sobre os conceitos de Óptica Geométrica envolvidos no funcionamento da câmera fotográfica:

I. A lente convergente é aquela que faz com que os raios de luz, que incidem paralelos ao seu eixo principal, se aproximem após a refração.
II. A imagem real é aquela que pode ser projetada em uma tela ou superfície, pois os raios de luz se cruzam efetivamente no plano da imagem.
III. A distância focal de uma lente é a distância entre o centro óptico da lente e o ponto onde se forma a imagem de um objeto situado no infinito.
IV. A abertura do diafragma afeta a profundidade de campo da imagem, que é a faixa de distância em que os objetos aparecem nítidos na fotografia.

Assinale a alternativa que indica quais afirmações estão CORRETAS.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I e II apenas' },
      { letter: 'B', text: 'I e III apenas' },
      { letter: 'C', text: 'II e IV apenas' },
      { letter: 'D', text: 'I, II e IV apenas' },
      { letter: 'E', text: 'I, II, III e IV' },
    ],
    answerKey: { questionId: 'ufrr-2024-q33', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2024-q34',
    examId: EXAM_ID,
    originalNumber: 34,
    originalCode: 'UFRR 2024 · Q34',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrostática — Campo e Potencial Elétrico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia as assertivas abaixo e assinale a alternativa INCORRETA.

I. Nos condutores metálicos, as cargas elétricas em excesso irão se distribuir sempre na superfície externa, independente das dimensões do condutor.
II. O campo elétrico e o potencial elétrico são grandezas vetoriais.
III. Cargas elétricas positivas, abandonadas em repouso em um campo elétrico e sujeitas unicamente à força elétrica, deslocam-se, espontaneamente, para pontos de maior potencial.
IV. As linhas de força são perpendiculares às superfícies equipotenciais.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'A assertiva I está certa e a III errada.' },
      { letter: 'B', text: 'As assertivas II e III estão erradas.' },
      { letter: 'C', text: 'As assertivas I e IV estão certas.' },
      { letter: 'D', text: 'A assertiva III está errada.' },
      { letter: 'E', text: 'Todas as assertivas estão certas.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q34', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2024-q35',
    examId: EXAM_ID,
    originalNumber: 35,
    originalCode: 'UFRR 2024 · Q35',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletromagnetismo — Campo Magnético de um Ímã',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere o ímã representado na figura a seguir.

Sabendo que o ímã está isolado, estando sujeito apenas a seu próprio campo magnético, podemos afirmar que o campo magnético é uniforme (em toda a região):`,
    graphics: [
      {
        id: 'ufrr-2024-g-q35',
        type: 'svg',
        svgContent: SVG_Q35_IMA,
        altText: 'Ímã em barra com polo Norte (N) à direita, circundado por quatro regiões pontilhadas circulares numeradas: 1 à esquerda, 2 à direita, 3 acima e 4 abaixo.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'Nas regiões 1 e 2.' },
      { letter: 'B', text: 'Somente na região 2.' },
      { letter: 'C', text: 'Nas regiões 3 e 4.' },
      { letter: 'D', text: 'Em todas as regiões.' },
      { letter: 'E', text: 'Em nenhuma das quatro regiões.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q35', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2024-q36',
    examId: EXAM_ID,
    originalNumber: 36,
    originalCode: 'UFRR 2024 · Q36',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrodinâmica — Potência Elétrica e Fusíveis',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Maria está abrindo uma lavanderia e já possui uma máquina de lavar roupas que consome 600 Watts de potência e um ferro elétrico que consome 1200 Watts. O circuito elétrico da lavanderia é alimentado por uma rede doméstica de 110 Volts e está protegido por um fusível de 20 Ampères. Maria planeja adquirir uma segunda máquina de lavar roupa para aumentar sua capacidade de lavagem. Qual deve ser a potência máxima da segunda máquina de lavar roupa, sem sobrecarregar o circuito elétrico e sem exceder a capacidade do fusível, de modo que não seja desarmado?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '400W' },
      { letter: 'B', text: '600W' },
      { letter: 'C', text: '1200W' },
      { letter: 'D', text: '1800W' },
      { letter: 'E', text: '2200W' },
    ],
    answerKey: { questionId: 'ufrr-2024-q36', correctLetter: null },
    provenance: makeProv(12),
  },

  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    id: 'ufrr-2024-q37',
    examId: EXAM_ID,
    originalNumber: 37,
    originalCode: 'UFRR 2024 · Q37',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Climatologia — El Niño',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Os dados do Centro de Previsão Climática da Administração Oceânica e Atmosférica (NOAA), dos Estados Unidos, apontaram que o El Niño apresentou sinais de atividade já em junho de 2023, prometendo se tornar um dos exemplares mais rigorosos já experimentados pela humanidade. De acordo com o comunicado, a chance de um El Niño forte é de 56% e de um moderado é de 84%.

*Fonte: https://revistapesquisa.fapesp.br/sinais-do-proximo-el-nino/. Acesso em 18 de set. de 2023.*

Sobre o El Niño, marque a alternativa que descreve CORRETAMENTE a definição desse fenômeno e sua atuação no território brasileiro, respectivamente:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Aquecimento das águas do Oceano Atlântico, próximo ao Equador e diminuição das temperaturas no Centro-Oeste e surgimento de queimadas no Norte.',
      },
      {
        letter: 'B',
        text: 'Aquecimento das águas do Oceano Pacífico, próximo ao Equador e aumento da pluviosidade no Sul e seca no Norte e Nordeste.',
      },
      {
        letter: 'C',
        text: 'Resfriamento das águas do Oceano Pacífico, próximo ao Equador e aumento da pluviosidade no Norte e Nordeste e diminuição da temperatura do Sul e Sudeste.',
      },
      {
        letter: 'D',
        text: 'Aquecimento das águas do Oceano Pacífico, próximo ao Equador e surgimento de queimadas no Centro-Oeste e aumento da pluviosidade no Nordeste.',
      },
      {
        letter: 'E',
        text: 'Resfriamento das águas do Oceano Atlântico, próximo ao Equador e diminuição da pluviosidade no Sul e Sudeste e aumento das temperaturas no Centro-Oeste.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q37', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2024-q38',
    examId: EXAM_ID,
    originalNumber: 38,
    originalCode: 'UFRR 2024 · Q38',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geomorfologia — Intemperismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O relevo terrestre é originado por agentes internos, com a atuação das placas tectônicas, por um lado; e é modelado por agentes externos, com a atuação dos ventos, das águas e da diferença de temperaturas, por outro. Sabendo que o processo de intemperismo atua em paralelo aos agentes externos, marque a alternativa que apresente CORRETAMENTE um exemplo de intemperismo.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Intemperismo físico, atuação com auxílio da pressão magmática.',
      },
      {
        letter: 'B',
        text: 'Intemperismo químico, atuação com auxílio dos ventos.',
      },
      {
        letter: 'C',
        text: 'Intemperismo geológico, atuação com auxílio da diferença de temperatura.',
      },
      {
        letter: 'D',
        text: 'Intemperismo químico, atuação com auxílio da água.',
      },
      {
        letter: 'E',
        text: 'Intemperismo climático, atuação com auxílio das chuvas ácidas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q38', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2024-q39',
    examId: EXAM_ID,
    originalNumber: 39,
    originalCode: 'UFRR 2024 · Q39',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Cartografia — Fusos Horários',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Os fusos horários existem por causa da esfericidade da Terra que, ao efetuar a volta em si mesma, o chamado movimento de rotação, acaba iluminando de maneira desigual as diferentes porções dos continentes terrestres. Nesse contexto, países de dimensões continentais adotaram uma estratégia para diminuir o número de fusos dentro de seu próprio território. A estes fusos adaptados às necessidades locais damos o nome de fusos ou limites:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Teóricos' },
      { letter: 'B', text: 'Práticos' },
      { letter: 'C', text: 'Pensados' },
      { letter: 'D', text: 'Econômicos' },
      { letter: 'E', text: 'Políticos' },
    ],
    answerKey: { questionId: 'ufrr-2024-q39', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2024-q40',
    examId: EXAM_ID,
    originalNumber: 40,
    originalCode: 'UFRR 2024 · Q40',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Econômica — Comércio Eletrônico e Trabalho',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Desde 2010 verifica-se um aumento significativo do *e-commerce* no Brasil, ultrapassando a faixa dos 160 bilhões em faturamento em 2022. Essa trajetória está associada a um conjunto de fatores, e transformações no mundo dos negócios e do trabalho. Sobre esta questão, analise as assertivas a seguir:

I. O crescimento das vendas no *e-commerce* está associado à expansão dos serviços digitais, potencializada pelo avanço da internet no Brasil.
II. Com o *e-commerce*, inúmeros profissionais tiveram que iniciar ou migrar suas carreiras para a área digital, reformulando as relações de trabalho.
III. Influenciado pela Revolução 4.0, o *e-commerce* potencializou as vendas no varejo *offline*, aumentando em 50% no período entre 2019 a 2022.

É CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A alternativa I está correta e as alternativas II e III estão incorretas.',
      },
      {
        letter: 'B',
        text: 'As alternativas I e II estão corretas e a alternativa III está incorreta.',
      },
      {
        letter: 'C',
        text: 'A alternativa II está correta e as alternativas I e III estão incorretas.',
      },
      {
        letter: 'D',
        text: 'As alternativas I e II estão incorretas e a alternativa III está correta.',
      },
      {
        letter: 'E',
        text: 'A alternativa I está incorreta e as alternativas II e III estão corretas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q40', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2024-q41',
    examId: EXAM_ID,
    originalNumber: 41,
    originalCode: 'UFRR 2024 · Q41',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Formação Territorial do Brasil',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre a formação territorial brasileira e a construção de ideologias geográficas, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A Marcha para o Sul teve como fundamento a conquista do território pátrio, impulsionando a ocupação do território, sob a tônica da modernização do território.',
      },
      {
        letter: 'B',
        text: 'É no governo JK que ocorre a primeira regionalização oficial do Brasil, incorporando a temática da região no discurso oficial do Estado.',
      },
      {
        letter: 'C',
        text: 'No período da redemocratização, a partir de 1988, as noções de modernização e desenvolvimento passaram a estar mais atreladas aos aparatos produtivo e infraestrutural, e menos aos componentes social e político.',
      },
      {
        letter: 'D',
        text: 'Durante o Estado Novo varguista há toda uma adequação do aparato estatal, criação de órgãos e normas e programas orientados ao processo de modernização do território, executado através de políticas territoriais.',
      },
      {
        letter: 'E',
        text: 'Nas últimas décadas do século XIX, com o advento da globalização, ocorrem o desmonte do aparato estatal, privatizações e fragmentações das políticas públicas com forte impacto no conjunto das regiões, especialmente, Norte e Nordeste.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q41', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2024-q42',
    examId: EXAM_ID,
    originalNumber: 42,
    originalCode: 'UFRR 2024 · Q42',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Urbanização Brasileira',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre a urbanização brasileira é CORRETO afirmar:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O eixo de ligação entre o Rio de Janeiro e Belo Horizonte apresenta intensas ligações, principalmente no Vale do Paraíba Fluminense, dadas, entre outas coisas, pela indústria automobilística e siderurgia, guardando profunda relação com impulsos originados nos centros urbanos.',
      },
      {
        letter: 'B',
        text: 'No sudeste, especialmente na costa atlântica, as metrópoles do Rio de Janeiro e de São Paulo constituem as principais cidades de uma megarregião, cujas expressões são as mais significativas do Brasil e hemisfério sul.',
      },
      {
        letter: 'C',
        text: 'Alguns fatores destacam-se na criação de condições para o surgimento e a consolidação de novos centros dinâmicos no país, dentre eles a industrialização, que, se beneficia do avanço na indústria de transformação, mas sofrendo debilidade pela incipiente rede de transporte.',
      },
      {
        letter: 'D',
        text: 'A ocupação das áreas de fronteira em direção às regiões Sul e Centro-Oeste, é guiada pela atividade agropecuária e extrativa, onde algumas cidades polarizam as dinâmicas urbano-produtivas, especialmente da cadeia de grãos e carnes.',
      },
      {
        letter: 'E',
        text: 'Entre 2000 e 2010, as regiões Centro-Oeste e Nordeste, viram aumentar expressivamente o número de cidades médias. Enquanto isso, há uma redução do número de cidades médias de curto alcance no Norte e no Sudeste, em 2010.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q42', correctLetter: null },
    editorialNote: 'Grafia original “entre outas coisas” na alternativa A preservada.',
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2024-q43',
    examId: EXAM_ID,
    originalNumber: 43,
    originalCode: 'UFRR 2024 · Q43',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geopolítica — Cáucaso (Nagorno-Karabakh)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Fomos abandonados pelo mundo, dizem armênios de Nagorno-Karabakh”.

*Fonte: https://www1.folha.uol.com.br/mundo/2023/09/fomos-abandonados-pelo-mundo-dizem-armenios-de-nagorno-karabakh.shtml*

Recentemente, houve um ataque à região de Nagorno-Karabakh, reacendendo, em 2023, tensões geopolíticas na região. Sobre o conflito é CORRETO afirmar:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O conflito hoje reascende disputas entre Rússia e Japão, que tentam se legitimar na região.',
      },
      {
        letter: 'B',
        text: 'Desde 1990, é a primeira vez que o cessar-fogo é interrompido.',
      },
      {
        letter: 'C',
        text: 'O conflito na região ocorre entre Armênia e Afeganistão, originado desde o colapso da União Soviética.',
      },
      {
        letter: 'D',
        text: 'A Armênia recebe apoio dos Estados Unidos, que financia a guerra por meio de armas.',
      },
      {
        letter: 'E',
        text: 'Envolvida na Guerra das Maldivas, a Rússia tem mantido distância do conflito, potencializando as disputas na região.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q43', correctLetter: null },
    editorialNote: 'Grafia original “reascende” e “Guerra das Maldivas” preservadas exatamente conforme impresso no caderno oficial.',
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2024-q44',
    examId: EXAM_ID,
    originalNumber: 44,
    originalCode: 'UFRR 2024 · Q44',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Regional — Economia de Roraima',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre as dinâmicas econômicas no Estado de Roraima é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Em 2022, açúcares e melados foram os produtos mais exportados, alcançando cerca de 29% do total de produtos exportados pelo Estado.',
      },
      {
        letter: 'B',
        text: 'Máquinas e aparelhos elétricos, em 2022, compuseram cerca de 62% das importações no Estado.',
      },
      {
        letter: 'C',
        text: 'As exportações realizadas por empresas locais para outros países cresceram bastante nos últimos anos, sendo que, em 2022, houve um crescimento acima de 40% em relação a 2021.',
      },
      {
        letter: 'D',
        text: 'A China foi o principal parceiro comercial das exportações realizadas pelo Estado, também em 2022.',
      },
      {
        letter: 'E',
        text: 'Parte dos produtos passa por empresas do Mato Grosso ou utiliza a logística infraestrutural do estado vizinho.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q44', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2024-q45',
    examId: EXAM_ID,
    originalNumber: 45,
    originalCode: 'UFRR 2024 · Q45',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Globalização e Neoliberalismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Globalização parece ter adquirido proeminência pela primeira vez quando a American Express fez propaganda do alcance global de seu cartão na metade dos anos 1970. O termo difundiu-se a partir disso como fogo em capim seco na imprensa financeira e de negócios [...]” (Harvey, 2006, p. 27).

Tomando o enunciado como referência avalie as assertivas a seguir:

I. Uma das características do processo de globalização é legitimação da desregulamentação dos mercados financeiros e políticas de austeridade fiscal, que em alguma medida gera otimismo empresarial, especialmente, em torno do tema da liberdade de mercados.
II. No âmbito da economia, o processo de globalização e seus atores defendem a necessidade de maior presença estatal na atração de empresários, regulação trabalhista e incentivo ao desenvolvimento econômico, bem como defendem políticas sociais e de proteção do bem-estar social.
III. Fundo Monetário Internacional e Banco Mundial são instituições internacionais que impulsionam orientações acerca das políticas de austeridade e reformulação do mundo do trabalho, com o discurso da promoção da estabilidade interna e competitividade internacional.

É CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A alternativa I está correta e as alternativas II e III estão incorretas.',
      },
      {
        letter: 'B',
        text: 'As alternativas I e III estão corretas e a alternativa II está incorreta.',
      },
      {
        letter: 'C',
        text: 'A alternativa II está correta e as alternativas I e III estão incorretas.',
      },
      {
        letter: 'D',
        text: 'As alternativas I e II estão incorretas e a alternativa III está correta.',
      },
      {
        letter: 'E',
        text: 'A alternativa I está incorreta e as alternativas II e III estão corretas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q45', correctLetter: null },
    provenance: makeProv(14),
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    id: 'ufrr-2024-q46',
    examId: EXAM_ID,
    originalNumber: 46,
    originalCode: 'UFRR 2024 · Q46',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Idade Média — Cidades Medievais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“No tocante aos aspectos da dominação política na cidade [no período medieval], é preciso considerar primeiramente que o crescimento dos centros urbanos está relacionado com as cortes dos grandes senhores, havendo, portanto, uma ligação entre a vitalidade urbana e o poder senhorial. Neste sentido, a cidade se define como um *dominium* que pertence a um ou vários senhores, representando um enclave territorial no mundo rural.”

*(ABREU, Jean Luiz Neves. Sociedade Urbana e conflitos sociais na Idade Média. Mneme Revista de Humanidades. Caicó. pp. 643-657 v 05. n. 11, jul./set. de 2004. p. 644)*

Com respeito à estrutura social urbana na Idade Média, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A maior parte das cidades medievais era controlada por um poderoso grupo urbano — pequeno grupo de homens recrutados entre os intermediários feudais, mercadores e artesãos prósperos — que detinha o poder político e social.',
      },
      {
        letter: 'B',
        text: 'Toda estrutura social nos centros urbanos medievais estava alicerçada num grupo de mandatários local que eram reconhecidos como neorromanos, líderes poderosos que evocavam todo o simbolismo dos antigos césares do Império Romano.',
      },
      {
        letter: 'C',
        text: 'O surgimento das indústrias na Alta Idade Média proporcionou a mudança da estrutura social nos centros urbanos, contrastando com a estrutura estática vivenciada no campo na relação entre o suserano e o vassalo.',
      },
      {
        letter: 'D',
        text: 'A desigualdade na estrutura social era quase inexistente nos centros urbanos uma vez que a grande maioria dos residentes era formada por artesãos donos de manufaturas, proporcionando, assim, um tipo de democracia insipiente conhecida como *communatio*.',
      },
      {
        letter: 'E',
        text: 'Os membros das ordens das cavalarias eram o elo entre os nobres, a Igreja e os pobres, fazendo com que fossem reconhecidos como governadores provisórios uma vez que o cargo era rotativo entre estes cavaleiros.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q46', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2024-q47',
    examId: EXAM_ID,
    originalNumber: 47,
    originalCode: 'UFRR 2024 · Q47',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Clássica — Grécia Antiga (Micenas e Creta)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Os micênicos chegaram à Grécia em 1600 a.C., e, por volta de 1400 a.C., assimilaram os cretenses. Eles eram um povo indo-europeu que migrou para a região, espalhando-se por todo o território grego e chegando às ilhas do Mar Egeu e à Ásia Menor. Sabemos que os micênicos chamavam a si mesmos de aqueus.”

*(SILVA, Daniel Neves. Grécia Antiga. Disponível em https://www.historiadomundo.com.br/grega. Consultado em 21 de Setembro de 2023)*

Com base na assertiva acima é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A interação cultural micênica com a cretense teve grande influência na formação do povo grego. Os micênicos organizavam-se em cidades-estado cujo poder era exercido por um rei (o mesmo ocorria com os cretenses), e estes mantinham numerosas relações comerciais.',
      },
      {
        letter: 'B',
        text: 'As constantes tensões existentes entre os micênicos e os cretenses resultaram nas denominadas Guerras Púnicas onde a vitória dos micênicos fez com que houvesse a subjugação dos cretenses sendo estes assimilados em sua cultura e economia.',
      },
      {
        letter: 'C',
        text: 'Quando os micênicos entraram em guerra com os povos da região do Peloponeso, contaram com a ajuda dos cretenses. Inicialmente arregimentaram mercenários, mas, por decisão da corte de Creta, a ajuda foi definitivamente oficializada, estreitando a amizade entre os dois povos.',
      },
      {
        letter: 'D',
        text: 'A união entre Micenas e Creta foi fundamental para a superação das dificuldades de produção agrícola que a região vivenciava em função de fortes secas causadas por mudanças climáticas ocorridas na Antiguidade.',
      },
      {
        letter: 'E',
        text: 'Alarico I, rei de Micenas, foi tido como o responsável pela aproximação política e cultural com Creta quando este se casou com a herdeira do trono cretense, a princesa Héstia. Esta união foi fundamental para a inserção de importantes Cidades-estado na região do Sarônico.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q47', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2024-q48',
    examId: EXAM_ID,
    originalNumber: 48,
    originalCode: 'UFRR 2024 · Q48',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Clássica — Escravismo Romano',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Sendo um bem que se possui [na Roma antiga], um escravo é um inferior. E com essa inferioridade de um homem faz de outro homem seu proprietário, um chefe, esse amo, seguro de tal grandeza, a consagrará considerando natural a inferioridade do escravo: um escravo é um sub-homem por destino e não por acidente.

*(VEYNE, Paul (Org.). História da Vida Privada 1 – Do Império Romano ao Ano Mil. São Paulo: Cia das Letras, 1990, p. 62)*

Quanto ao escravismo romano podemos afirmar CORRETAMENTE que`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A realidade mais profunda do Império Romano mostra que não havia escravos na concepção do senso comum, o que na verdade havia era um grupo de voluntários que juravam servir a outros indivíduos em troca de estabilidade familiar.',
      },
      {
        letter: 'B',
        text: 'Era somente considerado escravo os estrangeiros adquiridos como espólio de guerra, sendo que os filhos destes, nascidos no Império eram tidos como livres, pois era considerado imoral escravizar qualquer um nascido dentro das fronteiras do Império.',
      },
      {
        letter: 'C',
        text: 'Os escravos desempenhavam os mais diversos papéis na economia, na sociedade, até na política e cultura fazendo com que alguns fossem infinitamente mais ricos ou poderosos que alguns dos homens livres.',
      },
      {
        letter: 'D',
        text: 'Os escravos eram excluídos de todas as atividades que envolvessem a propriedade uma vez que estavam fadados a viver e morrer na profunda miséria, tendo apenas o seu espírito como propriedade partilhada com uma divindade, preferencialmente Júpiter.',
      },
      {
        letter: 'E',
        text: 'O modelo escravista romano teve início com o cristianismo quando os cristãos passaram a ser escravizados como punição por causa da traição contra a religião do Império e contra o próprio César, tido como único rei e redentor do povo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q48', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2024-q49',
    examId: EXAM_ID,
    originalNumber: 49,
    originalCode: 'UFRR 2024 · Q49',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História Regional — Vale do Rio Branco e Política Indigenista',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Delineada a fronteira com a Guiana Inglesa em 1904, o projeto oficial para a região do rio Branco sofria uma inflexão radical: pode-se dizer que o próprio conceito de fronteira deixava de ser uma questão militar para tornar-se, acima de tudo, uma questão econômica. A ação indigenista deve ser lida neste contexto, como, aliás, já apontou, com propriedade, Souza Lima (1985) em relação ao estabelecimento e atuação do Serviço de Proteção ao Índio em âmbito nacional.

*(SANTILLI, Paulo. Fronteiras da República: História e política entre os Macuxi no vale do rio Branco. São Paulo: NHII-USP/FAPESP: 1994. p. 39)*

Com base na afirmação acima, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O delineamento da fronteira em 1904 gerou tensões entre Inglaterra e Portugal promovendo a construção do Forte São Joaquim e a atração aos povos indígenas do lavrado a povoarem as proximidades do forte.',
      },
      {
        letter: 'B',
        text: 'O Serviço de Proteção ao Índio, cuja criação foi incentivada pelo Marechal Rondon, foi uma organização federal que visava apenas os povos indígenas do vale do Rio Branco e a proteção ambiental do leito do rio.',
      },
      {
        letter: 'C',
        text: 'A criação do Serviço de Proteção ao Índio no vale do Rio Branco foi fundamental para que se criasse a missão de visitação às aldeias, projeto que atuava por meio do clientelismo político cujo objetivo era o que ficou conhecido como “pacificação do índio”.',
      },
      {
        letter: 'D',
        text: 'O serviço de Proteção ao Índio agia por interesses econômicos na vasta região que compreendia o estabelecimento dos Macuxi e Wapixana. Para tanto, criou o alistamento de indígenas para a extração de diamantes que causou a devastação ambiental do atual estado de Roraima.',
      },
      {
        letter: 'E',
        text: 'O Serviço de Proteção aos Índios instala-se em Roraima no ano de 1915, através da criação de um posto na Fazenda São Marcos sendo, portanto, um desdobramento da unidade administrativa representada pela 1ª Inspetoria Regional.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q49', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2024-q50',
    examId: EXAM_ID,
    originalNumber: 50,
    originalCode: 'UFRR 2024 · Q50',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História Regional — Colonização do Vale do Rio Branco',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Desde o século XVII, os portugueses realizavam explorações na região, tendo sido uma das mais importantes a que foi comandada por Pedro Teixeira, em geral, os historiadores do rio Branco localizam o avanço de desbravadores na região nas últimas décadas do século XVII como consequência da expansão portuguesa para o rio Negro.

*(MAGALHÃES, Maria das Graças Santos Dias. Amazônia: o extrativismo vegetal no sul de Roraima: 1943-1988. Boa Vista: UFRR, 2008. p. 86)*

O trecho acima destaca o começo do processo de colonização no vale do rio Branco, dando início a um processo que resulta hoje em uma série de consequências ambientais. Com base no fragmento, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A estratégia portuguesa para dominação do território do rio Branco se deu, principalmente, com as guerras de possessão que desemboca na questão do monte Roraima, questão esta intermediada pela Dinamarca, gerando o Tratado do vale do rio Branco.',
      },
      {
        letter: 'B',
        text: 'Na fase inicial da ocupação portuguesa no rio Branco, a principal exploração empreendida estava ligada ao modelo de exploração por meio do extrativismo das “drogas do sertão” e ao apresamento de indígenas por particulares.',
      },
      {
        letter: 'C',
        text: 'Os portugueses buscaram uma aproximação com a Holanda, França e Dinamarca quanto às questões de fronteira com os ingleses e espanhóis. Tal aproximação se deu na busca da preservação do vale do rio Branco, mas que não conseguiu atingir o efeito desejado.',
      },
      {
        letter: 'D',
        text: 'Um fator importante na consolidação dos portugueses no rio Branco foi a chegada dos beneditinos em 1712 que, por meio das missões, atraiam os indígenas e moradores da região a apoiar a permanência portuguesa na região.',
      },
      {
        letter: 'E',
        text: 'O Forte São Joaquim, construído em 1875, foi vital para o impedimento da entrada de ingleses e espanhóis na região do rio Branco, mais especificamente na confluência dos rios Tacutu e Uraricoera.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q50', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2024-q51',
    examId: EXAM_ID,
    originalNumber: 51,
    originalCode: 'UFRR 2024 · Q51',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Brasil Colônia — Ciclo da Mineração',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Leia o fragmento de texto em que Paul Ferrand ressaltou efeitos decorrentes de eventos naturais ao destacar que:

“(...) uma cheia do rio será suficiente para destruir em algumas horas trabalhos executados com grande custo, em vários meses. Quantas vezes não foram, por terem demorado nos trabalhos preparatórios de desvio do rio e de esgotamento, surpreendidos pelas chuvas antes de poderem retirar uma única bateia de cascalho rico.”

*(FERRAND, Paul. O Ouro em Minas Gerais. Belo Horizonte: Sistema Estadual de Planejamento; Centro de Estudos Históricos e Culturais. Fundação João Pinheiro, 1998, p. 151).*

A partir do fragmento do texto e do seu conhecimento a respeito do período da Mineração em Minas Gerais, no século XVIII, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O fato de a região mineradora ser a mesma em que se desenvolvia a Economia Açucareira nos séculos XVI e XVII fez com que os mineradores já tivessem conhecimento do regime de chuvas nas Minas Gerais.',
      },
      {
        letter: 'B',
        text: 'Os mineradores tiveram que se adaptar às condições físicas locais, como a dificuldade de locomoção para a região mineradora a partir do litoral, mas também às condições climáticas da região.',
      },
      {
        letter: 'C',
        text: 'A mudança da Capital Colonial para o Rio de Janeiro decorreu das chuvas intensas na região mineradora que acabaram por afetar a antiga capital, Salvador, destruindo a estrutura administrativa lá estabelecida.',
      },
      {
        letter: 'D',
        text: 'Em virtude de eventos climáticos extremos, a região mineradora foi beneficiada com a forte presença de diamantes, tornando-se o produto mais extraído, seja em termos de valor, seja em quantidade, da região mineradora.',
      },
      {
        letter: 'E',
        text: 'Eventos climáticos como as chuvas e as cheias dos rios não afetavam a região mineradora, pois a estrutura pombalina construída entre 1750-1777, fez com que a província de Minas Gerais estivesse preparada para eventos climáticos extremos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q51', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2024-q52',
    examId: EXAM_ID,
    originalNumber: 52,
    originalCode: 'UFRR 2024 · Q52',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História Contemporânea — União Soviética',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `**A plantação de algodão que fez Mar de Aral virar deserto**
*Rustam Qobilov - Da BBC Uzbequistão - 26 fevereiro 2015*

O desaparecimento do Mar de Aral, na Ásia Central, é uma das maiores catástrofes provocadas pelo homem do mundo. Para estimular o cultivo de algodão, políticas de irrigação agressivas implementadas pelos soviéticos transformaram 90% do que costumava ser o quarto maior lago do mundo em um deserto.

Foram necessários apenas 40 anos para que o quarto maior lago do mundo, o Mar de Aral, na Ásia Central, secasse.

O que antes eram 60 mil quilômetros quadrados de água, com profundidade de 40 m em alguns locais, evaporou. Agora, resta apenas 10% do lago. [...]

*Disponível em: https://www.bbc.com/portuguese/noticias/2015/02/150226_mar_aral_gch_lab (Acesso em 22/09/2023)*

O texto traz informações a respeito de uma das maiores catástrofes ambientais do mundo contemporâneo, a qual foi estabelecida a partir da busca soviética pelo incremento de sua produção agrícola sem se atentar para as condições de preservação do ambiente. Sobre as ações soviéticas para alavancar o seu desenvolvimento, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O Comunismo de Guerra praticado por Kruschev fez com que o país alcançasse altos índices de investimento externo nas décadas de 1950 e 1960.',
      },
      {
        letter: 'B',
        text: 'A crise do mar de Aral se relaciona com o momento mais dominante da União Soviética, nos anos 1980, quando sua produção agrícola representava mais da metade da produção mundial de alimentos.',
      },
      {
        letter: 'C',
        text: 'A Nova Política Econômica (NEP) foi um plano econômico que objetivava a abertura temporária do país para o capital privado como forma de recuperar a economia soviética',
      },
      {
        letter: 'D',
        text: 'A Perestroika foi o fechamento da economia soviética para investimentos externos, representando o momento de maior estatização da economia.',
      },
      {
        letter: 'E',
        text: 'A Glasnost representou a abertura econômica do país por meio da entrada da União Soviética aos órgãos das Nações Unidas, como a Organização Mundial do Comércio (OMC).',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q52', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2024-q53',
    examId: EXAM_ID,
    originalNumber: 53,
    originalCode: 'UFRR 2024 · Q53',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'República Velha — Revolta da Vacina',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `**Mundo mais quente pode exacerbar doenças como a varíola dos macacos**
*Cada vez mais, cientistas alertam para relação entre emergências de saúde globais e a crise climática*
*Por Redação, do Um Só Planeta - 29/07/2022*

À medida que o número de infectados com a varíola dos macacos cresce, cientistas de todo o mundo alertam para o risco de doenças que passam de animais para humanos serem exacerbadas em um mundo cada vez mais quente. É que os extremos climáticos intensificados pelo aquecimento global tendem a reduzir a distância entre a vida selvagem e as populações humanas, tornando encontros entre animais e pessoas mais comuns e propiciando contaminações. A doença, endêmica em regiões da África, já atingiu neste ano mais de 20 mil pessoas em 77 países.

*(Disponível em: https://umsoplaneta.globo.com/clima/noticia/2022/07/29/mundo-mais-quente-pode-exacerbar-doencas-como-a-variola-dos-macacos.ghtml)*

No Brasil, outro tipo de Varíola, a humana, foi erradica em 1971, a partir de intensas campanhas de vacinação. Entretanto, no começo dessas ações, mais precisamente em 1904, o sanitarista Oswaldo Cruz estabeleceu uma campanha de vacinação obrigatória no Rio de Janeiro que, devido a uma série de fatores, acabou resultando na Revolta da Vacina.

A respeito desse evento histórico e das motivações para a insatisfação popular responsável pela eclosão da Revolta, assinale a alternativa INCORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O país tinha abolido a escravidão e adotado o regime republicano há menos de vinte anos, fazendo com que existissem diversos grupos descontentes com os rumos políticos e sociais do governo.',
      },
      {
        letter: 'B',
        text: 'O projeto de reurbanização do Rio de Janeiro, cujo o objetivo era mudar a imagem da capital do país, fez com que fossem demolidos diversos cortiços, nos quais residiam a população pobre, mas não se ofereceram alternativas de moradia para essas pessoas.',
      },
      {
        letter: 'C',
        text: 'a aprovação da lei sugerida por Oswaldo Cruz, a qual tornava obrigatória a exigência de comprovantes de vacinação contra a varíola para a realização de matrículas nas escolas, obtenção de empregos, autorização para viagens e certidões de casamentos.',
      },
      {
        letter: 'D',
        text: 'O lançamento no Rio de Janeiro de um código de posturas municipais que proibiu, entre outras coisas, a presença de vacas leiteiras nas ruas, a venda de miúdos e carnes nas bancas da cidade, o costume de andar descalço pelo Centro, entre outras medidas de caráter sanitário.',
      },
      {
        letter: 'E',
        text: 'A Revolta ocorreu em virtude da maioria da população da cidade do Rio de Janeiro se declarar cristã e por isso aceitar que as doenças são desígnios divinos que não devem ter nenhuma forma de combate, como a vacina.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q53', correctLetter: null },
    editorialNote: 'Grafia original “foi erradica” mantida no enunciado.',
    provenance: makeProv(18),
  },
  {
    id: 'ufrr-2024-q54',
    examId: EXAM_ID,
    originalNumber: 54,
    originalCode: 'UFRR 2024 · Q54',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Brasil Contemporâneo — Ditadura Militar e Meio Ambiente',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `**Hidrelétricas no Brasil: o clima e a herança da ditadura**
*A emergência da questão ambiental e social na construção de barragens*

(...)
Durante a década de 1970, contudo, essa percepção começou a mudar. Foi nesse período que a opinião pública brasileira começou a se preocupar com o aumento da poluição do ar, a questão da má gestão do lixo, da água contaminada e da agricultura predatória. Isso aconteceu ao mesmo tempo em que a questão dos impactos das atividades humanas sobre o meio ambiente tornou-se um problema discutido internacionalmente. Também nesse período surgiu preocupação maior com o destino da floresta Amazônica. Assim, projetos de barragens nessa região, como a de Tucuruí, no rio Tocantins, no Pará; a de Balbina, no rio Uatumã, no Amazonas; e o projeto do complexo hidrelétrico de Altamira (mais tarde rebatizado Belo Monte), no rio Xingu, foram alvos de muitas críticas.
(...)

*Fonte: CAPELLINI, Nathalia. https://www.historiadaditadura.com.br/post/hidreletricasnobrasiloclimaeaherancadaditadura*

O fragmento de texto aponta para algumas consequências ambientais de medidas realizadas durante a ditadura militar no Brasil. A respeito desse período, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A partir dos investimentos em produção energética, o Brasil se tornou um dos principais exportadores de energia do mundo no final da década de 1960, aproveitando-se desse saldo para zerar sua dívida externa ao final do governo militar.',
      },
      {
        letter: 'B',
        text: 'A preocupação ambiental decorrente da atuação brasileira na Declaração de Estocolmo em 1972, fez com que a ditadura militar reordenasse seus projetos para a Amazônia, tornando-os eminentemente preservacionistas.',
      },
      {
        letter: 'C',
        text: 'O forte crescimento econômico vivido pelo Brasil no final da década de 1960 e início de 1970 foi consequência da adoção pelo Brasil do modelo de Economia Verde, tanto que nesse período o país realizou as primeiras vendas de crédito de carbono.',
      },
      {
        letter: 'D',
        text: 'A bonança econômica da primeira década da ditadura militar fez com que não houvesse qualquer tipo de contestação política, seja ela pacífica ou armada, por parte de setores da população em relação ao governo.',
      },
      {
        letter: 'E',
        text: 'O denominado “milagre econômico”, entre os anos 1967 e 1973, fez com que o Produto Interno Bruto brasileiro crescesse, mas foi incapaz de reduzir de forma drástica a desigualdade de renda dentro da população.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q54', correctLetter: null },
    provenance: makeProv(18),
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    id: 'ufrr-2024-q55',
    examId: EXAM_ID,
    originalNumber: 55,
    originalCode: 'UFRR 2024 · Q55',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Geral — Alotropia do Enxofre',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Isômeros alotrópicos são constituídos pelo mesmo elemento, o que significa que eles têm a capacidade de se combinar com átomos do mesmo elemento, resultando em substâncias simples distintas, devido às variações nas ligações atômicas. Um elemento que exibe alotropia é o enxofre.

Dentre as alternativas abaixo, marque a que apresenta as formas alotrópicas mais comuns do enxofre e como elas distinguem em termos de estrutura.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Rômbico e Monoclínico; Ambas as formas apresentam o mesmo arranjo espacial no retículo cristalino, mas diferem em termos de densidade, ponto de fusão e ebulição.',
      },
      {
        letter: 'B',
        text: 'Amorfo e Policristalino; O enxofre amorfo tem cheiro de alho, é fosforescente, mole e altamente venenoso, enquanto o enxofre policristalino é inodoro, não fosforescente, duro e menos venenoso.',
      },
      {
        letter: 'C',
        text: 'Amorfo e Rômbico; O enxofre Amorfo tem uma estrutura molecular cíclica, enquanto o enxofre Rômbico tem uma estrutura molecular linear.',
      },
      {
        letter: 'D',
        text: 'Rômbico e Monoclínico; O enxofre rômbico é mais estável e se apresenta na forma de cristais amarelos e transparentes, enquanto o enxofre monoclínico é menos estável e tem a forma de agulhas e são opacas.',
      },
      {
        letter: 'E',
        text: 'Monoclínico e Policristalino; O enxofre monoclínico é mais estável e se apresenta na forma de cristais amarelos e transparentes, enquanto o enxofre policristalino é menos estável e tem a forma de agulhas e são opacas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q55', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2024-q56',
    examId: EXAM_ID,
    originalNumber: 56,
    originalCode: 'UFRR 2024 · Q56',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria — Massa Molar e Constante de Avogadro',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A uma temperatura de 20 °C, o cobre exibe uma densidade de $8{,}9\\text{ g}\\cdot\\text{mL}^{-1}$. Dessa forma, quantos átomos deste elemento estão contidos em uma amostra de $0{,}010\\text{ L}$, a 20 °C? (Dados: Constante de Avogadro é $6{,}02 \\times 10^{23}$)',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$8{,}9 \\cdot 10^{22}$' },
      { letter: 'B', text: '$4{,}3 \\cdot 10^{23}$' },
      { letter: 'C', text: '$6{,}0 \\cdot 10^{23}$' },
      { letter: 'D', text: '$8{,}4 \\cdot 10^{23}$' },
      { letter: 'E', text: '6,0' },
    ],
    answerKey: { questionId: 'ufrr-2024-q56', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2024-q57',
    examId: EXAM_ID,
    originalNumber: 57,
    originalCode: 'UFRR 2024 · Q57',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Estrutura Atômica e Propriedades Periódicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em relação aos íons, marque V para as afirmativas verdadeiras e F para as falsas.

( ) O ânion fluoreto ($\\text{F}^{-1}$), o neônio ($\\text{Ne}$) e o cátion sódio ($\\text{Na}^{1+}$) têm em comum o mesmo número de elétrons.

( ) O íon $\\text{Mg}^{2+}$ tem 12 prótons e 10 elétrons presentes.

( ) O raio do átomo é sempre maior que o raio do respectivo cátion.

( ) A energia de ionização dos gases nobres segue a seguinte ordem $\\text{He}>\\text{Ne}>\\text{Ar}>\\text{Kr}>\\text{Xe}$.

( ) O $\\text{Co}^{3+}$ tem configuração eletrônica $[\\text{Ar}]3d^6$.

A sequência CORRETA é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'F, F, F, F, F' },
      { letter: 'B', text: 'V, V, F, V, V' },
      { letter: 'C', text: 'F, F, V, F, F' },
      { letter: 'D', text: 'V, V, V, V, V' },
      { letter: 'E', text: 'V, V, V, F, V' },
    ],
    answerKey: { questionId: 'ufrr-2024-q57', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2024-q58',
    examId: EXAM_ID,
    originalNumber: 58,
    originalCode: 'UFRR 2024 · Q58',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Eletroquímica — Pilhas e Potencial Padrão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Assinale a alternativa que contém, respectivamente, a espécie química que sofre redução, a que sofre oxidação e o potencial desenvolvido ($\\Delta E$) pela célula representada abaixo:

$$\\text{Zn} \\mid \\text{Zn}^{2+}(1\\text{M}) \\parallel \\text{Fe}^{3+}\\,(1\\text{ M}), \\text{Fe}^{2+}\\,(1\\text{ M}) \\mid \\text{Pt}$$

Dados: ($E^0_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = 0{,}77\\text{V}$, $E^0_{\\text{Zn}^{2+}/\\text{Zn}} = -0{,}76\\text{V}$)`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\text{Zn}$; $\\text{Fe}^{3+}$; 0,01V' },
      { letter: 'B', text: '$\\text{Zn}$; $\\text{Fe}^{3+}$; 1,53V' },
      { letter: 'C', text: '$\\text{Fe}^{3+}$; $\\text{Zn}$; 1,53V' },
      { letter: 'D', text: '$\\text{Fe}^{3+}$; $\\text{Zn}$; 0,01V' },
      { letter: 'E', text: '$\\text{Fe}^{3+}$; $\\text{Zn}$; - 1,53V' },
    ],
    answerKey: { questionId: 'ufrr-2024-q58', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2024-q59',
    examId: EXAM_ID,
    originalNumber: 59,
    originalCode: 'UFRR 2024 · Q59',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Termoquímica — Entalpia de Formação',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Qual a variação de entalpia de formação ($\\Delta H$) a 298K da reação não balanceada abaixo:

$$\\text{CH}_{4(g)} + \\text{CuO}_{(s)} \\rightarrow \\text{CO}_{2(g)} + \\text{H}_2\\text{O}_{(l)} + \\text{Cu}_{(s)}$$

Dados:
$\\Delta H^\\circ_f\\,[\\text{CO}_{2(g)}] = -\\,94\\text{ kcal/mol}$
$\\Delta H^\\circ_f\\,[\\text{H}_2\\text{O}_{(l)}] = -\\,68\\text{kcal/mol}$
$\\Delta H^\\circ_f\\,[\\text{Cu}_{(s)}] = 0\\text{ kcal/mol}$
$\\Delta H^\\circ_f\\,[\\text{CH}_{4(g)}] = -\\,18\\text{ kcal/mol}$
$\\Delta H^\\circ_f\\,[\\text{CuO}_{(g)}] = -\\,37\\text{ kcal/mol}$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\Delta H = -217\\text{ kcal}$' },
      { letter: 'B', text: '$\\Delta H = -\\,175\\text{ kcal}$' },
      { letter: 'C', text: '$\\Delta H = -\\,396\\text{ kcal}$' },
      { letter: 'D', text: '$\\Delta H = -\\,64\\text{ kcal}$' },
      { letter: 'E', text: '$\\Delta H = -\\,107\\text{ kcal}$' },
    ],
    answerKey: { questionId: 'ufrr-2024-q59', correctLetter: null },
    editorialNote:
      'Observação editorial: a equação química apresenta CuO(s), enquanto a tabela de dados imprime CuO(g); notação original preservada.',
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2024-q60',
    examId: EXAM_ID,
    originalNumber: 60,
    originalCode: 'UFRR 2024 · Q60',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Equilíbrio Iônico — Produto de Solubilidade (Kps)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Qual a solubilidade em mol/L de $\\text{Fe(OH)}_3$ em solução de pH =8?

Dados: $\\text{Kps Fe(OH)}_3 = 1{,}0 \\times 10^{-36}$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$1{,}0 \\times 10^{-36}$' },
      { letter: 'B', text: '$1{,}0 \\times 10^{-18}$' },
      { letter: 'C', text: '$1{,}0 \\times 10^{-28}$' },
      { letter: 'D', text: '$1{,}0 \\times 10^{-20}$' },
      { letter: 'E', text: '$1{,}0 \\times 10^{-8}$' },
    ],
    answerKey: { questionId: 'ufrr-2024-q60', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2024-q61',
    examId: EXAM_ID,
    originalNumber: 61,
    originalCode: 'UFRR 2024 · Q61',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Funções Orgânicas, Isomeria e Reações',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `No dia 14 de outubro de 2023 foi possível observar de algumas áreas do território brasileiro um eclipse solar. Um eclipse solar é um fenômeno que ocorre quando a Lua se interpõe entre a terra e o sol, ocultando total ou parcialmente a sua luz numa estreita faixa na superfície terrestre. Entretanto, essa é uma atividade que demanda uma série de cuidados de maneira a não oferecer nenhum tipo de risco permanente à visão. A capacidade da visão está intimamente relacionada a química. A vitamina A ou retinol, composto utilizado na produção de retinal, componente da molécula de rodopsina, encontrada na retina dos olhos e responsável pela absorção da luz, de acordo com a transformação representada de maneira simplificada no esquema a seguir.

Sobre a reação envolvida no metabolismo do retinol foram feitas as seguintes afirmações:

I. Retinol e Retinal apresentam isomeria *cis-trans*.
II. As fórmulas moleculares do retinol e retinal são $\\text{C}_{20}\\text{H}_{30}\\text{O}$ e $\\text{C}_{20}\\text{H}_{28}\\text{O}$, respectivamente.
III. O retinol sofre oxidação total ao ser transformado em retinal.
IV. Retinal é um tautômero do retinol.
V. O retinol é um álcool convertido a aldeído, pela saída de átomos de hidrogênio da molécula, na obtenção do retinal.

Estão CORRETAS apenas as afirmações:`,
    graphics: [
      {
        id: 'ufrr-2024-g-q61-retinol',
        type: 'image',
        imageUrl: '/exam-assets/2024/q61-retinol.png',
        caption: 'Retinol (Vitamina A)',
        altText: 'Estrutura química em bastão do Retinol (Vitamina A).',
      },
      {
        id: 'ufrr-2024-g-q61-seta',
        type: 'svg',
        svgContent: SVG_Q61_SETA_ENZIMA,
        altText: 'Seta de reação vertical indicando a enzima Retinol desigrogenase (enzima).',
      },
      {
        id: 'ufrr-2024-g-q61-retinal',
        type: 'image',
        imageUrl: '/exam-assets/2024/q61-retinal.png',
        caption: 'Retinal',
        altText: 'Estrutura química em bastão do Retinal.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'I, II e IV' },
      { letter: 'B', text: 'I, II e III' },
      { letter: 'C', text: 'III, IV e V' },
      { letter: 'D', text: 'II, IV e V' },
      { letter: 'E', text: 'I, II e V' },
    ],
    answerKey: { questionId: 'ufrr-2024-q61', correctLetter: null },
    editorialNote: 'Grafia original “Retinol desigrogenase (enzima)” mantida no esquema.',
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2024-q62',
    examId: EXAM_ID,
    originalNumber: 62,
    originalCode: 'UFRR 2024 · Q62',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Nomenclatura IUPAC',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A Nomenclatura IUPAC refere-se ao estabelecimento de regras para a escrita dos nomes dos compostos que são oficialmente aceitos em todo o mundo. Essas regras são estabelecidas pela IUPAC (União internacional da Química Pura e Aplicada, sigla que vem do inglês International Union of Pure na Applied Chemistry). Desde 1892, esse órgão tem realizado reuniões internacionais envolvendo químicos bem-conceituados para aperfeiçoar essa nomenclatura.

Com relação ao composto abaixo, utilizando das regras da IUPAC, marque a alternativa que apresenta CORRETAMENTE o nome do composto.`,
    graphics: [
      {
        id: 'ufrr-2024-g-q62',
        type: 'image',
        imageUrl: '/exam-assets/2024/q62-composto.png',
        altText: 'Estrutura química hexagonal com duas duplas ligações e substituintes CH3, OH e CH3.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '2,6-dimetil-fenol' },
      { letter: 'B', text: '1,3-dimetil-ciclo-hexa-3,5-dien-2-ol' },
      { letter: 'C', text: '2,6-dimetil-1-hidroxibezeno' },
      { letter: 'D', text: '2,6-dimetil-ciclo-hexa-2,4-dien-1-ol' },
      { letter: 'E', text: '1-hidroxi-2,6-dimetil-ciclo-hexa-2,4-eno' },
    ],
    answerKey: { questionId: 'ufrr-2024-q62', correctLetter: null },
    editorialNote:
      'Grafia original “Union of Pure na Applied Chemistry” e “hidroxibezeno” (alternativa C) preservadas conforme o caderno oficial.',
    provenance: makeProv(21),
  },
  {
    id: 'ufrr-2024-q63',
    examId: EXAM_ID,
    originalNumber: 63,
    originalCode: 'UFRR 2024 · Q63',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Funções Orgânicas e Isomeria Óptica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A Rotenona é uma substância orgânica de origem natural com ação inseticida e piscicida, encontrada nos extratos de raízes e caules de plantas em muitos países da América do Sul, Sul da Ásia e na Austrália, como por exemplo, nas espécies dos gêneros *Derris*, *Lonchocarpus* e *Tephrosia*.

Leia as seguintes afirmativas sobre a Rotenona

I. A molécula apresenta centros estereogênicos.
II. Possui as funções cetona e éter.
III. Possui 4 misturas racêmicas opticamente inativas, por compensação interna.
IV. O número total de estereoisômeros opticamente ativos e racêmicos é 12.
V. O termo diastereoisômeros serve para indicar os isômeros ópticos da molécula que não são enantiomorfos entre si.

Estão CORRETAS apenas as afirmativas:`,
    graphics: [
      {
        id: 'ufrr-2024-g-q63',
        type: 'image',
        imageUrl: '/exam-assets/2024/q63-rotenona.png',
        altText: 'Estrutura química da molécula de Rotenona.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'I, II, IV, V' },
      { letter: 'B', text: 'I, II, III, IV' },
      { letter: 'C', text: 'II, III, IV, V' },
      { letter: 'D', text: 'I, III, IV, V' },
      { letter: 'E', text: 'II, III, IV' },
    ],
    answerKey: { questionId: 'ufrr-2024-q63', correctLetter: null },
    provenance: makeProv(21),
  },

  // ================= ESPAÑOL (Q64–Q72) =================
  {
    id: 'ufrr-2024-q64-es',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2024 · Q64 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología Verbal — Verbos Regulares e Irregulares',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t1'],
    stem: 'Los verbos “es”, “generan” y “quedan” presentes en el texto I, pueden ser clasificados, respectivamente, como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'verbo irregular, verbo regular, verbo irregular.',
      },
      { letter: 'B', text: 'verbo irregular, verbo regular, verbo regular.' },
      { letter: 'C', text: 'verbo regular, verbo regular, verbo regular.' },
      {
        letter: 'D',
        text: 'verbo regular, verbo irregular, verbo irregular.',
      },
      {
        letter: 'E',
        text: 'verbo irregular, verbo irregular, verbo irregular.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q64-es', correctLetter: null },
    editorialNote: 'Grafia original “CONSTIYE” mantida no título do Texto I.',
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2024-q65-es',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2024 · Q65 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Fonética y Conjunciones — Eufonía',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t1'],
    stem: 'En el fragmento entresacado “con una velocidad __e__ intensidad”, la palabra subrayada es así usada para evitar la disonancia que resulta de una inarmónica combinación de elementos acústicos, que es la:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'eufonía.' },
      { letter: 'B', text: 'contracción.' },
      { letter: 'C', text: 'adjetivación.' },
      { letter: 'D', text: 'cacofonía.' },
      { letter: 'E', text: 'formación de palabras heterotónicas.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q65-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2024-q66-es',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2024 · Q66 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología y Clases de Palabras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t1'],
    stem: 'En el fragmento “[…] Pero hoy también estamos viendo cómo se **manifiestan** con mayor intensidad **los** impactos **del** cambio **climático**: los fenómenos meteorológicos extremos […]”, las palabras en negritas pueden ser clasificadas, respectivamente, como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'verbo en presente del modo indicativo; artículo indefinido; contracción; sustantivo.',
      },
      {
        letter: 'B',
        text: 'verbo en presente del modo indicativo; artículo definido; contracción; adjetivo.',
      },
      {
        letter: 'C',
        text: 'verbo en presente del modo subjuntivo; artículo neutro; artículo definido; adjetivo.',
      },
      {
        letter: 'D',
        text: 'verbo en infinitivo; artículo indefinido; contracción definida; adverbio.',
      },
      {
        letter: 'E',
        text: 'verbo en gerundio; artículo neutro; contracción prepositiva, palabra sustantivada.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q66-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2024-q67-es',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2024 · Q67 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Tiempos Verbales — Futuro Perfecto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t2'],
    stem: 'En el fragmento entresacado “[…] La ciudad de San Pablo __es__ uno de los lugares donde las temperaturas pueden batir récords […]”, si cambiásemos el verbo subrayado para el futuro perfecto del modo indicativo, tendríamos:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'será' },
      { letter: 'B', text: 'sería' },
      { letter: 'C', text: 'habría sido' },
      { letter: 'D', text: 'Sea' },
      { letter: 'E', text: 'habrá sido' },
    ],
    answerKey: { questionId: 'ufrr-2024-q67-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2024-q68-es',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2024 · Q68 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Semántica y Conectores',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t2'],
    stem: 'En la frase “[…] que experimentará otra semana de lluvias mientras se recupera de las recientes tormentas”, la palabra “mientras” expresa idea de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'concesión.' },
      { letter: 'B', text: 'antelación.' },
      { letter: 'C', text: 'simultaneidad.' },
      { letter: 'D', text: 'finalidad.' },
      { letter: 'E', text: 'oposición.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q68-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2024-q69-es',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2024 · Q69 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología y Tiempos Verbales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t2'],
    stem: 'En el fragmento “[…] Brasil **vivió** su julio más caluroso **desde** que comenzaron las mediciones **oficiales** en 1961, con **una** temperatura promedio de 23°C […]”, las palabras en negritas pueden ser clasificadas, respectivamente, como:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'verbo en pretérito perfecto compuesto de modo indicativo; conjunción; sustantivo; artículo indefinido.',
      },
      {
        letter: 'B',
        text: 'verbo en pretérito perfecto simple de modo indicativo; contracción; adjetivo; artículo definido.',
      },
      {
        letter: 'C',
        text: 'verbo en pretérito imperfecto de modo indicativo; preposición; adjetivo; artículo neutro.',
      },
      {
        letter: 'D',
        text: 'verbo en pretérito imperfecto de modo indicativo; preposición; adjetivo; artículo indefinido.',
      },
      {
        letter: 'E',
        text: 'verbo en pretérito perfecto simple de modo indicativo; preposición; adjetivo, artículo indefinido.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q69-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2024-q70-es',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2024 · Q70 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Comprensión Lectora',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t3'],
    stem: 'A partir de las informaciones presentadas en el texto III, es CORRECTO decir que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'La resistencia humana a las altas temperaturas puede ser diferente en función de cada persona.',
      },
      {
        letter: 'B',
        text: 'La Unión Europea esta sorpresa por la evaporación de las aguas del océano.',
      },
      {
        letter: 'C',
        text: 'Monteiro es un investigador en India que publicó un trabajo acerca de las temperaturas de la Unión Europea.',
      },
      {
        letter: 'D',
        text: 'Una persona joven y sana morirá al cabo de 6 horas de exposición a una temperatura TGBH de 35º C.',
      },
      {
        letter: 'E',
        text: 'El récord de máxima de temperaturas es del año de 2016.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q70-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2024-q71-es',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2024 · Q71 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología — Artículo Neutro, Adverbio y Preposición',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t3'],
    stem: 'En el fragmento “[…] __lo__ que __eventualmente__ conduce __a__ un golpe de calor”, se puede decir que las 3 palabras subrayadas son, respectivamente:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'articulo, adverbio, adverbio.' },
      { letter: 'B', text: 'articulo neutro, conjunción, adverbio.' },
      { letter: 'C', text: 'articulo, locución adverbial, conjunción.' },
      { letter: 'D', text: 'articulo neutro, adverbio, preposición.' },
      { letter: 'E', text: 'conjunción, adverbio, preposición.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q71-es', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2024-q72-es',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2024 · Q72 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Numerales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-es-t3'],
    stem: 'En el texto III son mencionados los numerales 35, 46 y 2016. Marca la alternativa que presenta CORRECTAMENTE estos numerales por extenso:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Treinticinco, cuarentiseis, dos mil dieciséis.' },
      {
        letter: 'B',
        text: 'Treinta y cinco, cuarenta y seis, dos mil y dieciséis.',
      },
      { letter: 'C', text: 'Trinta y cinco, cuarenta y seis, dos mil dieciseis.' },
      {
        letter: 'D',
        text: 'Treinta y cinco, cuarenta y seis, dos mil dieciséis.',
      },
      {
        letter: 'E',
        text: 'Trinta y cinco, cuarenta y seis, dos mil y diez y seis.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q72-es', correctLetter: null },
    provenance: makeProv(24),
  },

  // ================= ENGLISH (Q64–Q72) =================
  {
    id: 'ufrr-2024-q64-en',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2024 · Q64 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reading Comprehension',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t1'],
    stem: 'Investigações que usam a entrevista como instrumento de pesquisa têm o potencial de revelar percepções sociais importantes. O texto apresenta resultados de um estudo que tinha o objetivo de:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'conscientizar sobre a importância da tomada de atitude em relação às questões climáticas.',
      },
      {
        letter: 'B',
        text: 'mostrar que a resiliência e a flexibilidade são atributos essenciais para lidar com mudanças.',
      },
      {
        letter: 'C',
        text: 'comparar como residentes urbanos e rurais vivenciam a ameaça da mudança climática.',
      },
      {
        letter: 'D',
        text: 'minimizar os efeitos da mudança climática com a construção de espaços verdes em áreas urbanas.',
      },
      {
        letter: 'E',
        text: 'checar se o nível educacional tem impacto em comportamentos ambientalmente responsáveis.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q64-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2024-q65-en',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2024 · Q65 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Subject-Verb Agreement — Standard English',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t1'],
    stem: 'Poetic License is the change of the conventional rules of a language to create an effect. The extract that DOES NOT contain any deviation from standard English is:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'It feel like summer' },
      { letter: 'B', text: 'She feel like summer' },
      { letter: 'C', text: 'This feel like summer' },
      { letter: 'D', text: 'Air that kill the bees' },
      { letter: 'E', text: 'I feel like summer' },
    ],
    answerKey: { questionId: 'ufrr-2024-q65-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2024-q66-en',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2024 · Q66 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Verb Tenses in Literature',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t2'],
    stem: 'O poema faz alusão ao mito de Ovídio para abordar a questão da mudança climática. A narrativa prioriza o uso:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'de adjetivos relacionados à temperatura.' },
      { letter: 'B', text: 'do futuro simples para apontar previsões.' },
      { letter: 'C', text: 'do passado simples para contar uma história.' },
      { letter: 'D', text: 'do presente simples para indicar frequência.' },
      { letter: 'E', text: 'de países para marcar seu caráter universal.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q66-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2024-q67-en',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2024 · Q67 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reading Comprehension — Environmental Policy',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t3'],
    stem: 'O Texto III traz informações sobre a redução de emissões de gases de efeito estufa na atmosfera de modo a promover a melhoria do clima em nosso planeta. Assinale a alternativa que evidencia duas propostas que contribuem com essa promoção.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A primeira proposta está relacionada com a criação de um grupo de peritos para desenvolver diversos critérios com variados níveis de robustez quanto ao compromisso de emissões zero. A segunda proposta se refere à busca pelo caminho certo para atingir a meta de emissão zero até 2050.',
      },
      {
        letter: 'B',
        text: 'A primeira proposta para a redução desses gases seria a substituição das atuais fontes poluentes e geradoras de energia (carvão, gás e petróleo) por fontes renováveis, como a eólica e a solar. A segunda seria a criação de padrões mais claros e consistentes para o cumprimento dos compromissos de emissão zero por parte de entidades não estatais.',
      },
      {
        letter: 'C',
        text: 'É importante que haja uma redução de quase metade das emissões até o ano de 2030, e que elas não mais ocorram a partir de 2050. Além disso, para alcançar a meta de emissão zero é necessária a tomada de medidas ousadas e imediatas por parte de todos os governos, sobretudo os considerados maiores emissores.',
      },
      {
        letter: 'D',
        text: 'A primeira proposta destaca a importância da emissão zero pois, para evitar impactos de alterações climáticas e preservar um planeta habitável, o aumento da temperatura global precisa ser limitado à 1,5°C, tal como exigido no Acordo de Paris; A segunda proposta sinaliza o comprometimento de diversas e inúmeras instituições que aderiram à Corrida pelo Zero, visando a adoção de medidas rigorosas e imediatas para a redução pela metade das emissões globais até o ano de 2030.',
      },
      {
        letter: 'E',
        text: 'O texto aponta que há uma elevação de cerca de um grau na temperatura da Terra nos dias de hoje, o que já denota aumento em relação ao século XIX, e essas emissões ainda continuam a subir. O texto também menciona que uma das formas de se alcançar a emissão zero exige uma total mudança na forma como vivemos hoje.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q67-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2024-q68-en',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2024 · Q68 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Grammar — Adverbs of Manner',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t1', 'ufrr-2024-en-t3'],
    stem: 'Adverbs of manner are words or phrases that describe how an action is done in the context of a sentence. According to the use in Text I, choose the option that shows a sequence of adverbs of manner.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'clearly – currently – dramatically' },
      { letter: 'B', text: 'simply – clearly – currently' },
      { letter: 'C', text: 'currently – dramatically – significantly' },
      { letter: 'D', text: 'simply – clearly – dramatically' },
      { letter: 'E', text: 'clearly – currently – significantly' },
    ],
    answerKey: { questionId: 'ufrr-2024-q68-en', correctLetter: null },
    editorialNote:
      'Observação editorial: o enunciado menciona “Text I”, porém os advérbios listados ocorrem em Text III (“For a livable climate”); ambos os textos foram vinculados para consulta.',
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2024-q69-en',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2024 · Q69 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reading Comprehension — SDG 13',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t4'],
    stem: 'The text above is a production of The Uniting Nations to make people aware of the Sustainable Development Goal (SDG) 13, which has the following official mission statement: *Take urgent action to combat climate change and its impacts*. It’s known that actions aimed at climate change have been requested for a long time, but there’s still a lot to be done. Baring this in mind, choose the alternative that contains suggestions for achieving the SDG 13 that are mentioned in the text.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Thinning ozone layer and building resilience, as well as sturdy cities and houses.',
      },
      {
        letter: 'B',
        text: 'Taking extreme measures to reverse global warming and releasing CO2 in the atmosphere, as well as managing extreme weather and natural disasters.',
      },
      {
        letter: 'C',
        text: 'Improving water management to deal with droughts and planning national policies, as well as educating the population about which climate actions must be taken.',
      },
      {
        letter: 'D',
        text: 'Benefiting people everywhere, working together and investing in special umbrellas to protect people from the acid rain.',
      },
      {
        letter: 'E',
        text: 'Helping mitigate and adapt to climate change and its impacts as well as reporting on the melting of glaciers and the risk that arctic animals face.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q69-en', correctLetter: null },
    editorialNote: 'Grafia original “Baring this in mind” mantida no enunciado.',
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2024-q70-en',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2024 · Q70 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reported Speech',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t5'],
    stem: `Considere o seguinte trecho do texto: “I think everyone should have a go bag right now,” she told National Public Radio (NPR) in the US.

Assinale a alternativa que apresenta a forma correta do discurso indireto, levando-se em conta a permanência do momento de produção da fala, mas entendendo que houve mudança de pessoa e lugar.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'She thought everyone should have a go bag right then.',
      },
      {
        letter: 'B',
        text: 'She thinks everyone should have a go bag right now.',
      },
      {
        letter: 'C',
        text: 'She thought they should have had a go bag then.',
      },
      {
        letter: 'D',
        text: 'She thinks everyone could have had a go bag right now.',
      },
      {
        letter: 'E',
        text: 'I thought everyone should have a go bag then.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q70-en', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2024-q71-en',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2024 · Q71 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Author’s Tone and Irony',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t5'],
    stem: 'Considering the section of the newspaper in which the text was published, the contemporary discussions about global heating and other climate disorders, as well as your previous knowledge on the theme, mark the alternative that best represents the tone the author implemented in her article:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'The author chooses to use irony to approach the theme “climate crisis” because she does not believe that is as serious as people insist on saying. She offers some examples of why we shouldn’t take it so seriously.',
      },
      {
        letter: 'B',
        text: 'Because the theme – climate crisis – is extremely serious and urgent, the author uses a sober tone in her writing, using words, punctuation and examples that reveal how concerned she is in relation to that.',
      },
      {
        letter: 'C',
        text: 'As the text brings a serious and urgent theme, the climate crisis the planet is facing, the author decides to make a little fun, since there is nothing else that can be done but to wait for the worse to come.',
      },
      {
        letter: 'D',
        text: 'Considering the fact that the newspaper The Guardian declared the theme “climate crises” is extremely relevant, the author of this text decided to bring some entertainment to the readers, who have been excessively worried.',
      },
      {
        letter: 'E',
        text: 'Although the text brings a serious and urgent theme, the climate crisis the planet has been facing, the author chooses to write about it in a sarcastic and fun way. It does not mean, however, that the subject is treated an unimportant.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q71-en', correctLetter: null },
    editorialNote: 'Grafia original “treated an unimportant” na alternativa E preservada.',
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2024-q72-en',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2024 · Q72 (EN)',
    foreignLanguage: 'Inglês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Direct and Reported Speech',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-en-t6'],
    stem: '“The Earth Song” was a great success when it was released, in 1995. It makes people reflect upon the necessity to feel responsible for the planet. In the lyrics, the verses “That you said we were to gain” and “That you said was yours and mine” are examples of reported speech. Consider the context and mark the alternative which brings the best representation of the direct form of such sentences:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'We are to gain many things / These dreams are mine and yours.',
      },
      {
        letter: 'B',
        text: 'We gained many things / These dreams are ours.',
      },
      {
        letter: 'C',
        text: 'They are to gain many things / The dreams belong to you and to me.',
      },
      {
        letter: 'D',
        text: 'They gain many things / These dreams are mine and yours.',
      },
      {
        letter: 'E',
        text: 'We are to gain many things / These dreams are yours and me.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q72-en', correctLetter: null },
    provenance: makeProv(28),
  },

  // ================= FRANÇAIS (Q64–Q72) =================
  {
    id: 'ufrr-2024-q64-fr',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2024 · Q64 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: 'D’après le texte, par rapport à la crise climatique, l’affirmation INCORRECTE est:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Le président brésilien a attribué la crise climatique à une manque d’engagement en faveur de l’environnement.',
      },
      {
        letter: 'B',
        text: 'L’ONG Global Citizen critique la déclaration final de la réunion du G20.',
      },
      {
        letter: 'C',
        text: 'Les pays participants reconnaissent l’émergence de reduire les émissions de charbon d’ici à 2030.',
      },
      {
        letter: 'D',
        text: 'La réunion du G20 a eu un résultat très positif parce que la déclaration finale suggère la baisse de la production des énergies derivées du gaz et du pétrole.',
      },
      {
        letter: 'E',
        text: 'Le G20 s’est réuni em Inde, au mois de septembre.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q64-fr', correctLetter: null },
    editorialNote: 'Grafia original “parce”/“em Inde”/“déclaration final” preservada conforme o caderno oficial.',
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q65-fr',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2024 · Q65 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Idée Principale — Titre',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: 'Un nouveau titre pour l’article pourrait être:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Climat: le G20 déclare la sortie des énergies fossiles.',
      },
      {
        letter: 'B',
        text: 'G20: déclaration finale de la réunion est bien évaluée par les ONGs.',
      },
      {
        letter: 'C',
        text: 'La réunion du G20 ignore la sortie des énergies fossiles.',
      },
      {
        letter: 'D',
        text: 'Les pays participent de la réunion du G20 en Indonésie.',
      },
      { letter: 'E', text: 'Climat: pas d’énergies fossiles pour les pays.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q65-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q66-fr',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2024 · Q66 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Classes Grammaticales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: `Les mots soulignées dans l’extrait:

Réunis à New Delhi, __en__ Inde, les __dirigeants__ du G20 se contentent d'appeler à "__accélérer__ les efforts vers la réduction de la production d'électricité à partir de charbon", __sans__ suggérer de telles baisses pour le gaz et le pétrole.

sont classifiées respectivement comme:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'nom – verbe – verbe – préposition' },
      { letter: 'B', text: 'préposition – nom – nom – verbe' },
      { letter: 'C', text: 'nom – verbe – verbe – verbe' },
      { letter: 'D', text: 'préposition – nom – verbe – préposition' },
      { letter: 'E', text: 'préposition – verbe – nom – préposition' },
    ],
    answerKey: { questionId: 'ufrr-2024-q66-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q67-fr',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2024 · Q67 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: '- Ce qu’on peut extraire des idées de ce texte est que/qu’',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Les pays que font partie du G20 ont montré un avenir sans énergies fossiles.',
      },
      { letter: 'B', text: 'Il n’y aura plus d’énergie fossile en 2030.' },
      {
        letter: 'C',
        text: 'Il est nécessaire de réduire l’utilisation des énergies fossiles en faveur de l’environnement.',
      },
      {
        letter: 'D',
        text: 'L’ONG Global Citizen est bien d’accord avec la déclaration finale de la réunion du G20.',
      },
      {
        letter: 'E',
        text: 'La crise climatique n’est pas une question d’environnement.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q67-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q68-fr',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2024 · Q68 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Temps Verbaux — Futur Simple',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: 'Dans l’extrait “Pour la première fois, le G20 affirme qu\'il "__poursuivra__ et __encouragera__ les efforts visant à tripler les capacités en matière d\'énergies renouvelables" d\'ici 2030.», les mots signalés sont classifiés comme:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'verbes au conditionnel.' },
      { letter: 'B', text: 'verbes au passé simple.' },
      { letter: 'C', text: 'verbes au présent.' },
      { letter: 'D', text: 'verbes au passé composé.' },
      { letter: 'E', text: 'verbes au futur simple.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q68-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q69-fr',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2024 · Q69 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Interprétation de Texte',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: 'Cochez l’extrait qui contient un aspect positif, selon le texte:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Réunies en Inde, les principales puissances économiques mondiales ont seulement convenu, samedi, de réduire la production électrique "à partir de charbon", sans mentionner le gaz ou le pétrole.',
      },
      {
        letter: 'B',
        text: '"Ce G20 était censé montrer la voie vers un avenir sans énergies fossiles", a réagi l\'ONG Global Citizen.',
      },
      {
        letter: 'C',
        text: 'Beaucoup de voix s\'étaient élevées pour réclamer un engagement plus fort du G20 sur le climat.',
      },
      {
        letter: 'D',
        text: 'Les principales puissances économiques mondiales reconnaissent toutefois que la limitation du réchauffement à 1,5°C "nécessite une réduction rapide, forte et soutenue des émissions, de 43% d\'ici 2030 par rapport à 2019".',
      },
      {
        letter: 'E',
        text: 'Les dirigeants du G20 se contentent d\'appeler à "accélérer les efforts vers la réduction de la production d\'électricité à partir de charbon".',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q69-fr', correctLetter: null },
    provenance: makeProv(29),
  },
  {
    id: 'ufrr-2024-q70-fr',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2024 · Q70 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Pronoms Relatifs',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: `Les éléments articulateurs employés par l’auteur dans l’extrait:

Le président brésilien, Lula, __dont__ le pays fait partie du G20, avait mis en garde, samedi, contre l'"urgence climatique sans précédent" __à laquelle__ le monde est confronté du fait d'un "manque d'engagement en faveur de l'environnement".

ont la fonction de:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'nom.' },
      { letter: 'B', text: 'adverbe.' },
      { letter: 'C', text: 'pronom relatif.' },
      { letter: 'D', text: 'verbe.' },
      { letter: 'E', text: 'adjetif.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q70-fr', correctLetter: null },
    editorialNote: 'Grafia original “adjetif” na alternativa E preservada.',
    provenance: makeProv(30),
  },
  {
    id: 'ufrr-2024-q71-fr',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2024 · Q71 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: `Dans l’extrait:

Un rendez-vous manqué face à l'urgence climatique? Aucun appel à sortir à terme des énergies fossiles polluantes ne figure dans la déclaration finale du G20, diffusée samedi 9 septembre. Un tel objectif avait pourtant été jugé "indispensable", vendredi, par le premier bilan de l'accord de Paris publié par l'ONU Climat.

l’auteur veut montrer:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'que la réunion du G20 n’a pas bien répondu aux discussions dans le cadre de l’accord de Paris.',
      },
      {
        letter: 'B',
        text: 'que le G20 n’a publié aucune déclaration après la réunion du 9 septembre.',
      },
      {
        letter: 'C',
        text: 'que l’ONU Climat juge indispensable l’utilisations des énergies fossiles.',
      },
      {
        letter: 'D',
        text: 'que les énergies fossiles sont indispensables face à l’urgence climatique.',
      },
      {
        letter: 'E',
        text: 'que la déclaration finale du G20 a été publiée par l’ONU Climat le samedi, 9 septembre.',
      },
    ],
    answerKey: { questionId: 'ufrr-2024-q71-fr', correctLetter: null },
    provenance: makeProv(30),
  },
  {
    id: 'ufrr-2024-q72-fr',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2024 · Q72 (FR)',
    foreignLanguage: 'Francês',
    year: 2024,
    edition: 'UFRR 2024',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Vocabulaire et Synonymie',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2024-fr-t1'],
    stem: `Les mots soulignés ci-dessous peuvent être remplacés, sans perdre leur sens, par:

Les principales puissances économiques mondiales reconnaissent __toutefois__ que la limitation du réchauffement à 1,5°C "__nécessite__ une réduction rapide, forte et soutenue des émissions, de 43% d'ici 2030 par rapport à 2019", conformément aux recommandations du Giec, le Groupe intergouvernemental d'experts sur __l'évolution__ du climat de l'ONU.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'autrefois – précise – le progrès.' },
      { letter: 'B', text: 'cependant – exige – le progrès.' },
      { letter: 'C', text: 'cependant – précise – la réduction.' },
      { letter: 'D', text: 'autrefois – exige – le progrès.' },
      { letter: 'E', text: 'cependant – exige – la réduction.' },
    ],
    answerKey: { questionId: 'ufrr-2024-q72-fr', correctLetter: null },
    provenance: makeProv(30),
  },
];

export const UFRR_2024_EXAM: ExamEdition = {
  id: EXAM_ID,
  name: EXAM_NAME,
  shortName: 'UFRR 2024 Integral',
  year: 2024,
  edition: 'UFRR 2024',
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
  essayPrompt: ESSAY_PROMPT_2024,
  importStatus: 'validated',
  answerKeyStatus: 'pending_gabarito',
  sourceDocumentName: DOC_NAME,
  isDemoFixture: false,
  rulesSummary: [
    '72 questões objetivas (A–E, com anomalia oficial A–F preservada na Q02) distribuídas em 8 disciplinas — sendo Q64 a Q72 selecionadas conforme idioma escolhido (Espanhol, Inglês ou Francês).',
    'Duração oficial de 5 horas incluindo Redação (Tema 1 ou Tema 2, máx. 25 linhas).',
    'Gabarito oficial pendente de vinculação: respostas e tempos ficam salvos para recálculo automático futuro.',
  ],
  scoringRulesNote:
    'Edição UFRR 2024 importada fielmente do caderno oficial, incluindo diagramas vetoriais na Física (Q29, Q30, Q35), estruturas químicas (Q61–Q63) e anomalia editorial da Q02.',
  questionIds: UFRR_2024_QUESTIONS.map((q) => q.id),
};
