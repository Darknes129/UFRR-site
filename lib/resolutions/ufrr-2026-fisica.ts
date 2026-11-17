import type { LegacyQuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-04-10T12:00:00.000Z';

export const UFRR_2026_FISICA_RESOLUTIONS: LegacyQuestionResolution[] = [
  {
    questionId: 'ufrr-2026-q28',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Cinemática Vetorial e Velocidade Relativa',
    questionType: 'fis-cinematica-velocidade-relativa-rio',
    methodTitle: 'Composição Vetorial de Velocidades (Vc = Vcr + Vr)',
    questionInterpretation:
      'Chiquito (referencial fixo na margem) observa Cecíria remando uma canoa em um rio cuja correnteza tem módulo $V_r \\neq 0$. São dados os módulos $V_c$ (canoa em relação à margem), $V_r$ (rio em relação à margem) e $V_{cr}$ (canoa em relação à água/rio), pedindo-se a relação correta.',
    stepByStepSolution: [
      '1. Escreva a equação vetorial da **velocidade resultante** em relação à margem (Chiquito): $$\\vec{V}_c = \\vec{V}_{cr} + \\vec{V}_r.$$',
      '2. Teste a alternativa **A** ($V_{cr} = 0$): se a velocidade da canoa *em relação à água* for nula ($\\vec{V}_{cr} = \\vec{0}$), ou seja, Cecíria parar de remar/se movimentar na água, então: $$\\vec{V}_c = \\vec{0} + \\vec{V}_r = \\vec{V}_r.$$ Como $V_r \\neq 0$, a canoa é arrastada exatamente na direção e sentido da correnteza — logo, Chiquito verá sua amiga **descendo o rio**! (**A é CORRETA**).',
      '3. Cheque as demais como prova real:',
      '   - **B** e **C** confundem o módulo resultante $V_c$ (que é *já* a velocidade observada por Chiquito!) com $V_{cr}$ (velocidade relativa à água): se $V_c < V_r$, isso nada diz sobre o sentido (ela pode estar subindo devagar ou descendo mais devagar que a água ou até em travessia oblíqua).',
      '   - **D**: Se $V_c = 0$ (canoa parada em relação à margem), então $\\vec{V}_{cr} = -\\vec{V}_r \\implies V_{cr} = V_r \\neq 0$ (ela precisa remar rio acima com a mesma rapidez da correnteza para ficar parada!).',
      '   - **E**: Se $\\vec{V}_c$ e $\\vec{V}_r$ têm mesmo módulo e **sentidos contrários** ($\\vec{V}_c = -\\vec{V}_r$), então $\\vec{V}_{cr} = \\vec{V}_c - \\vec{V}_r = -2\\vec{V}_r$, cujo módulo é $V_{cr} = 2V_r \\neq 0$.',
    ],
    proposedAnswer: 'A',
    officialAnswer: 'A',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Traduza o símbolo fisicamente: $V_{cr} = 0$ significa "canoa parada **na água**" (sem remar). O que acontece com um barco solto em um rio com correnteza ($V_r \\neq 0$)? **Desce o rio!** Logo, **A** é imediatamente verdadeira.',
    shortcutApplicability:
      'Resolve instantaneamente qualquer questão conceitual de movimento relativo em rios ou esteiras rolantes.',
    shortcutLimitations:
      'Preste muita atenção aos **índices**: o enunciado chama de $V_c$ a velocidade *em relação ao observador na margem*, e não em relação à água ($V_{cr}$). Trocar esses dois é a armadilha das letras B, C, D e E.',
    universalMethod:
      'Em qualquer problema de velocidade relativa em rios/ventos: (1) nomeie os 3 referenciais (C = canoa, R = rio, T = terra/margem); (2) monte a cadeia de soma vetorial $\\vec{V}_{CT} = \\vec{V}_{CR} + \\vec{V}_{RT}$; (3) teste casos extremos ($V_{CR}=0$ ou $V_{CT}=0$) com a fórmula vetorial antes de decidir sobre módulos.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Se $V_{cr} = 0$, então $\\vec{V}_c = \\vec{V}_r$: a canoa move-se solidária à correnteza e desce o rio em relação a Chiquito.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$V_c$ é apenas o módulo da velocidade resultante em relação à margem; apenas saber que $V_c < V_r$ não garante que esteja subindo (pode, por exemplo, estar descendo com velocidade resultante menor ou remando contra a correnteza em outro ângulo).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Pelo contrário: se ela rema rio acima vencendo a correnteza de modo que $V_c > V_r$, estará subindo o rio; apenas a desigualdade de módulos sem sentido vetorial não fixa descida.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Para ficar parada em relação à margem ($V_c = 0$), precisa remar contra a correnteza com $V_{cr} = V_r \\neq 0$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Se $\\vec{V}_c = -\\vec{V}_r$, então $\\vec{V}_{cr} = \\vec{V}_c - \\vec{V}_r = -2\\vec{V}_r$, logo $V_{cr} = 2V_r \\neq 0$.',
      },
    ],
    commonTraps: [
      'Ler $V_c$ como "velocidade da remada em relação à água" e marcar B ou C achando que se $V_{remada} < V_r$ ela desce e se $> V_r$ ela sobe.',
      'Achar que se $V_c = 0$ na margem então a canoa não rema ($V_{cr} = 0$, letra D).',
    ],
    essentialKnowledge: [
      'Equação de Galileu para velocidades: $\\vec{V}_{\\text{corpo, solo}} = \\vec{V}_{\\text{corpo, meio}} + \\vec{V}_{\\text{meio, solo}}$.',
      'Velocidade é grandeza vetorial: módulo igual e sentidos opostos dobram a diferença ($V - (-V) = 2V$).',
    ],
    transferExercise: {
      prompt:
        'Um nadador nada contra a correnteza de um rio de velocidade $V_r = 1{,}5\\text{ m/s}$ e um observador na margem o vê subir o rio a $V_n = 0{,}5\\text{ m/s}$. Qual é o módulo da velocidade do nadador em relação à água ($V_{nr}$)?',
      hint: 'Considere o sentido rio acima como positivo: $\\vec{V}_n = +0{,}5\\text{ m/s}$ e $\\vec{V}_r = -1{,}5\\text{ m/s}$.',
      expectedAnswer: '$V_{nr} = 2{,}0\\text{ m/s}$.',
      justification:
        '$\\vec{V}_n = \\vec{V}_{nr} + \\vec{V}_r \\implies \\vec{V}_{nr} = +0{,}5 - (-1{,}5) = +2{,}0\\text{ m/s}$.',
      solutionSummary: '$V_{nr} = 0{,}5 + 1{,}5 = 2{,}0\\text{ m/s}$.',
    },
    relatedQuestionIds: ['ufrr-2024-q29', 'ufrr-2023-q29'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Análise vetorial galileana confirma A, em concordância com o gabarito preliminar divulgado (28-A).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q29',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Trabalho e Energia Mecânica',
    questionType: 'fis-trabalho-forca-variavel-area-fx',
    methodTitle: 'Trabalho de Força Linear como Área de Triângulo no Gráfico F × x',
    questionInterpretation:
      'Um corpo parte da origem $x = 0$ sob força linear com a posição: $F(40) = 40b\\text{ N}$ e $F(75) = 75b\\text{ N}$. Pede-se o trabalho realizado entre $x = 0$ e $x = 8\\text{ m}$.',
    stepByStepSolution: [
      '1. Encontre a lei da função linear $F(x) = mx + F_0$ usando os dois pontos dados $(40, 40b)$ e $(75, 75b)$: $$m = \\frac{75b - 40b}{75 - 40} = \\frac{35b}{35} = b, \\qquad F_0 = 40b - b \\cdot 40 = 0.$$ Logo, $$F(x) = b \\cdot x.$$',
      '2. Calcule o valor da força na posição final $x = 8\\text{ m}$: $$F(8) = 8b\\text{ N}.$$ (Na origem, $F(0) = 0\\text{ N}$.)',
      '3. Como a força varia linearmente com o deslocamento (equivalente à força elástica $F = kx$), o **trabalho $W$** é numericamente igual à **área sob o gráfico $F \\times x$** entre $0$ e $8\\text{ m}$ (um triângulo de base $\\Delta x = 8\\text{ m}$ e altura $F(8) = 8b\\text{ N}$): $$W = \\frac{\\text{base} \\times \\text{altura}}{2} = \\frac{8 \\cdot (8b)}{2} = 32b\\text{ N}\\cdot\\text{m}.$$',
      '4. (Equivalente pela integral ou força média: $W = \\int_0^8 bx\\,dx = \\left[\\frac{bx^2}{2}\\right]_0^8 = \\frac{64b}{2} = 32b\\text{ N}\\cdot\\text{m}$, ou $W = F_{\\text{méd}} \\cdot d = \\frac{0+8b}{2}\\cdot 8 = 32b\\text{ N}\\cdot\\text{m}$.) Alternativa **D**.',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Bateu o olho em $F(40) = 40b$ e $F(75) = 75b$? Então $F(x) = bx$ (proporcional a $x$, igual à Lei de Hooke!). Logo $W = \\frac{1}{2} b x^2 = \\frac{1}{2} b \\cdot 8^2 = 32b\\text{ N}\\cdot\\text{m}$ (**D**) em 10 segundos! (Note que $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$.)',
    shortcutApplicability:
      'Sempre que $F(x)$ for função do 1º grau da posição $x$ (seja $F = bx$, força elástica $F = kx$, ou gráfico retilíneo $F \\times x$).',
    shortcutLimitations:
      'Se $F(0)$ não fosse zero (ex.: $F(x) = bx + c$), a figura sob a reta seria um **trapézio**, exigindo $W = \\frac{F(0)+F(x)}{2} \\cdot x$.',
    universalMethod:
      'Para calcular trabalho de qualquer força variável unidimensional: (1) ache $F(x)$ nos extremos do deslocamento; (2) se $F(x)$ é linear, o trabalho é **sempre** $W = F_{\\text{média}} \\cdot \\Delta x = \\frac{F_{\\text{inicial}} + F_{\\text{final}}}{2} \\cdot \\Delta x$ (área do triângulo/trapézio); (3) lembre que $1\\text{ N}\\cdot\\text{m} = 1\\text{ J}$ e que a massa ($1\\text{ kg}$) e o atrito nulo foram dados apenas caso alguém tentasse achar velocidade final.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$8b$ é o valor da **força** na posição $x = 8\\text{ m}$ ($F = 8b\\text{ N}$), não o trabalho.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$75$ copia apenas o coeficiente numérico de $F(75)$, ignorando a constante $b$ e o intervalo pedido.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$40$ copia o número de $F(40)$ sem dependência de $b$.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          '$W = \\frac{8 \\cdot 8b}{2} = 32b\\text{ N}\\cdot\\text{m}$ (unidade equivalente a Joule).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$320b$ possui um erro de fator $10$ sobre $32b$ (ex.: $40 \\cdot 8$ em vez de $\\frac{8 \\cdot 8}{2}$).',
      },
    ],
    commonTraps: [
      'Achar que falta o valor de $b$: o resultado algébrico fica em função de $b$ nas alternativas.',
      'Multiplicar a força final pelo deslocamento ($W = F(8) \\cdot 8 = 64b$) esquecendo que a força é **variável** ($0$ até $8b$), o que exige dividir por $2$.',
      'Ficar em dúvida sobre a unidade $\\text{N}\\cdot\\text{m}$ vs $\\text{J}$: no SI, $1\\text{ J} \\equiv 1\\text{ N}\\cdot\\text{m}$.',
    ],
    essentialKnowledge: [
      'Trabalho = área do gráfico $F \\times d$ (se $F$ linear de $0$ a $kx$: $W = \\frac{kx^2}{2}$).',
      'Unidades SI: $1\\text{ Joule (J)} = 1\\text{ N}\\cdot\\text{m}$.',
    ],
    transferExercise: {
      prompt:
        'Uma força linear sobre um trilho passa por $F(0) = 10\\text{ N}$ e $F(4\\text{ m}) = 30\\text{ N}$. Qual é o trabalho realizado de $x = 0$ até $x = 4\\text{ m}$?',
      hint: 'Como $F(0) \\neq 0$, a área sob a reta é um trapézio: $\\frac{F(0)+F(4)}{2} \\cdot \\Delta x$.',
      expectedAnswer: '$W = 80\\text{ J}$ (ou $80\\text{ N}\\cdot\\text{m}$).',
      justification:
        '$W = \\frac{10 + 30}{2} \\cdot 4 = 20 \\cdot 4 = 80\\text{ J}$.',
      solutionSummary: 'Área do trapézio: $\\frac{10+30}{2} \\cdot 4 = 80\\text{ J}$.',
    },
    relatedQuestionIds: ['ufrr-2024-q30', 'ufrr-2022-q29'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Integração / área gráfica confirma $32b\\text{ N}\\cdot\\text{m}$ (D), igual ao gabarito preliminar divulgado (29-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q30',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Dinâmica do Movimento Circular',
    questionType: 'fis-mcu-dinamica-centripeta-v-omega-r',
    methodTitle: 'Acoplamento Cinemático (v = ωR) e Direção da Resultante Centrípeta',
    questionInterpretation:
      'Analisa-se a física de girar uma pedra/madeira presa a uma corda sobre a cabeça e soltá-la (lançamento tangencial). Pede-se a alternativa **INCORRETA**.',
    stepByStepSolution: [
      '1. Avalie cada afirmação física da situação:',
      '   - **A (Correta)**: A corda só exerce força de **tração**, que sempre puxa ao longo do fio em direção à mão (componente horizontal é a centrípeta).',
      '   - **B (Correta)**: A força peso $\\vec{P} = m\\vec{g}$ aponta verticalmente para baixo (centro da Terra) em todo instante.',
      '   - **C (Correta)**: No momento em que a corda é solta, o objeto sai pela **tangente** com velocidade inicial igual à velocidade tangencial $v$, determinando o alcance do lançamento oblíquo/horizontal.',
      '   - **D (Correta)**: Sem resultante centrípeta apontando para o centro da curva, pela 1ª Lei de Newton (Inércia) o corpo seguiria em linha reta.',
      '   - **E (INCORRETA)**: A velocidade tangencial $v$ e a velocidade angular $\\omega$ **NÃO são independentes**; elas são diretamente ligadas pelo raio $R$ da trajetória circular através da equação fundamental do MCU: $$v = \\omega \\cdot R.$$',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Bateu em **"são independentes"** envolvendo velocidade angular ($\\omega$) e velocidade tangencial ($v$)? Falso na hora: **$v = \\omega R$** conecta diretamente as duas! Como o comando pede a **INCORRETA** -> **E**.',
    shortcutApplicability:
      'Direto para qualquer questão de Movimento Circular Uniforme e dinâmica curvilínea.',
    shortcutLimitations:
      'Em questões sobre duas polias concêntricas (mesmo $\\omega$, diferentes $v$) ou ligadas por correia (mesmo $v$, diferentes $\\omega$), $v = \\omega R$ continua sendo a equação que as torna dependentes.',
    universalMethod:
      'Para todo MCU com fio: (1) Tração puxa para o centro/mão (nunca existe "força centrífuga" agindo sobre a pedra no referencial inercial); (2) Peso sempre vertical para baixo; (3) Soltando o fio, sai pela **tangente** (inércia); (4) $v = \\omega R$ e $a_c = \\frac{v^2}{R} = \\omega^2 R$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: a tração na corda puxa o pedaço de madeira em direção à mão.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: o peso aponta verticalmente para o centro da Terra durante todo o movimento.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: quanto maior a velocidade tangencial no instante do abandono, maior a distância alcançada no lançamento.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Afirmação verdadeira: toda trajetória curvilínea exige aceleração/força centrípeta não nula.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'É a afirmação **INCORRETA** procurada: $v$ e $\\omega$ são grandezas diretamente dependentes para um raio fixo ($v = \\omega R$).',
      },
    ],
    commonTraps: [
      'Esquecer que o comando pede a **INCORRETA** e marcar A ou D logo após ler que são verdadeiras.',
      'Duvidar da alternativa A achando que a força na corda seria horizontal exata: note que A diz apenas *"aponta para a mão do curumim"*, o que é verdadeiro mesmo no pêndulo cônico (a tração tem exatamente a direção do fio até a mão!).',
    ],
    essentialKnowledge: [
      'Acoplamento no MCU: $v = \\omega R = \\frac{2\\pi R}{T} = 2\\pi R f$.',
      'Força centrípeta não é uma força "nova": é o papel resultante exercido pela tração, atrito, normal ou peso.',
      'Ao cessar a força centrípeta, o corpo segue em MRU tangencial (na ausência de outras forças) ou parábola sob a gravidade.',
    ],
    transferExercise: {
      prompt:
        'Se o curumim dobrar a frequência de giro (dobrando $\\omega$) mantendo o mesmo comprimento efetivo de corda $R$, o que acontece com a velocidade tangencial $v$ e com a intensidade da força centrípeta necessária?',
      hint: 'Use $v = \\omega R$ e $F_c = m\\omega^2 R$.',
      expectedAnswer:
        'A velocidade tangencial $v$ dobra ($2\\times$) e a força centrípeta quadruplica ($4\\times$).',
      justification:
        'Como $v$ é linear em $\\omega$, dobrar $\\omega$ dobra $v$; já $F_c = m v^2/R = m\\omega^2 R$ depende do quadrado de $\\omega$, aumentando por um fator $2^2 = 4$.',
      solutionSummary: '$v$ dobra ($2\\times$) e $F_c$ quadruplica ($4\\times$).',
    },
    relatedQuestionIds: ['ufrr-2024-q28', 'ufrr-2022-q28'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Relações do MCU confirmam E como incorreta, igual ao gabarito preliminar divulgado (30-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q31',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Acústica e Efeito Doppler',
    questionType: 'fis-acustica-duplo-doppler-eco',
    methodTitle: 'Duplo Efeito Doppler em Eco com Parede Refletora Estacionária',
    questionInterpretation:
      'Um morcego move-se com velocidade $V_1$ em direção a uma parede fixa (velocidade do som $= V_2$), emitindo ultrassom de frequência $f_o$. Pede-se a expressão da frequência $f_2$ do eco detectado pelo morcego após a reflexão na parede, estruturada nas duas etapas.',
    stepByStepSolution: [
      '1. Relembre a equação geral do Efeito Doppler (sempre **Observador em cima, Fonte embaixo**): $$f_{\\text{obs}} = f_{\\text{fonte}} \\cdot \\frac{V_{\\text{som}} \\pm V_{\\text{obs}}}{V_{\\text{som}} \\mp V_{\\text{fonte}}}.$$ (Aproximação aumenta a frequência: **$+$ no numerador** para observador aproximando, **$-$ no denominador** para fonte aproximando.)',
      '2. **Etapa 1 (Morcego como fonte aproximando-se -> Parede como observador fixo)**:',
      '   - $V_{\\text{obs}} = 0$ (parede parada) e $V_{\\text{fonte}} = V_1$ (aproximação -> sinal **$-$** no denominador): $$f_1 = f_o \\cdot \\frac{V_2}{V_2 - V_1}.$$',
      '3. **Etapa 2 (Parede reemite $f_1$ como fonte fixa -> Morcego como observador aproximando-se)**:',
      '   - $V_{\\text{fonte}} = 0$ (parede parada) e $V_{\\text{obs}} = V_1$ (aproximação -> sinal **$+$** no numerador): $$f_2 = f_1 \\cdot \\frac{V_2 + V_1}{V_2}.$$',
      '4. **Substitua $f_1$ em $f_2$** mantendo exatamente a estrutura pedida pelas etapas: $$f_2 = \\left[f_o \\times \\frac{V_2}{V_2 - V_1}\\right] \\times \\left[\\frac{V_2 + V_1}{V_2}\\right].$$ (Note que algebricamente os $V_2$ cancelam e dão $f_o\\frac{V_2+V_1}{V_2-V_1} > f_o$, porém a banca manteve explicitamente os dois colchetes das etapas 1 e 2 na alternativa **E**.)',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Teste físico imediato de **aproximação**: na aproximação o som fica mais agudo, logo **$f_2 > f_o$**, e como o fenômeno tem **2 etapas** de aproximação, precisamos de fator $> 1$ duas vezes! Olhe as alternativas: A é $<1$; B é $<1$; C é $<1$; D tem só 1 etapa; somente **E** multiplica dois fatores $> 1$ ($\\frac{V_2}{V_2-V_1} > 1$ e $\\frac{V_2+V_1}{V_2} > 1$) -> **E** direto!',
    shortcutApplicability:
      'Funciona para todo problema de eco / radar / sonar com aproximação ou afastamento.',
    shortcutLimitations:
      'Se aparecesse uma opção simplificada $f_o\\frac{V_2+V_1}{V_2-V_1}$, ela também seria $>1$ — sempre confira se o enunciado pede a expressão em duas etapas ou simplificada.',
    universalMethod:
      'Mnemônico definitivo de Doppler: **"O Fio" ($\\text{Observador}$ em cima / $\\text{Fonte}$ embaixo)** -> $f_{\\text{ap}} = f \\frac{V \\pm V_O}{V \\mp V_F}$. Regra do sinal sem decorar tabela: pergunte *"Esse movimento aproxima ou afasta?"*. Se **aproxima**, a frequência sobe (escolha $+$ no numerador / $-$ no denominador). Se **afasta**, a frequência cai ($-$ no numerador / $+$ no denominador). Em reflexão em parede/radar, aplique a fórmula **duas vezes**: fonte->alvo, depois alvo->observador.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Inverte os sinais da aproximação para **afastamento** ($V_2 - V_1$ em cima e $V_2 + V_1$ embaixo, o que daria $f_2 < f_o$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Corresponderia apenas a uma etapa de *afastamento* da fonte ($f_2 < f_o$).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Corresponderia a uma única etapa de *afastamento* do observador ($f_2 < f_o$).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Considera apenas a segunda etapa (observador se aproximando de fonte fixa), ignorando a etapa 1 (morcego emitindo em movimento até a parede).',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Representa passo a passo exatamente a Etapa 1 ($f_o \\frac{V_2}{V_2 - V_1}$) seguida da Etapa 2 ($\\times \\frac{V_2 + V_1}{V_2}$).',
      },
    ],
    commonTraps: [
      'Aplicar Doppler apenas uma vez (marcando D) esquecendo que a onda vai até a parede com frequência já alterada ($f_1$) e volta como eco percebido por um receptor também móvel ($f_2$).',
      'Inverter numerador e denominador na hora da pressa (marcando A).',
    ],
    essentialKnowledge: [
      'Aproximação: $f_{\\text{aparente}} > f_{\\text{real}}$ (som mais agudo / *blueshift*).',
      'Afastamento: $f_{\\text{aparente}} < f_{\\text{real}}$ (som mais grave / *redshift*).',
      'Eco em obstáculo móvel/fixo sempre compõe dois efeitos Doppler em cascata.',
    ],
    transferExercise: {
      prompt:
        'Se o morcego estiver se **afastando** da parede com velocidade $V_1$ (com som a $V_2$), qual expressão simplificada representa a frequência do eco $f_2$ que ele escuta?',
      hint: 'No afastamento, o numerador reduz ($V_2 - V_1$) e o denominador aumenta ($V_2 + V_1$).',
      expectedAnswer: '$f_2 = f_o \\cdot \\frac{V_2 - V_1}{V_2 + V_1}$.',
      justification:
        'Etapa 1: $f_1 = f_o \\frac{V_2}{V_2 + V_1}$; Etapa 2: $f_2 = f_1 \\frac{V_2 - V_1}{V_2} = f_o \\frac{V_2 - V_1}{V_2 + V_1}$ (exatamente a expressão da alternativa A desta questão!).',
      solutionSummary: '$f_2 = f_o \\frac{V_2 - V_1}{V_2 + V_1}$.',
    },
    relatedQuestionIds: ['ufrr-2025-q32'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Dedução do duplo efeito Doppler confirma E, igual ao gabarito preliminar divulgado (31-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q32',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Ondulatória',
    subtopic: 'Interferência, Polarização e Difração',
    questionType: 'fis-ondulatoria-fenomenos-mecanicos',
    methodTitle: 'Matriz de Ocorrência de Fenômenos Ondulatórios (Longitudinal vs. Transversal)',
    questionInterpretation:
      'Comparam-se os fenômenos de interferência, polarização e difração aplicados especificamente a ondas sonoras no ar (mecânicas **longitudinais**) e a ondas em cordas esticadas (mecânicas **transversais**).',
    stepByStepSolution: [
      '1. Relembre os princípios ondulatórios fundamentais:',
      '   - **Difração** (capacidade de contornar obstáculos ou se espalhar ao passar por fendas de ordem comparável ao comprimento de onda) e **Interferência** (superposição construtiva/destrutiva de ondas coerentes) ocorrem em **TODAS as ondas** — mecânicas ou eletromagnéticas, longitudinais (som no ar) ou transversais (cordas, luz). Isso valida integralmente **B**!',
      '   - **Polarização** (filtragem de planos de vibração) ocorre **EXCLUSIVAMENTE em ondas transversais** (como luz e ondas em cordas), **jamais** em ondas longitudinais (como o som no ar, onde a vibração ocorre na mesma direção de propagação). Isso invalida A e E.',
      '   - Na difração (C), a **frequência** não muda (quem altera levemente frente a aberturas é a distribuição espacial/direção da frente de onda, não a frequência).',
      '   - Em uma corda esticada (D), ondas estacionárias formam nós exatamente por **interferência destrutiva**!',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      '**Regra de Ouro da Ondulatória**: Som no ar é onda **longitudinal** -> **NÃO polariza** (já elimina A e E na hora!). Difração nunca muda **frequência** (elimina C). Cordas têm nós = interferência destrutiva (elimina D) -> sobra apenas **B**!',
    shortcutApplicability:
      'Infalível em qualquer questão teórica comparando som, corda e luz.',
    shortcutLimitations:
      'Lembre que som em *sólidos* pode ter componentes transversais de cisalhamento, mas **som no ar / fluidos** é estritamente longitudinal e jamais sofre polarização.',
    universalMethod:
      'Monte a matriz mental: Reflexão, Refração, Difração e Interferência = **todas as ondas**. **Polarização = SOMENTE ondas transversais** (luz, ondas em corda). Além disso, apenas o Efeito Doppler altera a frequência percebida sem mudança na fonte; refração e difração preservam $f$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Óculos polaroides realizam **polarização** (exclusiva de ondas transversais como a luz); som atravessando frestas/grades sofre **difração**, e som no ar (longitudinal) não pode ser polarizado.',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          'Tanto ondas sonoras no ar quanto ondas em cordas sofrem difração e interferência (fenômenos universais de toda natureza ondulatória).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'A difração altera a direção/espalhamento das frentes de onda após contornar um obstáculo ou fenda, **sem alterar a frequência** da onda.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Ondas em corda sofrem perfeitamente interferência destrutiva (é o princípio que origina os nós das ondas estacionárias).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Comete dois erros graves: ondas sonoras no ar não sofrem polarização, e a difração ocorre normalmente em ondas mecânicas (por isso ouvimos alguém atrás de uma porta entreaberta).',
      },
    ],
    commonTraps: [
      'Achar que "difração" é fenômeno exclusivo da luz/microscopia e esquecer que ouvir sons através de esquinas ou portas é o exemplo cotidiano nº 1 de difração sonora.',
    ],
    essentialKnowledge: [
      'Polarização -> exclusivo de **ondas transversais** (luz, raio X, corda).',
      'Som no ar -> onda mecânica longitudinal (não polariza, não se propaga no vácuo).',
      'Difração -> acentua-se quando o tamanho da fenda/obstáculo é próximo ao comprimento de onda $\\lambda$.',
    ],
    transferExercise: {
      prompt:
        'Por que conseguimos ouvir claramente a voz de uma pessoa falando no corredor através de uma porta entreaberta (mesmo sem vê-la diretamente), enquanto a luz da lâmpada do corredor não "contorna" a porta com a mesma facilidade?',
      hint: 'Compare o comprimento de onda $\\lambda$ do som audível (centímetros/metros) e da luz visível (nanômetros) com a largura da porta (~$1\\text{ m}$).',
      expectedAnswer:
        'Pela **difração**: o comprimento de onda do som é comparável às dimensões da porta/fresta (ordem de decímetros/metros), contornando-a intensamente; já a luz visível tem $\\lambda \\approx 10^{-7}\\text{ m}$, muito menor que a porta, sofrendo difração desprezível nessa escala.',
      justification:
        'A difração torna-se perceptível quando a largura da abertura tem ordem de grandeza próxima ou menor que o comprimento de onda $\\lambda$.',
      solutionSummary: 'Difração intensa do som pois $\\lambda_{\\text{som}} \\sim$ abertura da porta.',
    },
    relatedQuestionIds: ['ufrr-2025-q32', 'ufrr-2023-q33'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Propriedades universais das ondas confirmam B, igual ao gabarito preliminar divulgado (32-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q33',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Termologia e Radiação Térmica',
    questionType: 'fis-termologia-absorcao-radiacao-cores',
    methodTitle: 'Absorção vs. Reflexão de Radiação Luminosa em Superfícies Pretas e Brancas',
    questionInterpretation:
      'Dois discos (X preto, Y branco) no vácuo são iluminados por uma fonte de luz branca durante $\\Delta t$, sem perdas térmicas e sem mudança de estado. Verifica-se $T_X > T_Y$, pedindo-se a explicação física correta.',
    stepByStepSolution: [
      '1. Analise a interação da luz branca (energia radiante) com as cores das superfícies:',
      '   - Superfície **branca** (disco Y): reflete a maior parte das frequências do espectro visível incidente e absorve pequena fração.',
      '   - Superfície **preta** (disco X): **absorve a maior fração** da energia luminosa incidente (reflete muito pouco).',
      '2. Pelo enunciado, a parcela não refletida é convertida integralmente em **energia interna** ($\\Delta U$), elevando a temperatura dos discos.',
      '3. Portanto, o disco X (preto) absorveu uma fração maior de energia luminosa do que o disco Y (branco), justificando $T_X > T_Y$ — alternativa **E**.',
      '4. (Nota sobre D: embora materiais distintos possam ter calores específicos diferentes, D diz *"unicamente, à diferença de suas capacidades térmicas"*, ignorando o efeito central da absorção espectral preta vs branca descrita no experimento!) ',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Princípio básico da ótica e termologia: **Cor preta absorve mais luz; cor branca reflete mais luz**. Corte A (diz branco absorve mais), B (diz preto reflete mais), C (inventa envio assimétrico da fonte) e D (diz *"unicamente"* capacidade térmica). Resta **E**!',
    shortcutApplicability:
      'Imediato em questões sobre irradiação térmica, efeito estufa de carros escuros vs claros e coletores solares.',
    shortcutLimitations:
      'Cuidado em enunciados que também variam o material ($c_X$ vs $c_Y$) *sem* citar diferença ótica: aqui o texto ressalta explicitamente superfície preta vs branca e que a energia não refletida vira energia interna.',
    universalMethod:
      'Em transmissão de calor no vácuo: (1) lembre que condução e convecção são impossíveis no vácuo -> só existe **irradiação**; (2) quanto mais próxima de um corpo negro (superfície preta fosca), maior o poder absorvedor e também o poder emissivo; quanto mais clara/polida, maior a refletividade.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          'Inverte completamente a física da cor branca: superfícies brancas *refletem* a maior parte da luz visível, e além disso contraria o resultado dado ($T_X > T_Y$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Afirma o oposto da realidade física (atribuindo alta reflexão ao preto e zero reflexão ao branco).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Os discos estão iluminados simultaneamente pela mesma fonte luminosa; a diferença está na absorção/reflexão de cada disco, não na emissão da fonte.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'O advérbio restritivo *"unicamente"* invalida a alternativa ao descartar o papel dominante da absorção luminosa pela cor preta versus reflexão pela cor branca.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          'Explica rigorosamente que o disco X (preto) absorve maior fração da energia luminosa incidente, convertendo mais energia em energia interna ($T_X > T_Y$).',
      },
    ],
    commonTraps: [
      'Achar que a cor é algo "contido" na superfície sem relação com reflexão/absorção da luz, ou cair na pegadinha D porque o enunciado mencionou "materiais distintos".',
    ],
    essentialKnowledge: [
      'Cor preta (corpo escuro): absorve quase todo espectro visível (converte radiação em agitação térmica / energia interna).',
      'Cor branca / espelhada: reflete a maior parcela da radiação incidente.',
      'Propagação no vácuo: exclusivamente por **radiação térmica** (ondas eletromagnéticas).',
    ],
    transferExercise: {
      prompt:
        'Por que garrafas térmicas possuem paredes internas espelhadas e vácuo entre as duas camadas de vidro?',
      hint: 'Relacione cada recurso aos 3 processos de propagação de calor (condução, convecção e irradiação).',
      expectedAnswer:
        'O vácuo impede trocas por condução e convecção; as paredes espelhadas refletem a radiação infravermelha, minimizando trocas por irradiação.',
      justification:
        'Combinando vácuo (ausência de meio material) e espelhamento (alta refletividade), bloqueiam-se simultaneamente os três mecanismos térmicos.',
      solutionSummary: 'Vácuo bloqueia condução/convecção; espelho bloqueia irradiação.',
    },
    relatedQuestionIds: ['ufrr-2025-q31', 'ufrr-2024-q32', 'ufrr-2023-q31'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Princípios de radiação e absorção espectral confirmam E, igual ao gabarito preliminar divulgado (33-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q34',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletrodinâmica',
    subtopic: 'Corrente e Carga Elétrica',
    questionType: 'fis-eletrodinamica-carga-corrente-tempo',
    methodTitle: 'Conversão de Horas em Segundos no Cálculo de Carga (Q = i · Δt)',
    questionInterpretation:
      'Uma corrente constante de $i = 0{,}07\\text{ A}$ passa durante $\\Delta t = 1\\text{ hora}$. Pede-se a carga elétrica total $Q$ em Coulombs ($\\text{C}$).',
    stepByStepSolution: [
      '1. Converta o intervalo de tempo para a unidade do **Sistema Internacional (segundos)**: $$\\Delta t = 1\\text{ h} = 60\\text{ min} \\times 60\\text{ s/min} = 3600\\text{ s}.$$',
      '2. Aplique a definição de intensidade de corrente elétrica constante: $$i = \\frac{Q}{\\Delta t} \\implies Q = i \\cdot \\Delta t.$$',
      '3. Substitua os valores: $$Q = 0{,}07\\text{ A} \\cdot 3600\\text{ s} = 7 \\cdot 36 = 252\\text{ C}.$$',
      '4. Confira com as opções -> alternativa **C**.',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Lembre sempre: **$1\\text{ hora} = 3600\\text{ s}$** e **$0{,}07 \\times 3600 = 7 \\times 36$** (os dois zeros cancelam as duas casas decimais!). $7 \\times 30 = 210$ + $7 \\times 6 = 42 \\implies 252\\text{ C}$ (**C**) de cabeça!',
    shortcutApplicability:
      'Qualquer problema de corrente elétrica contínua com duração dada em minutos ou horas.',
    shortcutLimitations:
      'Se a corrente for variável (ex.: gráfico $i \\times t$), a carga deixa de ser $i \\cdot \\Delta t$ e passa a ser a **área sob o gráfico** $i \\times t$.',
    universalMethod:
      'Antes de aplicar $Q = i \\cdot \\Delta t$, coloque **sempre** $i$ em Ampères ($\\text{A}$) e $\\Delta t$ em segundos ($\\text{s}$), lembrando que $1\\text{ A} = 1\\text{ C/s}$. Se pedir número de elétrons, aplique em seguida $Q = n \\cdot e$ ($e = 1{,}6 \\times 10^{-19}\\text{ C}$).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$0{,}14\\text{ C} = 2 \\cdot 0{,}07$ não tem relação com $\\Delta t = 3600\\text{ s}$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$504\\text{ C} = 2 \\cdot 252$ corresponderia a $2$ horas de uso.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          '$Q = 0{,}07\\text{ A} \\times 3600\\text{ s} = 252\\text{ C}$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$50{,}4\\text{ C}$ decorre de erro decimal ($504 / 10$).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$2{,}52\\text{ C}$ ocorre se o estudante converter erroneamente $1\\text{ h} = 36\\text{ s}$ ou errar duas casas decimais em $0{,}07 \\times 3600$.',
      },
    ],
    commonTraps: [
      'Usar $\\Delta t = 1$ ou $\\Delta t = 60$ (minutos) sem converter para **segundos** ($3600\\text{ s}$).',
      'Errar vírgula em $0{,}07 \\times 3600$ marcando $2{,}52\\text{ C}$ (E).',
    ],
    essentialKnowledge: [
      '$Q = i \\cdot \\Delta t$ (com $i$ em $\\text{A}$, $\\Delta t$ em $\\text{s}$ e $Q$ em $\\text{C}$).',
      '$1\\text{ min} = 60\\text{ s}$; $1\\text{ h} = 3600\\text{ s}$.',
      '$1\\text{ A}\\cdot\\text{h} = 3600\\text{ C}$.',
    ],
    transferExercise: {
      prompt:
        'Uma bateria de celular de $4000\\text{ mAh}$ armazena qual carga elétrica total em Coulombs ($\\text{C}$)?',
      hint: '$4000\\text{ mAh} = 4\\text{ A}\\cdot\\text{h}$, e $1\\text{ h} = 3600\\text{ s}$.',
      expectedAnswer: '$Q = 14\\,400\\text{ C}$.',
      justification:
        '$4000\\text{ mA} = 4\\text{ A}$. Assim $Q = 4\\text{ A} \\times 3600\\text{ s} = 14\\,400\\text{ C}$.',
      solutionSummary: '$4\\text{ A} \\times 3600\\text{ s} = 14\\,400\\text{ C}$.',
    },
    relatedQuestionIds: ['ufrr-2025-q36', 'ufrr-2024-q36'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Cálculo direto $0{,}07 \\times 3600 = 252$ confirma C, igual ao gabarito preliminar divulgado (34-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q35',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletrodinâmica',
    subtopic: 'Potência Elétrica e Disjuntores',
    questionType: 'fis-eletrodinamica-potencia-disjuntor-sobrecarga',
    methodTitle: 'Cálculo de Corrente Total em Paralelo e Percentual de Sobrecarga no Disjuntor',
    questionInterpretation:
      'Quatro aparelhos ($1100\\text{ W}, 660\\text{ W}, 880\\text{ W}, 220\\text{ W}$) são ligados simultaneamente em $U = 220\\text{ V}$, protegidos por um disjuntor de $I_{\\text{máx}} = 10\\text{ A}$. Pede-se em quantos por cento o limite de corrente foi ultrapassado (sobrecarga).',
    stepByStepSolution: [
      '1. Some as potências dos aparelhos ligados ao mesmo tempo: $$P_{\\text{total}} = 1100 + 660 + 880 + 220 = 2860\\text{ W}.$$',
      '2. Calcule a corrente total exigida pela rede em $U = 220\\text{ V}$ usando $P = U \\cdot I$: $$I_{\\text{total}} = \\frac{P_{\\text{total}}}{U} = \\frac{2860}{220} = 13\\text{ A}.$$',
      '3. Calcule o **excesso** (sobrecarga) em relação ao limite do disjuntor ($I_{\\text{máx}} = 10\\text{ A}$): $$\\Delta I = 13\\text{ A} - 10\\text{ A} = 3\\text{ A}.$$',
      '4. Expresse esse excesso em porcentagem do limite ($10\\text{ A}$): $$\\text{Sobrecarga (\\%)} = \\frac{3\\text{ A}}{10\\text{ A}} \\times 100\\% = 30\\%.$$',
      '5. Alternativa correta: **D** ($30\\%$).',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Faça a divisão por $220$ **em cada aparelho separadamente** (todas as potências são múltiplos fáceis de $220$!): $1100/220 = 5\\text{ A}$; $660/220 = 3\\text{ A}$; $880/220 = 4\\text{ A}$; $220/220 = 1\\text{ A}$. Soma das correntes $= 5+3+4+1 = 13\\text{ A}$. Como o disjuntor aguenta $10\\text{ A}$, passou $3\\text{ A}$ de $10\\text{ A} = \\mathbf{30\\%}$ (**D**) sem precisar somar milhares!',
    shortcutApplicability:
      'Imbatível em problemas de disjuntores residenciais quando as potências dos eletrodomésticos são múltiplos simples da tensão ($110\\text{ V}$ ou $220\\text{ V}$).',
    shortcutLimitations:
      'Só vale somar diretamente as potências nominais quando os aparelhos são ligados na **tensão nominal** correspondente às especificações.',
    universalMethod:
      'Em questões de dimensionamento de disjuntor/fusível: (1) aparelhos residenciais ficam sempre em **paralelo** (mesma tensão $U$ e potências se somam: $P_{\\text{total}} = \\sum P_k$); (2) calcule $I_{\\text{total}} = \\frac{P_{\\text{total}}}{U}$ ou compare $P_{\\text{total}}$ com $P_{\\text{máx}} = U \\cdot I_{\\text{máx}}$ ($220 \\cdot 10 = 2200\\text{ W}$); (3) percentual excedido $= \\frac{I_{\\text{total}} - I_{\\text{máx}}}{I_{\\text{máx}}} \\times 100\\%$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$10\\%$ corresponde a $1\\text{ A}$ acima do limite ($11\\text{ A}$), ou confunde o limite $10\\text{ A}$ com a sobrecarga.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$13\\%$ confunde o valor absoluto da corrente total ($13\\text{ A}$) com a taxa percentual de excesso.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$20\\%$ seria uma sobrecarga para $12\\text{ A}$, omitindo o rádio de $220\\text{ W}$ ($1\\text{ A}$).',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          '$I_{\\text{total}} = 13\\text{ A}$, excedendo o limite de $10\\text{ A}$ em $3\\text{ A}$, isto é, $\\frac{3}{10} = 30\\%$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$3\\%$ confunde o excesso absoluto em Ampères ($3\\text{ A}$) com porcentagem ($3\\%$), esquecendo de dividir por $10\\text{ A}$ e multiplicar por $100\\%$.',
      },
    ],
    commonTraps: [
      'Achar $13\\text{ A}$ e marcar **B ($13\\%$)** ou achar $3\\text{ A}$ de excesso e marcar **E ($3\\%$)** sem converter em porcentagem sobre a base $10\\text{ A}$!',
    ],
    essentialKnowledge: [
      '$P = U \\cdot I$ (em circuito paralelo doméstico, $P_{\\text{total}} = \\sum P_k$ e $I_{\\text{total}} = \\sum I_k$).',
      'Sobrecarga percentual $= \\frac{I_{\\text{total}} - I_{\\text{limite}}}{I_{\\text{limite}}} \\times 100\\%$.',
    ],
    transferExercise: {
      prompt:
        'Com o mesmo disjuntor de $10\\text{ A}$ em $220\\text{ V}$ (suporta $2200\\text{ W}$), qual seria o maior subconjunto possível entre os aparelhos dados ($1100\\text{ W}, 880\\text{ W}, 660\\text{ W}, 220\\text{ W}$) ligados juntos sem desarmar o disjuntor?',
      hint: 'Procure a combinação de potências cuja soma chegue o mais próximo possível de $2200\\text{ W}$ sem ultrapassar.',
      expectedAnswer:
        'Gerador ($1100\\text{ W}$) + Ventilação ($880\\text{ W}$) + Rádio ($220\\text{ W}$) $= 2200\\text{ W}$ (exatamente $10\\text{ A}$).',
      justification:
        '$5\\text{ A} + 4\\text{ A} + 1\\text{ A} = 10\\text{ A}$, atingindo exatamente a potência máxima admissível sem ultrapassar o disjuntor.',
      solutionSummary: '$1100 + 880 + 220 = 2200\\text{ W}$ ($10\\text{ A}$).',
    },
    relatedQuestionIds: ['ufrr-2024-q36', 'ufrr-2023-q35'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Cálculo de corrente ($13\\text{ A}$) e excesso ($30\\%$) confirmam D, igual ao gabarito preliminar divulgado (35-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q36',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletromagnetismo',
    questionType: 'fis-eletromagnetismo-oersted-blindagem-eletroima',
    methodTitle: 'Fenômenos Magnéticos Clássicos: Oersted, Blindagem Ferromagnética e Eletroímã',
    questionInterpretation:
      'Julgam-se três assertivas práticas sobre magnetismo aplicado a bússolas: (I) experiência de Oersted (fio com corrente), (II) blindagem magnética com caixa de ferro, e (III) núcleo de ferro doce em eletroímã.',
    stepByStepSolution: [
      '1. **Assertiva I (Experimento de Oersted)**: Corrente elétrica em um fio retilíneo gera um campo magnético circular ao redor do condutor (regra da mão direita), desviando a agulha imantada da bússola. -> **CORRETA**.',
      '2. **Assertiva II (Blindagem magnética)**: Materiais ferromagnéticos de alta permeabilidade magnética (como ferro doce/aço) concentram e desviam as linhas de indução magnética através de suas paredes metálicas, reduzindo drasticamente o campo magnético externo no interior oco da caixa (blindagem magnética). -> **CORRETA**.',
      '3. **Assertiva III (Eletroímã com núcleo de ferro doce)**: Introduzir um núcleo ferromagnético dentro de uma bobina alinha os domínios magnéticos internos, amplificando fortemente o campo enquanto há corrente; como o ferro usado em eletroímãs tem baixa histerese/remanência ("ferro doce"), ao desligar a corrente a magnetização praticamente desaparece. -> **CORRETA**.',
      '4. Todas as três assertivas (I, II e III) estão corretas -> alternativa **A**.',
    ],
    proposedAnswer: 'A',
    officialAnswer: 'A',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Reconheça os 3 experimentos clássicos de livro didático: **I = Oersted** (fio com corrente gira bússola); **II = Blindagem magnética** (ferro canaliza linhas de campo protegendo o interior); **III = Eletroímã** (núcleo de ferro amplifica enquanto há corrente e zera ao desligar). Todos verdadeiros -> **A**!',
    shortcutApplicability:
      'Direto para questões conceituais de Eletromagnetismo sobre fontes de campo e materiais magnéticos.',
    shortcutLimitations:
      'Não confunda **blindagem eletrostática** (Gaiola de Faraday: funciona com qualquer condutor para campo elétrico) com **blindagem magnética** (exige material **ferromagnético** como ferro/mu-metal para desviar linhas de campo $\\vec{B}$; alumínio ou cobre não blindam campos magnéticos estáticos!).',
    universalMethod:
      'Domine os quatro pilares conceituais de magnetismo: (1) Carga em movimento/corrente gera $\\vec{B}$ (Oersted/Ampère); (2) Materiais ferromagnéticos ($\\text{Fe, Co, Ni}$) concentram linhas de $\\vec{B}$ (servem tanto como núcleo de eletroímã quanto como blindagem magnética de cavidades); (3) Ferro doce desmagnetiza ao cortar a corrente (eletroímã); aço duro retém magnetização (ímã permanente).',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Todas as três assertivas descrevem fielmente o efeito Oersted (I), a blindagem magnética ferromagnética (II) e o princípio do eletroímã com núcleo de ferro (III).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          'Exclui III, embora o núcleo de ferro doce em bobinas (eletroímã) seja justamente o dispositivo clássico que amplia $\\vec{B}$ com corrente ligada e perde quase toda imantação ao desligar.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          'Exclui II, desconsiderando que invólucros ferromagnéticos desviam linhas de campo externo, blindando instrumentos sensíveis.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          'Exclui I (Experiência de Oersted, base histórica do eletromagnetismo).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          'Nega todas as três afirmações verdadeiras.',
      },
    ],
    commonTraps: [
      'Achar que "metal" em II estaria errado por lembrar da Gaiola de Faraday (elétrica), porém o parêntese especifica **(ferro)** — que é ferromagnético e promove blindagem magnética real desviando as linhas de campo!',
      'Confundir ferro doce (eletroímã, perde imantação ao desligar) com aço temperado (ímã permanente).',
    ],
    essentialKnowledge: [
      'Experimento de Oersted (1820): corrente elétrica gera campo magnético ($B = \\frac{\\mu_0 I}{2\\pi r}$ para fio retilíneo longo).',
      'Ferromagnetismo ($\\text{Fe, Ni, Co}$): $\\mu \\gg \\mu_0$, concentrando linhas de fluxo magnético no núcleo ou na parede de blindagem.',
    ],
    transferExercise: {
      prompt:
        'Se a caixa utilizada no item II fosse feita de **alumínio** ou **plástico** em vez de ferro, ela protegeria a bússola do campo magnético estático do Linhão? Justifique.',
      hint: 'Apenas materiais com alta permeabilidade magnética ($\\text{ferromagnéticos}$) canalizam linhas de campo magnético estático.',
      expectedAnswer:
        'Não. Plástico (isolante diamagnético/não magnético) e alumínio (paramagnético muito fraco, não ferromagnético) não desviam significativamente linhas de campo magnético estático; apenas uma caixa ferromagnética (ferro, aço-silício, mu-metal) realiza blindagem magnética estática eficaz.',
      justification:
        'A Gaiola de Faraday em alumínio ou cobre blinda campos **elétricos** estáticos, mas é transparente a campos **magnéticos** contínuos/baixa frequência, os quais requerem paredes ferromagnéticas.',
      solutionSummary:
        'Não; blindagem magnética estática exige material ferromagnético (como ferro).',
    },
    relatedQuestionIds: ['ufrr-2025-q34', 'ufrr-2025-q35', 'ufrr-2024-q35'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Fundamentos do eletromagnetismo confirmam I, II e III (A), em concordância com o gabarito preliminar divulgado (36-A).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
];
