import type { LegacyQuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-04-10T12:00:00.000Z';

export const UFRR_2026_BIOLOGIA_RESOLUTIONS: LegacyQuestionResolution[] = [
  {
    questionId: 'ufrr-2026-q19',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Bioenergética Celular',
    subtopic: 'Respiração Aeróbica',
    questionType: 'bio-respiracao-celular-compartimentos',
    methodTitle: 'Mapeamento Topológico das 3 Etapas da Respiração Aeróbica em Eucariotos',
    questionInterpretation:
      'A questão solicita o local celular exato de cada uma das três grandes etapas da respiração celular aeróbica em células eucarióticas: glicólise, ciclo de Krebs (ciclo do ácido cítrico) e cadeia respiratória (fosforilação oxidativa).',
    stepByStepSolution: [
      '1. **Glicólise**: quebra da glicose ($C_6$) em duas moléculas de piruvato ($C_3$), com saldo de $2\\text{ ATP}$ e $2\\text{ NADH}$. É uma rota universal (presente também em procariotos e anaeróbios) e ocorre fora da mitocôndria, no **citosol** (hialoplasma).',
      '2. **Ciclo de Krebs** (precedido pela oxidação do piruvato a acetil-CoA): ocorre no compartimento líquido interno da mitocôndria, onde ficam dissolvidas as enzimas do ciclo e o DNA mitocondrial — a **matriz mitocondrial**.',
      '3. **Cadeia respiratória (cadeia transportadora de elétrons e fosforilação oxidativa)**: os complexos proteicos transportadores de elétrons (I–IV) e a ATP sintase ficam incrustados nas dobras (cristas) da **membrana interna da mitocôndria** (onde o bombeamento de $H^+$ gera o gradiente eletroquímico até o espaço intermembranas).',
      '4. Confrontando com as opções, a sequência exata *citosol -> matriz mitocondrial -> membrana interna da mitocôndria* corresponde à alternativa **C**.',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Regra de progressão "de fora para a membrana": **1) Citosol** (fora da organela, corta B, D e E) -> **2) Matriz** (miolo líquido, corta A) -> **3) Membrana interna** (cristas onde fica a ATP sintase) -> **C** imediato.',
    shortcutApplicability:
      'Válido para toda questão de bioenergética eucariótica cobrando localização das etapas metabólicas.',
    shortcutLimitations:
      'Lembre que em **procariotos** (bactérias aeróbias) não existem mitocôndrias: a glicólise e o ciclo de Krebs ficam no citosol, e a cadeia transportadora fica na **membrana plasmática** (mesossomo/invaginações).',
    universalMethod:
      'Associe sempre cada etapa ao seu substrato/maquinário: enzimas solúveis do piruvato no citosol (glicólise); enzimas solúveis + liberação de $CO_2$ na matriz mitocondrial (Krebs); bombas de prótons e ATP sintase ancoradas em bicamada lipídica seletiva (membrana interna/cristas mitocondriais).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Inverte os locais mitocondriais: o ciclo de Krebs ocorre na matriz (não na membrana interna), e a cadeia respiratória fica na membrana interna (não na externa, que é permeável a íons via porinas).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'A glicólise nunca ocorre na matriz mitocondrial (a glicose é convertida a piruvato no citosol antes de entrar na mitocôndria).',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Correlaciona perfeitamente: glicólise no citosol, ciclo de Krebs na matriz mitocondrial e cadeia respiratória na membrana interna da mitocôndria.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Erra ao colocar glicólise na matriz e ciclo de Krebs no espaço intermembranas.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A membrana externa não realiza glicólise.',
      },
    ],
    commonTraps: [
      'Confundir o local de acúmulo de prótons $H^+$ (**espaço intermembranas**) com o local onde ficam as proteínas da cadeia respiratória (**membrana interna**).',
      'Trocar membrana externa (lisa e porosa) por membrana interna (dobrada em cristas e impermeável a $H^+$).',
    ],
    essentialKnowledge: [
      'Glicólise -> Citosol (anaeróbia; saldo $2\\text{ ATP} + 2\\text{ NADH}$).',
      'Ciclo de Krebs -> Matriz mitocondrial (gera $\\text{CO}_2$, NADH, $\\text{FADH}_2$, GTP/ATP).',
      'Cadeia respiratória -> Cristas da membrana interna mitocondrial ($\\text{O}_2$ é o aceptor final de elétrons, formando $\\text{H}_2\\text{O}$).',
    ],
    transferExercise: {
      prompt:
        'Em qual compartimento da mitocôndria ocorre o maior acúmulo de íons $H^+$ bombeados pela cadeia transportadora de elétrons, e qual molécula atua como aceptor final desses elétrons na membrana interna?',
      hint: 'Os prótons são bombeados da matriz para o espaço entre as duas membranas mitocondriais.',
      expectedAnswer:
        'Espaço intermembranas; o oxigênio molecular ($\\text{O}_2$) atua como aceptor final, formando água ($\\text{H}_2\\text{O}$).',
      justification:
        'O gradiente protônico acumula $H^+$ no espaço intermembranas (tornando-o mais ácido que a matriz) para impulsionar a ATP sintase; ao fim da cadeia, $\\text{O}_2$ recebe os elétrons e prótons gerando $\\text{H}_2\\text{O}$.',
      solutionSummary: 'Acúmulo de $H^+$ no espaço intermembranas; aceptor final = $\\text{O}_2$.',
    },
    relatedQuestionIds: ['ufrr-2023-q21', 'ufrr-2025-q20', 'ufrr-2025-q21'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Classificação citológica padrão confirma C, em concordância com o gabarito preliminar divulgado (19-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q20',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Bioenergética Celular',
    subtopic: 'Fotossíntese',
    questionType: 'bio-fotossintese-fotoquimica-vs-quimica',
    methodTitle: 'Separação Entre Etapa Fotoquímica (Tilacoides) e Etapa Química / Calvin (Estroma)',
    questionInterpretation:
      'Entre cinco eventos da fotossíntese (I a V), pede-se identificar exclusivamente aqueles pertencentes à **etapa química** (Ciclo de Calvin / fase escura enzimática no estroma).',
    stepByStepSolution: [
      '1. Relembre a divisão da fotossíntese nos cloroplastos:',
      '   - **Etapa Fotoquímica (fase clara, nos tilacoides)**: absorve luz, quebra a água (**fotólise da água** = item **I**), libera $\\text{O}_2$ (**III**), reduz $\\text{NADP}^+$ em $\\text{NADPH}$ (**IV**) e produz $\\text{ATP}$ (fotofosforilação).',
      '   - **Etapa Química (Ciclo de Calvin, no estroma)**: usa a energia química produzida na etapa anterior (**consumo de $\\text{NADPH}$ e $\\text{ATP}$** = item **V**) para fixar o carbono inorgânico (**fixação de $\\text{CO}_2$ pela enzima rubisco** = item **II**) em carboidratos.',
      '2. Portanto, pertencem à etapa fotoquímica: I, III e IV.',
      '3. Pertencem exclusivamente à **etapa química**: **II e V** — alternativa **B**.',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Tudo que envolve **luz, água e $\\text{O}_2$** ou *fabricação* de $\\text{NADPH}$ pertence à fase fotoquímica (I, III, IV fora!). Sobra quem trabalha com **$\\text{CO}_2$ / Rubisco** e **gasta** ATP/NADPH -> **II e V** (**B**).',
    shortcutApplicability:
      'Funciona para toda questão comparando Fase Clara (Tilacoide) vs Ciclo de Calvin (Estroma).',
    shortcutLimitations:
      'Não caia no mito escolar de que a etapa química "só ocorre no escuro": ela não usa fótons diretamente, mas depende do fornecimento contínuo de ATP e NADPH pela fase clara e de enzimas ativadas na luz.',
    universalMethod:
      'Organize a tabela mental: **Tilacoide (Fotoquímica)** entra $\\text{H}_2\\text{O} + \\text{luz}$, sai $\\text{O}_2 + \\text{ATP} + \\text{NADPH}$. **Estroma (Química/Calvin)** entra $\\text{CO}_2 + \\text{ATP} + \\text{NADPH}$ (com rubisco), sai glicose/triose-fosfato.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'I (fotólise da água) e IV (redução de $\\text{NADP}$ a $\\text{NADPH}$) são eventos da etapa **fotoquímica** nos tilacoides.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'II (fixação do $\\text{CO}_2$ pela rubisco) e V (consumo de $\\text{NADPH}$ e $\\text{ATP}$) sintetizam exatamente o Ciclo de Calvin no estroma (etapa química).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'III (liberação de $\\text{O}_2$) vem da fotólise da água na etapa fotoquímica.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Mistura eventos da etapa fotoquímica (I e III) com um da etapa química (II).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Mistura II (química) com III e IV (fotoquímica).',
      },
    ],
    commonTraps: [
      'Confundir **produção/redução de NADPH** (etapa fotoquímica, item IV) com **consumo/oxidação de NADPH** (etapa química, item V).',
      'Achar que o $\\text{O}_2$ liberado na fotossíntese vem do $\\text{CO}_2$ — na verdade todo o $\\text{O}_2$ vem da quebra da $\\text{H}_2\\text{O}$ na etapa fotoquímica.',
    ],
    essentialKnowledge: [
      'Fotólise da água (Reação de Hill) -> tilacoide -> origem do $\\text{O}_2$ liberado.',
      'Rubisco (ribulose-1,5-bisfosfato carboxilase-oxigenase) -> enzima-chave da fixação de $\\text{CO}_2$ no Ciclo de Calvin (estroma).',
    ],
    transferExercise: {
      prompt:
        'Se um herbicida bloquear especificamente a síntese de NADPH nos tilacoides de uma planta iluminada, qual efeito imediato ocorrerá sobre a fixação de $\\text{CO}_2$ no estroma e sobre a liberação de $\\text{O}_2$?',
      hint: 'Observe se o Ciclo de Calvin consegue reduzir o carbono sem NADPH e se o transporte de elétrons da fotólise continua sem aceptor $\\text{NADP}^+$.',
      expectedAnswer:
        'A fixação de $\\text{CO}_2$ no estroma cessa (falta poder redutor do NADPH) e o fluxo linear de elétrons/liberação de $\\text{O}_2$ também fica inibido por falta de $\\text{NADP}^+$ oxidado.',
      justification:
        'As duas etapas são acopladas: o Ciclo de Calvin consome NADPH e regenera $\\text{NADP}^+$ para a cadeia fotossintética receber elétrons vindos da fotólise da água.',
      solutionSummary:
        'Cessa a redução no Ciclo de Calvin por falta de NADPH e interrompe-se o fluxo linear da fotólise.',
    },
    relatedQuestionIds: ['ufrr-2025-q21', 'ufrr-2023-q21'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Revisão bioquímica confirma II e V (B), igual ao gabarito preliminar divulgado (20-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q21',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Ciclo Celular e Divisão',
    questionType: 'bio-ciclo-celular-interfase-mitose',
    methodTitle: 'Distinção Entre Interfase (G₁, S, G₂) e Divisão (M / Citocinese)',
    questionInterpretation:
      'Contextualizada pelo descontrole do ciclo celular no câncer, a questão pede a única afirmação correta sobre as fases do ciclo celular (interfase e mitose).',
    stepByStepSolution: [
      '1. Relembre os grandes períodos do ciclo celular eucariótico: **Interfase** ($G_1 \\to S \\to G_2$) e **Fase M** (Mitose/Meiose + Citocinese).',
      '2. Avalie cada afirmação pelo critério de fase:',
      '   - Na **fase S** (*Synthesis*) da interfase ocorre obrigatoriamente a **duplicação semiconservativa do DNA** (cada cromossomo passa a ter duas cromátides-irmãs). Isso valida diretamente **C**.',
      '   - A mitose produz duas células idênticas (equacional, $2n \\to 2n$ em animais) e não gametas animais (que vêm da meiose).',
      '   - A separação das cromátides-irmãs ocorre na **anáfase** da mitose (nunca na fase $G_1/G_2$).',
      '   - A condensação máxima ocorre na prófase/metáfase mitóticas, não na citocinese (divisão do citoplasma).',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      '"S" vem de **Síntese de DNA**! Ao ler *"Na interfase, a duplicação do DNA ocorre durante a fase S"*, você reconhece um clássico absoluto de vestibulares de Medicina e checa rapidamente que A, B, D e E misturam fases erradas -> **C**.',
    shortcutApplicability:
      'Direto para qualquer questão sobre ciclo celular, pontos de checagem ($G_1/S$, $G_2/M$) e gráficos de quantidade de DNA ($2C \\to 4C$).',
    shortcutLimitations:
      'Em questões de **Botânica**, lembre que plantas fazem **meiose espórica** (produzindo esporos) e produzem gametas por **mitose** nos gametófitos — ainda assim, a afirmativa A falha ao generalizar "gametas e esporos" e frente à certeza absoluta de C.',
    universalMethod:
      'Separe sempre: **Interfase** ($G_1$: crescimento/RNA/proteínas; $S$: replicação do DNA e duplicação de centrossomos; $G_2$: checagem e preparo final) vs **Mitose** (Prófase, Metáfase, Anáfase, Telófase) + **Citocinese** (divisão citoplasmática).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Em animais e na definição geral escolar, a formação de gametas e esporos (na meiose espórica) está ligada à **meiose** (divisão reducional), não à mitose.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'A separação das cromátides-irmãs ocorre na **anáfase** da mitose; as fases $G$ ($G_1, G_2$) pertencem à interfase.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Durante a fase S da interfase ocorre a replicação semiconservativa de todo o DNA nuclear.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'A interfase é a preparação metabólica sem divisão celular; células haploides originam-se ao fim da meiose.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'A condensação da cromatina ocorre na **prófase** (início da mitose), enquanto a **citocinese** é a separação do citoplasma no final da divisão, quando o DNA já se descondensa na telófase.',
      },
    ],
    commonTraps: [
      'Achar que a condensação do DNA ocorre na interfase: na interfase o DNA fica descondensado (cromatina) para permitir transcrição e replicação na fase S.',
      'Confundir a letra $G_0$ (células que saem do ciclo, como neurônios maduros) com fase de divisão.',
    ],
    essentialKnowledge: [
      '$G_1$ (2C): síntese proteica e crescimento celular.',
      '$S$ (2C -> 4C): duplicação do DNA (cromossomos passam de simples para duplicados).',
      '$G_2$ (4C): revisão de danos no DNA (p53 atua no ponto de checagem $G_1/S$ e $G_2/M$).',
      'Anáfase mitótica: separação das cromátides-irmãs.',
    ],
    transferExercise: {
      prompt:
        'Uma célula somática diploide possui quantidade de DNA igual a $2C$ na fase $G_1$. Qual será a quantidade de DNA nuclear ao final da fase $S$ e após a citocinese mitótica?',
      hint: 'Na fase $S$ o DNA dobra, e na mitose + citocinese ele é repartido igualmente em duas células-filhas.',
      expectedAnswer:
        '$4C$ ao final da fase $S$ (e durante $G_2$ até a anáfase/telófase) e $2C$ em cada célula-filha após a citocinese.',
      justification:
        'A replicação na fase S duplica a massa de DNA de $2C$ para $4C$; na mitose equacional cada núcleo-filho recebe um lote completo $2C$.',
      solutionSummary: '$G_1 = 2C \\xrightarrow{S} 4C \\xrightarrow{\\text{Mitose}} 2 \\times 2C$.',
    },
    relatedQuestionIds: ['ufrr-2024-q20', 'ufrr-2022-q19'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Conceito clássico de biologia celular confirma C, igual ao gabarito preliminar divulgado (21-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q22',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Microbiologia e Saúde Pública',
    subtopic: 'Influenza Aviária',
    questionType: 'bio-virologia-transmissao-h5n1',
    methodTitle: 'Avaliação de Vias de Transmissão Viral (Respiratória/Contato vs. Alimentar)',
    questionInterpretation:
      'Partindo do foco de influenza aviária de alta patogenicidade (H5N1) detectado em Montenegro/RS em maio de 2025, a questão pede a afirmativa **INCORRETA** sobre a doença e sua transmissão.',
    stepByStepSolution: [
      '1. Verifique a biologia do vírus **Influenza A (H5N1)** e as notas técnicas oficiais do MAPA e da OMS/OPAS.',
      '2. **Vias reais de infecção humana**: ocorre quase exclusivamente pelo **contato direto** com aves infectadas (vivas ou mortas), suas secreções respiratórias, fezes ou ambientes contaminados, penetrando por mucosas (boca, nariz, olhos) ou inalação de aerossóis (**C** e **E** estão corretas).',
      '3. **Segurança alimentar (ponto crucial do comunicado oficial do MAPA em 2025)**: não há evidência epidemiológica de transmissão da gripe aviária a humanos pelo **consumo de carne de aves ou ovos** adequadamente preparados/inspecionados — a doença **não** é transmitida pela via alimentar comum de carne e ovos (**B é INCORRETA**).',
      '4. Confira A e D: afeta aves silvestres e domésticas (e esporadicamente mamíferos/humanos -> **A** correta) e gera barreiras sanitárias no comércio internacional avícola (**D** correta).',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Compare diretamente **B vs C**: ambas começam idênticas (*"É uma doença causada pelo vírus H5N1, que afeta aves..."*) e se contradizem na via de transmissão! B diz *"ingerem carne e ovos"*; C diz *"contato direto com aves ou secreções"*. Em enunciados com **INCORRETA**, o par gêmeo contraditório aponta logo a falsa — vírus respiratório de influenza se transmite por secreções/aerossóis, não por comer carne/ovos -> **B**.',
    shortcutApplicability:
      'Técnica das **alternativas mutuamente excludentes**: quando duas opções compartilham 70% do texto e divergem em um ponto factual, uma delas costuma ser o alvo.',
    shortcutLimitations:
      'Sempre confirme biologicamente qual das duas está errada (aqui o consumo alimentar de carne e ovos inspecionados/cozidos é seguro, conforme reiterado pelo MAPA no episódio de Montenegro-RS).',
    universalMethod:
      'Em questões de Saúde Pública e Zoonoses na UFRR: (1) identifique o agente etiológico (vírus envelopado respiratório = transmissão por secreções/aerossóis/mucosas); (2) cheque comunicados sanitários clássicos (MAPA/OMS sobre H5N1: sem risco no consumo de carne e ovos; risco no manejo direto em granjas).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira (logo não responde ao comando "INCORRETA"): H5N1 infecta aves silvestres/domésticas e ocasionalmente mamíferos (bovinos, marinhos) e humanos.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'É a afirmação **INCORRETA** pedida: segundo o MAPA, a OMS e a FAO, a influenza aviária não é transmitida pelo consumo de carne avícola ou ovos.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: a transmissão humana ocorre pelo contato direto com aves doentes ou seus fluidos/secreções.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: focos comerciais geram embargos sanitários temporários e impacto direto nas exportações avícolas.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira sobre a porta de entrada mucosa/respiratória e o quadro clínico inicial gripal.',
      },
    ],
    commonTraps: [
      'Achar que o vírus se pega comendo frango ou ovo simplesmente porque atinge granjas de aves comerciais — justamente essa desinformação foi combatida na nota do MAPA de maio de 2025!',
      'Esquecer que o comando pede a **INCORRETA** e marcar C ou A por serem afirmações verdadeiras.',
    ],
    essentialKnowledge: [
      'Vírus Influenza A (H5N1): RNA vírus envelopado (Ortomixovírus).',
      'Transmissão humana: contato direto com aves infectadas, fezes e secreções respiratórias.',
      'Consumo de carne e ovos inspecionados/cozidos NÃO transmite influenza aviária.',
    ],
    transferExercise: {
      prompt:
        'Durante um surto de Influenza Aviária H5N1 em granjas comerciais, quais profissionais correm maior risco de contágio e por que a venda de carne cozida/inspecionada não representa a principal via epidemiológica?',
      hint: 'Relacione a porta de entrada (mucosas/vias aéreas) com a exposição ocupacional e a sensibilidade térmica de vírus envelopados.',
      expectedAnswer:
        'Trabalhadores de granjas, abatedouros e veterinários expostos diretamente a aves vivas/secreções; o consumo de carne e ovos preparados/inspecionados não transmite o vírus (que é envelopado e inativado pelo calor).',
      justification:
        'O contato próximo gera inalação de aerossóis e contaminação de mucosas oculares/nasais, enquanto o vírus é termossensível e não se transmite como toxinfecção alimentar clássica.',
      solutionSummary:
        'Risco ocupacional por contato direto/aerossóis; consumo de carne/ovos cozidos é seguro.',
    },
    relatedQuestionIds: ['ufrr-2025-q27', 'ufrr-2024-q27'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Diretrizes oficiais do MAPA (maio/2025) e OMS confirmam que B é a assertiva incorreta, em concordância com o gabarito preliminar divulgado (22-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q23',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Ecologia Marinha e Impactos Ambientais',
    subtopic: 'Branqueamento de Corais',
    questionType: 'bio-ecologia-simbiose-branqueamento-corais',
    methodTitle: 'Quebra da Simbiose Coral–Zooxantela por Estresse Térmico',
    questionInterpretation:
      'A questão cobra o mecanismo biológico exato do **branqueamento de corais** no contexto das mudanças climáticas e da Década da Ciência Oceânica.',
    stepByStepSolution: [
      '1. Relembre a relação ecológica fundamental nos recifes de corais tropicais: os corais (cnidários heterotróficos de esqueleto calcário transparente/branco) mantêm uma relação de **mutualismo** com microalgas dinoflageladas fotossintetizantes chamadas **zooxantelas**.',
      '2. As zooxantelas fornecem até ~90% do alimento energético aos corais e conferem a eles suas **cores vibrantes**.',
      '3. Quando ocorre estresse ambiental — principalmente o **aumento da temperatura da água do mar** (aquecimento global / El Niño) — os corais **expulsam as zooxantelas**, expondo seu esqueleto branco de $\\text{CaCO}_3$ (**branqueamento**).',
      '4. Analisando as opções: apenas **D** descreve com exatidão o processo (*"O branqueamento é a perda das algas que vivem associadas aos corais"*).',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Associe duas palavras-chave imediatas: **Branqueamento = expulsão das algas (zooxantelas)** + **aquecimento + acidificação**. Eliminando A (nega temperatura), B (nega risco), C (diz *diminuição* da acidez — na verdade a acidez *aumenta*!) e E (diz que ficam *escuros*), resta diretamente **D**.',
    shortcutApplicability:
      'Válido para qualquer questão ecológica sobre recifes de corais, acidificação oceânica e aquecimento global.',
    shortcutLimitations:
      'Diferencie os dois efeitos do $\\text{CO}_2$: aumento de temperatura causa **branqueamento** (perda das algas); absorção de $\\text{CO}_2$ pela água gera ácido carbônico ($\\text{H}_2\\text{CO}_3$), causando **acidificação** (reduz pH e dificulta calcificação).',
    universalMethod:
      'Em questões ambientais sobre impactos climáticos: verifique sempre o sentido causal correto (mais $\\text{CO}_2 \\to$ mais $\\text{H}_2\\text{CO}_3 \\to$ **menor pH / maior acidez**; maior temperatura $\\to$ ruptura do mutualismo coral–zooxantela $\\to$ branqueamento e possível morte por inanição).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O aumento da temperatura superficial dos oceanos é justamente o principal gatilho do branqueamento em massa.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Sem as zooxantelas por períodos prolongados, os corais morrem por falta de nutrientes, ameaçando gravemente a biodiversidade recifal.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Duplo erro invertido: há **aumento** da concentração de $\\text{CO}_2$ atmosférico e oceânico, provocando **aumento da acidez** (queda do pH) que dissolve carbonatos.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          'Define precisamente o fenômeno: perda/expulsão das microalgas endossimbiontes (zooxantelas), revelando o esqueleto calcário branco.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'O fenômeno chama-se *branqueamento* justamente porque os corais perdem seus pigmentos fotossintéticos e ficam **brancos**, não escuros.',
      },
    ],
    commonTraps: [
      'Cair na alternativa C se ler rápido: ela troca "aumento de $\\text{CO}_2$ e aumento da acidez" por "*diminuição* de $\\text{CO}_2$ e *diminuição* da acidez".',
    ],
    essentialKnowledge: [
      'Corais (Filo Cnidaria, Classe Anthozoa) + Zooxantelas (dinoflagelados) = **Mutualismo** obrigatório em águas claras e rasas.',
      'Branqueamento $\\neq$ morte imediata: se a temperatura normalizar rápido, as algas podem recolonizar; se persistir, o coral morre.',
      'Acidificação oceânica: $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$, reduzindo íons $\\text{CO}_3^{2-}$ necessários ao $\\text{CaCO}_3$.',
    ],
    transferExercise: {
      prompt:
        'Explique quimicamente por que o aumento de $\\text{CO}_2$ atmosférico prejudica a formação do esqueleto de carbonato de cálcio ($\\text{CaCO}_3$) dos corais e moluscos marinhos.',
      hint: 'Considere a formação de ácido carbônico ($\\text{H}_2\\text{CO}_3$) e o deslocamento de equilíbrio consumindo $\\text{CO}_3^{2-}$.',
      expectedAnswer:
        'O $\\text{CO}_2$ dissolvido forma ácido carbônico, liberando íons $\\text{H}^+$ que reduzem o pH (acidificação) e reagem com $\\text{CO}_3^{2-}$ formando bicarbonato ($\\text{HCO}_3^-$), diminuindo o carbonato disponível para calcificação.',
      justification:
        'Com menos $\\text{CO}_3^{2-}$ livre na água do mar, a deposição de $\\text{CaCO}_3$ torna-se mais difícil e estruturas calcárias podem até sofrer dissolução.',
      solutionSummary:
        'Mais $\\text{CO}_2 \\to$ mais $\\text{H}^+ \\to$ menor $\\text{CO}_3^{2-}$ disponível para $\\text{CaCO}_3$.',
    },
    relatedQuestionIds: ['ufrr-2025-q21', 'ufrr-2023-q25'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Conceito ecológico consolidado confirma D, em concordância com o gabarito preliminar divulgado (23-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q24',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Taxonomia e Sistemática',
    questionType: 'bio-taxonomia-regras-lineu',
    methodTitle: 'Regras da Nomenclatura Binomial (Lineu) e Classificação Filogenética Natural',
    questionInterpretation:
      'Pede-se julgar quatro afirmativas (I a IV) sobre sistemas de classificação evolutivos, regras de nomenclatura biológica e categorias taxonômicas obrigatórias.',
    stepByStepSolution: [
      '1. **Afirmativa I**: Sistemas baseados em relações evolutivas (ancestralidade comum) são denominados **sistemas naturais** (em oposição aos antigos sistemas artificiais baseados apenas em características arbitrárias/utilitárias). -> **CORRETA**.',
      '2. **Afirmativa II**: As regras internacionais em latim foram criadas exatamente para **facilitar** a comunicação universal entre cientistas de qualquer idioma, garantindo que cada espécie tenha um único nome científico válido mundialmente. -> **FALSA**.',
      '3. **Afirmativa III**: Pela nomenclatura binomial de Lineu, o nome científico da espécie é formado por **duas palavras** (*Gênero* com inicial maiúscula + *epíteto específico* com inicial minúscula), sempre grafadas em destaque (**itálico** no texto impresso ou **sublinhadas** se manuscritas). -> **CORRETA**.',
      '4. **Afirmativa IV**: As sete categorias taxonômicas hierárquicas obrigatórias clássicas (Reino, Filo/Divisão, Classe, Ordem, Família, Gênero e Espécie) constam dos Códigos Internacionais (ICZN e ICN). -> **CORRETA**.',
      '5. Logo, estão corretas **I, III e IV** — alternativa **C**.',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Ataque o absurdo óbvio primeiro: **II diz que as regras *dificultam* a comunicação** (é o exato oposto do objetivo do latim científico!). Cortando II, caem B e E. Sabendo que *sistema natural = evolutivo* (**I**) e *7 categorias = ReFiCOFaGE* (**IV**), e *binomial itálico/sublinhado* (**III**) -> **I, III e IV** (**C**).',
    shortcutApplicability:
      'Altamente eficaz em questões de afirmativas I–IV onde uma assertiva nega claramente o propósito funcional do conceito.',
    shortcutLimitations:
      'Fique atento à diferença entre **Domínio** (3 Domínios de Woese, categoria superior adotada acima de Reino na sistemática moderna) e os **7 táxons obrigatórios clássicos** (*ReFiCOFaGE*) cobrados tradicionalmente nos códigos de nomenclatura.',
    universalMethod:
      'Checklist de Taxonomia UFRR: (1) Latim universaliza comunicação; (2) Binomial = Gênero (Maiúscula) + epíteto específico (minúscula), em itálico ou sublinhado; (3) Subespécie = trinomial; (4) ReFiCOFaGE (7 obrigatórias); (5) Sistemas naturais refletem filogenia/evolução.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Exclui a afirmativa I, que é verdadeira (sistemas filogenéticos/evolutivos são sistemas naturais de classificação).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Inclui a afirmativa II, que é falsa (a padronização binomial em latim *facilita* a comunicação científica global).',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Reúne exatamente as três corretas: I (classificação natural evolutiva), III (nomenclatura binomial em destaque) e IV (sete categorias taxonômicas obrigatórias).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Exclui a afirmativa III, que descreve corretamente a regra da nomenclatura binomial de Lineu.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Inclui II (falsa) e omite III e IV (corretas).',
      },
    ],
    commonTraps: [
      'Achar que o epíteto específico sozinho já é o nome da espécie (ex.: dizer que a espécie é *sapiens* — o correto é o binômio *Homo sapiens*).',
      'Ficar em dúvida sobre o item IV pensando na existência de *Domínio* — os códigos tradicionais listam exatamente 7 níveis obrigatórios (Reino até Espécie).',
    ],
    essentialKnowledge: [
      'Mnemônico das 7 categorias obrigatórias: **Re**ino – **Fi**lo – **C**lasse – **O**rdem – **Fa**mília – **G**ênero – **E**spécie (*"RaFaela Conseguiu O Famoso Gato Espanhol"*).',
      'Quanto maior a categoria em comum (ex.: mesma Família vs. mesma Ordem), maior o parentesco evolutivo entre dois táxons.',
    ],
    transferExercise: {
      prompt:
        'A onça-pintada (*Panthera onca*) e o tigre (*Panthera tigris*) pertencem ao mesmo gênero, enquanto o gato-doméstico (*Felis catus*) pertence à mesma família (*Felidae*), mas a outro gênero. Qual é a categoria taxonômica mais específica compartilhada entre *Panthera onca* e *Felis catus*?',
      hint: 'Suba na hierarquia **ReFiCOFaGE** a partir de Gênero.',
      expectedAnswer: 'Família (*Felidae*).',
      justification:
        'Eles possuem gêneros distintos (*Panthera* vs. *Felis*), mas estão reunidos no nível imediatamente superior, a família *Felidae* (e, consequentemente, também compartilham Ordem, Classe, Filo e Reino).',
      solutionSummary: 'Nível mais específico em comum = Família (*Felidae*).',
    },
    relatedQuestionIds: ['ufrr-2022-q23'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise das regras taxonômicas confirma C, em concordância com o gabarito preliminar divulgado (24-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q25',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Microbiologia e Resistência Antimicrobiana',
    questionType: 'bio-bacterias-resistencia-conjugacao',
    methodTitle: 'Mecanismos de Seleção Natural e Transferência Horizontal de Plasmídeos (Conjugação)',
    questionInterpretation:
      'Sobre superbactérias e resistência antimicrobiana (*One Health* — saúde humana, animal e ambiental), pede-se a afirmação **INCORRETA**.',
    stepByStepSolution: [
      '1. Relembre os dois pilares da resistência bacteriana aos antibióticos:',
      '   - **Origem e seleção**: mutações aleatórias pré-existentes ou genes de resistência são **selecionados** (não "induzidos por necessidade", erro lamarckista!) quando há uso excessivo ou subdose de antibióticos em hospitais (**D**), na comunidade (**C**), na agropecuária (**E**) ou em efluentes contaminados (**A**).',
      '   - **Disseminação horizontal**: bactérias trocam genes de resistência rapidamente (inclusive entre espécies diferentes!) por meio de **plasmídeos** transferidos principalmente via **conjugação bacteriana** (ponte citoplasmática / *pili* sexual), além de transformação e transdução.',
      '2. Portanto, afirmar que bactérias resistentes *"são incapazes de transmitir a resistência para outras bactérias por meio da conjugação"* é **totalmente falso** — alternativa **B**.',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Palavra-chave absoluta falsa: **"incapazes de transmitir ... por meio da conjugação"**. A conjugação por plasmídeos R é o mecanismo clássico nº 1 de espalhamento horizontal de resistência bacteriana! E o enunciado pede a **INCORRETA** -> **B**.',
    shortcutApplicability:
      'Direto para questões de microbiologia envolvendo genética bacteriana (conjugação, transformação, transdução) e resistência a antibióticos.',
    shortcutLimitations:
      'Em questões sobre resistência, fique também alerta a outra pegadinha frequente (ausente aqui): frases lamarckistas dizendo que *"o antibiótico provoca/cria a mutação para a bactéria se adaptar"*.',
    universalMethod:
      'Domine o trio de transferência horizontal em bactérias: **Conjugação** (contato direto por *pilus* transferindo plasmídeo), **Transformação** (absorção de DNA livre do meio) e **Transdução** (transferência mediada por bacteriófagos). Associado à **seleção darwiniana** em hospitais/agropecuária, resolve 100% das questões de superbactérias.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: resíduos de antibióticos em rios/esgoto exercem pressão seletiva ambiental favorecendo cepas resistentes.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'É a afirmação **INCORRETA** procurada: bactérias transmitem ativamente genes de resistência (geralmente localizados em plasmídeos R) a outras bactérias por **conjugação**.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: automedicação, interrupção precoce e uso em infecções virais aceleram a seleção de linhagens resistentes.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: UTIs e enfermarias aplicam forte pressão seletiva antimicrobiana.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: o uso de antimicrobianos como promotores de crescimento ou profilaxia indiscriminada na pecuária integra o problema global de resistência (*Saúde Única*).',
      },
    ],
    commonTraps: [
      'Confundir *conjugação* (troca genética direta entre bactérias) com *reprodução sexuada* eucariótica.',
      'Esquecer que o comando pede a **INCORRETA**.',
    ],
    essentialKnowledge: [
      'Plasmídeos: moléculas circulares extracromossômicas de DNA que carregam genes de resistência a antibióticos.',
      'Conjugação bacteriana: transferência unidirecional de plasmídeo via *pilus* sexual (variabilidade genética sem aumento imediato no nº de indivíduos).',
      'Antibiótico **seleciona** variantes já resistentes (Darwinismo), não cria resistência intencionalmente.',
    ],
    transferExercise: {
      prompt:
        'Diferencie os três mecanismos de recombinação genética em bactérias (**conjugação**, **transformação** e **transdução**) quanto à participação de vírus ou contato direto.',
      hint: 'Um exige *pilus* entre células, outro capta DNA solto do meio e outro depende de um fago.',
      expectedAnswer:
        'Conjugação: transferência de plasmídeo por contato direto (*pilus* sexual); Transformação: incorporação de DNA livre presente no meio; Transdução: transferência de fragmentos de DNA bacteriano mediada por vírus bacteriófagos.',
      justification:
        'Todos os três promovem transferência horizontal de genes e variabilidade genética em populações bacterianas sem meiose.',
      solutionSummary: 'Contato (*pilus*) = conjugação; DNA livre = transformação; fago = transdução.',
    },
    relatedQuestionIds: ['ufrr-2024-q25', 'ufrr-2022-q25'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Genética microbiana confirma B como falsa/incorreta, em concordância com o gabarito preliminar divulgado (25-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q26',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Ecologia Aplicada e Agrotóxicos',
    questionType: 'bio-ecologia-magnificacao-trofica-ddt',
    methodTitle: 'Bioacumulação/Magnificação Trófica de Organoclorados (DDT) e Legislação Ambiental',
    questionInterpretation:
      'Pede-se a única afirmação **CORRETA** sobre defensivos agrícolas, especificamente contrastando propriedades do DDT/organoclorados, controle biológico, resistência de pragas e normas legais brasileiras.',
    stepByStepSolution: [
      '1. Analise cada assertiva com base na ecologia e na Lei dos Agrotóxicos (Lei nº 7.802/1989 e atual Lei nº 14.785/2023):',
      '   - **A (Falsa)**: Organoclorados como o **DDT** possuem altíssima persistência ambiental (meia-vida de anos/décadas) e solubilidade em lipídios, sofrendo **bioacumulação e biomagnificação (magnificação trófica)** ao longo das cadeias alimentares.',
      '   - **B (Falsa)**: Inseticidas de amplo espectro não são seletivos e dizimam também os **predadores naturais** (louva-a-deus, joaninhas, vespas, abelhas polinizadoras).',
      '   - **C (Falsa)**: O uso contínuo **seleciona** insetos naturalmente resistentes (seleção artificial/darwiniana).',
      '   - **D (Falsa)**: No Brasil, a comercialização ao usuário exige emissão de **receituário agronômico** por profissional habilitado.',
      '   - **E (Correta)**: O uso agrícola e posteriormente total do DDT e de outros organoclorados persistentes foi **proibido no Brasil** (banimento agrícola desde 1985 e proibido definitivamente pela Lei 11.936/2009), sendo substituídos por classes com menor persistência ambiental.',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Eliminação pelas 4 mentiras clássicas de Ecologia: A nega bioacumulação do DDT; B diz que veneno poupa joaninhas; C nega seleção de pragas resistentes; D diz que não precisa de receita. Sobra obrigatoriamente **E**!',
    shortcutApplicability:
      'Altamente confiável em questões de impacto ambiental de agrotóxicos.',
    shortcutLimitations:
      'Atenção para o fato de que defensivos substitutos (organofosforados, piretroides) degradam-se mais rápido no ambiente do que organoclorados, mas ainda possuem toxicidade aguda relevante e exigem manejo técnico.',
    universalMethod:
      'Em Ecologia Aplicada sobre poluentes persistentes (DDT, PCBs, mercúrio): associe sempre **baixa degradabilidade + lipossolubilidade -> acúmulo no tecido adiposo -> concentração crescente no topo da cadeia alimentar (magnificação trófica)**.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'O DDT é o exemplo clássico de poluente orgânico persistente (POP) de degradação **lenta**, lipossolúvel, que se acumula fortemente nos níveis tróficos superiores.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Inseticidas convencionais matam tanto pragas quanto inimigos naturais (joaninhas, vespas, louva-a-deus) e polinizadores.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A aplicação prolongada exerce intensa pressão seletiva, multiplicando linhagens geneticamente resistentes (efeito rebote).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'A legislação brasileira exige obrigatoriamente o **receituário agronômico** para venda de agrotóxicos.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'O DDT e diversos organoclorados foram proibidos no Brasil em razão de sua persistência e biomagnificação, adotando-se grupos menos persistentes.',
      },
    ],
    commonTraps: [
      'Achar que "degradação mais rápida" em E significaria "inofensivo": a alternativa não diz que são inofensivos, apenas que degradam mais rapidamente do que organoclorados como o DDT.',
    ],
    essentialKnowledge: [
      'Bioacumulação: acúmulo no organismo ao longo da vida; Biomagnificação (magnificação trófica): aumento da concentração do poluente de um nível trófico para o seguinte (máxima nos predadores de topo).',
      'DDT (organoclorado): proibido no Brasil (Lei nº 11.936/2009).',
      'Controle biológico: usa predadores/parasitoides naturais (joaninhas, *Trichogramma*) sem eliminar fauna benéfica.',
    ],
    transferExercise: {
      prompt:
        'Em um lago contaminado por resíduos de mercúrio (metilmercúrio), onde a concentração será maior: no fitoplâncton, nos peixes herbívoros, nos peixes carnívoros ou nas aves piscívoras? Nomeie esse fenômeno ecológico.',
      hint: 'O poluente é excretado muito lentamente e passa adiante a cada predação.',
      expectedAnswer:
        'Nas aves piscívoras (topo da cadeia alimentar); o fenômeno chama-se biomagnificação ou magnificação trófica.',
      justification:
        'Cada predador ingere grandes quantidades de presas contaminadas ao longo da vida, concentrando progressivamente o composto não biodegradável no topo da teia trófica.',
      solutionSummary: 'Aves piscívoras (topo); fenômeno = magnificação trófica / biomagnificação.',
    },
    relatedQuestionIds: ['ufrr-2025-q26', 'ufrr-2023-q25'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Princípios ecológicos e legislação sanitária brasileira confirmam E, igual ao gabarito preliminar divulgado (26-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q27',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Bioquímica',
    subtopic: 'Ácidos Nucleicos (DNA e RNA)',
    questionType: 'bio-bioquimica-dna-vs-rna',
    methodTitle: 'Tabela Estrutural Comparativa entre Nucleotídeos de DNA e RNA',
    questionInterpretation:
      'Pede-se a alternativa que aponta corretamente as duas diferenças estruturais fundamentais citadas no enunciado entre o **RNA** e o **DNA**: a pentose (açúcar) e a base nitrogenada exclusiva.',
    stepByStepSolution: [
      '1. Compare a composição química dos nucleotídeos (fosfato + pentose + base nitrogenada):',
      '   - **DNA (Ácido Desoxirribonucleico)**: pentose = **desoxirribose**; bases = Adenina (A), Guanina (G), Citosina (C) e **Timina (T)**.',
      '   - **RNA (Ácido Ribonucleico)**: pentose = **ribose**; bases = Adenina (A), Guanina (G), Citosina (C) e **Uracila (U)** (no lugar da timina).',
      '2. Portanto, no **RNA**, o açúcar é a **ribose** e, ao invés de timina (T), ocorre a **uracila (U)** — exatamente a alternativa **A**.',
    ],
    proposedAnswer: 'A',
    officialAnswer: 'A',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      '**R**NA começa com **R** de **R**ibose (corta B, C e E!). E **R**NA usa **U**racila no lugar de **T**imina (corta D!) -> **A** em menos de 10 segundos.',
    shortcutApplicability:
      'Infalível em questões de bioquímica básica sobre diferenças estruturais de DNA vs RNA.',
    shortcutLimitations:
      'Se a questão cobrar número de fitas ou estabilidade química, lembre que alguns vírus possuem DNA fita simples ou RNA fita dupla (reovírus), mas a composição *ribose + uracila* do RNA e *desoxirribose + timina* do DNA é universal.',
    universalMethod:
      'Memorize os dois blocos: **Púricas (2 anéis)**: A e G (*"ÁGua Pura"*). **Pirimídicas (1 anel)**: C, T (só DNA) e U (só RNA). Pentoses: Ribose (tem $-OH$ no carbono 2\') vs Desoxirribose (perdeu o oxigênio no carbono 2\').',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Descreve exatamente as duas diferenças do RNA em relação ao DNA: pentose ribose e substituição de timina (T) por uracila (U).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Desoxirribose é a pentose do **DNA**, não do RNA.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Inverte completamente as definições: descreve características do DNA atribuindo-as ao RNA.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Acerta a ribose, mas inverte as bases (diz que o RNA teria timina em vez de uracila).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Polimerase é uma **enzima** (proteína catalítica que sintetiza DNA ou RNA), não um açúcar; além disso, adenina (A) está presente em ambos.',
      },
    ],
    commonTraps: [
      'Leitura apressada trocando "ao invés de timina (T), ocorre uracila (U)" (A) por "ao invés de uracila (U), ocorre timina (T)" (D).',
    ],
    essentialKnowledge: [
      'DNA: desoxirribose + A, T, C, G (regra de Chargaff: $A=T, C=G$).',
      'RNA: ribose + A, U, C, G (emparelhamento na transcrição: A do DNA pareia com U do RNA).',
      'Purinas (2 anéis): Adenina e Guanina. Pirimidinas (1 anel): Citosina, Timina e Uracila.',
    ],
    transferExercise: {
      prompt:
        'Se um segmento de fita molde de DNA possui a sequência $3\'-\\text{T A C G A T}-5\'$, qual será a sequência do RNA mensageiro transcrito e qual açúcar comporá sua cadeia?',
      hint: 'Na transcrição de RNA, Adenina no molde pareia com Uracila no RNA, e Timina no molde pareia com Adenina.',
      expectedAnswer:
        '$5\'-\\text{A U G C U A}-3\'$, tendo a **ribose** como pentose.',
      justification:
        'Por complementaridade ($\\text{T}\\to\\text{A}$, $\\text{A}\\to\\text{U}$, $\\text{C}\\to\\text{G}$, $\\text{G}\\to\\text{C}$) em sentido antiparalelo, forma-se o códon iniciador AUG seguido de CUA.',
      solutionSummary: '$5\'-\\text{AUGCUA}-3\'$ com pentose ribose.',
    },
    relatedQuestionIds: ['ufrr-2024-q19', 'ufrr-2022-q25'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Bioquímica estrutural básica confirma A, em concordância com o gabarito preliminar divulgado (27-A).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
];
