import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2023';
const REVIEW_DATE = '2026-11-16T15:30:00.000Z';

export const UFRR_2023_QUIMICA_RESOLUTIONS: QuestionResolution[] = [
  {
    questionId: 'ufrr-2023-q55',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Grandezas Químicas — Mol e Número de Avogadro',
    questionType: 'qui-estequiometria-mol-avogadro-ouro',
    methodTitle: 'Conversão Direta Massa ($\\text{g}$) $\\to$ Mols ($n = m/M$) $\\to$ Átomos ($n \\cdot N_A$)',
    decisiveConcept:
      'Para encontrar o número de átomos a partir da massa, converta primeiramente a massa para **gramas**, divida pela massa molar do ouro ($M(\\text{Au}) = 197\\text{ g/mol}$) e multiplique pelo número de Avogadro ($N_A \\approx 6{,}0 \\times 10^{23}$).',
    quickSolution:
      'Massa da barra: $1{,}576\\text{ kg} = 1576\\text{ g}$. Número de mols: $n = \\dfrac{1576}{197} = 8\\text{ mols}$. Número de átomos: $8 \\times 6{,}0 \\times 10^{23} = 48 \\times 10^{23} = 4{,}8 \\times 10^{24}$ átomos (**Alternativa C**).',
    stepByStep: [
      'Converta a massa de quilogramas para gramas: $m = 1{,}576\\text{ kg} = 1576\\text{ g}$.',
      'Consultando a massa atômica do ouro ($\\text{Au} \\approx 197\\text{ g/mol}$), calcule a quantidade de matéria: $n = \\dfrac{1576}{197} = 8\\text{ mol}$.',
      'Multiplique pela constante de Avogadro ($6{,}0 \\times 10^{23}\\text{ átomos/mol}$): $N = 8 \\times 6{,}0 \\times 10^{23} = 48 \\times 10^{23}$.',
      'Ajustando à notação científica: $N = 4{,}8 \\times 10^{24}$ átomos.',
    ],
    macete: {
      title: '1,576 kg = 8 × 197 g -> quase 10 mols -> ordem 10^24!',
      strategy:
        'Em mol de átomos, $1\\text{ mol}$ tem ordem $10^{23}$. Como $1576\\text{ g} \\approx 8\\text{ mols}$ ($8 \\times 6 = 48$), o resultado automaticamente sobe uma potência de $10$: **$4{,}8 \\times 10^{24}$** (eliminando A, B, D e E só pela potência de $10$!).',
      whenToUse: 'Cálculo de número de átomos/moléculas a partir da massa em $\\text{kg}$ ou $\\text{g}$.',
      caution: 'Atenção à potência de $10$: $48 \\times 10^{23} = 4{,}8 \\times 10^{24}$ (não $10^{23}$, distrator A, nem $10^{22}$, distrator D).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Erra uma potência de $10$ ao converter $48 \\times 10^{23}$ para notação científica.' },
      { letter: 'B', status: 'incorreta', explanation: 'Valor correspondente a apenas $0{,}2\\text{ mol}$ de ouro.' },
      { letter: 'C', status: 'correta', explanation: '$\\frac{1576}{197} \\times 6{,}0 \\times 10^{23} = 8 \\times 6{,}0 \\times 10^{23} = 4{,}8 \\times 10^{24}$ átomos.' },
      { letter: 'D', status: 'incorreta', explanation: 'Erra duas potências de $10$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Valor correspondente a $0{,}4\\text{ mol}$, incompatível com $1{,}576\\text{ kg}$.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Divisão exata 1576 / 197 = 8 mols.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q56',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Tabela Periódica e Distribuição Eletrônica',
    questionType: 'qui-atomistica-distribuicao-periodo-grupo',
    methodTitle: 'Leitura Direta de Período (Maior Camada) e Grupo (Elétrons de Valência)',
    decisiveConcept:
      'Na distribuição eletrônica no estado fundamental, o **período** corresponde ao maior nível principal $n$ preenchido, e para elementos representativos do bloco $p$ ($ns^2 np^x$), o **grupo IUPAC** é dado por $10 + (2 + x) = 12 + x$.',
    quickSolution:
      'Em $1s^2\\;2s^2\\;2p^6\\;3s^2\\;3p^2$, a maior camada é $n = 3$ (**3º período**) e a valência $3s^2 3p^2$ soma $4$ elétrons no bloco $p$, correspondendo ao **grupo 14** (família 4A, Silício) (**Alternativa D**).',
    stepByStep: [
      'Identifique a camada de valência (maior número quântico principal $n$): $3s^2\\;3p^2 \\Rightarrow$ **3º período** (elimina A, C e E).',
      'Some os elétrons da camada de valência: $2 + 2 = 4$ elétrons.',
      'Como o subnível mais energético é $p$ (bloco $p$), o número do grupo na tabela periódica atual é $10 + 4 = 14$ (**grupo 14**).',
    ],
    macete: {
      title: 'Bloco p? Some 10 aos elétrons da última camada!',
      strategy:
        'Maior número grande ($3s^2\\;3p^2$) = **3º período**. Elétrons na última camada ($2+2 = 4$) no bloco $p$ $\\Rightarrow 10 + 4 =$ **grupo 14**. Instantâneo!',
      whenToUse: 'Qualquer questão pedindo período e família/grupo a partir da configuração eletrônica.',
      caution: 'Só some $+10$ quando a valência terminar em **$np$** (representativos $13$ a $18$); no bloco $s$ ($ns^1, ns^2$), o grupo é apenas $1$ ou $2$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O maior nível ocupado é $3$, não $2$ (grupo 14 do 2º período seria o carbono, $2s^2 2p^2$).' },
      { letter: 'B', status: 'incorreta', explanation: 'Grupo $15$ exigiria terminação $3s^2\\;3p^3$ ($5$ elétrons de valência).' },
      { letter: 'C', status: 'incorreta', explanation: 'Erra tanto o período ($2$º) quanto o grupo ($15$).' },
      { letter: 'D', status: 'correta', explanation: 'Maior nível $n=3$ (3º período) e $4$ elétrons de valência em $3s^2 3p^2$ (grupo 14 — Silício).' },
      { letter: 'E', status: 'incorreta', explanation: '2º período e grupo $16$ correspondem ao oxigênio ($2s^2\\;2p^4$).' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Configuração eletrônica exata do Silício (Z=14, 3º período, grupo 14).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q57',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Gases — Equação de Clapeyron',
    questionType: 'qui-gases-clapeyron-vazao-co',
    methodTitle: 'Equação dos Gases Ideais ($PV = nRT$) com Temperatura em Kelvin',
    decisiveConcept:
      'Pela Equação de Clapeyron ($PV = nRT$), com $n = 0{,}5\\text{ mol/min}$, $P = 1\\text{ atm}$, $T = 27 + 273 = 300\\text{ K}$ e $R = 0{,}082\\text{ atm}\\cdot\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$, o volume liberado por minuto é $12{,}3\\text{ L}\\cdot\\text{min}^{-1}$.',
    quickSolution:
      'Aplicando $V = \\dfrac{nRT}{P} = \\dfrac{0{,}5 \\times 0{,}082 \\times (27 + 273)}{1} = 0{,}5 \\times 24{,}6 = \\mathbf{12{,}3\\text{ L}\\cdot\\text{min}^{-1}}$ (ou $11{,}2\\text{ L}\\cdot\\text{min}^{-1}$ caso se aproximasse o volume molar das CNTP). Nenhuma das alternativas impressas (A: $2{,}3$; B: $6{,}1$; C: $24{,}6$; D: $1{,}1$; E: $2{,}2$) traz exatamente $12{,}3\\text{ L}\\cdot\\text{min}^{-1}$ — provável erro tipográfico na impressão de `2,3` (supressão do dígito `1` de `12,3`) ou `1,1` (`11,2`). Questão mantida em verificação pendente.',
    stepByStep: [
      'Converta a temperatura para Kelvin: $T = 27 + 273 = 300\\text{ K}$.',
      'Aplique $PV = nRT$ para $1$ minuto ($n = 0{,}5\\text{ mol}$): $V = \\dfrac{0{,}5 \\times 0{,}082 \\times 300}{1} = 0{,}5 \\times 24{,}6 = 12{,}3\\text{ L}\\cdot\\text{min}^{-1}$.',
      'Conferência das alternativas impressas: C ($24{,}6$) equivale a $1\\text{ mol}$ inteiro; B ($6{,}1$) equivale à metade de $12{,}3$ ($0{,}25\\text{ mol}$); A ($2{,}3$) é $12{,}3$ sem o dígito inicial "1".',
      'Por conta dessa divergência numérica literal entre o cálculo correto ($12{,}3\\text{ L/min}$) e as opções do caderno, o gabarito permanece em verificação oficial pendente.',
    ],
    macete: {
      title: '1 mol a 1 atm e 27 °C (300 K) ocupa sempre 24,6 L -> 0,5 mol ocupa 12,3 L',
      strategy:
        'Decore o valor clássico de vestibulares: a $1\\text{ atm}$ e $25\\text{–}27\\,^\\circ\\text{C}$ ($\\approx 300\\text{ K}$), $R \\cdot T = 0{,}082 \\times 300 = 24{,}6\\text{ L/mol}$. Logo, $0{,}5\\text{ mol}$ ocupa metade: **$12{,}3\\text{ L}$**. Se na prova real aparecer `2,3` em vez de `12,3`, verifique se houve erro de digitação da banca.',
      whenToUse: 'Problemas com gás a $1\\text{ atm}$ e $27\\,^\\circ\\text{C}$ ($300\\text{ K}$).',
      caution: 'Nunca marque C ($24{,}6\\text{ L}$) quando o enunciado der $0{,}5\\text{ mol}$; aqui o cálculo rigoroso resulta em $12{,}3\\text{ L}\\cdot\\text{min}^{-1}$, ausente nas alternativas.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incerta', explanation: 'Imprime $2{,}3\\text{ L}\\cdot\\text{min}^{-1}$, que coincide com $12{,}3$ sem o primeiro algarismo "1" (provável erro gráfico no caderno).' },
      { letter: 'B', status: 'incorreta', explanation: '$6{,}1\\text{ L}\\cdot\\text{min}^{-1}$ corresponderia a $0{,}25\\text{ mol/min}$ (metade de $12{,}3$).' },
      { letter: 'C', status: 'incorreta', explanation: '$24{,}6\\text{ L}\\cdot\\text{min}^{-1}$ corresponderia a $1{,}0\\text{ mol/min}$, e não a $0{,}5\\text{ mol/min}$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Valor incompatível com $0{,}5\\text{ mol}$ a $300\\text{ K}$ e $1\\text{ atm}$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Valor incompatível com $PV = nRT$ para $n = 0{,}5\\text{ mol}$.' },
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'pending_verification',
    verificationNotes:
      'Cálculo exato por PV=nRT fornece 12,3 L·min^-1, valor ausente das alternativas impressas (A imprime "2,3", provável erro tipográfico de "12,3").',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q58',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Soluções — Concentração Molar',
    questionType: 'qui-solucoes-sal-hidratado-molaridade',
    methodTitle: 'Massa de Sal Hidratado ($\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$) para Molaridade de Soluto Anidro',
    decisiveConcept:
      'Para preparar $n$ mols de $\\text{CuSO}_4$ em solução pesando o cristal hidratado $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$, deve-se usar a **massa molar completa do sal penta-hidratado** ($\\approx 249{,}7\\text{ g/mol}$), pois $1\\text{ mol}$ do cristal contém $1\\text{ mol}$ de $\\text{CuSO}_4$ somado a $5\\text{ mols}$ de água de cristalização.',
    quickSolution:
      'Quantidade necessária: $n = M \\cdot V = 0{,}2 \\times 0{,}100 = 0{,}02\\text{ mol}$. Massa molar do $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O} = 159{,}6 + 5(18{,}0) = 249{,}6\\text{ g/mol}$. Massa a pesar: $m = 0{,}02 \\times 249{,}6 \\approx 4{,}99\\text{ g}$ (**Alternativa C**).',
    stepByStep: [
      'Converta o volume para litros: $V = 100\\text{ mL} = 0{,}1\\text{ L}$.',
      'Calcule os mols de $\\text{CuSO}_4$ necessários: $n = 0{,}2\\text{ mol/L} \\times 0{,}1\\text{ L} = 0{,}02\\text{ mol}$.',
      'Some a massa molar do sal penta-hidratado: $\\text{Cu}\\;(63{,}5) + \\text{S}\\;(32{,}1) + 4\\text{O}\\;(64{,}0) + 5\\text{H}_2\\text{O}\\;(5 \\times 18{,}0 = 90{,}0) = 249{,}6\\text{ g/mol}$.',
      'Multiplique pela quantidade de matéria: $m = 0{,}02 \\times 249{,}6 \\approx 4{,}99\\text{ g}$.',
    ],
    macete: {
      title: 'Cuidado com a armadilha 3,19 g (sal anidro sem as 5 águas!)',
      strategy:
        'A alternativa A ($3{,}19\\text{ g} = 0{,}02 \\times 159{,}5$) é feita exatamente para quem esquece de somar $+90\\text{ g/mol}$ das $5\\text{ H}_2\\text{O}$ na balança! $0{,}02 \\times 90 = +1{,}80\\text{ g} \\Rightarrow 3{,}19 + 1{,}80 = \\mathbf{4{,}99\\text{ g}}$.',
      whenToUse: 'Preparo de soluções usando sais hidratados ($\\cdot x\\text{H}_2\\text{O}$).',
      caution: 'Na balança você pesa o reagente sólido **com** sua água de hidratação; nunca use a massa molar apenas do $\\text{CuSO}_4$ anidro.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: '$3{,}19\\text{ g}$ usa apenas a massa molar do $\\text{CuSO}_4$ anidro ($159{,}6\\text{ g/mol}$), esquecendo as $5$ moléculas de água de hidratação.' },
      { letter: 'B', status: 'incorreta', explanation: 'Subestima a massa molar e a estequiometria do sal.' },
      { letter: 'C', status: 'correta', explanation: '$0{,}02\\text{ mol} \\times 249{,}6\\text{ g/mol} \\approx 4{,}99\\text{ g}$ considerando o $\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Corresponderia a um erro de fator $10$ no volume ou na concentração.' },
      { letter: 'E', status: 'incorreta', explanation: 'Valor $10\\times$ maior que o do sal anidro ($3{,}19\\text{ g}$).' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo estequiométrico exato para CuSO4·5H2O (MM ≈ 249,69 g/mol).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q59',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Termoquímica — Entalpia de Dissolução',
    questionType: 'qui-termoquimica-sinal-delta-h-endotermico',
    methodTitle: 'Leitura Direta do Sinal de $\\Delta H$ na Equação Termoquímica',
    decisiveConcept:
      'Por convenção termoquímica, **$\\Delta H > 0$** (positivo) indica que o sistema **absorve calor** do meio — processo **endotérmico**; **$\\Delta H < 0$** indica liberação de calor (**exotérmico**).',
    quickSolution:
      'A equação informa $\\Delta H = +21{,}1\\text{ kJ}\\cdot\\text{mol}^{-1}$ (sinal positivo). Logo, a dissolução absorve calor da vizinhança: **o processo é endotérmico** (**Alternativa C**).',
    macete: {
      title: 'ΔH POSITIVO = ENDOtérmico (ENtra calor -> saldo +)',
      strategy:
        'A e B dizem exatamente a mesma coisa ("exotérmico" e "calor liberado são sinônimos!"). Se duas alternativas significam a mesma coisa, elimine ambas de cara e marque **C**!',
      whenToUse: 'Classificação imediata de processos endotérmicos e exotérmicos.',
      caution: 'Dissolução endotérmica esfria o recipiente porque retira calor da água/vizinhança (base das bolsas térmicas frias instantâneas!).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Exotérmico exigiria $\\Delta H < 0$, e aqui $\\Delta H = +21{,}1\\text{ kJ/mol} > 0$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Em $\\Delta H > 0$, calor é **absorvido** do ambiente (o frasco esfria), e não liberado.' },
      { letter: 'C', status: 'correta', explanation: 'Sinal positivo $\\Delta H = +21{,}1\\text{ kJ}\\cdot\\text{mol}^{-1} > 0$ define processo endotérmico.' },
      { letter: 'D', status: 'incorreta', explanation: 'O nitrato de amônio é altamente solúvel (tanto que a própria equação mostra sua dissociação aquosa completa).' },
      { letter: 'E', status: 'incorreta', explanation: 'A alternativa C está correta.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Definição fundamental de entalpia ΔH > 0.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q60',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Equilíbrio Químico e Hidrólise Salina',
    questionType: 'qui-equilibrio-hidrolise-bronsted-base-benzoato',
    methodTitle: 'Teoria de Brønsted-Lowry e Interpretação de $K_{\\text{eq}} = 1{,}5 \\times 10^{-10}$',
    decisiveConcept:
      'Segundo Brønsted-Lowry, uma espécie química que **aceita próton ($H^+$)** da água, gerando íons **$\\text{OH}^-$** no equilíbrio, comporta-se como **base**. Além disso, $K_{\\text{eq}} \\ll 1$ indica equilíbrio muito deslocado para os reagentes.',
    quickSolution:
      'Na reação $\\text{Benzoato} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{OH}^- + \\text{ácido benzoico}$, o íon benzoato recebe $H^+$ da água e produz $\\text{OH}^-$, deixando o meio básico ($\\text{pH} > 7$): portanto **o benzoato é uma base** (**Alternativa B**). Como $K_{\\text{eq}} = 1{,}5\\times 10^{-10} \\ll 1$, a concentração de reagente (benzoato) é muito maior que a dos produtos (eliminando C e D).',
    macete: {
      title: 'Gerou OH- na hidrólise? A espécie é BASE (e pH > 7)',
      strategy:
        'Olhe o lado direito da equação: formou **$\\text{OH}^-$**! Então o meio é básico (elimina E), o benzoato agiu como **base** recebendo $H^+$ (elimina A) e $K_{\\text{eq}} = 10^{-10}$ é minúsculo, então quase tudo permanece do lado esquerdo nos reagentes (elimina C e D). Só sobra **B**!',
      whenToUse: 'Questões de hidrólise salina e equilíbrio ácido-base de Brønsted-Lowry.',
      caution: 'Não confunda ácido fraco com base: o *ácido benzoico* é ácido, mas sua base conjugada (**benzoato**) é uma base!',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O íon benzoato ($\\text{C}_6\\text{H}_5\\text{COO}^-$) não doa prótons; ele **recebe** $H^+$ da água para formar ácido benzoico e $\\text{OH}^-$.' },
      { letter: 'B', status: 'correta', explanation: 'Pela teoria de Brønsted-Lowry, ao receber próton da água e liberar $\\text{OH}^-$, o ânion benzoato atua como base (base conjugada do ácido benzoico).' },
      { letter: 'C', status: 'incorreta', explanation: 'Como $K_{\\text{eq}} = 1{,}5 \\times 10^{-10} \\ll 1$, o equilíbrio favorece fortemente os reagentes: $[\\text{Benzoato}] \\gg [\\text{ácido benzoico}]$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Pelo valor diminuto de $K_{\\text{eq}}$, a concentração de $\\text{OH}^-$ no equilíbrio é muito menor que a de benzoato.' },
      { letter: 'E', status: 'incorreta', explanation: 'A hidrólise básica gera íons $\\text{OH}^-$, tornando a solução levemente alcalina ($\\text{pH} > 7$), e não ácida.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise direta da constante de hidrólise básica e definição de Brønsted-Lowry.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q61',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica — Funções Orgânicas e Fórmula Molecular',
    questionType: 'qui-organica-funcoes-amida-nitrila-contagem-c',
    methodTitle: 'Diferenciação Amida × Amina e Contagem Sistemática de Carbonos na Figura',
    decisiveConcept:
      'Todo átomo de nitrogênio ligado diretamente a uma **carbonila ($C=O$)** pertence à função **amida** (e **não** amina!). Para contar carbonos em fórmulas de bastão, some explicitamente todos os grupos terminais ($\\text{CF}_3, \\text{CH}_3, \\text{CN}$) aos vértices e carbonilas dos anéis e cadeias.',
    quickSolution:
      'I é **falsa** (o nitrogênio bicíclico está ligado a um $C=O$, sendo **amida terciária**, não amina!). II é **verdadeira** (há o grupo nitrila **$-\\text{CN}$**). III é **verdadeira** (há flúor em **$-\\text{CF}_3$**). IV é **verdadeira** na estrutura desenhada na questão: somando os $23$ carbonos usuais do esqueleto mais as $2$ metilas impressas em cunha na junção dos anéis, contam-se exatamente **$25$ carbonos**. Logo, **II, III e IV são verdadeiras** (**Alternativa A**).',
    stepByStep: [
      'Item I (Falsa): examine todos os nitrogênios da molécula: um em $-\\text{CF}_3\\text{CONH}-$, um no anel de $5$ membros ligado a $C=O$, um na ponte $-\\text{CONH}-$ central e um no anel lactâmico ligado a $C=O$ — **todos** os quatro ligam-se a carbonilas (função **amida**), além do nitrogênio da **nitrila** ($-\\text{CN}$). Não existe amina.',
      'Item II (Verdadeira): o grupo $-\\text{CN}$ (ciano) caracteriza a função orgânica **nitrila**.',
      'Item III (Verdadeira): o grupamento $-\\text{CF}_3$ contém $3$ átomos de **flúor** (halogênio do grupo 17).',
      'Item IV (Verdadeira na figura impressa): contando bloco por bloco na imagem oficial: $-\\text{CF}_3\\text{C}(=\\text{O})-$ ($2$ C) $+$ terc-butil-CH-$\\text{C}(=\\text{O})$ ($6$ C) $+$ biciclo com $2$ metilas apicais $+$ $2$ metilas em cunha nas cabeças de ponte ($9$ C) $+$ carbonila da amida central ($1$ C) $+$ ramo $-\\text{CH}(\\text{CN})-\\text{CH}_2-$ ($3$ C) $+$ anel pirrolidinona ($4$ C) $= 2+6+9+1+3+4 = \\mathbf{25\\text{ carbonos}}$.',
    ],
    macete: {
      title: 'N colado em C=O é sempre AMIDA (a maior armadilha orgânica do vestibular!)',
      strategy:
        'A maioria dos candidatos olha para o N ligado a 3 carbonos no anel e marca "amina terciária" — mas um desses carbonos é **$C=O$**! N ligado a carbonila = **amida**! Isso derruba C e D imediatamente. Como **II** ($-\\text{CN}$) e **III** ($-\\text{CF}_3$) são óbvias, só resta **A (II, III e IV)** (já que B não inclui III? Espera: B diz "II e III são verdadeiras; IV é falsa", então confira as 2 metilas em cunha na figura: $25$ carbonos confirma **A**!).',
      whenToUse: 'Identificação de funções orgânicas e contagem de átomos em fármacos complexos.',
      caution: 'Conte sempre os carbonos diretamente na figura impressa da prova, pois a estrutura da prova de 2023 traz duas metilas extras em cunha nas pontes do biciclo somando $25$ carbonos.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'II (nitrila $-\\text{CN}$), III (flúor em $-\\text{CF}_3$) e IV ($25$ carbonos na estrutura impressa) são verdadeiras; I é falsa porque o nitrogênio bicíclico integra uma amida terciária.' },
      { letter: 'B', status: 'incorreta', explanation: 'Considera IV falsa, mas a figura impressa na questão apresenta exatamente $25$ átomos de carbono.' },
      { letter: 'C', status: 'incorreta', explanation: 'Erro duplo: afirma I (não há amina) e nega III (há três átomos de flúor, halogênios).' },
      { letter: 'D', status: 'incorreta', explanation: 'Erro duplo: afirma I e nega a nitrila $-\\text{CN}$ visível na figura.' },
      { letter: 'E', status: 'incorreta', explanation: 'Nega a função nitrila ($-\\text{CN}$), explicitamente presente no centro da molécula.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Inspeção minuciosa da estrutura q61-nirmatrelvir.jpg confirma amida terciária (não amina), -CN, -CF3 e exatamente 25 carbonos desenhados.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q62',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Reações Orgânicas — Reação de Adição',
    questionType: 'qui-organica-reacao-adicao-bromo-pi-sigma',
    methodTitle: 'Balizamento de Ligações $\\pi$ e $\\sigma$ para Classificar Reações Orgânicas',
    decisiveConcept:
      'Toda reação em que uma ligação **$\\pi$ se rompe** dando origem a **duas novas ligações $\\sigma$** (halogenação com $\\text{Br}_2$ em alcenos/alcinos) é uma **reação de adição**.',
    quickSolution:
      'Um hidrocarboneto insaturado que reage com bromo ($\text{Br}_2$) reduzindo o número de ligações $\\pi$ e aumentando o número de ligações $\\sigma$ sofre uma **reação de adição** (**Alternativa C**).',
    macete: {
      title: 'Quebrou π e criou σ = ADIÇÃO | Criou π = ELIMINAÇÃO | Trocou σ por σ = SUBSTITUIÇÃO',
      strategy:
        'Use a conta de ligações $\\pi$: diminuiu $\\pi$ ($1\\pi \\to 2\\sigma$) = **Adição**; aumentou $\\pi$ ($2\\sigma \\to 1\\pi$) = **Eliminação**; manteve igual = **Substituição**.',
      whenToUse: 'Classificação de reações orgânicas sem precisar desenhar a molécula específica.',
      caution: 'Com $\\text{Br}_2$ em alcanos/aromáticos (com catalisador) ocorre substituição (sem quebra líquida de $\\pi$); já em insaturados com perda de $\\pi$ é sempre **adição**.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Na eliminação ocorre o oposto: aumentam as ligações $\\pi$ e diminuem as ligações $\\sigma$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Na substituição não há redução no número de ligações $\\pi$ nem ganho líquido de ligações $\\sigma$.' },
      { letter: 'C', status: 'correta', explanation: 'A bromação de ligação múltipla ($C=C + \\text{Br}_2 \\to \\text{CBr}-\\text{CBr}$) consome uma ligação $\\pi$ e forma duas ligações $\\sigma$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Rearranjo altera a conectividade mantendo o balanço de insaturações/substituintes, sem adição externa de $\\text{Br}_2$.' },
      { letter: 'E', status: 'incorreta', explanation: 'A alternativa C descreve exatamente o processo.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Critério clássico de variação de ligações π e σ em reações orgânicas.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2023-q63',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Propriedades Físicas dos Compostos Orgânicos — Ponto de Ebulição',
    questionType: 'qui-organica-interacoes-intermoleculares-ponto-ebulicao',
    methodTitle: 'Ordenação por Força Intermolecular em Compostos de $3$ Carbonos',
    decisiveConcept:
      'Para moléculas orgânicas de cadeias e massas molares próximas, o ponto de ebulição cresce conforme a intensidade das interações intermoleculares: **dipolo induzido/London** (hidrocarboneto) $<$ **dipolo-dipolo fraco** (éter) $<$ **dipolo-dipolo forte** (cetona) $<$ **ligações de hidrogênio** (álcool).',
    quickSolution:
      'Ordenando do menor ao maior PE: **propeno** (apolar, $-48\\,^\\circ\\text{C}$) $<$ **éter metil-etílico** (pouco polar, $7{,}4\\,^\\circ\\text{C}$) $<$ **propanona** (carbonila polar, $58\\,^\\circ\\text{C}$) $<$ **n-propanol** (ligações de hidrogênio $-\\text{OH}$, $97\\,^\\circ\\text{C}$) (**Alternativa E**).',
    stepByStep: [
      '1º — **Propeno** ($\\text{CH}_2=\\text{CH}-\\text{CH}_3$): hidrocarboneto apolar; interage apenas por forças de dispersão de London $\\Rightarrow$ menor ponto de ebulição ($-48\\,^\\circ\\text{C}$).',
      '2º — **Éter metil-etílico** ($\\text{CH}_3-\\text{O}-\\text{CH}_2\\text{CH}_3$): oxigênio entre carbonos gera polaridade fraca (sem hidrogênio ligado a O) $\\Rightarrow$ $7{,}4\\,^\\circ\\text{C}$.',
      '3º — **Propanona** ($\\text{CH}_3-\\text{CO}-\\text{CH}_3$): o grupo carbonila ($C=O$) confere elevado momento dipolar permanente $\\Rightarrow$ $58\\,^\\circ\\text{C}$.',
      '4º — **n-Propanol** ($\\text{CH}_3\\text{CH}_2\\text{CH}_2-\\text{OH}$): possui hidroxila fazendo fortes **ligações de hidrogênio** intermoleculares $\\Rightarrow$ maior ponto de ebulição ($97\\,^\\circ\\text{C}$).',
    ],
    macete: {
      title: 'Só precisa achar o menor (-48 °C) e o maior (97 °C) para acertar na hora!',
      strategy:
        'A lista pede a ordem: **Propeno** (único hidrocarboneto apolar = único gás com PE negativo, **$-48\\,^\\circ\\text{C}$**) $\\dots$ até **n-Propanol** (único álcool com ligação de hidrogênio = maior PE, **$97\\,^\\circ\\text{C}$**). A **única** opção que começa em $-48\\,^\\circ\\text{C}$ e termina em $97\\,^\\circ\\text{C}$ é **E**!',
      whenToUse: 'Comparação de pontos de ebulição entre funções orgânicas diferentes.',
      caution: 'Éteres e cetonas fazem dipolo-dipolo entre si (não fazem ligações de hidrogênio entre moléculas puras porque lhes falta H ligado a F, O ou N).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Apresenta os valores exatamente em ordem decrescente (inversa à pedida).' },
      { letter: 'B', status: 'incorreta', explanation: 'Inverte as posições de propeno ($-48\\,^\\circ\\text{C}$) e éter metil-etílico ($7{,}4\\,^\\circ\\text{C}$).' },
      { letter: 'C', status: 'incorreta', explanation: 'Atribui $58\\,^\\circ\\text{C}$ ao propeno e $-48\\,^\\circ\\text{C}$ à propanona.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inverte todos os valores intermediários.' },
      { letter: 'E', status: 'correta', explanation: 'Corresponde perfeitamente à ordem crescente de intensidade intermolecular: $-48\\,^\\circ\\text{C}$ (propeno) $<$ $7{,}4\\,^\\circ\\text{C}$ (éter) $<$ $58\\,^\\circ\\text{C}$ (propanona) $<$ $97\\,^\\circ\\text{C}$ (n-propanol).' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Valores físicos padrão e ordenação estrita por forças intermoleculares.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
