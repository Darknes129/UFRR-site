import type { QuestionResolution } from '../types';

const EXAM_ID = 'ufrr-integral-2022';
const REVIEW_DATE = '2026-11-16T16:00:00.000Z';

export const UFRR_2022_LINGUAGENS_EXATAS_RESOLUTIONS: QuestionResolution[] = [
  // ================= PORTUGUÊS (Q01–Q09) =================
  {
    questionId: 'ufrr-2022-q01',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Estilística — Figuras de Linguagem (Metáfora)',
    questionType: 'lp-figuras-linguagem-metafora',
    methodTitle: 'Mecanismo Semântico da Metáfora: Aproximação por Similaridade Implícita',
    decisiveConcept:
      'A metáfora consiste na transferência de sentido baseada em uma semelhança subjetiva entre termos de **campos semânticos distintos** ("oásis" de bem-estar/refúgio no deserto aplicado a "florestas" preservadas em meio à devastação), sem conjunção comparativa — embora aqui o próprio texto traga "como", o foco da questão é a metáfora nominal *"oásis de florestas"*.',
    quickSolution:
      'Na expressão *"verdadeiros oásis de florestas"*, aproximam-se dois campos semânticos originariamente distintos (**oásis**, lugar fértil e de bem-estar no deserto, e **florestas**, extensa área de vegetação verde preservada) para ressaltar a função protetora das Terras Indígenas (**Alternativa C**).',
    macete: {
      title: 'Metáfora aproxima campos diferentes; Antítese opõe; Hipérbole exagera',
      strategy:
        'Para identificar a definição correta em questões de figuras de linguagem, relacione cada verbo-chave ao seu recurso: *opõe ideias antagônicas* = antítese (A); *atenua* = eufemismo (B); *exagera* = hipérbole (D); *progride* = gradação (E); *aproxima campos semânticos não relacionados por semelhança* = metáfora (C).',
      whenToUse: 'Questões que pedem o funcionamento ou definição de figuras de linguagem no texto.',
      caution: 'Não confunda metáfora com antítese: "oásis" e "florestas" não estão em conflito, mas em relação analógica.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Ideias antagônicas em conflito caracterizam a **antítese** ou o paradoxo, e no enunciado "oásis" e "florestas" cooperam positivamente.' },
      { letter: 'B', status: 'incorreta', explanation: 'Atenuação de termos desagradáveis define o **eufemismo**, o que não ocorre aqui.' },
      { letter: 'C', status: 'correta', explanation: 'Explica exatamente o efeito metafórico de **"oásis de florestas"**: unir domínios distintos para qualificar a preservação ambiental.' },
      { letter: 'D', status: 'incorreta', explanation: 'Exagero intencional define a **hipérbole**, e não há transformação física das florestas em oásis.' },
      { letter: 'E', status: 'incorreta', explanation: 'Sequência ascendente de termos define a **gradação**, ausente no sintagma analisado.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Definição semântica direta da metáfora em "oásis de florestas".',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q02',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    subSubjectGroup: 'Literatura',
    topic: 'Literatura Brasileira — Arcadismo',
    questionType: 'lp-literatura-arcadismo-claudio-manuel',
    methodTitle: 'Reconhecimento do Arcadismo em Cláudio Manuel da Costa',
    decisiveConcept:
      'Cláudio Manuel da Costa (*Sonetos Inéditos*) pertence ao **Arcadismo brasileiro** (século XVIII), marcado pela busca de equilíbrio e simplicidade campestre em reação aos excessos barrocos, mas já revelando inquietação subjetiva e memória afetiva na paisagem que prenuncia o Romantismo.',
    quickSolution:
      'A busca pela vida idílica no campo, a simplicidade formal do soneto neoclássico em oposição ao sofrimento rebuscado barroco e a projeção de memórias pessoais na paisagem (antecipando traços românticos) identificam o período **árcade** (**Alternativa B**).',
    macete: {
      title: 'Cláudio Manuel da Costa + rio/montanha/rochedos = Arcadismo (Vila Rica)',
      strategy:
        'A natureza pedregosa (troncos, rochedos, penedos) combinada à idealização bucólica e à transição pré-romântica é a assinatura clássica de Cláudio Manuel da Costa no Arcadismo mineiro.',
      whenToUse: 'Questões sobre escolas literárias com poemas de Cláudio Manuel da Costa ou Tomás Antônio Gonzaga.',
      caution: 'Embora o soneto traga dor ("urna funesta"), o movimento histórico-literário é o Arcadismo, e não o Barroco nem o Trovadorismo.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: '"Período colonial" designa um recorte histórico genérico (Quinhentismo/Barroco/Arcadismo), não o estilo definido pela fuga ao Barroco e gosto idílico.' },
      { letter: 'B', status: 'correta', explanation: 'Define com precisão o **Arcadismo** de Cláudio Manuel da Costa: simplicidade campestre em reação ao Barroco e subjetividade que antecipa o Romantismo.' },
      { letter: 'C', status: 'incorreta', explanation: 'O soneto não trabalha o conflito teocêntrico entre sagrado e profano típico do Barroco.' },
      { letter: 'D', status: 'incorreta', explanation: 'O Renascimento português (século XVI) não tratava do nacionalismo brasileiro oitocentista nem corresponde ao autor setecentista.' },
      { letter: 'E', status: 'incorreta', explanation: 'O Trovadorismo é medieval (séculos XII–XIV) e suas cantigas de amigo não têm estrutura de soneto decassilábico árcade.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Autoria explícita de Cláudio Manuel da Costa (Arcadismo) confirmada na referência do Texto I.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q03',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    subSubjectGroup: 'Literatura',
    topic: 'Interpretação de Texto Literário — Lírica Árcade',
    questionType: 'lp-interpretacao-soneto-dualidade-temporal',
    methodTitle: 'Localização de Oposição Passado × Presente no Texto Poético',
    decisiveConcept:
      'Para comprovar a dualidade *alegria no passado × tristeza no presente*, deve-se localizar o verso que traz simultaneamente os dois polos temporais e emocionais contrastados.',
    quickSolution:
      'Nos versos 7 e 8 (*"Que de amor nos suavíssimos enredos / **Foi cena alegre**, e **urna é já funesta**"*), o pretérito *"foi cena alegre"* opõe-se diretamente ao presente *"urna é já funesta"* (lúgubre, triste) (**Alternativa D**).',
    macete: {
      title: 'Busque o par verbal "Foi [passado] × É já [presente]"',
      strategy:
        'Quando o enunciado pede um verso que comprove *dualidade* ou *contraste temporal*, procure dois adjetivos opostos ligados a verbos em tempos diferentes no mesmo dístico.',
      whenToUse: 'Questões literárias pedindo o fragmento exato que comprova uma afirmação interpretativa.',
      caution: 'Os versos de A e B mostram apenas a permanência física da paisagem ("inda os mesmos"), sem o contraste alegre × funesto.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Mostra somente a constância física das árvores e da floresta, sem mencionar tristeza ou alegria.' },
      { letter: 'B', status: 'incorreta', explanation: 'Enumera os elementos da paisagem (rio, montanha, troncos, rochedos) no presente, sem contraponto passado.' },
      { letter: 'C', status: 'incorreta', explanation: 'Refere-se ao trabalho da memória, mas não explicita a oposição alegria passada versus tristeza presente.' },
      { letter: 'D', status: 'correta', explanation: 'Contrasta explicitamente o passado amoroso (**"Foi cena alegre"**) com o presente doloroso (**"e urna é já funesta"**).' },
      { letter: 'E', status: 'incorreta', explanation: 'Retrata apenas o aspecto atual de horror na paisagem, faltando o polo passado de alegria.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Oposição textual explícita nos versos 7–8 do soneto.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q04',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Morfossintaxe — Pronomes Pessoais e Funções Sintáticas',
    questionType: 'lp-sintaxe-pronome-obliquo-objeto-direto',
    methodTitle: 'Transitividade Verbal e Substituição por Pronome Oblíquo Átono',
    decisiveConcept:
      'Na norma culta, os pronomes oblíquos átonos **o / a / os / as** (e variantes *lo/la/no/na*) exercem exclusivamente a função de **objeto direto**, completando verbos transitivos diretos sem preposição.',
    quickSolution:
      'Quem persegue, persegue **alguém** (verbo transitivo direto). Assim, em *"ia perseguir eles"* (forma coloquial; na norma culta, *"ia persegui-los"*), o pronome substitui o **objeto direto** (**Alternativa A**).',
    macete: {
      title: 'O / A / OS / AS = Objeto Direto; LHE / LHES = Objeto Indireto',
      strategy:
        'Não é preciso hesitar: na língua portuguesa padrão, o pronome **o** (e suas variações *lo/la/no/na*) ocupa SEMPRE o lugar do **objeto direto**.',
      whenToUse: 'Questões sobre colocação e função sintática de pronomes pessoais oblíquos átonos.',
      caution: 'Pronomes retos (ele/eles) só devem ser usados como sujeito na norma padrão, nunca como objeto direto.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '**Perseguir** é verbo transitivo direto; o complemento pronominal que recebe a ação verbal exerce a função de **objeto direto**.' },
      { letter: 'B', status: 'incorreta', explanation: 'Adjunto adverbial indica circunstância (tempo, lugar, modo), não sendo substituível por "o/los".' },
      { letter: 'C', status: 'incorreta', explanation: 'Aposto explica ou resume um substantivo anterior, função estranha ao complemento de "perseguir".' },
      { letter: 'D', status: 'incorreta', explanation: 'Complemento nominal liga-se a substantivo, adjetivo ou advérbio por meio de preposição.' },
      { letter: 'E', status: 'incorreta', explanation: 'Na oração *"disse que ia perseguir eles"*, o sujeito oculto de *ia perseguir* é "a polícia", e não "eles".' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Análise sintática inequívoca do complemento de "perseguir".',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q05',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Coesão Textual — Referenciação Anafórica',
    questionType: 'lp-coesao-referente-disso',
    methodTitle: 'Recuperação do Antecedente Imediato de Encapsuladores ("disso")',
    decisiveConcept:
      'O termo **disso** (*de + isso*) funciona como encapsulador anafórico cujo referente direto tende a ser a proposição imediatamente anterior que ele exemplifica ou resume.',
    quickSolution:
      'Logo após a frase *"‘Atribuir identidades como marginal, drogado, engessam o jovem, eliminam tudo mais que ele é’"*, a autora acrescenta: *"‘O laudo de periculosidade é exemplo **disso**...’"*. Logo, **disso** retoma exatamente a afirmação da alternativa E (**Alternativa E**).',
    macete: {
      title: 'Leia a frase imediatamente anterior a "é exemplo disso"',
      strategy:
        'Em textos dissertativos ou jornalísticos, expressões como *"é exemplo disso"* apontam para a tese/afirmação logo precedente que está sendo ilustrada por um caso concreto (aqui, o laudo de periculosidade ilustrando o engessamento identitário).',
      whenToUse: 'Questões de coesão referencial com pronomes demonstrativos neutros (*isso, disso, nisso*).',
      caution: 'Note que A e D repetem basicamente a mesma frase anterior à citação; leia a sequência exata dentro das aspas.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Essa frase aparece antes da citação sobre atribuir identidades, sendo retomada antes pelo trecho com "isso".' },
      { letter: 'B', status: 'incorreta', explanation: 'Retoma a ideia de cobrança da alegria como agressão, muito distante do exemplo do laudo.' },
      { letter: 'C', status: 'incorreta', explanation: 'Está no início do parágrafo, referindo-se à frustração adolescente em geral.' },
      { letter: 'D', status: 'incorreta', explanation: 'É praticamente idêntica a A e não é o enunciado imediatamente exemplificado pelo laudo.' },
      { letter: 'E', status: 'correta', explanation: 'É a sentença imediatamente anterior à fala *"O laudo de periculosidade é exemplo disso"*, ilustrando como rótulos estigmatizantes engessam o jovem.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Sequência textual direta do parágrafo citado.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q06',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    subSubjectGroup: 'Literatura',
    topic: 'Literatura Brasileira — Romantismo (Indianismo)',
    questionType: 'lp-literatura-romantismo-indianismo-identidade',
    methodTitle: 'Projeto Nacionalista da Primeira Geração Romântica (Indianismo)',
    decisiveConcept:
      'Após a Independência (1822), o Romantismo brasileiro da 1ª geração (Gonçalves Dias, José de Alencar) elegeu o indígena idealizado como símbolo heroico puro e autóctone para construir uma **identidade nacional** própria, distinta da herança portuguesa.',
    quickSolution:
      'A idealização do indígena em *Canção do Tamoio* integra o projeto romântico da primeira metade do século XIX voltado ao **presente nacionalista em luta pela identidade nacional** (**Alternativa D**).',
    macete: {
      title: 'Indianismo romântico = Herói nacional + Identidade brasileira pós-Independência',
      strategy:
        'Elimine facilmente os anacronismos: escravocrata/colonial (A) era o oposto do ideal de autonomia; família real portuguesa (B) contraria o antilusitanismo romântico; república (E) é fim do século XIX, não início.',
      whenToUse: 'Questões sobre o significado histórico-ideológico do Indianismo no Romantismo brasileiro.',
      caution: 'Embora o indígena remeta às raízes originárias, o projeto político-cultural pertencia ao nacionalismo do presente pós-1822.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O projeto indianista buscava uma origem heroica e livre, não a valorização do passado colonial escravocrata.' },
      { letter: 'B', status: 'incorreta', explanation: 'O nacionalismo romântico procurava desvincular a cultura brasileira da metrópole e da nobreza portuguesa.' },
      { letter: 'C', status: 'incorreta', explanation: 'Não visava exaltar oligarquias ultraconservadoras, mas fundar um imaginário de nação independente.' },
      { letter: 'D', status: 'correta', explanation: 'Traduz o sentido central do Indianismo romântico: construir e afirmar a identidade nacional brasileira.' },
      { letter: 'E', status: 'incorreta', explanation: 'No início do século XIX vigorava a recém-implantada Monarquia; o movimento republicano ganha força apenas no final do século.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Síntese clássica do Indianismo de Gonçalves Dias na historiografia literária.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q07',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    subSubjectGroup: 'Literatura',
    topic: 'Literatura Brasileira Contemporânea — Conceição Evaristo',
    questionType: 'lp-literatura-poncia-vicencio-diaspora',
    methodTitle: 'Leitura Crítica da Herança Pós-Abolição em "Ponciá Vicêncio"',
    decisiveConcept:
      'Em *Ponciá Vicêncio*, Conceição Evaristo retrata como a desagregação familiar e a migração forçada pela miséria pós-abolição prolongam a exclusão histórica da população negra no Brasil.',
    quickSolution:
      'O resumo destaca que o êxodo da roça para a cidade, separando Ponciá, irmão e mãe em busca de sobrevivência, forma um *"mosaico-miniatura de uma diáspora familiar"*, evidenciando que, mesmo após a alforria legal, muitas famílias negras continuam submetidas à pobreza e à exclusão (**Alternativa B**).',
    macete: {
      title: 'Confronte cada afirmação com os fatos explícitos no texto-base',
      strategy:
        'Em questões com síntese longa no enunciado, verifique fatos literais: o texto não fala em perda de filhos (A), nem em igualdade na roça (C), nem em sucesso na cidade (D — ela sente "insatisfação e desesperança"), nem em otimismo com os exemplos (E). Sobra B.',
      whenToUse: 'Questões de interpretação de sinopses de obras literárias contemporâneas.',
      caution: 'Fique atento às inversões de sentido: o texto afirma explicitamente *sofrimento, angústia e desesperança*.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'O texto-base trata da morte do pai e da separação da mãe e do irmão, não mencionando perdas de filhos nem resposta pela arte.' },
      { letter: 'B', status: 'correta', explanation: 'Conecta diretamente a metáfora da "diáspora familiar" e a busca desesperançada por sobrevivência à continuidade da exclusão socioeconômica pós-abolição.' },
      { letter: 'C', status: 'incorreta', explanation: 'Ponciá vem de família negra pobre na roça, sem qualquer indicação de igualdade de recursos com brancos.' },
      { letter: 'D', status: 'incorreta', explanation: 'O texto enfatiza *insatisfação, angústia e desesperança*, mostrando frustração das expectativas urbanas.' },
      { letter: 'E', status: 'incorreta', explanation: 'O destino disperso e sofrido dos familiares não gerou crença otimista, mas angústia.' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Dedução direta do texto de apoio e da temática de Conceição Evaristo.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q08',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Coesão e Conectivos — Valores Semânticos',
    questionType: 'lp-conectivos-enquanto-ja-adversatividade',
    methodTitle: 'Análise Contextual de "Enquanto" e "Já" em Comparação Desigual',
    decisiveConcept:
      'No período *"Enquanto a média de rendimento mensal do profissional branco é de R$ 2.697, **já** do trabalhador preto é de mensal R$ 1.526"*, o advérbio/conector **já** atua com nítido valor **adversativo/contrastivo** ("por outro lado / ao passo que"), destacando a disparidade salarial.',
    quickSolution:
      'Analisando principalmente o segundo conectivo (**já**), ele não expressa condição (A), concessão (C), adição (D) nem conclusão (E), mas sim **adversatividade** (oposição entre R$ 2.697 e R$ 1.526), alinhando-se com o sentido proporcional/comparativo-simultâneo atribuído a **enquanto** na **Alternativa B** (*proporção e adversatividade*).',
    macete: {
      title: 'Quando o primeiro conectivo é polissêmico ("enquanto"), decida pelo segundo ("já")',
      strategy:
        'Testando o segundo termo em *"já do trabalhador preto é R$ 1.526"*: pode trocar por *"por outro lado / porém"*? Sim — isso é **adversatividade**! Nenhuma outra alternativa além da B traz *adversatividade* na segunda posição.',
      whenToUse: 'Questões com pares de conectivos ("respectivamente") onde um dos termos admite mais de uma leitura.',
      caution: 'Apesar de *enquanto* também carregar nuance temporal ou de contraste simultâneo, o par fechado da banca e a função adversativa de *já* isolam B com segurança.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Não há alternância nem hipótese/condição entre os salários.' },
      { letter: 'B', status: 'correta', explanation: 'É a única opção que reconhece a **adversatividade** de *"já"* contrapondo os rendimentos desiguais, acompanhada da noção proporcional/paralela associada a *"enquanto"* pela banca.' },
      { letter: 'C', status: 'incorreta', explanation: 'O conector *"já"* não estabelece relação concessiva (que exigiria ideia de obstáculo ineficaz, como *embora*).' },
      { letter: 'D', status: 'incorreta', explanation: 'Não há explicação (justificativa) nem mera soma neutra, e sim contraste de desigualdade.' },
      { letter: 'E', status: 'incorreta', explanation: 'O conectivo *"já"* aqui é contrastivo/adversativo, e não conclusivo (como *portanto*).' },
    ],
    proposedAnswer: 'B',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Eliminação inequívoca pelo valor adversativo do conector "já" na frase.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q09',
    examId: EXAM_ID,
    subject: 'Língua Portuguesa',
    topic: 'Sintaxe e Emprego do Sinal Indicativo de Crase',
    questionType: 'lp-crase-demonstrativo-aqueles',
    methodTitle: 'Regência + Crase em Pronome Demonstrativo ("àquele / àqueles")',
    decisiveConcept:
      'Ocorre crase obrigatória quando um termo regente exige a preposição **a** e o termo regido começa pela vogal **a** dos pronomes demonstrativos **aquele(s), aquela(s), aquilo**: $\\text{a} + \\text{aqueles} = \\text{àqueles}$.',
    quickSolution:
      'Em **Alternativa A**, o adjetivo *contrários* rege a preposição **a** (*contrários a quem?*), que se funde com o **a** inicial de **aqueles**: *contrários **àqueles** que defendem...*. Todas as demais opções violam proibições clássicas da crase (antes de verbo, masculino plural sem artigo ou artigo indefinido após VTD).',
    macete: {
      title: 'Troque "àqueles" por "a esses": se pedir preposição "a", tem crase!',
      strategy:
        'Regras de corte instantâneo para crase: (1) nunca antes de verbo (*à ser*, *à pensar* — corta B e C); (2) *a* singular + substantivo plural (*à crimes* — corta D); (3) verbo transitivo direto (*intensifica o quê?*) + artigo indefinido *uma* (corta E). Sobrou **A**.',
      whenToUse: 'Questões de crase envolvendo pronomes demonstrativos ou casos proibidos.',
      caution: 'Lembre que o gênero masculino de *aqueles* NÃO impede a crase, pois a fusão ocorre entre a preposição *a* e o *a* inicial do pronome.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '**Contrários** exige preposição **a**, que se contrai corretamente com o pronome demonstrativo **aqueles** (*àqueles*).' },
      { letter: 'B', status: 'incorreta', explanation: 'Não se usa acento grave antes de verbo no infinitivo (*a ser*).' },
      { letter: 'C', status: 'incorreta', explanation: 'Proibida a crase antes do verbo no infinitivo (*a pensar*).' },
      { letter: 'D', status: 'incorreta', explanation: 'Antes de substantivo masculino plural (*crimes*) não há artigo feminino *a(s)* para justificar crase.' },
      { letter: 'E', status: 'incorreta', explanation: 'O verbo *intensifica* é transitivo direto (não pede preposição *a*) e antecede artigo indefinido (*uma*), tornando a crase duplamente impossível.' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Regra normativa padrão: contração a + aqueles = àqueles; demais casos são proibições formais.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },

  // ================= MATEMÁTICA (Q10–Q18) =================
  {
    questionId: 'ufrr-2022-q10',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Teoria dos Conjuntos e Porcentagem',
    questionType: 'mat-conjuntos-diagrama-venn-porcentagem',
    methodTitle: 'Cálculo Direto de "Apenas A" via Complementar da União',
    decisiveConcept:
      'Se $20\\%$ da população não tomou nenhuma das duas vacinas, então a união dos vacinados é $n(C \\cup H) = 100\\% - 20\\% = 80\\%$. Quem tomou **apenas** COVID-19 é exatamente a diferença $(C \\cup H) - H$.',
    quickSolution:
      'Vacinados com pelo menos uma dose: $100\\% - 20\\% = 80\\%$.\n\nLogo, os vacinados **apenas** contra COVID-19 correspondem a:\n\n$$80\\% - 64\\% = 16\\%$$\n\nAplicando sobre 650 mil habitantes: $0{,}16 \\times 650\\,000 = 104\\,000$ (**104 mil habitantes**, **Alternativa A**).',
    stepByStep:
      '1. Sejam $C$ os imunizados contra COVID-19 ($45\\%$) e $H$ os imunizados contra H1N1 ($64\\%$).\n2. Como $20\\%$ não tomaram nenhuma vacina, $n(C \\cup H) = 100\\% - 20\\% = 80\\%$.\n3. Pela fórmula da união: $80\\% = 45\\% + 64\\% - n(C \\cap H) \\implies n(C \\cap H) = 109\\% - 80\\% = 29\\%$.\n4. Apenas COVID-19: $45\\% - 29\\% = 16\\%$.\n5. População: $\\dfrac{16}{100} \\times 650\\,000 = 16 \\times 6\\,500 = 104\\,000$ habitantes.',
    macete: {
      title: 'Apenas A = (União) − (Total de B)',
      strategy:
        'Você nem precisa achar a interseção! Como todos da união ou estão em B ou estão exclusivamente em A, basta subtrair os $64\\%$ de H1N1 diretamente dos $80\\%$ da união: $80\\% - 64\\% = 16\\%$.',
      whenToUse: 'Problemas de dois conjuntos com porcentagem que pedem "apenas um dos conjuntos".',
      caution: '20% representa quem está FORA dos dois conjuntos; não esqueça de calcular primeiro a união ($100\\% - 20\\%$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '$16\\%$ de $650\\,000 = 104\\,000$ habitantes.' },
      { letter: 'B', status: 'incorreta', explanation: '$286\\,000$ equivale a $44\\%$ de $650\\,000$ (erro algébrico na subtração dos conjuntos).' },
      { letter: 'C', status: 'incorreta', explanation: '$130\\,000$ equivale a $20\\%$ de $650\\,000$ (percentual dos que não tomaram nenhuma vacina).' },
      { letter: 'D', status: 'incorreta', explanation: '$234\\,000$ equivale a $36\\%$ de $650\\,000$ ($100\\% - 64\\%$, esquecendo de descontar os $20\\%$ não vacinados).' },
      { letter: 'E', status: 'incorreta', explanation: '$416\\,000$ equivale a $64\\%$ de $650\\,000$ (total de vacinados contra H1N1).' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: '0.16 * 650 = 104 mil.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q11',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Funções Exponenciais e Logaritmos',
    questionType: 'mat-exponencial-logaritmo-natural',
    methodTitle: 'Isolamento da Potência de Euler e Aplicação do Logaritmo Natural',
    decisiveConcept:
      'Dada a equação exponencial $a \\cdot e^{k} = b$, primeiro divida por $a$ para isolar $e^k = b/a$ e só então aplique $\\ln(\\cdot) = \\log_e(\\cdot)$ nos dois lados.',
    quickSolution:
      'Substituindo $I_1 = 2$, $r = 0{,}25$ e $I(t) = 16$:\n\n$$16 = 2 e^{0{,}25(t-1)} \\implies e^{0{,}25(t-1)} = 8$$\n\nAplicando $\\log_e$ nos dois lados e usando $\\log_e 8 = 2{,}25$:\n\n$$0{,}25(t-1) = 2{,}25 \\implies t - 1 = \\frac{2{,}25}{0{,}25} = 9 \\implies t = 10$$\n\nPortanto, foi no **10º dia de infecção** (**Alternativa D**).',
    stepByStep:
      '1. Monte a função com os dados: $I(t) = 2 \\cdot e^{0{,}25(t-1)}$.\n2. Iguale $I(t) = 16$: $2 e^{0{,}25(t-1)} = 16 \\implies e^{0{,}25(t-1)} = 8$.\n3. Por definição de logaritmo na base $e$: $0{,}25(t-1) = \\log_e 8$.\n4. Usando o valor dado $\\log_e 8 = 2{,}25$: $\\frac{1}{4}(t-1) = \\frac{9}{4} \\implies t - 1 = 9 \\implies t = 10$.',
    macete: {
      title: 'Dividir por 0,25 é multiplicar por 4',
      strategy:
        'Em vez de dividir decimais, lembre que $0{,}25 = 1/4$: logo $0{,}25(t-1) = 2{,}25 \\implies t - 1 = 4 \\times 2{,}25 = 9 \\implies t = 10$.',
      whenToUse: 'Modelos exponenciais populacionais ou epidemiológicos com dado explícito de $\\ln$ ou $\\log$.',
      caution: 'Atenção ao expoente $(t-1)$ e não $t$! Quem esquece de somar $+1$ no final marca erradamente o 9º dia (C).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Resulta de erro na divisão de $2{,}25$ por $0{,}25$ ou no uso do expoente.' },
      { letter: 'B', status: 'incorreta', explanation: 'Para $t=8$, o expoente seria $0{,}25 \\times 7 = 1{,}75 \\neq 2{,}25$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Distrator clássico para quem calcula $t-1 = 9$ e esquece de somar $1$.' },
      { letter: 'D', status: 'correta', explanation: '$t = 9 + 1 = 10$º dia, pois $0{,}25(10-1) = 2{,}25 = \\log_e 8$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Para $t=11$, o expoente seria $2{,}50 > 2{,}25$, superando 16 infectados.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Note que a prova adota a aproximação didática log_e(8) = 2,25 para conta exata.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q12',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Função Quadrática e Áreas (Soma de Riemann)',
    questionType: 'mat-funcao-quadratica-soma-retangulos',
    methodTitle: 'Leitura das Alturas dos Retângulos pela Extremidade Esquerda na Curva',
    decisiveConcept:
      'Cada retângulo da figura tem base $\\Delta x = 2$ (nos intervalos $[1,3]$, $[3,5]$ e $[5,7]$) e toca a curva $f(x) = mx^2 + \\frac{1}{3}$ no canto superior **esquerdo**, logo suas alturas são $f(1)$, $f(3)$ e $f(5)$.',
    quickSolution:
      'Somando as áreas dos três retângulos de base $2$:\n\n$$A = 2\\big[f(1) + f(3) + f(5)\\big] = 12 \\implies f(1) + f(3) + f(5) = 6$$\n\nCalculando os valores:\n\n$$\\left(m + \\frac{1}{3}\\right) + \\left(9m + \\frac{1}{3}\\right) + \\left(25m + \\frac{1}{3}\\right) = 6 \\implies 35m + 1 = 6 \\implies m = \\frac{5}{35} = \\frac{1}{7}$$\n\n(**Alternativa E**).',
    stepByStep:
      '1. Pela figura, as bases medem $3 - 1 = 2$, $5 - 3 = 2$ e $7 - 5 = 2$.\n2. O vértice superior esquerdo de cada retângulo pertence ao gráfico de $f$, portanto as alturas são $f(1)$, $f(3)$ e $f(5)$.\n3. $f(1) = m(1)^2 + \\frac{1}{3} = m + \\frac{1}{3}$; $f(3) = 9m + \\frac{1}{3}$; $f(5) = 25m + \\frac{1}{3}$.\n4. Soma das alturas: $(1 + 9 + 25)m + 3 \\cdot \\frac{1}{3} = 35m + 1$.\n5. Área total: $2(35m + 1) = 12 \\implies 35m + 1 = 6 \\implies m = \\frac{5}{35} = \\frac{1}{7}$.',
    macete: {
      title: 'Base comum? Divida a área total pela base antes de somar!',
      strategy:
        'Como os 3 retângulos têm largura igual a $2$, divida logo $12 \\div 2 = 6$. Além disso, três parcelas com $+1/3$ somam exatamente $1$, evitando contas com frações!',
      whenToUse: 'Questões de função com gráfico de retângulos inscritos ou circunscritos (somas de áreas).',
      caution: 'Observe no gráfico qual canto do retângulo encosta na curva: aqui é a extremidade esquerda ($1, 3, 5$), e não a direita ($3, 5, 7$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Resulta de confundir os pontos da soma ou errar o coeficiente de $m$.' },
      { letter: 'B', status: 'incorreta', explanation: 'É o inverso de $1/7$ (erro ao isolar $m$ em $35m = 5$).' },
      { letter: 'C', status: 'incorreta', explanation: 'Valor incompatível com a condição de área $12$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Não satisfaz $2(35m+1)=12$.' },
      { letter: 'E', status: 'correta', explanation: 'Com $m = 1/7$, $f(1)+f(3)+f(5) = 35(1/7) + 1 = 6$, e área $= 2 \\times 6 = 12$.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Inspeção visual confirmada em q12-area-retangulos.png: retângulos inscritos pela esquerda em [1,3], [3,5], [5,7].',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q13',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Matrizes e Identidades Trigonométricas',
    questionType: 'mat-matrizes-produto-trigonometria',
    methodTitle: 'Cálculo Direto Apenas da Diagonal Principal do Produto AB',
    decisiveConcept:
      'Para obter a soma dos elementos da diagonal principal (traço) de $C = AB$, não é necessário calcular os elementos $c_{12}$ e $c_{21}$: bastam $c_{11}$ (linha 1 de $A$ $\\times$ coluna 1 de $B$) e $c_{22}$ (linha 2 de $A$ $\\times$ coluna 2 de $B$).',
    quickSolution:
      'Calculando apenas a diagonal principal de $C = AB$:\n\n$$c_{11} = (\\text{sen } x)(\\text{sen } x) + (1)(-1) = \\text{sen}^2 x - 1$$\n\n$$c_{22} = (\\cos x)(-\\cos x) + (1)(1) = -\\cos^2 x + 1$$\n\nSomando os dois:\n\n$$c_{11} + c_{22} = \\text{sen}^2 x - \\cos^2 x = -(\\cos^2 x - \\text{sen}^2 x) = -\\cos 2x$$\n\n(**Alternativa A**).',
    stepByStep:
      '1. $c_{11} = L_1(A) \\cdot C_1(B) = \\text{sen } x \\cdot \\text{sen } x + 1 \\cdot (-1) = \\text{sen}^2 x - 1$.\n2. $c_{22} = L_2(A) \\cdot C_2(B) = \\cos x \\cdot (-\\cos x) + 1 \\cdot 1 = 1 - \\cos^2 x$.\n3. Soma da diagonal principal: $(\\text{sen}^2 x - 1) + (1 - \\cos^2 x) = \\text{sen}^2 x - \\cos^2 x$.\n4. Pela identidade do arco duplo $\\cos 2x = \\cos^2 x - \\text{sen}^2 x$, concluímos que $\\text{sen}^2 x - \\cos^2 x = -\\cos 2x$.',
    macete: {
      title: 'Teste com x = 0° em 5 segundos!',
      strategy:
        'Para conferir a resposta trigonométrica na hora, substitua $x = 0$: $\\text{sen } 0 = 0$, $\\cos 0 = 1$. Então $c_{11} = 0 - 1 = -1$ e $c_{22} = -1 + 1 = 0$, soma $= -1$. Isso já elimina B ($1$), C ($0$) e E ($1$). Testando $x = \\pi/2$, $c_{11} = 0$ e $c_{22} = 1$, soma $= +1$ (eliminando D, que é constante $-1$). Sobra exclusivamente **A** ($-\\cos 2x$)!',
      whenToUse: 'Questões de álgebra matricial ou simplificação trigonométrica com alternativas em função de $x$.',
      caution: 'Atenção ao sinal do cosseno do arco duplo: $\\cos 2x = \\cos^2 x - \\text{sen}^2 x$, e não o contrário.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'correta', explanation: '$c_{11} + c_{22} = \\text{sen}^2 x - \\cos^2 x = -\\cos 2x$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Resulta de erro de sinal ao calcular $c_{11}$ ou $c_{22}$ somando $\\text{sen}^2 x + \\cos^2 x$.' },
      { letter: 'C', status: 'incorreta', explanation: '$\\text{sen } 2x = 2\\text{sen } x \\cos x$, termo que não aparece na diagonal principal.' },
      { letter: 'D', status: 'incorreta', explanation: 'Falso: em $x = \\pi/2$, a soma vale $+1$, logo não é constante igual a $-1$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Sinal invertido ($\\cos 2x = \\cos^2 x - \\text{sen}^2 x$, enquanto a soma obtida foi $\\text{sen}^2 x - \\cos^2 x$).' },
    ],
    proposedAnswer: 'A',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Conferido simbolicamente e por substituição numérica em x=0 e x=pi/2.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q14',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Aritmética e Fatorial',
    questionType: 'mat-aritmetica-algarismo-unidades-fatorial',
    methodTitle: 'Congruência Módulo 10 em Somas de Fatoriais ($n! \\equiv 0$ para $n \\ge 5$)',
    decisiveConcept:
      'Todo fatorial a partir de $5! = 120$ contém os fatores $2$ e $5$, portanto é múltiplo de $10$ e possui algarismo das unidades igual a **zero**.',
    quickSolution:
      'Como $5! = 120$, $6! = 720, \\dots, 2022!$ terminam todos em $0$, apenas os quatro primeiros termos influenciam o algarismo das unidades de $S$:\n\n$$1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33$$\n\nLogo, o algarismo das unidades de $S$ é **3** (**Alternativa C**).',
    macete: {
      title: 'A partir de 5!, o último algarismo é sempre ZERO',
      strategy:
        'Em qualquer soma gigante de fatoriais ($1! + 2! + \\dots + N!$) que peça o algarismo das unidades, corte tudo de $5!$ em diante e some apenas $1 + 2 + 6 + 24 = 33 \\to \\mathbf{3}$. Se a soma começar em $0!$, some $+1 \\to 34 \\to \\mathbf{4}$.',
      whenToUse: 'Questões sobre último dígito ou resto por 10 de somatórios de fatoriais.',
      caution: 'Verifique sempre onde a soma começa ($1!$ vs $0!$, já que $0! = 1$). Aqui começa em $1!$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Resulta de esquecer o termo $1! = 1$ ou de cálculo errado de $4!$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Corresponde apenas ao valor de $3!$.' },
      { letter: 'C', status: 'correta', explanation: '$1+2+6+24 = 33$, cujo algarismo das unidades é $3$, inalterado pelos termos $n! \\ge 5!$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Não corresponde à soma das unidades $1+2+6+4 = 13$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Soma incorreta dos primeiros fatoriais.' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: '1!+2!+3!+4! = 33, e para n>=5 todo n! é múltiplo de 10.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q15',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Equações Trigonométricas',
    questionType: 'mat-trigonometria-equacao-quarta-potencia',
    methodTitle: 'Redução de $\\text{sen}^4 x + \\cos^4 x$ por Quadrado Perfeito e Arco Duplo',
    decisiveConcept:
      'Use o produto notável $a^2 + b^2 = (a+b)^2 - 2ab$ com $a = \\text{sen}^2 x$ e $b = \\cos^2 x$: $\\text{sen}^4 x + \\cos^4 x = 1 - \\frac{1}{2}\\text{sen}^2(2x)$.',
    quickSolution:
      'Reescrevendo a expressão:\n\n$$\\text{sen}^4 x + \\cos^4 x = (\\text{sen}^2 x + \\cos^2 x)^2 - 2\\text{sen}^2 x\\cos^2 x = 1 - \\frac{\\text{sen}^2(2x)}{2}$$\n\nIgualando a $\\frac{7}{8}$:\n\n$$1 - \\frac{\\text{sen}^2(2x)}{2} = \\frac{7}{8} \\implies \\text{sen}^2(2x) = \\frac{1}{4} \\implies \\text{sen}(2x) = \\pm\\frac{1}{2}$$\n\nComo $x \\in [0, \\pi]$, temos $2x \\in [0, 2\\pi]$, logo $2x \\in \\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}$, ou seja, $x \\in \\left\\{\\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{7\\pi}{12}, \\frac{11\\pi}{12}\\right\\}$ (**Alternativa D**).',
    stepByStep:
      '1. Parta de $(\\text{sen}^2 x + \\cos^2 x)^2 = 1^2 = 1$.\n2. Expanda: $\\text{sen}^4 x + \\cos^4 x + 2\\text{sen}^2 x \\cos^2 x = 1$.\n3. Como $\\text{sen}(2x) = 2\\text{sen } x\\cos x$, segue que $2\\text{sen}^2 x\\cos^2 x = \\frac{1}{2}\\text{sen}^2(2x)$.\n4. Assim, $1 - \\frac{1}{2}\\text{sen}^2(2x) = \\frac{7}{8} \\implies \\frac{1}{2}\\text{sen}^2(2x) = \\frac{1}{8} \\implies \\text{sen}^2(2x) = \\frac{1}{4}$.\n5. Logo $\\text{sen}(2x) = \\frac{1}{2}$ (em $2x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$) ou $\\text{sen}(2x) = -\\frac{1}{2}$ (em $2x = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$).\n6. Dividindo por $2$: $x \\in \\left\\{\\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{7\\pi}{12}, \\frac{11\\pi}{12}\\right\\}$.',
    macete: {
      title: 'sen⁴x + cos⁴x = 1 − ½·sen²(2x) — guarde para vestibulares!',
      strategy:
        'Não caia na armadilha de descartar a raiz negativa $\\text{sen}(2x) = -1/2$ (que leva ao erro da opção C)! Quando tiramos raiz de $\\text{sen}^2(2x) = 1/4$, surgem **4 arcos** no ciclo $[0, 2\\pi]$ para $2x$, gerando 4 soluções em $[0, \\pi]$ — e apenas **D** tem as 4 frações com denominador $12$.',
      whenToUse: 'Equações trigonométricas com somas de quartas potências de seno e cosseno.',
      caution: 'Na opção A aparecem arcos até $\\frac{11\\pi}{6} > \\pi$, violando o intervalo $[0, \\pi]$ (e seriam os valores de $2x$, não de $x$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Esses valores correspondem a $2x$, e não a $x$ (inclusive ultrapassam o intervalo $[0, \\pi]$).' },
      { letter: 'B', status: 'incorreta', explanation: 'Omite a solução $\\pi/12$, apesar de $x = \\pi/12$ gerar $\\text{sen}(2x) = \\text{sen}(\\pi/6) = 1/2$.' },
      { letter: 'C', status: 'incorreta', explanation: 'Considera apenas $\\text{sen}(2x) = +1/2$, esquecendo a solução negativa $\\text{sen}(2x) = -1/2$.' },
      { letter: 'D', status: 'correta', explanation: 'Contém exatamente as 4 raízes no intervalo $[0, \\pi]$ correspondentes a $\\text{sen}(2x) = \\pm 1/2$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Testando $x = \\pi/6$: $\\text{sen}^4(\\pi/6)+\\cos^4(\\pi/6) = 1/16 + 9/16 = 10/16 = 5/8 \\neq 7/8$.' },
    ],
    proposedAnswer: 'D',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Identidade trigonométrica exata e verificação nos 4 ângulos em [0, pi].',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q16',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Números Complexos — Potenciação (Fórmula de De Moivre)',
    questionType: 'mat-complexos-forma-trigonometrica-moivre',
    methodTitle: 'Potência de Complexo Unitário na Forma Trigonométrica ($\\text{cis } \\theta$)',
    decisiveConcept:
      'O número complexo $z = \\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$ tem módulo $|z| = 1$ e argumento $\\theta = 60^\\circ = \\frac{\\pi}{3}$. Pela Primeira Fórmula de De Moivre, $z^n = \\cos(n\\theta) + i\\,\\text{sen}(n\\theta)$.',
    quickSolution:
      'Escrevendo na forma trigonométrica:\n\n$$z = \\cos\\frac{\\pi}{3} + i\\,\\text{sen}\\frac{\\pi}{3}$$\n\nElevando à 15ª potência:\n\n$$z^{15} = \\cos\\left(15\\cdot\\frac{\\pi}{3}\\right) + i\\,\\text{sen}\\left(15\\cdot\\frac{\\pi}{3}\\right) = \\cos(5\\pi) + i\\,\\text{sen}(5\\pi) = -1 + 0i = -1$$\n\n(**Alternativa E**).',
    macete: {
      title: '½ + (√3/2)i é raiz sexta da unidade: z³ = −1 e z⁶ = +1!',
      strategy:
        'Em vez de multiplicar 15 vezes, observe que $(z)^3 = -1$ (pois gira $3 \\times 60^\\circ = 180^\\circ$). Então $z^{15} = (z^3)^5 = (-1)^5 = -1$ em uma linha!',
      whenToUse: 'Potências altas de $\\frac{1}{2} \\pm \\frac{\\sqrt{3}}{2}i$ ou $\\frac{\\sqrt{2}}{2} \\pm \\frac{\\sqrt{2}}{2}i$.',
      caution: 'Como 5 é ímpar, $(-1)^5 = -1$ (mantenha o sinal negativo; $+1$ seria para $z^{12}$ ou $z^{18}$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Corresponderia a um múltiplo ímpar de $90^\\circ$ ($\\pi/2$), não de $5\\pi$.' },
      { letter: 'B', status: 'incorreta', explanation: 'Seria o valor para potências múltiplas de $6$ (como $z^{12}$ ou $z^{18}$).' },
      { letter: 'C', status: 'incorreta', explanation: 'Corresponderia a ângulo côngruo a $270^\\circ$ ($3\\pi/2$).' },
      { letter: 'D', status: 'incorreta', explanation: 'O módulo do resultado deve continuar sendo $1^{15} = 1$, enquanto $|1-i| = \\sqrt{2}$.' },
      { letter: 'E', status: 'correta', explanation: '$\\text{cis}(5\\pi) = \\cos\\pi + i\\,\\text{sen}\\pi = -1$.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'De Moivre exato: 15 * pi/3 = 5*pi -> cos(5pi) = -1.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q17',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Geometria Analítica — Circunferência e Parábola',
    questionType: 'mat-geometria-analitica-circunferencia-parabola',
    methodTitle: 'Completamento de Quadrados para o Centro e Fórmula $x^2 = 4fy$',
    decisiveConcept:
      'Para uma parábola com vértice na origem $(0,0)$ e foco sobre o eixo $y$ em $(0, f)$, sua equação reduzida é $x^2 = 4fy$ (onde $f$ é a distância focal; cuidado para não confundir o parâmetro $p = 2f$ usado por alguns livros com $f$!).',
    quickSolution:
      'Completando o quadrado na circunferência:\n\n$$x^2 + (y^2 - 4y + 4) = 4 \\implies x^2 + (y - 2)^2 = 4$$\n\nO centro (e portanto o foco da parábola) é $F = (0, 2)$. Com vértice $V = (0,0)$ e foco $(0,2)$ no semieixo positivo $Oy$, temos distância focal $c = 2$, logo:\n\n$$x^2 = 4cy = 4(2)y = 8y$$\n\n(**Alternativa E**).',
    stepByStep:
      '1. Reescreva $x^2 + y^2 - 4y = 0$ completando quadrados em $y$: $x^2 + (y-2)^2 = 2^2$.\n2. O centro da circunferência é $(0, 2)$, que coincide com o foco $F(0, 2)$ da parábola.\n3. Como o vértice é $V(0, 0)$ e o foco está no eixo $y$ positivo ($y = 2$), a concavidade é voltada para cima, portanto a equação tem a forma $x^2 = 4fy$ (ou $x^2 = 2py$, onde $f = p/2 = 2 \\implies p = 4$).\n4. Substituindo $f = 2$: $x^2 = 4(2)y = 8y$.',
    macete: {
      title: 'Foco em (0, +f) → x² = 4fy (sempre 4 vezes a coordenada do foco!)',
      strategy:
        'Para evitar errar entre $x^2 = 4y$ (A) e $x^2 = 8y$ (E), teste na definição geométrica de parábola: qualquer ponto $(x, y)$ dela tem mesma distância ao foco $(0,2)$ e à diretriz $y = -2$. No ponto na altura do foco ($y=2$), a distância à diretriz é $2 - (-2) = 4$, então $x = \\pm 4$. Substituindo $(4, 2)$: $4^2 = 16$, e $8 \\cdot 2 = 16$!',
      whenToUse: 'Questões de cônicas conectando centro de circunferência ao foco da parábola.',
      caution: 'A confusão mais comum é usar $x^2 = 2py$ substituindo $p=2$ em vez de $p/2 = 2$, o que leva ao distrator A ($x^2 = 4y$).',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Para $x^2 = 4y$, o foco estaria em $(0, 1)$, não em $(0, 2)$.' },
      { letter: 'B', status: 'incorreta', explanation: '$y^2 = 8x$ tem foco no eixo $x$ em $(2, 0)$, não em $(0, 2)$.' },
      { letter: 'C', status: 'incorreta', explanation: '$x^2 = 16y$ teria foco em $(0, 4)$.' },
      { letter: 'D', status: 'incorreta', explanation: '$y^2 = 4x$ teria foco em $(1, 0)$.' },
      { letter: 'E', status: 'correta', explanation: 'Com vértice $(0,0)$ e foco $(0,2)$, a distância focal é $2$, gerando $x^2 = 4(2)y = 8y$.' },
    ],
    proposedAnswer: 'E',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Verificado pela definição métrica (latus rectum = 4f = 8).',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
  {
    questionId: 'ufrr-2022-q18',
    examId: EXAM_ID,
    subject: 'Matemática',
    topic: 'Polinômios — Transformação de Variável',
    questionType: 'mat-polinomios-mudanca-variavel',
    methodTitle: 'Substituição de Variável $u = x - 1$ ou Deslocamento Direto para $x + 1$',
    decisiveConcept:
      'Para passar de $P(x-1)$ para $P(x+1)$, substitua $x$ por $x + 2$ em toda a igualdade, ou encontre primeiro $P(t)$ fazendo $t = x - 1 \\implies x = t + 1$.',
    quickSolution:
      'Fazendo $t = x - 1$, temos $x = t + 1$. Substituindo na definição dada:\n\n$$P(t) = (t + 1)^2 - 1 = t^2 + 2t$$\n\nAgora substituímos $t$ por $x + 1$:\n\n$$P(x+1) = (x+1)^2 + 2(x+1) = (x^2 + 2x + 1) + (2x + 2) = x^2 + 4x + 3$$\n\n(**Alternativa C**).',
    stepByStep:
      '1. Temos $P(x - 1) = x^2 - 1$.\n2. Para obter $P(x + 1)$ diretamente, note que $(x + 2) - 1 = x + 1$. Logo, troque $x$ por $x + 2$ nos dois lados: $P(x + 1) = (x + 2)^2 - 1$.\n3. Desenvolva: $P(x+1) = x^2 + 4x + 4 - 1 = x^2 + 4x + 3$.',
    macete: {
      title: 'Qual entrada vai dentro de P(x - 1) para dar P(x + 1)? É (x + 2)!',
      strategy:
        'Em vez de achar $P(x)$ primeiro, apenas pergunte: *"O que devo colocar no lugar de $x$ em $x - 1$ para virar $x + 1$?"* Resposta: $x + 2$. Então basta calcular $(x + 2)^2 - 1 = x^2 + 4x + 3$ em 10 segundos! Você também pode testar $x = 0$: $P(1) = P(2-1) = 2^2 - 1 = 3$; em C, para $x=0$, $0^2 + 4(0) + 3 = 3$.',
      whenToUse: 'Questões com função ou polinômio definido em argumento deslocado $P(ax+b)$.',
      caution: 'Observe que A afirma $P(x) = x^2 + 4x + 3$ (errado, pois $P(x) = x^2 + 2x$), enquanto C traz corretamente $P(x+1)$.',
    },
    alternativeAnalysis: [
      { letter: 'A', status: 'incorreta', explanation: 'Na verdade, $P(x) = (x+1)^2 - 1 = x^2 + 2x$, e não $x^2 + 4x + 3$.' },
      { letter: 'B', status: 'incorreta', explanation: '$x^2 + 2x$ corresponde a $P(x)$, não a $P(x+1)$.' },
      { letter: 'C', status: 'correta', explanation: '$P(x+1) = (x+2)^2 - 1 = x^2 + 4x + 3$.' },
      { letter: 'D', status: 'incorreta', explanation: 'Não satisfaz $P(0) = 1^2 - 1 = 0$ junto a $P(1) = 3$: daria $P(1) = 2$.' },
      { letter: 'E', status: 'incorreta', explanation: 'Erro na constante final ($4 - 1 = 3$, não $1$).' },
    ],
    proposedAnswer: 'C',
    officialAnswer: null,
    officialAnswerStatus: 'unavailable',
    verificationStatus: 'verified_independent',
    verificationNotes: 'Verificado por substituição direta (x -> x+2) e checagem de P(1)=3.',
    reviewedAt: REVIEW_DATE,
    contentVersion: 2,
  },
];
