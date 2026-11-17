import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2022';
const REVIEW_DATE = '2026-11-16T16:05:00.000Z';

export const UFRR_2022_BIO_FIS_RESOLUTIONS: QuestionResolution[] = [
  // ================= BIOLOGIA (Q19–Q27) =================
  {
    questionId: 'ufrr-2022-q19',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Divisão Celular — Mitose e Meiose',
    questionType: 'bio-divisao-celular-mitose-meiose-ploidia',
    methodTitle: 'Ploidia Celular na Mitose ($n$ e $2n$) vs. Meiose (Apenas $2n$)',
    decisiveConcept:
      'A **mitose** é equacional (mantém a ploidia original), ocorrendo tanto em células **haploides ($n \\to n$)** (ex.: gametófitos de plantas, fungos, zangões) quanto em **diploides ($2n \\to 2n$)**. Já a **meiose** é reducional (reduz pela metade o número de cromossomos com pareamento de homólogos), não ocorrendo em células haploides ($n$), mas em células **diploides ($2n \\to n$)**.',
    quickSolution:
      'A mitose ocorre em células haploides ($n$) e diploides ($2n$), enquanto a meiose ocorre somente em células diploides ($2n$, ou poliploides pares com cromossomos homólogos em pares) (**Alternativa B**).',
    macete: {
      title: 'Mitose = cópia (vale para n e 2n); Meiose = divide ao meio (só 2n, pois n não tem par!)',
      strategy:
        'Para não cair na pegadinha de achar que só células $2n$ fazem mitose, lembre do ciclo das plantas (musgos e samambaias): o gametófito é **haploide ($n$)** e produz gametas por **mitose**! Já a meiose precisa de cromossomos homólogos aos pares, logo é impossível em célula haploide ($n$).',
      whenToUse: 'Questões comparando a ocorrência de mitose e meiose quanto à ploidia celular.',
      caution: 'Muitos estudantes marcam D por associarem meiose a gametas ($n$), esquecendo que a meiose PARTE de uma célula $2n$ para GERAR células $n$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Células diploides ($2n$) também realizam mitose constantemente para crescimento e regeneração tecidual.' },
      { letter: 'B', status: 'correta', explanation: 'Mitose ocorre em células $n$ e $2n$; meiose ocorre apenas em células $2n$ (que possuem pares de homólogos).' },
      { letter: 'C', status: 'incorreta', explanation: 'Células haploides ($n$) possuem apenas um conjunto cromossômico, não podendo realizar meiose.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inverte totalmente os processos: mitose ocorre também em $n$, e meiose nunca ocorre em célula $n$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Ignora a mitose em células haploides e admite equivocadamente meiose em células $n$.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Regra clássica de ploidia em eucariotos (mitose em n e 2n; meiose restrita a células >=2n).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q20',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Citologia — Membrana Plasmática e Transporte',
    questionType: 'bio-citologia-proteinas-transportadoras-membrana',
    methodTitle: 'Relação Gene $\\to$ Proteína Transportadora Transmembrana',
    decisiveConcept:
      'Mutações gênicas alteram a sequência primária de **proteínas**; como o transporte específico de açúcares e solutos hidrofílicos através da bicamada lipídica depende de **proteínas carreadoras/canais**, a mutação compromete a função dessas proteínas de membrana.',
    quickSolution:
      'Um gene codifica uma proteína (e não diretamente um lipídio). A incapacidade hereditária de transportar solutos específicos (como açúcares no rim e intestino) resulta de alterações na **produção de proteínas funcionais de membrana** (permeases, carreadores ou canais) (**Alternativa E**).',
    macete: {
      title: 'Transporte ESPECÍFICO de soluto = Proteína de membrana (Gene → Proteína)',
      strategy:
        'Viu *"mutação em um único gene"* + *"transporte de solutos específicos"* (como açúcares)? Pense imediatamente no dogma central: gene codifica **proteína**! Elimine lipídios transportadores (A), fluidez genérica (B) e bloqueio total de ATP (D). Note ainda a restrição falsa *"apenas"* em C.',
      whenToUse: 'Questões de citologia ligando genética/mutação à permeabilidade seletiva da membrana plasmática.',
      caution: 'Cuidado com C: o texto diz explicitamente *"no rim, no intestino **ou em muitos outros tipos celulares**"* — logo o *"apenas"* invalida C.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Genes codificam proteínas, e o transporte específico de açúcares é feito por proteínas transportadoras, não por lipídios.' },
      { letter: 'B', status: 'incorreta', explanation: 'Alterações globais da fluidez lipídica não explicam a perda seletiva de transporte de um soluto específico por mutação monogênica.' },
      { letter: 'C', status: 'incorreta', explanation: 'Contradiz literalmente o texto, que afirma ocorrer *"no rim, no intestino ou em muitos outros tipos celulares"*.' },
      { letter: 'D', status: 'incorreta', explanation: 'Bloqueio generalizado da síntese de ATP seria letal para toda a célula, não se limitando a um transportador específico (e açúcares frequentemente usam difusão facilitada ou cotransporte).' },
      { letter: 'E', status: 'correta', explanation: 'A mutação gênica altera a estrutura/produção da proteína transportadora específica inserida na membrana plasmática.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Texto adaptado de Alberts (Biologia Molecular da Célula): transporte mediado por proteínas.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q21',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Histologia e Fisiologia Muscular',
    questionType: 'bio-histologia-fibras-musculares-vermelhas-brancas',
    methodTitle: 'Diferenciação Metabólica: Fibras Vermelhas (Aeróbias) × Fibras Brancas (Anaeróbias)',
    decisiveConcept:
      '**Fibras vermelhas (lentas/tipo I)**: ricas em mioglobina, mitocôndrias e capilares $\\to$ metabolismo **aeróbio** de longa duração (ex.: maratona).\n**Fibras brancas (rápidas/tipo II)**: pouca mioglobina e poucas mitocôndrias $\\to$ metabolismo **anaeróbio (fermentação lática)** para força explosiva de curta duração.',
    quickSolution:
      'Analisando as afirmações:\n- **I (Correta)**: Fibras vermelhas têm alta mioglobina e muitas mitocôndrias, sustentando respiração aeróbica com carboidratos e ácidos graxos por longos períodos.\n- **II (Incorreta)**: Fibras brancas fadigam rapidamente e são voltadas a tiros curtos/explosivos, não a maratonas (que dependem das fibras vermelhas).\n- **III (Correta)**: Em exercício intenso com poucas mitocôndrias e baixo $O_2$, fibras brancas obtêm ATP rapidamente por **fermentação lática**.\n\nEstão corretas **I e III** (**Alternativa A**).',
    macete: {
      title: 'Vermelha = Maratona (O₂, Mitocôndria, Mioglobina); Branca = Tiro de 100 m (Fermentação Lática)',
      strategy:
        'Se a assertiva II coloca *"fibras brancas"* com *"maratona"*, já risque II imediatamente! Eliminando II, sobram apenas A (I e III) e E (III). Como I praticamente parafraseia o enunciado com a bioquímica aeróbica correta, **A** é imediata.',
      whenToUse: 'Questões de fisiologia muscular comparando fibras de contração lenta e rápida.',
      caution: 'Lembre que durante a maratona o músculo também utiliza gorduras (beta-oxidação aeróbia), tornando I inteiramente verdadeira.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'I descreve corretamente o metabolismo aeróbio das fibras vermelhas e III descreve corretamente a fermentação lática nas fibras brancas em esforço intenso.' },
      { letter: 'B', status: 'incorreta', explanation: 'II é falsa: provas de resistência como a maratona recrutam predominantemente fibras vermelhas (lentas e aeróbias).' },
      { letter: 'C', status: 'incorreta', explanation: 'Inclui a incorreta II e exclui a correta I.' },
      { letter: 'D', status: 'incorreta', explanation: 'Inclui a afirmativa falsa II.' },
      { letter: 'E', status: 'incorreta', explanation: 'Ignora a afirmativa I, que está perfeitamente correta.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Fisiologia muscular clássica (fibras tipo I aeróbias vs tipo II glicolíticas/láticas).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q22',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Botânica — Ciclos de Vida e Alternância de Gerações',
    questionType: 'bio-botanica-alternancia-geracoes-meiose-esporica',
    methodTitle: 'Ciclo Haplodiplobionte Vegetal: Onde Ocorre a Única Meiose?',
    decisiveConcept:
      'No ciclo com alternância de gerações (metagênese) das plantas terrestres (meiose espórica): o **zigoto ($2n$)** sofre **mitose (1)** formando o esporófito ($2n$); este produz **esporos ($n$)** por **meiose (2)**; cada esporo sofre **mitose (3)** originando o gametófito ($n$); e o gametófito produz **gametas ($n$)** por **mitose (4)**.',
    quickSolution:
      'Seguindo o ciclo haplodiplobionte:\n1. Zigoto ($2n$) $\\to$ Esporófito ($2n$): **mitose**\n2. Esporófito ($2n$) $\\to$ Esporos ($n$): **meiose** (meiose espórica)\n3. Esporos ($n$) $\\to$ Gametófito ($n$): **mitose**\n4. Gametófito ($n$) $\\to$ Gametas ($n$): **mitose**\n\nPortanto: **1-mitose, 2-meiose, 3-mitose, 4-mitose** (**Alternativa D**).\n\n*(Nota editorial: no caderno impresso original, a caixa superior direita traz por erro gráfico "GERAÇÃO DIPLOIDE" em vez de "GERAÇÃO HAPLOIDE", mas o texto introdutório e a sequência Zigoto $\\to$ Esporos $\\to$ Gametas confirmam integralmente o ciclo vegetal clássico).*',
    macete: {
      title: 'Em PLANTAS, a única MEIOSE é para fazer ESPOROS (seta 2)! Todo o resto é MITOSE!',
      strategy:
        'Erro nº 1 dos alunos em Botânica: achar que gametas vegetais vêm de meiose (4-meiose, como nos animais)! Nas **plantas**, o gametófito já é $n$, então ele faz gametas por **MITOSE**. Só há UMA meiose no ciclo inteiro: quando o esporófito $2n$ fabrica esporos $n$ (**2-meiose**). Viu `2-meiose` e `4-mitose`? Já crava **D**!',
      whenToUse: 'Questões sobre ciclo reprodutivo haplodiplobionte de briófitas, pteridófitas, gimnospermas e angiospermas.',
      caution: 'Não se confunda com o erro tipográfico na caixa direita da imagem original: biologicamente, após os esporos ($n$), forma-se a geração haploide (gametófito).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Sem meiose na seta 2, os esporos seriam $2n$, inviabilizando a redução cromossômica do ciclo.' },
      { letter: 'B', status: 'incorreta', explanation: 'Coloca erradamente meiose na formação de gametas (seta 4) e mitose na produção de esporos (seta 2).' },
      { letter: 'C', status: 'incorreta', explanation: 'Zigoto $\\to$ esporófito ocorre por mitose (seta 1), e gametófito $\\to$ gametas também ocorre por mitose (seta 4).' },
      { letter: 'D', status: 'correta', explanation: 'Sequência exata da meiose espórica vegetal: 1-mitose, 2-meiose (esporos), 3-mitose (gametófito) e 4-mitose (gametas).' },
      { letter: 'E', status: 'incorreta', explanation: 'Haveria duas meioses no mesmo ciclo (setas 2 e 4), reduzindo a ploidia indevidamente abaixo de $n$.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Ciclo haplodiplobionte padrão; observada a gralha gráfica original ("GERAÇÃO DIPLOIDE" repetida no quadro direito da figura).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q23',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Evolução e Sistemática Filogenética',
    questionType: 'bio-evolucao-cladograma-grupo-monofilético',
    methodTitle: 'Teste do Corte Único: Grupo Monofilético vs. Parafilético ("Répteis")',
    decisiveConcept:
      'Na sistemática filogenética (cladística), um táxon só é válido (**monofilético**) se reunir um ancestral comum e **TODOS** os seus descendentes. Excluir as aves do grupo dos "Répteis" torna o agrupamento **parafilético** e, portanto, filogeneticamente inválido.',
    quickSolution:
      'Pelo cladograma:\n- **Tartarugas (C)**, **Crocodilianos (D)** e **Cobras + Lagartos (E)** formam ramos monofiléticos próprios.\n- **Aves + Dinossauros não aviários (B)** compartilham um ancestral comum exclusivo (o clado *Dinosauria*, irmão dos crocodilianos).\n- Já **"Répteis" (A)** — quando definidos excluindo as aves — deixam descendentes do ancestral comum de fora, formando um grupo **parafilético**, não válido filogeneticamente (**Alternativa A**, a afirmação INCORRETA pedida).',
    macete: {
      title: 'Se precisar dar DOIS cortes na árvore para separar o grupo, ele é INVÁLIDO!',
      strategy:
        'Imagine uma tesoura cortando um único galho do cladograma: tudo acima do corte pertence ao grupo? Se sim, é **válido (monofilético)**! Para pegar "Répteis" sem pegar "Aves", você tem que cortar o galho principal e ainda cortar as Aves fora (2 cortes) $\\to$ **inválido (parafilético)**!',
      whenToUse: 'Questões de cladística pedindo grupo monofilético, parafilético ou táxon inválido.',
      caution: 'A questão pede a afirmativa **INCORRETA**! E atenção à B: na árvore, Aves está aninhada DENTRO dos dinossauros, logo *Aves + Dinossauros não aviários* formam sim um táxon monofilético válido!',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '**Afirmativa INCORRETA (gabarito)**: tradicionalmente, "Répteis" excluem as aves (que descendem do mesmo nó basal), formando um grupo parafilético inválido na cladística.' },
      { letter: 'B', status: 'incorreta', explanation: 'Correta no cladograma: Aves e os três ramos de dinossauros não aviários descendem integralmente de um único nó ancestral comum exclusivo.' },
      { letter: 'C', status: 'incorreta', explanation: 'Correta no cladograma: Tartarugas constituem um ramo terminal completo a partir de sua linhagem própria.' },
      { letter: 'D', status: 'incorreta', explanation: 'Correta no cladograma: Crocodilianos formam um clado terminal único.' },
      { letter: 'E', status: 'incorreta', explanation: 'Correta no cladograma: Cobras e Lagartos dividem um nó ancestral comum exclusivo (grupo-irmão, Squamata).' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Verificado diretamente em q23-cladograma.png e na fonte original USP Evo101: Reptilia tradicional sem Aves é parafilético.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q24',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Botânica — Reprodução das Angiospermas',
    questionType: 'bio-botanica-angiospermas-ovulo-semente-ovario-fruto',
    methodTitle: 'Destino das Estruturas Florais Após a Dupla Fecundação',
    decisiveConcept:
      'Nas angiospermas, após a dupla fecundação: o **ovário** desenvolve-se no **fruto**, enquanto cada **óvulo** fecundado origina a **semente** (contendo embrião $2n$ e endosperma $3n$).',
    quickSolution:
      'Em angiospermas após a fecundação, o **ovário** forma o fruto e o **óvulo** dá origem à **semente** (**Alternativa A**).',
    macete: {
      title: 'OVÁRIO → FRUTO | ÓVULO → SEMENTE (letras O–F e Ó–S)',
      strategy:
        'Regra de ouro das angiospermas: **óvulo = semente**, **ovário = fruto**! Não confunda óvulo vegetal com gameta feminino animal: na flor, o gameta feminino é a **oosfera** (que fica dentro do óvulo), e o gameta masculino é o **núcleo espermático** (angiospermas perderam anterozoides flagelados).',
      whenToUse: 'Questões sobre morfologia floral e formação de frutos e sementes em angiospermas.',
      caution: 'A alternativa D traz dois erros: angiospermas não possuem anterozoide (típico de briófitas/pteridófitas) e quem se funde para gerar o zigoto/embrião é a oosfera com o 1º núcleo espermático, não o óvulo inteiro.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Após a dupla fecundação nas angiospermas, o óvulo fecundado amadurece transformando-se na **semente**.' },
      { letter: 'B', status: 'incorreta', explanation: 'O embrião surge da fusão da **oosfera** com o núcleo espermático do tubo polínico, e não do óvulo inteiro com o grão de pólen.' },
      { letter: 'C', status: 'incorreta', explanation: 'Quem origina o fruto é o desenvolvimento do **ovário**, enquanto o óvulo origina a semente contida nele.' },
      { letter: 'D', status: 'incorreta', explanation: 'Angiospermas não formam anterozoides flagelados; a fecundação ocorre por núcleos espermáticos conduzidos pelo tubo polínico até a oosfera.' },
      { letter: 'E', status: 'incorreta', explanation: 'Confunde óvulo (que origina a semente) com ovário (que origina o fruto).' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Morfogênese pós-fecundação clássica em angiospermas.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q25',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Biologia Molecular e Imunologia — Vacinas Gênicas',
    questionType: 'bio-molecular-vacinas-mrna-dna-nucleo-citoplasma',
    methodTitle: 'Fluxo de Expressão Gênica em Vacinas de mRNA vs. Vetor de DNA',
    decisiveConcept:
      '- **Vacina de mRNA (Pfizer)**: o mRNA entra direto no **citoplasma**, NÃO entra no núcleo e NÃO sofre transcrição reversa $\\to$ é traduzido pelos ribossomos celulares.\n- **Vacina de DNA/adenovírus (Janssen/J&J)**: o DNA viral precisa entrar no **núcleo** celular para ser **transcrito em mRNA** pela RNA polimerase da célula hospedeira.',
    quickSolution:
      'Para expressar a proteína S com a vacina de vetor adenoviral de DNA (Johnson & Johnson), é indispensável que **o DNA penetre no núcleo da célula e sirva de molde para a síntese de mRNA** (transcrição), que depois irá ao citoplasma para tradução (**Alternativa E**).',
    macete: {
      title: 'mRNA fica no CITOPLASMA (já é receita pronta!); DNA precisa ir ao NÚCLEO ser transcrito!',
      strategy:
        'Corte instantâneo:\n- Falou que mRNA da Pfizer **entra no núcleo** (A, B)? Corta!\n- Falou que mRNA da Pfizer usa **transcriptase reversa** (D)? Corta! (Isso é retrovírus como HIV, não vacina de mRNA!).\n- Falou que DNA da vacina codifica tRNA e rRNA específicos (C)? Corta! A célula já tem seus próprios ribossomos e tRNAs.\nSobrou apenas **E**!',
      whenToUse: 'Questões atuais relacionando vacinas contra COVID-19 ao dogma central da biologia molecular.',
      caution: 'Lembre-se de que o adenovírus da vacina não se integra ao genoma humano, mas seu DNA ainda precisa alcançar o núcleo para usar a maquinaria de transcrição eucariótica.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O mRNA da vacina da Pfizer atua diretamente no **citoplasma** (nos ribossomos), sem precisar entrar no núcleo.' },
      { letter: 'B', status: 'incorreta', explanation: 'A tradução pelos ribossomos ocorre no citoplasma (e no retículo endoplasmático rugoso), jamais dentro do núcleo.' },
      { letter: 'C', status: 'incorreta', explanation: 'O DNA vacinal traz apenas o gene da proteína S (para produzir seu mRNA); os rRNAs e tRNAs são produzidos pelo próprio genoma da célula humana.' },
      { letter: 'D', status: 'incorreta', explanation: 'Vacinas de mRNA não contêm nem utilizam transcriptase reversa para gerar DNA.' },
      { letter: 'E', status: 'correta', explanation: 'O DNA de dupla fita do vetor adenoviral entra no núcleo e é transcrito pela RNA polimerase humana em mRNA codificador da proteína S.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Dogma central aplicado ao mecanismo molecular das vacinas Pfizer e J&J.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q26',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Genética — Herança Autossômica Recessiva e Probabilidade',
    questionType: 'bio-genetica-autossomica-recessiva-probabilidade',
    methodTitle: 'Cálculo de Probabilidades Mendelianas na Anemia Falciforme',
    decisiveConcept:
      'A anemia falciforme manifesta-se em **homozigose recessiva** ($ss$ ou $aa$), enquanto heterozigotos ($As$) são portadores assintomáticos (traço falciforme). Em cada cruzamento $Aa \\times AA$, metade dos filhos ($1/2$) será heterozigota ($Aa$).',
    quickSolution:
      'Testando o cruzamento entre homem heterozigoto ($Aa$) e mulher homozigota dominante normal ($AA$):\n\n$$Aa \\times AA \\longrightarrow 50\\%\\,AA\\text{ (não portador)} \\;\\text{e}\\; 50\\%\\,Aa\\text{ (portador do alelo)}$$\n\nLogo, a probabilidade de terem filhos portadores do alelo recessivo é **1/2** (**Alternativa A**).',
    stepByStep:
      'Testando cada alternativa (sendo $A$ normal e $a$ falciforme):\n- **A**: $Aa \\times AA \\implies P(Aa) = 1/2$. **Verdadeira**.\n- **B**: Casal sem a doença com filho $aa$ é obrigatoriamente $Aa \\times Aa$. A probabilidade de um próximo irmão também ser $aa$ é $1/4$ (eventos independentes), e não $1/16$.\n- **C**: Homem heterozigoto ($Aa$) produz $50\\%$ de gametas $a$, logo transmite o alelo com probabilidade $1/2$, não $1/4$.\n- **D**: Casal $Aa \\times Aa$ ter **duas** crianças afetadas ($aa$ e $aa$): $(1/4) \\times (1/4) = 1/16$, não $1/8$.\n- **E**: Casal $Aa \\times Aa$ ter bebê do sexo feminino ($1/2$) e afetado ($1/4$): $(1/2) \\times (1/4) = 1/8$, não $1/6$.',
    macete: {
      title: 'Em herança autossômica recessiva, Aa × AA sempre dá 50% (1/2) portadores Aa!',
      strategy:
        'Em questões com 5 contas de probabilidade, comece checando a alternativa mais simples ($Aa \\times AA$): o genitor $AA$ sempre doa $A$, então quem decide se o filho porta o alelo é apenas o genitor $Aa$, que doa $a$ com chance de $1/2$.',
      whenToUse: 'Questões de 1ª Lei de Mendel com heredogramas ou probabilidade condicional/independente.',
      caution: 'Na B, não multiplique $1/4 \\times 1/4$ se o primeiro filho $aa$ JÁ NASCEU! A probabilidade de um irmão futuro ser $aa$ é apenas $1/4$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Do cruzamento $Aa \\times AA$, $1/2$ da prole recebe o alelo recessivo do pai heterozigoto, tornando-se portadora ($Aa$).' },
      { letter: 'B', status: 'incorreta', explanation: 'Como os pais são $Aa \\times Aa$ (pois já tiveram um filho $aa$), a chance de outro filho ter a doença é $1/4$, não $1/16$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Na segregação mendeliana, um heterozigoto transmite cada alelo com probabilidade $1/2$, não $1/4$.' },
      { letter: 'D', status: 'incorreta', explanation: 'A chance de dois filhos afetados independentes em $Aa \\times Aa$ é $(1/4)^2 = 1/16$, não $1/8$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Menina ($1/2$) e com anemia falciforme ($1/4$) resulta em $1/8$, não $1/6$.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Cálculo mendeliano direto nas 5 alternativas.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q27',
    examId: EXAM_ID,
    subject: 'Biologia',
    topic: 'Genética — Ligação Gênica (Linkage) e Permutação',
    questionType: 'bio-genetica-linkage-cruzamento-teste',
    methodTitle: 'Interpretação do Cruzamento-Teste em Linkage ($BV/bv \\times bv/bv$)',
    decisiveConcept:
      'Quando dois genes estão no mesmo cromossomo (ligação gênica / *linkage*) em arranjo *cis* ($BV/bv$): **sem permutação (crossing-over)**, a fêmea só produz os dois tipos gaméticos parentais em igual proporção ($50\\%\\,BV$ e $50\\%\\,bv$), gerando apenas $50\\%$ do fenótipo parental dominante (a) e $50\\%$ do duplo-recessivo (d).',
    quickSolution:
      'Como os descendentes parentais somam $41{,}5\\%\\text{ (a)} + 41{,}5\\%\\text{ (d)} = 83\\%$, a fêmea tem genótipo $BV/bv$ (cis). Caso **não ocorresse crossing-over** na gametogênese da fêmea, ela formaria apenas gametas $BV$ ($50\\%$) e $bv$ ($50\\%$), resultando em **50% de descendentes (a) e 50% de descendentes (d)** (**Alternativa C**).',
    macete: {
      title: 'Linkage SEM crossing = só os 2 fenótipos majoritários, 50% de cada! (E crossing ocorre na MEIOSE, nunca na fecundação!)',
      strategy:
        'A armadilha clássica está na alternativa A: ela troca *"formação dos gametas (meiose)"* por *"fecundação"*! Crossing-over acontece exclusivamente na prófase I da meiose. Cortou A, viu que não há segregação independente (B) nem genes sexuais (D) nem 25% cada (E): resta **C**!',
      whenToUse: 'Questões de *linkage* com tabela de cruzamento-teste de Drosophila (Morgan).',
      caution: 'Sempre confira o momento biológico descrito nas alternativas: permutação ocorre na meiose materna (em Drosophila, aliás, machos nem fazem crossing-over).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Erro conceitual grave: o *crossing-over* ocorre durante a **prófase I da meiose** (gametogênese), jamais na fecundação.' },
      { letter: 'B', status: 'incorreta', explanation: 'Se houvesse segregação independente, as quatro classes fenotípicas apareceriam em $25\\%$ cada, e não $41{,}5\\%$ / $8{,}5\\%$.' },
      { letter: 'C', status: 'correta', explanation: 'Sem permutação entre os loci ligados em posição *cis* ($BV/bv$), formam-se apenas gametas parentais $BV$ e $bv$ ($50\\%$ cada), gerando $50\\%$ (a) e $50\\%$ (d).' },
      { letter: 'D', status: 'incorreta', explanation: 'Em *Drosophila melanogaster*, cor do corpo cinza/preto ($B/b$) e asa normal/vestigial ($V/v$) são genes autossômicos (e os resultados não indicam herança ligada ao sexo).' },
      { letter: 'E', status: 'incorreta', explanation: '$25\\%$ de cada classe seria o resultado da segregação independente (2ª Lei de Mendel), não de *linkage* sem permutação.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Experimento clássico de T. H. Morgan em Drosophila (linkage cis, 17% de recombinação).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= FÍSICA (Q28–Q36) =================
  {
    questionId: 'ufrr-2022-q28',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Dinâmica — Leis de Newton',
    questionType: 'fis-mecanica-leis-newton-inercia-acao-reacao',
    methodTitle: 'Análise Conceitual das Três Leis de Newton e Forças Conservativas',
    decisiveConcept:
      '**Prescindir** significa **dispensar / não precisar de**. Pela 1ª Lei de Newton (Inércia), em um referencial inercial, um corpo em movimento retilíneo uniforme continua em movimento mesmo na ausência de forças resultantes — ou seja, manter o movimento **prescinde** da ação de forças.',
    quickSolution:
      'Pela Lei da Inércia, não é necessária nenhuma força para manter um corpo em movimento retilíneo uniforme num referencial inercial — o movimento **prescinde** de forças (forças são necessárias apenas para *alterar* a velocidade vetorial) (**Alternativa A**).',
    macete: {
      title: 'Atenção ao vocabulário ("prescinde" = DISPENSA) e aos 3 erros clássicos de Física!',
      strategy:
        'Elimine os 4 erros clássicos das alternativas B–E:\n- **B**: $g$ varia com altitude e latitude.\n- **C**: Inércia conserva a velocidade **vetorial**, não apenas a escalar!\n- **D**: Par ação-reação atua em **corpos diferentes**! A reação ao peso (Terra $\\to$ corpo) é a força que o **corpo** faz sobre a Terra, nunca outra força que a Terra faz sobre o corpo!\n- **E**: Peso é força **conservativa**, não dissipativa!',
      whenToUse: 'Questões teóricas conceituais sobre Leis de Newton na mecânica.',
      caution: 'Muita gente confunde "prescinde" (dispensa) com "necessita/imprescinde" (não dispensa) e acaba eliminando A por erro de português!',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Pela 1ª Lei de Newton, em referencial inercial, a manutenção do movimento retilíneo uniforme dispensa (*prescinde* de) forças atuando sobre o corpo.' },
      { letter: 'B', status: 'incorreta', explanation: 'A aceleração da gravidade na superfície terrestre varia ligeiramente com a latitude (achatamento e rotação) e com a altitude.' },
      { letter: 'C', status: 'incorreta', explanation: 'Inércia é a tendência de conservar o **vetor** velocidade (módulo, direção e sentido), e não apenas a velocidade escalar.' },
      { letter: 'D', status: 'incorreta', explanation: 'A reação ao peso é a força de atração gravitacional que o **corpo exerce sobre a Terra** (atuam em corpos distintos), e não uma força que a Terra exerce sobre o corpo.' },
      { letter: 'E', status: 'incorreta', explanation: 'A força peso é **conservativa**; apenas o atrito é dissipativo entre as citadas.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Eliminação física rigorosa de B–E e verificação lexical de "prescinde" (= dispensa).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q29',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Trabalho e Potência Mecânica',
    questionType: 'fis-mecanica-grafico-potencia-tempo-trabalho',
    methodTitle: 'Área do Gráfico $P \\times t$ Igual ao Trabalho Mecânico ($\\tau = P \\cdot \\Delta t$)',
    decisiveConcept:
      'Para potência constante, o trabalho realizado no intervalo $[t_1, t_2]$ equivale à área sob o gráfico $P(t)$: $\\tau = P \\cdot (t_2 - t_1)$.',
    quickSolution:
      'Do gráfico, temos $P = 12\\text{ W}$ e $t_1 = 3\\text{ s}$. Aplicando $\\tau = P \\cdot (t_2 - t_1)$:\n\n$$96 = 12 \\cdot (t_2 - 3) \\implies t_2 - 3 = \\frac{96}{12} = 8\\text{ s} \\implies t_2 = 8 + 3 = 11\\text{ s}$$\n\n(**Alternativa A**).',
    stepByStep:
      '1. Leia no gráfico: a potência é constante igual a $12\\text{ W}$ desde $t_1 = 3\\text{ s}$ até $t_2$.\n2. A área do retângulo representa o trabalho: $\\tau = P \\cdot \\Delta t = 96\\text{ J}$.\n3. Calcule a duração do intervalo: $\\Delta t = \\frac{96}{12} = 8\\text{ s}$.\n4. Como $\\Delta t = t_2 - t_1$, tem-se $t_2 - 3 = 8 \\implies t_2 = 11\\text{ s}$.',
    macete: {
      title: 'Achou Δt = 8 s? NÃO marque E ainda — some t₁ = 3 s!',
      strategy:
        'A banca coloca $8\\text{ s}$ na letra E justamente para pegar quem calcula $\\Delta t = 96/12 = 8\\text{ s}$ e esquece que o gráfico começa em $t_1 = 3\\text{ s}$, e não no zero!',
      whenToUse: 'Questões com gráfico $P \\times t$ começando em instante $t_1 \\neq 0$.',
      caution: 'Confira sempre se o eixo do tempo na figura inicia em $0$ ou em um instante inicial deslocado ($t_1 = 3\\text{ s}$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '$\\Delta t = 96/12 = 8\\text{ s}$, logo $t_2 = 3 + 8 = 11\\text{ s}$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Resulta de erro na divisão $96/12$ ou soma indevida de $12 + 3$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Subtrairia $3$ de $8$ ($8 - 3 = 5\\text{ s}$), invertendo o sinal da operação.' },
      { letter: 'D', status: 'incorreta', explanation: 'Valor incompatível com $\\Delta t = 8\\text{ s}$ iniciado em $3\\text{ s}$.' },
      { letter: 'E', status: 'incorreta', explanation: '$8\\text{ s}$ é a duração $\\Delta t$, não o instante final $t_2 = 3 + 8 = 11\\text{ s}$.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: '12 * (11 - 3) = 96 J.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q30',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Hidrostática — Densidade de Misturas',
    questionType: 'fis-hidrostatica-densidade-mistura-massas-iguais',
    methodTitle: 'Massas Iguais $\\implies$ Densidade Final é a Média Harmônica!',
    decisiveConcept:
      'Na mistura de dois líquidos de **massas iguais** ($m_1 = m_2 = m$), a densidade final NÃO é a média aritmética ($3{,}0$), mas a **média harmônica**: $d = \\dfrac{2m}{V_1 + V_2} = \\dfrac{2 d_1 d_2}{d_1 + d_2}$.',
    quickSolution:
      'Adotando massas iguais $m$ para ambos os fluidos:\n\n$$d_{\\text{final}} = \\frac{m + m}{V_1 + V_2} = \\frac{2m}{\\frac{m}{4} + \\frac{m}{2}} = \\frac{2}{\\frac{3}{4}} = \\frac{8}{3} \\approx 2{,}67 \\approx 2{,}7\\text{ g/cm}^3$$\n\n(**Alternativa E**).',
    stepByStep:
      '1. Sejam $m_1 = m_2 = m$ as massas dos fluidos (você pode até escolher $m = 4\\text{ g}$!).\n2. Para $m = 4\\text{ g}$: $V_1 = \\frac{4}{4} = 1\\text{ cm}^3$ e $V_2 = \\frac{4}{2} = 2\\text{ cm}^3$.\n3. Massa total: $4 + 4 = 8\\text{ g}$; Volume total: $1 + 2 = 3\\text{ cm}^3$.\n4. Densidade final: $d = \\frac{8}{3} = 2{,}666...\\text{ g/cm}^3 \\approx 2{,}7\\text{ g/cm}^3$.',
    macete: {
      title: 'Iguais VOLUMES = média aritmética; Iguais MASSAS = média harmônica (2·d₁·d₂ / (d₁ + d₂))!',
      strategy:
        'A forma mais rápida de nunca errar é inventar uma massa fácil (o MMC das densidades: $m = 4\\text{ g}$)! Então $V_1 = 1\\text{ cm}^3$ e $V_2 = 2\\text{ cm}^3 \\implies d = \\frac{8}{3} \\approx 2{,}7\\text{ g/cm}^3$. E lembre: como o fluido menos denso ocupa mais volume para a mesma massa, a densidade final fica sempre ABAIXO da média $3{,}0$!',
      whenToUse: 'Mistura de substâncias com volumes iguais ou massas iguais.',
      caution: 'A alternativa A ($3{,}0\\text{ g/cm}^3$) é a armadilha clássica para quem faz média aritmética $(4+2)/2$ achando que os volumes são iguais.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: '$3{,}0\\text{ g/cm}^3$ seria a resposta se fossem misturados **volumes iguais** (média aritmética), não **massas iguais**.' },
      { letter: 'B', status: 'incorreta', explanation: 'Valor superior à média $3{,}0$, incompatível pois o fluido menos denso contribui com maior volume.' },
      { letter: 'C', status: 'incorreta', explanation: 'Não corresponde a $\\frac{8}{3} \\approx 2{,}67\\text{ g/cm}^3$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Também acima da média aritmética, impossível para mistura em massas iguais.' },
      { letter: 'E', status: 'correta', explanation: '$d = \\dfrac{2 \\cdot 4 \\cdot 2}{4 + 2} = \\dfrac{16}{6} = \\dfrac{8}{3} \\approx 2{,}7\\text{ g/cm}^3$.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Média harmônica 8/3 = 2,666... -> 2,7 g/cm^3.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q31',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Calorimetria — Capacidade Térmica e Calor Específico',
    questionType: 'fis-calorimetria-capacidade-termica-massa',
    methodTitle: 'Relação Direta entre Massa, Capacidade Térmica ($C = mc$) e Tempo de Aquecimento',
    decisiveConcept:
      'Para aquecer a água e a panela juntos em uma mesma chama (potência constante), o sistema que exige **menor quantidade de calor** aquece mais rápido. Como $C_{\\text{panela}} = m \\cdot c$, a panela de **menor massa** ($m_2$) possui **menor capacidade térmica** e absorve menos calor para elevar sua temperatura.',
    quickSolution:
      'A massa da panela 1 é $50\\%$ maior que a da panela 2 ($m_1 = 1{,}5\\,m_2 > m_2$). Como ambas são do mesmo material ($c = 0{,}22\\text{ cal/g}^\\circ\\text{C}$), a capacidade térmica $C = m c$ é menor na panela 2 ($C_2 < C_1$), exigindo menos energia térmica da chama para aquecer o conjunto no menor tempo (**Alternativa A**).',
    macete: {
      title: 'Mesmo material → menor massa = menor capacidade térmica (esquenta mais rápido)',
      strategy:
        'Capacidade térmica ($C = m\\cdot c$) mede quanta energia o corpo absorve por grau Celsius. Para economizar tempo no fogão, você quer que a panela "roube" o **mínimo de calor** possível — logo precisa da **menor capacidade térmica** ($m_2$).',
      whenToUse: 'Questões conceituais de calorimetria comparando corpos de mesmo calor específico e massas diferentes.',
      caution: 'Não confunda *calor específico* ($c$, propriedade do material, igual nas duas panelas) com *capacidade térmica* ($C = m c$, proporcional à massa).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: 'Como $m_2 < m_1$ e o material é o mesmo, $C_2 = m_2 c < C_1$, logo a panela 2 absorve menos calor e ferve a água em menor tempo.' },
      { letter: 'B', status: 'incorreta', explanation: 'A panela de massa menor $m_2$ possui **menor**, e não maior, capacidade térmica.' },
      { letter: 'C', status: 'incorreta', explanation: 'A panela 1 ($m_1 = 1{,}5\\,m_2$) tem a maior massa e, portanto, a maior capacidade térmica.' },
      { letter: 'D', status: 'incorreta', explanation: 'Maior capacidade térmica significa gastar MAIS calor e MAIS tempo para atingir a temperatura de cozimento.' },
      { letter: 'E', status: 'incorreta', explanation: 'A panela aquece junto com a água, absorvendo calor $Q_{\\text{panela}} = m_{\\text{panela}} c \\Delta T$, o que altera o tempo total.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'C = m*c com mesmo c e m2 < m1.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q32',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Óptica Geométrica — Índice de Refração Absoluto',
    questionType: 'fis-optica-indice-refracao-absoluto-limite',
    methodTitle: 'Condição Física Universal $n = c/v > 1$ para Meios Materiais',
    decisiveConcept:
      'O índice de refração absoluto de um meio é $n = \\dfrac{c}{v}$, onde $c$ é a velocidade da luz no vácuo e $v$ a velocidade no meio. Como em qualquer meio material a luz propaga-se mais lentamente que no vácuo ($v < c$), temos necessariamente $n > 1$ para líquidos (sendo $n = 1$ exclusivo do vácuo).',
    quickSolution:
      'Como cada aluno mediu o índice de um **líquido** ($v < c$), todo valor válido deve ser estritamente maior que $1$:\n- Aluno 01 ($1{,}2$): possível ($> 1$)\n- Aluno 02 ($0{,}89$): **ERRADO** ($< 1 \\implies v > c$, impossível)\n- Aluno 03 ($1$): **ERRADO** ($n = 1$ equivale ao vácuo, não a um líquido)\n- Aluno 04 ($0{,}9$): **ERRADO** ($< 1 \\implies v > c$, impossível)\n- Aluno 05 ($1{,}5$): possível ($> 1$)\n\nEstão errados os resultados dos alunos **02, 03 e 04** (**Alternativa D**).',
    macete: {
      title: 'Em meio material (líquido/sólido), n é SEMPRE > 1 (n = 1 é só o vácuo!)',
      strategy:
        'A luz no vácuo ($c$) é o limite cósmico de velocidade. Como $n = c/v$, um valor $n < 1$ significaria luz andando mais rápido que no vácuo (impossível!), e $n = 1$ significaria que o líquido não reduz nada a velocidade da luz (também errado para líquidos reais!).',
      whenToUse: 'Questões conceituais sobre definição de índice de refração absoluto.',
      caution: 'Não deixe de incluir o Aluno 03 ($n = 1$): o enunciado especifica um *líquido*, e nenhum líquido possui índice exatamente igual ao do vácuo.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O resultado $1{,}2$ (Aluno 01) é fisicamente válido, e faltam os alunos 03 e 04 entre os errados.' },
      { letter: 'B', status: 'incorreta', explanation: 'O valor $1{,}5$ (Aluno 05, típico de vidros/óleos) é válido, enquanto 02 e 04 são inválidos.' },
      { letter: 'C', status: 'incorreta', explanation: 'Troca erroneamente o aluno 04 ($0{,}9$) pelo 05 ($1{,}5$).' },
      { letter: 'D', status: 'correta', explanation: 'Valores menores que $1$ (02 e 04) violam $v < c$, e $n = 1$ (03) corresponde apenas ao vácuo, nunca a um líquido.' },
      { letter: 'E', status: 'incorreta', explanation: 'Inclui os dois únicos resultados fisicamente corretos (01 e 05) como se fossem errados.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Critério absoluto n = c/v > 1 para meios materiais líquidos.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q33',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Termodinâmica — Transformações Cíclicas',
    questionType: 'fis-termodinamica-ciclo-primeira-lei',
    methodTitle: 'Aplicação da 1ª Lei da Termodinâmica em Um Ciclo Fechado ($\\Delta U = 0$)',
    decisiveConcept:
      'Em toda transformação gasosa cíclica, o estado final coincide com o inicial ($T_f = T_i$), logo a variação de energia interna do ciclo é **nula** ($\\Delta U = 0$). Pela 1ª Lei da Termodinâmica ($\\Delta U = Q - \\tau$), conclui-se imediatamente que $Q = \\tau$.',
    quickSolution:
      'Como o ciclo retorna às condições iniciais de pressão, volume e temperatura, $\\Delta U = 0$ (eliminando A e D). Logo, pela 1ª Lei da Termodinâmica ($\\Delta U = Q - \\tau$), temos $Q = \\tau$: **há equivalência entre o trabalho realizado e a quantidade de calor trocada com o ambiente** (**Alternativa B**).',
    macete: {
      title: 'Transformação CÍCLICA → ΔU = 0 → Q = τ (em qualquer ciclo!)',
      strategy:
        'Apenas duas leis resolvem 90% das questões de ciclo no diagrama $P \\times V$:\n1. **$\Delta U = 0 \\implies Q = \\tau$** (já garante B e elimina A/D).\n2. **Ciclo Horário = Motor** ($\\tau > 0$, expansão > compressão, calor $\\to$ trabalho); **Anti-horário = Refrigerador** ($\\tau < 0$, trabalho $\\to$ calor) — eliminando C e E!',
      whenToUse: 'Questões teóricas sobre máquinas térmicas e transformações cíclicas.',
      caution: 'Lembre-se que durante *etapas isoladas* do ciclo $\\Delta U$ pode ser positivo ou negativo, mas no *ciclo completo* é sempre zero.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Em um ciclo completo, $T_{\\text{final}} = T_{\\text{inicial}}$, portanto $\\Delta U = 0$, nunca positiva.' },
      { letter: 'B', status: 'correta', explanation: 'Como $\\Delta U = 0$ no ciclo fechado, pela 1ª Lei ($\\Delta U = Q - \\tau$) resulta $Q_{\\text{líquido}} = \\tau_{\\text{ciclo}}$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Ciclo **anti-horário** possui trabalho líquido negativo (recebe trabalho para retirar calor, como refrigeradores); quem converte calor em trabalho é o ciclo **horário**.' },
      { letter: 'D', status: 'incorreta', explanation: 'Pelo mesmo motivo de A, a variação da energia interna num ciclo fechado é nula ($\\Delta U = 0$).' },
      { letter: 'E', status: 'incorreta', explanation: 'No ciclo horário (motor), a curva de expansão fica acima da curva de compressão, logo $|\\tau_{\\text{expansão}}| > |\\tau_{\\text{compressão}}|$.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: '1ª Lei em ciclo fechado: Delta U = 0 => Q = W.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q34',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletrostática — Potencial Elétrico',
    questionType: 'fis-eletrostatica-potencial-duas-esferas-ponto-medio',
    methodTitle: 'Superposição Escalar de Potenciais Externos ($V = kQ/r$ Independe do Raio)',
    decisiveConcept:
      'Fora de uma esfera uniformemente carregada (ou com carga $Q$ concentrada no centro), o potencial elétrico a uma distância $r > R$ do centro é idêntico ao de uma carga pontual: $V = \\dfrac{kQ}{r}$, **não dependendo do raio da esfera**.',
    quickSolution:
      'Como a distância entre os centros supera o dobro da soma dos raios, o ponto médio $M$ está **fora** de ambas as esferas e a uma **mesma distância** $r = d/2$ do centro de cada uma. Como ambas têm a **mesma carga $Q$**, seus potenciais individuais em $M$ são iguais:\n\n$$V_2(M) = \\frac{kQ}{d/2} = V_1$$\n\nComo potencial elétrico é grandeza **escalar**, o potencial resultante em $M$ é a soma algébrica:\n\n$$V_{\\text{total}} = V_1 + V_1 = 2V_1$$\n\n(**Alternativa C**).',
    stepByStep:
      '1. Seja $d$ a distância entre os centros. O ponto médio dista $r = d/2$ de ambos os centros.\n2. Como $d > 2(R_1 + R_2)$, temos $r = d/2 > R_1 + R_2 > R_1$ e $> R_2$, logo o ponto médio é externo às duas esferas.\n3. O potencial gerado por cada carga pontual no centro a uma distância $r$ vale $V_1 = \\frac{kQ}{r}$ e $V_2 = \\frac{kQ}{r} = V_1$ (mesma carga $Q$, mesma distância $r$).\n4. Pelo princípio da superposição escalar: $V_{\\text{total}} = V_1 + V_2 = 2V_1$.',
    macete: {
      title: 'Campo vetorial se anularia (= 0), mas POTENCIAL é ESCALAR e SOMA (V₁ + V₁ = 2V₁)!',
      strategy:
        'Duas armadilhas na mesma questão:\n1. O dado *"raio 1 = dobro do raio 2"* é só fumaça! Para ponto externo, só importa a distância até o **centro**.\n2. No ponto médio entre duas cargas iguais $+Q$ e $+Q$, o **campo elétrico** é zero (E, armadilha!), mas o **potencial elétrico** é escalar, então NÃO se anula — ele Dobra ($2V_1$)!',
      whenToUse: 'Questões de eletrostática envolvendo ponto médio entre duas esferas/cargas de mesmo sinal.',
      caution: 'Nunca confunda campo elétrico (vetor que se cancela no meio entre cargas iguais) com potencial elétrico (escalar que soma).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Resultaria se o raio menor dobrasse erroneamente o potencial externo ($V_2 = 2V_1$), o que não ocorre fora da esfera.' },
      { letter: 'B', status: 'incorreta', explanation: 'Erro de inversão na relação com o raio.' },
      { letter: 'C', status: 'correta', explanation: 'Mesma carga $Q$ e mesma distância $d/2$ até os centros produzem potenciais externos idênticos $V_1 = V_2$, cuja soma escalar é $2V_1$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Valor incompatível com a superposição escalar de duas cargas iguais.' },
      { letter: 'E', status: 'incorreta', explanation: 'Quem se anula no ponto médio entre duas cargas iguais é o **campo elétrico** resultante, jamais o potencial elétrico.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Superposição escalar V = kQ/(d/2) + kQ/(d/2) = 2V1 para ponto externo às duas esferas.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q35',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletrostática — Trabalho da Força Elétrica',
    questionType: 'fis-eletrostatica-trabalho-campo-uniforme-equipotencial',
    methodTitle: 'Relação $W = qEd = q\\Delta V$ vs. Deslocamento em Superfície Equipotencial',
    decisiveConcept:
      'Em um campo elétrico uniforme $\\vec{E}$: (1) ao deslocar uma carga $q$ **paralelamente** ao campo por uma distância $d$, realiza-se trabalho proporcional ao deslocamento ($|W| = qEd$ e $|\\Delta V| = Ed$); (2) ao deslocar **ortogonalmente** ao campo, a carga percorre uma **superfície equipotencial** ($\\Delta V = 0$), logo o trabalho é **nulo** ($W = 0$).',
    quickSolution:
      'Analisando fisicamente os gráficos impressos:\n- No movimento paralelo a $\\vec{E}$ (situação 1), o trabalho $W = qEd$ e o módulo da d.d.p. $|\\Delta V| = Ed$ crescem **linearmente** com a distância $d$, nunca sendo constantes em função de $d$ (o que invalida a linha horizontal do gráfico A e do gráfico D) ou em função de $V$ (invalida B).\n- O gráfico **C** é o único que traz crescimento linear a partir da origem para a situação 1 e valor nulo na situação 2, porém seu eixo vertical traz $V\\text{ (Volts)}$ em vez de $W\\text{ (Joules)}$ e sem explicitar sentido oposto ao campo ou módulo $|\\Delta V|$.\n\nPor essa inconsistência entre os eixos/curvas das alternativas impressas e o enunciado, este item permanece em **verificação pendente** sem gabarito oficial importado.',
    macete: {
      title: 'Ortogonal ao campo = Superfície Equipotencial → ΔV = 0 → Trabalho = 0!',
      strategy:
        'Em qualquer questão confiável de campo elétrico uniforme, grave as duas leis: deslocamento **perpendicular** às linhas de força nunca realiza trabalho ($W = 0$, pois $\\cos 90^\\circ = 0$ e $\\Delta V = 0$); deslocamento **paralelo** realiza trabalho linear com a distância ($W = \\pm qEd$).',
      whenToUse: 'Questões sobre trabalho da força elétrica e superfícies equipotenciais em campo uniforme.',
      caution: 'Desconfie sempre de gráficos que mostram trabalho $W$ constante em função da distância $d$ quando há força elétrica uniforme atuando.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'pendente', explanation: 'Traz o eixo esperado $W\\text{ (Joules)} \\times \\text{distância}$, mas representa a situação 1 como função constante em $d$, contradizendo $W = qEd$ (que deveria crescer linearmente com a distância).' },
      { letter: 'B', status: 'incorreta', explanation: 'Plota $W$ constante em função de $V$, contradizendo $W = q\\Delta V$.' },
      { letter: 'C', status: 'pendente', explanation: 'Único gráfico com comportamento linear crescente pela origem na situação 1 e nulo na situação 2, porém rotula o eixo vertical como $V\\text{ (Volts)}$ em vez de $W\\text{ (Joules)}$ sem especificar módulo da d.d.p.' },
      { letter: 'D', status: 'incorreta', explanation: 'Representa o potencial elétrico $V$ como constante com a distância na situação 1, incompatível com $|\\Delta V| = Ed$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Plota campo elétrico $E = 0$ na situação 1 e negativo constante na situação 2, invertendo o campo uniforme não nulo.' },
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'pending_verification',
    verificationNotes:
      'Inconsistência gráfica no caderno original entre as grandezas dos eixos (A plota W constante vs distância; C plota V linear vs distância). Mantido sem chave fixa até importação de gabarito oficial.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q36',
    examId: EXAM_ID,
    subject: 'Física',
    topic: 'Eletrostática — Capacitores',
    questionType: 'fis-eletrostatica-capacitor-carga-Q-CV',
    methodTitle: 'Cálculo da Carga Armazenada via $Q = C \\cdot U$ (e Checagem Dimensional)',
    decisiveConcept:
      'A carga elétrica armazenada nas placas de um capacitor depende exclusivamente de sua capacitância e da d.d.p. aplicada: $Q = C \\cdot U$, cuja unidade no SI é **Coulomb ($\text{C}$)** (ou $\\text{mC}$), nunca Farad ($\text{F}$).',
    quickSolution:
      'Usando diretamente $C = 10\\text{ mF} = 10 \\times 10^{-3}\\text{ F}$ e $U = 20\\text{ V}$:\n\n$$Q = C \\cdot U = (10 \\times 10^{-3}\\text{ F}) \\cdot (20\\text{ V}) = 0{,}2\\text{ C} = 200\\text{ mC}$$\n\n(Os dados de distância $2\\text{ mm}$ e área $10\\text{ cm}^2$ são supérfluos, pois a capacitância já foi dada).\n\n**Ressalva editorial**: no caderno impresso original, a alternativa **A** traz o valor numérico $200\\text{ m}$ grafado como **$200\\text{ mF}$** (unidade de capacitância, e não de carga elétrica $\\text{mC}$), e nenhuma opção traz $0{,}2\\text{ C}$ / $200\\text{ mC}$ com a unidade correta. Assim, o item permanece em **verificação pendente**.',
    stepByStep:
      '1. Identifique os dados necessários: capacitância $C = 10\\text{ mF} = 0{,}01\\text{ F}$ e tensão $U = 20\\text{ V}$.\n2. Aplique $Q = C \\cdot U = 0{,}01 \\times 20 = 0{,}2\\text{ C} = 200\\text{ mC}$.\n3. Análise dimensional: carga elétrica deve ser medida em Coulombs ($\\text{C}$ ou $\\text{mC}$); como A, B, C e E no caderno original trazem unidades em Farad ($\\text{F}/\\text{mF}/\\mu\\text{F}$), há falha formal de impressão na prova.',
    macete: {
      title: 'Se o problema já deu C e U, Q = C·U na hora (ignore d e A) — e confira a unidade!',
      strategy:
        'A banca adiciona distância e área entre placas para distrair quem tenta usar $C = \\varepsilon A/d$ sem necessidade. Basta $Q = 10\\text{ mF} \\times 20\\text{ V} = 200\\text{ mC} = 0{,}2\\text{ C}$. Em questões reais bem revisadas, olhe SEMPRE a unidade final ($\text{C}$ vs $\\text{F}$)!',
      whenToUse: 'Questões de capacitores planos envolvendo carga, capacitância e tensão.',
      caution: 'Mantenha atenção redobrada às unidades: Farad ($\\text{F}$) mede capacitância; Coulomb ($\\text{C}$) mede carga.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'pendente', explanation: 'O valor numérico $200\\text{ m-}$ coincide com $200\\text{ mC}$, porém foi impresso erroneamente com a unidade **$200\\text{ mF}$** (Farad, unidade de capacitância, não de carga).' },
      { letter: 'B', status: 'incorreta', explanation: 'Valor incorreto tanto em sinal/ordem de grandeza ($-0{,}2\\,\\mu$) quanto em unidade ($\\mu\\text{F}$).' },
      { letter: 'C', status: 'incorreta', explanation: '$0{,}02$ não equivale a $0{,}2$ ($10\\text{ mF} \\times 20\\text{ V} = 0{,}2\\text{ C}$), além da unidade incorreta $\\text{F}$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Um capacitor carregado sob d.d.p. de $20\\text{ V}$ possui carga não nula ($0{,}2\\text{ C}$).' },
      { letter: 'E', status: 'incorreta', explanation: 'Incompatível numericamente com $Q = C \\cdot U = 0{,}2\\text{ C}$ e grafada em unidade $\\text{F}$.' },
    ],
    proposedAnswer: null,
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'pending_verification',
    verificationNotes:
      'Valor físico exato é Q = 200 mC = 0,2 C, mas todas as opções não nulas no caderno oficial foram impressas com unidades de capacitância (F/mF/µF) em vez de carga (C/mC).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
