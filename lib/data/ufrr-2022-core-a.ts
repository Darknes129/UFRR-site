import type { Question } from '../types';
import {
  EXAM_ID_2022,
  EXAM_NAME_2022,
  SVG_2022_Q29,
  SVG_2022_Q35_A,
  SVG_2022_Q35_B,
  SVG_2022_Q35_C,
  SVG_2022_Q35_D,
  SVG_2022_Q35_E,
  TABLE_2022_Q19,
  TABLE_2022_Q27,
  TABLE_2022_Q32,
  makeProv2022,
} from './ufrr-2022-texts';

export const UFRR_2022_CORE_A: Question[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    id: 'ufrr-2022-q01',
    examId: EXAM_ID_2022,
    originalNumber: 1,
    originalCode: 'UFRR 2022 · Q01',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Estilística — Figuras de Linguagem (Metáfora)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'No enunciado “*as Terras Indígenas aparecem como verdadeiros oásis de florestas*”, extraído de WAPICHANA, Cristino. *A Boca da Noite*. Rio de Janeiro: ZIT, 2016 (1ªedição), verificamos o uso do sentido figurado, por meio da construção de uma figura de linguagem bastante produtiva – metáfora - que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'apresenta ideias antagônicas, em conflito: oásis X florestas.',
      },
      {
        letter: 'B',
        text: 'atenua os malefícios da exploração do homem sobre as vastas extensões de terras devastadas.',
      },
      {
        letter: 'C',
        text: 'aproxima ideias de campos semânticos não relacionados: **oásis** (lugar de bem estar) e **florestas** (lugar de presença de vasta vegetação verde).',
      },
      {
        letter: 'D',
        text: 'exagera a importância e o valor das florestas porque estas se transformam em oásis.',
      },
      {
        letter: 'E',
        text: 'apresenta de maneira gradativa o progresso das florestas que se transformam em oásis.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q01', correctLetter: null },
    provenance: makeProv2022(3),
  },
  {
    id: 'ufrr-2022-q02',
    examId: EXAM_ID_2022,
    originalNumber: 2,
    originalCode: 'UFRR 2022 · Q02',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Brasileira — Arcadismo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2022-pt-t1'],
    stem: 'Neste soneto podemos observar que o tema demonstra uma preocupação do eu-lírico com a passagem do tempo e com a mutação de suas memórias no espaço idealizado – a natureza. A natureza está impregnada das memórias e guarda alegrias e tristezas do eu-lírico. Essa aproximação eu-lírico e paisagem denota um gosto pela vida idílica no campo. Esse traço nos remete ao período:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'colonial, que valoriza as construções históricas da época.',
      },
      {
        letter: 'B',
        text: 'árcade, que se inspira na simplicidade ao fugir do sofrimento barroco, antecipando as idealizações românticas.',
      },
      {
        letter: 'C',
        text: 'barroco, ao contrastar a realidade divina com a mundana.',
      },
      {
        letter: 'D',
        text: 'renascentista, que realça as questões nacionais sobre as terras brasileiras.',
      },
      {
        letter: 'E',
        text: 'trovadoresco, que valoriza as cantigas medievais líricas, conhecidas como cantigas de amigo.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q02', correctLetter: null },
    provenance: makeProv2022(3),
  },
  {
    id: 'ufrr-2022-q03',
    examId: EXAM_ID_2022,
    originalNumber: 3,
    originalCode: 'UFRR 2022 · Q03',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Interpretação de Texto Literário — Lírica Árcade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2022-pt-t1'],
    stem: 'A temática do poema permite colocar em evidência os sentimentos do eu-lírico, que revisita os locais campestres onde já foi feliz. A paisagem assume o lugar de personagem ao aparecer personificada: ela continua a mesma, mas foi testemunha e carrega as memórias de alegria (passado) e tristeza (presente) do eu-poético. Podemos comprovar a dualidade construída para a representação da paisagem com o fragmento:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '“São estes inda os mesmos arvoredos; / Esta é a mesma rústica floresta.”(v.3/4)',
      },
      {
        letter: 'B',
        text: '“Este é o rio, a montanha é esta, / Estes os troncos, estes os rochedos;” (v.1/2)',
      },
      {
        letter: 'C',
        text: '“Tudo me está a memória retratando.” (v.12)',
      },
      {
        letter: 'D',
        text: '”Que de amor nos suavíssimos enredos / Foi cena alegre, e urna é já funesta.”(v.7/8)',
      },
      {
        letter: 'E',
        text: '“Tudo cheio de horror se manifesta, / Rio, montanha, troncos, e penedos;”(v.5/6)',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q03', correctLetter: null },
    provenance: makeProv2022(3),
  },
  {
    id: 'ufrr-2022-q04',
    examId: EXAM_ID_2022,
    originalNumber: 4,
    originalCode: 'UFRR 2022 · Q04',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Morfossintaxe — Pronomes Pessoais e Funções Sintáticas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere o segmento de texto, extraído da “CARTA DE UMA MÃE, COSTUREIRA, À REDAÇÃO DO "JORNAL DA TARDE", in AMADO, Jorge. *Capitães da Areia*. Rio de Janeiro: José Olympio Editora, 1937, pp.28-29:

“Sr. Redator:
Desculpe os erros e a letra pois não sou custumeira nestas coisas de escrever e se hoje venho a vossa presença é para botar os pontos nos ii. Vi no jornal uma noticia sobre os furtos dos ‘Capitães da Areia’ e logo depois veio a policia e disse que ia perseguir eles” (...)

Em “...e disse que ia perseguir eles...”, o uso do pronome pessoal reto em sentença na posição de complemento verbal é típico de variante coloquial, aqui expressa pela fala de uma costureira. Pela norma culta, e em se tratando de um texto escrito, o pronome pessoal oblíquo - **o** – (e as alterações derivadas desse uso) é a forma adequada para ocupar o lugar de um termo sintático conhecido como:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'objeto direto' },
      { letter: 'B', text: 'adjunto adverbial' },
      { letter: 'C', text: 'aposto' },
      { letter: 'D', text: 'complemento nominal' },
      { letter: 'E', text: 'sujeito' },
    ],
    answerKey: { questionId: 'ufrr-2022-q04', correctLetter: null },
    provenance: makeProv2022(3),
  },
  {
    id: 'ufrr-2022-q05',
    examId: EXAM_ID_2022,
    originalNumber: 5,
    originalCode: 'UFRR 2022 · Q05',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Coesão Textual — Referenciação Anafórica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em março de 2019, na Universidade Federal de Goiás (UFG), na palestra de abertura do Congresso Adolescer 2019 intitulada “O ato na adolescência: como a inclusão na sociedade é importante”, a professora do curso de psicologia da USP Miriam Debiex destacou a necessidade de construirmos um laço social que acolha a juventude.

O Jornal da Universidade Federal de Goiás (UFG) publicou matéria sobre a palestra, da qual extraímos o parágrafo a seguir:

“Para ela, as pessoas sofrem de falta de memória sobre sua própria adolescência. Acham que a adolescência é o tempo da alegria, e esse pensamento acaba ensurdecendo a adolescência atual. Porque é um tempo de frustrações, de dilemas. A cobrança dessa alegria é uma forma de agressão. E isso se dá de forma ainda mais grave entre os adolescentes já marginalizados, dando-se ênfase à frustração quanto ao que o adolescente deveria ser. A rotulação faz com que o adolescente seja reduzido ao ato produzido, por exemplo um crime, quando ele é mais do que isso. ‘Atribuir identidades como marginal, drogado, engessam o jovem, eliminam tudo mais que ele é’. Segundo ela, ‘O laudo de periculosidade é exemplo disso, transpõe para a psicologia um discurso ideológico e atribui um tratamento diferente entre classes sociais’.”

*Acesso em 19/10/2021. Disponível em https://jornal.ufg.br/n/115236-o-ato-na-adolescencia-como-a-inclusao-na-sociedade-e-importante*

“O laudo de periculosidade é exemplo __disso__, transpõe para a psicologia um discurso ideológico e atribui um tratamento diferente entre classes sociais”.

No trecho destacado acima, observamos na fala da palestrante que a utilização do termo __disso__ na sentença, faz referência a alguma informação já apresentada no parágrafo reproduzido, e que pode ser reconhecida em:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '“A rotulação faz com que o adolescente seja reduzido ao ato produzido...”.',
      },
      {
        letter: 'B',
        text: '“E isso se dá de forma ainda mais grave entre os adolescentes já marginalizados...”.',
      },
      {
        letter: 'C',
        text: '“A cobrança dessa alegria é uma forma de agressão”.',
      },
      {
        letter: 'D',
        text: '“A rotulação faz com que o adolescente seja reduzido ao ato produzido”.',
      },
      {
        letter: 'E',
        text: '“Atribuir identidades como marginal, drogado, engessam o jovem, eliminam tudo mais que ele é”.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q05', correctLetter: null },
    provenance: makeProv2022(4),
  },
  {
    id: 'ufrr-2022-q06',
    examId: EXAM_ID_2022,
    originalNumber: 6,
    originalCode: 'UFRR 2022 · Q06',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Brasileira — Romantismo (Indianismo)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `**CANÇÃO DO TAMOIO**, de Antonio Gonçalves Dias, um poema laudatório de qualidades idealizadas do indígena brasileiro, que simboliza o herói nacional, conforme ideário do Romantismo do século XIX, se dirige a um guerreiro Tamoio, enaltecendo sua coragem e ousadia para lutar por conquistas e honrar o nome do pai, mesmo diante da morte. Construído em redondilha menor (5 sílabas métricas) em todos os versos das 10 estrofes, o ritmo rápido e acelerado da musicalidade poética ajuda a produzir a ambientação frenética diante da preparação para o combate.

No início do século XIX, esta visão idealizada das nações indígenas foi promovida como marca de valorização da busca pelo:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'passado colonial escravocrata.' },
      { letter: 'B', text: 'passado nobre da família real portuguesa.' },
      { letter: 'C', text: 'presente ultraconservador das oligarquias.' },
      {
        letter: 'D',
        text: 'presente nacionalista em luta pela identidade nacional.',
      },
      {
        letter: 'E',
        text: 'futuro promissor idealizado pelos republicanos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q06', correctLetter: null },
    provenance: makeProv2022(4),
  },
  {
    id: 'ufrr-2022-q07',
    examId: EXAM_ID_2022,
    originalNumber: 7,
    originalCode: 'UFRR 2022 · Q07',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      subSubjectGroup: 'Literatura',
      topic: 'Literatura Brasileira Contemporânea — Conceição Evaristo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O romance **Ponciá Vicêncio** - EVARISTO, Conceição. Ponciá Vicêncio. 3ªedição. Rio de Janeiro: Pallas, 2017, p.70-72, narra uma parte da estória de vida da protagonista que dá título ao livro. É uma mulher negra, de família pobre, que, após a morte do pai, sai da casa na roça pra procurar outras oportunidades na cidade. O mesmo ocorre com os demais personagens de seu núcleo familiar – o irmão também sai à procura de uma vida melhor na cidade e a mãe, por último, sai em busca dos 2 filhos, porque estava envelhecendo sozinha. O romance cria um mosaico-miniatura de uma diáspora familiar, repetindo o destino de negros africanos escravizados em África e trazidos ao Brasil, famílias separadas. A procura por identidade e pertencimento atinge os personagens de maneira semelhante, embora tenham sonhos diferentes. Percebemos o sofrimento e a angústia que levam Ponciá à insatisfação e desesperança, porque sentia falta dos familiares mais próximos com quem conviveu na roça – mãe e irmão, cada um deles num local diferente, buscando um novo destino.

Com base na descrição acima, pode-se afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As perdas sucessivas de filhos vivenciadas por Ponciá geraram seu questionamento e revolta buscando uma resposta pela arte.',
      },
      {
        letter: 'B',
        text: 'Mesmo as famílias negras tendo recebido alforria por lei no Brasil do século XIX, muitos anos depois muitas delas continuam sofrendo e escravas da pobreza e miséria.',
      },
      {
        letter: 'C',
        text: 'Sua infância na roça era vivida com muita igualdade de recursos entre as famílias de brancos e negros.',
      },
      {
        letter: 'D',
        text: 'Sua vida na cidade atendeu a suas expectativas de uma vida melhor do que aquela da qual tinha fugido.',
      },
      {
        letter: 'E',
        text: 'Os exemplos familiares levaram Ponciá a acreditar que teria uma vida melhor que a de seus antepassados.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q07', correctLetter: null },
    provenance: makeProv2022(4),
  },
  {
    id: 'ufrr-2022-q08',
    examId: EXAM_ID_2022,
    originalNumber: 8,
    originalCode: 'UFRR 2022 · Q08',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Coesão e Conectivos — Valores Semânticos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: ['ufrr-2022-pt-t2'],
    stem: 'No texto II, os conectivos em destaque figuram em diferentes períodos, construindo sintaticamente a ideia de mostrar a diferença entre os salários de brancos e negros. Esses termos carregam, respectivamente, os sentidos de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'alternância e condição' },
      { letter: 'B', text: 'proporção e adversatividade' },
      { letter: 'C', text: 'comparação e concessão' },
      { letter: 'D', text: 'explicação e adição' },
      { letter: 'E', text: 'tempo e conclusão' },
    ],
    answerKey: { questionId: 'ufrr-2022-q08', correctLetter: null },
    provenance: makeProv2022(5),
  },
  {
    id: 'ufrr-2022-q09',
    examId: EXAM_ID_2022,
    originalNumber: 9,
    originalCode: 'UFRR 2022 · Q09',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Língua Portuguesa',
      topic: 'Sintaxe e Emprego do Sinal Indicativo de Crase',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O poema *Corpo-África* foi publicado no portal da literatura afro-brasileira – LITERAFRO - em setembro de 2021, em cujo tema assim se lia: *RESISTIR/EXISTIR: a poesia afro-brasileira nos Cadernos Negros 39*, um poema contemporâneo que é construído por meio da força criadora da linguagem figurada como um desabafo do eu-lírico, em que 2 mundos em conflito estão apartados pelo racismo. Há um jogo de algumas metonímias cuja maior expressão está resumida em seu título *Corpo-África*. Em vários versos, percebemos as partes do corpo sendo mencionadas como representantes desse todo que seria a identidade africana sendo negada e silenciada pelo racismo estrutural da sociedade ou, então, partes do outro corpo adversário, causadores do sofrimento do eu-lírico.

Nesse contexto, considere as alternativas a seguir e assinale a que apresenta o uso CORRETO da crase.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Há a demonstração que devemos ser contrários àqueles que defendem o preconceito racial.',
      },
      {
        letter: 'B',
        text: 'Há particularidades de vivência à ser vinculada ao mundo africano.',
      },
      {
        letter: 'C',
        text: 'A representação do navio negreiro leva à pensar em pessoas que têm seu mundo compartilhado com outros.',
      },
      {
        letter: 'D',
        text: 'A implementação de uma concepção de inferiorização cria uma alusão à crimes com perdão.',
      },
      {
        letter: 'E',
        text: 'O corpo intensifica à uma comunhão de forças e de raças.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q09', correctLetter: null },
    provenance: makeProv2022(5),
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    id: 'ufrr-2022-q10',
    examId: EXAM_ID_2022,
    originalNumber: 10,
    originalCode: 'UFRR 2022 · Q10',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Teoria dos Conjuntos e Porcentagem',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Suponha que a população do estado de Roraima seja de aproximadamente 650 mil habitantes. Considere que 45% da população do estado foi totalmente imunizada contra a COVID-19 (tomou a 2ª dose ou vacina de dose única) e que 64% da população foi imunizada contra a influenza H1N1. Supondo que 20% da população não tomou nem uma das duas vacinas, o total da população do estado totalmente imunizada apenas com a vacina contra a COVID-19 foi de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '104 mil habitantes' },
      { letter: 'B', text: '286 mil habitantes' },
      { letter: 'C', text: '130 mil habitantes' },
      { letter: 'D', text: '234 mil habitantes' },
      { letter: 'E', text: '416 mil habitantes' },
    ],
    answerKey: { questionId: 'ufrr-2022-q10', correctLetter: null },
    provenance: makeProv2022(5),
  },
  {
    id: 'ufrr-2022-q11',
    examId: EXAM_ID_2022,
    originalNumber: 11,
    originalCode: 'UFRR 2022 · Q11',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Funções Exponenciais e Logaritmos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Nos primeiros dias, os modelos epidemiológicos apresentam um crescimento exponencial. Matematicamente, o número de infectados em função do tempo é dado pela expressão $I(t) = I_1 e^{r(t-1)}$, onde $t$ é o tempo dado em dias, $I_1$ é o número de infectados no 1º dia ($t = 1$), $e$ é o número de Euler e $r$ é a taxa de crescimento do número de casos. Em Roraima, o número de infectados por COVID-19 no 1º dia foi de 2 pessoas e a taxa de crescimento $r$ da infecção era de 0,25. Considerando $\\log_e 8 = 2{,}25$, o dia em que Roraima possuía 16 infectados foi:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '7º dia de infecção' },
      { letter: 'B', text: '8º dia de infecção' },
      { letter: 'C', text: '9º dia de infecção' },
      { letter: 'D', text: '10º dia de infecção' },
      { letter: 'E', text: '11º dia de infecção' },
    ],
    answerKey: { questionId: 'ufrr-2022-q11', correctLetter: null },
    provenance: makeProv2022(5),
  },
  {
    id: 'ufrr-2022-q12',
    examId: EXAM_ID_2022,
    originalNumber: 12,
    originalCode: 'UFRR 2022 · Q12',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Função Quadrática e Áreas (Soma de Riemann)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Considere a função $f: \\mathbb{R} \\to \\mathbb{R}$ definida por $f(x) = mx^2 + \\frac{1}{3}$ onde $m$ é um número real. A figura a seguir, representa graficamente 3 retângulos e parte do gráfico de $f$. De acordo com a figura e sabendo que a soma das áreas destes retângulos é igual a 12, o valor de $m$ é:',
    graphics: [
      {
        id: 'ufrr-2022-g-q12',
        type: 'image',
        imageUrl: '/exam-assets/2022/q12-area-retangulos.png',
        altText:
          'Gráfico cartesiano da curva f com três retângulos inscritos sobre os intervalos [1,3], [3,5] e [5,7].',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$1/8$' },
      { letter: 'B', text: '$7$' },
      { letter: 'C', text: '$8$' },
      { letter: 'D', text: '$7/8$' },
      { letter: 'E', text: '$1/7$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q12', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q13',
    examId: EXAM_ID_2022,
    originalNumber: 13,
    originalCode: 'UFRR 2022 · Q13',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Matrizes e Identidades Trigonométricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Se as matrizes $A$ e $B$ são definidas como

$$A = \\begin{pmatrix} \\text{sen } x & 1 \\\\ \\cos x & 1 \\end{pmatrix} \\quad \\text{e} \\quad B = \\begin{pmatrix} \\text{sen } x & -\\cos x \\\\ -1 & 1 \\end{pmatrix}$$

para todo $x$ real, então a soma dos elementos da diagonal principal da matriz $C = AB$ é igual a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$-\\cos 2x$' },
      { letter: 'B', text: '$1$' },
      { letter: 'C', text: '$\\text{sen } 2x$' },
      { letter: 'D', text: '$-1$' },
      { letter: 'E', text: '$\\cos 2x$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q13', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q14',
    examId: EXAM_ID_2022,
    originalNumber: 14,
    originalCode: 'UFRR 2022 · Q14',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Aritmética e Fatorial',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O algarismo das unidades do número

$$S = 1! + 2! + 3! + \\cdots + 2022!$$

é igual a:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$2$' },
      { letter: 'B', text: '$6$' },
      { letter: 'C', text: '$3$' },
      { letter: 'D', text: '$7$' },
      { letter: 'E', text: '$5$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q14', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q15',
    examId: EXAM_ID_2022,
    originalNumber: 15,
    originalCode: 'UFRR 2022 · Q15',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Equações Trigonométricas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O conjunto solução da equação trigonométrica

$$\\text{sen}^4 x + \\cos^4 x = \\frac{7}{8}$$

no intervalo $[0, \\pi]$ é dado por:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}\\right\\}$',
      },
      {
        letter: 'B',
        text: '$\\left\\{\\dfrac{5\\pi}{12}, \\dfrac{7\\pi}{12}, \\dfrac{11\\pi}{12}\\right\\}$',
      },
      {
        letter: 'C',
        text: '$\\left\\{\\dfrac{\\pi}{12}, \\dfrac{5\\pi}{12}\\right\\}$',
      },
      {
        letter: 'D',
        text: '$\\left\\{\\dfrac{\\pi}{12}, \\dfrac{5\\pi}{12}, \\dfrac{7\\pi}{12}, \\dfrac{11\\pi}{12}\\right\\}$',
      },
      {
        letter: 'E',
        text: '$\\left\\{\\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\right\\}$',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q15', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q16',
    examId: EXAM_ID_2022,
    originalNumber: 16,
    originalCode: 'UFRR 2022 · Q16',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Números Complexos — Potenciação (Fórmula de De Moivre)',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O valor de $\\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}i\\right)^{15}$ é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$i$' },
      { letter: 'B', text: '$1$' },
      { letter: 'C', text: '$-i$' },
      { letter: 'D', text: '$1 - i$' },
      { letter: 'E', text: '$-1$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q16', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q17',
    examId: EXAM_ID_2022,
    originalNumber: 17,
    originalCode: 'UFRR 2022 · Q17',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Geometria Analítica — Circunferência e Parábola',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma parábola tem vértice na origem do sistema cartesiano e seu foco coincide com o centro de uma circunferência cuja equação é $x^2 + y^2 - 4y = 0$.

A equação desta parábola é:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$x^2 = 4y$' },
      { letter: 'B', text: '$y^2 = 8x$' },
      { letter: 'C', text: '$x^2 = 16y$' },
      { letter: 'D', text: '$y^2 = 4x$' },
      { letter: 'E', text: '$x^2 = 8y$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q17', correctLetter: null },
    provenance: makeProv2022(6),
  },
  {
    id: 'ufrr-2022-q18',
    examId: EXAM_ID_2022,
    originalNumber: 18,
    originalCode: 'UFRR 2022 · Q18',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Matemática',
      topic: 'Polinômios — Transformação de Variável',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Se $P(x - 1) = x^2 - 1$, então podemos afirmar que:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$P(x) = x^2 + 4x + 3$' },
      { letter: 'B', text: '$P(x + 1) = x^2 + 2x$' },
      { letter: 'C', text: '$P(x + 1) = x^2 + 4x + 3$' },
      { letter: 'D', text: '$P(x) = x^2 + x$' },
      { letter: 'E', text: '$P(x + 1) = x^2 + 4x + 1$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q18', correctLetter: null },
    provenance: makeProv2022(7),
  },

  // ================= BIOLOGIA (Q19–Q27) =================
  {
    id: 'ufrr-2022-q19',
    examId: EXAM_ID_2022,
    originalNumber: 19,
    originalCode: 'UFRR 2022 · Q19',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Divisão Celular — Mitose e Meiose',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Mitose e meiose são dois processos de divisão celular que ocorrem em células eucarióticas. Em relação à ocorrência desses dois processos em células haploides (n) e diploides (2n) assinale a alternativa CORRETA.',
    tableHtml: TABLE_2022_Q19,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Mitose: somente em n | Meiose: somente em 2n',
      },
      {
        letter: 'B',
        text: 'Mitose: em n e 2n | Meiose: somente em 2n',
      },
      {
        letter: 'C',
        text: 'Mitose: em n e 2n | Meiose: em n e 2n',
      },
      {
        letter: 'D',
        text: 'Mitose: somente em 2n | Meiose: somente em n',
      },
      {
        letter: 'E',
        text: 'Mitose: somente em 2n | Meiose: em n e 2n',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q19', correctLetter: null },
    provenance: makeProv2022(7),
  },
  {
    id: 'ufrr-2022-q20',
    examId: EXAM_ID_2022,
    originalNumber: 20,
    originalCode: 'UFRR 2022 · Q20',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Citologia — Membrana Plasmática e Transporte',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Estudos realizados na década de 1950 indicaram que bactérias com uma mutação em um único gene eram incapazes de transportar açúcares através da sua membrana plasmática. Hoje sabemos que seres humanos com mutações semelhantes sofrem de vários tipos de doenças hereditárias que afetam o transporte de solutos específicos ou classes de solutos no rim, no intestino ou em muitos outros tipos celulares.”

*Fonte: Biologia Molecular da célula, Bruce Alberts et al.*

As doenças hereditárias referidas no texto alteram:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'a produção de lipídios específicos que transportam açúcares.',
      },
      {
        letter: 'B',
        text: 'a fluidez da bicamada lipídica, prejudicando a passagem de solutos.',
      },
      {
        letter: 'C',
        text: 'o transporte de solutos apenas em células dos rins e do intestino.',
      },
      {
        letter: 'D',
        text: 'o transporte ativo de solutos específicos por meio do bloqueio da produção de ATP.',
      },
      {
        letter: 'E',
        text: 'a produção de proteínas funcionais de membrana.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q20', correctLetter: null },
    provenance: makeProv2022(7),
  },
  {
    id: 'ufrr-2022-q21',
    examId: EXAM_ID_2022,
    originalNumber: 21,
    originalCode: 'UFRR 2022 · Q21',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Histologia e Fisiologia Muscular',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `No corpo humano, encontramos dois principais tipos de fibras musculares esqueléticas: as fibras de contração lenta, também chamadas fibras vermelhas, que apresentam muitas mitocôndrias e alta concentração de mioglobina, proteína carregadora de oxigênio, e fibras de contração rápida, de cor branca, com baixo teor de mioglobina, poucas mitocôndrias e menos vasos sanguíneos do que as fibras lentas. As fibras lentas se contraem mais lentamente, mas são capazes de manter contrações por longos períodos enquanto as fibras rápidas se contraem rapidamente. Porém, por períodos muito curtos de tempo.

Sobre essas fibras considere as seguintes afirmações:

I. As fibras vermelhas mantêm as contrações por longos períodos, pois têm capacidade de carregar oxigênio e utilizar gorduras e carboidratos como fonte de energia.
II. As fibras brancas, de contração rápida, são adaptadas para atividades aeróbicas de resistência, como correr uma maratona.
III. A produção de ATP nas fibras brancas, de contração rápida, durante exercício intenso, é feita por meio de fermentação lática.

Sobre essas afirmações pode-se dizer que está(ão) CORRETA(S) apenas:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I e III' },
      { letter: 'B', text: 'I e II' },
      { letter: 'C', text: 'II e III' },
      { letter: 'D', text: 'I, II e III' },
      { letter: 'E', text: 'III' },
    ],
    answerKey: { questionId: 'ufrr-2022-q21', correctLetter: null },
    provenance: makeProv2022(7),
  },
  {
    id: 'ufrr-2022-q22',
    examId: EXAM_ID_2022,
    originalNumber: 22,
    originalCode: 'UFRR 2022 · Q22',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Ciclos de Vida e Alternância de Gerações',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Uma característica universal dos ciclos de vida das plantas terrestres é a alternância de gerações. O ciclo de vida inclui tanto indivíduos diploides multicelulares quanto indivíduos haploides multicelulares. Ao longo da evolução das plantas ocorreu uma redução da geração gametofítica, haploide. Nas plantas avasculares, o gametófito, geração haploide, é maior, de vida mais longa e mais autossuficiente que o esporófito, geração diploide. Entretanto, naqueles grupos que apareceram mais tarde na evolução das plantas, a geração esporofítica é a maior, de vida mais longa e mais autossuficiente.

*Adaptado de Sadava et al, Vida: a ciência da biologia, vol 2.*

No esquema abaixo, as setas representam processos que ocorrem na alternância de gerações em plantas.

As setas numeradas de 1 a 4 correspondem respectivamente aos processos de:`,
    graphics: [
      {
        id: 'ufrr-2022-g-q22',
        type: 'image',
        imageUrl: '/exam-assets/2022/q22-alternancia.jpg',
        altText:
          'Esquema de alternância de gerações em plantas com setas numeradas de 1 a 4 ligando ZIGOTO, GERAÇÃO DIPLOIDE, ESPOROS, GERAÇÃO DIPLOIDE e GAMETAS.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '1-mitose, 2-mitose, 3-meiose, 4-mitose' },
      { letter: 'B', text: '1-mitose, 2-mitose, 3-mitose, 4-meiose' },
      { letter: 'C', text: '1-meiose, 2-mitose, 3-mitose, 4-meiose' },
      { letter: 'D', text: '1-mitose, 2-meiose, 3-mitose, 4-mitose' },
      { letter: 'E', text: '1-mitose, 2-meiose, 3-mitose, 4-meiose' },
    ],
    answerKey: { questionId: 'ufrr-2022-q22', correctLetter: null },
    editorialNote:
      'No esquema original impresso no caderno oficial, ambos os quadros superiores trazem a grafia "GERAÇÃO DIPLOIDE", preservada na figura original.',
    provenance: makeProv2022(8),
  },
  {
    id: 'ufrr-2022-q23',
    examId: EXAM_ID_2022,
    originalNumber: 23,
    originalCode: 'UFRR 2022 · Q23',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Evolução e Sistemática Filogenética',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A escola de classificação filogenética considera que a diversidade dos seres vivos é resultante de processos evolutivos. Nesse contexto, o cladograma é uma ferramenta usada na reconstrução da história evolutiva das espécies. Os cladogramas são construídos a partir de três elementos básicos: os clados, organismos sobre os quais deseja-se compreender as evolutivas; as linhas, que representam o tempo evolutivo; e os nós, que representam ancestrais comuns para todos os grupos que estão acima dos nós. A escola de classificação filogenética considera como táxons válidos aqueles que compartilham um ancestral comum exclusivo. O esquema a seguir mostra um exemplo de cladograma.

*FONTE: https://evosite.ib.usp.br/evo101/IIDClassification.shtml acesso em 4/11/2021*

Com base no texto e na análise do cladograma, assinale a afirmativa INCORRETA.`,
    graphics: [
      {
        id: 'ufrr-2022-g-q23',
        type: 'image',
        imageUrl: '/exam-assets/2022/q23-cladograma.png',
        altText:
          'Cladograma apresentando Tartarugas, Lagartos, Cobras, Aves, Dinossauros Não aviários e Crocodilianos.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'Répteis formam um táxon filogeneticamente válido.' },
      {
        letter: 'B',
        text: 'Aves e dinossauros não aviários formam um táxon filogeneticamente válido.',
      },
      {
        letter: 'C',
        text: 'Tartarugas formam um táxon filogeneticamente válido',
      },
      {
        letter: 'D',
        text: 'Crocodilianos formam um táxon filogeneticamente válido.',
      },
      {
        letter: 'E',
        text: 'Cobras e lagartos formam um táxon filogeneticamente válido.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q23', correctLetter: null },
    editorialNote:
      'Redação original “deseja-se compreender as evolutivas” preservada conforme o caderno oficial.',
    provenance: makeProv2022(8),
  },
  {
    id: 'ufrr-2022-q24',
    examId: EXAM_ID_2022,
    originalNumber: 24,
    originalCode: 'UFRR 2022 · Q24',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Botânica — Reprodução das Angiospermas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `As flores são ramos altamente especializados nos quais se formam as estruturas reprodutivas das angiospermas. Uma flor apresenta geralmente quatro conjuntos de folhas especializadas dispostas em torno de um ramo curto chamado receptáculo floral: sépalas, pétalas, androceu e gineceu. Sépalas e pétalas são folhas estéreis, isto é, não formam elementos reprodutivos. O androceu é a parte masculina da flor, onde se formam os grãos de pólen. O gineceu é a parte feminina da flor, na qual se formam os óvulos e onde ocorre a fecundação.

Nesse cenário, no desenvolvimento das angiospermas após a fecundação, o óvulo`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'dá origem à semente.' },
      { letter: 'B', text: 'e o grão de pólen dão origem ao embrião.' },
      { letter: 'C', text: 'e o ovário dão origem ao fruto.' },
      { letter: 'D', text: 'e o anterozoide se fundem formando o embrião.' },
      { letter: 'E', text: 'dá origem ao fruto.' },
    ],
    answerKey: { questionId: 'ufrr-2022-q24', correctLetter: null },
    provenance: makeProv2022(8),
  },
  {
    id: 'ufrr-2022-q25',
    examId: EXAM_ID_2022,
    originalNumber: 25,
    originalCode: 'UFRR 2022 · Q25',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Biologia Molecular e Imunologia — Vacinas Gênicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Pesquisas com vacinas gênicas estão sendo desenvolvidas há pouco mais de três décadas e recentemente essa tecnologia foi utilizada na produção de, pelo menos, duas vacinas contra a COVID-19. A vacina da Pfizer utiliza RNA mensageiro (mRNA) colocado no interior de minúsculos envelopes de lipídios (nanopartículas) que são capazes de penetrar no interior de nossas células. A vacina da Johnson & Johnson utiliza uma fita dupla de DNA inserida em um vírus inerte chamado adenovírus, também capaz de penetrar no interior de nossas células. Tanto o mRNA quanto o DNA, montados pelos especialistas, contêm instruções para que as nossas próprias células sejam capazes de fabricar a proteína S que faz parte da espícula do vírus. Quando está pronta essa proteína S migra para o exterior da célula onde é reconhecida pelo sistema imune que vai gerar anticorpos contra ela.

*Adaptado de https://www.bbc.com/portuguese/geral-57660043 e https://www.bbc.com/portuguese/geral-55091872 acesso em 26/10/2021*

O processo de produção da proteína S pelas nossas células dependerá do tipo de vacina utilizada. Para que a proteína S seja produzida é necessário que`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o mRNA ou o DNA das vacinas penetrem no núcleo onde se localizam os componentes do código genético.',
      },
      {
        letter: 'B',
        text: 'o mRNA da vacina Pfizer penetre no núcleo e seja traduzido pelos ribossomos e pelos tRNA.',
      },
      {
        letter: 'C',
        text: 'o DNA da vacina Johnson & Johnson contenha informação para a síntese de mRNA, tRNA e rRNA específicos para a proteína S.',
      },
      {
        letter: 'D',
        text: 'o mRNA da vacina Pfizer sirva de molde para a enzima transcriptase reversa sintetizar o DNA para a proteína S.',
      },
      {
        letter: 'E',
        text: 'o DNA da vacina Johnson & Johnson penetre no núcleo da célula e sirva de molde para a síntese de mRNA.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q25', correctLetter: null },
    provenance: makeProv2022(8),
  },
  {
    id: 'ufrr-2022-q26',
    examId: EXAM_ID_2022,
    originalNumber: 26,
    originalCode: 'UFRR 2022 · Q26',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Genética — Herança Autossômica Recessiva e Probabilidade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `A anemia falciforme, expressão clínica da homozigose do gene da hemoglobina S, configura-se como um problema de saúde pública no Brasil por ser a doença hereditária de maior prevalência no país. O aconselhamento genético, principalmente para os portadores do traço falciforme (heterozigotos), adquire importância fundamental no sentido de orientar esses pacientes sobre a tomada de decisões conscientes e equilibradas a respeito da procriação e ajudar a compreender outros aspectos da doença, como o sofrimento, tratamento, prognóstico, etc, principalmente, porque as terapias gênicas são limitadas e ainda não há cura para a doença. Esse tipo de serviço é pouco realizado no país, sendo oferecido em hospitais universitários, alguns hospitais públicos nos grandes centros e nos centros de referência para a doação de sangue.

*Adaptado de: https://www.scielosp.org/article/ssm/content/raw/?resource_ssm_path=/media/assets/csc/v15s1/085.pdf acesso em 4/11/2021*

Em relação à doença tratada no texto, assinale a alternativa correta.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A probabilidade de um homem heterozigoto e uma mulher homozigota dominante (normal) terem filhos portadores do alelo para a anemia falciforme é de 1/2.',
      },
      {
        letter: 'B',
        text: 'A probabilidade de uma criança com anemia falciforme, filha de um casal sem a doença ter um irmão ou irmã com a doença é de 1/16.',
      },
      {
        letter: 'C',
        text: 'A probabilidade de um homem heterozigoto transmitir o alelo da anemia falciforme para seus filhos é de 1/4.',
      },
      {
        letter: 'D',
        text: 'A probabilidade de um casal heterozigoto ter duas crianças com anemia falciforme é de 1/8.',
      },
      {
        letter: 'E',
        text: 'A probabilidade de um casal heterozigoto ter um bebê do sexo feminino com anemia falciforme é de1/6.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q26', correctLetter: null },
    editorialNote: 'Grafia original “de1/6.” na alternativa E mantida.',
    provenance: makeProv2022(9),
  },
  {
    id: 'ufrr-2022-q27',
    examId: EXAM_ID_2022,
    originalNumber: 27,
    originalCode: 'UFRR 2022 · Q27',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Biologia',
      topic: 'Genética — Ligação Gênica (Linkage) e Permutação',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em Drosófila, o alelo dominante B condiciona o corpo cinza e o alelo V condiciona a presença de asas normais. Seus alelos b e v condicionam, respectivamente, o corpo preto e asas vestigiais. Esses genes estão localizados em um mesmo cromossomo. O cruzamento de uma fêmea heterozigota para os dois genes (BbVv) com um macho de corpo preto e asa vestigial (bbvv) gerou a seguinte descendência:

Considerando o exposto, assinale a alternativa correta.`,
    tableHtml: TABLE_2022_Q27,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A ocorrência de crossing entre os cromossomos maternos e paternos na fecundação permitiu o surgimento dos descendentes (b) e (c).',
      },
      {
        letter: 'B',
        text: 'Apesar dos dois genes estarem localizados no mesmo cromossomo, houve segregação independente de acordo com a lei de Mendel.',
      },
      {
        letter: 'C',
        text: 'Sem a ocorrência de crossing na formação dos gametas da fêmea, o resultado previsto seria de 50% de descentes (a) e 50% de descendentes (d).',
      },
      {
        letter: 'D',
        text: 'Os genes para cor do corpo e forma da asa estão localizados nos cromossomos sexuais das fêmeas que sofrem crossing durante a formação dos gametas.',
      },
      {
        letter: 'E',
        text: 'Sem a ocorrência de crossing na formação dos gametas da fêmea, o resultado previsto seria de 25% de cada tipo de descendente (a), (b), (c) e (d).',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q27', correctLetter: null },
    editorialNote: 'Grafia original “descentes (a)” na alternativa C preservada.',
    provenance: makeProv2022(9),
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    id: 'ufrr-2022-q28',
    examId: EXAM_ID_2022,
    originalNumber: 28,
    originalCode: 'UFRR 2022 · Q28',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Dinâmica — Leis de Newton',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Dentre as assertivas abaixo assinale a CORRETA.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Em um referencial inercial, o movimento de um corpo prescinde da ação de forças atuando sobre esse corpo.',
      },
      {
        letter: 'B',
        text: 'A aceleração da gravidade possui valor constante na superfície da Terra.',
      },
      {
        letter: 'C',
        text: 'Inércia é a tendência dos corpos em conservar sua velocidade escalar.',
      },
      {
        letter: 'D',
        text: 'A Terceira Lei de Newton estabelece que a reação ao peso de um corpo é uma força de mesmo módulo, mesma direção e sentido contrário que a Terra exerce sobre esse corpo.',
      },
      {
        letter: 'E',
        text: 'A força peso e a força de atrito são exemplos de forças dissipativas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q28', correctLetter: null },
    provenance: makeProv2022(9),
  },
  {
    id: 'ufrr-2022-q29',
    examId: EXAM_ID_2022,
    originalNumber: 29,
    originalCode: 'UFRR 2022 · Q29',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Trabalho e Potência Mecânica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O gráfico a seguir representa a potência constante de uma força aplicada sobre um corpo durante um intervalo de tempo $\\Delta t = t_2 - t_1$. Sabendo-se que a força realiza um trabalho de $96\\text{ J}$ durante esse intervalo, o valor de $t_2$ é:',
    graphics: [
      {
        id: 'ufrr-2022-g-q29',
        type: 'svg',
        svgContent: SVG_2022_Q29,
        altText:
          'Gráfico P(W) por t(s) com potência constante igual a 12 W entre os instantes t1 = 3 s e t2.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$11\\text{ s}$' },
      { letter: 'B', text: '$15\\text{ s}$' },
      { letter: 'C', text: '$5\\text{ s}$' },
      { letter: 'D', text: '$4\\text{ s}$' },
      { letter: 'E', text: '$8\\text{ s}$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q29', correctLetter: null },
    provenance: makeProv2022(10),
  },
  {
    id: 'ufrr-2022-q30',
    examId: EXAM_ID_2022,
    originalNumber: 30,
    originalCode: 'UFRR 2022 · Q30',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Hidrostática — Densidade de Misturas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Em um recipiente, foram misturados, em igual quantidade de massa, dois fluídos miscíveis distintos, cujas massas específicas são, respectivamente, $4\\text{ g/cm}^3$ e $2\\text{ g/cm}^3$. Qual o valor arredondado da densidade final da mistura, após uma diluição homogênea?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$3{,}0\\text{ g/cm}^3$' },
      { letter: 'B', text: '$3{,}6\\text{ g/cm}^3$' },
      { letter: 'C', text: '$2{,}4\\text{ g/cm}^3$' },
      { letter: 'D', text: '$3{,}3\\text{ g/cm}^3$' },
      { letter: 'E', text: '$2{,}7\\text{ g/cm}^3$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q30', correctLetter: null },
    provenance: makeProv2022(10),
  },
  {
    id: 'ufrr-2022-q31',
    examId: EXAM_ID_2022,
    originalNumber: 31,
    originalCode: 'UFRR 2022 · Q31',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Calorimetria — Capacidade Térmica e Calor Específico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Você resolve cozinhar um delicioso macarrão para o almoço de domingo. Você dispõe de duas panelas de mesmo material, mas de massas diferentes. A massa da panela 1 é 50% maior que a da panela 2. Você vai utilizar 2 litros de água para cozinhar o macarrão. Considerando que você quer realizar esse objetivo no menor tempo possível, dentre as alternativas abaixo, marque aquela que representa a melhor escolha e a correta justificativa.

Dados: calor específico da água = $1\\text{ cal/g }^\\circ\\text{C}$; calor específico do material da panela = $0{,}22\\text{ cal/g }^\\circ\\text{C}$.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Escolho a panela de massa $m_2$ por que tem a menor capacidade térmica.',
      },
      {
        letter: 'B',
        text: 'Escolho a panela de massa $m_2$ que tem a maior capacidade térmica.',
      },
      {
        letter: 'C',
        text: 'Escolho a panela de massa $m_1$ por que tem a menor capacidade térmica.',
      },
      {
        letter: 'D',
        text: 'Escolho a panela de massa $m_1$ por que tem a maior capacidade térmica.',
      },
      {
        letter: 'E',
        text: 'Escolho qualquer uma, pois o tempo de cozimento não depende da massa da panela.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q31', correctLetter: null },
    editorialNote: 'Grafia original “por que” nas alternativas A, C e D preservada.',
    provenance: makeProv2022(10),
  },
  {
    id: 'ufrr-2022-q32',
    examId: EXAM_ID_2022,
    originalNumber: 32,
    originalCode: 'UFRR 2022 · Q32',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Óptica Geométrica — Índice de Refração Absoluto',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Um professor de Física passou para cinco de seus alunos uma tarefa que valia nota. A tarefa consistia em calcular o índice de refração absoluto de um determinado líquido. Para que não houvesse “cola”, cada um dos alunos calcularia o índice de um líquido diferente. Os alunos, após cumprirem a tarefa, apresentaram os seguintes resultados:

Ao ver os resultados, antes mesmo de checar os cálculos realizados pelos alunos, o professor percebeu que estavam ERRADOS os resultados dos alunos:`,
    tableHtml: TABLE_2022_Q32,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '01, 02' },
      { letter: 'B', text: '03, 04 e 05' },
      { letter: 'C', text: '02, 03 e 05' },
      { letter: 'D', text: '02, 03 e 04' },
      { letter: 'E', text: '01, 03 e 05' },
    ],
    answerKey: { questionId: 'ufrr-2022-q32', correctLetter: null },
    provenance: makeProv2022(10),
  },
  {
    id: 'ufrr-2022-q33',
    examId: EXAM_ID_2022,
    originalNumber: 33,
    originalCode: 'UFRR 2022 · Q33',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Termodinâmica — Transformações Cíclicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A respeito de uma transformação gasosa cíclica, podemos afirmar CORRETAMENTE que:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'A variação da energia interna é positiva;' },
      {
        letter: 'B',
        text: 'Há equivalência entre o trabalho realizado e a quantidade de calor trocada com o ambiente;',
      },
      {
        letter: 'C',
        text: 'Ao realizar um ciclo em sentido anti-horário (considerando o diagrama de Clapeyron) o gás converte calor em trabalho.',
      },
      { letter: 'D', text: 'A variação da energia interna é negativa;' },
      {
        letter: 'E',
        text: 'Quando o ciclo é realizado no sentido horário, o trabalho realizado na expansão tem módulo menor que o trabalho realizado na compressão.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q33', correctLetter: null },
    provenance: makeProv2022(10),
  },
  {
    id: 'ufrr-2022-q34',
    examId: EXAM_ID_2022,
    originalNumber: 34,
    originalCode: 'UFRR 2022 · Q34',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Eletrostática — Potencial Elétrico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Duas esferas dielétricas de mesmo material, mas com raios distintos, estão carregadas com uma mesma carga $Q$ concentradas nos seus centros. O raio da esfera 1 é o dobro do raio da esfera 2. Considere que a distância entre os centros das esferas é maior que o dobro da soma dos raios delas. O valor do potencial gerado pela esfera 1, no ponto médio entre os centros das esferas é $V_1$. O valor do potencial total gerado pelas duas esferas no mesmo ponto médio será de:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$3V_1$' },
      { letter: 'B', text: '$V_1/2$' },
      { letter: 'C', text: '$2V_1$' },
      { letter: 'D', text: '$V_1/3$' },
      { letter: 'E', text: '$0$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q34', correctLetter: null },
    provenance: makeProv2022(11),
  },
  {
    id: 'ufrr-2022-q35',
    examId: EXAM_ID_2022,
    originalNumber: 35,
    originalCode: 'UFRR 2022 · Q35',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Eletrostática — Trabalho da Força Elétrica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Para se deslocar uma carga elétrica de $0{,}4\\text{ C}$ paralelamente à direção de um campo elétrico uniforme (situação 1), há a realização de um trabalho $W$. Para se deslocar a mesma carga, ortogonalmente ao mesmo campo elétrico (situação 2), não há realização de trabalho. Marque a alternativa que mostra o gráfico que representa CORRETAMENTE as situações descritas.',
    graphics: [
      {
        id: 'ufrr-2022-g-q35-a',
        type: 'svg',
        svgContent: SVG_2022_Q35_A,
        altText:
          'Gráfico A: W (Joules) em função de distância (cm), com situação 1 constante positiva e situação 2 igual a zero.',
      },
      {
        id: 'ufrr-2022-g-q35-b',
        type: 'svg',
        svgContent: SVG_2022_Q35_B,
        altText:
          'Gráfico B: W (Joules) em função de V (Volts), com situação 1 constante positiva e situação 2 igual a zero.',
      },
      {
        id: 'ufrr-2022-g-q35-c',
        type: 'svg',
        svgContent: SVG_2022_Q35_C,
        altText:
          'Gráfico C: V (Volts) em função de distância (cm), com situação 1 linear crescente a partir da origem e situação 2 igual a zero.',
      },
      {
        id: 'ufrr-2022-g-q35-d',
        type: 'svg',
        svgContent: SVG_2022_Q35_D,
        altText:
          'Gráfico D: V (Volts) em função de distância (cm), com situação 1 constante positiva e situação 2 igual a zero.',
      },
      {
        id: 'ufrr-2022-g-q35-e',
        type: 'svg',
        svgContent: SVG_2022_Q35_E,
        altText:
          'Gráfico E: E (N/C) em função de distância (cm), com situação 1 igual a zero e situação 2 constante negativa.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '', graphicId: 'ufrr-2022-g-q35-a' },
      { letter: 'B', text: '', graphicId: 'ufrr-2022-g-q35-b' },
      { letter: 'C', text: '', graphicId: 'ufrr-2022-g-q35-c' },
      { letter: 'D', text: '', graphicId: 'ufrr-2022-g-q35-d' },
      { letter: 'E', text: '', graphicId: 'ufrr-2022-g-q35-e' },
    ],
    answerKey: { questionId: 'ufrr-2022-q35', correctLetter: null },
    provenance: makeProv2022(11),
  },
  {
    id: 'ufrr-2022-q36',
    examId: EXAM_ID_2022,
    originalNumber: 36,
    originalCode: 'UFRR 2022 · Q36',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Física',
      topic: 'Eletrostática — Capacitores',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um capacitor de placas paralelas está submetido a uma diferença de potencial de $20\\text{ V}$, sendo sua capacitância igual a $10\\text{ mF}$, a distância e a área entre as placas são iguais a $2\\text{ mm}$ e $10\\text{ cm}^2$ respectivamente. Qual a carga total no capacitor?',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$200\\text{ mF}$' },
      { letter: 'B', text: '$-0{,}2\\text{ }\\mu\\text{F}$' },
      { letter: 'C', text: '$0{,}02\\text{ F}$' },
      { letter: 'D', text: '$0{,}0$' },
      { letter: 'E', text: '$0{,}04\\text{ F}$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q36', correctLetter: null },
    editorialNote:
      'Nas alternativas A, B, C e E do caderno oficial constam unidades em F/mF/µF, mantidas conforme impressão original.',
    provenance: makeProv2022(12),
  },
];
