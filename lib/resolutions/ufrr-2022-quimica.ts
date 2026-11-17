import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2022';
const REVIEW_DATE = '2026-11-16T16:15:00.000Z';

export const UFRR_2022_QUIMICA_RESOLUTIONS: QuestionResolution[] = [
  {
    questionId: 'ufrr-2022-q55',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Estrutura Atômica — Distribuição Eletrônica',
    questionType: 'qui-atomistica-distribuicao-eletronica-au-hg',
    methodTitle: 'Exceção $d^9 s^2 \\to d^{10} s^1$ no Ouro ($\text{Au}$) e Retirada da Camada de Valência em $\text{Hg}^{2+}$',
    decisiveConcept:
      '1. O **ouro ($\text{Au}$, $Z=79$)** pertence ao grupo 11 (mesma família de $\text{Cu}$ e $\text{Ag}$), sofrendo promoção eletrônica de $6s$ para completar o subnível $5d^{10}$: $[\\text{Xe}]4f^{14}5d^{10}6s^1$.\n2. Na ionização de metais de transição, os elétrons saem primeiro da **camada mais externa ($6s$)**, nunca do $5d$: logo $\text{Hg}$ ($[\\text{Xe}]4f^{14}5d^{10}6s^2$) forma $\text{Hg}^{2+}$ com configuração $[\\text{Xe}]4f^{14}5d^{10}$.',
    quickSolution:
      'O ouro elementar ($Z = 79$) apresenta a anomalia estável de subnível $d$ completo: **$[\\text{Xe}]4f^{14}5d^{10}6s^{1}$**.\n\nO cátion mais estável do mercúrio ($Z = 80$) citado no texto é o **divalente** ($\text{Hg}^{2+}$), formado pela perda dos dois elétrons do nível mais externo ($6s^2$), resultando em **$[\\text{Xe}]4f^{14}5d^{10}$** (**Alternativa D**).',
    macete: {
      title: 'Família do Cobre (Cu, Ag, Au) termina em d¹⁰ s¹; Cátion de transição perde s antes de d!',
      strategy:
        'Duas regras rápidas resolvem sem contar 80 elétrons: (1) $\\text{Au}$ é do grupo do $\\text{Cu/Ag}$, então prefere $5d^{10}6s^1$ a $5d^9 6s^2$ (corta B e E); (2) cátion **divalente** do $\\text{Hg}$ perdeu 2 elétrons do $6s^2$, logo não tem mais $6s$ (corta A e C)! Sobra apenas **D**!',
      whenToUse: 'Questões de distribuição eletrônica de metais de transição externos e seus cátions.',
      caution: 'Lembre que o subnível mais energético ($5d$) nem sempre é o mais externo ($6s$) — na formação de cátions, removem-se sempre os elétrons da **camada mais externa** ($n = 6$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Apresenta a configuração do mercúrio **neutro** ($\text{Hg}^0$: $6s^2$), e não do cátion divalente $\text{Hg}^{2+}$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Omite a promoção eletrônica do ouro ($5d^9 6s^2$ instável em vez de $5d^{10} 6s^1$).' },
      { letter: 'C', status: 'incorreta', explanation: 'Corresponderia ao cátion **monovalente** ($\text{Hg}^+$), enquanto o texto pede explicitamente a forma **divalente** mais estável ($\text{Hg}^{2+}$).' },
      { letter: 'D', status: 'correta', explanation: 'Traz $[\\text{Xe}]4f^{14}5d^{10}6s^1$ para o ouro metálico e $[\\text{Xe}]4f^{14}5d^{10}$ para o cátion divalente $\\text{Hg}^{2+}$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Erra tanto a configuração do ouro neutro quanto a do cátion $\text{Hg}^{2+}$.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Configurações eletrônicas padrão IUPAC para Au (Z=79) e Hg2+ (Z=80, 78 e-).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q56',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Reações Químicas — Oxirredução e Estequiometria',
    questionType: 'qui-reacoes-oxirreducao-zn-hcl',
    methodTitle: 'Reação de Metal Não Nobre com Ácido ($\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$)',
    decisiveConcept:
      'Metais com potencial de redução menor que o do hidrogênio (como o zinco) reagem com ácidos não oxidantes por **simples troca (oxirredução)**: $\\text{Zn}^0$ oxida-se a $\\text{Zn}^{2+}$ (formando o sal $\\text{ZnCl}_2$, já que o zinco tem NOX fixo $+2$) e $\\text{H}^+$ reduz-se a gás $\\text{H}_2$.',
    quickSolution:
      'A equação balanceada da reação é:\n\n$$\\text{Zn}_{(s)} + 2\\text{HCl}_{(aq)} \\longrightarrow \\text{ZnCl}_{2(aq)} + \\text{H}_{2(g)}$$\n\n(Checagem estequiométrica: $19{,}6\\text{ g}/65{,}4\\text{ g mol}^{-1} \\approx 0{,}30\\text{ mol}$ de $\\text{Zn}$ produz $0{,}30 \\times 136{,}3 \\approx 40{,}9\\text{ g}$ de $\\text{ZnCl}_2$). Há variação de NOX ($\\text{Zn}: 0 \\to +2$; $\\text{H}: +1 \\to 0$), logo é uma **reação de oxirredução** formando **$\\text{ZnCl}_2$ e $\\text{H}_2$** (**Alternativa B**).',
    macete: {
      title: 'Metal puro + Ácido NÃO forma água (forma sal + H₂ por oxirredução)!',
      strategy:
        'Quem forma *sal + água* por reação ácido-base (neutralização) é **base/óxido básico + ácido**, nunca metal puro! Isso já elimina C e D. Como o zinco tem NOX fixo $+2$ e o cloreto é $\\text{Cl}^-$, a fórmula do sal só pode ser **$\\text{ZnCl}_2$** (elimina A). Sobra só **B**!',
      whenToUse: 'Questões envolvendo dissolução de metais em ácido clorídrico/sulfúrico diluído.',
      caution: 'Observe o erro conceitual comum de confundir reação de simples troca metal-ácido com neutralização ácido-base.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O zinco apresenta NOX $+2$ em seus sais estáveis, formando cloreto de zinco de fórmula $\\text{ZnCl}_2$, nunca $\\text{ZnCl}$.' },
      { letter: 'B', status: 'correta', explanation: 'Identifica corretamente a reação de oxirredução ($\\text{Zn}^0 \\to \\text{Zn}^{2+}$ e $2\\text{H}^+ \\to \\text{H}_2$) e a fórmula exata do sal $\\text{ZnCl}_2$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Além da fórmula errada $\\text{ZnCl}$, não é reação ácido-base com formação de água, mas oxirredução liberando $\\text{H}_2$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Embora traga a fórmula correta $\\text{ZnCl}_2$, classifica erroneamente como reação ácido-base formando água (não há $\\text{OH}^-$ no zinco metálico).' },
      { letter: 'E', status: 'incorreta', explanation: 'O próprio enunciado mostra que zinco é insolúvel em água pura (mistura heterogênea) e reage quimicamente no $\\text{HCl}$ formando o sal branco $\\text{ZnCl}_2$.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Confirmado inclusive pela estequiometria do enunciado: 0,30 mol Zn (19,6 g) -> 0,30 mol ZnCl2 (40,9 g).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q57',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Estequiometria e Densidade de Misturas Sólidas',
    questionType: 'qui-estequiometria-densidade-mistura-pepita',
    methodTitle: 'Sistema Massa-Volume da Mistura Sólida + Conversão Massa $\\to$ Átomos',
    decisiveConcept:
      'Numa mistura sólida heterogênea sem contração de volume: $V_{\\text{total}} = V_{\\text{Au}} + V_{\\text{quartzo}} = \\dfrac{m_{\\text{total}}}{d_{\\text{mistura}}}$. Resolvendo para a massa de ouro $m_{\\text{Au}}$, converte-se ao número de átomos via $N = \\dfrac{m_{\\text{Au}}}{M_{\\text{Au}}} \\cdot N_A$.',
    quickSolution:
      'Calculando o volume total da pepita:\n\n$$V_{\\text{total}} = \\frac{93{,}6\\text{ g}}{7{,}8\\text{ g/cm}^3} = 12{,}0\\text{ cm}^3$$\n\nSendo $x$ o volume de ouro ($d = 19{,}3$) e $12 - x$ o de quartzo ($d = 2{,}6$):\n\n$$19{,}3x + 2{,}6(12 - x) = 93{,}6 \\implies 16{,}7x = 62{,}4 \\implies x \\approx 3{,}74\\text{ cm}^3$$\n\nLogo, a massa de ouro na pepita é $m_{\\text{Au}} = 19{,}3 \\times 3{,}7365 \\approx 72{,}1\\text{ g}$. Usando $M(\\text{Au}) = 197\\text{ g/mol}$:\n\n$$n_{\\text{Au}} = \\frac{72{,}1}{197} \\approx 0{,}366\\text{ mol} \\implies N \\approx 0{,}366 \\times 6{,}02 \\times 10^{23} \\approx 2{,}2 \\times 10^{23} \\approx 2 \\times 10^{23}\\text{ átomos}$$\n\n(**Alternativa E**).',
    stepByStep:
      '1. Volume da pepita: $V = \\frac{93{,}6}{7{,}8} = 12\\text{ cm}^3$.\n2. Equação de massa: $m_{\\text{Au}} + m_{\\text{q}} = 93{,}6 \\implies 19{,}3 V_{\\text{Au}} + 2{,}6(12 - V_{\\text{Au}}) = 93{,}6$.\n3. $16{,}7 V_{\\text{Au}} = 93{,}6 - 31{,}2 = 62{,}4 \\implies V_{\\text{Au}} \\approx 3{,}737\\text{ cm}^3$.\n4. Massa de ouro: $m_{\\text{Au}} = 19{,}3 \\times 3{,}737 \\approx 72{,}1\\text{ g}$.\n5. Número de átomos: $\\frac{72{,}1}{197} \\times 6{,}02 \\times 10^{23} \\approx 2{,}2 \\times 10^{23}$ (ordem aproximada: $2 \\times 10^{23}$ átomos).',
    macete: {
      title: '1 mol de ouro (6×10²³ átomos) pesa 197 g — mais que a pepita inteira (93,6 g)!',
      strategy:
        'Olhe as opções antes de fazer qualquer conta! A massa molar do ouro é $\\approx 197\\text{ g/mol}$. Como a pepita INTEIRA pesa apenas $93{,}6\\text{ g}$ (menos que meio mol de ouro!), é **fisicamente impossível** haver $6\\times 10^{23}$ (1 mol = 197 g), $8\\times 10^{23}$, $12\\times 10^{23}$ ou $16\\times 10^{23}$ átomos de ouro dentro dela! A única opção menor que $3\\times 10^{23}$ ($0{,}5\\text{ mol} = 98{,}5\\text{ g}$) é **E ($2\\times 10^{23}$)** — você resolve em 10 segundos sem calculadora!',
      whenToUse: 'Questões quantitativas com massas molares altas onde os distratores ultrapassam a massa total do sistema.',
      caution: 'Esse atalho garante segurança máxima mesmo quando a prova não fornece tabela periódica impressa no texto da questão (basta saber que ouro é pesado, $M \\approx 197\\text{ g/mol}$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: '$16 \\times 10^{23}$ átomos de ouro corresponderiam a mais de $520\\text{ g}$ de ouro, muito acima da massa total da pepita.' },
      { letter: 'B', status: 'incorreta', explanation: '$6 \\times 10^{23}$ átomos equivalem a $1\\text{ mol}$ de ouro ($197\\text{ g}$), impossível dentro de $93{,}6\\text{ g}$.' },
      { letter: 'C', status: 'incorreta', explanation: '$12 \\times 10^{23}$ átomos corresponderiam a $\\approx 2\\text{ mols}$ ($394\\text{ g}$ de ouro).' },
      { letter: 'D', status: 'incorreta', explanation: '$8 \\times 10^{23}$ átomos equivaleriam a $\\approx 262\\text{ g}$ de ouro, impossível na amostra.' },
      { letter: 'E', status: 'correta', explanation: 'Os $72{,}1\\text{ g}$ de ouro presentes na pepita correspondem a $\\approx 0{,}37\\text{ mol} \\approx 2{,}2 \\times 10^{23}$ átomos (arredondado para $2 \\times 10^{23}$).' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Sistema de densidades exato (m_Au = 72,1 g) + verificação física de limite de massa (< 0,475 mol).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q58',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Cinética Química — Lei da Velocidade e Ordem de Reação',
    questionType: 'qui-cinetica-lei-velocidade-ordens-reacao',
    methodTitle: 'Determinação dos Expoentes da Lei de Velocidade ($v = k[A]^\\alpha [B]^\\beta$)',
    decisiveConcept:
      'Na lei de velocidade $v = k[A]^\\alpha [B]^\\beta$: ao variar apenas $[A]$ por um fator $f$, $v$ varia por $f^\\alpha$. Encontrando $\\alpha$, usa-se a variação conjunta de $[A]$ e $[B]$ para isolar $f_A^\\alpha \\cdot f_B^\\beta$.',
    quickSolution:
      '1. Dobrando apenas $[A]$ ($\\times 2$), a velocidade quadruplica ($\\times 4$): $2^\\alpha = 4 \\implies \\alpha = 2$ (**2ª ordem** em A).\n2. Dobrando $[A]$ e $[B]$ juntos, a velocidade aumenta $8$ vezes:\n\n$$2^2 \\cdot 2^\\beta = 8 \\implies 4 \\cdot 2^\\beta = 8 \\implies 2^\\beta = 2 \\implies \\beta = 1$$\n\nLogo, a reação é de **segunda ordem em relação a A e de primeira ordem em relação a B** (**Alternativa C**).',
    stepByStep:
      '1. Escreva $v = k[A]^\\alpha [B]^\\beta$.\n2. Experimento 1: $v_1 = k(2[A])^\\alpha [B]^\\beta = 2^\\alpha v_0 = 4 v_0 \\implies 2^\\alpha = 4 \\implies \\alpha = 2$.\n3. Experimento 2: $v_2 = k(2[A])^2 (2[B])^\\beta = 4 \\cdot 2^\\beta v_0 = 8 v_0 \\implies 2^\\beta = 2 \\implies \\beta = 1$.\n4. Ordem em $A = 2$; ordem em $B = 1$ (ordem global $= 3$).',
    macete: {
      title: 'Ao dobrar [A] e [B], divida o aumento total (8×) pelo efeito já conhecido de A (4×)!',
      strategy:
        'A já contribui com $4\\times$ da velocidade! Como dobrar os dois deu $8\\times$, a contribuição de $B$ ao dobrar $[B]$ foi apenas $8 \\div 4 = 2\\times$! Se dobrar $[B]$ dobra a velocidade, $B$ é de **1ª ordem**!',
      whenToUse: 'Questões de cinética química sobre determinação experimental da lei de velocidade.',
      caution: 'Nunca suponha que a ordem da reação seja igual aos coeficientes estequiométricos a menos que o enunciado informe que a reação é elementar.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Se fosse de 1ª ordem em A, dobrar $[A]$ apenas dobraria a velocidade ($2\\times$), não quadruplicaria ($4\\times$).' },
      { letter: 'B', status: 'incorreta', explanation: 'Se fosse de 2ª ordem em ambos, dobrar $[A]$ e $[B]$ aumentaria a velocidade $4 \\times 4 = 16$ vezes, não $8$.' },
      { letter: 'C', status: 'correta', explanation: '$v = k[A]^2[B]^1$: dobrar $[A]$ dá $2^2=4\\times$ e dobrar ambos dá $2^2 \\cdot 2^1 = 8\\times$.' },
      { letter: 'D', status: 'incorreta', explanation: '3ª ordem em B daria $4 \\times 8 = 32$ vezes ao dobrar ambos.' },
      { letter: 'E', status: 'incorreta', explanation: 'Inverte as contribuições: daria $2^1 = 2\\times$ ao dobrar apenas $[A]$.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'v = k[A]^2[B].',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q59',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Eletroquímica — Pilhas e Potencial Padrão',
    questionType: 'qui-eletroquimica-ddp-pilha-notacao-iupac',
    methodTitle: 'Cálculo da d.d.p. pela Notação da Pilha ($\\text{Ânodo} // \\text{Cátodo}$)',
    decisiveConcept:
      'Na notação abreviada da pilha, a semicélula da **esquerda** é o **ânodo** (oxidação: $\\text{Zn} \\to \\text{Zn}^{2+} + 2e^-$) e a da **direita** é o **cátodo** (redução: $\\text{Fe}^{3+} + e^- \\to \\text{Fe}^{2+}$). A d.d.p. padrão é $\\Delta E^0 = E^0_{\\text{red(cátodo)}} - E^0_{\\text{red(ânodo)}}$.',
    quickSolution:
      'Identificando os eletrodos na notação $\\text{Zn}/\\text{Zn}^{2+} // \\text{Fe}^{2+}, \\text{Fe}^{3+}/\\text{Pt}$:\n- **Cátodo (direita, maior $E^0_{\\text{red}}$)**: $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ com $E^0_{\\text{red}} = +0{,}77\\text{ V}$\n- **Ânodo (esquerda, menor $E^0_{\\text{red}}$)**: $\\text{Zn}^{2+}/\\text{Zn}$ com $E^0_{\\text{red}} = -0{,}76\\text{ V}$\n\nLogo:\n\n$$\\Delta E^0 = (+0{,}77) - (-0{,}76) = +1{,}53\\text{ V}$$\n\n(**Alternativa B**).',
    stepByStep:
      '1. Ambas as semirreações fornecidas estão no sentido de **redução** ($+e^-$).\n2. Como o eletrodo $\\text{Zn}/\\text{Zn}^{2+}$ está à esquerda da barra dupla ($//$), ele sofre **oxidação** ($E^0_{\\text{oxi}} = +0{,}76\\text{ V}$).\n3. Como $\\text{Fe}^{3+}/\\text{Fe}^{2+}$ está à direita, sofre **redução** ($E^0_{\\text{red}} = +0{,}77\\text{ V}$).\n4. Some os potenciais das semirreações efetivas (sem multiplicar por $2$!): $\\Delta E^0 = +0{,}76 + 0{,}77 = +1{,}53\\text{ V}$.',
    macete: {
      title: 'NUNCA multiplique o potencial E⁰ ao balancear os elétrons — e cuidado com o sinal (− com − = +)!',
      strategy:
        'A armadilha E ($+2{,}29\\text{ V}$) vem de multiplicar $+0{,}77 \\times 2 + 0{,}76$ (ou $0{,}76 \\times 2 + 0{,}77 = 2{,}29$)! Potencial elétrico é propriedade intensiva e NUNCA se multiplica! E a armadilha A ($+0{,}01\\text{ V}$) soma $+0{,}77 + (-0{,}76)$ sem inverter o sinal da oxidação do zinco!',
      whenToUse: 'Cálculo de força eletromotriz ($\\Delta E^0$) de pilhas galvânicas.',
      caution: 'Verifique sempre se os elétrons estão antes da seta (potencial de redução) antes de aplicar $E^0_{\\text{maior}} - E^0_{\\text{menor}}$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Soma $+0{,}77 + (-0{,}76) = +0{,}01\\text{ V}$ sem inverter o sinal do potencial do ânodo que sofre oxidação.' },
      { letter: 'B', status: 'correta', explanation: '$\\Delta E^0 = +0{,}77 - (-0{,}76) = +1{,}53\\text{ V}$ (pilha espontânea, $\\Delta E^0 > 0$).' },
      { letter: 'C', status: 'incorreta', explanation: 'Sinal invertido ($\\text{Ânodo} - \\text{Cátodo}$).' },
      { letter: 'D', status: 'incorreta', explanation: 'Erro duplo de sinal e de inversão dos eletrodos.' },
      { letter: 'E', status: 'incorreta', explanation: 'Multiplica indevidamente o potencial por $2$ ($2 \\times 0{,}76 + 0{,}77 = 2{,}29\\text{ V}$); $E^0$ é grandeza intensiva e não se multiplica pelo coeficiente.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Delta E0 = (+0,77) - (-0,76) = +1,53 V.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q60',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Soluções — Curva de Solubilidade e Recristalização',
    questionType: 'qui-solucoes-curva-solubilidade-recristalizacao',
    methodTitle: 'Cálculo de Corpo de Fundo Após Evaporação de Solvente e Resfriamento',
    decisiveConcept:
      'A massa máxima que **cristaliza** no filtro é igual à massa inicialmente dissolvida menos a massa que ainda consegue permanecer **dissolvida** no volume **remanescente** de solvente à temperatura final ($20^\\circ\\text{C}$).',
    quickSolution:
      '1. Volume final de água após perda de $13\\text{ mL}$ por evaporação:\n\n$$V_{\\text{final}} = 500\\text{ mL} - 13\\text{ mL} = 487\\text{ mL} = 0{,}487\\text{ L}$$\n\n2. Pelo gráfico, a solubilidade do ácido benzoico a $20^\\circ\\text{C}$ é **$2{,}9\\text{ g/L}$**. Logo, a massa que fica dissolvida em $0{,}487\\text{ L}$ é:\n\n$$m_{\\text{solúvel}} = 2{,}9 \\times 0{,}487 = 1{,}4123\\text{ g}$$\n\n3. Como foram adicionados $20\\text{ g}$, a massa máxima cristalizada é:\n\n$$m_{\\text{cristal}} = 20 - 1{,}4123 = 18{,}5877\\text{ g} \\approx 18{,}59\\text{ g}$$\n\n(**Alternativa E**).',
    stepByStep:
      '1. A $100^\\circ\\text{C}$, a solubilidade é $56{,}3\\text{ g/L}$ (ou $28{,}15\\text{ g}$ em $500\\text{ mL}$), garantindo que todos os $20\\text{ g}$ estavam dissolvidos.\n2. Descontando os $13\\text{ mL}$ evaporados: resta $487\\text{ mL} = 0{,}487\\text{ L}$ de água.\n3. Leia o ponto $20^\\circ\\text{C}$ no gráfico: $2{,}9\\text{ g/L}$.\n4. Solúvel a $20^\\circ\\text{C}$: $0{,}487\\text{ L} \\times 2{,}9\\text{ g/L} = 1{,}4123\\text{ g}$ (note que $1{,}41\\text{ g}$ está na letra C como distrator!).\n5. Cristalizado (precipitado): $20{,}00 - 1{,}4123 = 18{,}5877\\text{ g} \\approx 18{,}59\\text{ g}$.',
    macete: {
      title: 'Achou 1,41 g? NÃO marque C — essa é a perda na solução! Subtraia de 20 g!',
      strategy:
        'Se você multiplicou $0{,}487 \\times 2{,}9 = 1{,}41\\text{ g}$, já vê $1{,}41\\text{ g}$ na letra C só para pegar quem para na metade do caminho! Como o problema pede a massa de ácido puro **cristalizado obtido na filtração**, faça $20 - 1{,}412 = 18{,}59\\text{ g}$ (**E**)!',
      whenToUse: 'Questões de recristalização ou curva de solubilidade com variação de temperatura e evaporação de solvente.',
      caution: 'Não use o valor de $25^\\circ\\text{C}$ ($3{,}4\\text{ g/L}$, que leva ao distrator B = $18{,}34\\text{ g}$); o enunciado diz resfriada até **$20^\\circ\\text{C}$**!',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Resulta de aproximação grosseira da solubilidade para $3{,}0\\text{ g/L}$ ou desconsideração correta dos $487\\text{ mL}$.' },
      { letter: 'B', status: 'incorreta', explanation: '$18{,}34\\text{ g}$ é o valor usando a solubilidade de **$25^\\circ\\text{C}$** ($3{,}4\\text{ g/L} \\times 0{,}487 = 1{,}66\\text{ g}$), mas o resfriamento foi até $20^\\circ\\text{C}$.' },
      { letter: 'C', status: 'incorreta', explanation: '$1{,}41\\text{ g}$ é a massa que **permanece dissolvida** (perdida na solução-mãe), e não a massa cristalizada.' },
      { letter: 'D', status: 'incorreta', explanation: 'Aproximação grosseira da massa perdida na solução, além de inverter dissolvido/cristalizado.' },
      { letter: 'E', status: 'correta', explanation: '$20 - (0{,}487 \\times 2{,}9) = 20 - 1{,}4123 = 18{,}5877 \\approx 18{,}59\\text{ g}$.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo exato a partir dos rótulos do gráfico (2,9 g/L a 20°C e volume final 487 mL).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q61',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica — Funções Orgânicas, Hibridização e Isomeria',
    questionType: 'qui-organica-molnupiravir-quiral-hibridizacao-funcoes',
    methodTitle: 'Contagem Sistemática de Carbonos Quirais, Hibridização ($sp^3$/$sp^2$) e Funções Nitrogenadas',
    decisiveConcept:
      '- **Carbonos quirais**: os 4 carbonos secundários/terciários do anel ribose possuem 4 ligantes distintos cada.\n- **Hibridização**: 3 do grupo isopropila + 1 ($\\text{CH}_2$) + 4 do anel ribose $= \\mathbf{8\\text{ }sp^3}$; 1 carbonila do éster + 4 carbonos do anel pirimidínico $= \\mathbf{5\\text{ }sp^2}$.\n- **Funções**: há **éster** e grupos polares ($-\\text{OH}$, $-\\text{NH}-$) que fazem ligações de hidrogênio, porém **não há função amina** verdadeira (os nitrogênios do anel estão ligados à carbonila formando sistemas **amida**/lactam e o grupo externo é hidroxilamina $-\\text{NH}-\\text{OH}$).',
    quickSolution:
      'Analisando cada assertiva sobre a estrutura exibida:\n- **I (Incorreta)**: Há função **éster** (e ligação tipo éter cíclico no anel da ribose), mas **não** há função **amina** simples — os nitrogênios do anel heterocíclico integram sistema **amida** (ligados ao $\\text{C}=\\text{O}$ de C2) e o grupo superior é uma **hidroxilamina** ($-\\text{NH}-\\text{OH}$).\n- **II (Correta)**: Os **4 carbonos** do anel pentagonal da ribose são todos centros quirais.\n- **III (Correta)**: Somam-se exatamente **8 carbonos $sp^3$** (isopropila: 3; $-\\text{CH}_2-$: 1; anel ribose: 4) e **5 carbonos $sp^2$** (carbonila do éster: 1; anel pirimidínico: 4).\n- **IV (Correta)**: Possui múltiplos grupos $-\\text{OH}$ e $-\\text{NH}-$ capazes de realizar ligações de hidrogênio com a água.\n\nLogo, estão corretas apenas **II, III e IV** (**Alternativa C**).',
    stepByStep:
      '1. **Carbonos quirais (II)**: no anel de 5 membros (ribose), C1\' (ligado a O, N, C2\', H), C2\' (OH, C1\', C3\', H), C3\' (OH, C2\', C4\', H) e C4\' (O, C3\', CH2O-, H) são todos assimétricos = **4 carbonos quirais** (verdadeira).\n2. **Hibridização (III)**:\n   - Apenas ligações simples ($sp^3$): $3\\text{ (isopropila)} + 1\\text{ (CH}_2) + 4\\text{ (anel de 5)} = 8$.\n   - Com dupla ligação ($sp^2$): $1\\text{ (C=O do éster)} + 4\\text{ (C2, C4, C5, C6 do anel de 6)} = 5$. (verdadeira).\n3. **Ligações de H (IV)**: grupos $-\\text{OH}$ e $-\\text{NHOH}$ doam e aceitam ligações de H com $\\text{H}_2\\text{O}$ (verdadeira).\n4. **Funções (I)**: armadilha clássica **amida vs. amina** (todos os nitrogênios do anel estão ligados a $\\text{C}=\\text{O}$ como amida/ureia cíclica, e o grupo $-\\text{NH}-\\text{OH}$ é hidroxilamina, não amina).',
    macete: {
      title: 'Conte sempre os átomos $sp^3$ e $sp^2$ primeiro: II, III e IV são certezas absolutas!',
      strategy:
        'A única dúvida possível fica entre A e C (item I). Lembre da regra de ouro de Química Orgânica em vestibulares (e especialmente na UFRR, como também aparece na Q63): se o nitrogênio está ligado a $\\text{C}=\\text{O}$ (anel pirimidinona), NÃO é amina, é **amida**; e ligado a $-\\text{OH}$ é hidroxilamina! Isso faz de **I** a pegadinha clássica, cravando **C**.',
      whenToUse: 'Questões multidisciplinares de Química Orgânica sobre fármacos (funções, quiralidade, hibridização e interações).',
      caution: 'Nunca classifique rapidamente um $-\\text{N}-$ em molécula farmacêutica como "amina" sem verificar se há $\\text{C}=\\text{O}$ vizinha (amida) ou $-\\text{OH}$ ligado diretamente ao nitrogênio.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Considera incorretamente I verdadeira: os nitrogênios do anel ligados a $\\text{C}=\\text{O}$ caracterizam **amida** (e o externo ligado a $-\\text{OH}$ é hidroxilamina), e não amina simples.' },
      { letter: 'B', status: 'incorreta', explanation: 'Exclui II (os 4 carbonos do anel da ribose são inequivocamente quirais) e inclui I.' },
      { letter: 'C', status: 'correta', explanation: 'Apenas **II, III e IV** são rigorosamente verdadeiras: 4 carbonos quirais, $8\\text{ }sp^3 + 5\\text{ }sp^2$, e capacidade de fazer ligações de hidrogênio com a água.' },
      { letter: 'D', status: 'incorreta', explanation: 'Exclui IV (claramente verdadeira pelos grupos $-\\text{OH}$ e $-\\text{NH}-$) e inclui I.' },
      { letter: 'E', status: 'incorreta', explanation: 'Deixa de fora II e III, ambas perfeitamente comprovadas pela fórmula estrutural.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Contagem exata de C13H19N3O7 (8 sp3, 5 sp2, 4 quirais) e distinção funcional estrita (lactam/amida e hidroxilamina != amina).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q62',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica — Isomeria e Reações Orgânicas',
    questionType: 'qui-organica-tautomeria-eliminacao-cetona',
    methodTitle: 'Identificação de Tautomeria Ceto-Enólica e Eliminação de Haleto ($\\text{HBr}$)',
    decisiveConcept:
      '1. **Tautomeria**: equilíbrio dinâmico entre **cetona (A, ciclo-hexanona)** e seu **enol (C, ciclo-hexenol)**, ambos com mesma fórmula $\\text{C}_6\\text{H}_{10}\\text{O}$.\n2. **Isomeria exige mesma fórmula molecular**: E (ciclo-hex-2-enona) é $\\text{C}_6\\text{H}_8\\text{O}$, logo **não** é isômero de A nem de C ($\text{C}_6\\text{H}_{10}\\text{O}$).\n3. **Eliminação (D $\\to$ E)**: tratamento do haleto D com base forte ($\\text{NaOH}$) remove $\\text{HBr}$ formando uma dupla ligação $\\text{C}=\\text{C}$.',
    quickSolution:
      'Avaliando cada afirmativa pela sequência:\n- **I (Correta)**: A (ciclo-hexanona) e C (ciclo-hexenol) estão em equilíbrio de **tautomeria** ceto-enólica (ambos $\\text{C}_6\\text{H}_{10}\\text{O}$).\n- **II (Incorreta)**: A ($\\text{C}_6\\text{H}_{10}\\text{O}$) e E ($\\text{C}_6\\text{H}_8\\text{O}$) possuem fórmulas moleculares diferentes, logo **não são isômeros**.\n- **III (Incorreta)**: C ($\\text{C}_6\\text{H}_{10}\\text{O}$) e E ($\\text{C}_6\\text{H}_8\\text{O}$) também não têm a mesma fórmula molecular, não sendo isômeros.\n- **IV (Correta)**: D $\\to$ E com $\\text{NaOH}$ remove H e Br vizinhos formando ligação $\\pi$ (insaturação) — **reação de eliminação** (desidro-halogenação).\n\nEstão corretas apenas **I e IV** (**Alternativa B**).',
    macete: {
      title: 'Mudou o nº de hidrogênios (H₁₀ → H₈)? NÃO é isômero de nada! Corta II e III na hora!',
      strategy:
        'A primeira checagem para qualquer frase sobre *isomeria* é verificar se há o mesmo número de ligações $\\pi$ + ciclos! A e C têm 1 dupla (e 1 anel) $\\to$ isômeros (tautômeros!). Já E tem **2 duplas** + 1 anel $\\to$ tem 2 hidrogênios a menos! Logo E jamais pode ser isômero de A ou C: isso apaga A, C, D e E em uma só passada, deixando **apenas B**!',
      whenToUse: 'Questões de sequências reacionais orgânicas misturando isomeria e classificação de reações.',
      caution: 'Muita atenção ao equilíbrio com dupla seta $\\rightleftharpoons$ entre cetona e enol: esse é o único caso de isomeria dinâmica (**tautomeria**).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'C ($\\text{C}_6\\text{H}_{10}\\text{O}$) e E ($\\text{C}_6\\text{H}_8\\text{O}$) não possuem a mesma fórmula molecular, portanto III é falsa.' },
      { letter: 'B', status: 'correta', explanation: 'I é verdadeira (equilíbrio cetona-enol = tautomeria) e IV é verdadeira (eliminação de $\\text{HBr}$ com $\\text{NaOH}$ gerando ligação $\\text{C}=\\text{C}$).' },
      { letter: 'C', status: 'incorreta', explanation: 'II é falsa porque A ($\\text{C}_6\\text{H}_{10}\\text{O}$) e E ($\\text{C}_6\\text{H}_8\\text{O}$) não têm a mesma fórmula molecular.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inclui a falsa II.' },
      { letter: 'E', status: 'incorreta', explanation: 'Inclui a falsa III.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'A/C: C6H10O (tautomeria); E: C6H8O (não isômero); D->E: eliminação de HBr.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q63',
    examId: EXAM_ID,
    subject: 'Química',
    topic: 'Química Orgânica — Funções Orgânicas e Isomeria Óptica',
    questionType: 'qui-organica-canabidiol-fenol-vs-alcool-isomeria-otica',
    methodTitle: 'Diferenciação Fenol $\\times$ Álcool e Contagem de Fórmula Molecular em Bastão',
    decisiveConcept:
      '1. $-\\text{OH}$ ligado diretamente a **anel aromático** caracteriza a função **fenol**, **NÃO álcool** (álcool exige $-\\text{OH}$ em carbono saturado $sp^3$).\n2. Na fórmula em bastão, conta-se cada vértice/extremidade para os carbonos e calcula-se o total de hidrogênios via grau de insaturação ($I = \\text{anéis} + \\text{duplas}$).',
    quickSolution:
      'Analisando a estrutura do canabidiol:\n- **I (Correta)**: Apresenta 2 carbonos quirais no anel ciclo-hexeno (destacados inclusive com cunha cheia e tracejada), apresentando atividade/isomeria óptica.\n- **II (Correta)**: Contagem dos átomos: $6\\text{ (ciclo-hexeno)} + 1\\text{ (CH}_3) + 3\\text{ (isopropenil)} + 6\\text{ (aromático)} + 5\\text{ (pentila)} = 21\\text{ C}$; grau de insaturação $= 2\\text{ anéis} + 5\\text{ duplas} = 7 \\implies H = 2(21)+2 - 2(7) = 30\\text{ H}$ e $2\\text{ O}$ $\\implies \\text{C}_{21}\\text{H}_{30}\\text{O}_2$.\n- **III (Correta)**: Possui o anel benzênico com círculo central (anel aromático).\n- **IV (Incorreta)**: Os dois grupos $-\\text{OH}$ estão ligados diretamente ao anel aromático, caracterizando a função **fenol**, e **não** álcool.\n\nEstão corretas apenas **I, II e III** (**Alternativa C**).',
    stepByStep:
      '1. **Item I**: Os carbonos C3 e C4 do anel ciclo-hexeno possuem 4 ligantes distintos cada (note os hidrogênios em cunha tracejada e cheia na figura), conferindo isomeria óptica.\n2. **Item II**: Total de carbonos $= 6 + 1 + 3 + 6 + 5 = 21$. Insaturações: 1 anel ciclo-hexeno + 1 dupla no anel + 1 dupla no isopropenil + 1 anel aromático (3 duplas + 1 anel = 4) $\\implies 7$ insaturações. Fórmula de alcano $C_{21}H_{44}$ perde $2 \\times 7 = 14$ H $\\implies \\text{C}_{21}\\text{H}_{30}\\text{O}_2$.\n3. **Item III**: Anel aromático evidente.\n4. **Item IV**: $-\\text{OH}$ ligado a carbono $sp^2$ benzênico = **FENOL** (jamais álcool!).',
    macete: {
      title: 'OH grudado na "bolinha" (anel benzênico) = FENOL, NUNCA Álcool! (Corta IV direto!)',
      strategy:
        'Se o item IV diz *"função álcool"* e todos os $-\\text{OH}$ da figura estão presos direto ao anel aromático, corte IV imediatamente! Olhando as opções, todas (A, B, D) contêm IV, exceto **C** e **E**. Como o anel aromático e os dois carbonos quirais com cunha tracejada/cheia confirmam I e III, basta checar rapidinho os $21$ carbonos de II para cravar **C**!',
      whenToUse: 'Questões orgânicas cobrando funções hidroxiladas (álcool vs. fenol vs. enol) e fórmula molecular.',
      caution: 'Para contar hidrogênios sem erro em moléculas grandes, use a fórmula do grau de insaturação ($H = 2C + 2 - 2I$) — é muito mais rápida e infalível que contar H carbono por carbono.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Inclui IV (falsa: os grupos $-\\text{OH}$ são fenólicos, não alcoólicos).' },
      { letter: 'B', status: 'incorreta', explanation: 'Inclui IV e omite a fórmula correta $\\text{C}_{21}\\text{H}_{30}\\text{O}_2$ (II).' },
      { letter: 'C', status: 'correta', explanation: 'Confirma exatamente I (carbonos quirais com cunha/tracejado), II ($\\text{C}_{21}\\text{H}_{30}\\text{O}_2$) e III (anel aromático), rejeitando IV (fenol $\\neq$ álcool).' },
      { letter: 'D', status: 'incorreta', explanation: 'Inclui IV (falsa) e omite I (há dois carbonos quirais claros no ciclo-hexeno).' },
      { letter: 'E', status: 'incorreta', explanation: 'Omite II ($\text{C}_{21}\text{H}_{30}\text{O}_2$), que está rigorosamente correta.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Contagem exata C21H30O2, 2 carbonos quirais e distinção fenol != álcool.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
