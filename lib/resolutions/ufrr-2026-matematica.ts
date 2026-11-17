import type { LegacyQuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2026';
const REVIEW_DATE = '2026-04-10T12:00:00.000Z';

export const UFRR_2026_MATEMATICA_RESOLUTIONS: LegacyQuestionResolution[] = [
  {
    questionId: 'ufrr-2026-q10',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Funções Compostas e Bijetoras',
    questionType: 'mat-funcao-composta-involucao',
    methodTitle: 'Cancelamento por Bijetividade na Composição Funcional',
    questionInterpretation:
      'São dadas duas funções bijetoras $f, h: \\mathbb{R} \\to \\mathbb{R}$ tais que a soma $g = f + h$ também é bijetora e satisfaz $f(g(x)) = h(x)$ e $h(g(x)) = f(x)$ para todo $x \\in \\mathbb{R}$. Pede-se o valor exato de $h(2026)$.',
    stepByStepSolution: [
      '1. Defina a função soma $g(x) = f(x) + h(x)$. Pelo item I, $g: \\mathbb{R} \\to \\mathbb{R}$ é injetora e sobrejetora, ou seja, **bijetora**.',
      '2. Some membro a membro as equações II e III aplicadas em $x$: $f(g(x)) + h(g(x)) = h(x) + f(x)$.',
      '3. Reconheça que o lado esquerdo é exatamente $g(g(x))$ e o lado direito é $g(x)$: $$g(g(x)) = g(x), \\quad \\forall x \\in \\mathbb{R}.$$',
      '4. Como $g$ é **injetora**, a igualdade $g(u) = g(v)$ implica necessariamente $u = v$. Aplicando com $u = g(x)$ e $v = x$, obtemos a identidade: $$g(x) = x \\implies f(x) + h(x) = x.$$',
      '5. Agora substitua $g(x) = x$ na equação II ($f(g(x)) = h(x)$): $$f(x) = h(x).$$ (A equação III confirma $h(x) = f(x)$.)',
      '6. Substituindo $f(x) = h(x)$ em $f(x) + h(x) = x$: $$2h(x) = x \\implies h(x) = \\frac{x}{2}.$$',
      '7. Conferindo hipóteses: $f(x) = h(x) = x/2$ são lineares não constantes e bijetoras em $\\mathbb{R}$, e $g(x) = x$ também é bijetora. Logo, $$h(2026) = \\frac{2026}{2} = 1013.$$',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Chute inteligente de função linear simétrica: suponha $f(x) = h(x) = kx$. Então $(f+h)(x) = 2kx$. Pela condição II, $k(2kx) = kx \\implies 2k = 1 \\implies k = 1/2$, logo $h(2026) = 2026/2 = 1013$ (**C**) em 15 segundos!',
    shortcutApplicability:
      'Funciona sempre que uma equação funcional com funções reais bijetoras admite resposta numérica única independente da forma particular da função.',
    shortcutLimitations:
      'O chute $f(x) = kx$ só garante que a alternativa encontrada é a única possível SE a questão tiver resposta única bem definida; na prova discursiva ou em itens de múltipla escolha que permitem $h$ não linear, é obrigatório provar $g(x) = x$ pela injetividade de $g$.',
    universalMethod:
      'Sempre que uma questão de equação funcional der $f \\circ g = h$ e $h \\circ g = f$ com $g = f + h$ injetora: (1) some as composições para formar $g(g(x)) = g(x)$; (2) corte o $g$ externo usando a **injetividade** (não a sobrejetividade!) para obter $g(x) = x$; (3) substitua $g(x) = x$ nas composições originais para encontrar $f = h$; (4) resolva $2h(x) = x$.',
    universalVariationNote:
      'Se a questão trouxesse $f \\circ (f - h) = h$, testar simetrias ao subtrair as equações conduz analogamente a $(f-h)(f-h) = -(f-h)$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$2026$ seria o valor de $(f+h)(2026) = g(2026) = 2026$, e não de $h(2026)$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$506,5 = 2026/4$ decorre de dividir por $2$ duas vezes por engano.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'De $g(g(x)) = g(x)$ e da injetividade de $g$, segue $g(x) = x$, $f(x) = h(x)$ e $h(x) = x/2$, donde $h(2026) = 1013$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$2025$ é distrator numérico próximo ao ano da prova, sem relação com $h(x) = x/2$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$4052 = 2 \\cdot 2026$ resulta do erro algébrico $h(x) = 2x$ em vez de $2h(x) = x$.',
      },
    ],
    commonTraps: [
      'Achar que $g(g(x)) = g(x)$ implica $g(x) = x$ para *qualquer* função: isso só é garantido porque o enunciado deu que $f+h$ é **injetora** (por exemplo, função constante satisfaz $g(g(x))=g(x)$ sem ser $x$).',
      'Esquecer de responder $h(2026)$ e marcar $(f+h)(2026) = 2026$ (alternativa A).',
    ],
    essentialKnowledge: [
      'Função injetora: $g(a) = g(b) \\implies a = b$ (permite "cancelar" a aplicação externa de $g$).',
      'Composição de funções: $(f \\circ g)(x) = f(g(x))$ e $(f + h)(g(x)) = f(g(x)) + h(g(x))$.',
    ],
    transferExercise: {
      prompt:
        'Sejam $f, h: \\mathbb{R} \\to \\mathbb{R}$ bijetoras tais que $g = f + h$ é injetora, $f(g(x)) = h(x) + 4$ e $h(g(x)) = f(x) - 4$. Determine $g(2026)$.',
      hint: 'Some as duas equações dadas para eliminar as constantes $+4$ e $-4$.',
      expectedAnswer: '$g(2026) = 2026$.',
      justification:
        'Somando as igualdades: $f(g(x)) + h(g(x)) = h(x) + f(x) + 4 - 4 \\implies g(g(x)) = g(x)$. Pela injetividade de $g$, $g(x) = x$, logo $g(2026) = 2026$.',
      solutionSummary:
        'A soma cancela $+4$ e $-4$, recaindo novamente em $g(g(x)) = g(x) \\implies g(x) = x$.',
    },
    relatedQuestionIds: ['ufrr-2025-q10', 'ufrr-2023-q11'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Prova dedutiva rigorosa e verificação numérica confirmam $h(2026) = 1013$ (C), em concordância com o gabarito preliminar divulgado (10-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q11',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Geometria Plana',
    subtopic: 'Circunferência e Áreas',
    questionType: 'mat-geometria-bissetriz-area',
    methodTitle: 'Teorema da Bissetriz e Distância ao Lado em Triângulo na Circunferência',
    questionInterpretation:
      'Na circunferência de diâmetro $\\overline{AD}$ e raio perpendicular $\\overline{BO} \\perp \\overline{AD}$, $\\overline{AC}$ corta $\\overline{BO}$ em $F$ e $\\overline{BD}$ em $E$. Sabendo que $AF = 3$ e $EC = 1$, pede-se a área do triângulo $\\triangle FED$. **Atenção crítica:** há divergência matemática comprovada entre o resultado da geometria euclidiana ($1{,}5$) e o gabarito preliminar divulgado ($2$).',
    stepByStepSolution: [
      '1. **Simetria na mediatriz**: Como $O$ é ponto médio do diâmetro $\\overline{AD}$ e $\\overline{BO} \\perp \\overline{AD}$, a reta $BO$ é a **mediatriz** do segmento $\\overline{AD}$. Todo ponto sobre a mediatriz é equidistante de $A$ e $D$, logo: $$FD = FA = 3.$$',
      '2. **Ângulos na circunferência**: Como $\\overline{AD}$ é diâmetro, o ângulo inscrito $\\widehat{ACD} = 90^\\circ$ (logo $\\widehat{ECD} = 90^\\circ$, ou seja, $\\overline{EC} \\perp \\overline{CD}$). Além disso, no triângulo retângulo isósceles $\\triangle AOB$ ($OA = OB = R$), temos $\\widehat{OBA} = 45^\\circ$ e, no triângulo $\\triangle BOD$, $\\widehat{BDA} = 45^\\circ$.',
      '3. **Identificação da bissetriz $DE$**: Seja $\\theta = \\widehat{CAD} = \\widehat{FDA}$ (pois $\\triangle AFD$ é isósceles com $FA = FD$). No triângulo retângulo $\\triangle ACD$, $\\widehat{ADC} = 90^\\circ - \\theta$. Como $\\widehat{ADB} = 45^\\circ$, temos: $$\\widehat{EDC} = \\widehat{ADC} - \\widehat{ADB} = (90^\\circ - \\theta) - 45^\\circ = 45^\\circ - \\theta.$$ Por outro lado, $\\widehat{FDE} = \\widehat{ADB} - \\widehat{ADF} = 45^\\circ - \\theta$. Portanto, $\\widehat{FDE} = \\widehat{EDC}$, mostrando que $\\overline{DE}$ é a **bissetriz interna** do ângulo $\\widehat{FDC}$!',
      '4. **Distância de $E$ ao lado $DF$**: Pelo teorema da bissetriz (equidistância aos lados do ângulo), a altura $h$ do vértice $E$ em relação à reta suporte $DF$ é igual à distância perpendicular de $E$ até a reta $CD$, que é exatamente $\\overline{EC} = 1$ (já que $\\widehat{ECD} = 90^\\circ$).',
      '5. **Cálculo da área**: Usando base $DF = 3$ e altura $h = EC = 1$: $$\\text{Área}(\\triangle FED) = \\frac{\\text{base} \\times \\text{altura}}{2} = \\frac{DF \\cdot EC}{2} = \\frac{3 \\cdot 1}{2} = 1{,}5 \\quad (\\text{Alternativa C}).$$',
      '6. **Auditoria de inconsistência geométrica do enunciado**: Fixando $\\overline{AD}$ no eixo $x$ de raio $R$ e $A=(-R,0), D=(R,0), B=(0,R)$, tem-se $F=(0, R\\tan\\theta)$, donde $AF = R\\sec\\theta = 3$. A bissetriz $BD$ ($x+y=R$) corta $AC$ em $E$, resultando $EC = 2R\\sin\\theta\\frac{\\sin(45^\\circ-\\theta)}{\\sin(45^\\circ+\\theta)}$? Mais diretamente, o máximo absoluto de $EC$ sujeito a $AF=3$ sobre toda a faixa $\\theta \\in (0^\\circ, 45^\\circ)$ é aproximadamente **$0{,}90085 < 1$**! Ou seja, em geometria euclidiana rígida os dados $AF = 3$ e $EC = 1$ são sobredeterminados e geometricamente incompatíveis, embora a relação angular dê invariavelmente $\\text{Área}(\\triangle FED) = \\frac{1}{2} AF \\cdot EC = 1{,}5$ (**C**), enquanto o gabarito preliminar divulgado apontou **B ($2$)**.',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV marcou 11-B); divergência matemática detectada',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Pela mediatriz $BO$, $FD = FA = 3$. Como $DE$ bissecta o ângulo $\\widehat{FDC}$ e $\\widehat{ECD} = 90^\\circ$, a altura de $\\triangle FED$ relativa à base $FD$ vale $EC = 1$. Logo $S = \\frac{3 \\cdot 1}{2} = 1{,}5$ (**C**). Atenção: o gabarito preliminar publicado registrou **B ($2$)**.',
    shortcutApplicability:
      'Fórmula $S = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{altura}$ usando o Teorema da Bissetriz (todo ponto da bissetriz equidista dos lados do ângulo).',
    shortcutLimitations:
      'Como demonstrado na auditoria, as medidas $AF=3$ e $EC=1$ não coexistem numa circunferência real (o máximo possível de $EC$ para $AF=3$ é $\\approx 0{,}901$), o que torna a questão passível de recurso/divergência com a chave preliminar B.',
    universalMethod:
      'Em questões com diâmetro e raio perpendicular na circunferência: (1) explore ângulo inscrito em semicírculo ($90^\\circ$); (2) use a mediatriz ($FD = FA$) e os ângulos de $45^\\circ$ formados pelo raio perpendicular; (3) escreva os ângulos em função de $\\theta$ para descobrir igualdade de ângulos (bissetrizes ou semelhanças); (4) projete alturas usando a equidistância de pontos da bissetriz aos lados.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$2{,}5$ não decorre da relação geométrica $\\frac{1}{2} \\cdot DF \\cdot EC = 1{,}5$.',
      },
      {
        letter: 'B',
        status: 'contestada',
        explanation:
          'Consta como gabarito preliminar divulgado ($2$), porém contradiz a identidade angular $DF = AF = 3$ e $h = EC = 1$, cuja área é $1{,}5$. Além disso, $AF=3$ e $EC=1$ são metricamente incompatíveis no plano euclidiano.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Resultado geométrico rigoroso da relação de bissetriz e mediatriz: $\\text{Área}(\\triangle FED) = \\frac{1}{2} \\cdot DF \\cdot EC = \\frac{1}{2} \\cdot 3 \\cdot 1 = 1{,}5$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$1$ seria obtido se o candidato ignorasse a base $DF = 3$ ou confundisse a área com $EC = 1$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$3$ equivale ao produto $DF \\cdot EC = 3 \\cdot 1$ esquecendo de dividir por $2$ na área do triângulo.',
      },
    ],
    commonTraps: [
      'Esquecer de dividir por $2$ no cálculo de $\\frac{\\text{base} \\times \\text{altura}}{2}$ e marcar $3$ (E).',
      'Desconhecer que qualquer ponto sobre a mediatriz ($BO$) de um segmento ($AD$) tem distâncias iguais às extremidades ($FD = FA$).',
      'Em caso de dados sobre-especificados numa questão oficial, checar a consistência métrica caso queira avaliar possibilidade de recurso.',
    ],
    essentialKnowledge: [
      'Ângulo inscrito subtendendo um diâmetro mede sempre $90^\\circ$ (Teorema de Tales na circunferência).',
      'Todo ponto da mediatriz é equidistante dos extremos do segmento.',
      'Todo ponto da bissetriz de um ângulo é equidistante das retas suportes dos dois lados do ângulo.',
    ],
    transferExercise: {
      prompt:
        'Em uma circunferência de diâmetro $\\overline{AD}$ e centro $O$, com $\\overline{BO} \\perp \\overline{AD}$, suponha que $DE$ seja bissetriz de $\\widehat{FDC}$, que $DF = 4$ e que a distância de $E$ à reta $CD$ seja $h = 1{,}2$ (compatível com o raio). Calcule a área de $\\triangle FED$.',
      hint: 'Por ser $E$ um ponto da bissetriz de $\\widehat{FDC}$, a altura relativa a $DF$ é igual à distância até $CD$.',
      expectedAnswer: '$\\text{Área}(\\triangle FED) = 2{,}4$.',
      justification:
        'Como $DE$ bissecta $\\widehat{FDC}$, a distância de $E$ a $DF$ iguala a distância de $E$ a $CD$ ($1{,}2$). Logo $S = \\frac{4 \\times 1{,}2}{2} = 2{,}4$.',
      solutionSummary:
        'Aplicando o teorema da bissetriz: $h_{DF} = h_{CD} = 1{,}2 \\implies S = \\frac{4 \\cdot 1{,}2}{2} = 2{,}4$.',
    },
    relatedQuestionIds: ['ufrr-2025-q11', 'ufrr-2025-q12', 'ufrr-2024-q12'],
    verificationStatus: 'divergence_detected',
    verificationNotes:
      'DIVERGÊNCIA DETECTADA: A demonstração trigonométrica/sintética resulta em $S = \\frac{1}{2} \\cdot 3 \\cdot 1 = 1{,}5$ (C), e a verificação numérica em coordenadas cartesianas prova ainda que $\\max EC \\approx 0{,}90085 < 1$ para $AF = 3$. O gabarito preliminar divulgado pela imprensa registrou B ($2$). Mantivemos ambas as informações visíveis com total transparência.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q12',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Geometria Plana',
    subtopic: 'Polígonos Regulares',
    questionType: 'mat-poligono-regular-diagonais',
    methodTitle: 'Ângulo de Segmento/Inscrito no Polígono Regular para Achar o Número de Lados',
    questionInterpretation:
      'Na figura aparecem vértices consecutivos $E, A, B, C, D$ de um polígono regular, com $\\widehat{DAB} = y$ e $\\widehat{DAE} = 13y$. Pede-se o número total de diagonais desse polígono.',
    stepByStepSolution: [
      '1. Observe pela figura e pela ordem dos vértices ($E - A - B - C - D$) que o ângulo interno do polígono regular no vértice $A$ é a soma dos dois ângulos adjacentes: $$a_i = \\widehat{EAB} = \\widehat{DAE} + \\widehat{DAB} = 13y + y = 14y.$$',
      '2. Agora relacione $y = \\widehat{DAB}$ ao ângulo externo $a_e$ (ou ao ângulo central $a_c$) do polígono regular inscrito numa circunferência:',
      '   - Os vértices consecutivos $B, C, D$ definem dois arcos iguais correspondentes a $2$ lados do polígono. O ângulo inscrito $\\widehat{DAB}$ enxerga o arco $\\widehat{BD}$ (de $2$ lados).',
      '   - Como o ângulo central de $1$ lado mede $a_c = \\frac{360^\\circ}{n}$, o arco $\\widehat{BD}$ mede $2 \\cdot \\frac{360^\\circ}{n}$, logo o ângulo inscrito $\\widehat{DAB}$ vale metade disso: $$y = \\frac{1}{2} \\cdot \\left(2 \\cdot \\frac{360^\\circ}{n}\\right) = \\frac{360^\\circ}{n} = a_e.$$',
      '3. Como em todo polígono convexo regular $a_i + a_e = 180^\\circ$, substituímos $a_i = 14y$ e $a_e = y$: $$14y + y = 180^\\circ \\implies 15y = 180^\\circ \\implies y = 12^\\circ.$$',
      '4. Determine o número de lados $n$: $$a_e = \\frac{360^\\circ}{n} = 12^\\circ \\implies n = \\frac{360}{12} = 30 \\text{ lados}.$$',
      '5. Calcule o número de diagonais $d$ do triacontágono ($n = 30$): $$d = \\frac{n(n - 3)}{2} = \\frac{30 \\cdot (30 - 3)}{2} = 15 \\cdot 27 = 405.$$',
    ],
    proposedAnswer: 'B',
    officialAnswer: 'B',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Truque dos vértices saltados na circunferência circunscrita: de $A$ olhando para $B$ e $D$, o ângulo $\\widehat{DAB}$ "enxerga" **2 lados** ($BC$ e $CD$), portanto vale exatamente **1 ângulo externo** ($y = a_e$). Como o ângulo interno vale $14y$, temos $15y = 180^\\circ \\implies y = 12^\\circ \\implies n = 360/12 = 30 \\implies d = \\frac{30 \\cdot 27}{2} = 405$ (**B**).',
    shortcutApplicability:
      'Serve para qualquer polígono regular quando dois vértices e uma diagonal partem de um mesmo vértice $A$: cada lado subtendido adiciona $\\frac{a_e}{2} = \\frac{180^\\circ}{n}$ ao ângulo inscrito.',
    shortcutLimitations:
      'Requer que os vértices sejam consecutivos ao longo do contorno do polígono. Sempre confira na figura se não há vértices omitidos entre $A, B, C, D$.',
    universalMethod:
      'Em problemas de ângulos em polígonos regulares: (1) imagine o polígono inscrito em uma circunferência, onde cada lado subtende um arco de medida $c = 360^\\circ / n$; (2) lembre que o ângulo inscrito formado por duas diagonais/lados que partem do mesmo vértice vale $k \\cdot \\frac{c}{2}$, onde $k$ é o número de lados contidos no arco oposto; (3) iguale $a_i + a_e = 180^\\circ$ para achar $n$; (4) aplique $d = \\frac{n(n-3)}{2}$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$243$ não corresponde a nenhum $\\frac{n(n-3)}{2}$ inteiro ($24 \\cdot 21 / 2 = 252$, $23 \\cdot 20 / 2 = 230$).',
      },
      {
        letter: 'B',
        status: 'correta',
        explanation:
          '$a_i = 14y$ e $y = a_e \\implies 15y = 180^\\circ \\implies y = 12^\\circ \\implies n = 30 \\implies d = \\frac{30 \\cdot 27}{2} = 405$.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$170$ corresponde a $n = 20$ lados ($20 \\cdot 17 / 2 = 170$), que ocorreria se $y = 18^\\circ$ (erro de conta em $180^\\circ / 15$).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$810 = 30 \\cdot 27$ é o resultado antes de dividir por $2$ na fórmula de diagonais.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$520$ não é número válido de diagonais de polígono ($n=34 \\implies 527$, $n=33 \\implies 495$).',
      },
    ],
    commonTraps: [
      'Esquecer de dividir por $2$ em $d = \\frac{n(n-3)}{2}$ e marcar $810$ (alternativa D).',
      'Não perceber que $\\widehat{DAB}$ subtende **dois** arcos elementares ($BC$ e $CD$), achando que valeria $\\frac{a_e}{2}$ em vez de $a_e$.',
    ],
    essentialKnowledge: [
      'Ângulo externo de polígono regular: $a_e = \\frac{360^\\circ}{n}$.',
      'Suplementaridade: $a_i + a_e = 180^\\circ$.',
      'Número de diagonais: $d = \\frac{n(n-3)}{2}$.',
      'Cada "passo" de 1 vértice no arco oposto a um ângulo inscrito em vértice do polígono regular soma $\\frac{180^\\circ}{n}$.',
    ],
    transferExercise: {
      prompt:
        'Em um polígono regular com vértices consecutivos $E, A, B, C$, sabe-se que a diagonal $AC$ forma com o lado $AB$ um ângulo $\\widehat{CAB} = 15^\\circ$. Quantas diagonais tem esse polígono?',
      hint: 'O ângulo $\\widehat{CAB}$ enxerga apenas $1$ lado ($BC$), logo vale $\\frac{1}{2} \\cdot \\frac{360^\\circ}{n} = \\frac{180^\\circ}{n}$.',
      expectedAnswer: '$54$ diagonais ($n = 12$, dodecágono regular).',
      justification:
        '$\\widehat{CAB} = \\frac{180^\\circ}{n} = 15^\\circ \\implies n = 12$. Logo $d = \\frac{12(12 - 3)}{2} = 54$.',
      solutionSummary:
        'Com $1$ lado no arco oposto, $\\frac{180^\\circ}{n} = 15^\\circ \\implies n = 12 \\implies d = 54$.',
    },
    relatedQuestionIds: ['ufrr-2023-q12', 'ufrr-2025-q12'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Dedução geométrica por arco inscrito e cálculo combinatório confirmam $405$ (B), igual ao gabarito preliminar divulgado (12-B).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q13',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Trigonometria',
    questionType: 'mat-trigonometria-arco-triplo',
    methodTitle: 'Cosseno do Arco Triplo com Análise Obrigatória do Quadrante',
    questionInterpretation:
      'Dado $x \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$ (2º quadrante) e $3\\operatorname{sen} x - 2 = 0$, calcula-se o valor exato de $\\cos(3x)$.',
    stepByStepSolution: [
      '1. Isole $\\operatorname{sen} x$: $$3\\operatorname{sen} x = 2 \\implies \\operatorname{sen} x = \\frac{2}{3}.$$',
      '2. Use a Relação Fundamental da Trigonometria $\\operatorname{sen}^2 x + \\cos^2 x = 1$ para achar $\\cos x$: $$\\cos^2 x = 1 - \\left(\\frac{2}{3}\\right)^2 = 1 - \\frac{4}{9} = \\frac{5}{9} \\implies |\\cos x| = \\frac{\\sqrt{5}}{3}.$$',
      '3. **Atenção ao quadrante**: Como $x \\in \\left(\\frac{\\pi}{2}, \\pi\\right)$, $x$ está no **2º quadrante**, onde o cosseno é **negativo**. Portanto: $$\\cos x = -\\frac{\\sqrt{5}}{3}.$$',
      '4. Aplique a fórmula do cosseno do arco triplo $\\cos(3x) = 4\\cos^3 x - 3\\cos x = \\cos x(4\\cos^2 x - 3)$:',
      '5. Substitua $\\cos x = -\\frac{\\sqrt{5}}{3}$ e $\\cos^2 x = \\frac{5}{9}$: $$\\cos(3x) = \\left(-\\frac{\\sqrt{5}}{3}\\right)\\left(4 \\cdot \\frac{5}{9} - 3\\right) = \\left(-\\frac{\\sqrt{5}}{3}\\right)\\left(\\frac{20 - 27}{9}\\right) = \\left(-\\frac{\\sqrt{5}}{3}\\right)\\left(-\\frac{7}{9}\\right) = \\frac{7\\sqrt{5}}{27}.$$',
    ],
    proposedAnswer: 'A',
    officialAnswer: 'A',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Decida o **sinal primeiro** pelo intervalo de $3x$! Como $\\operatorname{sen} x = 2/3 < \\frac{\\sqrt{2}}{2} \\approx 0{,}707$ no 2º quadrante, temos $135^\\circ < x < 180^\\circ$ (na verdade $x \\approx 138{,}2^\\circ$), logo $405^\\circ < 3x < 540^\\circ$, ou seja, $3x$ cai no 1º ou 2º quadrante ($414{,}6^\\circ \\equiv 54{,}6^\\circ$, **1º quadrante** -> $\\cos(3x) > 0$!). Isso elimina C e E; só resta calcular o fator numérico com denominador $3^3 = 27$ -> $\\frac{7\\sqrt{5}}{27}$ (**A**).',
    shortcutApplicability:
      'Excelente quando há alternativas simétricas com sinais opostos ($+\\frac{7\\sqrt{5}}{27}$ em A vs $-\\frac{7\\sqrt{5}}{27}$ em E).',
    shortcutLimitations:
      'Sempre confira se $3x$ está antes ou depois de $450^\\circ$ ($90^\\circ$ no 2º giro): comparando $\\operatorname{sen} x = 2/3 \\approx 0{,}667$ com $\\operatorname{sen}(150^\\circ) = 0{,}5$, sabe-se que $120^\\circ < x < 150^\\circ$ ($\\operatorname{sen} 120^\\circ \\approx 0{,}866$), e como $4\\cos^2 x - 3 = 20/9 - 27/9 < 0$, o sinal negativo de $\\cos x$ multiplica negativo de $(4\\cos^2 x - 3)$, garantindo $+$.',
    universalMethod:
      'Para $\\cos(3x)$ ou $\\operatorname{sen}(3x)$ dado um quadrante: (1) ache $\\operatorname{sen} x$ e $\\cos x$ pelo Teorema Fundamental respeitando rigorosamente o sinal do quadrante; (2) se não lembrar a fórmula do arco triplo de cabeça, deduza em 2 linhas por $\\cos(2x + x) = \\cos(2x)\\cos x - \\operatorname{sen}(2x)\\operatorname{sen} x$ usando $\\cos(2x) = 2\\cos^2 x - 1$ e $\\operatorname{sen}(2x) = 2\\operatorname{sen} x\\cos x$, chegando a $\\cos(3x) = 4\\cos^3 x - 3\\cos x$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          'Com $\\cos x = -\\frac{\\sqrt{5}}{3}$, tem-se $\\cos(3x) = (-\\frac{\\sqrt{5}}{3})(\\frac{20}{9} - 3) = \\frac{7\\sqrt{5}}{27}$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$\\frac{7\\sqrt{5}}{9}$ esquece o fator $\\frac{1}{3}$ de $\\cos x$ na multiplicação final.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$-\\frac{7\\sqrt{5}}{9}$ erra tanto o sinal quanto o denominador ($9$ em vez de $27$).',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$\\frac{5\\sqrt{5}}{27}$ resulta de erro aritmético em $4 \\cdot 5 - 27$ (trocando $-7$ por $5$).',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$-\\frac{7\\sqrt{5}}{27}$ ocorre se o aluno assume erroneamente $\\cos x = +\\frac{\\sqrt{5}}{3}$ ignorando que $x \\in (\\pi/2, \\pi)$ tem cosseno negativo.',
      },
    ],
    commonTraps: [
      'Pegadinha clássica: esquecer que no 2º quadrante $\\cos x < 0$, obtendo $-\\frac{7\\sqrt{5}}{27}$ (E) em vez de $+\\frac{7\\sqrt{5}}{27}$ (A).',
      'Não reduzir ou fatorar $\\cos(3x) = \\cos x(4\\cos^2 x - 3)$ e errar ao elevar $-\\sqrt{5}/3$ ao cubo.',
    ],
    essentialKnowledge: [
      'Sinais nos quadrantes: 2º quadrante ($\\pi/2 < x < \\pi$) tem $\\operatorname{sen} x > 0$ e $\\cos x < 0$.',
      'Arco triplo: $\\cos(3x) = 4\\cos^3 x - 3\\cos x$ e $\\operatorname{sen}(3x) = 3\\operatorname{sen} x - 4\\operatorname{sen}^3 x$.',
      'Fórmula de derivação rápida: $\\cos(2x+x) = (2\\cos^2 x - 1)\\cos x - 2(1-\\cos^2 x)\\cos x = 4\\cos^3 x - 3\\cos x$.',
    ],
    transferExercise: {
      prompt:
        'Sabendo que $x \\in \\left(\\pi, \\frac{3\\pi}{2}\\right)$ e $\\cos x = -\\frac{1}{3}$, calcule $\\operatorname{sen}(3x)$.',
      hint: 'No 3º quadrante o seno é negativo; encontre $\\operatorname{sen} x$ e use $\\operatorname{sen}(3x) = 3\\operatorname{sen} x - 4\\operatorname{sen}^3 x$.',
      expectedAnswer: '$\\operatorname{sen}(3x) = \\frac{5\\sqrt{2}}{27}$ (ou verifique passo a passo: $-\\frac{2\\sqrt{2}}{3} \\cdot (3 - 4\\cdot \\frac{8}{9}) = \\frac{10\\sqrt{2}}{27}$).',
      justification:
        '$\\operatorname{sen} x = -\\frac{2\\sqrt{2}}{3}$, logo $\\operatorname{sen}(3x) = \\left(-\\frac{2\\sqrt{2}}{3}\\right)\\left(3 - 4 \\cdot \\frac{8}{9}\\right) = \\left(-\\frac{2\\sqrt{2}}{3}\\right)\\left(-\\frac{5}{9}\\right) = \\frac{10\\sqrt{2}}{27}$.',
      solutionSummary:
        'Com $\\operatorname{sen} x = -\\frac{2\\sqrt{2}}{3}$ no 3º quadrante, $\\operatorname{sen}(3x) = \\frac{10\\sqrt{2}}{27}$.',
    },
    relatedQuestionIds: ['ufrr-2025-q14', 'ufrr-2024-q14', 'ufrr-2022-q15'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Cálculo trigonométrico e verificação numérica em radianos confirmam $\\frac{7\\sqrt{5}}{27}$ (A), em concordância com o gabarito preliminar divulgado (13-A).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q14',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Trigonometria e Geometria',
    questionType: 'mat-trigonometria-triangulo-circulo',
    methodTitle: 'Raio Auxiliar no Triângulo Retângulo Dentro do Setor Circular',
    questionInterpretation:
      'No setor circular $\\widehat{PNR}$ de centro $O$, $PO \\perp OR$ e $MN \\parallel OR$. Dados $OM = 2$ e $MN = 1$ (com $M$ sobre $OP$ e $N$ sobre o arco), pede-se $\\cot(\\alpha)$, onde $\\alpha$ é o ângulo em $R$ no triângulo $MNR$ (ou ângulo entre $NR$ e $OR$).',
    stepByStepSolution: [
      '1. Trace o **raio auxiliar** $\\overline{ON}$ ligando o centro $O$ ao ponto $N$ sobre a circunferência. Como $MN \\parallel OR$ e $PO \\perp OR$, temos $OM \\perp MN$, formando o triângulo retângulo $\\triangle OMN$ reto em $M$.',
      '2. Aplique o Teorema de Pitágoras em $\\triangle OMN$ para obter o raio $R = ON$: $$R = ON = \\sqrt{OM^2 + MN^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5}.$$',
      '3. Como $R$ pertence à circunferência, o segmento $\\overline{OR}$ também é raio: $$OR = \\sqrt{5}.$$',
      '4. Baixe a altura de $N$ perpendicular a $\\overline{OR}$, encontrando $N\'$ sobre $\\overline{OR}$. Como $OMN\'N$ é um retângulo, temos: $$NN\' = OM = 2 \\quad \\text{e} \\quad ON\' = MN = 1.$$',
      '5. Logo, o cateto adjacente a $\\alpha$ no triângulo retângulo $\\triangle NN\'R$ mede: $$N\'R = OR - ON\' = \\sqrt{5} - 1.$$',
      '6. Calcule $\\cot(\\alpha) = \\frac{\\text{cateto adjacente}}{\\text{cateto oposto}}$ em $\\triangle NN\'R$: $$\\cot(\\alpha) = \\frac{N\'R}{NN\'} = \\frac{\\sqrt{5} - 1}{2}.$$',
    ],
    proposedAnswer: 'C',
    officialAnswer: 'C',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Em todo setor circular com um ponto $N$ no arco e coordenadas dadas a partir do centro: **trace imediatamente o raio $ON$** ($R = \\sqrt{2^2+1^2} = \\sqrt{5}$). Projetando $N$ no eixo horizontal $OR$, sobra base $\\sqrt{5} - 1$ e altura $2$, logo $\\cot\\alpha = \\frac{\\text{base}}{\\text{altura}} = \\frac{\\sqrt{5}-1}{2}$ (**C**).',
    shortcutApplicability:
      'Universal para qualquer problema com ponto $N$ sobre um arco de círculo de centro $O$ e segmentos ortogonais aos raios extremos.',
    shortcutLimitations:
      'Confirme no enunciado qual razão trigonométrica foi pedida ($\\cot\\alpha = \\frac{\\text{adj}}{\\text{op}}$ e não $\\tan\\alpha = \\frac{\\text{op}}{\\text{adj}}$!).',
    universalMethod:
      'Em figuras com arcos de circunferência centrados em $O$: (1) ligue $O$ a todos os pontos que tocam o arco ($ON, OR, OP$ têm mesmo comprimento $R$); (2) use coordenadas cartesianas com origem $O$ ($N=(1,2), R=(\\sqrt{5},0)$); (3) encontre catetos por diferença de coordenadas e aplique diretamente $\\cot\\alpha = \\frac{\\Delta x}{\\Delta y}$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$\\frac{\\sqrt{5}+1}{2}$ somaria $ON\'$ ao raio em vez de subtrair ($N\'R = OR - ON\'$).',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$\\frac{2}{\\sqrt{5}-1}$ é $\\tan(\\alpha) = \\frac{\\text{oposto}}{\\text{adjacente}}$, inverso da cotangente pedida.',
      },
      {
        letter: 'C',
        status: 'correta',
        explanation:
          'Pelo retângulo de projeção, $\\text{adjacente} = \\sqrt{5}-1$ e $\\text{oposto} = 2$, donde $\\cot\\alpha = \\frac{\\sqrt{5}-1}{2}$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$\\frac{4}{\\sqrt{5}+1} = \\sqrt{5}-1$ esquece de dividir pelo cateto oposto $2$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$\\frac{\\sqrt{3}-1}{2}$ ocorreria por erro ao calcular o raio como $\\sqrt{2^2 - 1^2} = \\sqrt{3}$ em vez de $\\sqrt{2^2 + 1^2}$.',
      },
    ],
    commonTraps: [
      'Marcar $\\tan\\alpha = \\frac{2}{\\sqrt{5}-1}$ (B) esquecendo que $\\cot\\alpha = \\frac{1}{\\tan\\alpha} = \\frac{\\text{cateto adjacente}}{\\text{cateto oposto}}$.',
      'Subtrair os quadrados em Pitágoras ($\\sqrt{2^2 - 1^2}$) achando que $OM = 2$ seria a hipotenusa.',
    ],
    essentialKnowledge: [
      'Todo segmento do centro $O$ a qualquer ponto do arco vale o raio $R$.',
      '$\\cot\\alpha = \\frac{\\cos\\alpha}{\\operatorname{sen}\\alpha} = \\frac{\\text{cateto adjacente}}{\\text{cateto oposto}}$.',
      'Método das coordenadas em $O=(0,0)$ evita erros visuais de projeção.',
    ],
    transferExercise: {
      prompt:
        'Na mesma configuração com $PO \\perp OR$ e $MN \\parallel OR$, se $OM = 3$ e $MN = 4$, calcule $\\cot(\\alpha)$ no ângulo em $R$.',
      hint: 'Use Pitágoras em $\\triangle OMN$ (triângulo pitagórico $3$-$4$-$5$) para achar $R = OR$.',
      expectedAnswer: '$\\cot(\\alpha) = \\frac{1}{3}$.',
      justification:
        '$R = \\sqrt{3^2 + 4^2} = 5$. Projetando $N$ em $OR$, $N\'R = 5 - 4 = 1$ e a altura vale $OM = 3$. Portanto $\\cot\\alpha = \\frac{1}{3}$.',
      solutionSummary: 'Raio $5$, base restante $5 - 4 = 1$, altura $3 \\implies \\cot\\alpha = 1/3$.',
    },
    relatedQuestionIds: ['ufrr-2024-q15', 'ufrr-2023-q10'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Inspeção visual do gráfico `q14-arco.png` e cálculo trigonométrico confirmam $\\frac{\\sqrt{5}-1}{2}$ (C), igual ao gabarito preliminar divulgado (14-C).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q15',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Sequências, Fatoriais e Somatórios',
    questionType: 'mat-soma-telescopica-fatorial',
    methodTitle: 'Decomposição em Frações Parciais para Soma Telescópica Fatorial',
    questionInterpretation:
      'Calcula-se a soma finita $S = \\sum_{k=1}^{2024} \\frac{k!}{(k+2)!}$.',
    stepByStepSolution: [
      '1. Simplifique o termo geral usando a definição de fatorial $(k+2)! = (k+2)(k+1)k!$: $$\\frac{k!}{(k+2)!} = \\frac{1}{(k+1)(k+2)}.$$',
      '2. Decomponha em **frações parciais** (técnica telescópica): note que a diferença entre os fatores do denominador é $(k+2) - (k+1) = 1$, logo: $$\\frac{1}{(k+1)(k+2)} = \\frac{1}{k+1} - \\frac{1}{k+2}.$$',
      '3. Reescreva os termos de $S$ para $k = 1, 2, \\dots, 2024$: $$S = \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\dots + \\left(\\frac{1}{2025} - \\frac{1}{2026}\\right).$$',
      '4. Cancele todos os termos intermediários opostos (soma telescópica), restando apenas o primeiro positivo e o último negativo: $$S = \\frac{1}{2} - \\frac{1}{2026}.$$',
      '5. Tire o mínimo múltiplo comum ($2026$): $$S = \\frac{1013 - 1}{2026} = \\frac{1012}{2026}.$$ (A forma apresentada diretamente na alternativa E é $\\frac{1012}{2026}$, equivalente a $\\frac{506}{1013}$.)',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Teste os $2$ primeiros termos para enxergar o padrão da soma de $N$ parcelas! Para $N=1$: $\\frac{1}{2\\cdot 3} = \\frac{1}{6} = \\frac{1}{2\\cdot 3}$. Para $N=2$: $\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4} = \\frac{2}{2\\cdot 4}$. Para $N=3$: $\\frac{3}{2\\cdot 5}$. Padrão imediato para $N$ parcelas: $S_N = \\frac{N}{2(N+2)}$. Com $N = 2024$: $$S_{2024} = \\frac{2024}{2 \\cdot 2026} = \\frac{1012}{2026} \\quad (\\text{E})!$$',
    shortcutApplicability:
      'Insuperável em somatórios com grandes números ($2024$, $2026$): testar $N=1, 2, 3$ revela o denominador $N+2$ em segundos.',
    shortcutLimitations:
      'Observe se há alternativa com a fração **simplificada** ($\\frac{506}{1013}$) vs **não simplificada** ($\\frac{1012}{2026}$). Em A aparece $\\frac{1012}{1013}$ — cuidado, pois $\\frac{1012}{2026} = \\frac{506}{1013} \\neq \\frac{1012}{1013}$!',
    universalMethod:
      'Para qualquer soma racional envolvendo fatoriais ou produtos de inteiros consecutivos: (1) cancele o fatorial menor ($\\frac{k!}{(k+m)!}$); (2) se restar $\\frac{1}{(k+a)(k+b)}$, escreva como $\\frac{1}{b-a}\\left(\\frac{1}{k+a} - \\frac{1}{k+b}\\right)$; (3) abra os primeiros e últimos termos para visualizar quais parcelas sobrevivem ao cancelamento telescópico.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$\\frac{1012}{1013} \\approx 0{,}999$ é o dobro da soma real ($\approx 0{,}4995$). Resulta de calcular $\\frac{1013 - 1}{1013}$ esquecendo o fator $2$ no denominador $2026$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$\\frac{1012}{2024} = \\frac{1}{2}$ seria o limite para soma infinita, porém a soma finita até $k=2024$ é estritamente menor que $1/2$ ($\\frac{1}{2} - \\frac{1}{2026}$).',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$\\frac{1010}{2024}$ confunde o índice final $2024$ com $2022$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$\\frac{1010}{2026}$ erra a contagem de termos ou o cálculo $1013 - 1 = 1012$.',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          '$S = \\frac{1}{2} - \\frac{1}{2026} = \\frac{1013 - 1}{2026} = \\frac{1012}{2026}$.',
      },
    ],
    commonTraps: [
      'Achar que $\\frac{1012}{2026}$ simplifica para $\\frac{1012}{1013}$ (A): dividindo apenas o denominador por $2$ sem dividir o numerador!',
      'Confundir a soma telescópica que começa em $\\frac{1}{1} - \\frac{1}{2}$ com esta que começa em $k=1 \\implies \\frac{1}{2} - \\frac{1}{3}$.',
    ],
    essentialKnowledge: [
      '$\\frac{k!}{(k+2)!} = \\frac{1}{(k+1)(k+2)}$.',
      'Identidade telescópica: $\\frac{1}{m(m+1)} = \\frac{1}{m} - \\frac{1}{m+1}$.',
      'Conferência de ordem de grandeza: como $S < \\sum_{k=1}^{\\infty} \\frac{1}{(k+1)(k+2)} = \\frac{1}{2}$, qualquer resposta $\\ge 0{,}5$ (como A e B) é impossível!',
    ],
    transferExercise: {
      prompt:
        'Calcule o valor da soma $S = \\frac{1!}{3!} + \\frac{2!}{4!} + \\dots + \\frac{98!}{100!}$.',
      hint: 'Use a fórmula telescópica $\\frac{1}{2} - \\frac{1}{N+2}$ com $N = 98$.',
      expectedAnswer: '$S = \\frac{49}{100} = 0{,}49$.',
      justification:
        '$S = \\frac{1}{2} - \\frac{1}{100} = \\frac{50 - 1}{100} = \\frac{49}{100}$.',
      solutionSummary: '$S = \\frac{1}{2} - \\frac{1}{100} = \\frac{49}{100}$.',
    },
    relatedQuestionIds: ['ufrr-2022-q14'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Soma telescópica exata e checagem por laço numérico confirmam $\\frac{1012}{2026}$ (E), igual ao gabarito preliminar divulgado (15-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q16',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Geometria Analítica',
    subtopic: 'Divisão de Segmento',
    questionType: 'mat-analitica-divisao-segmento',
    methodTitle: 'Interpolação Vetorial Linear de Ponto no Segmento (A + t·AB)',
    questionInterpretation:
      'Dado o segmento orientado de $A=(2,1)$ até $B=(5,5)$, pede-se o ponto $C$ localizado a $1/3$ do percurso a partir de $A$.',
    stepByStepSolution: [
      '1. Calcule o vetor deslocamento completo $\\overrightarrow{AB} = B - A$: $$\\overrightarrow{AB} = (5 - 2,\\; 5 - 1) = (3, 4).$$',
      '2. Como o participante completou $t = \\frac{1}{3}$ do trajeto a partir de $A$, some $\\frac{1}{3}\\overrightarrow{AB}$ ao ponto inicial $A$: $$C = A + \\frac{1}{3}\\overrightarrow{AB} = (2, 1) + \\frac{1}{3}(3, 4).$$',
      '3. Efetue as contas coordenada a coordenada: $$x_C = 2 + \\frac{3}{3} = 2 + 1 = 3, \\qquad y_C = 1 + \\frac{4}{3} = \\frac{7}{3}.$$',
      '4. Logo, $C = \\left(3;\\; \\frac{7}{3}\\right)$ — alternativa **A**.',
    ],
    proposedAnswer: 'A',
    officialAnswer: 'A',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Só olhe para a coordenada $x$: vai de $2$ até $5$ (variação $\\Delta x = 3$). Um terço de $3$ é $1$, então $x_C = 2 + 1 = 3$ (elimina C, D e E). Em $y$: vai de $1$ até $5$ ($\\Delta y = 4$), logo $y_C = 1 + 4/3 = 7/3$ (**A**)!',
    shortcutApplicability:
      'Válido para qualquer divisão proporcional de segmento em 2D ou 3D.',
    shortcutLimitations:
      'Fique atento ao ponto de partida: $1/3$ a partir de $A$ usa $A + \\frac{1}{3}(B-A)$, ao passo que $1/3$ antes de $B$ seria $2/3$ a partir de $A$.',
    universalMethod:
      'Um ponto $C$ que percorre a fração $t \\in [0, 1]$ do segmento orientado de $A$ até $B$ é sempre dado pela média ponderada $C = (1-t)A + tB = A + t(B - A)$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'correta',
        explanation:
          '$x_C = 2 + \\frac{1}{3}(5-2) = 3$ e $y_C = 1 + \\frac{1}{3}(5-1) = \\frac{7}{3}$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$(3; 4/3)$ resulta de usar apenas $\\frac{1}{3}(5-1) = \\frac{4}{3}$ esquecendo de somar o ponto inicial $y_A = 1$.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$(4; 7/3)$ usa $t = 2/3$ para $x$ e $t = 1/3$ para $y$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$(4; 4/3)$ mistura $x_C$ a $2/3$ do caminho com $y$ sem somar $y_A = 1$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$(7/2; 2)$ corresponde ao ponto médio em $x$ ($(2+5)/2 = 7/2$) e a valor incorreto em $y$.',
      },
    ],
    commonTraps: [
      'Calcular $\\frac{1}{3}$ da distância $\\Delta y = 4$ e esquecer de somar a coordenada inicial $y_A = 1$ (caindo em B: $4/3$).',
      'Fazer a média ponderada invertida $\\frac{1}{3}A + \\frac{2}{3}B$ (que dá $2/3$ do caminho, $x=4$) em vez de $\\frac{2}{3}A + \\frac{1}{3}B$.',
    ],
    essentialKnowledge: [
      'Divisão em razão $t$ a partir de $A$: $C = A + t(B - A)$.',
      'Peso maior fica no ponto de quem $C$ está mais próximo: a $1/3$ de $A$, $C = \\frac{2}{3}A + \\frac{1}{3}B$.',
    ],
    transferExercise: {
      prompt:
        'Com os mesmos pontos $A=(2,1)$ e $B=(5,5)$, quais são as coordenadas do ponto $D$ quando o participante completa $3/4$ do trajeto de $A$ até $B$?',
      hint: 'Calcule $D = A + \\frac{3}{4}(B - A)$ usando $\\overrightarrow{AB} = (3, 4)$.',
      expectedAnswer: '$D = \\left(\\frac{17}{4};\\; 4\\right) = (4{,}25;\\; 4)$.',
      justification:
        '$x_D = 2 + \\frac{3}{4}(3) = 2 + \\frac{9}{4} = \\frac{17}{4}$ e $y_D = 1 + \\frac{3}{4}(4) = 1 + 3 = 4$.',
      solutionSummary: '$D = (2,1) + \\frac{3}{4}(3,4) = (17/4, 4)$.',
    },
    relatedQuestionIds: ['ufrr-2025-q18', 'ufrr-2022-q17'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Cálculo vetorial direto confirma $(3; 7/3)$ (A), em concordância com o gabarito preliminar divulgado (16-A).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q17',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Polinômios e Equações Algébricas',
    questionType: 'mat-polinomios-relacoes-girard',
    methodTitle: 'Produto das Raízes Diretamente pelas Relações de Girard (Sem Fatorar)',
    questionInterpretation:
      'Dados dois polinômios cúbicos $x^3 - 4x^2 + 6x - 4 = 0$ (raízes $r, s, t$) e $x^3 - 3x^2 + 4x - 2 = 0$ (raízes $u, v, w$), pede-se o produto das seis raízes $r \\cdot s \\cdot t \\cdot u \\cdot v \\cdot w$.',
    stepByStepSolution: [
      '1. Para uma equação polinomial mônica de grau $n = 3$, $x^3 + b x^2 + c x + d = 0$, a relação de Girard para o **produto das raízes** é: $$x_1 \\cdot x_2 \\cdot x_3 = (-1)^3 \\frac{d}{a} = -\\frac{d}{a}.$$',
      '2. Na primeira equação $x^3 - 4x^2 + 6x - 4 = 0$, temos $a_1 = 1$ e termo independente $d_1 = -4$. Logo: $$r \\cdot s \\cdot t = -\\frac{-4}{1} = 4.$$',
      '3. Na segunda equação $x^3 - 3x^2 + 4x - 2 = 0$, temos $a_2 = 1$ e termo independente $d_2 = -2$. Logo: $$u \\cdot v \\cdot w = -\\frac{-2}{1} = 2.$$',
      '4. Multiplique os dois produtos: $$r \\cdot s \\cdot t \\cdot u \\cdot v \\cdot w = (r \\cdot s \\cdot t) \\cdot (u \\cdot v \\cdot w) = 4 \\cdot 2 = 8.$$',
      '5. (Conferência opcional pelas raízes explícitas: $x^3 - 4x^2 + 6x - 4 = (x-2)(x^2 - 2x + 2) = 0$ tem raízes $2, 1\\pm i$ cujo produto é $2 \\cdot 2 = 4$; $x^3 - 3x^2 + 4x - 2 = (x-1)(x^2 - 2x + 2) = 0$ tem raízes $1, 1\\pm i$ cujo produto é $1 \\cdot 2 = 2$. Produto total $= 8$, alternativa **D**.)',
    ],
    proposedAnswer: 'D',
    officialAnswer: 'D',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Para grau **ímpar** (como grau $3$) com $a = 1$, o produto das raízes é o **oposto do termo independente**! Logo, $rst = -(-4) = 4$ e $uvw = -(-2) = 2 \\implies 4 \\cdot 2 = 8$ (**D**) em 5 segundos — sem achar nenhuma raiz!',
    shortcutApplicability:
      'Imediato para qualquer equação polinomial de grau $n$ em que se peça soma, produto ou soma de produtos simétricos das raízes.',
    shortcutLimitations:
      'Cuidado com o sinal $(-1)^n$: para grau **par** ($n=2, 4$), o produto é $+d/a$; para grau **ímpar** ($n=3, 5$), é $-d/a$. E lembre sempre de dividir por $a$ se o coeficiente líder não for $1$.',
    universalMethod:
      'Relações de Girard em $a_n x^n + a_{n-1}x^{n-1} + \\dots + a_0 = 0$: (1) soma das raízes $= -\\frac{a_{n-1}}{a_n}$; (2) produto das raízes $= (-1)^n \\frac{a_0}{a_n}$. Não tente resolver o polinômio cúbico antes de checar se Girard resolve diretamente.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$24$ multiplicaria $6 \\cdot 4$ ou somaria/multiplicaria coeficientes incorretos.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$1/24$ é o inverso de $24$, sem relação com o produto das raízes.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$-8$ ocorre se o estudante esquecer o sinal negativo de $(-1)^3$ em apenas uma das duas equações.',
      },
      {
        letter: 'D',
        status: 'correta',
        explanation:
          '$rst = -(-4) = 4$ e $uvw = -(-2) = 2$, portanto $rstuvw = 4 \\cdot 2 = 8$.',
      },
      {
        letter: 'E',
        status: 'incorreta',
        explanation:
          '$1/8$ seria o produto dos recíprocos $\\frac{1}{rstuvw}$, e não o produto pedido.',
      },
    ],
    commonTraps: [
      'Errar o sinal de $(-1)^3$ nas duas equações pode mascarar o erro (pois $(-4)\\cdot(-2) = +8$), mas errar em apenas uma leva a $-8$ (C).',
      'Perder minutos tentando aplicar Briot-Ruffini para achar raízes reais e complexas quando o produto já sai direto do termo independente.',
    ],
    essentialKnowledge: [
      'Em $ax^3 + bx^2 + cx + d = 0$: $r+s+t = -b/a$, $rs+rt+st = c/a$ e $rst = -d/a$.',
      'Regra mnemônica de sinais de Girard: começa sempre com **$-$** (soma), depois **$+$**, depois **$-$**, alternando até o produto.',
    ],
    transferExercise: {
      prompt:
        'Sejam $r, s, t$ as raízes de $2x^3 - 5x^2 + 7x - 6 = 0$ e $u, v$ as raízes de $3x^2 - 4x + 9 = 0$. Calcule $r \\cdot s \\cdot t \\cdot u \\cdot v$.',
      hint: 'Atenção ao coeficiente líder ($2$ e $3$) e ao grau ($3$ é ímpar, $2$ é par)!',
      expectedAnswer: '$r \\cdot s \\cdot t \\cdot u \\cdot v = 9$.',
      justification:
        'Na cúbica ($n=3$), $rst = -\\frac{-6}{2} = 3$. Na quadrática ($n=2$), $uv = +\\frac{9}{3} = 3$. Produto $= 3 \\cdot 3 = 9$.',
      solutionSummary: '$rst = 3$ e $uv = 3 \\implies rstuv = 9$.',
    },
    relatedQuestionIds: ['ufrr-2024-q16', 'ufrr-2024-q18', 'ufrr-2023-q17', 'ufrr-2022-q18'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Aplicação das relações de Girard e verificação explícita das raízes complexas confirmam $8$ (D), igual ao gabarito preliminar divulgado (17-D).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
  {
    questionId: 'ufrr-2026-q18',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Geometria Analítica',
    subtopic: 'Cônicas — Elipse',
    questionType: 'mat-conicas-elipse-definicao',
    methodTitle: 'Definição Métrica da Elipse (PF₁ + PF₂ = 2a) pela Equação Reduzida',
    questionInterpretation:
      'Dada a elipse $C: 9x^2 + 25y^2 - 225 = 0$ e um ponto $P \\in C$ cuja distância ao foco $F_2$ é $1$, pede-se a distância de $P$ ao outro foco $F_1$.',
    stepByStepSolution: [
      '1. Passe $225$ para o lado direito e divida toda a equação por $225$ para obter a **forma reduzida** da elipse: $$\\frac{9x^2}{225} + \\frac{25y^2}{225} = 1 \\implies \\frac{x^2}{25} + \\frac{y^2}{9} = 1.$$',
      '2. Compare com $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ (lembrando que em elipses, $a > b$, logo $a^2$ é sempre o maior denominador): $$a^2 = 25 \\implies a = 5, \\qquad b^2 = 9 \\implies b = 3.$$',
      '3. Pela **definição geométrica** da elipse, a soma das distâncias de qualquer ponto $P \\in C$ aos dois focos $F_1$ e $F_2$ é constante e igual ao eixo maior $2a$: $$d(P, F_1) + d(P, F_2) = 2a = 2 \\cdot 5 = 10.$$',
      '4. (Checagem de consistência: $c = \\sqrt{a^2 - b^2} = \\sqrt{25-9} = 4$; distância mínima de um ponto da elipse a um foco é $a - c = 5 - 4 = 1$ e máxima é $a + c = 9$, logo $PF_2 = 1$ ocorre exatamente no vértice mais próximo de $F_2$!) Substituindo $d(P, F_2) = 1$: $$d(P, F_1) + 1 = 10 \\implies d(P, F_1) = 9.$$',
    ],
    proposedAnswer: 'E',
    officialAnswer: 'E',
    officialAnswerSource:
      'Gabarito preliminar divulgado (CPV/UFRR — FolhaBV); sem retificação no Edital 93/25-CPV',
    officialAnswerStatus: 'preliminary_reported',
    shortcutMethod:
      'Divida $225$ pelos coeficientes de $x^2$ e $y^2$ mentalmente: $\\frac{225}{9} = 25 = a^2 \\implies a = 5 \\implies 2a = 10$. Como $PF_1 + PF_2 = 2a$ e $PF_2 = 1$, imediatamente $PF_1 = 10 - 1 = 9$ (**E**)!',
    shortcutApplicability:
      'Sempre que a questão der a equação de uma elipse e a distância de um ponto $P$ a um foco pedindo a distância ao outro foco.',
    shortcutLimitations:
      'Não confunda com **hipérbole**: na hipérbole ($-$ entre os termos), é o módulo da *diferença* $|PF_1 - PF_2| = 2a$ que se mantém constante.',
    universalMethod:
      'Em toda questão de cônicas centradas na origem: (1) normalize o termo independente para $1$; (2) identifique sinais ($+$ e $+$ com denominadores distintos $\\to$ elipse; $+$ e $-$ $\\to$ hipérbole); (3) na elipse, $a = \\sqrt{\\max(\\text{denominadores})}$ e $PF_1 + PF_2 = 2a$.',
    alternativeAnalysis: [
      {
        letter: 'A',
        status: 'incorreta',
        explanation:
          '$5$ é o semieixo maior $a = \\sqrt{25}$, e não $PF_1 = 2a - 1$.',
      },
      {
        letter: 'B',
        status: 'incorreta',
        explanation:
          '$3$ é o semieixo menor $b = \\sqrt{9}$.',
      },
      {
        letter: 'C',
        status: 'incorreta',
        explanation:
          '$1$ é o valor dado para $PF_2$, não para $PF_1$.',
      },
      {
        letter: 'D',
        status: 'incorreta',
        explanation:
          '$8$ é a distância focal $2c = 2 \\cdot 4$ (ou erro ao fazer $9 - 1$).',
      },
      {
        letter: 'E',
        status: 'correta',
        explanation:
          '$2a = 10$ e $PF_1 + PF_2 = 2a \\implies PF_1 = 10 - 1 = 9$.',
      },
    ],
    commonTraps: [
      'Achar que $PF_1 + PF_2 = a$ (em vez de $2a$), respondendo $5 - 1 = 4$, ou esquecer de subtrair $PF_2$ e marcar $a = 5$ (A) ou $2c = 8$ (D).',
      'Trocar $a$ e $b$: em $9x^2 + 25y^2 = 225$, o coeficiente menor ($9$) gera o denominador maior ($25$).',
    ],
    essentialKnowledge: [
      'Elipse: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$), com $a^2 = b^2 + c^2$ e $PF_1 + PF_2 = 2a$.',
      'Hipérbole: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, com $c^2 = a^2 + b^2$ e $|PF_1 - PF_2| = 2a$.',
    ],
    transferExercise: {
      prompt:
        'Na elipse $16x^2 + 25y^2 = 400$, um ponto $P$ está a distância $3$ de um dos focos. Qual é a distância de $P$ ao outro foco?',
      hint: 'Divida por $400$ para achar $a^2$, depois use $PF_1 + PF_2 = 2a$.',
      expectedAnswer: '$7$.',
      justification:
        '$\\frac{x^2}{25} + \\frac{y^2}{16} = 1 \\implies a^2 = 25 \\implies a = 5 \\implies 2a = 10$. Logo $PF_1 = 10 - 3 = 7$.',
      solutionSummary: '$a = 5 \\implies 2a = 10 \\implies 10 - 3 = 7$.',
    },
    relatedQuestionIds: ['ufrr-2025-q18', 'ufrr-2024-q17', 'ufrr-2023-q18'],
    verificationStatus: 'proposed_pending_official',
    verificationNotes:
      'Redução da cônica e verificação focal ($a-c = 1, a+c = 9$) confirmam $9$ (E), igual ao gabarito preliminar divulgado (18-E).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 1,
  },
];
