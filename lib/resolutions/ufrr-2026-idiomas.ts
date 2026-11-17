import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-11-16T12:00:00.000Z';

export const UFRR_2026_IDIOMAS_RESOLUTIONS: QuestionResolution[] = [
  // ================= ESPANHOL (Q64–Q72) =================
  {
    questionId: 'ufrr-2026-q64-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Compreensão de Texto em Espanhol',
    questionType: 'es-ideia-geral-texto',
    methodTitle: 'Síntese Global do Texto Argumentativo-Informativo',
    decisiveConcept:
      'O primeiro parágrafo e o desenvolvimento do texto definem a preparação mental como parte essencial do rendimento esportivo, atuando em lesões, habilidades físicas e controle do estresse.',
    quickSolution:
      'Logo no 1º parágrafo o texto apresenta a tese central: a preparação mental é essencial no rendimento esportivo, aplicando-se a competições (ex.: Alcaraz em Roland Garros), aperfeiçoamento de habilidades motoras e recuperação de lesões (**Alternativa A**).',
    macete: {
      title: 'Tese na abertura em textos jornalísticos',
      strategy:
        'Em reportagens de divulgação científica (como do *El País*), o **parágrafo 1** traz o resumo da ideia geral; exemplos específicos (Alcaraz) e técnicas (imaginería) só ilustram essa tese.',
      whenToUse: 'Questões de "idea general del texto".',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Sintetiza exatamente a tese do texto (parágrafos 1, 2 e 4): rendimento competitivo, desenvolvimento técnico e tratamento de lesões.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'O texto não afirma que os melhores atletas consultam psicólogos regularmente; fala de treino mental praticado diariamente.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Exagero não presente no texto: não a coloca como "la mejor estrategia" absoluta para ganhar campeonatos.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Alcaraz é apenas um exemplo de apoio (parágrafo 3), não a ideia central do artigo.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Reduz o artigo a uma "metáfora mensurável", ignorando a tese principal sobre rendimento e lesões.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura direta do Texto I de Espanhol (UFRR 2026).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q65-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Classes de Palavras em Espanhol',
    questionType: 'es-morfologia-classes-palavras',
    methodTitle: 'Classificação Morfológica Contextual em Espanhol',
    decisiveConcept:
      'Em "la reciente final", "consiguió remontar", "el propio Alcaraz", "de su físico" e "una cualidad", tem-se respectivamente adjetivo, verbo, artículo, posesivo e sustantivo.',
    quickSolution:
      'Analisando no contexto do §3: *reciente* qualifica *final* (**adjetivo**); *remontar* está no infinitivo (**verbo**); *el* acompanha *Alcaraz* (**artículo** masculino sem acento); *su* indica posse (**posesivo**); *cualidad* nomeia atributo (**sustantivo**) (**Alternativa A**).',
    macete: {
      title: 'Atenção ao "el" sem acento',
      strategy:
        'Em espanhol, **el** (sem til) antes de substantivo/expressão nominal é **artículo**; só **él** (com acento) é *pronombre*. Só esse contraste já elimina a C!',
      whenToUse: 'Questões de classificação gramatical de palavras destacadas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: 'reciente (adjetivo), remontar (verbo), el (artículo), su (posesivo), cualidad (sustantivo).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '"reciente" não é pronome nem "remontar" é demonstrativo.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '"el" sem acento é artigo definido (pronombre seria "él"), e "su" é possessivo, não substantivo.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '"remontar" é verbo no infinitivo, não pronome.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"reciente" é adjetivo (não substantivo) e "su" é possessivo (não artigo).',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise morfossintática direta no parágrafo 3 do Texto I.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q66-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Verbos Irregulares em Espanhol',
    questionType: 'es-verbos-irregulares-ditongacao',
    methodTitle: 'Irregularidade Vocálica no Presente (e→i e o→ue)',
    decisiveConcept:
      '"Rinde" (de rendir: e→i) e "suele" (de soler: o→ue) sofrem alteração vocálica na raiz, sendo ambos verbos irregulares.',
    quickSolution:
      'Nos pares listados, apenas a **Alternativa C** traz **dois verbos irregulares**: **rinde** (de *rendir*, com fechamento vocálico $e \\to i$) e **suele** (de *soler*, com ditongação $o \\to ue$). Nas demais opções há pelo menos um verbo totalmente regular (**Alternativa C**).',
    macete: {
      title: 'Teste rápido pelo infinitivo',
      strategy:
        'Tire a terminação e olhe a vogal da raiz no presente: *r**e**ndir → r**i**nde* ($e\\to i$) e *s**o**ler → s**ue**le* ($o\\to ue$). Ambos mudaram o radical! Já *decidir, remontar, hablar, referir (no imperfeito refería), entrenar e parecer (3ª pessoa parece)* mantêm o radical intacto.',
      whenToUse: 'Identificação de pares de verbos irregulares em espanhol.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Tanto "decidir" (decide) quanto "remontar" são verbos regulares.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '"consiguió" (conseguir) é irregular, mas "habló" (hablar) é perfeitamente regular.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation: 'Ambos são irregulares: "rendir" fecha e→i ("rinde") e "soler" ditonga o→ue ("suele").',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '"entrenar" (entrena) é verbo regular em -ar (e refería é regular no pretérito imperfeito).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"sintiendo" (sentir) é irregular no gerúndio, mas "parece" (3ª sing.) segue radical regular (parecer só altera na 1ª sing. parezco).',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Morfologia verbal conforme a Real Academia Española (RAE).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q67-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Compreensão de Texto em Espanhol',
    questionType: 'es-compreensao-biografia-quino',
    methodTitle: 'Síntese Biográfica e Fator Determinante da Trajetória',
    decisiveConcept:
      'Quino decidiu abandonar a Escola de Belas Artes, mudou-se determinadamente aos 18 anos para Buenos Aires e persistiu por 3 anos de dificuldades econômicas até publicar seus desenhos.',
    quickSolution:
      'O texto destaca a determinação precoce de Quino, sua mudança para Buenos Aires em busca de editor e a resistência durante três anos de penúrias financeiras — evidenciando que a **perseverança e a busca de oportunidades** foram decisivas (**Alternativa B**).',
    macete: {
      title: 'Leitura contrastiva nas biografias curtas',
      strategy:
        'Cheque marcadores temporais e causais no texto: *infancia* (3 anos com o tio, não Belas Artes aos 13), *abandonó* Belas Artes, *tres años de penurias* (logo não foi imediato). Sobra B.',
      whenToUse: 'Questões de ideia principal em biografias.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Ele ingressou aos 13 anos (não na infância inicial) e abandonou a escola cansado de desenhar ânforas e gessos.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Traduz fielmente o núcleo dos parágrafos 2 e 3 ("determinado firmemente", busca por editor e superação de 3 anos de dificuldades).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Passou três anos de dificuldades econômicas antes de realizar o sonho.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'O texto não menciona publicação prévia em jornais europeus.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Contradiz o parágrafo 3, que ressalta os três anos de penúrias econômicas.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura direta do Texto II de Espanhol (biografia de Quino).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q68-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Vocabulário e Semântica',
    questionType: 'es-sinonimos-contextuais',
    methodTitle: 'Substituição Sinonímica sem Perda de Sentido',
    decisiveConcept:
      '"Anotado" nos registros civis significa "registrado"; "penurias" econômicas significa privações materiais ("indigencias").',
    quickSolution:
      'No §1, *es anotado el 17 de agosto* refere-se ao registro oficial (**registrado**). No §3, *penurias económicas* indica escassez severa de recursos (**indigencias**), enquanto todas as outras opções contêm antônimos (*abundancias, profusiones, holguras*) ou verbos incompatíveis (*sacado*) (**Alternativa B**).',
    macete: {
      title: 'Corte instantâneo pelo segundo termo (antônimos)',
      strategy:
        '"Penurias" significa falta/pobreza. Só **indigencias** (B) e **estrecheces** (C) têm sentido de escassez; A (*abundancias*), D (*profusiones*) e E (*holguras* = folgas) são **antônimos**! Entre B e C, *sacado* significa retirado/tirado, nunca *anotado* (**B**).',
      whenToUse: 'Questões de pares sinonímicos.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"abundancias" é o oposto exato de "penurias", e "glosado" significa comentado/anotado à margem.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: '"registrado" equivale a "anotado" em certidão e "indigencias" equivale a "penurias" (privação extrema).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '"sacado" significa retirado/extraído, incompatível com "anotado en los registros".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Duplo erro: "desposeído" (desapossado) e "profusiones" (abundância).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"holguras" significa folga/abundância financeira.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise lexical conforme dicionário da RAE.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q69-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Tempos e Modos Verbais',
    questionType: 'es-tempos-verbais-preterito-indefinido',
    methodTitle: 'Identificação do Pretérito Perfecto Simple (Indefinido)',
    decisiveConcept:
      'Em espanhol, forma verbal simples terminada em "-ió" (3ª pessoa sing. da 2ª/3ª conjugação) é Pretérito Perfecto Simple (Indefinido) do Modo Indicativo.',
    quickSolution:
      'A forma **recibió** (de *recibir*, 3ª pessoa do singular) expressa ação passada concluída em forma verbal simples do indicativo — classificada na gramática espanhola como **pretérito perfecto simple del modo indicativo** (**Alternativa D**).',
    macete: {
      title: 'Tabela-relâmpago dos pretéritos em espanhol',
      strategy:
        'Uma palavra só em **-ó / -ió** (habló, **recibió**) = **pretérito perfecto simple** (nosso pretérito perfeito simples). Duas palavras (*ha recibido*) = *perfecto compuesto*; *había recibido* = *pluscuamperfecto*; *-iera/-iese* = *imperfecto subjuntivo*.',
      whenToUse: 'Qualquer questão morfológica sobre tempos passados em espanhol.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'O pretérito imperfeito do subjuntivo seria "recibiera" ou "recibiese".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'É um verbo flexionado, nunca substantivo.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'O pretérito perfeito composto exigiria auxiliar "haber" ("ha recibido").',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Forma simples de ação pontual acabada no passado: pretérito perfecto simple (indefinido), 3ª pessoa singular do indicativo.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'O plus-que-perfeito exigiria forma composta ("había recibido").',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Nomenclatura gramatical oficial da RAE (Nueva Gramática).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q70-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Recursos Estilísticos',
    questionType: 'es-recursos-estilisticos-neologismo',
    methodTitle: 'Criação Poética de Palavras Novas (Neologismo)',
    decisiveConcept:
      'Cunhar um verbo inexistente no léxico ("istmarse" a partir do substantivo "istmo") é um exemplo típico de neologismo literário (muito característico de César Vallejo).',
    quickSolution:
      'O enunciado informa que o poeta **cria** o verbo *"istmarse"* a partir do substantivo *"istmo"*. A criação poética de uma nova palavra/acepção lexical constitui o recurso do **Neologismo** (**Alternativa A**).',
    macete: {
      title: 'Etimologia direta: neo + logos',
      strategy:
        '"O poeta **cria** o verbo..." $\\implies$ *neo* (novo) + *logos* (palavra) = **Neologismo (A)**.',
      whenToUse: 'Questões literárias sobre invenção vocabular.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: 'Criação de nova palavra na língua a partir de base existente (istmo → istmarse).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Hipérbole é exagero semântico, não criação lexical.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Pleonasmo é repetição enfática ou redundante de sentido.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Apócope é supressão de fonema/sílaba final (como grande → gran).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Eufonia refere-se à agradabilidade sonora, não à derivação inédita de verbo.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise estilística do poema "Los anillos fatigados" de César Vallejo.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q71-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Morfossintaxe em Espanhol',
    questionType: 'es-apocope-pronome-adjetivo',
    methodTitle: 'Reconhecimento de Apócope + Pronome + Adjetivo',
    decisiveConcept:
      '"Gran" é a forma apocopada de "grande" diante de substantivo singular; "te" em "a ti yo te señalo" é pronome pessoal átono; "deicida" modifica o substantivo "dedo" (adjetivo).',
    quickSolution:
      'Analisando as três palavras no Texto IV: **gran** diante de *beso* perdeu a sílaba final de *grande* (**caso de apócope**); **te** em *a ti yo te señalo* retoma o interlocutor (**pronombre personal** átono); e **deicida** caracteriza o substantivo *dedo* (**adjetivo**) (**Alternativa C**).',
    macete: {
      title: 'Olho clínico para "gran" em provas de espanhol',
      strategy:
        'Se aparecer **gran, buen, mal, algún, primer** na lista, lembre logo de **apócope**! Só uma alternativa traz apócope na 1ª posição (**C**).',
      whenToUse: 'Questões com formas curtas antepostas a substantivos em espanhol.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"gran" não é conjunção e "deicida" não é verbo no imperativo.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '"gran" é adjetivo apocopado (não advérbio), e "te" não é conjunção.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation: 'gran (apócope de grande), te (pronome pessoal complemento) e deicida (adjetivo qualificador de "dedo").',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Em "a ti yo te señalo", "te" não é reflexivo (o sujeito é "yo" e o objeto é "tú").',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Inverte as classificações logo no primeiro termo.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise morfossintática exata no poema de Vallejo.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q72-es',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Espanhol',
    topic: 'Análise Textual e Concordância',
    questionType: 'es-concordancia-nucleo-sujeito',
    methodTitle: 'Concordância com Sujeito Coletivo/Partitivo ("un grupo de...")',
    decisiveConcept:
      'Em "un grupo de científicos... ha conseguido", o verbo no singular concorda com o núcleo do sujeito "grupo", não com o nome próprio "Ojosnegros" da oração relativa intercalada.',
    quickSolution:
      'Pede-se a afirmação **INCORRETA**. Na oração *"Un grupo de científicos del IBEC, entre los que está Ojosnegros, ha conseguido grabar"*, o núcleo do sujeito de *"ha conseguido"* é **grupo** (singular), e **não** o substantivo próprio *Ojosnegros* (que integra apenas a oração explicativa intercalada entre vírgulas) (**Alternativa D**).',
    macete: {
      title: 'Isole a oração entre vírgulas',
      strategy:
        'Leia pulando o trecho entre vírgulas: *"Un grupo de científicos del IBEC ha conseguido grabar"*. Fica óbvio que quem *ha conseguido* é **un grupo**, nunca *Ojosnegros*!',
      whenToUse: 'Questões de concordância verbal com oração intercalada entre vírgulas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Verdadeira: o texto inicia citando textualmente Samuel Ojosnegros entre aspas (discurso direto).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Verdadeira: o texto afirma que o embrião se desenvolve "oculto... allí donde los ojos de la ciencia no alcanzan a ver".',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Verdadeira: o texto qualifica essa etapa como "una incógnita" / "misterioso proceso".',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'É a afirmativa INCORRETA (gabarito): "ha conseguido" concorda no singular com "un grupo", jamais com "Ojosnegros" (sujeito apenas da intercalada "entre los que está Ojosnegros").',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Verdadeira: "como si + subjuntivo imperfeito (estuviera)" marca comparação hipotética/irreal.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise sintática de concordância verbal e leitura do Texto V.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= INGLÊS (Q64–Q72) =================
  {
    questionId: 'ufrr-2026-q64-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Formação de Palavras (Word Formation)',
    questionType: 'en-word-formation-noun-to-verb',
    methodTitle: 'Derivação Regressiva Nominal→Verbal (Emancipation/Proclamation)',
    decisiveConcept:
      'Substantivos em "-ation" derivam de verbos reais da língua: emancipation ← to emancipate; proclamation ← to proclaim (atenção: não existe "to proclamate" nem "to emasculate" nesse contexto).',
    quickSolution:
      'Os verbos correspondentes aos quatro substantivos são: *emancipation* $\\to$ **to emancipate**, *proclamation* $\\to$ **to proclaim**, *segregation* $\\to$ **to segregate**, *discrimination* $\\to$ **to discriminate** (**Alternativa D**).',
    macete: {
      title: 'Falso sufixo "-ate" no distrator clássico',
      strategy:
        'Cuidado com cognatos falsos de derivação: *proclamation* vem de **to proclaim** (não *proclamate*); e não confunda *emancipate* (libertar) com *emasculate* (castrar/enfraquecer)!',
      whenToUse: 'Questões de *Word Formation* envolvendo substantivos em *-ation*.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"to proclamate" não existe em inglês padrão (o verbo é "to proclaim").',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Erra duplo: "to emasculate" (enfraquecer) e "to proclamate" (inexistente).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '"to emasculate" não corresponde a "emancipation" ("to emancipate").',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Todos os quatro verbos existem e são a base lexical exata dos substantivos do discurso.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"to emasculate" e "to segregain" são incorretos.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Morfologia derivacional exata em inglês (Oxford/Merriam-Webster).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q65-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Reading Comprehension',
    questionType: 'en-reading-mlk-dream',
    methodTitle: 'Leitura de Metáfora ("Table of Brotherhood")',
    decisiveConcept:
      'Sentar-se juntos à "mesa da fraternidade" simboliza convivência pacífica e igualitária entre descendentes de antigos escravizados e descendentes de antigos escravizadores.',
    quickSolution:
      'No 4º parágrafo, *"sit down together at the table of brotherhood"* significa que os filhos de ex-escravos e os filhos de ex-donos de escravos consigam **conviver em harmonia e fraternidade** (*get along and coexist*), sem qualquer restrição de local de nascimento ou transação comercial (**Alternativa D**).',
    macete: {
      title: 'Literalidade falsa vs. sentido metafórico',
      strategy:
        'A banca cria distratores literais absurdos ("mudar cor das colinas", "comprar mesas", "represar o rio") e um distrator com restrição inventada ("only if born in Georgia"). A paráfrase sem restrições falsas é **D**.',
      whenToUse: 'Questões de interpretação de linguagem figurada em inglês.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Leitura absurdamente literal das "red hills of Georgia".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Interpreta literalmente "table" como compra de móveis para melhorar a economia.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Adiciona restrição falsa ("only if they were born in Georgia").',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Parafraseia fielmente a metáfora da fraternidade e coexistência racial.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Interpretação literal absurda do oásis no Mississipi.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Interpretação fiel do trecho famoso de Martin Luther King Jr.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q66-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Prepositions',
    questionType: 'en-prepositions-collocations',
    methodTitle: 'Regência Preposicional: Swelter WITH + Heat OF + Transform INTO',
    decisiveConcept:
      'As colocações exatas são: "sweltering WITH the heat OF...", repetir o paralelismo "WITH / OF", e transformação física/metafórica usa "transformed INTO an oasis OF...".',
    quickSolution:
      'Preenchendo o 5º parágrafo: *sweltering **with** the heat **of** injustice, sweltering **with** the heat **of** oppression, will be transformed **into** an oasis **of** freedom and justice* (**Alternativa B**).',
    macete: {
      title: 'Regência de "transformed" mata a questão',
      strategy:
        'Em inglês, algo se transforma **em** outra coisa com a preposição **into** (*transformed **into** an oasis*). Olhe a 5ª lacuna nas alternativas: apenas a **B** traz `into`!',
      whenToUse: 'Questões de preenchimento múltiplo de preposições.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Usa "to" no lugar de "of" após "heat" e "of" na 5ª lacuna em vez de "into".',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Reproduz integralmente a regência original do discurso: with / of / with / of / into / of.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Incompatível semanticamente ("heat without injustice", "transformed as...").',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Confunde "as" (como) com "with"/"of"/"into".',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Usa "without" invertendo o sentido do texto e erra as últimas preposições.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Verificado diretamente no texto original histórico do discurso de 1963.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q67-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Synonyms & Vocabulary',
    questionType: 'en-vocabulary-synonyms-chain',
    methodTitle: 'Sinônimos por Contexto e Eliminação em Cadeia',
    decisiveConcept:
      'trinkets = knickknacks (bugigangas/lembrancinhas); utensils = tools (utensílios/ferramentas); neutral = unbiased (imparcial); peal = chime (badalar/soar).',
    quickSolution:
      'Cada palavra sublinhada encontra seu sinônimo exato na **Alternativa B**: *trinkets* = **knickknacks** (pequenos adornos); *utensils* = **tools**; *neutral* = **unbiased** (imparcial); e *peal* = **chime** (badalar dos sinos) (**Alternativa B**).',
    macete: {
      title: 'Ataque pela palavra mais conhecida: "neutral"',
      strategy:
        'A 3ª palavra é **neutral** (imparcial). Nas opções: A=*avowed* (declarado), C=*partial* (oposto!), D=*indifferent* (não se importa, distinto de imparcial em julgamento), E=*negative* (oposto). Só **unbiased** (B) significa sem viés = neutro!',
      whenToUse: 'Questões de múltiplos sinônimos em sequência.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"flags" não equivale a "trinkets", nem "avowed" equivale a "neutral".',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Knickknacks, tools, unbiased e chime correspondem semanticamente aos quatro termos no contexto.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '"partial" é exatamente o antônimo de "neutral".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '"indifferent" indica desinteresse (apatia), diferente de imparcialidade ("neutral/unbiased"), e "reminders"/"machine" não servem.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"negative" contradiz "neutral" e "stuffs" no plural é agramatical/inadequado.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise lexical contextual em inglês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q68-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Collocations: Make vs Do',
    questionType: 'en-collocations-make-vs-do',
    methodTitle: 'Diferença Funcional entre DO (Ação/Tarefa) e MAKE (Criar/Mistakes/Coffee)',
    decisiveConcept:
      'Use DO para ações gerais, trabalho/fábrica e tarefas domésticas ("I will do it", "What do they do?", "clean -> done it") e MAKE para erros ("make mistakes") e preparar alimentos/bebidas ("making coffee").',
    quickSolution:
      'Preenchendo as lacunas: (1) *I will **do** it*; (2) ***make** the same mistakes*; (3) *What do they **do** in that factory?*; (4) *I am **making** some coffee*; (5) *Have you **done** it?* (limpar o banheiro) $\\implies$ **do, make, do, making, done** (**Alternativa E**).',
    macete: {
      title: 'Colocações fixas obrigatórias',
      strategy:
        'Nunca se diz *"do mistakes"* nem *"do coffee"* — sempre **make mistakes** e **make coffee**. E para retomar verbo já citado (*open the window* / *clean the bathroom*) ou perguntar a atividade (*What do they do?*), usa-se **do / done** (**E**).',
      whenToUse: 'Qualquer questão clássica de *Make vs. Do*.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Na 3ª frase ("What do they ___ in that factory?"), pergunta-se o que produzem/fazem genericamente: "do", não "make".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Erra "do mistakes", "doing coffee" e "made it" (para tarefa de limpeza).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Retomar ação ("I will ___ it" para abrir janela) exige "do", não "make".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Erra a 1ª, a 2ª ("do mistakes") e a 5ª ("made it").',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Todas as cinco colocações e tempos verbais estão gramaticalmente corretos.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Colocações padrão da língua inglesa.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q69-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Main Idea & Reading Comprehension',
    questionType: 'en-reading-main-idea',
    methodTitle: 'Distinção entre Ideia Principal e Detalhe Específico',
    decisiveConcept:
      'A ideia central ("topic sentence") aparece logo na abertura: a Terra possui vários biomas principais (desertos, florestas, campos, tundra e aquáticos).',
    quickSolution:
      'O texto apresenta uma visão panorâmica dos biomas terrestres e aquáticos do planeta — ideia resumida logo na 2ª frase (*"Earth has several major biomes"*) (**Alternativa E**). As opções A, B e D citam apenas detalhes isolados, e C traz dado inexistente no texto.',
    macete: {
      title: 'Detalhe vs. Guarda-chuva',
      strategy:
        'Sempre escolha a alternativa **guarda-chuva** que cobre todos os parágrafos/exemplos do texto (**Earth has many different biomes**), descartando exemplos pontuais (desertos, chuvas) e informações não citadas (Brasil).',
      whenToUse: 'Questões de "What is the main idea of this text?".',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'É apenas um detalhe específico sobre desertos.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Informação ausente/parcial: o texto diz apenas que desertos têm temperaturas extremas.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'O texto não menciona o Brasil.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'É apenas um detalhe pontual entre os tipos de bioma.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Captura a tese estruturadora do parágrafo inteiro ("Earth has several major biomes").',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura direta do Text II de Inglês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q70-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Phrasal Verbs',
    questionType: 'en-phrasal-verbs-get-about',
    methodTitle: 'Significado dos Phrasal Verbs com GET',
    decisiveConcept:
      '"Get about" (quando aplicado a notícias/rumores) significa espalhar-se, circular e tornar-se amplamente conhecido ("become well known").',
    quickSolution:
      'Entre os phrasal verbs com *get*, **get about** em *"how the story got about that she was leaving"* significa que a história **circulou / tornou-se conhecida** pelo público (**Alternativa E**).',
    macete: {
      title: 'Mapa dos phrasal verbs com GET da questão',
      strategy:
        '*get above oneself* = achar-se superior; *get across* = fazer entender; *get after* = perseguir; *get around* = contornar/driblar; **get about (news/story) = espalhar-se / ficar conhecido (E)**.',
      whenToUse: 'Questões de phrasal verbs polissêmicos com *get*.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"get above himself" significa tornar-se arrogante/presunçoso.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: '"get across" significa transmitir com clareza / fazer-se compreender.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: '"get after" significa ir atrás / perseguir ou cobrar alguém.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '"get around" significa driblar ou contornar um obstáculo (aqui, a censura).',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: '"get about" (em relação a notícias/histórias) significa circular e tornar-se amplamente conhecido.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Verificado em dicionários idiomáticos (Cambridge / Oxford Learners).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q71-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Morphosyntax & Comic Strip Reading',
    questionType: 'en-adverbial-use-of-adjective',
    methodTitle: 'Uso Adverbial Coloquial de "Quick" no Discurso Direto',
    decisiveConcept:
      '"Quick" é tipicamente um adjetivo ("a quick look"), mas em falas urgentes ("Quick! Make a wish!" = faça rapidamente) funciona como advérbio de modo (flat adverb).',
    quickSolution:
      'No primeiro balão (*"Terry! Quick! Make a wish!"*), a palavra **quick** modifica a ação imperativa de fazer o pedido (equivalendo a *quickly* = rapidamente). Embora sua classe canônica seja **adjetivo**, na fala coloquial da tirinha atua como **advérbio** (**Alternativa A**).',
    macete: {
      title: 'Classe canônica + função na frase',
      strategy:
        'Pergunte: "Quick" dá característica a algum substantivo aqui? Não! Está ordenando *como/quando* agir (**Make a wish quick[ly]**) $\\implies$ função de **advérbio** (**A**).',
      whenToUse: 'Questões sobre *flat adverbs* (quick, fast, slow, loud) em falas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: '"quick" é normalmente adjetivo, mas atua adverbialmente na fala urgente ("rapidamente!").',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Inverte as classes: "quick" não é tipicamente um advérbio.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Não funciona como substantivo (noun) no diálogo.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: '"quick" não é normalmente um substantivo neste contexto.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Não é comumente advérbio nem atua como verbo.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise morfossintática do balão 1 da tirinha ("Terry! Quick! Make a wish!").',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q72-en',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Inglês',
    topic: 'Humor & Pragmatics',
    questionType: 'en-comic-humor-irony',
    methodTitle: 'Construção do Humor por Ironia Anacrônica em Tirinhas',
    decisiveConcept:
      'O efeito cômico combina um evento científico trágico (o meteoro da extinção dos dinossauros) com a ingenuidade infantil de pedir "mil desejos" achando que é uma estrela cadente comum.',
    quickSolution:
      'Os dois dinossauros observam o meteoro prestes a causar a extinção em massa; o humor nasce do contraste irônico com o pedido ingênuo de Terry ao confundir o astro destrutivo com uma estrela cadente comum e desejar *"a thousand wishes"* (**Alternativa E**).',
    macete: {
      title: 'Quebra de expectativa visual + verbal',
      strategy:
        'Em tirinhas, o humor exige unir a **imagem** (asteroide gigantesco caindo sobre dinossauros) ao **texto** (pedido infantil de mil desejos). Apenas **E** integra a extinção dos dinossauros com o pedido ingênuo!',
      whenToUse: 'Questões de humor/ironia em charges e tirinhas.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Não há multiplicação real de estrelas cadentes nem "rei dos dinossauros".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Confunde análise gramatical da questão anterior com causa do humor.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Terry não demorou para pensar; ele foi esperto/ingênuo ao pedir mil desejos diante da catástrofe.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Personificação em quadrinhos é convenção do gênero, não a piada.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Explica precisamente a ironia entre o evento de extinção e a ingenuidade do desejo.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura visual e pragmática direta da tirinha `en-t3-terry-comic.jpg`.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= FRANCÊS (Q64–Q72) =================
  {
    questionId: 'ufrr-2026-q64-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Compréhension écrite',
    questionType: 'fr-comprehension-directe',
    methodTitle: 'Localização de Informação Explícita no Título/Lead',
    decisiveConcept:
      'O título e o 1º parágrafo informam explicitamente que Yann Barthès e Quotidien deixarão de convidar políticos ao estúdio ("ne vont plus inviter de politiques").',
    quickSolution:
      'Tanto no título quanto no 1º parágrafo explicita-se a decisão de **não convidar mais representantes políticos** (*"arrêter de recevoir des politiques sur son plateau"*), embora o programa continue comentando política (**Alternativa B**).',
    macete: {
      title: 'Cuidado com "ne plus parler" vs "ne plus inviter"',
      strategy:
        'O último parágrafo diz claramente *"Et de politique dans Quotidien, on en parlera beaucoup"*. Logo, a letra **A** (*não falar mais de política*) é pegadinha clássica — eles apenas não **convidam** mais (**B**).',
      whenToUse: 'Questões objetivas sobre notícias em francês.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Contradiz o final do texto, onde se afirma que continuarão falando muito de política (sobretudo americana).',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Tradução direta do título ("ne vont plus inviter de politiques") e do 1º parágrafo.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'O programa está retornando ao ar ("fait sa rentrée"), não encerrando.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Programa esportivo não é mencionado no texto.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Invenção sem relação com o texto.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Localização literal no título e §1 do Texte I.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q65-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Conjugaison et Grammaire',
    questionType: 'fr-futur-proche-present-indicatif',
    methodTitle: 'Morfologia do Auxiliar Aller no Futur Proche (Presente + Infinitivo)',
    decisiveConcept:
      'Na construção "ne vont plus inviter", o verbo conjugado "vont" está no presente do indicativo (3ª pessoa plural de aller) em forma negativa ("ne... plus").',
    quickSolution:
      'Embora a locução inteira expresse futuro próximo (*futur proche*), o verbo finito **vont** (de *aller*) está conjugado no **presente do indicativo**, acompanhado da negação **ne ... plus** (**Alternativa D**).',
    macete: {
      title: 'Olhe o verbo flexionado (vont)',
      strategy:
        '*Futur simple* de *aller* seria **iront**; *conditionnel* seria **iraient**; *imparfait* seria **allaient**; *subjonctif* seria **aillent**. Como está **vont** + **ne... plus**, só pode ser **presente do indicativo na forma negativa (D)**.',
      whenToUse: 'Questões gramaticais sobre perífrases em francês.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Além de estar em forma negativa ("ne... plus"), o futuro simples seria "n\'inviteront plus".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Condicional passado seria "auraient invité".',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Não está no imperfeito ("allaient") nem na voz passiva.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Identifica corretamente "vont" (présent de l\'indicatif) dentro da negação "ne ... plus".',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Subjuntivo de aller seria "aillent".',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conjugação exata de aller (3ª pessoa plural do presente = vont).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q66-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Analyse de Discours',
    questionType: 'fr-attitude-auteur-ton',
    methodTitle: 'Identificação do Tom e Postura do Enunciador',
    decisiveConcept:
      'Barthès justifica o afastamento por cansaço diante da repetição mecânica ("inaudibles", "éléments de langage") e da falta de respeito às equipes, expressando decepção/desencanto.',
    quickSolution:
      'O apresentador expressa frustração e desilusão diante da postura dos políticos entrevistados — classificando seus discursos como *inaudibles*, previsíveis e desrespeitosos com os repórteres —, postura traduzida por **Déçue** (decepcionada) (**Alternativa B**).',
    macete: {
      title: 'Eliminação por polaridade e intensidade',
      strategy:
        '*Complaisante* (indulgente), *empathique* (empática) e *insouciante* (despreocupada) têm polaridade positiva ou neutra — impossível! Entre *déçue* (decepcionada, B) e *méprisante* (despreziva/hostil, D), ele ainda abre exceção a grandes figuras públicas e livros, apontando frustração (**déçue**, B).',
      whenToUse: 'Questões de atitude/tom do autor em língua estrangeira.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: '"Complaisante" significa tolerante/benevolente em excesso, o oposto do veto anunciado.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation: 'Reflete o desencanto explícito pela falta de respeito e de autenticidade dos entrevistados.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Não há empatia pelos políticos criticados.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Ainda que haja crítica dura às práticas midiáticas, o foco da fala ("je souhaite recevoir des personnes qui me respectent") expressa decepção e exigência de respeito, não desprezo generalizado (pois admite exceções).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: '"Insouciante" significa indiferente/despreocupado, incompatível com uma decisão editorial séria.',
      },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise semântica e discursiva do Texte I de Francês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q67-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Compréhension écrite',
    questionType: 'fr-comprehension-objectif-texte',
    methodTitle: 'Síntese dos Ateliers "Entre Les Lignes" na Guadalupe',
    decisiveConcept:
      'A jornalista atua pela associação especializada em educação midiática ("démêler le vrai du faux", regra dos 5W e checagem de outras fontes sem espalhar rumores).',
    quickSolution:
      'Os ateliers conduziram os alunos do ensino médio a distinguir fatos de rumores ("démêler le vrai du faux"), aplicar os 5 W jornalísticos e complementar informações com outras fontes — **sensibilizando sobre desinformação e verificação de fontes** (**Alternativa E**).',
    macete: {
      title: 'Conecte o texto ao foco da associação',
      strategy:
        'A reportagem cita expressamente *"éducation aux médias et à l\'information"*, *"démêler le vrai du faux"* e *"sans colporter la rumeur"* = **désinformation et vérification des sources (E)**.',
      whenToUse: 'Questões de objetivo principal em reportagens educacionais.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'O foco descrito foi educação midiática, entrevista de rádio e checagem de boatos, não redação de artigos.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Não eram oficinas técnicas de uso de redes sociais.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Guadalupe é apenas o local onde ocorreu o projeto.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Nenhuma relação com preparação para provas de fim de ano.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Resume diretamente as práticas descritas ao longo do Texte II.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura direta do Texte II de Francês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q68-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Analyse Syntaxique',
    questionType: 'fr-syntaxe-pronoms-toniques-apposition',
    methodTitle: 'Pronome Tônico "Nous" como Aposição de Ênfase ao Sujeito "On"',
    decisiveConcept:
      'Na língua falada em francês, isola-se o pronome tônico entre vírgulas ("on peut savoir, nous, ...") para reforçar/enfatizar o sujeito ("on").',
    quickSolution:
      'Na pergunta *"Comment on peut savoir, **nous**, que ce n\'est pas vrai ?"*, o sujeito gramatical já é o pronome **on**; **nous** aparece entre vírgulas como **aposição enfática para reforçar o sujeito** (**Alternativa C**).',
    macete: {
      title: 'Vírgulas duplas + pronome tônico = ênfase',
      strategy:
        'Se o verbo já tem sujeito (*on*), um pronome tônico isolado entre vírgulas (*, nous, / , moi, / , eux,*) nunca é o sujeito nem objeto — é **reforço/aposição (C)**.',
      whenToUse: 'Análise sintática de pronomes tônicos em francês.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'O objeto direto de "savoir" é a oração "que ce n\'est pas vrai".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'O sujeito gramatical do verbo "peut" é "on".',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation: 'Pronome tônico deslocado entre vírgulas em aposição enfática ao sujeito "on".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Não expressa causa.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Não há preposição regendo "nous" como objeto indireto.',
      },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise sintática francesa padrão (pronom tonique détaché / apposé).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q69-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Analyse Syntaxique',
    questionType: 'fr-syntaxe-sujet-phrase',
    methodTitle: 'Identificação do Sujeito Praticante do Verbo ("ont participé")',
    decisiveConcept:
      'Perguntando "Qui est-ce qui a participé à des ateliers ?", a resposta exata é o grupo nominal "des lycéens du lycée professionnel Louis-Delgrès" (sujeito).',
    quickSolution:
      'Na frase *"En Guadeloupe, **des lycéens du lycée professionnel Louis-Delgrès** ont participé à des ateliers"*, *"En Guadeloupe"* é o adjunto de lugar e o grupo destacado é quem pratica e concorda com *"ont participé"* — sendo o **sujeito do verbo** (**Alternativa E**).',
    macete: {
      title: 'Teste do "Qui est-ce qui...?"',
      strategy:
        'Aplique imediatamente antes do verbo: *Qui est-ce qui ont participé?* $\\implies$ *des lycéens...* = **Sujet du verbe (E)**.',
      whenToUse: 'Identificação de funções sintáticas básicas em francês.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'O adjunto adverbial de lugar é "En Guadeloupe".',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Vem antes do verbo concordando com ele no plural ("ont participé").',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'O complemento indireto do verbo é "à des ateliers".',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'A frase está na voz ativa, não na passiva.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation: 'Núcleo "lycéens" concorda com o verbo na 3ª pessoa do plural.',
      },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise sintática direta em francês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q70-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Compréhension écrite',
    questionType: 'fr-comprehension-risque-energetique',
    methodTitle: 'Relação Título–Corpo sobre Insegurança Energética e Democracia',
    decisiveConcept:
      'Desde o título ("Comment l’insécurité énergétique fragilise les démocraties") até os exemplos da crise do petróleo e invasão da Ucrânia, o risco central é a vulnerabilidade/instabilidade política oriunda da dependência energética.',
    quickSolution:
      'O artigo mostra como choques de oferta externa (crise de 1970 e invasão da Ucrânia em 2022) expõem a vulnerabilidade de países importadores de petróleo e gás — o que corresponde diretamente à **instabilidade política causada pela dependência energética** (**Alternativa A**).',
    macete: {
      title: 'Use o título como bússola',
      strategy:
        'O título já crava o risco principal: *Comment l’insécurité énergétique **fragilise les démocraties***. Basta casar com **A** (*instabilité politique causée par la dépendance énergétique*).',
      whenToUse: 'Questões de ideia/risco principal com título informativo explícito.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation: 'Corresponde diretamente ao título e à tese central de Laurence Tubiana sobre dependência externa e choque de preços.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'O texto menciona alta nos preços do gás/energia, não de salários.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Nenhuma explosão nuclear é cogitada no texto.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation: 'Não menciona falência de petroleiras.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Ao contrário, mostra urgência em importar GNL do Catar e dos EUA.',
      },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Leitura direta do título e corpo do Texte III de Francês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q71-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Structure Argumentative',
    questionType: 'fr-structure-argumentative-autorite',
    methodTitle: 'Identificação de Argumento de Autoridade + Causa e Consequência',
    decisiveConcept:
      'O artigo apoia-se em fonte especializada (Laurence Tubiana / ENS / dados do Insee) e encadeia causas (choque do petróleo/invasão da Ucrânia) às suas consequências (busca por nuclear, eficiência e GNL).',
    quickSolution:
      'A organização do texto combina **argumento de autoridade** (entrevista com a economista/diplomata Laurence Tubiana e dados estatísticos do Insee) com encadeamento **causa–consequência** (crises externas gerando alta de preços e reorientação da matriz energética) (**Alternativa D**).',
    macete: {
      title: 'Gênero sério elimina opções cômicas/fictícias',
      strategy:
        'Reportagem do *Le Monde* sobre crise energética com dados do *Insee* e entrevista especializada nunca tem *narration fictive*, *comparaison comique* ou *ironie systématique*. Sobra **D** imediatamente!',
      whenToUse: 'Questões sobre tipologia e estrutura argumentativa de reportagens.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'Há forte encadeamento lógico causal entre eventos históricos e políticas energéticas.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Trata-se de entrevista jornalística factual, não ficção.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'Não há comicidade no artigo.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Cita autoridades (Laurence Tubiana, Insee) e relaciona causas (crise de 1970, invasão da Ucrânia) a consequências (nuclear, GNL).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'O tom do artigo é expositivo-analítico, não irônico.',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise estrutural do Texte III de Francês.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2026-q72-fr',
    examId: EXAM_ID,
    subject: 'Língua Estrangeira',
    subSubjectGroup: 'Francês',
    topic: 'Morphosyntaxe — Forme Interrogative',
    questionType: 'fr-interrogative-inversion-sujet-verbe',
    methodTitle: 'Inversão Verbo-Sujeito com "-t-" Eufônico na Interrogação',
    decisiveConcept:
      'Em francês, colocar o pronome sujeito após o verbo ligado por hífen ("menace-t-elle") — com "-t-" eufônico entre vogais — caracteriza a inversão sujeito-verbe na forma interrogativa.',
    quickSolution:
      'A expressão **« menace-t-elle »** apresenta o verbo no presente (*menace*) seguido do pronome sujeito posposto (*elle*) e da consoante eufônica **-t-** entre duas vogais: trata-se da **inversão sujeito-verbo na forma interrogativa** (**Alternativa D**).',
    macete: {
      title: 'Detectou "-t-il" ou "-t-elle"? É inversão interrogativa!',
      strategy:
        'Sempre que aparecer hífen + **-t-** + pronome (*a-t-il, pense-t-on, **menace-t-elle***), trata-se de **inversão sujeito-verbo à l\'interrogatif (D)** (o *-t-* evita o choque de duas vogais).',
      whenToUse: 'Questões morfossintáticas sobre frases interrogativas formais em francês.',
      caution:
        'Embora o trecho final do Texte III tenha sido cortado no caderno impresso antes dessa frase, a própria expressão dada no enunciado permite a análise gramatical completa.',
    },
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation: 'O imperativo não usa pronome sujeito "elle" posposto.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation: 'Não há auxiliar nem particípio passado.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation: 'A estrutura completa com "-t-elle" é especificamente uma inversão interrogativa, e a letra D identifica a construção morfossintática exata pedida pela banca.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation: 'Inversão clássica verbo-sujeito na pergunta direta com "-t-" eufônico.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation: 'Passé simple seria "menaça".',
      },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes:
      'Morfossintaxe francesa clássica (forme interrogative soutenue par inversion); nota editorial sobre o corte do fragmento no caderno preservada.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
