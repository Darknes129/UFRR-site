import type { LegacyQuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-04-10T12:00:00.000Z';

export const UFRR_2026_PORTUGUES_RESOLUTIONS: LegacyQuestionResolution[] = [
  {
    questionId: 'ufrr-2026-q01',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Arcadismo',
    subtopic: 'Tomás Antônio Gonzaga',
    questionType: 'literatura-arcadismo-topoi-latinos',
    methodTitle: 'Identificação de Escola Literária e Topoi Árcades',
    questionInterpretation:
      'A questão exige que o candidato reconheça o gênero do texto (lira amorosa), a escola literária a que pertence *Marília de Dirceu* (Arcadismo/Neoclassicismo setecentista) e o *topos* latino predominante nas estrofes apresentadas, especialmente o contraste entre a vida campestre simples e os bens materiais urbanos/palacianos.',
    stepByStepSolution: [
      '1. Identifique a obra e o autor: *Marília de Dirceu* (1792), de Tomás Antônio Gonzaga (pseudônimo árcade Dirceu), é o principal livro lírico do Arcadismo brasileiro (século XVIII, Minas Gerais).',
      '2. Analise os elementos temáticos das três estrofes: o eu lírico descreve que possui um "próprio casal" (pequena propriedade rural), colhe vinho, legume, fruta, azeite, leite e lã das "brancas ovelhinhas", e afirma que o agrado da "gentil Pastora" vale mais que um rebanho e mais que "um trono".',
      '3. Associe os traços ao vocabulário técnico do Arcadismo: o cenário é o **bucolismo** e o **pastoralismo** (pastor Dirceu falando à pastora Marília na floresta e nas campinas).',
      '4. Diferencie os *topoi* latinos clássicos presentes nas alternativas C e D: embora o Arcadismo também utilize *carpe diem* ("aproveitar o dia") e *aurea mediocritas* ("equilíbrio dourado"), o trecho destaca explicitamente a troca dos bens do trono/cidade pelo campo tranquilo ("Irás a divertir-te na floresta", "rebanho, que cubra monte, e prado"), o que concretiza o *fugere urbem* (fuga da cidade para a natureza amena).',
      '5. Conferência cruzada: A elimina-se por citar Romantismo; B por citar Realismo; E por citar Naturalismo e grafar incorretamente a expressão latina. Entre C e D (ambas com Arcadismo), apenas C define corretamente o *topos* central das estrofes lidas (*fugere urbem*).',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource: 'Edital nº 93/25-CPV (Anexo I — Gabarito Oficial Definitivo)',
    officialAnswerStatus: 'verified_official',
    shortcutMethod:
      'Eliminação em duas etapas: (1) localize a escola literária do autor (*Marília de Dirceu* = **Arcadismo**), eliminando instantaneamente A, B e E; (2) entre as opções com Arcadismo (C e D), compare os termos finais: há menção à fuga da vida de poder/cidade ("mais q’um trono", "divertir-te na floresta") sem apelo à brevidade do tempo/envelhecimento -> **fugere urbem** (C).',
    shortcutApplicability:
      'Funciona sempre que a banca pede enquadramento de escola literária associado a expressões latinas clássicas (*fugere urbem*, *carpe diem*, *locus amoenus*, *inutilia truncat*, *aurea mediocritas*).',
    shortcutLimitations:
      'Cuidado em poemas de Gonzaga da Parte II (escritos na prisão) ou em liras sobre o envelhecimento de Marília ("Que havemos de esperar, Marília bela? / Que vão passando os florescentes dias?"): nesses casos específicos, o *topos* dominante passa a ser o *carpe diem*. Sempre confira se o fragmento dado fala de campo/natureza (*fugere urbem*) ou passagem do tempo (*carpe diem*).',
    universalMethod:
      'Para toda questão de Literatura sobre escolas históricas na UFRR: (1) ancore autor e século da obra citada; (2) liste os três marcadores dominantes do fragmento (cenário, postura do eu lírico, recursos formais); (3) elimine alternativas com anacronismo de escola literária; (4) valide se a definição do conceito teórico ou expressão latina na alternativa remanescente corresponde exatamente ao que está textualizado no excerto.',
    universalVariationNote:
      'Se a questão cobrar outro autor árcade (Cláudio Manuel da Costa, Silva Alvarenga), o método é idêntico, verificando apenas se há tensão barroca residual ou nativismo pré-romântico.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Anacronismo de escola literária: *Marília de Dirceu* (1792) pertence ao Arcadismo, e não ao Romantismo (iniciado no Brasil em 1836). No Arcadismo, a natureza não é projeção subjetiva melancólica romântica, mas cenário equilibrado (*locus amoenus*).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Anacronismo duplo: atribui o poema ao Realismo (final do século XIX), escola antirromântica voltada à crítica social e objetiva, incompatível com a idealização pastoril idílica.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Associa corretamente o gênero lírico, o pastoralismo/bucolismo, o período literário (Arcadismo) e o lema *fugere urbem* ("fugir da cidade") expresso pela valorização da vida rural modesta acima do "trono".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Acerta o Arcadismo e o bucolismo, mas erra ao atribuir ao fragmento o *carpe diem* ("aproveitar o dia"): não há nas estrofes urgência diante da fugacidade da juventude, e sim elogio da vida no campo e da companhia pastoril.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Atribui erroneamente o texto ao Naturalismo (escola cientificista e determinista do séc. XIX) e ainda apresenta erro ortográfico na expressão latina (*aurea mediocritas*, e não "aureo mediocratis").',
      },
    ],
    commonTraps: [
      'A banca coloca duas alternativas começando de forma quase idêntica ("Um poema lírico cuja temática é a vida pastoril e o bucolismo...") para testar se o candidato lê até o final ou para na primeira metade.',
      'Confundir *carpe diem* com qualquer tema amoroso: *carpe diem* exige ideia de passagem do tempo/efemeridade, ausente neste trecho.',
    ],
    essentialKnowledge: [
      'Arcadismo (Brasil, 1768–1836): busca de simplicidade, racionalidade iluminista e imitação dos clássicos greco-latinos.',
      'Cinco expressões latinas essenciais: *Fugere urbem* (fugir da cidade), *Locus amoenus* (lugar ameno), *Inutilia truncat* (cortar os excessos), *Carpe diem* (colher o dia/presente), *Aurea mediocritas* (equilíbrio dourado, mediocridade áurea).',
      'Tomás Antônio Gonzaga = Dirceu; sua musa = Marília (Maria Doroteia Joaquina de Seixas).',
    ],
    transferExercise: {
      prompt:
        'Leia os versos árcades de Cláudio Manuel da Costa: "Destes penhascos fez a natureza / O berço em que nasci; oh quem cuidara / Que entre penhas tão duras se criara / Uma alma terna, um peito sem dureza!". Qual é a escola literária e qual o contraste principal construído pelo eu lírico em relação à paisagem?',
      hint: 'Compare as "penhas duras" (pedras de Vila Rica/Minas) com a sensibilidade do poeta ("alma terna").',
      expectedAnswer:
        'Arcadismo; o eu lírico constrói um contraste entre a aspereza/dureza das montanhas minerais onde nasceu e a delicadeza/ternura de sua alma poética.',
      justification:
        'Cláudio Manuel da Costa (Glauceste Satúrnio) inaugura o Arcadismo brasileiro (1768) e adapta o bucolismo europeu à paisagem pedregosa de Minas Gerais.',
      solutionSummary:
        'Identifica-se o soneto decassílabo clássico do Arcadismo e o paradoxo entre o meio físico rústico ("penhas tão duras") e a interioridade sensível ("alma terna").',
    },
    relatedQuestionIds: ['ufrr-2023-q03', 'ufrr-2022-q02'],
    verificationStatus: 'verified_official',
    verificationNotes:
      'Resolução independente concorda 100% com a análise literária e com o Anexo I do Edital nº 93/25-CPV (Questão 01 mantida como C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q02',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Morfologia e Formação de Palavras',
    questionType: 'portugues-formacao-de-palavras',
    methodTitle: 'Teste da Existência de Base Intermediária (Parassíntese vs. Prefixal e Sufixal)',
    questionInterpretation:
      'A questão pede os processos de formação das duas palavras destacadas no Texto I: **vaqueiro** (verso 1) e **emparelhados** (verso 52), na ordem em que aparecem no texto.',
    stepByStepSolution: [
      '1. Analise a primeira palavra destacada: **vaqueiro**. O radical primitivo é *vac-* (de *vaca*, com troca gráfica *c -> qu* antes de *e*). Acrescentou-se apenas o sufixo nominal *-eiro* (que indica profissão/ocupação). Não há prefixo. Logo, trata-se de **derivação sufixal**.',
      '2. Analise a segunda palavra destacada: **emparelhados**. Identifique os morfemas: prefixo *em-* + radical *parelh(a)* + sufixo *-ad(o)* (mais desinência de plural *-s*).',
      '3. Aplique o critério gramatical para distinguir derivação parassintética de derivação prefixal e sufixal: retire o prefixo e verifique se a palavra restante existe (*parelhado* / *parelhar*); em seguida, retire o sufixo e verifique se a palavra restante existe (*emparelha* — forma do verbo *emparelhar*).',
      '4. Como *parelhar*/*parelhado* e *emparelhar* são formas dicionarizadas e correntes na língua (a partir do substantivo *parelha* ou verbo *emparelhar* + particípio *-ado*), a tradição gramatical adotada pela questão classifica **emparelhados** como **derivação prefixal e sufixal** (e note que nem existe alternativa com "sufixal, parassintética").',
      '5. Cruzamento com as alternativas: A única alternativa que começa com "Derivação sufixal" e traz afixos coerentes para o segundo termo é **B** ("Derivação sufixal, derivação prefixal e sufixal").',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Descubra o processo do **primeiro vocábulo** (*vaqueiro* = radical + sufixo *-eiro* -> sufixal) para já cortar A e D. Depois observe que não existe alternativa "derivação sufixal, derivação parassintética", restando B, C e E — e *emparelhados* tem claramente prefixo *em-* + sufixo *-ado* -> **B**.',
    shortcutApplicability:
      'Válido em questões de múltipla escolha com pares ordenados ("respectivamente"), onde a primeira palavra já elimina distratores incompatíveis.',
    shortcutLimitations:
      'Se houvesse uma alternativa com "Derivação sufixal, derivação parassintética", seria necessário verificar o dicionário normativo adotado pela banca (pois gramáticos divergem sobre *emparelhar* vir de *parelha* por parassíntese *em-+parelh+-ar* antes de receber *-ado*). Aqui, a ausência dessa opção confirma a leitura morfológica da banca.',
    universalMethod:
      'Para classificar qualquer palavra derivada: (1) isole o radical primitivo; (2) liste prefixos (antes) e sufixos (depois), ignorando desinências de gênero, número e modo-tempo na contagem de afixos derivacionais; (3) se houver apenas prefixo -> prefixal; apenas sufixo -> sufixal; os dois -> teste removendo um de cada vez. Se nenhuma das metades existir isoladamente (*anoitecer*: *anoite e *noitecer), é parassintética; se pelo menos uma existir com autonomia lexical, trata-se de prefixal e sufixal (como *deslealdade*: existem *desleal* e *lealdade*).',
    universalVariationNote:
      'Em palavras como *infelizmente*, lembre-se de que existem *infeliz* e *felizmente*, logo é derivação prefixal e sufixal, jamais parassintética.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '*Vaqueiro* não tem prefixo (*vac-* é o radical de *vaca*, e *-eiro* está no final, sendo sufixo). Portanto, a primeira classificação está errada.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          '*Vaqueiro* forma-se pelo acréscimo do sufixo *-eiro* ao radical de *vaca* (derivação sufixal); *emparelhados* apresenta o prefixo *em-* e o sufixo participial/adjetival *-ado* junto ao radical de *parelha*/*parelhar* (derivação prefixal e sufixal).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Desconsidera o sufixo *-ado* (e o morfema derivacional pós-radical) em *emparelhados*, tratando-o apenas como derivação prefixal.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Derivação imprópria ocorre quando uma palavra muda de classe gramatical sem alteração formal (ex.: "o jantar" de verbo para substantivo). *Vaqueiro* nasce diretamente como substantivo por sufixação.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Ignora o prefixo *em-* evidente no início de *emparelhados*.',
      },
    ],
    commonTraps: [
      'Achar que o plural *-s* de *emparelhados* é sufixo derivacional — na verdade é desinência nominal de número (flexão, não derivação).',
      'Confundir mudança ortográfica *c -> qu* (*vaca -> vaqueiro*) com alteração de radical diferente: trata-se apenas de adaptação fonético-ortográfica para manter o som /k/.',
    ],
    essentialKnowledge: [
      'Prefixal: prefixo + radical (ex.: *reler*, *desfazer*).',
      'Sufixal: radical + sufixo (ex.: *vaqueiro*, *folhagem*).',
      'Prefixal e sufixal: afixos independentes, pelo menos uma etapa intermediária existe (ex.: *deslealdade*, *infelizmente*).',
      'Parassintética: acréscimo simultâneo e inseparável de prefixo + sufixo (ex.: *anoitecer*, *entristecer*, *emudecer*).',
      'Imprópria (conversão): mudança de classe sem acréscimo de afixos.',
    ],
    transferExercise: {
      prompt:
        'Classifique o processo de formação das palavras **desordenadamente** e **envelhecer**, justificando com o teste de supressão de afixos.',
      hint: 'Tente retirar o prefixo ou o sufixo isoladamente e veja se a palavra resultante existe em português.',
      expectedAnswer:
        'desordenadamente = derivação prefixal e sufixal; envelhecer = derivação parassintética.',
      justification:
        'Em "desordenadamente", existem "desordenada" (sem -mente) e "ordenadamente" (sem des-). Já em "envelhecer", não existem "*envelho" nem "*velhecer" isoladamente.',
      solutionSummary:
        'Aplicando o teste de supressão: autonomia de pelo menos uma forma intermediária caracteriza prefixação e sufixação; dependência mútua obrigatória caracteriza parassíntese.',
    },
    relatedQuestionIds: ['ufrr-2024-q01'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Resolução morfológica independente confirma B; concorda com o gabarito preliminar divulgado (02-B). Aguardando conferência direta no Anexo I definitivo do Edital 93/25-CPV.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q03',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Figuras de Linguagem',
    questionType: 'portugues-figuras-de-linguagem',
    methodTitle: 'Reconhecimento de Figuras Semânticas pelo Cruzamento Sensorial e Atribuição Humana',
    questionInterpretation:
      'A questão pede a identificação das duas figuras de linguagem predominantes no miniconto/fragmento do Texto II (*A mirabolante bola de antes*), no qual uma bola relata suas emoções e pensamentos.',
    stepByStepSolution: [
      '1. Releia o Texto II identificando o enunciador: "Sim. Bola. E falante! Mas também muda... eu era uma tagarela: respondia tudo o que eu queria... apenas nos meus pensamentos".',
      '2. Observe que um objeto inanimado (uma **bola**) recebe características tipicamente humanas — falar, pensar, ser tagarela, conter palavras antes de "murchar". Atribuir ações, sentimentos ou falas humanas a seres inanimados denomina-se **Personificação** (ou prosopopeia).',
      '3. Releia o fechamento do texto: "...mesmo que a da **poesia menos doce** ou do **dicionário mais salgado**...".',
      '4. Analise o encontro semântico nessas expressões: *doce* e *salgado* pertencem ao sentido do **paladar** (gustação), mas são aplicados a *poesia* e *dicionário* (elementos verbais/auditivos/visuais). Essa fusão de sensações de órgãos dos sentidos distintos é a **Sinestesia**.',
      '5. Conferência final: as duas figuras predominantes são **Personificação** e **Sinestesia** — exatamente a alternativa **D**.',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Dois gatilhos visuais rápidos: (1) objeto falando/pensando ("Bola. E falante! ... tagarela") = **Personificação** (já elimina A e E); (2) adjetivos de sabor em palavras abstratas ("poesia doce", "dicionário salgado") = **Sinestesia** (elimina C e B) -> **D** em menos de 20 segundos.',
    shortcutApplicability:
      'Eficiente sempre que há mistura explícita de sentidos (cor quente, voz doce, cheiro estridente) combinada a ser inanimado personificado.',
    shortcutLimitations:
      'Não confunda sinestesia com metáfora simples: na metáfora há semelhança conceitual ampla ("meu coração é um deserto"), enquanto na sinestesia ocorre obrigatoriamente cruzamento de dois sentidos físicos (visão, audição, tato, olfato, paladar) ou sentido físico + plano sensorial/psíquico.',
    universalMethod:
      'Para qualquer questão de estilística sobre figuras de linguagem: (1) pergunte quem realiza a ação (se for objeto/animal agindo como humano -> personificação/prosopopeia); (2) procure conectivos comparativos explícitos (*como, tal qual, parece* -> comparação; sem conectivo -> metáfora); (3) verifique combinações incomuns de sentidos físicos (sinestesia) ou uso por falta de termo próprio ("braço da cadeira", "dente de alho" -> catacrese).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Embora haja carga metafórica no texto, a figura estruturante que transforma a bola em narradora consciente e falante é a personificação, não apenas uma metáfora pontual.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Acerta a personificação, mas deixa de identificar a sinestesia explícita em "poesia menos doce" e "dicionário mais salgado".',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Não há catacrese no fragmento (catacrese é metáfora desgastada usada por falta de palavra específica, como "pé da mesa" ou "asa da xícara").',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          'Personificação pelo protagonismo falante e reflexivo da bola; sinestesia pela associação gustativa ("doce", "salgado") aplicada a elementos linguísticos ("poesia", "dicionário").',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Não há comparação explícita (símile) construindo a identidade da bola nem o eixo dominante do texto — o texto assume diretamente que o objeto pensa e fala.',
      },
    ],
    commonTraps: [
      'Escolher "metáfora" por achar que toda expressão poética diferente é metáfora: lembre que o paladar aplicado a algo não comestível é **sinestesia** específica.',
      'Confundir prosopopeia/personificação com catacrese por causa da expressão "perder o ar / murcha": para uma bola, "perder o ar" e "murchar" são fenômenos físicos literais ligados ludicamente ao ato de falar.',
    ],
    essentialKnowledge: [
      'Personificação (Prosopopeia): atribuição de ações, voz ou sentimentos humanos a seres inanimados ou irracionais.',
      'Sinestesia: fusão de impressões sensoriais diferentes (visão, audição, olfato, paladar, tato).',
      'Catacrese: uso figurado cristalizado por ausência de termo próprio (ex.: embarcar no ônibus, folha de papel).',
    ],
    transferExercise: {
      prompt:
        'Na frase: "O vento uivava segredos amargos na madrugada azul", identifique as duas figuras de linguagem semânticas predominantes.',
      hint: 'Observe quem "uiva segredos" e a associação entre "segredos" e "amargos".',
      expectedAnswer: 'Personificação (ou prosopopeia) e sinestesia.',
      justification:
        'Atribuir ao vento a capacidade de contar "segredos" é personificação; qualificar "segredos" (auditivo/intelectual) como "amargos" (paladar) é sinestesia.',
      solutionSummary:
        'Vento personificado (ação humana de segredar) + cruzamento sensorial em "segredos amargos" (sinestesia).',
    },
    relatedQuestionIds: ['ufrr-2022-q01'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise estilística independente concorda com D e com o gabarito preliminar divulgado (03-D). Sem alteração indicada no Edital 93/25-CPV.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q04',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Realismo e Naturalismo',
    subtopic: 'O Ateneu — Raul Pompéia',
    questionType: 'literatura-o-ateneu-foco-narrativo',
    methodTitle: 'Análise do Foco Narrativo e Crônica Memorialística em O Ateneu',
    questionInterpretation:
      'A questão solicita a alternativa **INCORRETA** sobre o romance *O Ateneu* (1888), de Raul Pompéia, considerando a leitura integral da obra e o Texto III (diálogo entre Rebelo e Sérgio no recreio).',
    stepByStepSolution: [
      '1. Verifique a regra do comando: pede-se a afirmação **INCORRETA** (portanto, quatro afirmações são verdadeiras sobre a obra e uma é falsa).',
      '2. Analise o foco narrativo de *O Ateneu* (alternativas A e C são diretamente incompatíveis entre si — um ótimo sinal de onde está o erro!):',
      '   - Em **C**: afirma-se que a denúncia do autoritarismo, corrupção e opressão é feita "a partir das experiências de Sérgio **adulto**". Isso está CORRETO: Sérgio já adulto rememora os dois anos vividos no internato aos 11 anos de idade, adotando tom irônico, crítico e amadurecido (como fica nítido na linguagem rebuscada do narrador: "unexpected Tersito", "brandura patriarcal").',
      '   - Em **A**: afirma-se que a obra "é narrada por ele mesmo **aos 11 anos de idade**". Isso está **INCORRETO**! Sérgio **entra** no colégio aos 11 anos ("Vais encontrar o mundo, disse-me meu pai..."), mas quem narra o romance é o **Sérgio adulto**, rememorando o passado (como afirma corretamente a alternativa E sobre o caráter memorialístico).',
      '3. Confira B, D e E para ter certeza absoluta de que são verdadeiras: B acerta o contexto do fim do séc. XIX com determinismo/darwinismo social (lei do mais forte no internato); D acerta o estilo caricaturesco/expressionista nas descrições físicas e subjetivo nas psicológicas ("cara amarela, de gordura balofa, olhos vesgos sem pestanas"); E acerta a síntese estilística realista-naturalista-impressionista-expressionista.',
      '4. Nota de auditoria oficial: no gabarito preliminar circulou a letra C, porém o **Edital nº 93/25-CPV deferiu recurso alterando oficialmente o gabarito da Questão 4**, precisamente porque C é verdadeira e **A** é a afirmação incorreta pedida pelo enunciado.',
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerSource:
      'Gabarito preliminar indicava C; Edital nº 93/25-CPV deferiu recurso alterando oficialmente a Questão 4 (anexo definitivo pendente de conferência direta)',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Quando duas alternativas em questão de "INCORRETO" se contradizem diretamente no mesmo ponto factual — **A** ("narrada por ele mesmo aos 11 anos") vs **C** ("a partir das experiências de Sérgio adulto") — a resposta estará necessariamente em uma das duas. Como Sérgio usa vocabulário erudito e tom memorialístico ("Crônica de Saudades"), o narrador é adulto -> a incorreta é **A**.',
    shortcutApplicability:
      'Altamente confiável em questões literárias que contrapõem idade do protagonista à idade do narrador em romances memorialísticos (*Dom Casmurro*, *O Ateneu*, *Memórias Póstumas*).',
    shortcutLimitations:
      'A contradição entre duas opções resolve o par suspeito, mas exige saber qual dos dois fatos da obra é o verdadeiro para não inverter a escolha.',
    universalMethod:
      'Em questões de "assinale a INCORRETA" sobre obras obrigatórias da UFRR: (1) grife **INCORRETO** antes de ler as opções; (2) avalie cada alternativa em busca de erro factual de enredo, foco narrativo (1ª vs 3ª pessoa, tempo da enunciação vs tempo do enunciado) ou anacronismo estético; (3) valide que todas as outras quatro alternativas sustentam consenso crítico sobre a obra.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'É a alternativa INCORRETA pedida pela questão: Sérgio ingressa no internato aos 11 anos, mas a narrativa em primeira pessoa é conduzida por Sérgio adulto, décadas depois, em formato de memórias ("Crônica de Saudades").',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira sobre a obra (logo, não responde ao "INCORRETO"): o internato funciona como microcosmo social darwinista onde sobrevive o mais forte/adaptado (como ilustra a fala sobre Malheiro no Texto III).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira sobre a obra (logo, não é a incorreta): é exatamente a visão crítica de Sérgio adulto rememorando suas vivências no Ateneu que estrutura a denúncia moral da instituição.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira sobre o estilo de Raul Pompéia: caricatura grotesca e zoomorfização física ("gordura balofa", "forte como um touro") aliada à densa análise psicológica subjetiva do narrador.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira segundo a historiografia literária (Alfred Bosi / Antônio Candido): *O Ateneu* transcende o naturalismo ortodoxo ao incorporar traços realistas, impressionistas e expressionistas.',
      },
    ],
    commonTraps: [
      'Confundir a **idade do personagem durante os fatos** (11 anos, no início do internato) com o **momento em que ele narra a história** (fase adulta, relembrando a infância).',
      'Ignorar o comando negativo ("INCORRETO") e marcar uma alternativa verdadeira sobre a obra.',
    ],
    essentialKnowledge: [
      '*O Ateneu* (1888), Raul Pompéia — subtítulo: *Crônica de Saudades*.',
      'Narrador: Sérgio adulto (1ª pessoa, foco narrativo retrospectivo/memorialístico).',
      'Temas centrais: educação autoritária, hipocrisia burguesa, darwinismo social no microcosmo escolar, destruição simbólica pelo incêndio final.',
      'Estética híbrida: base realista-naturalista com fortes traços impressionistas (subjetividade das sensações) e expressionistas (caricatura deformante dos personagens).',
    ],
    transferExercise: {
      prompt:
        'Em *Dom Casmurro*, de Machado de Assis, qual é a diferença entre o "Bentinho" adolescente apaixonado por Capitu e o narrador "Dom Casmurro"? Que impacto essa diferença tem na confiabilidade do relato?',
      hint: 'Pense em quem escreve o livro ("atar as duas pontas da vida") e com qual estado de espírito ele reinterpreta o passado.',
      expectedAnswer:
        'Bentinho é o jovem vivendo os fatos; Dom Casmurro é o advogado idoso, solitário e ressentido que narra em 1ª pessoa décadas depois, tornando o relato parcial e suspeito.',
      justification:
        'Assim como Sérgio em *O Ateneu*, o narrador memorialista adulto filtra e reinterpreta suas lembranças de juventude com o olhar do presente.',
      solutionSummary:
        'Distinção entre eu-experiencial (jovem) e eu-narrador (adulto/idoso), gerando narração subjetiva e parcial.',
    },
    relatedQuestionIds: ['ufrr-2026-q06'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise literária independente aponta A como a única afirmação incorreta; registro histórico confirma que o Edital nº 93/25-CPV alterou o gabarito preliminar (que era C). Marcada como proposta aguardando leitura direta do Anexo I definitivo.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q05',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Semântica e Dêixis',
    questionType: 'portugues-deixis-advérbios',
    methodTitle: 'Classificação de Elementos Dêiticos (Espacial, Temporal, Pessoal, Discursivo)',
    questionInterpretation:
      'A questão pede o valor semântico-pragmático do advérbio **"Ali"** no trecho de diálogo do Texto III: `"— Ali está um de joelhos..."`.',
    stepByStepSolution: [
      '1. Retorne ao contexto imediato da ocorrência no Texto III: Rebelo e Sérgio estão passeando pelo pátio durante a hora de descanso conversando sobre os colegas que passam.',
      '2. Observe a função comunicativa de "Ali": ao pronunciar `"— Ali está um de joelhos..."`, Sérgio aponta fisicamente para um lugar no espaço do pátio visível aos dois interlocutores naquele momento da cena.',
      '3. Classifique o fenômeno linguístico: palavras cujo sentido depende da situação de enunciação (quem fala, onde está, quando fala) são **dêiticos**.',
      '4. Como *ali* localiza um ponto no **espaço físico** relativamente distante dos interlocutores (equivalente a *naquele lugar lá*), trata-se de um **advérbio com valor dêitico-espacial** -> alternativa **D**.',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Pergunte ao verbo usando a palavra destacada: *"Onde está?" -> "Ali"*. Toda resposta a "onde" aponta para lugar -> **espacial** (**D**).',
    shortcutApplicability:
      'Funciona para advérbios de lugar (*aqui, aí, ali, lá, cá*) e demonstrativos usados para apontar objetos no ambiente físico.',
    shortcutLimitations:
      'Cuidado: em textos dissertativos sem cena física, *aqui* ou *ali* podem funcionar como dêiticos discursivos (ex.: *"como vimos ali atrás no parágrafo 2"*). Sempre cheque no texto se a palavra aponta para o espaço físico da cena ou para uma parte anterior/posterior do próprio texto.',
    universalMethod:
      'Classificação dos quatro principais tipos de dêixis em provas de Linguagens: (1) Espacial: localiza no espaço em relação aos interlocutores (*aqui, aí, ali, lá, este/esse/aquele* no espaço); (2) Temporal: localiza no tempo da fala (*hoje, agora, ontem, amanhã*); (3) Social: marca grau de formalidade/hierarquia (*senhor, Vossa Excelência, tu vs você*); (4) Discursiva/Textual: remete a trechos do próprio texto (anafórico/catafórico: *"como dito acima"*, *"neste ponto do argumento"*).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Dêixis temporal indica tempo em relação ao momento da fala (*agora, hoje, ontem*). *Ali* indica lugar no pátio, não tempo.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Anáfora (ou epanáfora) retoma um referente já citado anteriormente no texto. Franco (o menino de joelhos) ainda não havia sido citado antes dessa fala — Sérgio o aponta pela primeira vez na cena ("Ali está um de joelhos").',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Dêixis discursiva remete a passagens do próprio texto ("como veremos a seguir"). No diálogo, o menino está fisicamente no pátio, não em outra página do texto.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          '*Ali* é advérbio de lugar que aponta diretamente para a posição espacial onde Franco se encontra em relação aos interlocutores (Sérgio e Rebelo).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Dêixis social diz respeito a formas de tratamento que codificam distância hierárquica ou intimidade (*Vossa Senhoria*, *doutor*, *meu caro*), papel que *ali* não desempenha.',
      },
    ],
    commonTraps: [
      'A alternativa B usa o termo rebuscado "epanafórico" para intimidar o candidato e fazê-lo pensar que se trata de coesão textual sofisticada, quando na cena o advérbio é simplesmente dêitico espacial (*exofórico*).',
    ],
    essentialKnowledge: [
      'Dêixis = referência dependente da situação comunicativa (*eu, aqui, agora*).',
      'Advérbios espaciais: *aqui/cá* (1ª pessoa), *aí* (2ª pessoa), *ali/lá/acolá* (3ª pessoa / fora do alcance imediato).',
      'Anáfora ≠ Dêixis espacial: anáfora retoma termo do texto; dêixis aponta para a cena ou momento da fala.',
    ],
    transferExercise: {
      prompt:
        'Compare o uso de "neste momento" nas frases: (1) "Sente-se aqui e assine **neste momento** o contrato" e (2) "**Neste ponto da argumentação**, devemos retomar o conceito anterior". Classifique cada ocorrência quanto ao tipo de dêixis.',
      hint: 'Uma aponta para o relógio da situação real de fala; a outra aponta para a organização interna do próprio texto.',
      expectedAnswer:
        '(1) Dêixis temporal; (2) Dêixis discursiva (ou textual).',
      justification:
        'Na frase 1, "neste momento" remete ao tempo real em que o falante pronuncia a frase. Na frase 2, "neste ponto" localiza o leitor dentro da estrutura do próprio texto.',
      solutionSummary:
        'Frase 1 = dêixis temporal (tempo da enunciação); Frase 2 = dêixis discursiva (espaço interno do texto).',
    },
    relatedQuestionIds: ['ufrr-2022-q04'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise semântica e pragmática confirma D; concorda com o gabarito preliminar divulgado (05-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q06',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Interpretação Literária',
    subtopic: 'O Ateneu — Raul Pompéia',
    questionType: 'literatura-campo-semantico-comparacao',
    methodTitle: 'Decodificação de Comparação por Campo Semântico Dominante',
    questionInterpretation:
      'A questão solicita o sentido indicado pela comparação **"como num claustro"**, dentro do contexto completo do Texto IV de *O Ateneu*.',
    stepByStepSolution: [
      '1. Verifique o significado literal da palavra *claustro*: galeria interna fechada de um **mosteiro ou convento**, espaço de recolhimento monástico e religioso.',
      '2. Mapeie todo o campo semântico construído pelo narrador ao redor da expressão no Texto IV: *"loba de um seminarista"*, *"voto de um frade"*, *"túmulos caiados"*, *"humilhação diante de Deus"*, *"pensamento religioso"*, *"farricoco"* (penitente encapuzado), *"cânticos"*, *"zimbórios"* (cúpulas de igrejas), *"solidéu"* (barrete eclesiástico).',
      '3. Perceba a convergência absoluta: cada imagem compara a vivência sufocante de Sérgio no colégio a um ambiente devoto, penitente e clerical -> **Religiosidade** (**B**).',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Circule 3 palavras vizinhas à expressão grifada no parágrafo: **seminarista**, **frade**, **Deus**. Todas apontam diretamente para um único campo lexical -> **Religiosidade (B)**.',
    shortcutApplicability:
      'Válido sempre que o texto constrói isotopia (rede de palavras pertencentes ao mesmo universo conceitual).',
    shortcutLimitations:
      'Nunca olhe apenas para uma palavra isolada (ex.: "túmulos caiados" poderia sugerir "mortalidade" — letra E — se lida sozinha). Sempre avalie a rede completa de termos do parágrafo.',
    universalMethod:
      'Em interpretação lexical/estilística: (1) identifique o sentido literal da palavra-chave (*claustro* = pátio fechado de convento); (2) cheque todas as metáforas e comparações vizinhas no mesmo período; (3) escolha o substantivo abstrato que sintetiza o campo semântico comum a todas elas.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O narrador está abatido pela melancolia e humilhação infantil diante da disciplina opressora; não há indicação de amadurecimento emocional na comparação.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          '*Claustro* é o espaço fechado de conventos/mosteiros e integra perfeitamente a série de imagens eclesiásticas do trecho ("seminarista", "frade", "Deus", "pensamento religioso", "solidéu").',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Embora haja a palavra "cânticos" no parágrafo seguinte, ela é apenas um detalhe litúrgico subordinado ao universo religioso, e *claustro* não significa música.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Pelo contrário, o texto tem altíssima carga subjetiva e impressionista ("neblina de melancolia", "tristeza verde").',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Distrator clássico apoiado na palavra isolada "túmulos caiados"; porém, "claustro" designa vida conventual fechada, e o eixo unificador do texto é a opressão místico-religiosa.',
      },
    ],
    commonTraps: [
      'Cair no distrator **E (Mortalidade)** por causa de "túmulos caiados", esquecendo que *claustro* refere-se especificamente a mosteiro/convento e que o parágrafo inteiro fala de frades, seminaristas, Deus e pensamento religioso.',
    ],
    essentialKnowledge: [
      '*Claustro* = recinto fechado de mosteiro/convento; por extensão, reclusão monástica.',
      'Isotopia / Campo semântico: conjunto de termos que compartilham um traço de significado central, orientando a leitura unificada do texto.',
      'Crise mística de Sérgio em *O Ateneu*: um dos episódios do romance em que o protagonista busca refúgio na religiosidade rígida antes de desencantar-se.',
    ],
    transferExercise: {
      prompt:
        'No verso "Na fria **nave** de pedra, os círios tremiam ante o altar silencioso", qual campo semântico é ativado pelo substantivo "nave" e por quê?',
      hint: 'Compare com "círios" (velas litúrgicas) e "altar".',
      expectedAnswer:
        'Campo semântico religioso/arquitetônico eclesiástico, pois "nave" designa o corpo central de uma igreja/catedral.',
      justification:
        'A polissemia de "nave" (espaçonave vs corpo central da igreja) é resolvida pelos termos vizinhos "círios" e "altar".',
      solutionSummary:
        'Desambiguação lexical pelo contexto (isotopia religiosa: nave = salão da igreja).',
    },
    relatedQuestionIds: ['ufrr-2026-q04'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise lexical e literária confirma B; concorda com o gabarito preliminar divulgado (06-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q07',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Literatura Contemporânea',
    subtopic: 'Becos da Memória — Conceição Evaristo',
    questionType: 'literatura-escrevivencia-conceicao-evaristo',
    methodTitle: 'Identificação do Conceito de Escrevivência e Memória Coletiva',
    questionInterpretation:
      'A questão avalia a compreensão do conceito de memória e escrita em *Becos da Memória* (Conceição Evaristo), articulando os dois fragmentos do Texto V e o enunciado sobre memória, fabulação e reexistência.',
    stepByStepSolution: [
      '1. Observe as pistas explícitas nos dois fragmentos e no enunciado:',
      '   - Fragmento I: *"como a memória é também vítima do esquecimento, invento, invento. [...] Um deles insiste: resistência, resistência, resistência..."*',
      '   - Fragmento II: *"A lembrança da favela se entranhou em mim... o beco me chama, me puxa, me exige."* -> A memória não é apenas individual ou escapista, mas compromisso ético com a favela.',
      '   - Enunciado: *"dimensão coletiva na obra, transformando-se em denúncia das violências sociais"*.',
      '2. Relacione ao projeto literário da autora (**escrevivência**): Conceição Evaristo escreve a partir da vivência da mulher negra e da comunidade favelada em processo de desfavelamento, unindo lembrança lacunar e ficção (fabulação) para impedir o apagamento histórico.',
      '3. Confronte com as alternativas: A fala em "apagar dores" (falso — ela *exige* lembrar); B fala em "nostalgia intimista / idealizada" (falso — o beco é duro e politizado); C chama a narradora de "pouco confiável" (falso — a fabulação preenche silêncios com verdade poética e política); D esvazia o beco de simbolismo (falso); apenas **E** sintetiza reconstrução afetiva e política, memória fragmentada e denúncia/resistência.',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Alinhamento direto entre comando e alternativa correta: o enunciado já entrega as palavras-chave **"dimensão coletiva"**, **"denúncia"** e **"resistência"**. Somente a alternativa **E** retoma integralmente esses termos ("espaço social silenciado", "resistência", "denúncia").',
    shortcutApplicability:
      'Eficaz em questões contemporâneas da UFRR cujo texto-comando já antecipa o eixo crítico-teórico da obra.',
    shortcutLimitations:
      'Verifique sempre se a alternativa correta não distorce algum detalhe ao repetir palavras-chave (pegadinha de "palavras certas em conclusão errada"). Leia a frase completa.',
    universalMethod:
      'Em questões de Literatura Brasileira Contemporânea (Conceição Evaristo, Jeferson Tenório, Itamar Vieira Junior): (1) identifique se a voz narrativa assume dimensão coletiva/testemunhal; (2) recuse leituras puramente "escapistas", "idealizadas" ou despolitizadas do espaço periférico; (3) valide a função social da literatura de memória e denúncia.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Opõe-se diretamente ao Fragmento II: a narradora não quer apagar o passado nem busca superação individualista — a favela "se entranhou" nela e "exige" ser escrita.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'A memória do beco não é idealizada nem meramente intimista: retrata miséria, despejo (desfavelamento), violência e solidariedade coletiva.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Confunde o gesto poético-memorialístico de "inventar" onde a lembrança falha com falta de confiabilidade. Na escrevivência, a fabulação resgata a verdade coletiva silenciada.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Pelo contrário, o "beco" é carregado de simbolismo afetivo, histórico e político.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Sintetiza com precisão o projeto de *Becos da Memória*: escrita como reconstrução afetiva e política da favela silenciada, fazendo da memória fragmentada instrumento de resistência e denúncia.',
      },
    ],
    commonTraps: [
      'Achar que "invento, invento" (Fragmento I) torna o narrador indigno de confiança (distrator C): na obra, inventar é completar poeticamente lacunas que a história oficial apagou.',
    ],
    essentialKnowledge: [
      '*Becos da Memória* (Conceição Evaristo): narrado por Maria-Nova, acompanha o cotidiano e o desfavelamento de uma comunidade.',
      '**Escrevivência**: escrita que nasce da vivência negra/subalterna, unindo memória pessoal, voz coletiva e fabulação literária.',
    ],
    transferExercise: {
      prompt:
        'Por que o conceito de "escrevivência", formulado por Conceição Evaristo, rejeita a ideia de neutralidade absoluta ou de mero entretenimento passivo na literatura?',
      hint: 'Pense em quem escreve, a partir de qual lugar social e com qual compromisso de memória.',
      expectedAnswer:
        'Porque parte de experiências históricas concretas da população negra e periférica para transformar dor e memória silenciadas em voz ativa, denúncia e reexistência coletiva.',
      justification:
        'A escrita funciona como ato ético e estético de inscrição histórica de sujeitos frequentemente marginalizados.',
      solutionSummary:
        'Escrevivência = experiência vivida + escrita + consciência histórica/coletiva.',
    },
    relatedQuestionIds: ['ufrr-2026-q08'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise literária confirma E; concorda com o gabarito preliminar divulgado (07-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q08',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Sintaxe do Período Composto',
    questionType: 'portugues-sintaxe-subordinacao',
    methodTitle: 'Decomposição Oracional (Oração Subordinada Adverbial, Substantiva e Complemento Nominal)',
    questionInterpretation:
      'A questão testa análise sintática do período composto no Fragmento I de *Becos da Memória*, avaliando o valor de conjunções ("como"), tipo de ligação entre orações (subordinação vs coordenação), sujeito e função de orações reduzidas e desenvolvidas.',
    stepByStepSolution: [
      '1. Teste a alternativa **A**: `"como a memória é também vítima do esquecimento, invento, invento"`. Substitua *como* por **já que / porque**: *"Já que a memória é também vítima do esquecimento, invento"*. Faz todo sentido! Logo, *como* é **conjunção causal** (antecedendo a oração principal), e NÃO comparativa. A falsa.',
      '2. Teste a alternativa **B**: `"Escrevo sabendo que estou perseguindo uma sombra"`. Há duas orações subordinadas em cascata (1: *Escrevo* = principal; 2: *sabendo* = subordinada adverbial modal reduzida de gerúndio; 3: *que estou perseguindo uma sombra* = subordinada substantiva objetiva direta). Nunca "duas orações principais por coordenação". B falsa.',
      '3. Teste a alternativa **C**: `"Um deles insiste: resistência, resistência, resistência..."`. Quem pratica a ação de insistir é **"Um deles"** (sujeito!). As palavras *"resistência..."* representam o conteúdo da fala/insistência (objeto direto / citação discursiva), jamais o sujeito. C falsa.',
      '4. Teste a alternativa **D**: `"Escrevo sabendo que estou perseguindo uma sombra"`. Como escrevo? *Sabendo*... (indica o **modo/circunstância** em que a ação de escrever acontece -> adverbial modal reduzida de gerúndio). E quem sabe, sabe algo -> *"que estou perseguindo uma sombra"* completa o sentido do verbo transitivo direto *sabendo* (objeto direto oracional). Perfeitamente **CORRETA**!',
      '5. Teste a alternativa **E**: `"na tentativa de recompor esse tecido..."`. O verbo *escrevo* tem sujeito desinencial/oculto **"eu"** (1ª pessoa do singular). A expressão *"de recompor esse tecido..."* completa o sentido do substantivo abstrato *tentativa* (complemento nominal), jamais sujeito. E falsa.',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource: 'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Eliminação rápida por erros graves nos verbos: em A, *como* inicial antes de vírgula quase sempre é **causal** (= *já que*); em B, *sabendo que* é subordinação clara; em C e E, pergunte "quem faz a ação?" (*Um deles* / *eu*), descartando sujeitos impossíveis. Resta apenas **D**.',
    shortcutApplicability:
      'Aplicável em quase toda questão de sintaxe da UFRR baseada em trechos literários (inclusive quando não usa nomenclatura técnica pesada e descreve a função em linguagem funcional).',
    shortcutLimitations:
      'Embora *como* anteposto geralmente seja causal, lembre que *como* conformativo (*"Como dizia o autor..."*) também pode vir no início. Faça sempre o teste de troca por *já que/porque* vs *conforme*.',
    universalMethod:
      'Método em 3 passos para sintaxe do período composto: (1) Conte os verbos/locuções verbais para delimitar cada oração; (2) ache o sujeito de cada verbo concordando em pessoa/número (*escrevo* -> sujeito "eu"; *insiste* -> "um deles"); (3) teste o valor lógico da conjunção ou oração reduzida (*sabendo* = de que modo? -> adverbial modal; *que + verbo* após verbo transitivo direto = o quê? -> objetiva direta).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'A oração *"como a memória é também vítima do esquecimento"* expressa a **causa** pela qual a narradora inventa ("porque/já que a memória falha, eu invento"), não uma comparação.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Não existem "duas orações principais por coordenação": *sabendo* subordina-se adverbialmente a *Escrevo*, e *que estou perseguindo...* subordina-se substantivamente a *sabendo*.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'O sujeito do verbo *insiste* é o sintagma *"Um deles"*; a sequência *"resistência..."* reproduz o que esse sujeito insiste em dizer.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          'Descreve corretamente as relações sintático-semânticas sem forçar: *sabendo...* exprime o modo como se escreve (reduzida de gerúndio adverbial modal) e *que estou perseguindo uma sombra* funciona como complemento (objeto direto oracional) da forma verbal *sabendo*.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '*"de recompor esse tecido..."* é oração subordinada substantiva completiva nominal (completa o substantivo *tentativa*). O sujeito de *escrevo* é oculto (*eu*).',
      },
    ],
    commonTraps: [
      'Confundir **"como" causal** no início de frase com **"como" comparativo**: *como* comparativo liga dois termos equivalentes em grau/semelhança (*alto como uma torre*), nunca introduz a razão lógica de um fato.',
      'Esquecer que uma oração dentro de outra pode acumular subordinação em níveis diferentes (principal -> adverbial -> substantiva).',
    ],
    essentialKnowledge: [
      'Valores de *como*: causal (*já que*, anteposto), comparativo (*assim como*), conformativo (*conforme*).',
      'Oração reduzida de gerúndio sem conectivo: verificar valor temporal, causal, condicional, concessivo ou modal.',
      'Sujeito sempre concorda em número e pessoa com o verbo e nunca vem preposicionado como núcleo (descarta "de recompor...").',
    ],
    transferExercise: {
      prompt:
        'Na frase "**Como** estudou os padrões da banca, resolveu a prova **sabendo que** evitaria armadilhas", identifique o valor semântico de "Como" e a função sintática da oração "que evitaria armadilhas".',
      hint: 'Troque "Como" por "Já que" e pergunte "sabendo o quê?".',
      expectedAnswer:
        '"Como" introduz oração subordinada adverbial causal; "que evitaria armadilhas" é oração subordinada substantiva objetiva direta de "sabendo".',
      justification:
        '"Já que estudou..." indica causa da resolução segura; quem sabe, sabe algo (objeto direto do verbo saber).',
      solutionSummary: 'Como = causal; "que evitaria armadilhas" = objetiva direta.',
    },
    relatedQuestionIds: ['ufrr-2025-q08', 'ufrr-2023-q07'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise sintática completa confirma D; concorda com o gabarito preliminar divulgado (08-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q09',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Colocação Pronominal',
    questionType: 'portugues-colocacao-pronominal-locucao',
    methodTitle: 'Colocação Pronominal em Locuções Verbais com Atrativo ("que")',
    questionInterpretation:
      'A questão testa as regras da norma-padrão para inserção de pronome oblíquo átono (*me*) na locução verbal **"estou perseguindo"** dentro da oração subordinada *"sabendo **que** estou perseguindo uma sombra"*.',
    stepByStepSolution: [
      '1. Analise a estrutura gramatical original: há um **verbo auxiliar** (*estou*) + **verbo principal no gerúndio** (*perseguindo*), precedidos por palavra atrativa (**que** — conjunção integrante).',
      '2. Aplique a regra normativa clássica para locuções verbais (auxiliar + gerúndio/infinitivo) **com atrativo** (*que*):',
      '   - **Próclise ao auxiliar** (*que **me** estou perseguindo*): aceita e recomendada pela gramática normativa tradicional (Cegalla, Bechara, Cunha & Cintra) por haver palavra atrativa antes do auxiliar;',
      '   - **Ênclise ao principal** (*que estou perseguindo**-me**): também aceita e amplamente recomendada pela norma-padrão (o gerúndio permite ênclise sem conflito com a palavra atrativa distante);',
      '   - **Próclise ao principal** (*que estou **me** perseguindo*): padrão culto brasileiro correntíssimo e aceito por gramáticos modernos (Bagno, Rocha Lima/Bechara com ressalva de uso brasileiro sem hífen).',
      '3. Verifique por que a questão foi **ANULADA oficialmente pelo Edital nº 93/25-CPV**:',
      '   - O gabarito preliminar trazia **A**, afirmando que a forma adequada seria *"estou me perseguindo"* "pois o verbo sabendo não impede o uso da próclise" (justificativa imprecisa — quem atrai é o *que*, além de o padrão brasileiro de locução sem hífen gerar controvérsia entre gramáticos tradicionalistas);',
      '   - Ao mesmo tempo, **B** afirmava que *"que me estou perseguindo"* estaria em desacordo com a norma-padrão (falso na gramática tradicional, que justamente prescreve *"que me estou perseguindo"*!), e **D** misturava regras de modo ambíguo.',
      '4. Conclusão editorial honesta: mantemos o status **Anulada no gabarito oficial (Edital nº 93/25-CPV)** e explicamos ao estudante como a norma-padrão funciona de verdade nesse caso para acertar futuras provas.',
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerSource: 'Edital nº 93/25-CPV — Questão 09 oficialmente ANULADA após julgamento de recursos',
    officialAnswerStatus: 'annulled_official',
    shortcutMethod:
      'Para futuras provas da UFRR sobre locução verbal (*auxiliar + infinitivo/gerúndio*): com palavra atrativa (*que, não, já*), são **corretas na norma tradicional** a **próclise ao auxiliar** (*que me estou perseguindo*) e a **ênclise ao principal** (*que estou perseguindo-me*); no português brasileiro contemporâneo também se admite a forma solta *que estou me perseguindo*.',
    shortcutApplicability:
      'Útil para revisar rapidamente colocações em locuções verbais (auxiliar + infinitivo ou gerúndio). Diferencie sempre de *auxiliar + particípio* (*tinha **me** dito* / ***me** tinha dito* — jamais *tinha dito-me*!).',
    shortcutLimitations:
      'Nunca use ênclise ao **particípio** (*"tinha perseguido-me"* é sempre errado) nem ênclise ao auxiliar quando há atrativo (*"que estou-me perseguindo"* é condenado pela maioria das bancas).',
    universalMethod:
      'Checklist definitivo de Colocação Pronominal com 2 verbos: (1) identifique o verbo principal: é infinitivo/gerúndio ou particípio?; (2) se particípio -> proibido depois do particípio (*tinha visto-me* ❌); (3) verifique se há palavra atrativa antes da locução (*que, não, nunca, quem, onde, advérbios sem vírgula*); (4) se houver atrativo, vale próclise antes do 1º verbo ou ênclise no 2º verbo (se infinitivo/gerúndio); no uso culto brasileiro moderno também ocorre próclise ao 2º verbo sem hífen.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'anulada',
        explanation:
          'Constava no gabarito preliminar, mas apresentou inconsistência na justificativa ("porque o verbo sabendo não impede..." — o fator sintático relevante é o conectivo *que*, além da divergência normativa sobre próclise ao principal sem hífen).',
      },
      {
        letter: 'B',
        status: 'anulada',
        explanation:
          'Incorreta segundo a norma gramatical clássica, pois *"que me estou perseguindo"* (próclise ao auxiliar atraída pelo *que*) é justamente a forma mais ortodoxa prescrita por Bechara e Cunha & Cintra.',
      },
      {
        letter: 'C',
        status: 'anulada',
        explanation:
          'Falsa: em primeiro lugar, *"estou perseguindo"* sequer contém pronome oblíquo; além disso, gerúndio solto não exige próclise obrigatória (exige próclise quando precedido de *em*, como em *"em se tratando"*).',
      },
      {
        letter: 'D',
        status: 'anulada',
        explanation:
          'Embora aponte corretamente a possibilidade de *"perseguindo-me"* (ênclise ao gerúndio), trata de forma ambígua os efeitos de ênfase e o critério de próclise na locução.',
      },
      {
        letter: 'E',
        status: 'anulada',
        explanation:
          'Falsa: orações subordinadas exigem **próclise** (por força do conectivo subordinativo *que*), e não ênclise obrigatória.',
      },
    ],
    commonTraps: [
      'Achar que *"que me estou perseguindo"* soa "estranho" na fala brasileira e, portanto, estaria errado na gramática — na norma-padrão escrita tradicional, essa é uma das formas mais corretas quando há conectivo *que*!',
      'Esquecer a proibição absoluta de ênclise em **particípio** (*havia feito-o* é sempre errado) e em **futuros** (*faria-o* / *farei-o* -> usar mesóclise se não houver atrativo).',
    ],
    essentialKnowledge: [
      'Fatores atrativos de próclise: palavras negativas (*não, nunca*), pronomes relativos/indefinidos/interrogativos (*que, quem, alguém*), conjunções subordinativas (*que, embora, se, quando*), advérbios sem pausa.',
      'Locução com infinitivo ou gerúndio + atrativo (*não/que*): aceita próclise ao auxiliar (*que me vai ajudar*) ou ênclise ao principal (*que vai ajudar-me*); uso culto BR admite próclise solta ao principal (*que vai me ajudar*).',
      'Questões anuladas pela CPV contam ponto integralmente ao candidato em simulados oficiais — e rendem excelente revisão gramatical!',
    ],
    transferExercise: {
      prompt:
        'Em qual das frases abaixo a colocação pronominal viola estritamente a norma-padrão: (I) "Espero que me tenham avisado a tempo." (II) "Espero que tenham avisado-me a tempo." (III) "Espero que tenham-me avisado a tempo."?',
      hint: 'Observe que "avisado" é particípio e "que" é conjunção integrante atrativa.',
      expectedAnswer:
        'Viola estritamente na frase II ("avisado-me", ênclise ao particípio) e também na frase III pela maioria das gramáticas (ênclise ao auxiliar havendo atrativo "que").',
      justification:
        'Nunca se usa ênclise depois de particípio (-ado/-ido), e o "que" atrai o pronome para antes do auxiliar ("que me tenham avisado").',
      solutionSummary:
        'Correta: (I) "que me tenham avisado". Erradas pela norma: (II) ênclise em particípio e (III) ênclise ao auxiliar com palavra atrativa.',
    },
    relatedQuestionIds: ['ufrr-2024-q08'],
    verificationStatus: 'annulled_official',
    verificationNotes:
      'Questão oficialmente ANULADA pelo Edital nº 93/25-CPV (09/12/2025). Resolução preserva o status oficial e detalha os pontos gramaticais responsáveis pelos recursos deferidos.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
];
