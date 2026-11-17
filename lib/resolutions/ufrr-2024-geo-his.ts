import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2024';
const REVIEW_DATE = '2026-11-16T15:00:00.000Z';

export const UFRR_2024_GEO_HIS_RESOLUTIONS: QuestionResolution[] = [
  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    questionId: 'ufrr-2024-q37',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Climatologia — El Niño',
    questionType: 'geo-climatologia-el-nino-brasil',
    methodTitle: 'Mecanismo Oceânico do El Niño e Impactos Pluviométricos no Brasil',
    decisiveConcept:
      'O El Niño caracteriza-se pelo aquecimento anormal das águas superficiais do Oceano Pacífico Equatorial Centro-Leste, alterando a circulação atmosférica (célula de Walker) e provocando excesso de chuvas no Sul do Brasil e estiagem/seca no Norte e Nordeste.',
    quickSolution:
      'Definição correta: **aquecimento das águas do Oceano Pacífico próximo ao Equador**. Consequência clássica no Brasil: bloqueio de frentes frias e **aumento da pluviosidade no Sul**, enquanto a subsidência do ar provoca **seca no Norte e Nordeste** (**Alternativa B**).',
    stepByStep: [
      'Oceano envolvido: Pacífico Equatorial (enfraquecimento dos ventos alísios de leste para oeste), eliminando A e E (que citam Atlântico).',
      'Sinal térmico: El Niño = aquecimento anômalo (La Niña = resfriamento), eliminando C.',
      'No Brasil: a Região Sul recebe sistemas frontais estacionários e precipitação acima da média; Norte (especialmente Amazônia oriental/setentrional) e Nordeste semiárido enfrentam redução de chuvas e seca — eliminando D e confirmando B.',
    ],
    macete: {
      title: 'El Niño = Pacífico Quente -> Sul Alagado, Norte/NE Seco',
      strategy:
        'Guarde o par oposto: **El Niño (quente no Pacífico)** = muita chuva no **Sul** + seca no **Norte/Nordeste**. Já **La Niña (frio no Pacífico)** inverte o padrão.',
      whenToUse: 'Qualquer questão sobre ENOS (El Niño / La Niña) e clima do Brasil.',
      caution:
        'Não confunda com o Dipolo do Atlântico; o gatilho primário do El Niño é sempre o **Oceano Pacífico Equatorial**.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Troca o Oceano Pacífico pelo Atlântico e erra o padrão térmico do Centro-Oeste.' },
      { letter: 'B', status: 'correta', explanation: 'Define com precisão o aquecimento do Pacífico Equatorial e os impactos opostos entre Sul (mais chuva) e Norte/Nordeste (seca).' },
      { letter: 'C', status: 'incorreta', explanation: 'Descreve o resfriamento do Pacífico e aumento de chuva no Norte/NE — características da **La Niña**, não do El Niño.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inverte o efeito no Nordeste, que sofre redução de chuvas durante o El Niño.' },
      { letter: 'E', status: 'incorreta', explanation: 'Erroneamente atribui o fenômeno ao resfriamento do Atlântico.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Climatologia padrão ENOS (INPE/CPTEC e NOAA).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q38',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geomorfologia — Intemperismo',
    questionType: 'geo-geomorfologia-intemperismo-quimico-agua',
    methodTitle: 'Classificação dos Processos de Intemperismo (Físico, Químico e Biológico)',
    decisiveConcept:
      'O intemperismo químico consiste na decomposição e alteração mineralógica das rochas por reações como hidrólise, dissolução e oxidação, tendo a **água** como principal agente reagente.',
    quickSolution:
      'Entre os tipos clássicos de intemperismo (físico, químico e biológico), o **intemperismo químico atua com auxílio da água** (dissolvendo e hidrolisando minerais, especialmente em climas quentes e úmidos) (**Alternativa D**).',
    macete: {
      title: 'Físico = Temperatura/Gelo | Químico = Água',
      strategy:
        'Corte imediatamente termos inventados como "intemperismo geológico" (C) e "intemperismo climático" (E), e lembre que pressão magmática (A) é agente **interno/endógeno**, não intemperismo.',
      whenToUse: 'Questões sobre dinâmica externa do relevo e formação de solos.',
      caution: 'O vento (B) atua sobretudo como agente erosivo/transporte e desagregação mecânica, não como motor do intemperismo químico.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Pressão magmática é agente endógeno (tectonismo/magmatismo), não processo exógeno de intemperismo físico.' },
      { letter: 'B', status: 'incorreta', explanation: 'Ventos promovem abrasão mecânica (erosão/intemperismo físico), não decomposição química.' },
      { letter: 'C', status: 'incorreta', explanation: '"Intemperismo geológico" não existe como categoria; variação térmica gera intemperismo **físico** (termoclastia).' },
      { letter: 'D', status: 'correta', explanation: 'A água é o principal agente do intemperismo químico (hidrólise, hidratação, dissolução e oxidação).' },
      { letter: 'E', status: 'incorreta', explanation: '"Intemperismo climático" não é categoria padrão da Geomorfologia (os três tipos são físico, químico e biológico).' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conceito clássico de Geomorfologia (Teixeira et al., Decifrando a Terra).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q39',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Cartografia — Fusos Horários',
    questionType: 'geo-cartografia-limites-praticos-fusos',
    methodTitle: 'Distinção entre Limite Teórico (Astronômico) e Limite Prático dos Fusos',
    decisiveConcept:
      'Os meridianos espaçados de $15^\\circ$ em $15^\\circ$ definem os limites **teóricos** (astronômicos), enquanto os contornos ajustados às fronteiras políticas, divisas estaduais e necessidades administrativas locais chamam-se limites ou fusos **práticos**.',
    quickSolution:
      'Para evitar dividir municípios, estados ou países inteiros por uma linha meridiana rígida, os Estados adotam adaptações denominadas **fusos ou limites práticos** (**Alternativa B**).',
    macete: {
      title: 'Dupla clássica: Limite Teórico × Limite Prático',
      strategy:
        'Na Cartografia escolar brasileira, os fusos têm dois limites: **teórico** (faixas retas de $15^\\circ$) e **prático** (linhas sinuosas adaptadas a fronteiras político-administrativas).',
      whenToUse: 'Questões conceituais sobre o traçado sinuoso dos fusos horários no mapa-múndi e no Brasil.',
      caution: '"Políticos" (E) é um distrator plausível pelo senso comum, mas a nomenclatura cartográfica consagrada opõe **Teóricos** (A) a **Práticos** (B).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Limites teóricos correspondem às faixas matemáticas exatas de $15^\\circ$ de longitude, sem adaptação local.' },
      { letter: 'B', status: 'correta', explanation: 'Termo técnico consagrado na cartografia para designar os fusos ajustados a fronteiras administrativas e necessidades locais.' },
      { letter: 'C', status: 'incorreta', explanation: 'Não é terminologia cartográfica.' },
      { letter: 'D', status: 'incorreta', explanation: 'Embora tenham impacto econômico, não recebem a denominação "fusos econômicos".' },
      { letter: 'E', status: 'incorreta', explanation: 'Apesar de seguirem fronteiras políticas, na literatura geográfica são denominados **limites práticos**.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Nomenclatura padrão da cartografia escolar brasileira (limite teórico vs. limite prático).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q40',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geografia Econômica — Comércio Eletrônico e Trabalho',
    questionType: 'geo-economia-ecommerce-servicos-digitais',
    methodTitle: 'Análise de Assertivas sobre Terciário Digital e Relações de Trabalho',
    decisiveConcept:
      'O crescimento do *e-commerce* decorre da expansão da conectividade digital e reconfigura o mercado de trabalho para entregas, logística e áreas digitais — deslocando vendas do varejo físico (*offline*) para o ambiente *online*.',
    quickSolution:
      'As assertivas **I** (expansão dos serviços digitais e internet) e **II** (migração profissional e novas relações de trabalho) estão corretas. A **III** erra ao afirmar que o *e-commerce* aumentou as vendas no varejo **offline** em $50\\%$ entre 2019 e 2022 (o avanço ocorreu justamente no varejo *online* durante a pandemia). Logo, **I e II corretas e III incorreta** (**Alternativa B**).',
    macete: {
      title: 'Olhe a palavra "offline" na assertiva III!',
      strategy:
        'A banca trocou *online* por *offline* na III! Como o *e-commerce* cresce no digital (e não aumentando 50% no varejo físico durante 2019–2022), a III é falsa — o que elimina C, D e E.',
      whenToUse: 'Questões de atualidades econômicas com assertivas I, II e III.',
      caution: 'Releia palavras em inglês (*online* vs. *offline*) com atenção redobrada.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A assertiva II também está correta: a digitalização reestruturou carreiras e relações de trabalho (logística, TI, marketing digital).' },
      { letter: 'B', status: 'correta', explanation: 'Valida I e II e rejeita o erro factual de III sobre o varejo offline.' },
      { letter: 'C', status: 'incorreta', explanation: 'Considera I falsa e valida III.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inverte totalmente os valores lógicos de I, II e III.' },
      { letter: 'E', status: 'incorreta', explanation: 'Valida III (falsa) e rejeita I (verdadeira).' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Interpretação econômica do comércio eletrônico no Brasil (2010–2022).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q41',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Formação Territorial do Brasil',
    questionType: 'geo-brasil-estado-novo-politicas-territoriais',
    methodTitle: 'Planejamento Estatal e Ideologias Geográficas no Estado Novo (1937–1945)',
    decisiveConcept:
      'No Estado Novo varguista, o Estado nacional promoveu forte centralização administrativa e modernização territorial com órgãos como o IBGE (1938), a primeira regionalização oficial do país e a *Marcha para o Oeste*.',
    quickSolution:
      'Somente a **Alternativa D** está correta: durante o Estado Novo varguista houve reorganização do aparato estatal, criação de órgãos (como o IBGE) e programas de modernização e integração territorial (**Alternativa D**).',
    macete: {
      title: 'Corte anacronismos e direções erradas!',
      strategy:
        'A erra o rumo ("Marcha para o **Sul**" $\\to$ foi para o **Oeste**); B erra o presidente (1ª regionalização foi **Vargas/1942**, não JK); C contraria a Constituição Cidadã de 1988; E erra o século da globalização neoliberal (séc. **XIX** $\\to$ séc. **XX**).',
      whenToUse: 'Questões de geografia histórica e políticas territoriais do Estado brasileiro.',
      caution: 'Verifique sempre datas e nomes próprios de programas estatais (ex.: *Marcha para o Oeste*).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A política varguista chamou-se **Marcha para o Oeste** (interiorização Centro-Oeste/Amazônia), não "Marcha para o Sul".' },
      { letter: 'B', status: 'incorreta', explanation: 'A primeira divisão regional oficial do Brasil (IBGE) ocorreu no governo **Getúlio Vargas** (década de 1940), antes de JK.' },
      { letter: 'C', status: 'incorreta', explanation: 'A partir da Constituição de 1988 ampliaram-se as dimensões social e política do desenvolvimento, não o oposto.' },
      { letter: 'D', status: 'correta', explanation: 'Retrata com exatidão a centralização e institucionalização territorial do Estado Novo varguista.' },
      { letter: 'E', status: 'incorreta', explanation: 'Globalização neoliberal e privatizações ocorreram no final do século **XX** (anos 1990), jamais no século XIX.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Alinhado à obra de Antonio Carlos Robert Moraes sobre ideologias geográficas e formação territorial.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q42',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Urbanização Brasileira',
    questionType: 'geo-urbanizacao-megarregiao-rj-sp',
    methodTitle: 'Hierarquia Urbana Brasileira e Megarregião Rio–São Paulo',
    decisiveConcept:
      'Segundo o IBGE (REGIC), as metrópoles nacionais/globais do Rio de Janeiro e de São Paulo polarizam a mais densa concentração urbana, industrial e de serviços do Brasil e do Hemisfério Sul, formando uma megarregião/macrometrópole no Sudeste.',
    quickSolution:
      'A **Alternativa B** descreve com exatidão o núcleo polarizador da rede urbana nacional: no Sudeste atlântico, Rio de Janeiro e São Paulo estruturam a mais expressiva megarregião do Brasil e do Hemisfério Sul (**Alternativa B**).',
    macete: {
      title: 'Vale do Paraíba fica entre RJ e SP, não RJ e BH!',
      strategy:
        'A erra geografia básica ao pôr o Vale do Paraíba Fluminense ligando **RJ–BH** (ele liga **RJ–SP** pela Via Dutra!); D põe fronteira agropecuária recente no **Sul**; E inventa redução de cidades médias em 2010.',
      whenToUse: 'Questões de rede urbana brasileira e Regiões de Influência das Cidades (IBGE).',
      caution: 'Fique atento a localizações de eixos viários e bacias (Vale do Paraíba = eixo Rio–São Paulo).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O Vale do Paraíba Fluminense integra o eixo **Rio de Janeiro – São Paulo** (Via Dutra/CSN), não o eixo Rio – Belo Horizonte.' },
      { letter: 'B', status: 'correta', explanation: 'Reconhece corretamente a megarregião/macrometrópole articulada por São Paulo e Rio de Janeiro no Sudeste atlântico.' },
      { letter: 'C', status: 'incorreta', explanation: 'A industrialização brasileira articulou intensa expansão rodoviária e de transportes entre centros dinâmicos, não sofreu com ausência total de rede no eixo principal.' },
      { letter: 'D', status: 'incorreta', explanation: 'A fronteira agropecuária contemporânea avança sobre **Centro-Oeste, Norte e MATOPIBA**, pois a Região Sul já possuía ocupação consolidada.' },
      { letter: 'E', status: 'incorreta', explanation: 'O Censo 2010 registrou crescimento e interiorização das cidades médias no Brasil, inclusive no Norte e Sudeste.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Baseado nos estudos do IBGE (REGIC) e literatura de urbanização brasileira (Milton Santos / Roberto Lobato Corrêa).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q43',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geopolítica — Cáucaso (Nagorno-Karabakh)',
    questionType: 'geo-geopolitica-caucaso-nagorno-karabakh',
    methodTitle: 'Geopolítica do Cáucaso Sul e Auditoria Factual de Alternativas',
    decisiveConcept:
      'O conflito de Nagorno-Karabakh opõe historicamente **Armênia e Azerbaijão** desde o colapso da URSS (com guerras em 1988–1994, 2016, 2020 e ofensiva azeri em setembro de 2023 enquanto a Rússia estava concentrada na **Guerra da Ucrânia**).',
    quickSolution:
      'Esta questão possui **status pendente de verificação oficial**, pois todas as alternativas impressas contêm impropriedades factuais: **A** cita o Japão; **B** ignora os conflitos de 2016 e 2020; **C** troca Azerbaijão por Afeganistão; **D** atribui financiamento bélico dos EUA à Armênia; e **E** imprime **"Guerra das Maldivas"** onde o contexto histórico exigiria **"Guerra da Ucrânia"**.',
    stepByStep: [
      'Atores reais do conflito: Armênia e Azerbaijão (não Japão nem Afeganistão), descartando imediatamente A e C.',
      'Histórico pós-1990: houve guerra aberta entre 1991–1994, confrontos em 2016 e a Segunda Guerra de Nagorno-Karabakh em 2020 — descartando B.',
      'Alinhamento externo: os EUA não financiaram a guerra armênia com armamentos em Nagorno-Karabakh — descartando D.',
      'Na alternativa E, o texto oficial impresso grafou "Guerra das Maldivas" (evento inexistente; provavelmente erro de digitação/revisão para "Guerra da Ucrânia", que desviou atenção militar russa). Sem o gabarito definitivo da CPV confirmando se a questão foi mantida como E ou anulada, preserva-se `pendente de verificação`.',
    ],
    macete: {
      title: 'Nagorno-Karabakh = Armênia × Azerbaijão (Cáucaso)',
      strategy:
        'Se encontrar essa questão com gabarito oficial definitivo futuramente, observe que a única tese geopolítica plausível (Rússia ocupada em outra guerra deixando vácuo no Cáucaso em 2023) seria a de E, prejudicada pelo erro de impressão **"Maldivas"** em vez de **Ucrânia**.',
      whenToUse: 'Questões de geopolítica pós-soviética (Cáucaso Sul).',
      caution: 'Nunca marque uma alternativa por "chute" sem checar se o enunciado ou a impressão sofreu troca de nomes próprios — o estudo crítico identifica o erro na hora.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O Japão não tem disputa geopolítica em Nagorno-Karabakh (Cáucaso Sul).' },
      { letter: 'B', status: 'incorreta', explanation: 'O cessar-fogo de 1994 foi rompido diversas vezes, inclusive com guerras em 2016 e 2020.' },
      { letter: 'C', status: 'incorreta', explanation: 'O conflito ocorre entre Armênia e **Azerbaijão**, nunca contra o Afeganistão.' },
      { letter: 'D', status: 'incorreta', explanation: 'A Armênia não recebeu financiamento armado dos EUA para guerrear em Nagorno-Karabakh.' },
      { letter: 'E', status: 'contestada', explanation: 'Apresenta a única hipótese geopolítica próxima (afastamento russo pelo desgaste militar), porém contém erro factual impresso ("Guerra das Maldivas" em vez de Guerra da Ucrânia), tornando o gabarito dependente da decisão oficial da banca.' },
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'pending_verification',
    verificationNotes:
      'Alternativa E apresenta erro editorial impresso ("Guerra das Maldivas" no lugar de Guerra da Ucrânia) enquanto A–D são factualmente incorretas; aguardando gabarito definitivo da CPV/UFRR.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q44',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Geografia Regional — Economia de Roraima',
    questionType: 'geo-roraima-comercio-exterior-2022',
    methodTitle: 'Comércio Exterior de Roraima (Pauta Exportadora e Logística)',
    decisiveConcept:
      'Questões com percentuais específicos de balança comercial estadual por ano-calendário (2022) dependem dos boletins oficiais do MDIC/Comex Stat ou SEPLAN-RR usados pela banca, sendo possível eliminar de imediato apenas erros geográficos evidentes (como dizer que Mato Grosso faz fronteira com Roraima).',
    quickSolution:
      'Questão mantida em **verificação pendente** para evitar afirmar percentuais estatísticos exatos de 2022 ($29\\%$, $62\\%$, $>40\\%$) sem o gabarito oficial da banca ou a tabela exata do MDIC/Comex Stat citada na elaboração. Sabe-se com segurança que **E é falsa**, pois Mato Grosso não é estado vizinho de Roraima (os limites estaduais são Amazonas e Pará).',
    macete: {
      title: 'Elimine fronteiras impossíveis em Roraima',
      strategy:
        'Roraima faz divisa apenas com **Amazonas** e **Pará** (além de Venezuela e Guiana). Qualquer alternativa chamando **Mato Grosso** de "estado vizinho" (E) está geograficamente errada.',
      whenToUse: 'Questões regionais sobre economia e logística de Roraima.',
      caution: 'Dados numéricos pontuais de exportação/importação mudam anualmente entre soja, açúcares, milho e bovinos vivos — na ausência de gabarito oficial publicado aqui, não adote números não confirmados.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'contestada', explanation: 'Afirma participação específica de ~29% para açúcares e melados como liderança em 2022; requer conferência no relatório oficial usado pela banca (uma vez que a soja e derivados também figuram com destaque na pauta de RR).' },
      { letter: 'B', status: 'contestada', explanation: 'Atribui ~62% das importações de 2022 a máquinas e aparelhos elétricos; percentual específico sem confirmação oficial no arquivo da prova.' },
      { letter: 'C', status: 'contestada', explanation: 'Cita variação de crescimento acima de 40% das exportações em 2022 frente a 2021; requer conferência direta na série histórica oficial do MDIC/Comex Stat.' },
      { letter: 'D', status: 'contestada', explanation: 'Aponta a China como principal destino das exportações de RR em 2022; requer validação frente ao comércio bilateral com a Venezuela/Guiana/Ásia naquele ano específico.' },
      { letter: 'E', status: 'incorreta', explanation: 'Mato Grosso não faz fronteira com Roraima (os estados vizinhos são Amazonas e Pará) nem constitui seu corredor logístico vizinho.' },
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'pending_verification',
    verificationNotes:
      'As alternativas A–D trazem cifras específicas de comércio exterior de Roraima em 2022 ausentes do enunciado e sem gabarito definitivo vinculado; alternativa E eliminada por erro geográfico.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q45',
    examId: EXAM_ID,
    subject: 'Geografia',
    topic: 'Globalização e Neoliberalismo',
    questionType: 'geo-globalizacao-harvey-neoliberalismo-fmi',
    methodTitle: 'Globalização Neoliberal segundo David Harvey (Estado, FMI e Trabalho)',
    decisiveConcept:
      'A globalização financeirizada sob hegemonia neoliberal combina desregulamentação de mercados, austeridade fiscal e atuação de organismos multilaterais (FMI e Banco Mundial) pressionando pela flexibilização trabalhista e redução do Estado social.',
    quickSolution:
      'As assertivas **I** (desregulamentação financeira e austeridade fiscal) e **III** (papel de FMI e Banco Mundial em reformas fiscais e trabalhistas) estão corretas. A **II** é falsa porque o projeto neoliberal da globalização prega justamente o **recuo** da intervenção estatal protetiva e do bem-estar social, não sua ampliação. Logo, **I e III corretas e II incorreta** (**Alternativa B**).',
    macete: {
      title: 'Neoliberalismo = MENOS Estado social, NÃO mais!',
      strategy:
        'A frase II diz "maior presença estatal... regulação trabalhista e proteção do bem-estar social" — exatamente o oposto do neoliberalismo de Harvey. Eliminando II, sobra apenas **B**!',
      whenToUse: 'Questões sobre globalização contemporânea, Consenso de Washington e David Harvey.',
      caution: 'Note que o Estado continua atuando, porém para garantir contratos e mercados, reduzindo direitos sociais e proteção trabalhista.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A assertiva III também é verdadeira quanto ao papel histórico do FMI e do Banco Mundial.' },
      { letter: 'B', status: 'correta', explanation: 'Reconhece corretamente I e III e identifica a inversão conceitual da assertiva II.' },
      { letter: 'C', status: 'incorreta', explanation: 'Valida II (contrária à cartilha neoliberal) e rejeita I e III.' },
      { letter: 'D', status: 'incorreta', explanation: 'Considera I incorreta e II correta.' },
      { letter: 'E', status: 'incorreta', explanation: 'Inverte I e II.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Alinhado à obra de David Harvey (*O Neoliberalismo: história e implicações*).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    questionId: 'ufrr-2024-q46',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Idade Média — Cidades Medievais',
    questionType: 'his-idade-media-patriciado-urbano-cidades',
    methodTitle: 'Estrutura Social e Poder Oligárquico nas Cidades Medievais',
    decisiveConcept:
      'As cidades medievais integravam a ordem senhorial/feudal e eram governadas por uma elite restrita (patriciado urbano composto por mercadores ricos, artesãos prósperos e agentes ligados aos senhores), longe de qualquer democracia igualitária.',
    quickSolution:
      'A **Alternativa A** traduz com fidelidade a historiografia sobre as comunas e cidades medievais: o poder político e social concentrava-se em uma oligarquia urbana recrutada entre mercadores, mestres prósperos e intermediários senhoriais (**Alternativa A**).',
    macete: {
      title: 'Cidade medieval = Patriciado urbano (não democracia nem indústria)',
      strategy:
        'Elimine facilmente os absurdos históricos: "neorromanos" (B), "indústrias na Alta Idade Média" (C), "democracia sem desigualdade" (D) e "cavaleiros como governadores rotativos" (E).',
      whenToUse: 'Questões sobre renascimento urbano e sociedade medieval.',
      caution: 'Mesmo com cartas de franquia, as cidades medievais mantinham forte hierarquia entre o patriciado e os trabalhadores comuns.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Descreve o patriciado urbano que monopolizava conselhos, guildas e cargos municipais.' },
      { letter: 'B', status: 'incorreta', explanation: 'Não existiu grupo político denominado "neorromanos" evocando os césares como base da estrutura urbana medieval.' },
      { letter: 'C', status: 'incorreta', explanation: 'O renascimento comercial e urbano ocorreu na **Baixa** Idade Média (séc. XI–XIII), e indústrias fabris só surgiram na Idade Contemporânea.' },
      { letter: 'D', status: 'incorreta', explanation: 'As cidades medievais tinham acentuada desigualdade entre patrícios, mestres, oficiais e pobres urbanos.' },
      { letter: 'E', status: 'incorreta', explanation: 'Ordens de cavalaria não exerciam governos municipais rotativos nas cidades.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Alinhado diretamente ao artigo citado de Jean Luiz Neves Abreu (2004).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q47',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Antiguidade Clássica — Grécia Antiga (Micenas e Creta)',
    questionType: 'his-grecia-pre-homerica-creto-micenica',
    methodTitle: 'Civilização Creto-Micênica na Formação da Grécia Antiga',
    decisiveConcept:
      'No período Pré-Homérico, a fusão cultural entre cretenses (minoicos) e micênicos (aqueus) — sociedades palacianas/cidades-estado governadas por reis e voltadas ao comércio marítimo no Egeu — lançou as bases da civilização grega.',
    quickSolution:
      'A **Alternativa A** sintetiza corretamente o período creto-micênico: intensa interação cultural formadora do povo grego, organização política centrada em palácios/cidades-estado regidas por reis e ativo comércio marítimo (**Alternativa A**).',
    macete: {
      title: 'Corte os anacronismos: Púnicas e Alarico!',
      strategy:
        '**Guerras Púnicas** (B) foram entre Roma e Cartago (>1000 anos depois); **Alarico I** (E) foi rei dos visigodos no séc. V d.C.! Elimine B, E e os exageros de C e D.',
      whenToUse: 'Questões sobre Grécia Pré-Homérica (Minoicos e Micênicos).',
      caution: 'Micenas localiza-se no próprio **Peloponeso**, o que também invalida a narrativa fantasiosa da alternativa C.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Resume a organização monárquica palaciana, o comércio egeu e a síntese cultural creto-micênica na origem grega.' },
      { letter: 'B', status: 'incorreta', explanation: 'Guerras Púnicas ocorreram entre Roma e Cartago (264–146 a.C.), sem relação com micênicos e cretenses.' },
      { letter: 'C', status: 'incorreta', explanation: 'Micenas situava-se no Peloponeso e assimilou/conquistou Creta por volta de 1400 a.C., não sendo sua aliada subordinada.' },
      { letter: 'D', status: 'incorreta', explanation: 'A aproximação não decorreu de "secas por mudanças climáticas na Antiguidade", mas de expansão e assimilação cultural/militar.' },
      { letter: 'E', status: 'incorreta', explanation: 'Alarico I foi rei visigodo da Antiguidade Tardia (saque de Roma em 410 d.C.), totalmente anacrônico aqui.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'História da Grécia Pré-Homérica (Minoicos e Aqueus/Micênicos).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q48',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Antiguidade Clássica — Escravismo Romano',
    questionType: 'his-roma-escravismo-papeis-sociais',
    methodTitle: 'Multiplicidade de Papéis e Estatuto Jurídico no Escravismo Romano',
    decisiveConcept:
      'Na Roma Antiga, embora juridicamente tratados como propriedade ("bens"), os escravos exerciam funções desde o trabalho braçal pesado até cargos intelectuais, médicos, pedagógicos e administrativos imperiais (*familia Caesaris*), acumulando às vezes mais riqueza/poder que homens livres pobres.',
    quickSolution:
      'Conforme a historiografia de Paul Veyne e da Roma Antiga, os escravos desempenhavam funções extremamente variadas na economia, cultura e administração — tornando alguns financeiramente mais prósperos ou influentes que cidadãos livres comuns (**Alternativa C**).',
    macete: {
      title: 'Escravo romano = jurídico de bem, funções variadas!',
      strategy:
        'Cuidado para não confundir o estatuto jurídico ("inferior/propriedade") com homogeneidade material: havia desde escravos das minas até pedagogos, médicos e gestores imperiais riquíssimos.',
      whenToUse: 'Questões sobre modo de produção e sociedade escravista em Roma.',
      caution: 'Filhos de mães escravas também nasciam escravos (*vernae*, invalidando B), e o escravismo romano é séculos anterior ao cristianismo (invalidando E).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Escravos não eram "voluntários", mas propriedade jurídica adquirida por guerra, nascimento, comércio ou dívidas (no período arcaico).' },
      { letter: 'B', status: 'incorreta', explanation: 'Os filhos de mulheres escravizadas herdavam a condição servil da mãe.' },
      { letter: 'C', status: 'correta', explanation: 'Retrata com precisão a diversidade de funções (manuais, intelectuais, administrativas) e desigualdades internas no escravismo romano.' },
      { letter: 'D', status: 'incorreta', explanation: 'Escravos podiam administrar bens com o instituto do *peculium* e atuar em comércios urbanos.' },
      { letter: 'E', status: 'incorreta', explanation: 'O escravismo romano antecede em séculos o surgimento do cristianismo.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Alinhado à obra citada de Paul Veyne e à história social do Império Romano.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q49',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'História Regional — Vale do Rio Branco e Política Indigenista',
    questionType: 'his-roraima-spi-fazenda-sao-marcos-1915',
    methodTitle: 'Atuação do SPI no Vale do Rio Branco (1915 — Fazenda São Marcos)',
    decisiveConcept:
      'Após a definição da fronteira com a Guiana Inglesa (Laudo de 1904), o Serviço de Proteção aos Índios (SPI, criado em 1910) instalou-se em Roraima em **1915** com um posto indígena na **Fazenda Nacional São Marcos**, subordinado à **1ª Inspetoria Regional** (IR-1).',
    quickSolution:
      'De acordo com a historiografia de Roraima (Paulo Santilli, *Fronteiras da República*), após 1904 a política indigenista federal ganha caráter econômico-administrativo e o **SPI instala-se em Roraima em 1915** criando um posto na **Fazenda São Marcos**, vinculado à **1ª Inspetoria Regional** (**Alternativa E**).',
    macete: {
      title: '1904 (Fronteira) -> 1910 (SPI) -> 1915 (São Marcos / 1ª IR)',
      strategy:
        'Forte São Joaquim é de **1775** (elimina A); o SPI era federal para todo o Brasil (elimina B); não recrutou índios para garimpo de diamante em 1915 (elimina D); e a Fazenda **São Marcos em 1915** é o marco histórico exato em Roraima (**E**).',
      whenToUse: 'Questões de História de Roraima sobre a República Velha e política indigenista.',
      caution: 'Guarde a cronologia: 1904 (Laudo Arbitral do Pirara, Brasil × Reino Unido) $\\to$ 1910 (criação do SPI) $\\to$ 1915 (posto SPI em São Marcos).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Em 1904 não houve disputa com Portugal (o Brasil já era independente há 82 anos), e o Forte São Joaquim foi construído no século XVIII (1775).' },
      { letter: 'B', status: 'incorreta', explanation: 'O SPI era um órgão federal de alcance nacional, não restrito ao Rio Branco nem voltado à proteção ambiental fluvial.' },
      { letter: 'C', status: 'incorreta', explanation: 'Confunde a ação tutelar/econômica estatal descrita por Souza Lima e Santilli com missões religiosas de visitação e clientelismo eleitoral.' },
      { letter: 'D', status: 'incorreta', explanation: 'O SPI não promoveu alistamento indígena para extração de diamantes na região.' },
      { letter: 'E', status: 'correta', explanation: 'Registra com exatidão a instalação do SPI em Roraima em 1915 na Fazenda São Marcos pela 1ª Inspetoria Regional.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Confirmado pela historiografia roraimense sobre a Fazenda São Marcos e o SPI (Santilli, 1994; Vieira, 2007).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q50',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'História Regional — Colonização do Vale do Rio Branco',
    questionType: 'his-roraima-colonizacao-drogas-sertao-apresamento',
    methodTitle: 'Ocupação Inicial Portuguesa no Vale do Rio Branco (Séc. XVII–XVIII)',
    decisiveConcept:
      'Nas primeiras décadas da penetração portuguesa pelo Rio Negro rumo ao Rio Branco (fim do séc. XVII e início do XVIII), a principal motivação econômica foi a coleta das **"drogas do sertão"** e as **tropas de resgate/apresamento de indígenas**.',
    quickSolution:
      'A **Alternativa B** aponta corretamente os dois motores iniciais da ocupação lusa na bacia do Rio Branco: o extrativismo das **drogas do sertão** e o **apresamento de indígenas** por particulares e sertanistas (**Alternativa B**).',
    macete: {
      title: 'Drogas do Sertão + Apresamento; Carmelitas (não Beneditinos) e Forte de 1775!',
      strategy:
        'Elimine as datas/ordens trocadas: em 1712 foram **Carmelitas**, não beneditinos (D — os beneditinos só vieram em 1909!); e o **Forte São Joaquim** é de **1775**, nunca 1875 (E)!',
      whenToUse: 'Questões de História Colonial de Roraima.',
      caution: 'Atenção às datas centenárias trocadas pela banca (1775 vs. 1875; 1712 vs. 1909).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A Questão do Pirara foi arbitrada pela Itália em 1904 entre Brasil e Grã-Bretanha, sem mediação da Dinamarca.' },
      { letter: 'B', status: 'correta', explanation: 'Descreve com precisão o avanço inicial via extrativismo das drogas do sertão e escravização/apresamento indígena.' },
      { letter: 'C', status: 'incorreta', explanation: 'Os holandeses (a partir da Guiana/Essequibo) disputavam influência contra os portugueses, não eram seus aliados de fronteira.' },
      { letter: 'D', status: 'incorreta', explanation: 'As missões de 1712–1725 no Rio Negro/Rio Branco foram dos **Carmelitas**; os beneditinos chegaram a Roraima apenas no século XX (1909).' },
      { letter: 'E', status: 'incorreta', explanation: 'O Forte São Joaquim foi construído em **1775** (período pombalino), não em 1875.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Historiografia colonial do Vale do Rio Branco (Magalhães, 2008; Farage, 1991).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q51',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Brasil Colônia — Ciclo da Mineração',
    questionType: 'his-brasil-colonia-mineracao-condicoes-fisicas',
    methodTitle: 'Desafios Físicos e Climáticos na Mineração Aurífera do Século XVIII',
    decisiveConcept:
      'A exploração do ouro de aluvião em Minas Gerais exigiu adaptação a caminhos difíceis desde o litoral (Caminho Novo/Velho pela Serra do Mar/Mantiqueira) e ao regime sazonal de chuvas e cheias dos rios que destruíam desvios e diques.',
    quickSolution:
      'O relato de Paul Ferrand evidencia exatamente o impacto das cheias fluviais nos trabalhos de garimpo. Assim, os mineradores precisaram adaptar-se tanto às **dificuldades de deslocamento desde o litoral** quanto às **condições climáticas locais** (**Alternativa B**).',
    macete: {
      title: 'Conecte o texto (cheias) ao contexto (interiorização em MG)',
      strategy:
        'A confunde litoral açucareiro do NE com MG; C inventa que Salvador foi destruída por chuvas; D diz que diamantes superaram o ouro por causa do clima; E contraria o texto. Resta **B**.',
      whenToUse: 'Questões interpretativas sobre o Ciclo do Ouro no Brasil Colônia.',
      caution: 'A capital mudou para o Rio de Janeiro em **1763** para aproximar o controle fiscal/militar da região mineradora — jamais por chuvas em Salvador.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A economia açucareira concentrava-se no litoral (sobretudo Nordeste), distinto da região interiorana de Minas Gerais.' },
      { letter: 'B', status: 'correta', explanation: 'Une corretamente os desafios de interiorização geográfica e os riscos climáticos das cheias descritos por Ferrand.' },
      { letter: 'C', status: 'incorreta', explanation: 'A transferência da capital (1763) teve motivações fiscais, comerciais e geopolíticas ligadas ao ouro e ao Prata.' },
      { letter: 'D', status: 'incorreta', explanation: 'O ouro foi o principal produto minerado; diamantes não decorrem nem superaram o ouro por eventos climáticos.' },
      { letter: 'E', status: 'incorreta', explanation: 'Contradiz o próprio trecho, que descreve justamente a destruição causada pelas cheias.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise direta do texto de Paul Ferrand e história colonial brasileira.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q52',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'História Contemporânea — União Soviética',
    questionType: 'his-contemporanea-urss-nep-perestroika-glasnost',
    methodTitle: 'Fases Econômicas da URSS (Comunismo de Guerra, NEP, Perestroika e Glasnost)',
    decisiveConcept:
      'Em 1921, após a Guerra Civil, Lenin substituiu o Comunismo de Guerra pela **NEP (Nova Política Econômica)**, permitindo abertura controlada ao capital privado ("um passo atrás para dar dois à frente") para recuperar a economia soviética.',
    quickSolution:
      'Avaliando os planos soviéticos: **A** erra autor/época (Comunismo de Guerra foi Lenin em 1918–1921, não Kruschev); **B** exagera a década de 1980 (crise agrícola); **D** e **E** invertem *Perestroika* (reestruturação econômica, não fechamento) e *Glasnost* (transparência política, não ingresso na OMC). Logo, **apenas C está correta**: a NEP buscou abertura temporária ao capital privado (**Alternativa C**).',
    macete: {
      title: 'NEP (1921) = Abertura temporária ao capital privado',
      strategy:
        'Decore os 4 marcos da URSS sem misturar décadas:\n- 1918–21: **Comunismo de Guerra** (estatização total na guerra civil)\n- 1921: **NEP** (recuo tático ao mercado/capital privado)\n- 1985: **Perestroika** (abertura econômica) + **Glasnost** (abertura política).',
      whenToUse: 'Questões panorâmicas sobre políticas econômicas da União Soviética.',
      caution: 'A **OMC** foi criada em **1995**, quando a URSS já havia sido dissolvida (1991)!',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O Comunismo de Guerra foi conduzido por Lenin entre 1918 e 1921, não por Kruschev nos anos 1950–1960.' },
      { letter: 'B', status: 'incorreta', explanation: 'Nos anos 1980 a URSS enfrentava grave estagnação e dependia até de importação de grãos.' },
      { letter: 'C', status: 'correta', explanation: 'Define exatamente a Nova Política Econômica (NEP) lançada por Lenin em 1921.' },
      { letter: 'D', status: 'incorreta', explanation: 'A Perestroika promoveu **abertura** e descentralização econômica nos anos 1980, não fechamento.' },
      { letter: 'E', status: 'incorreta', explanation: 'Glasnost significou transparência política/liberdade de expressão, e a OMC só foi fundada em 1995 (pós-URSS).' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cronologia clássica da economia soviética (1918–1991).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q53',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'República Velha — Revolta da Vacina',
    questionType: 'his-brasil-republica-revolta-vacina-1904',
    methodTitle: 'Causas Estruturais da Revolta da Vacina (1904) — Busca pela INCORRETA',
    decisiveConcept:
      'A Revolta da Vacina (1904) combinou descontentamento político pós-abolição/República, o trauma social das demolições do "Bota-Abaixo" de Pereira Passos, códigos sanitários coercitivos e a obrigatoriedade autoritária da vacina contra a varíola.',
    quickSolution:
      'Como o comando pede a alternativa **INCORRETA**, as letras A, B, C e D trazem fatores reais da crise de 1904. A **Alternativa E** é **INCORRETA**, pois reduz a revolta a um suposto fatalismo religioso cristão contrário a qualquer combate médico às doenças (**Alternativa E**).',
    macete: {
      title: 'Atenção ao comando: assinale a INCORRETA!',
      strategy:
        'A, B, C e D compõem o quadro clássico de Nicolau Sevcenko e José Murilo de Carvalho sobre 1904 (demolição de cortiços + lei coercitiva + código de posturas). A afirmação simplista e anacrônica sobre "desígnios divinos" (E) entrega a incorreta.',
      whenToUse: 'Questões de múltipla causa histórica com comando negativo ("INCORRETA").',
      caution: 'Leia até o fim: havia sim temores morais (invasão do lar e exposição do corpo feminino por agentes sanitários), o que é bem diferente da tese falsa em E.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Assertiva historicamente verdadeira (Abolição em 1888, República em 1889; em 1904 somavam 15–16 anos de tensões políticas).' },
      { letter: 'B', status: 'incorreta', explanation: 'Assertiva verdadeira: o "Bota-Abaixo" de Pereira Passos demoliu cortiços populares sem política habitacional alternativa.' },
      { letter: 'C', status: 'incorreta', explanation: 'Assertiva verdadeira: a Lei da Vacinação Obrigatória condicionava matrículas, empregos, viagens e casamentos ao atestado.' },
      { letter: 'D', status: 'incorreta', explanation: 'Assertiva verdadeira: as posturas municipais restringiram práticas cotidianas e de subsistência popular no Centro.' },
      { letter: 'E', status: 'correta', explanation: 'É a afirmação **INCORRETA** (gabarito): a revolta resultou de autoritarismo sanitário, expulsão urbana e conflitos políticos, não de rejeição religiosa cristã a toda medicina.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Historiografia consolidada sobre a Revolta da Vacina (Sevcenko; Carvalho).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2024-q54',
    examId: EXAM_ID,
    subject: 'História',
    topic: 'Brasil Contemporâneo — Ditadura Militar e Meio Ambiente',
    questionType: 'his-brasil-ditadura-milagre-economico-desigualdade',
    methodTitle: 'Modelo Desenvolvimentista da Ditadura Militar e "Milagre Econômico"',
    decisiveConcept:
      'O "milagre econômico" (1967–1973) produziu elevado crescimento do PIB à custa de arrocho salarial, endividamento externo e grandes obras de impacto socioambiental, agravando ou preservando forte concentração de renda.',
    quickSolution:
      'Analisando as afirmações: a dívida externa cresceu fortemente (A falsa); em Estocolmo/1972 o regime priorizou crescimento industrial em vez de preservacionismo (B falsa); "Economia Verde e créditos de carbono" são anacrônicos para 1970 (C falsa); houve intensa contestação política/armada mesmo sob censura e AI-5 (D falsa). Resta a **Alternativa E**: o milagre fez o PIB crescer sem reduzir drasticamente a desigualdade de renda (**Alternativa E**).',
    macete: {
      title: 'Milagre Econômico = Cresceu o bolo, mas concentrou a renda!',
      strategy:
        'Lembre da famosa frase de Delfim Netto ("fazer o bolo crescer para depois dividir"): o PIB disparou em 1967–1973, mas a desigualdade e o arrocho salarial permaneceram severos (**E**).',
      whenToUse: 'Questões sobre economia, meio ambiente e sociedade no Regime Militar (1964–1985).',
      caution: 'Desconfie sempre de termos atuais como "crédito de carbono" projetados nos anos 1960–1970 (anacronismo típico de distratores).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'A dívida externa brasileira multiplicou-se drasticamente durante a ditadura militar, chegando à crise da dívida nos anos 1980.' },
      { letter: 'B', status: 'incorreta', explanation: 'Na Conferência de Estocolmo (1972), o Brasil rejeitou travas ambientais ao crescimento industrial ("desenvolvimento primeiro") e manteve grandes barragens e rodovias na Amazônia.' },
      { letter: 'C', status: 'incorreta', explanation: 'Mercado de créditos de carbono e "Economia Verde" surgem décadas depois (Protocolo de Kyoto 1997 / Rio+20).' },
      { letter: 'D', status: 'incorreta', explanation: 'Houve forte resistência estudantil, operária, cultural, parlamentar e armada durante a primeira década do regime.' },
      { letter: 'E', status: 'correta', explanation: 'Sintetiza o consenso historiográfico e econômico: alto crescimento do PIB (1967–1973) combinado com arrocho salarial e persistência da desigualdade.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise socioeconômica do período 1967–1973 na ditadura militar brasileira.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
