import type { EssayPrompt, ExamEdition, Question, SharedText } from '../types';

const DOC_NAME = 'Vestibular 2023 - E3-PI.pdf';
const EXAM_ID = 'ufrr-integral-2023';
const EXAM_NAME = 'Vestibular UFRR 2023 — Prova Integral';

const makeProv = (pageNumber: number, notes?: string) => ({
  institution: 'UFRR / CPV',
  documentName: DOC_NAME,
  pageNumber,
  isDemoFixture: false,
  notes,
});

const TABLE_Q21 = `<table class="w-full text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <thead>
    <tr class="bg-stone-100 dark:bg-stone-800">
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold w-12"></th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold">Fermentação lática</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold">Metabolismo oxidativo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 font-semibold">A)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Fornecimento de ATP para o músculo de forma lenta e contínua.</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Fornecimento ATP para o músculo de forma rápida e por pouco tempo.</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 font-semibold">B)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Produção de ATP no citoplasma.</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Produção de ATP na mitocôndria</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 font-semibold">C)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Utilização apenas de glicose.</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Utilização de glicose e ácidos graxos</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 font-semibold">D)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Menor número de reações químicas</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Maior número de reações químicas</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 font-semibold">E)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Pouca quantidade de ATP por molécula de glicose</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2">Grande quantidade de ATP por molécula de glicose.</td>
    </tr>
  </tbody>
</table>`;

const TABLE_Q26 = `<table class="w-full max-w-sm text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <thead>
    <tr class="bg-stone-100 dark:bg-stone-800">
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold w-12"></th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">G II</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center font-semibold">G III</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">A)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">1 e 4</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">2 e 6</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">B)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">1 e 5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">2 e 4</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">C)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">4 e 5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">2 e 4</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">D)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">1 e 5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">4 e 6</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">E)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">5</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 text-center">2, 4 e 6</td>
    </tr>
  </tbody>
</table>`;

export const UFRR_2023_SHARED_TEXTS: SharedText[] = [
  {
    id: 'ufrr-2023-pt-t1',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO I (Português) — Para as questões 01 e 02',
    content: `“Assim que as naus foram ancoradas, todos os capitães vieram a esta nau do Capitão-mor. E daqui mandou o capitão que Nicolau Coelho e Bartolomeu Dias fossem à terra com aqueles dois homens e deixassem ir com seus arcos e setas, **isso** __depois que tinha dado a cada um deles uma camisa nova, uma carapuça vermelha e um rosário de contas brancas de osso que eles levavam nos braços, com um guizo e uma campainha.__ “`,
    sourceCitation: '(TUFANO, D. A carta de Pero Vaz Caminha. São Paulo: Moderna, 1999).',
  },
  {
    id: 'ufrr-2023-pt-t2',
    examId: EXAM_ID,
    title: 'Lira I',
    referenceLabel: 'TEXTO II (Português) — Para a questão 03',
    content: `“Os teus olhos espalham luz divina,
A quem a luz do Sol em vão se atreve:
Papoula, ou rosa delicada, e fina,
Te cobre as faces, que são cor de neve.
Os teus cabelos são uns fios d’ouro;
Teu lindo corpo bálsamos vapora.
Ah! Não, não fez o Céu, gentil Pastora,
Para glória de Amor igual tesouro.
Graças, Marília bela,
Graças à minha Estrela!”`,
    sourceCitation:
      '(GONZAGA, Tomás Antônio. Marília de Dirceu. In: PROENÇA FILHO, Domício (Org.). A poesia dos inconfidentes. Rio de Janeiro: Nova Aguilar, 1996, p. 571-708).',
  },
  {
    id: 'ufrr-2023-pt-t3',
    examId: EXAM_ID,
    title: 'A Canção do Exílio — Gonçalves Dias',
    referenceLabel: 'TEXTO III (Português) — Para as questões 04 e 05',
    content: `“Minha terra tem palmeiras
Onde canta o sabiá;
As aves que aqui gorjeiam,
Não gorjeiam como lá.
[...]

Em cismar, sozinho, à noite
Mais prazer encontro eu lá;
Minha terra tem palmeiras,
Onde canta o sabiá.

Minha terra tem primores,
Que tais não encontro eu cá;
Em cismar - sozinho, à noite -
Mais prazer encontro eu lá;
Minha terra tem palmeiras,
Onde canta o sabiá.

Não permita Deus que eu morra,
Sem que eu volte para lá;
Sem que desfrute os primores
Que não encontro por cá;
Sem qu'inda aviste as palmeiras
Onde canta o sabiá.”`,
    sourceCitation:
      '(DIAS, Antônio Gonçalves. Poemas de Gonçalves Dias. São Paulo: Cultrix, 1968.)',
  },
  {
    id: 'ufrr-2023-pt-t4',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO IV (Português) — Para a questão 06',
    content: `“A violência contra os 305 povos indígenas aumentou de forma sistêmica em 2019, segundo relatório divulgado pelo Conselho Indigenista Missionário (Cimi). A entidade apontou que 16 das 19 categorias de agressões, que incluem racismo, expropriação de terras indígenas e omissão do poder público, se agravaram.

Essas agressões são relacionadas à “Violência contra o patrimônio”, “Violência contra a pessoa” e “Violência por omissão do poder público”. Entre as categorias que mais chamam a atenção, está a de “invasões possessórias, exploração ilegal de recursos e danos ao patrimônio”, onde houve um crescimento de 109 para 256 casos, entre 2018 e 2019. As ocorrências atingiram 151 terras indígenas e 143 povos, em 23 estados.

Outras cinco categorias também sofreram aumento de ocorrências: conflitos territoriais, que passou de 11 para 35 casos; ameaça de morte, que subiu de oito para 33; ameaças várias, que foi de 14 para 34 casos; lesões corporais dolosas, que passou de cinco para 13; e mortes por desassistência, que subiu de 11 para 31 casos.”`,
    sourceCitation:
      '(Disponível em: https://www.fundobrasil.org.br/blog/violencias-sofridas-pelos-povos-indigenas-no-brasil/. Acessado em: 16 de set de 2022)',
  },
  {
    id: 'ufrr-2023-pt-t5',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO V (Português) — Para a questão 07',
    content: `“Gostava da roça, do rio que corria entre pedras, gostava dos pés de pequi, dos pés de coco-de-catarro, das canas do milharal. Divertia-se brincando com as bonecas de milho ainda no pé. Elas eram altas e, quando dava o vento, dançavam. Ponciá corria e brincava entre elas. O tempo corria também. Ela nem via. O vento soprava no milharal, as bonecas dobravam até o chão. Tudo era tão bom.“`,
    sourceCitation:
      '(EVARISTO, Conceição. Ponciá Vicêncio. Belo Horizonte: Mazza Edições, 2003, p. 09-10)',
  },
  {
    id: 'ufrr-2023-pt-t6',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO VI (Português) — Para as questões 08 e 09',
    content: `“Mais de 6 mil indígenas de vários povos de todas as regiões do Brasil estiveram em Brasília-DF na última semana de agosto de 2021, no acampamento “Luta pela vida”. Além de mobilizações no Congresso Nacional **para** denunciar violências, reivindicar o reconhecimento de direitos, o principal objetivo foi acompanhar o adiado julgamento no STF: uma decisão sobre a ação de reintegração de posse movida pelo governo de Santa Catarina contra o povo Xokleng, cujo resultado terá “repercussão geral” nas instâncias judiciais e servirá como referência para todos os processos demarcatórios dos territórios indígenas. Setores contrários aos direitos indígenas defendem a tese do “marco temporal”, que estabelece a data da promulgação da Constituição Federal de 1988 como limite para reivindicação e reconhecimento territorial pelos indígenas. A retomada do julgamento está prevista **para** 2022, um ano de eleições presidenciais em um contexto de retrocessos sociopolíticos.”`,
    sourceCitation:
      '(Disponível em: https://periodicosuneal.emnuvens.com.br/campio/issue/view/40. Acessado em: 16 de set. de 2022)',
  },
  {
    id: 'ufrr-2023-es-t1',
    examId: EXAM_ID,
    title: 'BRASILEÑOS INSATISFECHOS CON PRESERVACIÓN DE AMAZONIA, DICE ENCUESTA',
    referenceLabel: 'TEXTO I (Español) — Para las cuestiones 64, 65 y 66',
    content: `Una encuesta divulgada esta semana por la Federación Brasileña de Bancos (Febraban) revela que el 83% de los brasileños están descontentos con la preservación de la selva amazónica. Entre los sentimientos provocados por la actual situación del bioma, prevalecen la tristeza (24%), seguida de indignación (17%), esperanza (17%) y miedo (11%).

La encuesta se aplicó a 1.200 personas mayores de 18 años de ambos sexos, de diferentes edades y grupos de ingresos, en todo el país. Además, se escucharon a 300 personas más de los estados que abarcan la llamada Amazonia Legal.

**QUEMA Y DEFORESTACIÓN**
Los incendios y la deforestación son los principales problemas que enfrenta el bosque en opinión del 44% de los brasileños. La minería ilegal, la apropiación de tierras y el tráfico de drogas y armas han sido nombrados por el 12% como los principales desafíos para la preservación de los bosques y la biodiversidad.

La deforestación se ha agravado en los últimos años en opinión del 77% de los encuestados, mientras que el 14% cree que su ritmo se ha mantenido. La tala de madera es el mayor impulsor de la deforestación en opinión del 48%, seguida de la apropiación de tierras (14%), la ganadería (11%) y la minería ilegal (11%).

**COMBATE**
En cuanto a las medidas para hacer frente a la destrucción, el 83% apoyó endurecer las penas por deforestación; el 67% se opuso a reducir las reservas indígenas; y el 86% se opuso a permitir la minería en los territorios reservados a los pueblos tradicionales.

Los líderes indígenas mostraron el mayor índice de aprobación de su trabajo en relación con bosque, con una valoración positiva del 73% de la población. El ejército brasileño ocupó el segundo lugar, con un 69%.`,
    sourceCitation:
      '(Adaptado de: https://agenciabrasil.ebc.com.br/es/geral/noticia/2020-08/brasilenos-insatisfechos-con-preservacion-de-amazonia-dice-encuesta. Acceso en 05/09/2022.)',
  },
  {
    id: 'ufrr-2023-es-t2',
    examId: EXAM_ID,
    title: 'EL DESMANTELAMIENTO DE LAS POLÍTICAS DE PROTECCIÓN DE LOS PUEBLOS INDÍGENAS',
    referenceLabel: 'TEXTO II (Español) — Para las cuestiones 67 y 68',
    content: `Podemos señalar que todo el proyecto del Gobierno actual proviene de una política que se ha venido implementando desde el inicio de la República: el proyecto de desarrollo continuo, con distintos matices según el momento histórico. En los dos últimos años, se ha potenciado la exportación de productos básicos de la agroindustria.

Podemos resumir esta ofensiva a los pueblos indígenas a través de las políticas de cuatro ministerios en concreto: Medio Ambiente, Agricultura, Salud (que incluye a la Secretaría Especial de Salud Indígena-SESAI) y Justicia (que alberga a la Fundación Nacional del Indio, FUNAI). Son los ministerios clave de una política claramente desarrollista. El abandono del acuerdo de París y el consecuente alejamiento de los Objetivos de Desarrollo del Milenio son un claro ejemplo de cómo el desarrollo sostenible no forma parte de la agenda política brasileña. Esta agenda afecta directamente a los pueblos más vulnerables, como los indígenas, los quilombolas y los ribereños.

Estos cuatro ministerios actúan conjuntamente para la deconstrucción de políticas económicas y sociales públicas, que ha supuesto un aumento de incendios en áreas de preservación ambiental, de invasiones de ocupantes ilegales, de extractores de madera y de otros minerales, y un incremento de muertes de líderes de los movimientos de preservación de la selva amazónica y de la población indígena en general.

En palabras de Ricardo Salles, ministro de Medio Ambiente: “Como la atención de los medios de comunicación está en el COVID-19, podemos sacar adelante nuestras normas”.

En colaboración con los ruralistas, Salles es acusado de desmantelar deliberadamente los organismos de fiscalización ambiental para liberar una expansión sin límites del frente agrícola hacia el norte del país. Según el Observatorio del Clima, entre enero y agosto, el ministro apenas destinó 105 mil reales (R$) en la política ambiental, es decir, un 0.4% del presupuesto para iniciativas relacionadas con el cambio climático, la protección de la biodiversidad y mejora de la calidad ambiental urbana.

Con un gasto tan exiguo y la reducción en las inspecciones ambientales se vaticina un desastre medioambiental. Según el Instituto Socioambiental: el 2020 ha sido el peor año para las Tierras Indígenas y las Unidades de Conservación desde 2008. Se han destruido 188 mil hectáreas de bosques en estos territorios, es decir, una extensión más grande que la ciudad de São Paulo, solo superada por las casi 200 mil hectáreas registradas en 2019. Además, representan un 90% más que el promedio entre 2009 y 2018.`,
    sourceCitation:
      '(Adaptado de: https://www.iwgia.org/es/brasil/4121-mi-2021-brasil.html Acceso en 05/09/2022.)',
  },
  {
    id: 'ufrr-2023-es-t3',
    examId: EXAM_ID,
    referenceLabel: 'TEXTO III (Español) — Para la cuestión 69',
    content: `“Tres de las acciones más sencillas y efectivas para contribuir a proteger al planeta, y que podemos seguir a diario todas y todos los miembros de la sociedad, son las que tiene que ver con las llamadas 3 R: Reduce; Reutiliza; Recicla.”`,
    sourceCitation:
      '(Extraído de: https://lalibelulamx.medium.com/como-cuidar-al-medio-ambiente-8ec99e8954fc)',
  },
  {
    id: 'ufrr-2023-es-t4',
    examId: EXAM_ID,
    title: 'LA FIEBRE DEL ORO Y EL GENOCIDIO',
    referenceLabel: 'TEXTO IV (Español) — Para la cuestión 70',
    content: `**Los yanomamis conforman el pueblo indígena relativamente aislado más numeroso de América del Sur. Viven en las selvas y montañas del norte de Brasil y del sur de Venezuela.**

Durante los años 80, los yanomamis sufrieron enormemente cuando cerca de 40.000 buscadores de oro brasileños invadieron su tierra. Estos buscadores les dispararon, destruyeron muchas comunidades y les expusieron a enfermedades contra las que no tenían inmunidad. El 20% de los yanomamis murió en sólo siete años.

Después de una larga campaña internacional liderada por Davi Kopenawa Yanomami, Survival y la Comisión Pro Yanomami (CCPY), la tierra yanomami de Brasil fue demarcada finalmente como “Parque Yanomami” en 1992 y los buscadores de oro fueron expulsados.

A pesar de ello, tras la demarcación, los buscadores de oro volvieron a la zona, generando tensiones. En 1993, un grupo de mineros entró en la comunidad de Haximú y asesinó a 16 yanomamis, entre ellos a un bebé.

Tras una protesta nacional e internacional, un tribunal brasileño declaró a cinco de ellos culpables de genocidio. Dos están cumpliendo condena en la cárcel, mientras que los demás lograron escapar.`,
    sourceCitation: '(Adaptado de: https://www.survival.es/indigenas/yanomami)',
  },
  {
    id: 'ufrr-2023-es-t5',
    examId: EXAM_ID,
    title: 'PROTEGER EL 80 % DE LA AMAZONIA: LÍDERES INDÍGENAS IMPULSAN AMBICIOSO PLAN PARA "SALVAGUARDAR EL FUTURO DEL PLANETA"',
    referenceLabel: 'TEXTO V (Español) — Para las cuestiones 71 y 72',
    content: `**Si la deforestación alcanza el 20 %-25 %, podría llevar a la Amazonia a una espiral de muerte en la que se secaría y se convertiría en sabana, según el científico brasileño del sistema terrestre Carlos Nobre.**

Los grupos indígenas instaron este domingo (05.09.2021) a los líderes mundiales a respaldar un nuevo objetivo para proteger el 80 % de la cuenca del Amazonas para 2025, afirmando que se necesita una acción audaz para detener la deforestación que está llevando a la mayor selva tropical del mundo más grande de la Tierra, más allá de un punto de no retorno.

Ahora, el máximo organismo mundial de conservación se dispone a decidir si sus 1.400 miembros pueden votar sobre esta controvertida propuesta.

Presentada en virtud de una disposición de emergencia a la Unión Internacional para la Conservación de la Naturaleza (UICN), la medida exige un "plan de acción global" para detener la deforestación desenfrenada y la extracción destructiva de minerales preciosos y petróleo.

En las últimas dos décadas, la Amazonia ha perdido unos 10.000 kilómetros cuadrados cada año, según evaluaciones basadas en datos de satélite.`,
  },
  {
    id: 'ufrr-2023-en-t1',
    examId: EXAM_ID,
    title: 'Old Indian',
    referenceLabel: 'TEXT I (English) — For questions 64, 65 and 66',
    content: `They’ve already taken our hide
and our blood,
they’ve already raffled off our land
with all its sacred names
(and left it stripped to the bone).
Insatiable, now they trade us in
for beef.
No to the sap of agro-business!
No to a fate of agro-death!
No to Kindle in a world without kin!
The flora moans,
the fauna moans,
the mercury-rich river moans.
It is the forest that clothes the Indian.
Leave us the little that remains!
Flowers cannot sprout from flames.

*Salgado Maranhão*
*Tradução: Alexis Levitin*`,
    sourceCitation:
      '(Maranhão, SALGADO. Tradução: Alexis. Disponível em: https://www.nytimes.com/interactive/2020/10/02/opinion/amazon-forest-poetry.html. Acesso em: 12 set. 2022.)',
  },
  {
    id: 'ufrr-2023-en-t2',
    examId: EXAM_ID,
    title: 'ROCK IN RIO 2022: WITH “AMAZONIA” GOJIRA INVITES INDIGENOUS PEOPLE TO THE STAGE',
    referenceLabel: 'TEXT II (English) — For question 67',
    content: `Gojira, a French band, raised awareness of the indigenous cause during the show at Rock in Rio 2022. The band, known for defending environmental causes, performed the song “Amazonia” about the destruction of the Amazon rainforest.

Joe Duplantier, lead singer of French band Gojira, painted his face with annatto before taking the stage. Although he gave the entire presentation with his face painted, he only spoke about the indigenous cause at the end, just before closing the show with “Amazonia”:

“The next song is very, very special. In a way, it’s about you here in Brazil and your beautiful country. This song is about the destruction of the indigenous homeland [brasileiros] and other peoples of the Amazon rainforest. We have to change things. Altogether in many places on this planet. We count on you to do what is right, to do something for your people, your country, your nature. This song goes out to all indigenous people around the world.”

The audience responded enthusiastically (…).

Duplantier is an antideforestation activist. In 2021, he participated in protests against the destruction of Brazil’s forests and indigenous lands, even going to the Central Plateau in the Federal District.`,
    sourceCitation:
      '(Adapted from: https://www.spamchronicles.com/rock-in-rio-2022-with-amazonia-gojira-invites-indigenous-people-to-the-stage/. Accessed on Sep 7th, 2022.)',
  },
  {
    id: 'ufrr-2023-en-t3',
    examId: EXAM_ID,
    title: 'Amazonia (Gojira)',
    referenceLabel: 'TEXT III (English) — For questions 68 and 69',
    content: `Incite a riot, put yourself in a trance
You rotate the frame in a world you rely on
A scar, a line has been drawn in the sand
Behold the life, the boundaries fools will crush
The greatest miracle
Is burning to the ground
Onto the next stage of the plan
Mourn the witness of the wind
A handful of thunder
Will rise one last time
There's fire in the sky
You're in the Amazon
The greatest miracle
Is burning to the ground
Godly Amazonia
Bloody Amazonia
Mighty Amazonia
Killing Amazonia
Godly Amazonia
Bloody Amazonia
Mighty Amazonia
Killing Amazonia
Godly Amazonia
Bloody Amazonia
Burn the land
Learn the end
Burn
Another gold mine is unveiled
The source of our sorrow
Learn
Embedded in these walls of green
Is the curse that we follow
There's fire in the sky
You're in the Amazon
The greatest miracle
Is burning to the ground`,
    sourceCitation:
      '(From: https://www.letras.mus.br/gojira/amazonia/. Accessed on Sep 7th, 2022.)',
  },
  {
    id: 'ufrr-2023-en-t4',
    examId: EXAM_ID,
    title: 'In the Amazon rainforest, an indigenous tribe fights for survival',
    referenceLabel: 'TEXTO IV (English) — For questions 70, 71 and 72',
    content: `*09 August 2022*

Deep in the Amazon rainforest, an indigenous tribe that has remained relatively isolated from the outside world is waging a battle for its survival.

For centuries, the Yanomami have inhabited a vast area of **pristine** forest and large, meandering rivers on the border between Brazil and Venezuela, living off fishing, hunting and fruit gathering.

Today, the Yanomami – who number about 29,000 – say they are at serious risk of losing their lands, culture and traditional way of life. The lust for gold and other valuable minerals that lay beneath their ancestral territory has in recent years attracted a wave of illegal **prospectors** who have cut down forests, poisoned rivers and brought deadly diseases to the tribe.

“Our land is again being invaded. Our rivers are again being polluted by mercury,” said Davi Kopenawa, a Yanomami leader who has dedicated his life to protecting Yanomami rights and lands in the Amazon.
(…)

“The Brazilian government must fulfil its protective role, where every Brazilian citizen, not just the Yanomami, feels protected. It is not a favour, but a constitutional obligation. It is necessary **to curb** the mining projects on indigenous lands because they are illegal under Brazilian law,” said Dario Kopenawa, vicepresident of the Hutukara Yanomami Association.

Despite the tribe’s predicament, leaders say they are determined to preserve their communities and ancestral land’s rich biodiversity. In a message to mark International Day of the World's Indigenous Peoples on 9 August, Wapichana called on governments to uphold the UN Declaration on the Rights of Indigenous Peoples, a comprehensive international instrument on the rights of indigenous peoples adopted by the General Assembly in 2007.`,
    sourceCitation:
      'Adapted from https://www.ohchr.org/en/stories/2022/08/amazon-rainforest-indigenous-tribe-fights-survival',
  },
  {
    id: 'ufrr-2023-fr-t1',
    examId: EXAM_ID,
    title: 'TWITTER, INSTAGRAM... LES RESEAUX SOCIAUX FACE A LA QUESTION BRULANTE DE LA PROTECTION DES MINEURS – EXTRAIT',
    referenceLabel: 'TEXTE I (Français) — Pour les questions 64 à 72',
    content: `*https://www.lexpress.fr/actualite/societe Publié le 06/09/2022.*

(…)
Par un décret rendu applicable ce lundi 5 septembre, la loi française renforce désormais le contrôle parental sur les moyens d'accès à internet. Dans les faits, les fabricants d'appareils connectés sont tenus de proposer l'activation gratuite d'un dispositif de contrôle parental lors de la première mise en service de l'équipement. L'objectif est clair: il s'agit de protéger le public mineur des contenus pornographiques qui pullulent sur internet. Le décret de cette loi, adoptée en mars dernier, intervient au moment où Instagram et Twitter sont pointés du doigt pour leur manquement en matière de protection du public mineur.

(…)
D'abord, le réseau social Instagram a été condamné, ce lundi, à une amende record de 405 millions d'euros pour "manquement au traitement des données des mineurs". La Commission irlandaise pour la protection des données, qui agit au nom de l'Union européenne, estime que la société Meta - qui possède Instagram - n'a pas mis en place les garde-fous nécessaires à la protection des mineurs, qui peuvent trop facilement accéder aux fonctionnalités d'un compte professionnel, alors que celui-ci est censé être réservé aux utilisateurs de plus de 18 ans. "Instagram publie les adresses électroniques et les numéros de téléphone de mineurs, comme elle le fait pour les majeurs, ce qui constitue une violation du règlement général sur la protection des données", explique l'association Alerweb, spécialisée dans la lutte contre la cyberviolence. Le régulateur irlandais reproche également à la société Meta d'avoir ouvert des comptes de mineurs à tous les utilisateurs du réseau, et non exclusivement aux abonnés. Pour montrer sa bonne foi, Instagram avait annoncé, au mois de juin, la mise en place d'un test permettant de savoir si un utilisateur avait moins de 13 ans, l'âge minimum pour pouvoir (normalement) s'inscrire. Cela n'aura donc pas suffi.

(…)
Ensuite, c'est le réseau social Twitter qui est dénoncé pour ses carences en matière de détection de contenus pornographiques. Plusieurs associations de protection de l'enfance ont saisi l'Autorité publique française de régulation de la communication audiovisuelle et numérique, afin de mettre en demeure l'oiseau bleu. "Ce réseau social a la particularité de ne pas bannir la pornographie dans ses conditions d'utilisation", expliquait sur RTL, le 29 août dernier, Thomas Rohmer, fondateur de l'Observatoire de la parentalité et de l'éducation numérique. Les seules barrières existantes sont, en effet, très bancales. On note simplement la précision, dans ses conditions générales, que "ses services ne sont pas destinés aux enfants", ou la possibilité pour les utilisateurs de cocher une case spéciale lorsqu'ils publient un contenu sensible.

L'idée des associations est d'imposer à Twitter la même base juridique que celle qui est, depuis juillet 2020, allouée aux sites pornographiques: théoriquement, ceux-ci ne peuvent plus autoriser la consultation de leurs contenus après le simple cochage d'une case attestant de la majorité du visiteur. Pourtant, depuis deux ans, peu de choses ont changé, et les cinq sites pornographiques les plus consultés en France étaient convoqués ce mardi devant le tribunal de Paris pour s'expliquer. "Le principe de la vérification de l'âge n'est pas une pratique intégrée dans les codes des réseaux sociaux", déplore l'association Alerweb. Et s'il semble désormais un sujet brûlant, le contrôle de l'âge s'annonce difficile, notamment en raison des possibilités de contourner le système en passant par les VPN.`,
  },
];

const ESSAY_PROMPT_2023: EssayPrompt = {
  id: 'ufrr-2023-redacao',
  title: 'Propostas de Redação — Vestibular UFRR 2023',
  theme: 'Tema 1: População infantojuvenil em situação de rua no Brasil | Tema 2: Queimadas e ação do Poder Público na floresta',
  instructions:
    'Escolha um dos temas a seguir e sobre ele redija um texto dissertativo-argumentativo, em modalidade escrita formal da língua portuguesa.',
  supportingTexts: [],
  themes: [
    {
      id: 'tema-1',
      label: 'Tema 1',
      theme: 'A população infantojuvenil em situação de rua no Brasil',
      instructions:
        'O Texto I, trecho de “Capitães da areia”, obra lançada em 1937, traz uma narrativa que permanece bem atual, como podemos perceber a partir do Texto II. Ambos abordam a vida de menores de idade que moram nas ruas. Nesse contexto, disserte acerca da temática: **a população infantojuvenil em situação de rua no Brasil.**',
      supportingTexts: [
        {
          label: 'TEXTO I',
          content: `“[...] Capitães da Areia, nome pelo qual é conhecido o grupo de meninos assaltantes e ladrões que infestam a nossa urbe. Essas crianças que tão cedo se dedicaram à tenebrosa carreira do crime não têm moradia certa ou pelo menos a sua moradia ainda não foi localizada. [...] Esse bando que vive da rapina se compõe, pelo que se sabe, de um número superior a cem crianças das mais diversas idades, indo desde os oito aos dezesseis anos. Crianças que, naturalmente devido ao desprezo dado à sua educação por pais pouco servidos de sentimentos cristãos, se entregaram no verdor dos anos a uma vida criminosa.”`,
          source:
            '(AMADO. Jorge. Capitães da Areia, Rio de Janeiro: José Olympio Editora, 1937, p.10)',
        },
        {
          label: 'TEXTO II',
          content: `[...] E não podemos nos esquecer da grande quantidade de crianças e adolescentes negligenciados, que também vivem nas ruas de todo o Brasil. Segundo informações do portal G1, um censo que vem, sendo realizado pela Prefeitura de São Paulo em maio de 2022, época em que escrevemos essa matéria, mostrou que a maior cidade em número de habitantes do Brasil conta com 526 pontos de concentração de crianças e adolescentes em situação de rua. [...]`,
          source:
            '(Disponível em: https://geracaoamanha.org.br/criancas-em-situacao-de-rua/ Acesso em: 13/10/2022)',
        },
      ],
      maxLines: 25,
    },
    {
      id: 'tema-2',
      label: 'Tema 2',
      theme: 'Ação humana predatória na floresta e como o Poder Público pode atuar na preservação e intervenção a fim de conter as queimadas',
      instructions:
        'Nesse contexto, disserte acerca da temática: **ação humana predatória na floresta e como o Poder Público pode atuar na preservação e intervenção a fim de conter as queimadas.**',
      supportingTexts: [
        {
          label: 'Texto de apoio — Queimadas na Amazônia',
          content: `O Instituto Nacional de Pesquisa Espacial (Inpe) registrou 31.513 alertas de incêndio na Amazônia via satélite nos primeiros 30 dias de agosto. É o pior registro para o mês em 12 anos, quando os incêndios totalizaram 45.018 no mesmo período em 2010. A destruição ambiental na maior floresta tropical do mundo não tem precedentes. O número de queimadas é tão alto que, segundo o programa de monitoramento ambiental Copernicus, da União Europeia, está afetando a qualidade do ar na América do Sul.`,
          source: '(Disponível em: www.fpabramo.org.br/. Acesso em: 11 set. 2022.)',
        },
      ],
      maxLines: 25,
    },
  ],
  maxLines: 25,
  isDemoFixture: false,
};

export const UFRR_2023_QUESTIONS: Question[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    id: 'ufrr-2023-q01',
    examId: EXAM_ID,
    originalNumber: 1,
    originalCode: 'UFRR 2023 · Q01',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Quinhentismo — Carta de Pero Vaz de Caminha',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t1'],
    stem: `Nesse fragmento da Carta de Pero Vaz de Caminha (Texto I), é registrado o momento em que os portugueses se encontram com os nativos da terra para conhecerem seus usos e costumes.

No trecho sublinhado, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Os portugueses estavam tentando descobrir se “aqueles dois homens” pertenciam ao povo das Índias.',
      },
      {
        letter: 'B',
        text: '“aqueles dois homens” acompanharam os portugueses para mostrar aos seus pares que não havia perigo iminente.',
      },
      {
        letter: 'C',
        text: 'Os portugueses iniciaram o processo de aculturação com “aqueles dois homens” ao lhes doar “uma camisa nova, uma carapuça vermelha e um rosário de contas brancas de osso”.',
      },
      {
        letter: 'D',
        text: '“aqueles dois homens” selaram um acordo de paz com os portugueses depois de darem presentes aos portugueses.',
      },
      {
        letter: 'E',
        text: 'Os portugueses permitiram que “aqueles dois homens” levassem arcos e setas, porque selaram um ritual de paz entre eles e respeitaram a cultura dos povos originários durante a colonização.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q01', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2023-q02',
    examId: EXAM_ID,
    originalNumber: 2,
    originalCode: 'UFRR 2023 · Q02',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Coesão Referencial — Pronomes Demonstrativos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t1'],
    stem: 'Nesse fragmento da Carta de Pero Vaz de Caminha (Texto I), é CORRETO afirmar que o pronome **isso**:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'introduz os argumentos posteriores a ele, fazendo referência a informações que ainda serão apresentadas no texto.',
      },
      {
        letter: 'B',
        text: 'recupera uma porção de texto anterior a ele e introduz a ideia de submissão dos “dois homens”.',
      },
      {
        letter: 'C',
        text: 'se refere somente a “arcos e setas” dos “dois homens”.',
      },
      {
        letter: 'D',
        text: 'por ser neutro, não faz referência a qualquer outro termo da oração.',
      },
      {
        letter: 'E',
        text: 'se refere apenas a “uma camisa nova, uma carapuça vermelha e um rosário de contas brancas de osso”.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q02', correctLetter: null },
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2023-q03',
    examId: EXAM_ID,
    originalNumber: 3,
    originalCode: 'UFRR 2023 · Q03',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Arcadismo — Tomás Antônio Gonzaga',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t2'],
    stem: `As tendências estéticas do Arcadismo surgem na segunda metade do século XVIII, como uma busca ao natural e ao simples, e herdaram as tendências da Antiguidade Clássica. Assim, os sócios da Arcádia (sociedade literária que ditava os padrões estéticos da época) criavam pseudônimos de pastores gregos e romanos, imitando os clássicos.

No fragmento do poema (Texto II), pode-se afirmar que são características desse período:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Culto à razão, imitação dos clássicos, cultismo.' },
      {
        letter: 'B',
        text: 'Conceptismo (jogo de ideias), cultismo (jogo de palavras), bucolismo.',
      },
      {
        letter: 'C',
        text: 'Racionalismo, influência do iluminismo, cultismo.',
      },
      {
        letter: 'D',
        text: 'Bucolismo, imitação dos clássicos, conceptismo.',
      },
      { letter: 'E', text: 'O bucolismo, pastorialismo, linguagem simples.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q03', correctLetter: null },
    editorialNote: 'Grafia original “pastorialismo” na alternativa E preservada.',
    provenance: makeProv(3),
  },
  {
    id: 'ufrr-2023-q04',
    examId: EXAM_ID,
    originalNumber: 4,
    originalCode: 'UFRR 2023 · Q04',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Morfologia — Classes Gramaticais em Poema',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t3'],
    stem: 'A “Canção do Exílio” de Gonçalves Dias faz parte da primeira fase do Romantismo no Brasil, que tem como uma de suas características o nacionalismo. Nesse poema (texto III), o poeta trata de ressaltar os valores naturais brasileiros em detrimento dos valores portugueses. Para fazer a exaltação comparativa entre Portugal e Brasil, o poeta utilizou, principalmente:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Advérbios.' },
      { letter: 'B', text: 'Pronomes.' },
      { letter: 'C', text: 'Artigos.' },
      { letter: 'D', text: 'Preposições.' },
      { letter: 'E', text: 'Verbos.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q04', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2023-q05',
    examId: EXAM_ID,
    originalNumber: 5,
    originalCode: 'UFRR 2023 · Q05',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Romantismo — 1ª Geração (Gonçalves Dias)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t3'],
    stem: 'O Romantismo brasileiro é um movimento artístico que ocorre concomitantemente ao processo de independência política do Brasil. Considerando as características desse movimento literário e do poema de Gonçalves Dias (texto III), é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O eu-lírico apresenta um sentimento de saudosismo em relação à pátria e, na última estrofe, marca o seu desejo, no futuro, de retorno.',
      },
      {
        letter: 'B',
        text: 'Para estabelecer a comparação entre a terra do exílio e a terra natal do eu-lírico, são utilizados elementos da natureza.',
      },
      {
        letter: 'C',
        text: 'O uso de verbos e pronomes na primeira pessoa trazem uma objetividade para os sentimentos do eu-lírico em relação à pátria.',
      },
      {
        letter: 'D',
        text: 'Há um sentimento de solidão do eu-lírico durante o exílio, marcado de forma mais direta no verso “em cismar – sozinho, à noite”.',
      },
      {
        letter: 'E',
        text: 'Há uma insatisfação do eu-lírico em relação ao aspecto temporal que o faz se voltar de forma saudosa ao passado e projetar o retorno à sua terra natal no futuro.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q05', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2023-q06',
    examId: EXAM_ID,
    originalNumber: 6,
    originalCode: 'UFRR 2023 · Q06',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Coesão Textual — Pronomes Demonstrativos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t4'],
    stem: 'Uma das formas de retomar palavras e porções do texto IV é utilizar os pronomes, que contribuem para a manutenção temática e para a progressão do tema. Uma opção em que o termo destacado desempenha essa função é:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A entidade apontou **que** 16 das 19 categorias de agressões [...].',
      },
      {
        letter: 'B',
        text: '[...] onde houve um crescimento de 109 **para** 256 casos, entre 2018 e 2019.',
      },
      {
        letter: 'C',
        text: '[...] onde houve um crescimento de 109 para 256 casos, **entre** 2018 e 2019.',
      },
      {
        letter: 'D',
        text: '**Essas agressões** são relacionadas à “Violência contra o patrimônio” [...].',
      },
      {
        letter: 'E',
        text: 'Outras cinco categorias **também** sofreram aumento de ocorrências [...].',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q06', correctLetter: null },
    provenance: makeProv(4),
  },
  {
    id: 'ufrr-2023-q07',
    examId: EXAM_ID,
    originalNumber: 7,
    originalCode: 'UFRR 2023 · Q07',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe — Conjunções Coordenativas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t5'],
    stem: 'Considerando o Texto V, as frases “O tempo corria também. Ela nem via.” são exemplos de dois períodos simples, pois se organizam ao redor de um único verbo. Porém, há entre elas uma relação de sentido. O ponto entre essas duas orações pode ser substituído, mantendo-se o sentido entre elas, pela seguinte conjunção coordenativa:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'porque' },
      { letter: 'B', text: 'ou' },
      { letter: 'C', text: 'mas' },
      { letter: 'D', text: 'logo' },
      { letter: 'E', text: 'portanto' },
    ],
    answerKey: { questionId: 'ufrr-2023-q07', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2023-q08',
    examId: EXAM_ID,
    originalNumber: 8,
    originalCode: 'UFRR 2023 · Q08',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Gêneros Textuais e Intencionalidade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t6'],
    stem: 'O texto VI faz parte do domínio discursivo jornalístico e o seu principal objetivo é:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Informar sobre a mobilização de diferentes povos indígenas brasileiros para reivindicar seus direitos, principalmente no que se refere à demarcação de terras indígenas.',
      },
      {
        letter: 'B',
        text: 'Alertar a sociedade sobre os efeitos do marco temporal na demarcação dos territórios indígenas.',
      },
      {
        letter: 'C',
        text: 'Conscientizar a sociedade sobre a importância da demarcação dos territórios indígenas.',
      },
      {
        letter: 'D',
        text: 'Denunciar os crimes cometidos contra os povos indígenas, sobretudo em relação à demarcação de suas terras.',
      },
      {
        letter: 'E',
        text: 'Debater a temática da demarcação de terras indígenas em território nacional.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q08', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2023-q09',
    examId: EXAM_ID,
    originalNumber: 9,
    originalCode: 'UFRR 2023 · Q09',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Semântica das Preposições',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-pt-t6'],
    stem: 'Uma mesma palavra pode expressar sentidos diferentes e estabelecer relações sintáticas distintas. Dessa forma, é CORRETO afirmar que os sentidos do termo **para**, nos fragmentos destacados do texto VI, são, respectivamente:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'finalidade, lugar' },
      { letter: 'B', text: 'explicação, tempo' },
      { letter: 'C', text: 'proporcionalidade, momento' },
      { letter: 'D', text: 'tempo, finalidade' },
      { letter: 'E', text: 'finalidade, tempo' },
    ],
    answerKey: { questionId: 'ufrr-2023-q09', correctLetter: null },
    provenance: makeProv(5),
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    id: 'ufrr-2023-q10',
    examId: EXAM_ID,
    originalNumber: 10,
    originalCode: 'UFRR 2023 · Q10',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana — Relações Métricas no Triângulo Retângulo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma praça de formato retangular, de lados 300 m e 400 m, receberá dois postes de iluminação nos pontos A e B representados na figura a seguir:

A distância entre os dois postes será de:`,
    graphics: [
      {
        id: 'ufrr-2023-g-q10',
        type: 'image',
        imageUrl: '/exam-assets/2023/q10-circunferencia.jpg',
        altText: 'Retângulo de lados 300 e 400 com uma diagonal e duas alturas perpendiculares traçadas dos outros vértices até os pontos A e B sobre a diagonal.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '180 m' },
      { letter: 'B', text: '320 m' },
      { letter: 'C', text: '500 m' },
      { letter: 'D', text: '250 m' },
      { letter: 'E', text: '140 m' },
    ],
    answerKey: { questionId: 'ufrr-2023-q10', correctLetter: null },
    provenance: makeProv(5),
  },
  {
    id: 'ufrr-2023-q11',
    examId: EXAM_ID,
    originalNumber: 11,
    originalCode: 'UFRR 2023 · Q11',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Funções Compostas e Progressões',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Os números $a$, $b$ e $c$ são tais que $b = a+1$ e $c = b+1$. Se $f(x) = 2^x$ e $g(x) = x^2$ podemos afirmar que os números $(g \\circ f)(a)$, $(g \\circ f)(b)$ e $(g \\circ f)(c)$ formam, nesta ordem:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'uma progressão geométrica de razão 1/4.' },
      { letter: 'B', text: 'uma progressão geométrica de razão 4.' },
      { letter: 'C', text: 'uma progressão geométrica de razão 2.' },
      { letter: 'D', text: 'uma progressão aritmética de razão 4.' },
      { letter: 'E', text: 'uma progressão aritmética de razão 2.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q11', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2023-q12',
    examId: EXAM_ID,
    originalNumber: 12,
    originalCode: 'UFRR 2023 · Q12',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Plana — Áreas de Polígonos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma criança montou um mosaico utilizando quatro azulejos em formato de hexágono regular de lado 10 cm. Sua mãe resolveu colocar o mosaico numa moldura retangular, conforme a figura, a seguir.

A área da região interna à moldura, que **não** ficou coberta pelos azulejos é de:`,
    graphics: [
      {
        id: 'ufrr-2023-g-q12',
        type: 'image',
        imageUrl: '/exam-assets/2023/q12-prisma.jpg',
        altText: 'Quatro hexágonos regulares inscritos em uma moldura retangular com região externa sombreada.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$400\\sqrt{3}\\text{ cm}^2$' },
      { letter: 'B', text: '$600\\sqrt{3}\\text{ cm}^2$' },
      { letter: 'C', text: '$1000\\sqrt{3}\\text{ cm}^2$' },
      { letter: 'D', text: '$500\\sqrt{3}\\text{ cm}^2$' },
      { letter: 'E', text: '$200\\sqrt{3}\\text{ cm}^2$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q12', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2023-q13',
    examId: EXAM_ID,
    originalNumber: 13,
    originalCode: 'UFRR 2023 · Q13',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Espacial — Cilindros',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Uma empresa usa cilindros circulares retos com raio da base igual a $r = 4\\text{ cm}$ e altura $h = 8\\text{ cm}$ para a embalagem de certo produto. Por razões técnicas os gestores da empresa decidiram reduzir a altura $h$ do cilindro em 25% e manter o volume original. Como consequência, a nova embalagem cilíndrica deverá possuir uma base com um raio $R$ cuja medida é distinta da medida do raio original $r$. Nas condições do enunciado, para garantir que o volume da embalagem seja o mesmo, a medida do novo raio $R$ deverá ser igual a:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$R = \\dfrac{8\\sqrt{2}}{3}$' },
      { letter: 'B', text: '$R = 5$' },
      { letter: 'C', text: '$R = 8$' },
      { letter: 'D', text: '$R = \\dfrac{8\\sqrt{3}}{3}$' },
      { letter: 'E', text: '$R = \\dfrac{64\\pi}{3}$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q13', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2023-q14',
    examId: EXAM_ID,
    originalNumber: 14,
    originalCode: 'UFRR 2023 · Q14',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Matrizes e Determinantes — Matriz de Vandermonde',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se o determinante da matriz

$$A = \\begin{pmatrix} 1 & 1 & 1 & 1 \\\\ 1 & 2 & 4 & 8 \\\\ 1 & 3 & 9 & 27 \\\\ 1 & x & x^2 & x^3 \\end{pmatrix}$$

é igual a 0 (zero) então, o conjunto de todos os valores que $x$ pode assumir é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'B={1,4,9}' },
      { letter: 'B', text: 'C={1,8,27}' },
      { letter: 'C', text: 'D={2,4,8}' },
      { letter: 'D', text: 'A={1,2,3}' },
      { letter: 'E', text: 'E={3,9,27}' },
    ],
    answerKey: { questionId: 'ufrr-2023-q14', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2023-q15',
    examId: EXAM_ID,
    originalNumber: 15,
    originalCode: 'UFRR 2023 · Q15',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Análise Combinatória — Combinações',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em uma certa cidade, foi realizada uma reunião de 5 vereadores e 4 deputados estaduais. Nessa reunião decidiu-se formar uma comissão de 5 (cinco) membros, escolhidos entre eles, para representá-los em uma visita ao governador do estado. Também se decidiu que a comissão deveria possuir pelo menos 3 (três) vereadores. O número de comissões distintas que podem ser formadas é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '12' },
      { letter: 'B', text: '81' },
      { letter: 'C', text: '5' },
      { letter: 'D', text: '60' },
      { letter: 'E', text: '84' },
    ],
    answerKey: { questionId: 'ufrr-2023-q15', correctLetter: null },
    provenance: makeProv(6),
  },
  {
    id: 'ufrr-2023-q16',
    examId: EXAM_ID,
    originalNumber: 16,
    originalCode: 'UFRR 2023 · Q16',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Números Complexos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O valor de $S$, que é dado pela seguinte expressão:

$$S = \\dfrac{1+2i}{2-i} + \\dfrac{3+4i}{4-3i} + \\dfrac{5+6i}{6-5i} + \\dots + \\dfrac{2023+2024i}{2024-2023i}$$

é igual a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '1011i' },
      { letter: 'B', text: '1012i' },
      { letter: 'C', text: 'i' },
      { letter: 'D', text: '1010i' },
      { letter: 'E', text: '0' },
    ],
    answerKey: { questionId: 'ufrr-2023-q16', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2023-q17',
    examId: EXAM_ID,
    originalNumber: 17,
    originalCode: 'UFRR 2023 · Q17',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Polinômios — Valor Numérico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Se $P(x) = x^6 + 2x^5 - x^4 + x^3 + 2x^2 - 3x - 2$ então o valor de $P(\\sqrt{2} - 1)$ é igual a:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$\\sqrt{2}$' },
      { letter: 'B', text: '$1 + \\sqrt{2}$' },
      { letter: 'C', text: '$-2\\sqrt{2}$' },
      { letter: 'D', text: '$2\\sqrt{2}$' },
      { letter: 'E', text: '$1 - \\sqrt{2}$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q17', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2023-q18',
    examId: EXAM_ID,
    originalNumber: 18,
    originalCode: 'UFRR 2023 · Q18',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica — Cônicas (Hipérbole)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere uma cônica definida pela equação

$$4y^2 - 9x^2 - 36 = 0$$

e as seguintes proposições:

I. A equação da cônica corresponde a uma Hipérbole com focos sobre o eixo y.
II. As coordenadas dos vértices da cônica são dados por $(0,3)$ e $(0,-3)$.
III. A equação da cônica corresponde a uma Elipse com focos sobre o eixo x.
IV. As coordenadas dos focos da cônica são dados por $(\\sqrt{13}, 0)$ e $(-\\sqrt{13}, 0)$.
V. A excentricidade da cônica é igual $\\dfrac{\\sqrt{13}}{3}$.

Podemos afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Somente III e IV são verdadeiras' },
      { letter: 'B', text: 'Somente I e II são verdadeiras' },
      { letter: 'C', text: 'Somente I, II e V são verdadeiras' },
      { letter: 'D', text: 'Somente II e V são verdadeiras' },
      { letter: 'E', text: 'Somente III, IV e V são verdadeiras' },
    ],
    answerKey: { questionId: 'ufrr-2023-q18', correctLetter: null },
    provenance: makeProv(7),
  },

  // ================= BIOLOGIA (Q19–Q27) =================
  {
    id: 'ufrr-2023-q19',
    examId: EXAM_ID,
    originalNumber: 19,
    originalCode: 'UFRR 2023 · Q19',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Fisiologia Humana — Sistema Endócrino e Reprodutor',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'As características sexuais e a produção de gametas estão sob o controle de hormônios produzidos em diferentes órgãos e glândulas do corpo. Em relação ao controle hormonal da reprodução na espécie humana é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O hormônio folículo estimulante (FSH) é produzido pelos ovários e pelos testículos.',
      },
      {
        letter: 'B',
        text: 'Os hormônios luteinizante (LH) e folículo estimulante (FSH) atuam somente nos ovários.',
      },
      {
        letter: 'C',
        text: 'A progesterona e o estrogênio são produzidos no útero durante o ciclo menstrual.',
      },
      {
        letter: 'D',
        text: 'O hormônio folículo estimulante (FSH) estimula o espessamento do endométrio.',
      },
      {
        letter: 'E',
        text: 'O hormônio luteinizante (LH) estimula a produção de testosterona.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q19', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2023-q20',
    examId: EXAM_ID,
    originalNumber: 20,
    originalCode: 'UFRR 2023 · Q20',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Histologia Animal — Tecido Muscular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O corpo humano possui três tipos de tecido muscular: liso, esquelético e cardíaco. Todos os três tecidos possuem a capacidade de contração, porém, cada um apresenta estruturas particulares que permitem diferentes tipos de movimentos. Sobre os tipos de tecido muscular são feitas as seguintes afirmações:

I. A fibra muscular esquelética apresenta numerosas miofibrilas, formadas por filamentos espessos de actina e finos de miosina altamente organizados.
II. As células musculares cardíacas apresentam junções comunicantes (*gap*) que permitem a rápida propagação de sinais elétricos entre elas.
III. As fibras do tecido muscular liso não apresentam estrias transversais aparentes porque não contêm miofibrilas de actina e de miosina.

Considerando as afirmações I, II e III, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I e III são verdadeiras.' },
      { letter: 'B', text: 'II e III são verdadeiras.' },
      { letter: 'C', text: 'I, II e III são verdadeiras.' },
      { letter: 'D', text: 'I e II são verdadeiras.' },
      { letter: 'E', text: 'Apenas I é verdadeira.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q20', correctLetter: null },
    provenance: makeProv(7),
  },
  {
    id: 'ufrr-2023-q21',
    examId: EXAM_ID,
    originalNumber: 21,
    originalCode: 'UFRR 2023 · Q21',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Bioenergética — Fermentação Lática e Metabolismo Oxidativo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A maioria do comportamento e muitas ações fisiológicas, como os batimentos cardíacos e a movimentação de alimento ao longo do trato digestivo, dependem da contração muscular. O processo de contração da fibra muscular ocorre por meio da interação de proteínas especiais que se encontram no seu citoplasma e depende do ATP que essas células produzem.

Considerando as características dos dois processos de produção de ATP na célula muscular, assinale a alternativa INCORRETA.`,
    tableHtml: TABLE_Q21,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '**Fermentação lática:** Fornecimento de ATP para o músculo de forma lenta e contínua. | **Metabolismo oxidativo:** Fornecimento ATP para o músculo de forma rápida e por pouco tempo.',
      },
      {
        letter: 'B',
        text: '**Fermentação lática:** Produção de ATP no citoplasma. | **Metabolismo oxidativo:** Produção de ATP na mitocôndria',
      },
      {
        letter: 'C',
        text: '**Fermentação lática:** Utilização apenas de glicose. | **Metabolismo oxidativo:** Utilização de glicose e ácidos graxos',
      },
      {
        letter: 'D',
        text: '**Fermentação lática:** Menor número de reações químicas | **Metabolismo oxidativo:** Maior número de reações químicas',
      },
      {
        letter: 'E',
        text: '**Fermentação lática:** Pouca quantidade de ATP por molécula de glicose | **Metabolismo oxidativo:** Grande quantidade de ATP por molécula de glicose.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q21', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2023-q22',
    examId: EXAM_ID,
    originalNumber: 22,
    originalCode: 'UFRR 2023 · Q22',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Fisiologia Humana — Sistema Nervoso',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Pode-se definir um sistema nervoso como um conjunto organizado de células (neurônios e células gliais) especializado para a condução repetitiva de sinais elétricos nas e entre as células. Esses sinais passam de células sensoriais e neurônios para outros neurônios e, então, para músculos, glândulas ou outros órgãos que executam ações.”

*(Hill, R.W. et al. Fisiologia Animal 2ª Ed. São Paulo: Artmed, 2012)*

Em relação à organização do sistema nervoso humano é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'possui vários tipos de neurônios distribuídos igualmente entre sistema nervoso central e sistema nervoso periférico.',
      },
      {
        letter: 'B',
        text: 'o sistema nervoso periférico controla processos fisiológicos involuntários enquanto o sistema nervoso central executa os movimentos conscientes.',
      },
      {
        letter: 'C',
        text: 'o sistema nervoso periférico recebe informação das células sensoriais e as transmite para os músculos e glândulas do corpo.',
      },
      {
        letter: 'D',
        text: 'simpática e parassimpática são divisões do sistema nervoso central autônomo.',
      },
      {
        letter: 'E',
        text: 'o sistema nervoso periférico compreende todos os prolongamentos e corpos celulares que se localizam fora do encéfalo e da medula espinhal.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q22', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2023-q23',
    examId: EXAM_ID,
    originalNumber: 23,
    originalCode: 'UFRR 2023 · Q23',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Fisiologia Humana — Sistema Excretor (Néfron)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O rim é o principal órgão excretório dos vertebrados. Sua unidade funcional é o néfron cujo papel é excretar excesso de água e conservar solutos necessários. Um néfron é esquematizado na figura a seguir.

Assinale a afirmativa INCORRETA acerca do funcionamento dessa estrutura em indivíduos saudáveis:`,
    graphics: [
      {
        id: 'ufrr-2023-g-q23',
        type: 'image',
        imageUrl: '/exam-assets/2023/q23-nefron.jpg',
        altText: 'Esquema anatômico de um néfron com partes numeradas: 1 (glomérulo/cápsula), 2 (túbulo contorcido proximal), 3 (alça néfrica/de Henle), 4 (túbulo contorcido distal) e 5 (ducto coletor).',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'Em 1 a pressão do sangue força a filtração no glomérulo com a passagem de água, glicose, aminoácidos, proteínas e células para o filtrado glomerular.',
      },
      {
        letter: 'B',
        text: 'Em 2, osmose, difusão e transporte ativo devolvem substâncias como água, glicose, aminoácidos e íons do filtrado para os capilares sanguíneos.',
      },
      {
        letter: 'C',
        text: 'Em 3 ocorre osmose e reabsorção de água do filtrado glomerular para os capilares sanguíneos.',
      },
      {
        letter: 'D',
        text: 'Em 4, o transporte ativo executado pelas células do túbulo remove excretas dos capilares, lançando-as no filtrado.',
      },
      {
        letter: 'E',
        text: 'Ao sair de 5, a urina produzida, formada predominantemente por água, ureia e outros solutos, é conduzida ao ureter.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q23', correctLetter: null },
    provenance: makeProv(8),
  },
  {
    id: 'ufrr-2023-q24',
    examId: EXAM_ID,
    originalNumber: 24,
    originalCode: 'UFRR 2023 · Q24',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Reprodução das Angiospermas e Interpretação de Gráficos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A germinação do grão de pólen no estigma da flor consiste no desenvolvimento de um tubo polínico que cresce para dentro do estilete até alcançar um óvulo. Muitas espécies produzem grande quantidade de pólen. No entanto, devido às perdas pelo transporte, através do vento ou na alimentação de insetos, nem todos germinam. Estudos sobre a viabilidade dos grãos de pólen fornecem informações que podem ser utilizadas em processos de conservação genética, assim como na agricultura e em programas de melhoramento. Quanto mais alta for a viabilidade polínica, maior será o sucesso da fertilização. Numa série de experimentos foi avaliado o efeito de dois nutrientes, nitrato de cálcio e ácido bórico, na germinação de grãos de pólen de espécies de *Physalis*. O experimento consistiu em germinar amostras de grãos de pólen, num meio apropriado, na ausência e na presença de diferentes concentrações desses nutrientes, e observar ao microscópio o número de grãos que geraram tubo polínico em cada situação.”

*(Adaptado de: Silva D. F. et al.Viabilidade polínica e quantificação de grãos de pólen em espécies de fisális. Revista Ciência Agronômica, v. 48, n. 2, p. 365-373, abr-jun, 2017. disponível em http://www.ccarevista.ufc.br/seer/index.php/ccarevista/article/view/4401 acesso em 15/9/2022).*

Os gráficos mostram os resultados obtidos para uma das espécies estudadas.

Supondo que o efeito da pulverização de cultivos de *Physalis* com fertilizante contendo os nutrientes testados seja equivalente aos resultados obtidos na germinação *in vitro*, é CORRETO afirmar que:`,
    graphics: [
      {
        id: 'ufrr-2023-g-q24-nitrato',
        type: 'image',
        imageUrl: '/exam-assets/2023/q24-nitrato-calcio.jpg',
        caption: 'Nitrato de cálcio: porcentagem de germinação (%) × concentração de nitrato de cálcio (mg/L).',
        altText: 'Gráfico Nitrato de cálcio mostrando curva crescente de ~15% (0 mg/L) até ~45% em torno de 500–600 mg/L e leve declínio até 1000 mg/L.',
      },
      {
        id: 'ufrr-2023-g-q24-acido',
        type: 'image',
        imageUrl: '/exam-assets/2023/q24-acido-borico.jpg',
        caption: 'Ácido bórico: Porcentagem de germinação (%) × concentração de ácido bórico (mg/L).',
        altText: 'Gráfico Ácido bórico mostrando curva crescente de ~48% (0 mg/L) até ~61% por volta de 500 mg/L e queda até ~32% em torno de 1200 mg/L.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'a presença tanto do ácido bórico quanto do nitrato de cálcio deverá reduzir a produção de sementes nos frutos.',
      },
      {
        letter: 'B',
        text: 'a presença de nitrato de cálcio deverá aumentar a produção de sementes enquanto o acréscimo de ácido bórico deverá reduzir essa produção.',
      },
      {
        letter: 'C',
        text: 'o aumento da produção de sementes devido ao nitrato de cálcio deverá ser de 45% e devido ao ácido bórico deverá ser de 60%.',
      },
      {
        letter: 'D',
        text: 'o aumento da produção de sementes, devido ao nitrato de cálcio, deverá ser maior do que o devido ao ácido bórico.',
      },
      {
        letter: 'E',
        text: 'a quantidade de sementes produzidas deverá sofrer um aumento final de aproximadamente 30% com qualquer um dos dois nutrientes.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q24', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2023-q25',
    examId: EXAM_ID,
    originalNumber: 25,
    originalCode: 'UFRR 2023 · Q25',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Ecologia — Fluxo de Energia e Ciclo da Matéria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O estudo dos ecossistemas diz respeito à forma como a energia e os materiais são transferidos entre os seres vivos e entre estes e o ambiente. A respeito desses conceitos foram feitas as seguintes afirmações:

I. A energia luminosa é captada pelos seres vivos no processo da fotossíntese e transferida ao longo das cadeias alimentares.
II. Nas cadeias alimentares a energia disponível diminui de um nível trófico para o outro, enquanto a matéria orgânica transferida se acumula aumentando em direção aos níveis mais elevados.
III. Num ecossistema a matéria orgânica circula dos produtores para consumidores e decompositores e destes para os produtores novamente.

Considerando as afirmações I, II e III, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Somente I e II são verdadeiras.' },
      { letter: 'B', text: 'Somente II e III são verdadeiras.' },
      { letter: 'C', text: 'Somente I e III são verdadeiras.' },
      { letter: 'D', text: 'I, II e III são verdadeiras.' },
      { letter: 'E', text: 'Somente I é verdadeira.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q25', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2023-q26',
    examId: EXAM_ID,
    originalNumber: 26,
    originalCode: 'UFRR 2023 · Q26',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Genética — Herança Ligada ao Sexo e Heredogramas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O heredograma mostra o padrão de herança de uma doença ligada ao sexo.

Assinale a alternativa que contém apenas indivíduos normais portadores obrigatórios do alelo para a doença, em cada geração indicada.`,
    tableHtml: TABLE_Q26,
    graphics: [
      {
        id: 'ufrr-2023-g-q26',
        type: 'image',
        imageUrl: '/exam-assets/2023/q26-heredograma.jpg',
        altText: 'Heredograma com gerações I (1 homem normal, 2 mulher normal), II (1 mulher normal, 2 homem normal, 3 homem afetado, 4 mulher normal, 5 mulher normal, 6 homem normal), III (1 mulher normal, 2 mulher normal, 3 homem normal, 4 mulher normal, 5 homem normal, 6 mulher normal) e IV (1 homem afetado, 2 mulher normal).',
      },
    ],
    alternatives: [
      { letter: 'A', text: '**G II:** 1 e 4 | **G III:** 2 e 6' },
      { letter: 'B', text: '**G II:** 1 e 5 | **G III:** 2 e 4' },
      { letter: 'C', text: '**G II:** 4 e 5 | **G III:** 2 e 4' },
      { letter: 'D', text: '**G II:** 1 e 5 | **G III:** 4 e 6' },
      { letter: 'E', text: '**G II:** 5 | **G III:** 2, 4 e 6' },
    ],
    answerKey: { questionId: 'ufrr-2023-q26', correctLetter: null },
    provenance: makeProv(9),
  },
  {
    id: 'ufrr-2023-q27',
    examId: EXAM_ID,
    originalNumber: 27,
    originalCode: 'UFRR 2023 · Q27',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Biologia',
      topic: 'Evolução — Neodarwinismo e Especiação Insular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A fauna das ilhas de pequeno porte é em geral pouco diversificada e muitos animais insulares só ocorrem naquela ilha. Um exemplo, no Brasil, é a jararaca-ilhoa, espécie de serpente venenosa parente das espécies de jararacas do continente, que vive apenas na ilha da Queimada Grande, em São Paulo. Em espécies de jararacas do continente, os indivíduos jovens têm hábitos arborícolas, mas os adultos são quase exclusivamente terrestres. Já os adultos da jararaca-ilhoa são frequentemente encontrados sobre árvores e arbustos, mas também utilizam o chão da mata. Além de ser mais arborícola, a jararaca-ilhoa é diurna. Ao contrário da maioria das jararacas do continente, cujos adultos se alimentam principalmente de roedores, a dieta de adultos da jararaca-ilhoa é baseada em pássaros, já que não há pequenos mamíferos terrestres (roedores, marsupiais) na ilha. Outra característica da jararaca-ilhoa é a ação do veneno, cinco vezes mais potente para matar uma ave do que o da jararaca comum.

De acordo com o neodarwinismo, assinale a alternativa que explica a resposta adaptativa das jararacas-ilhoas às condições ambientais da ilha.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A pressão do ambiente gerou alterações no material genético das primeiras jararacas da ilha permitindo que elas se adaptassem.',
      },
      {
        letter: 'B',
        text: 'O ambiente da ilha, desprovido de pequenos mamíferos, selecionou os indivíduos capazes de se alimentar de aves.',
      },
      {
        letter: 'C',
        text: 'A ausência de pequenos mamíferos no solo da ilha modificou o comportamento dos adultos obrigando-os a subir em árvores para se alimentar.',
      },
      {
        letter: 'D',
        text: 'A necessidade de se alimentar de aves fez com que as jararacas-ilhoas desenvolvessem um veneno mais potente e se tornassem arborícolas.',
      },
      {
        letter: 'E',
        text: 'As jararacas-ilhoas podem ter cruzado com outras espécies de serpentes mais adaptadas, existentes na ilha, produzindo descendentes com características híbridas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q27', correctLetter: null },
    provenance: makeProv(10),
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    id: 'ufrr-2023-q28',
    examId: EXAM_ID,
    originalNumber: 28,
    originalCode: 'UFRR 2023 · Q28',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Cinemática — Movimento Uniformemente Variado (Gráfico S×t)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O gráfico abaixo representa o movimento de uma partícula, onde S é a posição e t o tempo. Sobre esse movimento é CORRETO afirmar que:',
    graphics: [
      {
        id: 'ufrr-2023-g-q28',
        type: 'image',
        imageUrl: '/exam-assets/2023/q28-grafico-st.jpg',
        altText: 'Gráfico parabólico S em função de t com concavidade voltada para cima, interceptando o eixo S em valor positivo em t=0 e atingindo o vértice negativo em t=t1.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'De $t=0$ até $t=t_1$ o movimento da partícula é acelerado.',
      },
      {
        letter: 'B',
        text: 'De $t=0$ até $t=t_1$ a aceleração é negativa.',
      },
      {
        letter: 'C',
        text: 'De $t=0$ até $t=t_1$ o movimento da partícula é retardado.',
      },
      { letter: 'D', text: 'A trajetória da partícula é curvilínea.' },
      { letter: 'E', text: 'Em $t=t_1$ a aceleração é zero.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q28', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2023-q29',
    examId: EXAM_ID,
    originalNumber: 29,
    originalCode: 'UFRR 2023 · Q29',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Cinemática — Lançamento Oblíquo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Uma bola de tênis é lançada para cima, em uma direção que faz um ângulo $\\theta$ com a direção horizontal. Sabendo que o módulo da velocidade inicial da bola é $V_0$, que a aceleração da gravidade é $g$, que a resistência do ar deve ser desconsiderada e que $2\\operatorname{sen}\\theta \\cos\\theta = \\operatorname{sen} 2\\theta$, a distância horizontal máxima $x_m$ alcançada pela bola será dada por:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '$x_m = V_0 \\cos\\theta - g\\operatorname{sen} 2\\theta$',
      },
      {
        letter: 'B',
        text: '$x_m = \\dfrac{2V_0^2 \\cos\\theta}{g} - \\operatorname{sen} 2\\theta$',
      },
      {
        letter: 'C',
        text: '$x_m = \\dfrac{2V_0 \\operatorname{sen} 2\\theta \\cos\\theta}{g}$',
      },
      {
        letter: 'D',
        text: '$x_m = \\dfrac{V_0^2}{g} + \\operatorname{sen} 2\\theta \\cos\\theta$',
      },
      {
        letter: 'E',
        text: '$x_m = \\dfrac{V_0^2 \\operatorname{sen} 2\\theta}{g}$',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q29', correctLetter: null },
    provenance: makeProv(10),
  },
  {
    id: 'ufrr-2023-q30',
    examId: EXAM_ID,
    originalNumber: 30,
    originalCode: 'UFRR 2023 · Q30',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Hidrostática — Empuxo (Princípio de Arquimedes)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um náufrago, perdido no mar e cansado de nadar, avista um tronco de árvore boiando e sobe nele para se salvar. Sabendo que, para que o homem consiga se manter totalmente sobre a superfície, é necessário que um terço do tronco continue acima da superfície, a massa do homem deve ser proporcional a:

Dados: $\\rho_a$ é a densidade da água do mar; $\\rho_t$ = é a densidade do tronco)`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '$\\left(\\dfrac{\\rho_a}{\\rho_t} - \\dfrac{2}{3}\\right)$ da massa do tronco.',
      },
      {
        letter: 'B',
        text: '$\\left(2\\rho_a - \\dfrac{1}{3\\rho_t}\\right)$ da massa do tronco.',
      },
      {
        letter: 'C',
        text: '$(2\\rho_a 3\\rho_t - 1)$ da massa do tronco.',
      },
      {
        letter: 'D',
        text: '$\\left(\\dfrac{2}{3}\\rho_a - \\rho_t\\right)$ da massa do tronco.',
      },
      {
        letter: 'E',
        text: '$\\left(\\dfrac{2\\rho_a}{3\\rho_t} - 1\\right)$ da massa do tronco.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q30', correctLetter: null },
    editorialNote: 'Notação original “ρt = é a densidade do tronco)” mantida no enunciado.',
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2023-q31',
    examId: EXAM_ID,
    originalNumber: 31,
    originalCode: 'UFRR 2023 · Q31',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Termologia — Escalas Termométricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um estudante de Física resolveu criar sua própria escala termométrica e seu próprio termômetro. Para isso, utilizou um tubo de vidro contendo mercúrio. Ele tomou como pontos fixos o gelo fundente e a água em ebulição. Ao colocar o tubo em contato com o gelo fundente, e após esperar que fosse atingido o equilíbrio térmico, percebeu que a coluna de mercúrio atingia uma altura de 2 cm. Ele atribuiu o valor de $30^\\circ$ a essa temperatura. Repetindo o procedimento para a água em ebulição, viu que a coluna de mercúrio atingia uma altitude de 11 cm. Para a temperatura da água em ebulição atribuiu o valor de $120^\\circ$. Sabendo que a relação entre a altura da coluna de mercúrio e a temperatura é uma função linear, qual temperatura corresponde a uma altura de 7 cm da coluna de mercúrio, na escala do estudante?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '80 graus' },
      { letter: 'B', text: '95 graus' },
      { letter: 'C', text: '85 graus' },
      { letter: 'D', text: '90 graus' },
      { letter: 'E', text: '75 graus' },
    ],
    answerKey: { questionId: 'ufrr-2023-q31', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2023-q32',
    examId: EXAM_ID,
    originalNumber: 32,
    originalCode: 'UFRR 2023 · Q32',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Óptica Geométrica — Refração e Reflexão Total',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um raio de luz monocromática, proveniente de um meio de índice de refração absoluto $n_2 = 2$, incide em um meio de índice de refração absoluto $n_1 = \\sqrt{3}$. Quando o raio incidente atinge o valor máximo do ângulo de incidência, o ângulo formado entre o raio refratado e uma reta tangente à superfície de separação entre os meios será de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$30^\\circ$' },
      { letter: 'B', text: '$60^\\circ$' },
      { letter: 'C', text: '$45^\\circ$' },
      { letter: 'D', text: '$90^\\circ$' },
      { letter: 'E', text: '$75^\\circ$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q32', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2023-q33',
    examId: EXAM_ID,
    originalNumber: 33,
    originalCode: 'UFRR 2023 · Q33',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Ondulatória, Termodinâmica e Óptica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Leia as assertivas abaixo e assinale a INCORRETA.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O Efeito Doppler é um fenômeno sonoro que se caracteriza pelo aumento da frequência da onda percebida pelo observador, quando a fonte se afasta dele com uma velocidade v.',
      },
      {
        letter: 'B',
        text: 'A velocidade de uma onda em uma corda esticada depende da massa da corda.',
      },
      {
        letter: 'C',
        text: 'Numa transformação gasosa isotérmica, em um gás ideal, o trabalho e o calor trocados com o meio externo são iguais.',
      },
      {
        letter: 'D',
        text: 'A máquina ideal de Carnot, operando entre duas temperaturas, terá o mesmo rendimento independentemente do fluido operante.',
      },
      {
        letter: 'E',
        text: 'Nos espelhos planos, a imagem é sempre simétrica do objeto em relação ao espelho.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q33', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2023-q34',
    examId: EXAM_ID,
    originalNumber: 34,
    originalCode: 'UFRR 2023 · Q34',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletromagnetismo — Força Magnética sobre Cargas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere duas partículas eletricamente carregadas 1 e 2, de massas idênticas, entrando em uma região de campo magnético uniforme, com a mesma velocidade. Devido à interação entre o campo magnético e as partículas, elas descrevem uma trajetória circular nesta região. As trajetórias das partículas são distintas, conforme a figura, a seguir.

Assinale a alternativa que representa a CORRETA relação entre cargas destas partículas.`,
    graphics: [
      {
        id: 'ufrr-2023-g-q34',
        type: 'image',
        imageUrl: '/exam-assets/2023/q34-campo-magnetico.jpg',
        altText: 'Região de campo magnético uniforme saindo do plano (círculos com ponto central), com trajetória 1 curvando-se à direita com raio menor e trajetória 2 curvando-se à esquerda com raio maior.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: '$| q_1 | > | q_2 |$, sendo $q_1$ negativa e $q_2$ positiva;',
      },
      {
        letter: 'B',
        text: '$| q_1 | < | q_2 |$, sendo $q_1$ positiva e $q_2$ negativa;',
      },
      {
        letter: 'C',
        text: '$| q_1 | > | q_2 |$, sendo $q_1$ positiva e $q_2$ negativa;',
      },
      {
        letter: 'D',
        text: '$| q_1 | < | q_2 |$, sendo $q_1$ negativa e $q_2$ positiva;',
      },
      {
        letter: 'E',
        text: '$| q_1 | = | q_2 |$, sendo $q_1$ negativa e $q_2$ positiva;',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q34', correctLetter: null },
    provenance: makeProv(11),
  },
  {
    id: 'ufrr-2023-q35',
    examId: EXAM_ID,
    originalNumber: 35,
    originalCode: 'UFRR 2023 · Q35',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrodinâmica — Potência Elétrica e Disjuntores',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma família planeja utilizar seus eletrodomésticos na cozinha de sua casa conectados a um circuito de 120 V, com um disjuntor de 15 A. Eles possuem: uma cafeteira de 850 W, uma *air fryer* de 900 W, um forno de micro-ondas de 1200 W e um forno elétrico de 1900 W.

Quais desses aparelhos podem ser operados simultaneamente sem desarmar o disjuntor?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Cafeteira, micro-ondas e *air fryer*;' },
      { letter: 'B', text: 'Micro-ondas e *air fryer*;' },
      { letter: 'C', text: 'Cafeteira e micro-ondas;' },
      { letter: 'D', text: 'Cafeteira e *air fryer*;' },
      { letter: 'E', text: 'Forno elétrico e cafeteira;' },
    ],
    answerKey: { questionId: 'ufrr-2023-q35', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2023-q36',
    examId: EXAM_ID,
    originalNumber: 36,
    originalCode: 'UFRR 2023 · Q36',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Física',
      topic: 'Eletrostática — Trabalho e Potencial Elétrico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Uma carga negativa se move através de um campo elétrico de tal forma que sua velocidade diminui, perdendo 100J de energia cinética. A mudança no potencial elétrico experimentada pela carga é de -10 volts. Considere que uma carga positiva, com dobro da magnitude da primeira carga, se deslocou entre os mesmos dois pontos do campo elétrico. Em relação à carga positiva, qual das alternativas abaixo mostra, CORRETA e respectivamente, os módulos da carga, da variação do potencial elétrico e da variação da energia.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '10 C, 10 V e 200 J' },
      { letter: 'B', text: '20 C, 10 V; 200 J' },
      { letter: 'C', text: '20 C, 5 V, 100 J' },
      { letter: 'D', text: '10 C, 5 V, 50 J' },
      { letter: 'E', text: '20 C, 20 V, 400 J' },
    ],
    answerKey: { questionId: 'ufrr-2023-q36', correctLetter: null },
    provenance: makeProv(12),
  },

  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    id: 'ufrr-2023-q37',
    examId: EXAM_ID,
    originalNumber: 37,
    originalCode: 'UFRR 2023 · Q37',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geologia — Províncias Geológicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Os processos tectônicos condicionam estruturas na superfície das terras emersas do planeta. Elas podem ser classificadas em três grandes províncias geológicas, ou seja, áreas com a mesma origem e formação geológica(...)” (MOREIRA&SENE, 2016:122).

Nesse contexto, assinale a alternativa que apresenta, CORRETAMENTE, três exemplos de grandes províncias geológicas.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Bacias Sedimentares, Depressões e Serras.',
      },
      {
        letter: 'B',
        text: 'Escudos Cristalinos, Escarpas e Morros.',
      },
      {
        letter: 'C',
        text: 'Depressões, Montanhas e Serras.',
      },
      {
        letter: 'D',
        text: 'Dobramentos Modernos, Escarpas e Escudos Cristalinos.',
      },
      {
        letter: 'E',
        text: 'Bacias Sedimentares, Escudos Cristalinos e Dobramentos Modernos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q37', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2023-q38',
    examId: EXAM_ID,
    originalNumber: 38,
    originalCode: 'UFRR 2023 · Q38',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Cartografia — Escala Cartográfica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Para se trabalhar com mapas é imprescindível usar adequadamente a escala cartográfica, que representa numericamente ou graficamente a proporção entre o fenômeno e o lugar que se deseja destacar. Sobre a escala cartográfica é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Quanto menor a escala, maior o nível de detalhamento da área que se deseja representar.',
      },
      {
        letter: 'B',
        text: 'O uso da escala cartográfica, embora seja importante, não é obrigatória na confecção de mapas.',
      },
      {
        letter: 'C',
        text: 'Quanto maior a escala, menor o nível de detalhes da área que se deseja representar.',
      },
      {
        letter: 'D',
        text: 'Quanto maior a escala, maior o nível de detalhamento da área que se deseja representar.',
      },
      {
        letter: 'E',
        text: 'A escala cartográfica não prediz o nível de detalhamento das áreas que se deseja representar.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q38', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2023-q39',
    examId: EXAM_ID,
    originalNumber: 39,
    originalCode: 'UFRR 2023 · Q39',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Climatologia — Clima Equatorial e Climograma',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A ciência que estuda os tipos climáticos chama-se climatologia; ela é responsável por aglutinar as características climáticas de cada lugar ou região para defini-lo e diferenciá-lo das áreas do entorno. Acerca do tipo climático da região norte do Brasil, mais especificamente da cidade de Manaus-AM, e utilizando o climograma (gráfico que destaca as variações de temperatura e índices pluviométricos ao longo de um ano) a seguir como referência, assinale a alternativa CORRETA.',
    graphics: [
      {
        id: 'ufrr-2023-g-q39',
        type: 'image',
        imageUrl: '/exam-assets/2023/q39-climograma-manaus.jpg',
        caption: 'Fonte: <http://blog.portalpositivo.com.br/geodago/2016/08/21/climas-do-brasil-ibge/ > Acesso em 15/09/2022.',
        altText: 'Climograma "Clima equatorial - Manaus (AM)" exibindo precipitação mensal elevada (entre ~150 mm e ~450 mm) e linha de temperatura média constante próxima de 25 °C ao longo dos 12 meses.',
      },
    ],
    alternatives: [
      {
        letter: 'A',
        text: 'Trata-se de um clima com chuvas abundantes (na maioria das cidades) e bem distribuídas ao longo do ano e temperatura média em torno de 25 graus.',
      },
      {
        letter: 'B',
        text: 'Trata-se de um clima com poucas chuvas ao longo do ano e temperatura média em torno de 21 graus.',
      },
      {
        letter: 'C',
        text: 'Trata-se de um clima seco no inverno, ou seja, poucas chuvas durante essa estação e temperatura média em torno de 16 graus.',
      },
      {
        letter: 'D',
        text: 'Trata-se de um clima quente e seco, com média de temperaturas em torno de 33 graus.',
      },
      {
        letter: 'E',
        text: 'Trata-se de um clima úmido e frio, com chuvas concentradas exclusivamente nos meses de junho, julho e agosto e com média de temperaturas em torno de 28 graus.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q39', correctLetter: null },
    provenance: makeProv(12),
  },
  {
    id: 'ufrr-2023-q40',
    examId: EXAM_ID,
    originalNumber: 40,
    originalCode: 'UFRR 2023 · Q40',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Agrária Brasileira',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em relação à atividade agropecuária é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A área plantada da soja no Brasil decresceu de 38,5 milhões de hectares em 2009/2010 para cerca de 23,5 milhões de hectares em 2020/2021.',
      },
      {
        letter: 'B',
        text: 'Sobre a cultura da soja, Estados Unidos e Brasil estão entre os maiores produtores mundiais, sendo que o Brasil é o maior exportador e a China é o maior importador.',
      },
      {
        letter: 'C',
        text: 'Sobre a cultura do arroz, observa-se um crescimento da área plantada de 1.6 milhão de hectares em 2014/2015 para cerca de 2.2 milhões de hectares para o período 2019/2020.',
      },
      {
        letter: 'D',
        text: 'Sobre a cultura do cacau, existe uma tendência de enfraquecimento da produção no Bioma Pampa, onde o principal produtor é a Bahia. No Bioma Mata Atlântica, é o estado do Pará o principal produtor.',
      },
      {
        letter: 'E',
        text: 'Nas áreas do Sul e Sudeste do Brasil, que compreendem a região do Matopiba, parte das dificuldades climáticas é contornada com o elevado nível de tecnologia.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q40', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2023-q41',
    examId: EXAM_ID,
    originalNumber: 41,
    originalCode: 'UFRR 2023 · Q41',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Urbanização Brasileira — Milton Santos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Alcançamos, neste século, a urbanização da sociedade e a urbanização do território, depois de longo período de urbanização social e territorialmente seletiva”.

*(Santos, M. A urbanização brasileira. São Paulo: Edusp, 2008, p. 9)*

Sobre o processo de urbanização brasileiro, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O processo de urbanização é caracterizado pela concentração de pessoa em zonas rurais, bem como pela difusão de comportamentos tipificados como urbanos.',
      },
      {
        letter: 'B',
        text: 'Recentemente, o Estado de São Paulo delimitou o que chama de macrometrópole paulista compreendendo oito regiões metropolitanas da região Sudeste.',
      },
      {
        letter: 'C',
        text: 'A expansão do meio técnico-científico-informacional ocorre de forma mais intensa nas cidades pequenas, incorporando de forma paulatina as metrópoles e cidades médias.',
      },
      {
        letter: 'D',
        text: 'A metropolização contemporânea está apoiada na crescente mercantilização e financeirização da vida econômica e social, onde o sistema de objetos da globalização impulsiona a expansão física e a fragmentação do espaço urbanizado.',
      },
      {
        letter: 'E',
        text: 'Desde os anos 1950, ocorre um intenso fluxo comercial e migração de população das metrópoles em direção às cidades pequenas, que são as cidades que mais concentram empresas dos setores mais dinâmicos e inovadores.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q41', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2023-q42',
    examId: EXAM_ID,
    originalNumber: 42,
    originalCode: 'UFRR 2023 · Q42',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Industrialização de São Paulo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O Estado de São Paulo recebeu grandes levas de migração a partir de 1950. Esse fato deveu-se à industrialização nascente, que atraiu pessoas que estavam em busca de estabilidade financeira e melhores condições de vida, sobretudo na capital paulista.

Entre as alternativas a seguir, assinale aquela que explica, CORRETAMENTE, o fato de São Paulo ter se tornado um dos primeiros estados brasileiros a se industrializar.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O clima paulista associado à grande disponibilidade de recursos minerais foram fundamentais para o seu desenvolvimento industrial.',
      },
      {
        letter: 'B',
        text: 'A estrutura de transporte e portos e o desenvolvimento de sistema bancário herdados do período do ciclo do café foram fundamentais para o seu desenvolvimento industrial.',
      },
      {
        letter: 'C',
        text: 'O fato de São Paulo ser um estado centralizado no mapa, favorecendo o escoamento da produção industrial.',
      },
      {
        letter: 'D',
        text: 'A população paulista ser constituída em sua maioria por estrangeiros, sobretudo japoneses, que imigravam para o país exclusivamente para desenvolver a industrialização naquele local.',
      },
      {
        letter: 'E',
        text: 'Devido ao imenso volume de recursos financeiros adquiridos através de empréstimos chineses, em troca da facilidade de venda de produtos nos territórios internacionais.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q42', correctLetter: null },
    provenance: makeProv(13),
  },
  {
    id: 'ufrr-2023-q43',
    examId: EXAM_ID,
    originalNumber: 43,
    originalCode: 'UFRR 2023 · Q43',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geopolítica — Guerra da Ucrânia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere as assertivas a seguir sobre a guerra deflagrada pela invasão da Rússia à Ucrânia, em 2022.

I. Um dos elementos que explica a invasão da Ucrânia pela Rússia, em 2022, foi a expansão da Otan pelo Leste Europeu, uma aliança militar formada no contexto do pós II Guerra, somada à intensão e possível adesão da Ucrânia à aliança militar.
II. Dentre as muitas acusações inferidas pelo presidente russo Vladimir Putin para justificar a invasão à Ucrânia está a de que o governo ucraniano promove genocídio contra ucranianos de origem étnica russa que vivem nas regiões separatistas de Donetsk e Luhansk.
III. Diante da invasão Russa à Ucrânia, diversos países impuseram sanções econômicas, que por sua vez, produziu a resposta russa através de sanções ao fornecimento de gás, do qual, muitos países do continente americano apresentam extrema dependência.

Em relação a essas assertivas é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I e II estão incorretas e III está correta.' },
      { letter: 'B', text: 'I e III estão incorretas e II está correta.' },
      { letter: 'C', text: 'I está correta e II e III estão incorretas.' },
      { letter: 'D', text: 'I e III estão corretas e II está incorreta.' },
      { letter: 'E', text: 'I e II estão corretas e III está incorreta.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q43', correctLetter: null },
    editorialNote: 'Grafia original “intensão” no item I preservada.',
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2023-q44',
    examId: EXAM_ID,
    originalNumber: 44,
    originalCode: 'UFRR 2023 · Q44',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Regional — Economia de Roraima',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em relação às dinâmicas econômicas do Estado de Roraima, é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Pacaraima é o centro dinâmico do Estado, concentrando parte significativa de bens e serviços, tanto públicos, quanto privados. Além disso, concentra a maior parte dos estabelecimentos industriais do Estado.',
      },
      {
        letter: 'B',
        text: 'O rendimento nominal mensal domiciliar per capita da população residente, em 2021, esteve em torno de R$ 1.446,00, colocando o Estado na 13º posição no conjunto das unidades federativas.',
      },
      {
        letter: 'C',
        text: 'Em 2021, a soja representou mais de 20% no conjunto dos produtos exportados, enquanto que geradores elétricos giratórios e suas partes representaram mais de 60% dos produtos importados.',
      },
      {
        letter: 'D',
        text: 'A Colômbia é o principal país consumidor dos bens exportados por Roraima, principalmente de produtos do gênero alimentício.',
      },
      {
        letter: 'E',
        text: 'Nos sete primeiros meses de 2021, Índia, Turquia e China foram, respectivamente, os países que o Estado mais realizou importações, considerando-se os valores acumulados para o período.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q44', correctLetter: null },
    provenance: makeProv(14),
  },
  {
    id: 'ufrr-2023-q45',
    examId: EXAM_ID,
    originalNumber: 45,
    originalCode: 'UFRR 2023 · Q45',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Geografia',
      topic: 'Revolução 4.0 e Divisão do Trabalho',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O avanço da 4ª Revolução Industrial está produzindo alterações em diferentes dimensões da sociedade. Dentre os impactos, observam-se as transformações no processo produtivo, somadas a transformações nas formas de trabalho, bem como as formas de emprego. Sobre a relação entre a 4ª revolução Industrial e a divisão do trabalho, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Um dos resultados do avanço da Revolução 4.0 é a emergência de trabalho por e para plataformas digitais, que vem promovendo aquilo que está sendo chamado de “uberização do trabalho”.',
      },
      {
        letter: 'B',
        text: 'O uso ampliado da inteligência artificial pode ampliar a divisão internacional do trabalho, cujos resultados podem aumentar as distâncias entre nações, sobretudo aquelas mais pobres e tecnicamente atrasadas.',
      },
      {
        letter: 'C',
        text: 'Do ponto de vista trabalhista, a flexibilidade permitida pelo uso intenso de tecnologias informáticas estão produzindo alterações nas relações de emprego, que igualmente tendem a ser mais flexíveis, onde o foco está mais na produtividade do que, o tempo de trabalho do empregado.',
      },
      {
        letter: 'D',
        text: 'Outro impacto está na relação com a representação sindical, visto que há uma tendência à pulverização dos sindicatos, à fragmentação dos trabalhadores, e ao enfraquecimento das ações coletivas.',
      },
      {
        letter: 'E',
        text: 'As atuais transformações produzidas pelo intenso uso de tecnologias, que está reformulando o mundo do trabalho, é resultado do movimento a partir da década de 1930, onde, naquele momento, as grandes indústrias foram gradativamente incorporando a microeletrônica e a conectividade em rede ao sistema produtivo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q45', correctLetter: null },
    provenance: makeProv(14),
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    id: 'ufrr-2023-q46',
    examId: EXAM_ID,
    originalNumber: 46,
    originalCode: 'UFRR 2023 · Q46',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Idade Média — Urbanização Medieval',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Mas esse termo, a banalidade, diz respeito também ao território urbano e, sobretudo, suburbano. A partir do século X, mas principalmente do XI, é o grande período de urbanização – prefiro utilizar esse termo mais do que o de renascimento urbano, já que penso que, salvo exceção, não há continuidade entre a Idade Média e a Antiguidade.”

*(LE GOFF, Jacques. Por amor às cidades: conversações com Jean Lebrun. São Paulo: UNESP, 1998, p. 16.)*

A respeito do tema tratado no fragmento de texto acima, podemos afirmar CORRETAMENTE que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O desenvolvimento urbano faz-se a partir de núcleos, os quais surgem a partir de domínios eclesiásticos, episcopais ou por senhores leigos, que se consolidam em construções como Mosteiros e Castelos.',
      },
      {
        letter: 'B',
        text: 'O renascimento urbano retomou antigos projetos imperiais do período Romano, tanto que receberam o nome de Renascimento, pois tentaram terminar obras que haviam sido abandonadas por conta das invasões bárbaras.',
      },
      {
        letter: 'C',
        text: 'Durante a Idade Média, as cidades deixaram de existir, pois toda a vida social era desenvolvida em ambientes rurais, a ponto das feiras de comércio terem sido o único espaço de convivência mais numerosa.',
      },
      {
        letter: 'D',
        text: 'As Igrejas foram construções que não tiveram qualquer importância no desenvolvimento urbano, já que durante o período, somente religiosos podiam adentrar a esses espaços, restando aos fiéis, observar os vitrais.',
      },
      {
        letter: 'E',
        text: 'A construção de centros urbanos decorre de determinações reais e papais que aproveitavam as cidades como local do exercício do poder, pois serviam como entreposto da cobrança de impostos, como as côngruas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q46', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2023-q47',
    examId: EXAM_ID,
    originalNumber: 47,
    originalCode: 'UFRR 2023 · Q47',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Idade Média — Sistema Feudal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“[No sistema feudal] Enquanto o vassalo jurava fidelidade e obediência ao senhor por toda a vida, o chefe ou patrono de um grupo de vassalos concedia a eles habitação, roupa, comida e equipamentos. Às vezes, o senhor, em troca de remuneração em bens, cedia ao vassalo uma terra e transferia para ele a obrigação de manter-se”.

*(Fonte: MICELI, Paulo. O feudalismo. 3 ed. Campinas: UNICAMP, 1988, p. 37.)*

A respeito do Sistema Feudal, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A partir do século XIII, os tributos ligados aos *feudos* foram chamados de *Cota Vencida*, um tipo de imposto cobrado pelos senhores feudais mesmo que não houvesse excedente na colheita final.',
      },
      {
        letter: 'B',
        text: 'O chefe ou patrono de um grupo de vassalos aplicava severas penas chamadas de *Iudicium ad Furtum*, caso estes servos reservassem secretamente para si parte da colheita destinada ao lucro do senhor feudal.',
      },
      {
        letter: 'C',
        text: 'Apenas a alta classe eclesiástica – bispos e cardeais – desfrutava dos lucros obtidos no feudo concedendo em troca a realização exclusiva de todos os ofícios religiosos aos suseranos.',
      },
      {
        letter: 'D',
        text: 'O feudo foi uma forma de posse sobre alguns bens reais que se dava por meio de um pacto de fidelidade e lealdade tornando-se, portanto, a base para o estabelecimento de uma aristocracia fundiária.',
      },
      {
        letter: 'E',
        text: 'A busca por especialistas no plantio e na manufatura de equipamentos acontecia nos burgos onde residiam os agricultores e artesãos, especialistas na produção ou fabricação de equipamentos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q47', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2023-q48',
    examId: EXAM_ID,
    originalNumber: 48,
    originalCode: 'UFRR 2023 · Q48',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Oriental — Babilônia e Código de Hamurábi',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O código de Hamurábi em seu prólogo traz: "Quando o alto Anu, Rei de Anunaki e Bel, Senhor da Terra e dos Céus, determinador dos destinos do mundo, entregou o governo de toda humanidade a Marduk... quando foi pronunciado o alto nome da Babilônia; quando ele a fez famosa no mundo e nela estabeleceu um duradouro reino cujos alicerces tinham a firmeza do céu e da terra – por esse tempo de Anu e Bel me chamaram, a mim, Hamurábi, o excelso príncipe, o adorador dos deuses, para implantar a justiça na terra, para destruir os maus e o mal, para prevenir a opressão do fraco pelo forte... para iluminar o mundo e propiciar o bem-estar do povo.”

*(Disponível em: <http://www.dhnet.org.br/direitos/anthist/hamurabi.htm>, consultado em 08 de set. de 2022.)*

A respeito do Código de Hamurábi, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A lei de Talião, bastante associada ao Código, foi um preceito legal criado exclusivamente pelo rei Hamurábi sendo, portanto, algo totalmente desconhecido pelo povo babilônico da época.',
      },
      {
        letter: 'B',
        text: 'As 282 leis contidas no Código de Hamurábi foram compostas para garantir a manutenção e o domínio da classe dominante sobre a casta denominada *mavilak* que significa “os súditos”.',
      },
      {
        letter: 'C',
        text: 'Hamurábi, que se dizia encarnação de Marduque, foi responsável pela composição do código, tendo escolhido para auxiliá-lo os anciãos do reino, grupo que fazia parte do tribunal babilônico.',
      },
      {
        letter: 'D',
        text: 'O Código de Hamurábi foi um conjunto de leis que trazia um resumo das tradições legais existentes naquela região há gerações, tendo como base a punição para determinadas condutas do povo.',
      },
      {
        letter: 'E',
        text: 'O livro bíblico de Êxodo retrata a busca do povo Hebreu pela Babilônia, já que almejavam uma estrutura política mais justa, como era para este povo o caso do Código de Hamurábi.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q48', correctLetter: null },
    provenance: makeProv(15),
  },
  {
    id: 'ufrr-2023-q49',
    examId: EXAM_ID,
    originalNumber: 49,
    originalCode: 'UFRR 2023 · Q49',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'América Latina — Independência da América Espanhola',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O fragmento de texto a seguir trata de Alexander von Humboldt (1769-1859), um geógrafo prussiano, polímata, naturalista, explorador e proponente da filosofia romântica que circulou pela Amazônia e fez importantes descobertas.

**Diplomacia e ciência**
Segundo (Laura Dassow) Walls, Humboldt era, em certo sentido, um diplomata: "Ele via o conhecimento como uma forma de diplomacia, e não como uma forma de poder ou controle".
"Ele era um admirador profundo de (George) Washington, (Thomas) Jefferson e (James) Madison", considerados os pais fundadores dos Estados Unidos.
Durante sua viagem à América Latina, mas especialmente à Venezuela, "Humboldt conversou sobre o movimento pela independência e ajudou a espalhar os ideais americanos de liberdade e igualdade", diz Walls.
Humboldt até se encontrou várias vezes com Simón Bolívar, principal líder da libertação da América Latina dos colonizadores, que reconheceu a influência do naturalista. De fato, Bolívar o chamou diretamente de "o descobridor do Novo Mundo".
"Enquanto Colombo foi a causa de nações inteiras serem reduzidas à servidão, Humboldt abriu o caminho para as revoluções que deram independência às nações da América do Sul", afirma Walls.

*(PAIS, Ana. A história do alemão que ‘redescobriu’ a América e influenciou Darwin e Bolívar. BBC, 15 de Setembro de 2019. Disponível em: https://www.bbc.com/portuguese/geral-49707318.)*

A respeito da Independência dos países da América do Sul que eram colônias da Espanha, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A crise europeia decorrente das Guerras Napoleônicas foi fundamental para que os movimentos de independência da América Espanhola contassem com o apoio alemão, pois isso enfraquecia o lado Bonapartista da Europa, do qual a Espanha fazia parte.',
      },
      {
        letter: 'B',
        text: 'As ideias iluministas foram uma das principais influências para a eclosão dos movimentos independentistas, já que as críticas ao Antigo Regime presentes nessas ideias representava o sentimento de parte da elite de origem *criolla*, a qual era desprovida de amplos direitos políticos nas Instituições do mundo colonial Espanhol.',
      },
      {
        letter: 'C',
        text: 'A presença de Humboldt na Amazônia demonstra o interesse da Prússia na ruptura entre as diferentes regiões da América do Sul em relação à Espanha, sua adversária dentro do Concerto Europeu de Nações, o que só viria a ser definitivamente resolvido com a Independência do Brasil.',
      },
      {
        letter: 'D',
        text: 'As tensões entre povos indígenas e colonizadores fez com que as lideranças indígenas assumissem o papel de líderes dos movimentos independentistas, a ponto de muitos serem reconhecidos como os Libertadores da América, passando a ser denominados *Chapetones*.',
      },
      {
        letter: 'E',
        text: 'A ideia de que o Novo Mundo, a América, era o paraíso na Terra, fez com que os pensadores iluministas franceses e os revolucionários, como Simón Bolívar, atuassem juntos pela independência da América Espanhola.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q49', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2023-q50',
    examId: EXAM_ID,
    originalNumber: 50,
    originalCode: 'UFRR 2023 · Q50',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História da América — Doutrina Monroe',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Se o princípio da Doutrina Monroe, enquanto for política desse governo (TR), cobre toda a América do Sul, incluindo a Patagônia e a Argentina, não é da alçada desse Conselho Geral, mas apenas o fato de que os princípios de estratégia e os defeitos de nossa posição geográfica torna impraticável manter de forma bem sucedida controle naval pelas forças armadas além da Amazônia, a não ser que as condições atuais mudem radicalmente”.

*(LANGLEY, Lester D. The Banana Wars: United States Intervention in the Caribbean, 1898-1934. Lexington, Ky., University Press of Kentucky, 1985, p. 20 apud TEIXEIRA. Carlos Gustavo Poggio. Uma política para o continente – reinterpretando a Doutrina Monroe. Rev. Bras. Polít. Int. 57 (2): 115-132 2014, adaptado.)*

Com base no texto e em seus conhecimentos, assinale a alternativa CORRETA sobre a Doutrina Monroe.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '“A América para os Americanos” – evidencia que o objetivo da doutrina era inserir a população dos países da América do Sul dentro da dimensão de cidadania dos Estados Unidos para reorganizar o ideal bolivariano de União de todos os países do continente.',
      },
      {
        letter: 'B',
        text: '“A América para os Americanos” – tornou-se a oração simbólica da Doutrina Monroe, já que o presidente americano a expressou durante o evento que consolidou a Organização dos Estados Americanos (OEA), como a principal organização internacional das Américas.',
      },
      {
        letter: 'C',
        text: '“A América para os Americanos” – ficou conhecida por reforçar o caráter multiétnico do projeto político de Monroe, em que ele desejava levar para os demais países da América a Democracia dos Estados Unidos, na qual brancos, indígenas e negros possuíam os mesmos direitos.',
      },
      {
        letter: 'D',
        text: '“A América para os Americanos” – tornou-se a frase que consolidou a percepção de que a referida política, Doutrina Monroe, tinha como alvo a totalidade do continente americano, apesar de nunca ter sido dita pelo presidente Monroe.',
      },
      {
        letter: 'E',
        text: '“A América para os Americanos” – tornou-se a frase que explicitou os interesses da Doutrina Monroe, pois ela reforçava o total rechaço da presença europeia nas Américas, fator que foi determinante para a decisão do presidente Monroe de enviar tropas dos Estados Unidos para participar da independência do Haiti.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q50', correctLetter: null },
    provenance: makeProv(16),
  },
  {
    id: 'ufrr-2023-q51',
    examId: EXAM_ID,
    originalNumber: 51,
    originalCode: 'UFRR 2023 · Q51',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História Regional — Forte São Joaquim do Rio Branco',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Após a assinatura do tratado de Madri, em 1750, os portugueses vão tratar de assegurar suas conquistas. E, como garantia da posse do ponto mais extremo ao norte do território, construíram o Forte São Joaquim (1775), na confluência dos rios Tacutu e Uraricoera, formadores do rio Branco, e via de acesso às bacias dos rios Orinoco (Venezuela) e Essequibo (antiga Guiana Inglesa).”

*(Fonte: D’ACAMPORA, Márcia. Território federal do Rio branco: realidade e legalidade. in MAGALHÃES, Maria das Graças S.D., SOUZA, Carla Monteiro. Roraima/Boa Vista: temas sobre o regional e o local. Boa Vista: UFRR, 2012, p. 65.)*

De acordo com a firmação acima que trata da construção do Forte São Joaquim, assinale a alternativa CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Para a edificação do Forte São Joaquim, foi necessária a contratação de duas associações especializadas na construção de fortes, sendo uma da Holanda e outra da Inglaterra.',
      },
      {
        letter: 'B',
        text: 'A instalação do forte fazia parte de uma estratégia de ocupação coordenada por Marquês de Pombal visando a constituição de uma fronteira viva que resguardasse esta região para a coroa portuguesa.',
      },
      {
        letter: 'C',
        text: 'A construção do Forte São Joaquim foi o estopim para a reivindicação por parte da Espanha e, posteriormente, da Venezuela, da região conhecida como Guiana Essequiba e confluência do rio Essequibo.',
      },
      {
        letter: 'D',
        text: 'A narrativa vigente para a construção do Forte São Joaquim foi a de que a região do extremo norte seria tomada pelos franceses unidos aos povos indígenas Waiwai e Tyrió que viviam no alto Inhamundá.',
      },
      {
        letter: 'E',
        text: 'Dentro do grande projeto mercantilista protagonizado por Marquês de Pombal, a existência do forte garantiria o enfraquecimento dos monges consolatinos que atuavam na região em favor da Inglaterra.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q51', correctLetter: null },
    editorialNote: 'Grafia original “firmação” mantida no enunciado.',
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2023-q52',
    examId: EXAM_ID,
    originalNumber: 52,
    originalCode: 'UFRR 2023 · Q52',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'História Contemporânea — Descolonização Afro-Asiática',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Seria errado ignorar aqui a ‘complexidade’ do fenômeno histórico em exames e suas diferenças internas, as quais, não podem impedir de pronunciar um juízo sobre o colonialismo enquanto tal: mesmo no caráter múltiplo e matizado das suas manifestações, o colonialismo é sinônimo de pilhagem e de exploração, e implicou em guerra, em agressão e na imposição em larga escala de formas de trabalho forçado em dano das populações coloniais, mesmo quando se declarou movido pelo intento humanitário de promover a realização da paz perpétua e a abolição da escravidão, e mesmo quando alguns expoentes políticos ou alguns ideólogos das grandes potências do Ocidente acreditaram sinceramente em tais boas intenções!”.

*(LOSURDO, D. O sionismo e a tragédia do povo palestino. Crítica Marxista, São Paulo, Ed. Revan, v.1, n.24, p. 63-72. 2007, p. 63.)*

O texto acima traz uma das formas como os regimes coloniais foram compreendidos, justificando a eclosão de movimentos independentistas pela África e Ásia durante o século XX, em um processo denominado descolonização afro-asiática.

A respeito do assunto, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Os processos de independência nos continentes africano e asiático fez com que a União Soviética perdesse vastos domínios coloniais, a ponto de o país ter buscado na Amazônia a substituição de um mercado produtor de commodities.',
      },
      {
        letter: 'B',
        text: 'A pressão exercida pela Liga das Nações, em virtude do combate ao fascismo, sobre a Alemanha e a Itália fez com que esses dois países optassem por deixar seus territórios coloniais na Ásia.',
      },
      {
        letter: 'C',
        text: 'A vitória francesa na Segunda Guerra Mundial fez com que as colônias desse país reestabelecessem seus laços com a metrópole, levando a processos de independência pacíficos.',
      },
      {
        letter: 'D',
        text: 'O surgimento do Estado de Israel foi o mais bem sucedido processo de descolonização, já que além do desenvolvimento econômico, o país estabeleceu relações pacíficas com seus vizinhos.',
      },
      {
        letter: 'E',
        text: 'O enfraquecimento das potências colonizadoras após a Segunda Guerra Mundial facilitou o ressurgimento de movimentos de luta pela independência em diversas partes do continente africano e asiático.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q52', correctLetter: null },
    provenance: makeProv(17),
  },
  {
    id: 'ufrr-2023-q53',
    examId: EXAM_ID,
    originalNumber: 53,
    originalCode: 'UFRR 2023 · Q53',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Nova República — Anos 1990 (Collor, Itamar e Plano Real)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Constituição da República Federativa do Brasil de 1988

Art. 225. Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.
§ 4º A Floresta Amazônica brasileira, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira são patrimônio nacional, e sua utilização far-se-á, na forma da lei, dentro de condições que assegurem a preservação do meio ambiente, inclusive quanto ao uso dos recursos naturais.

A Constituição brasileira determinou o compromisso do país com o meio ambiente ecologicamente equilibrado e com a proteção dos biomas, o que se materializou durante os governos brasileiros dos anos 90 do século XX.

A respeito do período, assinale a alternativa INCORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O confisco de depósitos bancários estabelecido pelo Plano Collor fez com que o governo perdesse apoio popular, o qual foi reforçado com denúncias de corrupção contra o presidente.',
      },
      {
        letter: 'B',
        text: 'O *impeachment* de Collor decorreu da inabilidade do governo em solucionar o problema das queimadas amazônicas, descumprindo o compromisso assumido pelo Brasil durante a Rio 92.',
      },
      {
        letter: 'C',
        text: 'O plano Real foi estabelecido durante o governo Itamar Franco e tinha como foco principal o combate à hiperinflação que assolava o país nos períodos anteriores.',
      },
      {
        letter: 'D',
        text: 'Fernando Henrique Cardoso era o ministro da Fazenda durante o Plano Real, motivo pelo qual se tornou uma figura bastante popular a ponto de vencer as eleições presidenciais de 1994.',
      },
      {
        letter: 'E',
        text: 'Itamar Franco tornou-se presidente após o *impeachment* de Collor, em 1992, em um contexto marcado por forte crise econômica e sistema monetário desacreditado.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q53', correctLetter: null },
    provenance: makeProv(18),
  },
  {
    id: 'ufrr-2023-q54',
    examId: EXAM_ID,
    originalNumber: 54,
    originalCode: 'UFRR 2023 · Q54',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'História',
      topic: 'Guerra Fria — Política Externa Brasileira na Amazônia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Em 11 de abril de 1983, o governo brasileiro, então comandado pelo general João Figueiredo, determinou o envio de uma missão de alto nível ao Suriname para oferecer a intensificação das relações bilaterais mediante um expressivo pacote de assistência política, militar e econômica ao regime do comandante Desiré Delano Bouterse. A missão visitou Paramaribo entre 15 e 17 de abril de 1983 e foi liderada pelo general Danilo Venturini, na época o secretário-geral do Conselho de Segurança Nacional do Brasil. A situação política e social interna do Suriname era altamente relevante para o governo brasileiro em função de considerações geopolíticas, inclusive no contexto do conflito Leste-Oeste devido à crescente aproximação do Suriname ao bloco socialista.”

*(AVILA, Carlos Federico Domínguez. Guerra Fria na Região Amazônica: um estudo da missão Venturini ao Suriname (1983). Revista Brasileira de Política Internacional, v. 54, p. 7-28, 2011, p. 7.)*

O trecho anterior descreve a missão Venturini, realizada pelo Brasil no Suriname, a qual revela a importância da Guerra Fria para as relações entre os países naquele período. Em relação ao período da Guerra Fria, assinale a alternativa CORRETA.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A preocupação determinante para a missão Venturini decorreu do fato da China Maoísta ter feito investimentos que fizeram com que o país asiático controlasse o espaço amazônico surinamês.',
      },
      {
        letter: 'B',
        text: 'Os Estados Unidos acreditavam durante a Guerra Fria que o território da América Latina era irrelevante, pois na região só havia ocorrido um movimento de guerrilha revolucionária, em Cuba.',
      },
      {
        letter: 'C',
        text: 'O período da Guerra Fria recebe esse nome por ser um dos mais pacíficos da história da humanidade, pois as duas superpotências da época, Estados Unidos e URSS, não tinham entre suas prioridades o investimento na construção de armamentos.',
      },
      {
        letter: 'D',
        text: 'A Guerra Fria decorreu da disputa de recursos naturais entre Estados Unidos e URSS, levando a Amazônia a se tornar a principal região em disputa pelas duas superpotências, já que o bioma é fundamental para a produção de oxigênio.',
      },
      {
        letter: 'E',
        text: 'Apesar da denominação Guerra Fria em virtude de nenhum conflito armado direto entre Estados Unidos e URSS ter ocorrido, o período teve diversas guerras, como a da Coreia, na década de 1950, e a do Afeganistão, iniciada em 1979.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q54', correctLetter: null },
    provenance: makeProv(18),
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    id: 'ufrr-2023-q55',
    examId: EXAM_ID,
    originalNumber: 55,
    originalCode: 'UFRR 2023 · Q55',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Grandezas Químicas — Mol e Número de Avogadro',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“O garimpo ilegal traz inúmeras consequências danosas ao meio ambiente, destruindo os cursos d’água, afetando a fauna local e impactando diretamente a vida de populações que vivem próximas a regiões exploradas. Em uma operação deflagrada pela Polícia Federal em julho de 2022, para combater o garimpo ilegal, cerca de 39 quilos de ouro em barras foram apreendidos.”

*(Fonte: https://g1.globo.com/fantastico/noticia/2022/07/10/baroes-do-ouro-ilegal-no-brasil-dinheiro-movimentado-as-margens-da-lei-chegou-a-r-16-bilhoes-em-dois-anos.ghtml)*

Supondo que cada barra de ouro continha 1,576 kg, podemos afirmar que o número de átomos de ouro presente em cada barra é de aproximadamente:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$4{,}8 \\times 10^{23}$' },
      { letter: 'B', text: '$1{,}2 \\times 10^{23}$' },
      { letter: 'C', text: '$4{,}8 \\times 10^{24}$' },
      { letter: 'D', text: '$4{,}8 \\times 10^{22}$' },
      { letter: 'E', text: '$2{,}4 \\times 10^{23}$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q55', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q56',
    examId: EXAM_ID,
    originalNumber: 56,
    originalCode: 'UFRR 2023 · Q56',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Tabela Periódica e Distribuição Eletrônica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um determinado elemento da tabela periódica apresenta configuração eletrônica $1s^2\\;2s^2\\;2p^6\\;3s^2\\;3p^2$. É CORRETO afirmar que esse elemento está localizado no:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '2º período do grupo 14' },
      { letter: 'B', text: '3º período do grupo 15' },
      { letter: 'C', text: '2º período do grupo 15' },
      { letter: 'D', text: '3º período do grupo 14' },
      { letter: 'E', text: '2º período do grupo 16' },
    ],
    answerKey: { questionId: 'ufrr-2023-q56', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q57',
    examId: EXAM_ID,
    originalNumber: 57,
    originalCode: 'UFRR 2023 · Q57',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Gases — Equação de Clapeyron',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O monóxido de carbono (CO) é um gás que pode ser formado a partir da queima da gasolina em veículos automotores. Por ser tóxico, antes de chegar na atmosfera, ele deve ser eliminado e, em geral, ele é transformado em gás carbônico através de uma reação de oxidação promovida por catalisadores presentes nesses veículos. Supondo que um motor mal regulado possa liberar 0,5 mol de CO por minuto na atmosfera, o volume de CO, a uma pressão de 1 atm, que é liberado por minuto a uma temperatura de 27 ºC, é de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$2{,}3\\text{ L}\\cdot\\text{min}^{-1}$' },
      { letter: 'B', text: '$6{,}1\\text{ L}\\cdot\\text{min}^{-1}$' },
      { letter: 'C', text: '$24{,}6\\text{ L}\\cdot\\text{min}^{-1}$' },
      { letter: 'D', text: '$1{,}1\\text{ L}\\cdot\\text{min}^{-1}$' },
      { letter: 'E', text: '$2{,}2\\text{ L}\\cdot\\text{min}^{-1}$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q57', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q58',
    examId: EXAM_ID,
    originalNumber: 58,
    originalCode: 'UFRR 2023 · Q58',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Soluções — Concentração Molar',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Para obter 100 mL de uma solução 0.2M de $\\text{CuSO}_4$, a massa de $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$ que deve ser pesada é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '3,19 g' },
      { letter: 'B', text: '1,2 g' },
      { letter: 'C', text: '4,99 g' },
      { letter: 'D', text: '50 g' },
      { letter: 'E', text: '32 g' },
    ],
    answerKey: { questionId: 'ufrr-2023-q58', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q59',
    examId: EXAM_ID,
    originalNumber: 59,
    originalCode: 'UFRR 2023 · Q59',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Termoquímica — Entalpia de Dissolução',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Sabendo que a entalpia de dissolução do Nitrato de amônio é de $21{,}1\\text{ KJ}\\cdot\\text{mol}^{-1}$,

$$\\text{(NH}_4\\text{)NO}_{3\\,(s)} \\longrightarrow \\text{NH}_{4\\,(aq)}^+ + \\text{NO}_{3\\,(aq)} \\quad \\Delta H = +21{,}1\\text{ kJ}\\cdot\\text{mol}^{-1}$$

É CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'O processo é exotérmico.' },
      {
        letter: 'B',
        text: 'Calor é liberado para o ambiente durante o processo de dissolução.',
      },
      { letter: 'C', text: 'O processo é endotérmico.' },
      { letter: 'D', text: 'O sal não é solúvel.' },
      { letter: 'E', text: 'Nenhuma das anteriores.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q59', correctLetter: null },
    editorialNote: 'Notação original “NO3 (aq)” (sem sinal negativo impresso) preservada.',
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q60',
    examId: EXAM_ID,
    originalNumber: 60,
    originalCode: 'UFRR 2023 · Q60',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Equilíbrio Químico e Hidrólise Salina',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Benzoato de sódio é um conservante de alimentos amplamente utilizado. Ao ser dissolvido em água, ele se dissocia em íons sódio e benzoato. O benzoato reage com a água segundo a reação a seguir, cuja constante de equilíbrio é de $1{,}5 \\times 10^{-10}$.

$$\\text{Benzoato} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{OH}^- + \\text{ácido benzoico} \\quad K_{eq} = 1{,}5 \\times 10^{-10}$$

Em relação a este equilíbrio é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'O benzoato é um ácido.' },
      { letter: 'B', text: 'O benzoato é uma base.' },
      {
        letter: 'C',
        text: 'No equilíbrio, a concentração de ácido benzóico é maior que a concentração de benzoato.',
      },
      {
        letter: 'D',
        text: 'No equilíbrio, a concentração de íons hidróxido é maior que a concentração de benzoato.',
      },
      { letter: 'E', text: 'O pH da solução é ácido.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q60', correctLetter: null },
    provenance: makeProv(19),
  },
  {
    id: 'ufrr-2023-q61',
    examId: EXAM_ID,
    originalNumber: 61,
    originalCode: 'UFRR 2023 · Q61',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Funções Orgânicas e Fórmula Molecular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um dos fármacos aprovados para o tratamento da COVID-19 é o nirmatrelvir, cuja estrutura é apresentada a seguir.

Com base nessa estrutura, considere as afirmativas a seguir e assinale a alternativa CORRETA.

I. O nirmatrelvir apresenta a função química amina terciária em sua estrutura.
II. O nirmatrelvir apresenta a função química nitrila em sua estrutura.
III. Halogênios estão presentes na estrutura do nirmatrelvir.
IV. O nirmatrelvir apresenta 25 átomos de carbono em sua estrutura.`,
    graphics: [
      {
        id: 'ufrr-2023-g-q61',
        type: 'image',
        imageUrl: '/exam-assets/2023/q61-nirmatrelvir.jpg',
        caption: 'nirmatrelvir',
        altText: 'Estrutura química do nirmatrelvir com grupos amida, nitrila (-CN), pirrolidinona e grupamento trifluorometil (-CF3).',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'II, III e IV são verdadeiras.' },
      { letter: 'B', text: 'II e III são verdadeiras; IV é falsa.' },
      { letter: 'C', text: 'I e II são verdadeiras; III é falsa.' },
      { letter: 'D', text: 'I e IV são verdadeiras; II é falsa.' },
      { letter: 'E', text: 'III e IV são verdadeiras; II é falsa.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q61', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2023-q62',
    examId: EXAM_ID,
    originalNumber: 62,
    originalCode: 'UFRR 2023 · Q62',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Reações Orgânicas — Reação de Adição',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Quando uma molécula orgânica insaturada reage com bromo e o seu produto apresenta um decréscimo no número de ligações pi e um acréscimo no número de ligações *sigma*, pode-se dizer que essa molécula orgânica sofreu uma reação de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Eliminação' },
      { letter: 'B', text: 'Substituição' },
      { letter: 'C', text: 'Adição' },
      { letter: 'D', text: 'Rearranjo' },
      { letter: 'E', text: 'Nenhuma das anteriores' },
    ],
    answerKey: { questionId: 'ufrr-2023-q62', correctLetter: null },
    provenance: makeProv(20),
  },
  {
    id: 'ufrr-2023-q63',
    examId: EXAM_ID,
    originalNumber: 63,
    originalCode: 'UFRR 2023 · Q63',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Química',
      topic: 'Propriedades Físicas dos Compostos Orgânicos — Ponto de Ebulição',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Os valores dos pontos de ebulição, à pressão de 760 Torr, do propeno, éter metil-etílico, propanona e n-propanol, nesta ordem, estão apresentados na alternativa:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$97\\,^\\circ\\text{C}$; $58\\,^\\circ\\text{C}$; $7{,}4\\,^\\circ\\text{C}$; $-48\\,^\\circ\\text{C}$' },
      { letter: 'B', text: '$7{,}4\\,^\\circ\\text{C}$; $-48\\,^\\circ\\text{C}$; $58\\,^\\circ\\text{C}$; $97\\,^\\circ\\text{C}$' },
      { letter: 'C', text: '$58\\,^\\circ\\text{C}$; $7{,}4\\,^\\circ\\text{C}$; $-48\\,^\\circ\\text{C}$; $97\\,^\\circ\\text{C}$' },
      { letter: 'D', text: '$7{,}4\\,^\\circ\\text{C}$; $-48\\,^\\circ\\text{C}$; $97\\,^\\circ\\text{C}$; $58\\,^\\circ\\text{C}$' },
      { letter: 'E', text: '$-48\\,^\\circ\\text{C}$; $7{,}4\\,^\\circ\\text{C}$; $58\\,^\\circ\\text{C}$; $97\\,^\\circ\\text{C}$' },
    ],
    answerKey: { questionId: 'ufrr-2023-q63', correctLetter: null },
    provenance: makeProv(20),
  },

  // ================= ESPAÑOL (Q64–Q72) =================
  {
    id: 'ufrr-2023-q64-es',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2023 · Q64 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología y Clases de Palabras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t1'],
    stem: 'En el fragmento: “Los incendios y la __deforestación__ son los principales problemas que enfrenta el bosque en opinión __del__ 44% de los brasileños. La minería __ilegal__, la apropiación de tierras y el tráfico de drogas y armas han sido nombrados por el 12% como __los__ principales desafíos para la preservación de los __bosques__ y la __biodiversidad__ “, se puede decir que las palabras subrayadas son, receptivamente:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Sustantivo; contracción; adjetivo; artículo definido; sustantivo; sustantivo.',
      },
      {
        letter: 'B',
        text: 'Sustantivo; artículo; sustantivo; artículo indefinido; sustantivo; sustantivo.',
      },
      {
        letter: 'C',
        text: 'Adjetivo; contracción; adjetivo; artículo definido; adjetivo; adjetivo;',
      },
      {
        letter: 'D',
        text: 'Adjetivo; artículo; sustantivo; artículo neutro; sustantivo; adjetivo.',
      },
      {
        letter: 'E',
        text: 'Sustantivo; artículo neutro; adjetivo; artículo; sustantivo; sustantivo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q64-es', correctLetter: null },
    editorialNote: 'Grafia original “receptivamente” mantida no enunciado.',
    provenance: makeProv(21),
  },
  {
    id: 'ufrr-2023-q65-es',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2023 · Q65 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Conjugación Verbal — Modo Indicativo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t1'],
    stem: 'En el fragmento “Los líderes indígenas __mostraron__ el mayor índice de aprobación de su trabajo en relación con bosque, con una valoración positiva del 73% de la población […]” si fuera cambiado el verbo subrayado para la 3º persona del modo indicativo tendríamos:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Han mostrado.' },
      { letter: 'B', text: 'Muestre.' },
      { letter: 'C', text: 'Haya mostrado.' },
      { letter: 'D', text: 'Muestra.' },
      { letter: 'E', text: 'Mostrabas.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q65-es', correctLetter: null },
    provenance: makeProv(21),
  },
  {
    id: 'ufrr-2023-q66-es',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2023 · Q66 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Léxico — Heterogenéricos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t1'],
    stem: 'A respecto de las palabras heterogenéricas se puede decir que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Son palabras que en portugués y español poseen significados distintos, pero su género gramatical sigue igual.',
      },
      {
        letter: 'B',
        text: 'Son palabras que en portugués y en español poseen el mismo significado, pero su sílaba tónica cambia de una lengua a otra.',
      },
      {
        letter: 'C',
        text: 'Son palabras que en portugués y en español poseen significados diferentes, pero su sílaba tónica no cambia de una lengua para otra.',
      },
      {
        letter: 'D',
        text: 'Son palabras que en portugués y español poseen significados distintos, pero su género gramatical cambia, así como la sílaba tónica de una lengua para otra.',
      },
      {
        letter: 'E',
        text: 'Son palabras que en portugués y en español poseen el mismo significado, pero su género gramatical cambia de una lengua a otra.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q66-es', correctLetter: null },
    provenance: makeProv(21),
  },
  {
    id: 'ufrr-2023-q67-es',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2023 · Q67 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Comprensión Lectora',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t2'],
    stem: 'A partir de las informaciones presentadas en el texto II, es CORRECTO decir que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'El Ministerio de Medio Ambiente del gobierno actual es acusado de colaborar con ruralistas, contribuyendo con el desmonte de los órganos de fiscalización ambiental en Brasil.',
      },
      {
        letter: 'B',
        text: 'La ofensiva contra las poblaciones indígenas provienen de una política republicana de desarrollo continuo, pero en los tres últimos años ha sido intensificada.',
      },
      {
        letter: 'C',
        text: 'La ofensiva se establece contra las poblaciones indígenas a partir de algunos ministerios del gobierno brasileño, como: Medio Ambiente, Agricultura, Salud y principalmente de la Justicia.',
      },
      {
        letter: 'D',
        text: 'Para el Observatorio del Clima, el año de 2020 fue lo peor año de inversiones en Tierras Indígenas y Unidades de Preservación, con solamente 105 mil reales.',
      },
      {
        letter: 'E',
        text: 'Con la falta de inversiones, fueron destruidos 188 hectáreas de unidades de preservación en Brasil, lo que corresponde a 90 por ciento.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q67-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2023-q68-es',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2023 · Q68 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología y Clases de Palabras',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t2'],
    stem: 'En el fragmento “[…] __es__ acusado de desmantelar __deliberadamente__ los organismos de fiscalización ambiental __para__ liberar una expansión sin límites del frente agrícola hacia el norte del país. Según el Observatorio del Clima, entre enero y agosto, el ministro apenas __destinó__ 105 mil reales (R$) __en__ la política ambiental, es decir, un 0.4% __del__ presupuesto para iniciativas relacionadas con el cambio climático, la protección de la biodiversidad y mejora de la calidad ambiental urbana”, se puede decir que las palabras subrayadas son, receptivamente:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Verbo en presente de indicativo; adverbio; preposición; verbo en pretérito perfecto de indicativo; preposición; contracción.',
      },
      {
        letter: 'B',
        text: 'Verbo en presente de indicativo, adverbio de intensidad; contracción; verbo en pretérito imperfecto de indicativo; contracción; preposición.',
      },
      {
        letter: 'C',
        text: 'Verbo en presente de subjuntivo; adverbio; artículo; verbo en presente de indicativo; contracción; contracción.',
      },
      {
        letter: 'D',
        text: 'Verbo en presente de indicativo; adverbio tiempo; preposición; verbo en futuro de indicativo; preposición; contracción.',
      },
      {
        letter: 'E',
        text: 'Verbo en presente de indicativo; adverbio de intensidad; contracción; verbo en futuro del pretérito; preposición; preposición.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q68-es', correctLetter: null },
    editorialNote: 'Grafia original “receptivamente” mantida no enunciado.',
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2023-q69-es',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2023 · Q69 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Tiempos Verbales — Pretérito Imperfecto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t3'],
    stem: 'En el fragmento “y que __podemos__ seguir a diario todas y todos los miembros de la sociedad”, si el verbo fuera cambiado para el pretérito imperfecto del modo indicativo, tendríamos:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'hemos podido.' },
      { letter: 'B', text: 'podremos.' },
      { letter: 'C', text: 'podíamos.' },
      { letter: 'D', text: 'hubimos podido.' },
      { letter: 'E', text: 'pudiéramos.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q69-es', correctLetter: null },
    provenance: makeProv(22),
  },
  {
    id: 'ufrr-2023-q70-es',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2023 · Q70 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Morfología — Preposición, Conjunción y Pronombre',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t4'],
    stem: 'En el fragmento del texto IV “__Tras__ una protesta nacional __e__ internacional, un tribunal brasileño declaró a cinco de __ellos__ culpables de genocidio.”, las palabras subrayadas pueden ser clasificadas, respectivamente, como:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Preposición, pronombre, adverbio.' },
      { letter: 'B', text: 'Preposición, conjunción, pronombre.' },
      { letter: 'C', text: 'Adverbio, pronombre, conjunción.' },
      { letter: 'D', text: 'Conjunción, conjunción, preposición.' },
      { letter: 'E', text: 'Preposición, preposición, preposición.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q70-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2023-q71-es',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2023 · Q71 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Vocabulario y Sinonimia',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t5'],
    stem: 'En el fragmento “Los grupos indígenas __instaron__ este domingo (05.09.2021) a los líderes mundiales a respaldar un nuevo objetivo para proteger el 80 % de la cuenca del Amazonas para 2025”, se puede sustituir la palabra subrayada, instaron, por:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'Lincharon.' },
      { letter: 'B', text: 'Solicitaron.' },
      { letter: 'C', text: 'Aclararon.' },
      { letter: 'D', text: 'Apandillaron.' },
      { letter: 'E', text: 'Anhelaron.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q71-es', correctLetter: null },
    provenance: makeProv(23),
  },
  {
    id: 'ufrr-2023-q72-es',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2023 · Q72 (ES)',
    foreignLanguage: 'Espanhol',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Espanhol',
      topic: 'Numerales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-es-t5'],
    stem: 'En el texto son mencionados los numerales 25, 2025 y 1.400. Marca la alternativa que presenta CORRECTAMENTE estos numerales por extenso:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'veinticinco, dos mil veinte y cinco, mil y cuatrocientos.',
      },
      {
        letter: 'B',
        text: 'veinticinco, dos mil veinticinco, mil y cuatrocientos.',
      },
      {
        letter: 'C',
        text: 'veinte y cinco, dos mil veinte y cinco, mil cuatrocientos.',
      },
      {
        letter: 'D',
        text: 'veinticinco, dos mil veinticinco, mil cuatrocientos.',
      },
      {
        letter: 'E',
        text: 'veinte y cinco, dos mil veinte y cinco, uno mil y cuatrocientos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q72-es', correctLetter: null },
    provenance: makeProv(23),
  },

  // ================= ENGLISH (Q64–Q72) =================
  {
    id: 'ufrr-2023-q64-en',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2023 · Q64 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Pronoun Reference',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t1'],
    stem: 'Referencing is used to indicate something stated before, adding cohesion to a text and avoiding repetition. In "with all its sacred names (and left __it__ stripped to the bone).", the underlined terms refer to:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'land' },
      { letter: 'B', text: 'they' },
      { letter: 'C', text: 'names' },
      { letter: 'D', text: 'bone' },
      { letter: 'E', text: 'blood' },
    ],
    answerKey: { questionId: 'ufrr-2023-q64-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2023-q65-en',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2023 · Q65 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Verb Tenses — Simple Present',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t1'],
    stem: 'Nos versos finais do poema, o autor descreve o lamento dos elementos da natureza e pede socorro. Nesse trecho são narrados fatos presentes e rotineiros construídos pelo:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: "emprego das palavras 'flora', 'fauna' e 'rivers'.",
      },
      { letter: 'B', text: 'predomínio de verbos no passado simples.' },
      { letter: 'C', text: "termo 'little' que indica escassez ou falta." },
      {
        letter: 'D',
        text: "uso do presente simples em 'moans' e 'remains'.",
      },
      { letter: 'E', text: 'uso da forma imperativa em todos os versos.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q65-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2023-q66-en',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2023 · Q66 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Reading Comprehension — Poetry',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t1'],
    stem: 'O poema Índio Velho, do poeta brasileiro Salgado Maranhão, traduzido para o inglês e publicado no New York Times, tem como foco:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'criticar a prática da caça de animais para fabricação de roupas.',
      },
      {
        letter: 'B',
        text: 'descrever os prejuízos da seca para a agricultura familiar.',
      },
      {
        letter: 'C',
        text: 'apontar o efeito da poluição dos rios para as grandes cidades.',
      },
      {
        letter: 'D',
        text: 'explicar os benefícios do agronegócio para a flora e fauna.',
      },
      {
        letter: 'E',
        text: 'denunciar e lamentar a devastação que atinge os indígenas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q66-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2023-q67-en',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2023 · Q67 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Linking Words — Concession',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t2'],
    stem: 'Conectivos são palavras ou expressões que dão sentido e coesão a um texto, ligando uma ideia à outra. No texto II, a frase *Although he gave the entire presentation with his face painted, he only spoke about the indigenous cause at the end* poderia ser substituída, sem alteração do sentido, por:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'In spite of giving the entire presentation with his face painted, he only spoke about the indigenous cause at the end.',
      },
      {
        letter: 'B',
        text: 'He gave the entire presentation with his face painted. Furthermore, he only spoke about the indigenous cause at the end.',
      },
      {
        letter: 'C',
        text: 'He gave the entire presentation with his face painted. Then, he only spoke about the indigenous cause at the end.',
      },
      {
        letter: 'D',
        text: 'Thus he gave the entire presentation with his face painted, he only spoke about the indigenous cause at the end.',
      },
      {
        letter: 'E',
        text: 'Instead of giving the entire presentation with his face painted, he only spoke about the indigenous cause at the end.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q67-en', correctLetter: null },
    provenance: makeProv(24),
  },
  {
    id: 'ufrr-2023-q68-en',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2023 · Q68 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Future Tense and Text Interpretation',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t3'],
    stem: 'No texto III, a letra da música *Amazonia* apresenta alguns fatos e previsões em relação à destruição da floresta amazônica. Assinale a alternativa que contém o trecho onde localizamos uma das previsões.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A handful of thunder / Will rise one last time.',
      },
      {
        letter: 'B',
        text: 'You rotate the frame in a world you rely on / A scar, a line has been drawn in the sand.',
      },
      {
        letter: 'C',
        text: 'Onto the next stage of the plan / Mourn the witness of the wind.',
      },
      {
        letter: 'D',
        text: 'Another gold mine is unveiled / The source of our sorrow.',
      },
      {
        letter: 'E',
        text: 'The greatest miracle / Is burning to the ground.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q68-en', correctLetter: null },
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2023-q69-en',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2023 · Q69 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Word Formation — Suffix -y',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t3'],
    stem: 'Na letra da música *Amazonia*, da banda Gojira, as palavras *Mighty* e *Bloddy* são adjetivos formados a partir da inserção do sufixo *-y* ao final de cada palavra. O mesmo tipo de formação ocorre na sequência das palavras:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'almighty – calmly – tidy' },
      { letter: 'B', text: 'dirty – gratuity – nicely' },
      { letter: 'C', text: 'funny – windy – bunchy' },
      { letter: 'D', text: 'blasphemy – environmentally – goldy' },
      { letter: 'E', text: 'creepy – moody – ugly' },
    ],
    answerKey: { questionId: 'ufrr-2023-q69-en', correctLetter: null },
    editorialNote: 'Grafia original “Bloddy” mantida no enunciado.',
    provenance: makeProv(25),
  },
  {
    id: 'ufrr-2023-q70-en',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2023 · Q70 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Morphology — -ing Form as Adjective',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t4'],
    stem: 'Considerando o contexto do texto IV, assinale a alternativa que traz somente excertos com exemplos de vocábulos que contenham o morfema-ing desempenhando função de adjetivo.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '“... is waging a battle..” / “meandering rivers on the border between Brazil and Venezuela”',
      },
      {
        letter: 'B',
        text: '“meandering rivers on the border between Brazil and Venezuela” / “to curb the mining projects on indigenous lands”',
      },
      {
        letter: 'C',
        text: '“living off fishing, hunting and fruit gathering.”',
      },
      {
        letter: 'D',
        text: '“…at serious risk of losing their lands…” / “to curb the mining projects on indigenous lands”',
      },
      {
        letter: 'E',
        text: '“... is waging a battle..” / “…at serious risk of losing their lands…”',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q70-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2023-q71-en',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2023 · Q71 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Vocabulary in Context',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t4'],
    stem: 'Assinale a alternativa que apresenta a melhor forma, em Português, considerando o contexto do texto IV, para os termos destacados em “**pristine** forest”, “illegal **prospectors**” e “**to curb** the mining projects”.',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'cristalina / garimpeiros / controlar' },
      { letter: 'B', text: 'intocada / garimpeiros / refrear' },
      { letter: 'C', text: 'prisma / madeireiros / refrear' },
      { letter: 'D', text: 'preservada / prospectos / controlar' },
      { letter: 'E', text: 'intocada / madeireiros / cobrar' },
    ],
    answerKey: { questionId: 'ufrr-2023-q71-en', correctLetter: null },
    provenance: makeProv(26),
  },
  {
    id: 'ufrr-2023-q72-en',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2023 · Q72 (EN)',
    foreignLanguage: 'Inglês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Inglês',
      topic: 'Passive Voice and Agency',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-en-t4'],
    stem: 'O uso da voz passiva pode ter o propósito de omitir o sujeito das ações. No entanto, considerando todo o texto, percebemos que o(s) sujeito(s) realizador(es) das ações ou processos presentes no trecho “Our land is again being invaded. Our rivers are again being polluted by mercury” é/são:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'the Yanomami people' },
      { letter: 'B', text: 'Davi Kopenawa' },
      { letter: 'C', text: 'the Brazilian government' },
      { letter: 'D', text: 'illegal prospectors' },
      { letter: 'E', text: 'Davi and Dario Kopenawa' },
    ],
    answerKey: { questionId: 'ufrr-2023-q72-en', correctLetter: null },
    provenance: makeProv(26),
  },

  // ================= FRANÇAIS (Q64–Q72) =================
  {
    id: 'ufrr-2023-q64-fr',
    examId: EXAM_ID,
    originalNumber: 64,
    originalCode: 'UFRR 2023 · Q64 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite — Idée Centrale',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'Cochez la réponse que présente l’idée centrale du texte.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'La loi française renforce la sécurité des réseaux sociaux par rapport aux mineurs.',
      },
      {
        letter: 'B',
        text: 'Les parents ont le contrôle sur l’utilisation des réseaux sociaux par ses enfants.',
      },
      {
        letter: 'C',
        text: 'Les réseaux sociaux assurent la sécurité des mineurs lors de leur navigation.',
      },
      {
        letter: 'D',
        text: 'La loi française a l’objectif de protéger les réseaux sociaux.',
      },
      {
        letter: 'E',
        text: 'Les réseaux sociaux ont des dispositifs de détection de contenus pornographiques.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q64-fr', correctLetter: null },
    editorialNote: 'Grafia original “que présente” mantida no enunciado.',
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2023-q65-fr',
    examId: EXAM_ID,
    originalNumber: 65,
    originalCode: 'UFRR 2023 · Q65 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Classes Grammaticales',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: `Dans l’extrait “D'abord, le réseau social Instagram __a été__ condamné, ce lundi, à une amende record de 405 millions d'euros pour "manquement au traitement des données des mineurs". La Commission __irlandaise__ pour la protection des __données__, qui agit au nom de l'Union européenne, estime que la société Meta - qui possède Instagram - n'a pas mis en place les garde-fous nécessaires à la protection des mineurs, qui peuvent trop facilement accéder aux fonctionnalités d'un compte professionnel, alors que __celui-ci__ est censé être réservé aux utilisateurs de plus de 18 ans.», les mots signalés sont classifiés respectivement comme:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'nom – adjectif – verbe - pronom.' },
      { letter: 'B', text: 'verbe – nom – adjectif – pronom.' },
      { letter: 'C', text: 'verbe – adjectif – verbe – nom.' },
      { letter: 'D', text: 'verbe – adjectif – nom – pronom.' },
      { letter: 'E', text: 'pronom – nom – verbe – adjectif.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q65-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2023-q66-fr',
    examId: EXAM_ID,
    originalNumber: 66,
    originalCode: 'UFRR 2023 · Q66 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Syntaxe — Forme Négative',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'Cochez la phrase qui contient une forme négative:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '"Les seules barrières existantes sont, en effet, très bancales."',
      },
      {
        letter: 'B',
        text: '“L\'idée des associations est d\'imposer à Twitter la même base juridique."',
      },
      {
        letter: 'C',
        text: '"(…) les cinq sites pornographiques les plus consultés en France étaient convoqués ce mardi devant le tribunal de Paris pour s\'expliquer."',
      },
      {
        letter: 'D',
        text: '"Et s\'il semble désormais un sujet brûlant, le contrôle de l\'âge s\'annonce difficile (…)"',
      },
      {
        letter: 'E',
        text: '"Ce réseau social a la particularité de ne pas bannir la pornographie dans ses conditions d\'utilisation"',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q66-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2023-q67-fr',
    examId: EXAM_ID,
    originalNumber: 67,
    originalCode: 'UFRR 2023 · Q67 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'D’après le texte, par rapport aux réseaux sociaux, on peut dire que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Twitter et Instagram sont accusés de ne pas protéger les mineurs lors de leur navigation.',
      },
      {
        letter: 'B',
        text: 'Instagram est bien préoccupé avec les données personnelles des mineurs.',
      },
      {
        letter: 'C',
        text: 'Twitter a une forte protection contre des contenus pornographiques.',
      },
      {
        letter: 'D',
        text: 'Aucune loi n\'a été publiée pour réglementer l\'accès des mineurs à internet.',
      },
      {
        letter: 'E',
        text: 'La simple disposition d\'une case spéciale lorsqu\'il y a un contenu sensible suffit à protéger les mineurs.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q67-fr', correctLetter: null },
    provenance: makeProv(27),
  },
  {
    id: 'ufrr-2023-q68-fr',
    examId: EXAM_ID,
    originalNumber: 68,
    originalCode: 'UFRR 2023 · Q68 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Morphologie — Pluriel des Noms et Adjectifs',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'Cochez les formes correctes du pluriel: "réseau - l\'idée – l\'oiseau bleu – sujet":',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'réseaux – les idées – les oiseaux bleus - sujets' },
      { letter: 'B', text: 'réseaux – l\'idées – les oiseaux bleux - sujeux' },
      { letter: 'C', text: 'réseaus – l\'idées – l\'oiseaux bleus - sujets' },
      { letter: 'D', text: 'réseaux – les idée – les oiseaus bleu - sujeux' },
      { letter: 'E', text: 'réseaus – les idées – les oiseaux bleux - sujets' },
    ],
    answerKey: { questionId: 'ufrr-2023-q68-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2023-q69-fr',
    examId: EXAM_ID,
    originalNumber: 69,
    originalCode: 'UFRR 2023 · Q69 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'D\'après la lecture du deuxième paragraphe "D\'abord … suffi", on peut conclure que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Instagram a mis en place un test qui permet de savoir si l\'utilisateur est mineur. Cette action est suffisante pour la Comission irlandaise pour la protection des données.',
      },
      {
        letter: 'B',
        text: 'Les fonctionnalités d\'un compte professionnel sur le réseau social sont spécifiquement destinées aux mineurs.',
      },
      {
        letter: 'C',
        text: 'Le réseau social a violé le règlement général sur la protection des données, autant que n\'a pas fait attention à l\'accès des mineurs.',
      },
      {
        letter: 'D',
        text: 'Le régulateur irlandais le régulateur irlandais n\'identifie aucun problème de partage de données et d\'accès des mineurs aux réseaux sociaux.',
      },
      {
        letter: 'E',
        text: 'L\'association Alerweb s\'occupe du partage des données des mineurs entre utilisateurs des réseaux sociaux',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q69-fr', correctLetter: null },
    editorialNote:
      'Grafia original (“Comission” na alternativa A e repetição “Le régulateur irlandais le régulateur irlandais” na alternativa D) preservada.',
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2023-q70-fr',
    examId: EXAM_ID,
    originalNumber: 70,
    originalCode: 'UFRR 2023 · Q70 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Temps Verbaux',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: `Les constructions verbales soulignées dans les extraits

"D'abord, le réseau social Instagram __a été__ condamné, (…)"
"La Commission irlandaise pour la protection des données, qui __agit__ au nom (…)"
"(…) la société Meta - qui possède Instagram - __n'a pas mis__ en place (…)"
"Pour montrer sa bonne foi, Instagram __avait annoncé__ (…)"

sont classifiées respectivement comme:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'passé composé – présent – passé composé – imparfait',
      },
      {
        letter: 'B',
        text: 'passé composé – présent – passé composé – plus-que-parfait',
      },
      {
        letter: 'C',
        text: 'imparfait – présent – passé composé – plus-que-parfait',
      },
      {
        letter: 'D',
        text: 'passé simple – passé composé – plus-que-parfait – présent',
      },
      {
        letter: 'E',
        text: 'imparfait – plus-que-parfait – présent - présent',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q70-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2023-q71-fr',
    examId: EXAM_ID,
    originalNumber: 71,
    originalCode: 'UFRR 2023 · Q71 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Compréhension écrite',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: `Après la lecture du texte, analysez les énoncés et cochez la réponse contenant les affirmations correctes:

I. Plusieurs réseaux sociaux sont pointés du doigt pour ne pas protéger les mineurs.
II. Les associations qui représentent la cyberviolence publient les données des utilisateurs, surtout les mineurs.
III. Il n'y a pas de barrières pour l'accès des mineurs aux sites pornographiques, malgré la loi.`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I et II' },
      { letter: 'B', text: 'I et III' },
      { letter: 'C', text: 'II et III' },
      { letter: 'D', text: 'Les trois affirmations sont correctes.' },
      { letter: 'E', text: 'Aucune affirmation est correcte.' },
    ],
    answerKey: { questionId: 'ufrr-2023-q71-fr', correctLetter: null },
    provenance: makeProv(28),
  },
  {
    id: 'ufrr-2023-q72-fr',
    examId: EXAM_ID,
    originalNumber: 72,
    originalCode: 'UFRR 2023 · Q72 (FR)',
    foreignLanguage: 'Francês',
    year: 2023,
    edition: 'UFRR 2023',
    modality: 'Prova Integral',
    examName: EXAM_NAME,
    classification: {
      subject: 'Língua Estrangeira',
      subSubjectGroup: 'Francês',
      topic: 'Morphosyntaxe — Accord Nominal et Verbal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2023-fr-t1'],
    stem: 'Cochez la réponse dans laquelle la phrase est correctement construite pour ce qui est d\'accord nominal et verbal.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'L\'association Alerweb montres qu\'il est très facile de contourner le système et d\'accéder à des sites pornographique.',
      },
      {
        letter: 'B',
        text: 'Il ne devrai pas être possible d\'accéder à des site pornographiques si vous n\'êtes pas majeur.',
      },
      {
        letter: 'C',
        text: 'Les réseaux social ne se soucie pas de la sécurité des mineurs lors de la navigation.',
      },
      {
        letter: 'D',
        text: 'Pour la fin, les sites pornographiques ont été convoqués pour expliquer le manque de contrôle de l\'âge dans l\'accès.',
      },
      {
        letter: 'E',
        text: 'Il y a une base juridique imposé à Twitter depuis 2020, mais presque rien n\'a changée en deux ans.',
      },
    ],
    answerKey: { questionId: 'ufrr-2023-q72-fr', correctLetter: null },
    provenance: makeProv(28),
  },
];

export const UFRR_2023_EXAM: ExamEdition = {
  id: EXAM_ID,
  name: EXAM_NAME,
  shortName: 'UFRR 2023 Integral',
  year: 2023,
  edition: 'UFRR 2023',
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
  essayPrompt: ESSAY_PROMPT_2023,
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
    'Edição UFRR 2023 importada fielmente do caderno oficial, incluindo tabelas estruturadas em Biologia (Q21 e Q26) e figuras originais de Física, Química e Geografia.',
  questionIds: UFRR_2023_QUESTIONS.map((q) => q.id),
};
