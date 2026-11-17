import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-11-16T12:00:00.000Z';

export const UFRR_2026_HUMANAS_QUIMICA_RESOLUTIONS: QuestionResolution[] = [
  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    questionId: 'ufrr-2026-q37',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Climatologia da Amazônia',
    subtopic: 'Seca Extrema 2023–2024',
    questionType: 'geo-amazonia-el-nino-atlantico-norte',
    methodTitle: 'Teleconexões Oceano-Atmosfera nas Secas Amazônicas',
    decisiveConcept:
      'Secas extremas na Amazônia decorrem da combinação entre El Niño (Pacífico Equatorial aquecido) e aquecimento anômalo do Atlântico Tropical Norte, que deslocam a ZCIT para o norte.',
    quickSolution:
      'A seca amazônica de 2023–2024 resultou da ação simultânea do **El Niño** (aquecimento do Pacífico Equatorial, gerando subsidência sobre a Amazônia) e do **aquecimento anômalo do Oceano Atlântico Norte**, que deslocou a Zona de Convergência Intertropical (ZCIT) para o norte e reduziu as chuvas na bacia (**Alternativa B**).',
    macete: {
      title: 'Regra de ouro das secas na Amazônia',
      strategy:
        'Pacífico quente (**El Niño**) + Atlântico **Norte** quente = ar descendente (alta pressão/inibição de nuvens) e ZCIT puxada para o norte, cortando a umidade da Amazônia.',
      whenToUse: 'Questões sobre secas extremas na Amazônia (2005, 2010, 2015–16 e 2023–24).',
      caution:
        'Não confunda com **La Niña** (resfriamento do Pacífico), que normalmente intensifica as chuvas e cheias na Amazônia.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Baixa pressão atmosférica favorece convergência de ar úmido e chuvas, o oposto do bloqueio seco observado em 2023–2024.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'Combina os dois forçantes oceânicos clássicos da seca histórica de 2023–2024 apontados pelo CEMADEN: El Niño forte e Atlântico Norte aquecido.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A seca amazônica teve temperaturas elevadas, não resfriamento, e não foi causada por monções asiáticas.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'La Niña tende a aumentar as chuvas na Amazônia Norte/Central, e não provocar estiagem severa.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'O padrão principal na Amazônia é controlado pelo acoplamento Pacífico Equatorial–Atlântico Norte, não pelo Índico.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Verificado conforme Nota Técnica CEMADEN 679/2024 e climatologia dinâmica da Bacia Amazônica.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q38',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geomorfologia e Pedologia',
    questionType: 'geo-pedologia-intemperismo-latossolos',
    methodTitle: 'Intemperismo Químico Tropical e Latossolos Brasileiros',
    decisiveConcept:
      'Clima tropical quente e úmido acelera o intemperismo químico (hidrólise/lixiviação), gerando solos profundos (latossolos), ricos em óxidos de ferro/alumínio e de baixa fertilidade natural.',
    quickSolution:
      'No Brasil tropical quente e úmido predomina o **intemperismo químico** intenso. A água lixivia bases solúveis (Ca, Mg, K), formando **solos profundos** (como os latossolos), ricos em **óxidos de ferro e alumínio** e com **baixa fertilidade natural** (**Alternativa E**).',
    macete: {
      title: 'Clima brasileiro no tripé solo–relevo',
      strategy:
        'Calor + muita chuva = **intemperismo químico** = manto de alteração profundo + lixiviação (lava nutrientes solúveis, sobram óxidos de Fe e Al).',
      whenToUse: 'Pedologia brasileira (latossolos, argissolos, laterização).',
      caution:
        'Apenas no Semiárido nordestino (baixa umidade) predomina o intemperismo físico com solos rasos e ricos em minerais primários (como descritos na letra D).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'No conjunto do território brasileiro (clima tropical/equatorial úmido), predomina o intemperismo químico, não o físico.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'O Brasil não possui grandes áreas de desertos rochosos; o intemperismo químico gera espesso regolito.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Solos tropicais intemperizados possuem alta concentração de argilominerais (como caulinita) e óxidos, não baixa presença deles.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Solos jovens, rasos e ricos em minerais primários são típicos de regiões áridas/frias ou escarpas muito íngremes, não do padrão pedológico brasileiro.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Descreve exatamente a gênese dos latossolos brasileiros por lixiviação e laterização: profundos, ácidos/baixa fertilidade natural e ricos em óxidos de Fe e Al.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Coerente com a classificação pedológica do IBGE/EMBRAPA sobre o predomínio de latossolos no Brasil.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q39',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Cartografia',
    subtopic: 'Escala Cartográfica',
    questionType: 'geo-cartografia-escala-detalhamento',
    methodTitle: 'Relação Inversa entre Denominador da Escala e Detalhamento',
    decisiveConcept:
      'Quanto menor o denominador da escala (1:25.000), maior é a escala, menor a área abrangida e maior o nível de detalhes.',
    quickSolution:
      'Como $\\frac{1}{25.000} > \\frac{1}{5.000.000}$, a escala $1:25.000$ é uma **grande escala**: reduz menos a realidade, logo representa uma **área menor com mais detalhes** e menor generalização (**Alternativa B**).',
    stepByStep: [
      '1. Compare as frações numéricas: $\\frac{1}{25.000} = 0{,}00004$ é 200 vezes maior que $\\frac{1}{5.000.000} = 0{,}0000002$.',
      '2. Portanto, $1:25.000$ é a **escala grande** (ideal para bairros/cidades, com rico detalhamento) e $1:5.000.000$ é a **escala pequena** (ideal para países/continentes, com forte generalização).',
    ],
    macete: {
      title: 'Fração literal na escala',
      strategy:
        'Leia como fração matemática: denominador menor = fração maior (**escala grande**) = zoom fechado = **área menor, muito detalhe**. Denominador gigante = **escala pequena** = zoom aberto = área enorme, pouco detalhe.',
      whenToUse: 'Qualquer comparação entre duas escalas numéricas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Inverte os conceitos: 1:5.000.000 é escala pequena, com maior generalização e menos detalhes.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          '1:25.000 é grande escala, abrange menor extensão territorial e preserva maior riqueza de detalhes.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Escalas distintas alteram profundamente a área representada e a quantidade de detalhes.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Fenômenos globais exigem escala pequena (como 1:5.000.000 ou menor), nunca 1:25.000.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A escala é o principal fator determinador do grau de generalização cartográfica.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conceito clássico e inequívoco de escala cartográfica.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q40',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geografia Agrária e Globalização',
    questionType: 'geo-agraria-revolucao-verde-estado',
    methodTitle: 'Papel do Estado na Revolução Verde e no Agronegócio',
    decisiveConcept:
      'A Revolução Verde no Brasil dependeu fortemente da atuação estatal (crédito rural, SNCR, Embrapa, extensão rural e infraestrutura), não prescindindo do Estado.',
    quickSolution:
      'A alternativa **INCORRETA** é a **B**: afirmar que a modernização agrícola e a Revolução Verde ocorreram *"prescindindo da atuação estatal"* é falso, pois no Brasil o Estado foi o indutor central via SNCR (1965), criação da Embrapa, subsídios e infraestrutura (**Alternativa B**).',
    macete: {
      title: 'Atenção ao verbo "prescindir"',
      strategy:
        '**Prescindir = dispensar / abrir mão de.** O agronegócio e a Revolução Verde **não** dispensaram o Estado no Brasil (crédito subsidiado + pesquisa pública da Embrapa foram cruciais). Como a questão pede a **INCORRETA**, marque B.',
      whenToUse: 'Questões com enunciado negativo ("é INCORRETO") e vocabulário formal.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Afirmativa correta segundo Ariovaldo Umbelino de Oliveira: a agricultura capitalista prioriza commodities e mercantilização sobre a soberania alimentar.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'É a proposição INCORRETA (gabarito): a Revolução Verde no Brasil contou com forte intervenção estatal (crédito rural subsidiado, Embrapa, políticas fundiárias e fiscais).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Afirmativa correta: o Brasil conviveu historicamente com recordes de exportação agrícola simultâneos à insegurança alimentar interna.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Afirmativa correta: bolsas de mercadorias e contratos futuros definem preços internacionais de commodities.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Afirmativa correta: o comércio global de grãos é oligopolizado por poucas tradings transnacionais (ABCD: ADM, Bunge, Cargill, Louis Dreyfus).',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Análise de comando negativo ("INCORRETO") + erro factual histórico da Revolução Verde.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q41',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Recursos Naturais e Energia no Brasil',
    questionType: 'geo-energia-hidreletricas-impactos',
    methodTitle: 'Impactos Socioambientais das Usinas Hidrelétricas',
    decisiveConcept:
      'Hidrelétricas são fontes renováveis, mas NÃO são isentas de impactos socioambientais (inundação de ecossistemas, emissão de metano, remoção de populações ribeirinhas e indígenas).',
    quickSolution:
      'Pede-se a afirmação **INCORRETA**. Dizer que a geração hidrelétrica *"não implica em impactos socioambientais"* (**Alternativa D**) é falso: grandes reservatórios alagam florestas e cidades, removem comunidades e alteram regimes fluviais e emissão de gases de efeito estufa.',
    macete: {
      title: 'Renovável ≠ Impacto zero',
      strategy:
        'Em Geografia de vestibulares, desconfie imediatamente de expressões absolutas em matrizes energéticas como **"não implica em impactos socioambientais"** — toda grande obra de infraestrutura gera impactos.',
      whenToUse: 'Questões de energia que pedem a afirmativa INCORRETA.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Correta: o Nordeste concentra a maior parcela da geração eólica brasileira devido aos ventos alísios constantes.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Correta: a bioeconomia utiliza a biodiversidade (fármacos, cosméticos, alimentos) de forma sustentável.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Correta: datacenters demandam alto volume de água para sistemas de resfriamento.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          'INCORRETA (gabarito): hidrelétricas causam alagamentos de terras agricultáveis/florestas, deslocamento populacional e impactos sobre ictiofauna e povos tradicionais.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Correta: a energia solar fotovoltaica cresceu aceleradamente no Brasil na última década.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Questão conceitual clara sobre matriz energética brasileira.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q42',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geografia de Roraima',
    questionType: 'geo-roraima-historia-territorial',
    methodTitle: 'Formação Territorial e Demarcações em Roraima',
    decisiveConcept:
      'Entre as décadas de 1990 e 2000 destacaram-se as homologações de grandes terras indígenas em Roraima (Yanomami em 1992; Raposa Serra do Sol homologada em 2005 e confirmada pelo STF em 2009).',
    quickSolution:
      'Entre os anos 1990 e 2000 as **demarcações de terras indígenas** ganharam protagonismo político e territorial em Roraima (ex.: Yanomami em 1992 e Raposa Serra do Sol em 2005/2009) (**Alternativa B**). As demais trazem erros cronológicos ou percentuais.',
    macete: {
      title: 'Marcos de Roraima para eliminar distratores',
      strategy:
        'Território Federal = **1943** (não 1950); Estado = **CF de 1988**; Terras Indígenas = ~**46%** do estado (não >60%); crescimento urbano dos anos 80–90 veio da corrida do ouro e estadualização.',
      whenToUse: 'Questões regionais de Geografia/História de Roraima na UFRR.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O salto populacional e urbano de Boa Vista no final dos anos 1980/início dos 1990 esteve ligado à corrida garimpeira e à implantação da estrutura do novo estado (CF/1988), não ao "avanço do desmatamento".',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'Nos anos 1990 e 2000 ocorreram as principais homologações e debates fundiários sobre terras indígenas em Roraima (TI Yanomami em 1992 e Raposa Serra do Sol entre 1998 e 2009).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Não há caracterização de "migração de retorno nordestina" em massa como fenômeno contemporâneo marcante de Roraima; o fluxo recente dominante foi a imigração venezuelana.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'O Território Federal foi criado em 1943 (como Rio Branco) e elevado a Estado pela Constituição de 1988 (instalado em 1990/1991), não em 1950.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Cerca de 46% do território roraimense é composto por terras indígenas (somando cerca de 46% + unidades de conservação passa da metade, mas só TIs não ultrapassam 60%).',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Verificado pelos dados fundiários oficiais de Roraima (IBGE/ISA) e marcos constitucionais de 1943 e 1988.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q43',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Globalização e Milton Santos',
    questionType: 'geo-milton-santos-tres-mundos',
    methodTitle: 'As Três Globalizações de Milton Santos',
    decisiveConcept:
      'Em "Por uma outra globalização", Milton Santos distingue: Fábula (discurso ideológico da aldeia global), Perversidade (desemprego, pobreza e crise social) e Possibilidade (mistura cultural e outra história).',
    quickSolution:
      'Associando os trechos de Milton Santos: **II** fala em *"máquina ideológica"* e *"mito da aldeia global"* = **a (fábula)**; **III** relata desemprego crônico, pobreza e males morais = **b (perversidade)**; **I** aponta a mistura de povos/culturas para uma nova história = **c (possibilidade)**. Ordem: **a–II; b–III; c–I** (**Alternativa A**).',
    macete: {
      title: 'Palavras-chave da tríade de Milton Santos',
      strategy:
        '**Fábula** = mito, aldeia global, ideologia (II). **Perversidade** = desemprego, pobreza, egoísmo (III). **Possibilidade** = nova história, mistura de povos e culturas (I).',
      whenToUse: 'Qualquer questão sobre o livro "Por uma outra globalização".',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: 'Associa exatamente: a (fábula)–II; b (perversidade)–III; c (possibilidade)–I.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'O item III trata da perversidade social, não da fábula.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Troca os conceitos de fábula (II) e possibilidade (I).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Inverte perversidade (III) e possibilidade (I).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Inverte fábula e perversidade entre os itens II e III.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Correspondência direta com o texto original de Milton Santos (2008, p. 18–20).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q44',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geopolítica Contemporânea',
    subtopic: 'Conflito Rússia e Ucrânia',
    questionType: 'geo-geopolitica-ucrania-crimeia',
    methodTitle: 'Ponto de Inflexão do Conflito Rússia–Ucrânia (2014)',
    decisiveConcept:
      'Após os protestos do Euromaidan (2013–2014), a anexação da Crimeia pela Rússia em 2014 e a guerra no Donbass marcaram a ruptura direta que levou à invasão em larga escala em 2022.',
    quickSolution:
      'O ponto crucial da escalada militar contemporânea entre Rússia e Ucrânia — contextualizado no mapa de regiões disputadas (Luhansk, Donetsk, Kherson, Zaporizhzhia) — foi a **anexação da Crimeia pela Rússia em 2014** após a queda do governo pró-russo em Kiev (**Alternativa C**).',
    macete: {
      title: 'Linha do tempo geopolítica da Ucrânia',
      strategy:
        '1991 = independência; **2014 = Euromaidan + anexação da Crimeia + conflito no Donbass** (ponto de escalada direta); 2022 = invasão russa em larga escala.',
      whenToUse: 'Geopolítica do Leste Europeu e expansão da OTAN/Rússia.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'A queda do Muro de Berlim (1989) simbolizou o fim da divisão alemã, não a escalada específica Rússia–Ucrânia.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'A dissolução da URSS (1991) originou os Estados independentes, mas o conflito armado recente escalou a partir de 2014.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'A anexação da Crimeia (2014) e o apoio a separatistas em Donetsk e Luhansk inauguraram a fase militar direta do conflito.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'A Ucrânia ainda não ingressou como membro pleno na União Europeia (recebeu status de candidata em 2022).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'O Memorando de Budapeste / desnuclearização ocorreu em 1994 e previa garantias de segurança, não escalada bélica.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Confirmado pelo histórico geopolítico do conflito e pelas áreas destacadas no mapa da questão.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q45',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Blocos Econômicos Mundiais',
    questionType: 'geo-blocos-economicos-nafta-usmca',
    methodTitle: 'Renegociação do NAFTA para o USMCA (T-MEC)',
    decisiveConcept:
      'O Acordo de Livre Comércio da América do Norte (NAFTA) foi renegociado em 2018 e entrou em vigor em julho de 2020 sob o nome USMCA (EUA, México e Canadá).',
    quickSolution:
      'O bloco renegociado em 2018 e vigente desde julho de 2020 (com regras digitais e trabalhistas atualizadas) foi a substituição do antigo **NAFTA** pelo atual **USMCA** (United States–Mexico–Canada Agreement) (**Alternativa B**).',
    macete: {
      title: 'Sigla autoexplicativa',
      strategy:
        '**USMCA** = **U**nited **S**tates + **M**exico + **C**anada **A**greement (o novo nome do NAFTA desde 2020).',
      whenToUse: 'Blocos econômicos e comércio na América do Norte.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O Benelux (1944) antecedeu a União Europeia, e não a substituiu em 2020.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'O USMCA (assinado em 2018 e em vigor desde 1º de julho de 2020) substituiu formalmente o NAFTA.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'A ALCA nunca entrou em vigor e o Mercosul mantém seu nome.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'BRICS é um agrupamento geopolítico-econômico distinto (Brasil, Rússia, Índia, China, África do Sul e novos membros), sem relação com o NAFTA.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'APEC (Ásia-Pacífico) e Mercado Comum Europeu são arranjos geográficos completamente distintos.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Dado histórico-econômico exato (USMCA vigorou em 01/07/2020).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    questionId: 'ufrr-2026-q46',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Antiguidade Oriental',
    subtopic: 'Egito Antigo e Invasão Assíria',
    questionType: 'hist-egito-renascimento-saita',
    methodTitle: 'Baixa Época Egípcia e o Renascimento Saíta (XXVI Dinastia)',
    decisiveConcept:
      'Após a ocupação assíria no séc. VII a.C., Psamético I reunificou o Egito a partir de Saís (Delta do Nilo), inaugurando o Renascimento Saíta antes da conquista persa em 525 a.C.',
    quickSolution:
      'No século VII a.C., após enfrentar a dominação assíria, o Egito conseguiu recuperar sua autonomia sob a XXVI Dinastia (originária de Saís), período de reerguimento político e cultural denominado **Renascimento Saíta** (**Alternativa A**).',
    macete: {
      title: 'Linha cronológica para eliminar anacronismos',
      strategy:
        'Elimine por época: Amenófis III é do Império Novo (séc. XIV a.C.) e Ptolomeus são do período helenístico (após Alexandre, 323 a.C.). A reação aos assírios (séc. VII a.C.) é o **Renascimento Saíta (A)**.',
      whenToUse: 'Questões de Antiguidade Oriental com nomes de dinastias/faraós de épocas diferentes.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Psamético I (XXVI Dinastia, sediada em Saís) expulsou os assírios e promoveu o Renascimento Saíta (664–525 a.C.).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Anacronismo duplo: Amenófis III governou séculos antes (Império Novo), e quem fez a reforma monoteísta de Áton foi Amenófis IV (Aquenáton).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A Dinastia Ptolomaica surgiu apenas após a morte de Alexandre, o Grande (323 a.C.), mais de três séculos depois.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Quem invadiu o Egito no século VII a.C. foram os sucessores de Senaqueribe (Assaradão e Assurbanípal), por força militar, e não um acordo pacífico de Senaqueribe.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Não houve coalizão sacerdotal com a Filístia para restaurar uma dinastia Saíta anterior.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Verificado pela cronologia histórica do Egito Antigo (Baixa Época / XXVI Dinastia).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q47',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Antiguidade Clássica',
    subtopic: 'Domínio Macedônico',
    questionType: 'hist-grecia-queroneia-macedonia',
    methodTitle: 'Hegemonia Macedônica: Batalha de Queroneia (338 a.C.)',
    decisiveConcept:
      'Em 338 a.C., Filipe II da Macedônia derrotou a coalizão de Atenas e Tebas na Batalha de Queroneia, impondo a Liga de Corinto e encerrando a autonomia das póleis gregas.',
    quickSolution:
      'A consolidação da supremacia macedônica sobre a Grécia foi selada na **Batalha de Queroneia (338 a.C.)**, na qual **Filipe II da Macedônia** derrotou a coalizão liderada por **Atenas e Tebas** (**Alternativa A**).',
    macete: {
      title: 'Marco final da pólis autônoma',
      strategy:
        'Guerras Médicas (490–479 a.C.) = gregos vs persas. Guerra do Peloponeso (431–404 a.C.) = Atenas vs Esparta. **Queroneia (338 a.C.)** = Filipe II da Macedônia subjuga as cidades gregas.',
      whenToUse: 'Questões sobre transição do Período Clássico para o Helenismo.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Descreve com precisão a Batalha de Queroneia (338 a.C.), vitória decisiva de Filipe II sobre atenienses e tebanos.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Ligas de Delos e do Peloponeso enfrentaram-se no século V a.C. (Guerra do Peloponeso), e Atenas liderava Delos, não o Peloponeso.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A repressão sobre Tebas (335 a.C.) foi uma campanha terrestre rápida comandada pelo próprio Alexandre, não uma ação naval de "Dorímenes".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'A ascensão macedônica decorreu da reforma militar da falange por Filipe II e das disputas da Terceira Guerra Sacra, não desse suposto relato de "Calístrato".',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'As Guerras Greco-Pérsicas ocorreram no séc. V a.C. (mais de um século antes de Filipe II); quem enfraqueceu as póleis antes da Macedônia foram as guerras internas (Peloponeso e Guerra de Corinto/Tebana).',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Marco clássico incontroverso da Grécia Antiga (338 a.C.).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q48',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Idade Média e Feudalismo',
    questionType: 'hist-feudalismo-economia-nao-monetaria',
    methodTitle: 'Economia Feudal Agrária e Predominância de Obrigações em Produto/Trabalho',
    decisiveConcept:
      'No apogeu do feudalismo (sécs. XI–XIII), a economia era essencialmente agrária e pouco monetarizada; o trabalho servil era pago por corveia, talha e banalidades, nunca "totalmente monetário".',
    quickSolution:
      'Pede-se a alternativa **ERRADA**. Dizer que a moeda circulava facilmente e que *"as relações econômicas se tornaram totalmente monetárias"* substituindo vínculos servis (**Alternativa C**) contraria frontalmente a economia feudal agrária e baseada em corveia e trocas diretas.',
    macete: {
      title: 'Atenção à afirmação totalizante',
      strategy:
        'Em História, afirmações categóricas como **"totalmente monetárias"** aplicadas ao **Feudalismo** são quase sempre o erro pedido — o feudalismo típico tinha baixa circulação monetária e obrigações em trabalho/gêneros.',
      whenToUse: 'Questões de múltipla escolha sobre Idade Média que pedem a opção ERRADA.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Verdadeira: o enfraquecimento do poder real após o colapso carolíngio favoreceu concessões de terras e poder aos senhores regionais.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Verdadeira: os castelos eram residências senhoriais fortificadas e refúgios em ataques.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'É a alternativa ERRADA (gabarito): a economia feudal caracterizava-se pela ruralização, reduzida monetarização e relações de dependência pessoal (corveia, talha, banalidades).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Verdadeira: a fragmentação do poder público em torno das castelanias expressa a descentralização política feudal.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Verdadeira: a nobreza estratificava-se por títulos e laços de suserania e vassalagem.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise direta da estrutura socioeconômica medieval.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q49',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Brasil Colônia',
    subtopic: 'Missões Jesuíticas',
    questionType: 'hist-colonia-missoes-jesuiticas-interior',
    methodTitle: 'Interiorização das Missões Jesuíticas na América Portuguesa',
    decisiveConcept:
      'As missões jesuíticas expandiram-se profundamente para o interior (Vale Amazônico — drogas do sertão — e Sul/Sete Povos), não ficando restritas ao litoral.',
    quickSolution:
      'A questão pede a alternativa **ERRADA**. É falso afirmar que os aldeamentos jesuíticos *"permaneceram exclusivamente no litoral da colônia"* (**Alternativa E**), pois a Companhia de Jesus interiorizou-se pelo sertão, bacia amazônica e sul (missões/reduções).',
    macete: {
      title: 'Contradição interna nas alternativas',
      strategy:
        'A letra **A** já cita *"extração das drogas do sertão"*, típica do interior amazônico — logo, **E** ("exclusivamente no litoral") entra em contradição direta e escancara o erro!',
      whenToUse: 'Questões do tipo "marque a ERRADA": compare as opções entre si para achar contradições.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Correta: a rotina dos aldeamentos combinava ofícios religiosos, roças coletivas, artesanato e, na Amazônia, coleta das drogas do sertão.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Correta: os jesuítas priorizavam a escolarização e catequização das crianças indígenas.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Correta: bandeirantes paulistas atacaram missões (como no Guairá e Tape) justamente por concentrarem indígenas já habituados ao trabalho agrícola.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Correta: a Coroa concedia sesmarias para instalação das aldeias missionárias.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'É a afirmativa ERRADA (gabarito): os jesuítas atuaram decisivamente na interiorização colonial (Amazônia, São Francisco e Sul).',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Fato consolidado da historiografia do Brasil Colônia e contradição interna com a alternativa A.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q50',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Revoluções de 1848 (Primavera dos Povos)',
    questionType: 'hist-1848-primavera-dos-povos',
    methodTitle: 'Revoluções de 1848: Divisão Interna e Reação Conservadora',
    decisiveConcept:
      'Na Primavera dos Povos (1848), coalizões de liberais, nacionalistas, trabalhadores e socialistas abalaram monarquias europeias, mas dividiram-se entre demandas liberais e sociais, permitindo a reação conservadora.',
    quickSolution:
      'As Revoluções de 1848 foram levantes amplos que derrubaram regimes (como a Monarquia de Julho na França), mas suas forças se dividiram (burguesia liberal vs operários/radicais), sofrendo reação contrarrevolucionária impulsionada pelo temor de rupturas sociais (**Alternativa B**).',
    macete: {
      title: 'Três traços da Primavera dos Povos (1848)',
      strategy:
        '(1) Onda continental simultânea (França, Estados alemães, italianos, Império Austríaco); (2) mistura de liberalismo, nacionalismo e questão social; (3) racha entre burguesia moderada e operários abre caminho à contrarrevolução.',
      whenToUse: 'Questões sobre o ciclo revolucionário europeu do século XIX (1830 e 1848).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O Despotismo Esclarecido é fenômeno do século XVIII, e os levantes de 1848 não foram liderados exclusivamente pelos comunistas.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'Sintetiza o processo histórico de 1848: irrupção popular/liberal pela Europa seguida de divisão interna e reação conservadora (como os Dias de Junho em Paris e a restauração na Áustria/Prússia).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A pauta central era política, constitucional, nacionalista e social/trabalhista, não uma cruzada antirreligiosa.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'O movimento buscava reformas constitucionais, repúblicas ou unificação nacional — não a abolição anarquista completa do Estado.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A burguesia não era a maioria da população nem desejava suprimir a propriedade privada (temia justamente as pautas socialistas do operariado).',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise coerente com Eric Hobsbawm ("A Era do Capital").',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q51',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Segundo Reinado e Proclamação da República',
    questionType: 'hist-brasil-crise-segundo-reinado',
    methodTitle: 'Tripé da Crise do Segundo Reinado (Igreja, Exército e Abolição)',
    decisiveConcept:
      'A queda do Império (1889) apoiou-se na tríade clássica da crise: Questão Religiosa (conflito Igreja–Maçonaria/Estado), Questão Militar (Exército e positivismo) e Abolição (perda do apoio escravista).',
    quickSolution:
      'A crise terminal da monarquia após 1870 foi alimentada por três grandes desgastes internos: o atrito com o clero (**Questão Religiosa/Maçonaria**), o descontentamento das forças armadas (**Questão Militar**) e o desgaste junto à elite agrária com o **processo abolicionista** (**Alternativa B**).',
    macete: {
      title: 'Os 3 pilares derrubados do Império',
      strategy:
        'Para derrubar D. Pedro II faltou quem o sustentava: **Altar** (Questão Religiosa/Maçonaria), **Espada** (Questão Militar) e **Fazenda** (Abolição de 1888 sem indenização). Ache esses 3 elementos na alternativa (**B**).',
      whenToUse: 'Questões sobre causas da Proclamação da República (1889).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'A Questão Religiosa envolveu a proibição papal à maçonaria e a prisão de bispos (D. Vital e D. Macedo Costa) pelo Estado imperial, não "entrada de protestantes".',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'Reúne exatamente os fatores estruturais da crise do Segundo Reinado: Questão Religiosa (Maçonaria), Questão Militar e Abolição.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'O Marquês de Tamandaré permaneceu fiel à monarquia até o fim e não traiu o imperador.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '"Acordo pelo Progresso" é distrator inventado; e Deodoro liderou o movimento em 15 de novembro de 1889.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A Proclamação da República ocorreu em 15 de novembro de 1889, não em 1887.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Síntese consagrada da historiografia brasileira sobre a crise do Império.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q52',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Redemocratização e Diretas Já',
    questionType: 'hist-brasil-diretas-ja-emenda-dante',
    methodTitle: 'Rejeição da Emenda Dante de Oliveira na Câmara (1984)',
    decisiveConcept:
      'Apesar de mobilizar milhões nas ruas em 1983–1984, a Emenda Dante de Oliveira foi barrada na Câmara dos Deputados em abril de 1984 por não atingir o quórum constitucional de dois terços.',
    quickSolution:
      'Embora tenha arrastado multidões recordes às praças do país, a Proposta de Emenda Constitucional (Dante de Oliveira) pela volta das eleições diretas para presidente **não alcançou os votos necessários no Congresso Nacional** em 25 de abril de 1984 (**Alternativa C**).',
    macete: {
      title: 'Diretas Já: vitória popular, derrota parlamentar',
      strategy:
        'A emenda foi **barrada no Congresso** em 1984 -> a eleição seguinte (1985, Tancredo Neves) ainda foi **indireta** pelo Colégio Eleitoral. Só em **1989** houve voto direto para presidente.',
      whenToUse: 'Redemocratização do Brasil (1979–1988).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O próprio texto citado mostra a participação massiva de milhões de pessoas nas ruas.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Não houve referendo nem aprovação parcial da emenda.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Apesar da pressão popular histórica, faltaram 22 votos para atingir os 2/3 na Câmara dos Deputados (298 a favor, 65 contra, 113 ausentes).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Poder Moderador pertenceu à Constituição Imperial de 1824, não à transição democrática de 1984.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A emenda foi rejeitada; a Constituinte de 1987–1988 foi convocada posteriormente já no governo civil.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Fato histórico inequívoco da redemocratização brasileira (25/04/1984).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q53',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Segunda Guerra Mundial',
    questionType: 'hist-segunda-guerra-causas-versalhes',
    methodTitle: 'Versalhes, Revanchismo e Expansionismo Nazifascista',
    decisiveConcept:
      'As cláusulas punitivas do Tratado de Versalhes (1919), agravadas pela Crise de 1929, impulsionaram o revisionismo e o expansionismo territorial da Alemanha nazista (Lebensraum), deflagrando a 2ª Guerra em 1939.',
    quickSolution:
      'Entre as causas estruturais da Segunda Guerra Mundial destacam-se a **insatisfação alemã com as imposições do Tratado de Versalhes** após 1918 e a política **expansionista da Alemanha Nazista** (Anschluss, Sudetos, Tchecoslováquia e invasão da Polônia em 1939) (**Alternativa E**).',
    macete: {
      title: 'Ponte direta 1ª Guerra -> 2ª Guerra',
      strategy:
        'Paz punitiva (**Versalhes, 1919**) + crise de 1929 -> ascensão de Hitler e **expansionismo nazista ("espaço vital")** -> invasão da Polônia (1939).',
      whenToUse: 'Questões sobre origens do conflito de 1939–1945.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O conflito começou em setembro de 1939 com a invasão alemã da Polônia (após o Pacto Germano-Soviético), não por expansão stalinista sobre a Europa Ocidental.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'O expansionismo no Pacífico era japonês (Manchúria em 1931, China em 1937), e os EUA adotaram sanções justamente em reação ao avanço nipônico.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'França e Reino Unido formaram a aliança dos Aliados ocidentais contra o Eixo, não romperam entre si para gerar a guerra.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'O Império Austro-Húngaro já havia deixado de existir ao fim da Primeira Guerra Mundial (1918).',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Aponta o nexo histórico central: o revanchismo diante de Versalhes e a agressão expansionista do Terceiro Reich.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Síntese histórica consensual sobre as origens da 2ª Guerra Mundial.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q54',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Guerra Fria e Queda do Muro de Berlim',
    questionType: 'hist-guerra-fria-muro-berlim-1989',
    methodTitle: 'Significado Geopolítico da Queda do Muro de Berlim (1989)',
    decisiveConcept:
      'A queda do Muro de Berlim (9/11/1989) simbolizou o colapso do Bloco Socialista do Leste Europeu, abrindo caminho direto para a reunificação alemã (1990) e o fim da Guerra Fria (1991).',
    quickSolution:
      'Independentemente das disputas de protagonismo citadas no texto, historicamente a queda do Muro de Berlim (novembro de 1989) representou o **passo decisivo rumo ao fim da Guerra Fria** e viabilizou a **reunificação da Alemanha** em 1990 (**Alternativa E**).',
    macete: {
      title: 'Fatos reais de 1989–1991',
      strategy:
        'Muro cai em **1989** -> Alemanha se reunifica em **1990** -> URSS se dissolve e acaba a Guerra Fria em **1991**. Elimine absurdos factuais (João Paulo II nunca ganhou o Nobel; Alemanha não virou o maior país em extensão da Europa — a Rússia/Ucrânia/França são maiores).',
      whenToUse: 'Questões sobre o desfecho da Guerra Fria e Nova Ordem Mundial.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Enfraqueceu e antecedeu o colapso da URSS em 1991 (não consolidou Gorbachev, e Putin só ascendeu em 1999–2000).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'O Papa João Paulo II não recebeu o Prêmio Nobel da Paz.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Mesmo reunificada, a Alemanha não é o maior país europeu em extensão territorial (França, Ucrânia e Espanha têm áreas maiores).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'O Acordo de Schengen original foi assinado antes, em 1985, entre cinco países da Comunidade Europeia.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Descreve exatamente o desdobramento histórico: acelerou o fim da bipolaridade e a reunificação alemã (1990).',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Fatos históricos objetivos de 1989–1991.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    questionId: 'ufrr-2026-q55',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Sistemas Materiais e Separação de Misturas',
    questionType: 'qui-misturas-separacao-fases',
    methodTitle: 'Análise de Fases Sólidas e Métodos de Separação (Imantação e Destilação)',
    decisiveConcept:
      'Três sólidos imiscíveis (areia, sal, ferro) formam sistema heterogêneo trifásico; após dissolução fracionada e filtração, apenas a destilação simples (não a evaporação simples) recupera sal e solvente.',
    quickSolution:
      'Todas as quatro afirmativas são corretas: o sistema contém 3 fases e 3 substâncias (**I e II**); a **evaporação** perde o solvente, enquanto a **destilação simples** recupera água e sal (**III**); e a **imantação** depende do ferro metálico ferromagnético $\\text{Fe}^0$, não funcionando com eficiência em óxidos como $\\text{Fe}_2\\text{O}_3$ (**IV**) (**Alternativa E**).',
    stepByStep: [
      '1. **Afirmativas I e II (Corretas):** Areia ($\\text{SiO}_2$), sal ($\\text{NaCl}$) e limalha de ferro ($\\text{Fe}$) formam três fases sólidas visivelmente distintas (mistura heterogênea trifásica).',
      '2. **Afirmativa III (Correta):** Ao dissolver o $\\text{NaCl}$ em água e filtrar areia/ferro, obtém-se solução aquosa salina. Evaporá-la ao ar livre recupera o sal mas perde o vapor; a **destilação simples** condensa e recupera também a água pura.',
      '3. **Afirmativa IV (Correta):** Ferro metálico ($\\text{Fe}^0$) é fortemente ferromagnético; já óxidos férricos como a hematita ($\\text{Fe}_2\\text{O}_3$) têm resposta magnética muito baixa para separação por imã simples.',
    ],
    macete: {
      title: 'Roteiro clássico areia + sal + ferro',
      strategy:
        '1º **Imantação** (tira $\\text{Fe}^0$ seco) -> 2º **Dissolução fracionada** em água + **Filtração** (tira areia insolúvel) -> 3º **Evaporação** (só quer o sal) ou **Destilação simples** (quer sal + água).',
      whenToUse: 'Qualquer mistura sólida de metal magnético + sal solúvel + sólido insolúvel.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Ignora III e IV, que descrevem corretamente destilação e ferromagnetismo do Fe⁰.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Ignora I e II, que classificam corretamente a mistura sólida como heterogênea trifásica.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Exclui a proposição I, que também descreve corretamente as substâncias componentes.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Exclui a proposição IV, que está tecnicamente correta sobre a diferença magnética entre Fe⁰ e Fe₂O₃.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Todas as afirmações (I, II, III e IV) estão quimicamente corretas.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Verificado pelas propriedades físico-químicas de fases sólidas, separação de misturas e comportamento magnético de Fe⁰ vs Fe₂O₃.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q56',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Estequiometria e Rendimento',
    questionType: 'qui-estequiometria-rendimento-gas-cntp',
    methodTitle: 'Cálculo de Rendimento com Volume Molar na CNTP e Reagente Limitante',
    decisiveConcept:
      'Com excesso de sódio, a água (0,5 mol) é o reagente limitante: $2\\text{ H}_2\\text{O}$ produzem $1\\text{ H}_2$, logo o máximo teórico é 0,25 mol (5,6 L) e 4,48 L corresponde a 80% de rendimento.',
    quickSolution:
      'Na reação $2\\text{ Na} + 2\\text{ H}_2\\text{O} \\to 2\\text{ NaOH} + \\text{H}_2$, como $\\text{Na}$ está em excesso, $9{,}0\\text{ g}$ de $\\text{H}_2\\text{O}$ ($0{,}5\\text{ mol}$) limitam o processo e produziriam teoricamente $0{,}25\\text{ mol}$ de $\\text{H}_2$ ($5{,}6\\text{ L}$ nas CNTP). Como se obteve $4{,}48\\text{ L}$, o rendimento real é $\\frac{4{,}48}{5{,}6} = 80\\%$, abaixo do máximo estequiométrico (**Alternativa C**).',
    stepByStep: [
      '1. Equação balanceada: $$2\\text{ Na}_{(s)} + 2\\text{ H}_2\\text{O}_{(l)} \\to 2\\text{ NaOH}_{(aq)} + \\text{H}_{2(g)}.$$',
      '2. Mols do reagente limitante ($\\text{H}_2\\text{O}$, $M = 18\\text{ g/mol}$): $$n(\\text{H}_2\\text{O}) = \\frac{9{,}0}{18} = 0{,}5\\text{ mol}.$$',
      '3. Pela estequiometria $2\\text{ H}_2\\text{O} : 1\\text{ H}_2$, o número teórico máximo de $\\text{H}_2$ é $0{,}25\\text{ mol}$: $$V_{\\text{teórico}} = 0{,}25 \\times 22{,}4 = 5{,}60\\text{ L}.$$',
      '4. Rendimento real: $$R = \\frac{4{,}48}{5{,}60} = 0{,}80 = 80\\%.$$ Logo não atingiu 100% do esperado (**Alternativa C**).',
    ],
    macete: {
      title: 'Comparação direta A vs C no percentual calculado',
      strategy:
        'A e C têm $80\\%$: observe que se o excesso de $\\text{Na}$ *"garantisse que todo o hidrogênio possível foi liberado"* (letra A), o rendimento seria $100\\%$, e não $80\\%$! Essa contradição já valida **C**.',
      whenToUse: 'Questões em que duas alternativas trazem o mesmo número com justificativas opostas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Justificativa contraditória: rendimento de 80% prova justamente que nem todo o H₂ teoricamente previsto foi recolhido.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Erra o cálculo do rendimento (40% ocorreria apenas se a proporção molar fosse 1:1, esquecendo o fator 2 da equação balanceada).',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Valor exato (4,48 L / 5,60 L = 80%) e interpretação correta do significado físico de rendimento inferior a 100%.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '4,48 / 5,60 = 0,80 (80%), não 75% (que daria 4,20 L).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Erra tanto a proporção estequiométrica (40%) quanto a justificativa conceitual.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo estequiométrico exato: 9,0/18 = 0,5 mol H₂O -> 0,25 mol H₂ = 5,6 L; 4,48/5,6 = 80%.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q57',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Funções Inorgânicas e Reações',
    questionType: 'qui-inorganica-nitrato-magnesio-nox',
    methodTitle: 'Identificação do Sal, Geometria do Nitrato e Termólise Redox',
    decisiveConcept:
      'MgO + 2 HNO₃ → Mg(NO₃)₂ + H₂O; na decomposição térmica do nitrato de magnésio, o nitrogênio reduz de Nox +5 para +4 liberando NO₂.',
    quickSolution:
      'A reação entre óxido básico ($\\text{MgO}$) e ácido forte ($\\text{HNO}_3$) gera o sal neutro iônico **nitrato de magnésio** ($\\text{Mg(NO}_3)_2$). Em seu aquecimento, ocorre decomposição térmica redox ($\\text{Mg(NO}_3)_2 \\to \\text{MgO} + 2\\text{ NO}_2 + \\frac{1}{2}\\text{O}_2$), na qual o N passa de **Nox $+5$** ($\\text{NO}_3^-$) para **$+4$** ($\\text{NO}_2$, gás castanho) (**Alternativa D**).',
    stepByStep: [
      '1. Equação de formação do sal: $$\\text{MgO} + 2\\text{ HNO}_3 \\to \\text{Mg(NO}_3)_2 + \\text{H}_2\\text{O}.$$',
      '2. Cálculo do Nox do N no ânion nitrato ($\\text{NO}_3^-$): $x + 3(-2) = -1 \\implies x = +5$.',
      '3. Cálculo do Nox do N no gás dióxido de nitrogênio ($\\text{NO}_2$): $y + 2(-2) = 0 \\implies y = +4$. Logo, o nitrogênio reduz de $+5$ para $+4$.',
    ],
    macete: {
      title: 'Eliminação rápida pelas 4 regras básicas',
      strategy:
        'A: $\\text{Mg}^{2+} + \\text{NO}_3^-$ é **iônico** (metal alcalino-terroso). B: $\\text{NO}_3^-$ tem 3 ligantes e zero pares livres no N -> **trigonal planar**, nunca linear. C: reação forma sal **neutro**, não ácido. E: Mg tem $Z = 12$ ($11$ é Na!). Sobra **D** sem dúvida.',
      whenToUse: 'Questões multidisciplinares de Química Geral (ligação + geometria + funções + redox).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Magnésio é metal alcalino-terroso de baixa eletronegatividade; com o ânion poliatômico nitrato forma retículo tipicamente iônico (e conduz eletricidade em água por dissociação em íons).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'O íon nitrato ($\\text{NO}_3^-$) possui três oxigênios ligados a um N central sem par isolado ($sp^2$, ressonância), sendo **trigonal planar**, não linear.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Forma $\\text{Mg(NO}_3)_2$, um sal neutro de neutralização completa (não contém $\\text{H}^+$ ionizável).',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          'Na termólise de nitratos de metais alcalino-terrosos obtém-se óxido metálico, $\\text{NO}_2$ (N passa de $+5$ para $+4$, redução) e $\\text{O}_2$ (O passa de $-2$ para $0$, oxidação).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'O magnésio tem número atômico $Z = 12$ ($Z = 11$ é o sódio, metal alcalino).',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Todos os conceitos de ligação, geometria (VSEPR) e Nox verificados rigorosamente.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q58',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Titulação Ácido-Base e Pureza',
    questionType: 'qui-titulacao-pureza-aliquota',
    methodTitle: 'Titulação com Fator de Alíquota e Estequiometria 2:1',
    decisiveConcept:
      'Calcule os mols na alíquota ($n_{\\text{NaOH}} = 2 \\cdot n_{\\text{H}_2\\text{SO}_4}$), escale pelo fator do balão total ($400 / 25 = 16$) e divida a massa pura pela massa impura pesada.',
    quickSolution:
      'Na alíquota de $25\\text{ mL}$ consomem-se $2{,}0 \\times 0{,}005 = 0{,}010\\text{ mol}$ de $\\text{H}_2\\text{SO}_4$, neutralizando $2 \\times 0{,}010 = 0{,}020\\text{ mol}$ de $\\text{NaOH}$. Como a solução total tem $400\\text{ mL}$ ($16\\times$ a alíquota), há $16 \\times 0{,}020 = 0{,}32\\text{ mol}$ de $\\text{NaOH}$ ($12{,}8\\text{ g}$). Pureza: $\\frac{12{,}8}{20{,}0} = 64\\%$ (**Alternativa C**).',
    stepByStep: [
      '1. Reação de neutralização (proporção $2:1$): $$2\\text{ NaOH} + \\text{H}_2\\text{SO}_4 \\to \\text{Na}_2\\text{SO}_4 + 2\\text{ H}_2\\text{O}.$$',
      '2. Quantidade de $\\text{H}_2\\text{SO}_4$ gasto: $$n(\\text{H}_2\\text{SO}_4) = M \\cdot V = 2{,}0 \\times 5{,}0\\cdot 10^{-3} = 0{,}010\\text{ mol}.$$',
      '3. Mols de $\\text{NaOH}$ nos $25{,}0\\text{ mL}$: $$n_{\\text{alíq}}(\\text{NaOH}) = 2 \\times 0{,}010 = 0{,}020\\text{ mol}.$$',
      '4. Escala para os $400\\text{ mL}$ iniciais ($400 / 25 = 16$): $$n_{\\text{total}}(\\text{NaOH}) = 16 \\times 0{,}020 = 0{,}32\\text{ mol}.$$',
      '5. Massa pura ($M_{\\text{NaOH}} = 40\\text{ g/mol}$) e pureza: $$m_{\\text{pura}} = 0{,}32 \\times 40 = 12{,}8\\text{ g} \\implies \\text{Pureza} = \\frac{12{,}8}{20{,}0}\\times 100\\% = 64\\%.$$',
    ],
    macete: {
      title: 'Concentração direta antes de multiplicar por 400 mL',
      strategy:
        '$M_{\\text{NaOH}} \\cdot 25 = 2 \\cdot (2{,}0) \\cdot 5 \\implies M_{\\text{NaOH}} = \\frac{20}{25} = 0{,}8\\text{ mol/L}$. Em $0{,}4\\text{ L}$ há $0{,}32\\text{ mol} \\times 40 = 12{,}8\\text{ g}$ de $20\\text{ g} = 64\\%$.',
      whenToUse: 'Qualquer titulação envolvendo retirada de alíquota de um balão volumétrico.',
      caution:
        'Não esqueça de multiplicar o ácido diprótico ($\\text{H}_2\\text{SO}_4$) por $2$ nem de escalar de $25\\text{ mL}$ para $400\\text{ mL}$.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Valor incompatível com a massa obtida na titulação ($0{,}32\\text{ mol} = 12{,}8\\text{ g}$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Representaria apenas $9\\text{ g}$ de NaOH puro.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation: '12,8 g / 20,0 g = 0,64 = 64% de pureza.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Representaria 16,4 g de NaOH puro.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Representaria 19,0 g de NaOH puro.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conta verificada passo a passo (20 mL de H+ equivalem a 0,8 mol/L de NaOH -> 12,8 g -> 64%).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q59',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Estequiometria e Combustão',
    questionType: 'qui-estequiometria-combustao-butano',
    methodTitle: 'Balanceamento por Carbonos na Combustão de Hidrocarbonetos',
    decisiveConcept:
      'Cada 1 mol de butano (C₄H₁₀) queimado completamente gera exatamente 4 mols de CO₂; em 120 minutos consomem-se 6,0 mols de butano → 24 mols de CO₂ (1056 g).',
    quickSolution:
      'Em $2\\text{ h} = 120\\text{ min}$ queimam-se $120 \\times 0{,}05 = 6{,}0\\text{ mol}$ de butano ($\\text{C}_4\\text{H}_{10}$). Como cada mol de butano tem 4 carbonos, forma $4 \\times 6{,}0 = 24\\text{ mol}$ de $\\text{CO}_2$ ($M = 44\\text{ g/mol}$), resultando em $24 \\times 44 = 1056\\text{ g}$ (**Alternativa E**).',
    stepByStep: [
      '1. Equação balanceada: $$\\text{C}_4\\text{H}_{10} + \\frac{13}{2}\\text{ O}_2 \\to 4\\text{ CO}_2 + 5\\text{ H}_2\\text{O}.$$',
      '2. Total de butano em $2\\text{ h} = 120\\text{ min}$: $$n(\\text{C}_4\\text{H}_{10}) = 0{,}05 \\times 120 = 6{,}0\\text{ mol}.$$',
      '3. Massa de $\\text{CO}_2$ ($M = 12 + 32 = 44\\text{ g/mol}$): $$n(\\text{CO}_2) = 4 \\times 6{,}0 = 24\\text{ mol} \\implies m = 24 \\times 44 = 1056\\text{ g}.$$',
    ],
    macete: {
      title: 'Conservação do Carbono sem perder tempo com o O₂',
      strategy:
        'Para achar só $\\text{CO}_2$ na combustão completa de $\\text{C}_x\\text{H}_y$, você **não** precisa balancear o $\\text{O}_2$! Basta multiplicar os mols do combustível pelo índice $x$ ($4$) e por $44\\text{ g/mol}$.',
      whenToUse: 'Qualquer problema que peça massa ou mol de $\\text{CO}_2$ na combustão completa.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '24 é o número de mols de CO₂, não a massa em gramas (faltou multiplicar por $M = 44\\text{ g/mol}$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '44 g corresponde a apenas 1 mol de CO₂.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '264 g equivale a 6 mols de CO₂ (erro ao esquecer o fator 4 de carbonos no butano: $6 \\times 44$).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '528 g equivale a apenas 1 hora de queima ($12 \\times 44$), metade do pedido.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: '24 mol × 44 g/mol = 1056 g de CO₂.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo estequiométrico exato.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q60',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Eletroquímica',
    subtopic: 'Eletrólise e Leis de Faraday',
    questionType: 'qui-eletrolise-leis-faraday',
    methodTitle: 'Leis de Faraday com Carga em Mols de Elétrons',
    decisiveConcept:
      'Calcule os mols de elétrons via $n_{e^-} = (i \\cdot t)/F$ e divida pelo nox do cobre no sulfato de cobre ($\\text{Cu}^{2+}$, $z = 2$).',
    quickSolution:
      'A carga elétrica é $Q = 5{,}0 \\times 9650 = 48250\\text{ C}$, equivalente a $\\frac{48250}{96500} = 0{,}5\\text{ mol}$ de elétrons. Como a redução do cobre em $\\text{CuSO}_4$ exige $2e^-$ ($\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$), depositam-se $0{,}25\\text{ mol}$ de Cu: $0{,}25 \\times 63{,}5 = 15{,}875 \\approx 15{,}9\\text{ g}$ (**Alternativa D**).',
    stepByStep: [
      '1. Carga total: $$Q = i \\cdot t = 5{,}0 \\cdot 9650 = 48.250\\text{ C}.$$',
      '2. Mols de elétrons ($1\\text{ F} = 96.500\\text{ C/mol}$): $$n(e^-) = \\frac{48.250}{96.500} = 0{,}5\\text{ mol}.$$',
      '3. Semirreação catódica em $\\text{CuSO}_4$: $$\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}^0 \\implies n(\\text{Cu}) = \\frac{0{,}5}{2} = 0{,}25\\text{ mol}.$$',
      '4. Massa depositada ($M_{\\text{Cu}} = 63{,}5\\text{ g/mol}$): $$m = 0{,}25 \\times 63{,}5 = 15{,}875\\text{ g} \\approx 15{,}9\\text{ g}.$$',
    ],
    macete: {
      title: 'Corte mágico com 9650',
      strategy:
        'Veja $t = 9650\\text{ s}$? Isso é exatamente $0{,}1\\text{ F/A}$! Logo $n(e^-) = 5{,}0 \\times 0{,}1 = 0{,}5\\text{ mol } e^-$. Como o cobre é $\\text{Cu}^{2+}$ (divide por $2$), dá $0{,}25\\text{ mol}$ = um quarto de $63{,}5 \\approx 15{,}9\\text{ g}$.',
      whenToUse: 'Qualquer questão de eletrólise com tempos múltiplos de $965$ ou $9650$.',
      caution:
        'Atenção ao $2e^-$ do $\\text{Cu}^{2+}$: esquecer de dividir por 2 leva ao distrator A ($31{,}8\\text{ g}$).',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '31,8 g resulta do erro clássico de não dividir por 2 na estequiometria de elétrons ($\\text{Cu}^{2+} + 2e^-$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '63,5 g seria 1 mol completo de cobre (que requereria $2\\text{ F}$).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Sem fundamento estequiométrico com a massa molar do cobre ($63{,}5\\text{ g/mol}$).',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: '$0{,}25\\text{ mol} \\times 63{,}5\\text{ g/mol} = 15{,}875\\text{ g} \\approx 15{,}9\\text{ g}$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Valor incompatível com a lei de Faraday.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conta verificada com $M_{\\text{Cu}} = 63{,}5\\text{ g/mol}$ e $F = 96500\\text{ C/mol}$.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q61',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica',
    subtopic: 'Reações de Desidratação e Compostos Heterocíclicos',
    questionType: 'qui-organica-frutose-hmf-desidratacao',
    methodTitle: 'Contagem de Água Eliminada e Aromaticidade do Anel Furânico (HMF)',
    decisiveConcept:
      'Frutose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) → HMF ($\\text{C}_6\\text{H}_6\\text{O}_3$) + $3\\text{ H}_2\\text{O}$ é uma desidratação ácida (não oxidação global); o anel furânico final tem $6$ elétrons $\\pi$ (aromático).',
    quickSolution:
      '**I** é correta (perda de 3 moléculas de água de $\\text{C}_6\\text{H}_{12}\\text{O}_6$ para $\\text{C}_6\\text{H}_6\\text{O}_3$); **II** é correta (formação de sistema conjugado entre $1$ e $2$); **IV** é correta (anel furânico com $4$ elétrons das duplas $+ 2$ de um par livre do oxigênio = $6\\text{ e}^-\\,\\pi$, regra de Hückel). Já **III** é **falsa** porque ocorre apenas **desidratação/tautomerização** sem mudança do Nox médio global do carbono (**Alternativa C**).',
    stepByStep: [
      '1. **Fórmula global:** Frutose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) perde $3\\text{ H}_2\\text{O}$ e gera HMF ($\\text{C}_6\\text{H}_6\\text{O}_3$) — processo puramente de **desidratação** (I correta).',
      '2. **Oxidação vs Desidratação (III falsa):** Soma de Nox dos C na frutose: $0$. Soma de Nox dos C no HMF ($6x + 6(+1) + 3(-2) = 0$): também $0$! A carbonila aldeídica surge por desidratação e tautomerização enol-aldeído, sem agente oxidante.',
      '3. **Conjugação e aromaticidade (II e IV corretas):** O intermediário 2 consolida duplas conjugadas e o HMF fecha um anel heterocíclico de furano plano com $6$ elétrons $\\pi$ ($4n+2$ com $n=1$).',
    ],
    macete: {
      title: 'Teste rápido "é oxidação?" por fórmula molecular',
      strategy:
        'Para saber se uma transformação orgânica é oxidação/redução sem agente redox no esquema: conte os átomos! Frutose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) menos $3\\text{ H}_2\\text{O}$ = $\\text{C}_6\\text{H}_6\\text{O}_3$ (HMF). Só saiu água $\\implies$ **desidratação, não oxidação** (III falsa $\\implies$ só sobra C!).',
      whenToUse: 'Reações orgânicas com várias etapas onde se questiona o tipo global de reação.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Inclui III, que classifica erroneamente uma desidratação como reação global de oxidação.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Omite I, que corretamente identifica as sucessivas eliminações de água.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation: 'Apenas I, II e IV são verdadeiras; III é falsa porque o grau de oxidação global não varia (saem apenas $3\\text{ H}_2\\text{O}$).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Justamente III é a única afirmação falsa.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Inclui a falsa III.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Balanço atômico C6H12O6 -> C6H6O3 + 3 H2O e regra de Hückel para o furano verificados.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q62',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Polímeros e Estequiometria',
    questionType: 'qui-polimeros-numero-cadeias',
    methodTitle: 'Cadeias Poliméricas = Total de Monômeros / Grau de Polimerização',
    decisiveConcept:
      'Encontre os mols de eteno ($m/M$), multiplique pela constante de Avogadro e divida pelo grau médio de polimerização ($1.000$ unidades por cadeia).',
    quickSolution:
      'A massa molar do eteno ($\\text{C}_2\\text{H}_4$) é $28\\text{ g/mol}$, logo $280\\text{ g}$ equivalem a $10\\text{ mols}$ = $6{,}022 \\cdot 10^{24}$ moléculas. Dividindo por $1.000$ unidades por cadeia ($10^3$), formam-se aproximadamente $6{,}02 \\cdot 10^{21}$ cadeias poliméricas (**Alternativa A**).',
    stepByStep: [
      '1. Massa molar do eteno ($\\text{C}_2\\text{H}_4$): $M = 2(12) + 4(1) = 28\\text{ g/mol}$.',
      '2. Número de mols de monômero: $$n = \\frac{280}{28} = 10\\text{ mols}.$$',
      '3. Número de unidades monoméricas: $$N_{\\text{eteno}} = 10 \\times 6{,}022\\cdot 10^{23} = 6{,}022\\cdot 10^{24}.$$',
      '4. Número de cadeias (cada uma com $10^3$ unidades): $$N_{\\text{cadeias}} = \\frac{6{,}022\\cdot 10^{24}}{10^3} \\approx 6{,}02 \\cdot 10^{21}.$$',
    ],
    macete: {
      title: 'Regra do expoente com grau de polimerização',
      strategy:
        '$280\\text{ g}$ de eteno ($M=28$) = $10\\text{ mols}$ ($\\times 10^{+1}$), e grau $1.000$ divide por $10^3$ ($\\times 10^{-3}$). Efeito líquido no $6{,}02\\cdot 10^{23}$: $23 + 1 - 3 = 21 \\implies \\mathbf{6{,}02\\cdot 10^{21}}$ (**A**).',
      whenToUse: 'Cálculo do número de macromoléculas em polimerização por adição.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: '$(10 \\cdot 6{,}022\\cdot 10^{23}) / 10^3 \\approx 6{,}02\\cdot 10^{21}$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Diverge em grandeza e fator numérico (dividido por 30 em vez de 100).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Corresponderia a apenas 1 mol total de cadeias, sem aplicar corretamente o fator 10/1000.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Omite o fator numérico da Constante de Avogadro ($6{,}02$).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Valor incompatível com o número de mols de eteno.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo dimensional e estequiométrico exato.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q63',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica',
    subtopic: 'Substituição Eletrofílica Aromática',
    questionType: 'qui-organica-nitracao-benzeno-lewis',
    methodTitle: 'Mecanismo da Nitração Aromática e Ácido vs. Base de Lewis',
    decisiveConcept:
      'Eletrófilo que aceita par de elétrons (como o íon nitrônio $\\text{NO}_2^+$) é um **Ácido de Lewis**, e não Base de Lewis — portanto IV é falsa e I, II, III, V são corretas.',
    quickSolution:
      'Na nitração do benzeno, o íon nitrônio ($\\text{NO}_2^+$) **aceita** elétrons $\\pi$ do anel, comportando-se como **Ácido de Lewis** (eletrófilo), tornando a proposição IV falsa ao chamá-lo de *"Base de Lewis"*. As afirmativas **I, II, III e V** estão corretas (**Alternativa B**).',
    stepByStep: [
      '1. **I (Correta):** A nuvem $\\pi$ aromática provém dos orbitais $p$ puros ortogonais ao plano do anel.',
      '2. **II (Correta):** O ataque eletrofílico forma o complexo sigma (íon arenônio/carbônio) estabilizado por ressonância.',
      '3. **III (Correta):** No nitrobenzeno, tanto o carbono do anel quanto o nitrogênio do grupo $-\\text{NO}_2$ têm hibridação $sp^2$, formando ligação $\\sigma(sp^2\\text{-}sp^2)$.',
      '4. **IV (Falsa):** Quem **aceita** par de elétrons é **Ácido de Lewis** (e não Base de Lewis, que doa).',
      '5. **V (Correta):** Critérios completos de aromaticidade (cíclico, plano, totalmente conjugado e $4n+2$ elétrons $\\pi$).',
    ],
    macete: {
      title: 'Mnemônico Ácido vs Base de Lewis no mecanismo',
      strategy:
        '**A**ceita elétrons = **Á**cido de Lewis (eletrófilo $\\text{NO}_2^+$). **B**ota/doa elétrons = **B**ase de Lewis (anel benzênico nucleófilo). IV disse que quem *aceita* é *Base* -> pegou a única falsa na hora (**B**).',
      whenToUse: 'Qualquer reação orgânica que cobre conceito de Lewis junto a eletrófilo/nucleófilo.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Inclui a falsa IV e omite II e V.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Identifica com precisão que I, II, III e V estão corretas e que IV erra ao trocar Ácido por Base de Lewis.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Deixa de fora I e II, ambas conceitualmente corretas.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Inclui a falsa IV e exclui I.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'IV contém erro conceitual claro sobre ácido/base de Lewis.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conceito de Lewis, hibridação sp² e aromaticidade de Hückel verificados.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
