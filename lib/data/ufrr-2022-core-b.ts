import type { Question } from '../types';
import {
  EXAM_ID_2022,
  EXAM_NAME_2022,
  SVG_2022_Q60,
  SVG_2022_Q61,
  SVG_2022_Q62,
  SVG_2022_Q63,
  makeProv2022,
} from './ufrr-2022-texts';

export const UFRR_2022_CORE_B: Question[] = [
  // ================= GEOGRAFIA (Q37–Q45) =================
  {
    id: 'ufrr-2022-q37',
    examId: EXAM_ID_2022,
    originalNumber: 37,
    originalCode: 'UFRR 2022 · Q37',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Cartografia — Projeções Cartográficas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre as projeções cartográficas é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As projeções planas podem ser de tipo polar, equatorial e oblíqua (ou horizontal), que são posições básicas em relação à superfície de referência.',
      },
      {
        letter: 'B',
        text: 'As projeções conformes são aquelas onde não há deformação dos ângulos e, por conta dessa propriedade, a forma das pequenas áreas também não apresenta deformação.',
      },
      {
        letter: 'C',
        text: 'As projeções de Robinson e a cilíndrica de Miller são consideradas projeções de tipo Afiláticas porque os comprimentos, as áreas e os ângulos não são conservados.',
      },
      {
        letter: 'D',
        text: 'As projeções equivalentes apresentam deformações lineares, enquanto nas projeções equidistantes as áreas na carta não guardam uma relação constante com a superfície da Terra.',
      },
      {
        letter: 'E',
        text: 'Em relação à superfície de referência, as projeções cônicas podem assumir as posições normal, transversal e oblíqua (ou horizontal).',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q37', correctLetter: null },
    provenance: makeProv2022(12),
  },
  {
    id: 'ufrr-2022-q38',
    examId: EXAM_ID_2022,
    originalNumber: 38,
    originalCode: 'UFRR 2022 · Q38',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Regional de Roraima — Biomas e Biodiversidade',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre as características da biodiversidade do Estado de Roraima é correto afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Nos Campos Gerais do Rio Branco é possível encontrar animais como onça, gato maracajá, jacaré e outros, enquanto em áreas de Florestas Tropicais Amazônicas, encontra-se tamanduás, pacas, cutias e outras espécies;',
      },
      {
        letter: 'B',
        text: 'Uma das formações naturais é a Floresta Tropical Amazônica, que está composta de floresta densa e úmida, que se estende pela região sudoeste do estado.',
      },
      {
        letter: 'C',
        text: 'Em áreas de Florestas Tropicais Amazônicas possui vegetação com árvores mais rarefeitas e vales ricos em humos com gramíneas de boa qualidade para a criação de animais.',
      },
      {
        letter: 'D',
        text: 'Na Região Serrana, também conhecida como região do lavrado e savana, é possível encontrar, em grande quantidade, caimbés, paricaranas e muricizeiros.',
      },
      {
        letter: 'E',
        text: 'Ao Sul do estado, encontra-se a área de Campos Gerais do Rio Branco, entrecortado por rios intermitentes, com uma escassa fauna e flora.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q38', correctLetter: null },
    provenance: makeProv2022(12),
  },
  {
    id: 'ufrr-2022-q39',
    examId: EXAM_ID_2022,
    originalNumber: 39,
    originalCode: 'UFRR 2022 · Q39',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geomorfologia — Formas de Relevo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre formas de relevo, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Cuesta diz respeito a uma forma de relevo resultante de recuo erosivo de camadas sedimentares, ocorrendo também em áreas externas de bacias sedimentares.',
      },
      {
        letter: 'B',
        text: 'Sumidouro é um poço cárstico por onde se infiltram as águas da chuva ou de rios, ocorrendo, entre outras coisas, em áreas de calcários.',
      },
      {
        letter: 'C',
        text: 'Morro testemunho diz respeito a uma forma costeira que é esculpida a partir de processos erosivos marinhos.',
      },
      {
        letter: 'D',
        text: 'Inselbergue é uma forma que ocorre com maior frequência em depressões periféricas, bem como em áreas de rochas metamórficas.',
      },
      {
        letter: 'E',
        text: 'Falésia é uma forma de relevo cuja ocorrência se dá no limite entre as formas continentais e a praia.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q39', correctLetter: null },
    provenance: makeProv2022(12),
  },
  {
    id: 'ufrr-2022-q40',
    examId: EXAM_ID_2022,
    originalNumber: 40,
    originalCode: 'UFRR 2022 · Q40',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Econômica do Brasil — Impactos da Pandemia no PIB',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'A pandemia da Covid-19 afetou diferentes setores da sociedade e, do ponto de vista econômico, no Brasil, o impacto se deu tanto no PIB (Produto Interno Bruto) em geral, quanto nos setores da economia, de forma específica. A partir daí, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O setor agropecuário apresentou uma queda de 2,0% em 2020, sendo a maior dos últimos 60 anos, participando com 5,1% no PIB brasileiro.',
      },
      {
        letter: 'B',
        text: 'Em 2020, a indústria de transformação foi responsável por 11,3% do PIB, respondendo ainda por 65,4% do investimento empresarial em pesquisa e desenvolvimento.',
      },
      {
        letter: 'C',
        text: 'O setor de serviços teve uma retração de 4,5% no ano de 2020, fato bastante considerável, já que o setor representa cerca de 63% do PIB brasileiro e cerca de 68% dos empregos.',
      },
      {
        letter: 'D',
        text: 'No ano de 2020, a indústria no seu conjunto correspondeu por 20,4% do PIB do Brasil e por 69,2% das exportações de bens e serviços desse setor.',
      },
      {
        letter: 'E',
        text: 'A indústria respondeu, em 2020, por 20,4% do emprego formal do Brasil e é na indústria de transformação que estão os melhores salários do setor para trabalhadores com ensino médio e superior completos.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q40', correctLetter: null },
    provenance: makeProv2022(12),
  },
  {
    id: 'ufrr-2022-q41',
    examId: EXAM_ID_2022,
    originalNumber: 41,
    originalCode: 'UFRR 2022 · Q41',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia Agrária — Agronegócio no Brasil',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre a questão do Agronegócio no Brasil, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Associada à difusão do agronegócio no Brasil, ocorre a intensa substituição dos sistemas técnicos, com alta densidade de capital e tecnologia, produto também do avanço do meio técnico-científico-informacional.',
      },
      {
        letter: 'B',
        text: 'Um dos processos inerentes ao agronegócio é a substituição da produção de alimentos pela produção de *commodities*, como a soja, milho e cana de açúcar, difundindo especializações produtivas em porções do território.',
      },
      {
        letter: 'C',
        text: 'Em decorrência da atividade do agronegócio, surgem também cidades que, inseridas em Regiões Produtivas Agrícolas, se organizam e atendem demandas do agronegócio globalizado, a exemplo de Luís Eduardo Magalhães (BA), Uruçuí (PI), Rondonópolis (MT).',
      },
      {
        letter: 'D',
        text: 'O avanço do agronegócio vem aumentando a concentração fundiária e êxodo rural, promovendo a expulsão e expropriação de pequenos agricultores, e daqueles que não detinham a propriedade da terra.',
      },
      {
        letter: 'E',
        text: 'Apesar do intenso uso de mão de obra especializada, os profissionais especializados para o agronegócio seguem concentrados exclusivamente em metrópoles, sem alteração na divisão social e territorial do trabalho agropecuário.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q41', correctLetter: null },
    provenance: makeProv2022(13),
  },
  {
    id: 'ufrr-2022-q42',
    examId: EXAM_ID_2022,
    originalNumber: 42,
    originalCode: 'UFRR 2022 · Q42',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geografia do Brasil — Ilhas Oceânicas e Unidades de Conservação',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre as ilhas oceânicas brasileiras é correto afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O Brasil detém rica biodiversidade em suas ilhas oceânicas, das quais, destacam-se: Arquipélago de Fernando de Noronha, Ilha de Trinidad e Tobago, Arquipélago Martim Vaz, Atol das Rocas.',
      },
      {
        letter: 'B',
        text: 'O Arquipélago de Fernando de Noronha encontra-se fora das rotas de navegação, tornando-o limitado e protegido da exploração pelo setor turístico, contribuindo para a manutenção da sua biodiversidade.',
      },
      {
        letter: 'C',
        text: 'O Atol das Rocas representa a maior porção emersa de uma grande cadeia de montanhas com 1.200 km de extensão, formado por recifes de algas calcáreas.',
      },
      {
        letter: 'D',
        text: 'O Arquipélago Martin Vaz faz parte da mesma plataforma insular e com a instalação da base de pesquisa e a ocupação por pesquisadores houve desenvolvimento de atividades de pesca.',
      },
      {
        letter: 'E',
        text: 'O Arquipélago de Fernando de Noronha e o Atol das Rocas são ilhas oceânicas que estão protegidas como Unidades de Conservação.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q42', correctLetter: null },
    provenance: makeProv2022(13),
  },
  {
    id: 'ufrr-2022-q43',
    examId: EXAM_ID_2022,
    originalNumber: 43,
    originalCode: 'UFRR 2022 · Q43',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Geopolítica — Blocos Econômicos Regionais',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Analise as assertivas a seguir:

I. O Mercosul inicialmente foi constituído pela Argentina, Brasil, Paraguai e Uruguai, com o objetivo de ampliar e integrar os respectivos mercados nacionais, considerado como condição para acelerar os processos de desenvolvimento econômico com justiça social.
II. Entrou em vigor, recentemente, um novo acordo entre Estados Unidos-México-Canadá (do inglês *United States-Mexico-Canada Agreement* – USMCA), que substitui o NAFTA, cujo objetivo é construir um comércio mutuamente benéfico, levando a mercados mais livres e justos que, consequentemente, promova crescimento econômico na região.
III. O principal motor da economia europeia é o mercado único que permite apenas a livre circulação de bens, serviços e capitais, enquanto as pessoas seguem com restrições de circulação livre dentro do bloco.

A partir disso é possível afirmar que:`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'I está correta e II e III estão incorretas.' },
      { letter: 'B', text: 'I e III estão corretas e II está incorreta.' },
      { letter: 'C', text: 'I está incorreta e II e III estão corretas.' },
      { letter: 'D', text: 'I e II estão incorretas e III está correta.' },
      { letter: 'E', text: 'I e II estão corretas e III está incorreta.' },
    ],
    answerKey: { questionId: 'ufrr-2022-q43', correctLetter: null },
    provenance: makeProv2022(13),
  },
  {
    id: 'ufrr-2022-q44',
    examId: EXAM_ID_2022,
    originalNumber: 44,
    originalCode: 'UFRR 2022 · Q44',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Industrialização — Indústria 4.0',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Sobre o atual processo de industrialização, baseado naquilo que vem sendo chamado de Indústria 4.0, é INCORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Está fundamentada na automação industrial, que exige a integração da inteligência artificial, robótica, internet das coisas e computação em nuvem.',
      },
      {
        letter: 'B',
        text: 'A partir do uso e integração entre diferentes tecnologias há a alteração das etapas da produção e os modelos de negócios, mas que no Brasil exigirá adaptação para os diferentes setores e empresas.',
      },
      {
        letter: 'C',
        text: 'O elevado conhecimento sobre o uso de tecnologias digitais e dos benefícios alcançados, apontam para um acelerado processo de difusão da indústria 4.0 no Brasil, fato que também é resultado da homogeneidade industrial brasileira.',
      },
      {
        letter: 'D',
        text: 'Produz impacto significativo na produtividade, pois a partir do uso de máquinas, computadores e dados é possível aumentar a eficiência do uso de recursos e no desenvolvimento de produtos.',
      },
      {
        letter: 'E',
        text: 'No Brasil, um dos desafios da indústria 4.0 é superar as desigualdades sociais e regionais quanto à infraestrutura técnico-científico-informacional, que segue bastante concentrada em porções específicas do território nacional.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q44', correctLetter: null },
    provenance: makeProv2022(13),
  },
  {
    id: 'ufrr-2022-q45',
    examId: EXAM_ID_2022,
    originalNumber: 45,
    originalCode: 'UFRR 2022 · Q45',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Geografia',
      topic: 'Comércio Internacional e Setor de Serviços',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O comércio internacional foi profundamente alterado em decorrência das transformações produzidas a partir de 2020. Isso significou a redução do tráfego de mercadorias, impactando economias de diferentes partes do mundo. Nesse contexto é CORRETO afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A exportação de serviços modernos, tais como transporte, viagens, construção e serviços culturais, pessoais e recreativos, passou a ter maior destaque a partir de 2006. No entanto, a importação desse tipo de serviços passou a ser mais preponderante a partir de 2014.',
      },
      {
        letter: 'B',
        text: 'Atualmente os serviços respondem por parcela significativa dos empregos no mundo, sendo que as novas vagas, em sua maioria, estão sendo geradas nesse setor da atividade econômica, que tem destaque também quando se trata da força de trabalho feminina.',
      },
      {
        letter: 'C',
        text: 'Em 2020, as importações brasileiras de serviços apresentaram aumento de 30,2%, registrando os maiores valores para comércio exterior brasileiro de serviços desde 2009, fato também explicado pelo comércio eletrônico.',
      },
      {
        letter: 'D',
        text: 'No contexto da pandemia da Covid-19, as viagens representaram a principal redução na importação e exportação no conjunto do comércio exterior brasileiro de serviços, alcançando retração de 72,5% para este tipo de serviço.',
      },
      {
        letter: 'E',
        text: 'Do ponto de vista internacional, a participação dos serviços na composição do PIB é maior em países de alta renda, onde chega a 50% em média, contra uma média de 40% nos países de renda baixa.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q45', correctLetter: null },
    provenance: makeProv2022(14),
  },

  // ================= HISTÓRIA (Q46–Q54) =================
  {
    id: 'ufrr-2022-q46',
    examId: EXAM_ID_2022,
    originalNumber: 46,
    originalCode: 'UFRR 2022 · Q46',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Era Vargas — Integralismo e Estado Novo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“É muito fácil lançar mão de um apelido como ‘galinhas-verdes’ e achar graça de brasileiros querendo repetir os ritos do fascismo europeu. Mas a esquerda radical não abraçou o apelido ‘galinhas-verdes’ por falta de respeito. O objetivo era ridicularizar porque esta era uma forma de combater. Porque, apesar da Batalha da Praça da Sé, o fascismo brasileiro era mais organizado, mais estruturado e contava com maiores números que o comunismo”.

(DORIA, Pedro. Fascismo à brasileira. São Paulo: Planeta, 2020, p. 237).

“Os integralistas [...] vestiam camisetas verdes e adotavam a letra grega sigma como formas que incentivariam um forte sentimento de comunhão e amor à pátria. Mesmo contando com intensas manifestações, os integralistas perderam força com a implementação do Estado Novo, no final dos anos 1930”.

(Adaptado de: SOUSA, Rainer G. A Ação Integralista Brasileira. In: Brasil Escola. Disponível em: https://brasilescola.uol.com.br/historiab/a-acao-integralista-brasileira.htm. )

Sobre os regimes políticos europeus do entreguerras no século XX e de sua influência sobre o cenário político brasileiro da década de 1930, é CORRETO dizer que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'o Estado Novo, regime político centrado na figura de Getúlio Vargas, era autoritário e tinha inspirações trabalhistas.',
      },
      {
        letter: 'B',
        text: 'o Estado Novo, regime político centrado na figura de Getúlio Vargas, era integralista e tinha inspirações trabalhistas.',
      },
      {
        letter: 'C',
        text: 'o Estado Novo, regime político centrado na figura de Plínio Salgado, era integralista e tinha inspirações trabalhistas.',
      },
      {
        letter: 'D',
        text: 'o Integralismo, movimento político centrado na figura de Getúlio Vargas, era democrático e tinha inspirações fascistas.',
      },
      {
        letter: 'E',
        text: 'o Integralismo, movimento político centrado na figura de Plínio Salgado, era democrático e tinha inspirações liberais.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q46', correctLetter: null },
    provenance: makeProv2022(14),
  },
  {
    id: 'ufrr-2022-q47',
    examId: EXAM_ID_2022,
    originalNumber: 47,
    originalCode: 'UFRR 2022 · Q47',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Ditadura Militar Brasileira — Anos de Chumbo e Milagre Econômico',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“O Milagre Brasileiro e os Anos de Chumbo foram simultâneos. Ambos reais, coexistiram negando-se. Passados mais de trinta anos, continuam negando-se. Quem acha que houve um, não acredita (ou não gosta de admitir) que houve o outro”.

(GASPARI, Elio. A Ditadura Escancarada. São Paulo: Cia das Letras, 2002).

“Em entrevista exclusiva à CNN nesta quinta-feira (7), a secretária de Cultura, Regina Duarte, minimizou a ditadura afirmando que ‘sempre houve tortura e que não quer arrastar um cemitério’. Após a fala, Regina Duarte desconversou sobre o tema, cantando trecho do jingle da Copa de 1970".

(CNN Brasil. Regina Duarte minimiza ditadura e interrompe entrevista à CNN. São Paulo, 2020. Disponível em: https://www.cnnbrasil.com.br/politica/regina-duarte-minimiza-ditadura-e-interrompe-entrevista-a-cnn-veja-integra/. Acesso em: 17 out. 2021. (Fragmento de texto)

Os textos acima revelam um conflito de pontos de vista sobre um período específico do regime militar brasileiro, em que coincidem resultados econômicos positivos, nacionalismo entusiástico com o futebol, o início da transmissão da TV em cores, maior restrição de direitos políticos e repressão policial marcada pela vigilância ostensiva, tortura e execuções de investigados. São marcos históricos que inauguram e encerram o período em questão:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'a instauração do Ato Institucional nº. 5 (1968) e a Copa do Mundo do México (1970).',
      },
      {
        letter: 'B',
        text: 'a instauração do Ato Institucional nº. 5 (1968) e a Campanha pelas Diretas Já (1983).',
      },
      {
        letter: 'C',
        text: 'a instauração do Ato Institucional nº. 5 (1968) e o extermínio da Guerrilha do Araguaia (1974).',
      },
      {
        letter: 'D',
        text: 'a realização da Marcha da Família com Deus pela Liberdade (1964) e a instauração do Ato Institucional nº. 5 (1968).',
      },
      {
        letter: 'E',
        text: 'a realização da Marcha da Família com Deus pela Liberdade (1964) e a instalação da Assembleia Nacional Constituinte (1987).',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q47', correctLetter: null },
    provenance: makeProv2022(14),
  },
  {
    id: 'ufrr-2022-q48',
    examId: EXAM_ID_2022,
    originalNumber: 48,
    originalCode: 'UFRR 2022 · Q48',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'História Contemporânea — Organismos Internacionais e Integração Regional',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O regionalismo, ou seja, os acordos regionais de integração, não interessam apenas ao comércio internacional; eles são um componente indissociável da economia mundial contemporânea. Atualmente, e de forma crescente, grande parte do comércio internacional ocorre entre blocos comerciais ou em acordos regionais de integração, que constituem, assim, uma configuração relevante da história econômica das últimas décadas [...] Grosso modo, podem ser distinguidos os seguintes tipos de integração econômica: áreas de preferências tarifárias, zonas de livre comércio, uniões aduaneiras, mercados comuns e uniões econômicas (dotadas geralmente de moeda comum).

(ALMEIDA, Paulo Roberto de. Integração Regional: uma introdução. São Paulo: Saraiva, 2013, ps. 15, 56. Adaptado)

Qual das organizações listadas abaixo NÃO é um bloco econômico ou um acordo regional de integração?`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: 'União Europeia – UE' },
      { letter: 'B', text: 'Fundo Monetário Internacional – FMI' },
      { letter: 'C', text: 'Mercado Comum do Sul – MERCOSUL' },
      { letter: 'D', text: 'Comunidade Andina de Nações – CAN' },
      {
        letter: 'E',
        text: 'Acordo de Livre Comércio da América do Norte – Nafta (sigla em inglês)',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q48', correctLetter: null },
    provenance: makeProv2022(15),
  },
  {
    id: 'ufrr-2022-q49',
    examId: EXAM_ID_2022,
    originalNumber: 49,
    originalCode: 'UFRR 2022 · Q49',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Brasil Colônia — Capitanias Hereditárias e Sesmarias',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A colonização do Brasil, de seu lado, foi tardia, intensificando-se quando o quadro institucional da metrópole já começava a sentir as transformações determinadas pelas grandes descobertas. Nem por isso, entretanto, deixaram de se prolongar na América diversos traços de ligação com a Idade Média lusitana; a titulatura de grande número de funcionários, instituições como a das sesmarias e as discussões relativas a um caráter feudal das capitanias hereditárias, quando mais não fosse, seriam suficientes para atestar essa continuidade.”

(HOLANDA, Sérgio Buarque. Introdução Geral. In HOLANDA, Sérgio Buarque & CAMPOS, Pedro Moacyr. História Geral da Civilização Brasileira – Tomo I: A Época Colonial. 6ª Ed. São Paulo: Difel, 1981, p. 25).

Leia as assertivas abaixo e marque a CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'No contexto das grandes descobertas, Portugal instituiu a Idade Média lusitana em sua colônia na América, promovendo a vinda de funcionários, a implantação da indústria manufatureira, da imprensa régia e de instituições monárquicas a exemplo das sesmarias.',
      },
      {
        letter: 'B',
        text: 'A sesmaria possibilitou a criação de um mercado interno, favorecendo o trabalho livre de toda população e o incremento de novas tecnologias na colônia portuguesa na América.',
      },
      {
        letter: 'C',
        text: 'As capitanias hereditárias permitiram a inclusão dos povos originários, como membros ativos e participativos da sociedade que emergia no processo de colonização.',
      },
      {
        letter: 'D',
        text: 'Sesmaria representava uma das prerrogativas do poder metropolitano, mais precisamente a de conceder casas, pardieiros ou terras para terceiros. Essa doação era a de propriedades consideradas não aproveitadas e os responsáveis pelo favorecimento mencionado eram os sesmeiros, então eleitos pelos conselhos locais e confirmados pelo rei.',
      },
      {
        letter: 'E',
        text: 'As capitanias hereditárias impulsionaram o capitalismo industrial brasileiro.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q49', correctLetter: null },
    provenance: makeProv2022(15),
  },
  {
    id: 'ufrr-2022-q50',
    examId: EXAM_ID_2022,
    originalNumber: 50,
    originalCode: 'UFRR 2022 · Q50',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Período Joanino — Presença Britânica e Abertura dos Portos',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Além de oferecer o melhor mercado de que a Inglaterra pôde [sic] dispor em 1808, o Brasil pôde [sic] fornecer-lhe alguma quantidade de matéria-prima para a indústria de fiação e tecelagem: 5.100.000 lb. de algodão brasileiro foram enviadas daqui, e mais 1.652.000 lb. através de Portugal, concorrendo para diminuir um pouco a escassez do produto, derivada da falta de abastecimento do mercado inglês pelos Estados Unidos. Iniciado, esse comércio prosseguiu: no ano seguinte, entraram na Grã-Bretanha 18.000.000 lb. de algodão brasileiro, e em 1810, 20.000.000 lb. Tornava-se importante a contribuição brasileira no mercado britânico de algodão.”

(PANTALEÃO, Olga. A presença Inglesa. In HOLANDA, Sérgio Buarque & CAMPOS, Pedro Moacyr. História Geral da Civilização Brasileira – Tomo II: O PROGRESSO DE EMANCIPAÇÃO. 5ª Ed. São Paulo: Difel, 1982, p. 89).

Considerando o período histórico tratado no texto, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Com a vinda da família real portuguesa para a sua colônia na América do Sul, em 1808, fortaleceu-se a influência britânica. Os interesses ingleses consolidaram-se com as deficiências do governo de Portugal e as primeiras dificuldades do Brasil independente, uma vez que os britânicos souberam defender suas ambições, em especial, as comerciais.',
      },
      {
        letter: 'B',
        text: 'Napoleão enfraqueceu a Grã-Bretanha com o bloqueio continental, de modo a fazer com que os ingleses derrotados e os portugueses fugissem juntos para a colônia sul-americana do último país europeu.',
      },
      {
        letter: 'C',
        text: 'D. João, tão logo chegou à colônia portuguesa na América do Sul, tratou de assegurar a abertura dos portos brasileiros às nações amigas. Medida que rompeu com o exclusivismo colonial e prejudicou os interesses britânicos.',
      },
      {
        letter: 'D',
        text: 'O tratado de comércio entre Portugal e Grä-Bretanha, de 1810, favorecia, sobremaneira, o Brasil.',
      },
      {
        letter: 'E',
        text: 'D. João soube aproveitar, do ponto de vista diplomático, a vigência do bloqueio continental para reconquistar o prestígio político e economia portuguesa na Europa.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q50', correctLetter: null },
    editorialNote: 'Grafia original “Grä-Bretanha” na alternativa D preservada.',
    provenance: makeProv2022(15),
  },
  {
    id: 'ufrr-2022-q51',
    examId: EXAM_ID_2022,
    originalNumber: 51,
    originalCode: 'UFRR 2022 · Q51',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'História Regional e da Amazônia — Fronteiras e Colonização',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“No contexto da ilha Amazônia Caribenha, os povos indígenas parecem se deslocar de forma semelhante ao passado, cujos viajantes se dirigiam do litoral para o interior e vice versa, ora navegando, ora caminhando até o próximo rio em direção ao destino desejado. No passado, os viajantes procuravam o lendário El Dorado sem sucesso. Hoje, os viajantes utilizam esses caminhos – fluvial e terrestre – entre o interior (rio Branco) e o litoral amazônico caribenho reorganizando as trocas socioculturais nas fronteiras. Por fim, a região do rio Branco representa um caminho importante de ligação entre o litoral e a bacia do rio Amazonas, como lugar de diversidade sociocultural e fronteiras transnacionais.

(OLIVEIRA, Reginaldo Gomes de. AMAZÔNIA CARIBENHA: a regionalização, os caminhos históricos e culturais. In OLIVEIRA, Reginaldo Gomes de & JUBITHANA-FERNAND, Andrea Idelga. DOS CAMINHOS HISTÓRICOS AOS PROCESSOS CULTURAIS ENTRE BRASIL E SURINAME. Boa Vista: 2014, p. 24)

Considere as assertivas abaixo e marque a CORRETA:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Os caminhos citados no texto referem-se ao fato do rio Branco ser navegável durante todo o ano e desembocar na bacia do Amazonas.',
      },
      {
        letter: 'B',
        text: 'A interiorização amazônica se consolida com a fundação do Forte do Presépio em 1646. Com essa iniciativa, o Capitão-Mor da Capitania do Maranhão, Francisco Caldeira Castello Branco alcança o rio que, no futuro levaria seu nome, sendo conhecido como rio Branco.',
      },
      {
        letter: 'C',
        text: 'Felipe IV, então detentor das coroas ibéricas em 1637, decide criar a Capitania do Cabo Norte, atual Roraima, e entrega sua donataria ao português, Bento Manuel Parente.',
      },
      {
        letter: 'D',
        text: 'Gonçalo Pizarro e Francisco de Orellana desceram do Andes para a planície amazônica com o fim de encontrar a riqueza prometida pela lenda do país das Amazonas. Nessa toada, Orellana foi o primeiro europeu a reconhecer o rio Amazonas da sua origem andina até a foz, alcançada em 1542.',
      },
      {
        letter: 'E',
        text: 'De acordo com o texto citado, Roraima liga o litoral brasileiro à bacia do rio Amazonas.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q51', correctLetter: null },
    provenance: makeProv2022(16),
  },
  {
    id: 'ufrr-2022-q52',
    examId: EXAM_ID_2022,
    originalNumber: 52,
    originalCode: 'UFRR 2022 · Q52',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Idade Média — Feudalismo e Ordem da Cavalaria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“A Ordem da Cavalaria surgiu como consequência da formação de uma classe de guerreiros privilegiados, já a partir do século VII, e se manteve forte até que a arte da guerra se modificou no final da Idade Média, por volta dos séculos XIV-XV.”

(MICELI, P. O feudalismo. 3 ed. Campinas: Atual, 1988. p. 43)

Com base na existência desta classe de guerreiros na Idade Média, é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O surgimento da Ordem da Cavalaria no século VII foi inspirado nos heróis míticos gregos e seus feitos contra o mal e a injustiça.',
      },
      {
        letter: 'B',
        text: 'O papado via a Ordem da Cavalaria com desconfiança, embora tolerasse a sua existência por temor da população em geral que aclamava os cavaleiros como heróis.',
      },
      {
        letter: 'C',
        text: 'Para se tornar um cavaleiro era necessária a indicação de um arquiduque sendo, portanto, este grupo de nobres o mais beneficiado com a Ordem da Cavalaria.',
      },
      {
        letter: 'D',
        text: 'O período de maior poderio dos cavaleiros aconteceu entre os séculos XI e XII, quando a Igreja concedeu à cavalaria um caráter quase religioso.',
      },
      {
        letter: 'E',
        text: 'Os vassalos mais pobres rechaçavam os cavaleiros da Ordem por achar que se tratavam de meros vigilantes da alta nobreza, favorecendo o espólio, a exploração tributária e a resistência a uma sociedade mais inclusiva.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q52', correctLetter: null },
    provenance: makeProv2022(16),
  },
  {
    id: 'ufrr-2022-q53',
    examId: EXAM_ID_2022,
    originalNumber: 53,
    originalCode: 'UFRR 2022 · Q53',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Antiguidade Oriental — Egito Antigo',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Uma das características do Egito que surpreendeu os gregos foi a inexistência do infanticídio e da exposição. O infanticídio era uma prática comum na Antiguidade, o qual consistia na morte ritual ou não de crianças, geralmente recém-nascidos.”

(PINSKY, J. As primeiras civilizações. 9 ed. São Paulo, Atual: 1987. p.76,77)

Esta inexistência no Egito de uma prática tão comum na Antiguidade se deu porque:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'As crianças, enquanto na primeira infância, representavam diretamente o “divino” Faraó e, portanto, não deveriam ser mortas pelos pais.',
      },
      {
        letter: 'B',
        text: 'A relativa abundância em que viviam os egípcios permitiu criar todas as crianças que nasciam e que não morriam naturalmente.',
      },
      {
        letter: 'C',
        text: 'Segundo a religião egípcia, todo recém-nascido tinha a proteção direta da deusa Hektsamo que punia com a morte quem praticasse o infanticídio.',
      },
      {
        letter: 'D',
        text: 'Os rituais de infanticídio não eram literais, mas simbólicos e representativos quando os recém-nascidos eram dedicados ao deus Anúbis por um sacerdote.',
      },
      {
        letter: 'E',
        text: 'Havia o pátio do palácio real que era um espaço refúgio onde ninguém poderia ser morto, e neste caso, as mães levavam seus filhos recém-nascidos por um dia inteiro a este compartimento.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q53', correctLetter: null },
    provenance: makeProv2022(17),
  },
  {
    id: 'ufrr-2022-q54',
    examId: EXAM_ID_2022,
    originalNumber: 54,
    originalCode: 'UFRR 2022 · Q54',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'História',
      topic: 'Idade Contemporânea — Revolução Industrial e Produção Artesanal',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `“Até o século XIX, as ferramentas utilizadas na produção artesanal se assemelhavam, em sua simplicidade, com a organização do trabalho. A unidade industrial típica era a do artesão independente, possuidor de sua oficina e de seus utensílios de trabalho. Contava com o auxílio de aprendizes sob a direção do chefe de família.”

(CANÊDO, L. A Revolução Industrial. 10 ed. São Paulo, Atual: 1987. p.16)

Com base nesta estrutura do trabalho é CORRETO afirmar que:`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'Todos os trabalhadores eram obrigados a permanecerem em seu posto até o fim da vida, sendo proibida a ascensão dentro da estrutura onde um aprendiz nunca se tornava um mestre.',
      },
      {
        letter: 'B',
        text: 'A oficina trazia uma organização dos trabalhadores de forma hierárquica composta pelo aprendiz, estendendo-se até o mestre, tendo no topo o chefe.',
      },
      {
        letter: 'C',
        text: 'A formação das associações compostas por trabalhadores que atuavam no mesmo ofício era vista como uma afronta moral sendo, portanto, considerada um crime contra a honra.',
      },
      {
        letter: 'D',
        text: 'Mesmo para ser aprendiz, era necessária a comprovação de um treinamento rudimentar prévio com a família de origem que posteriormente foi composta formalmente por escrito e firmado.',
      },
      {
        letter: 'E',
        text: 'Era proibida a comunicação direta entre o aprendiz e seu mestre, daí a existência do capataz que agia nesta interação quando necessária, mantendo a ausência de qualquer tipo de interação.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q54', correctLetter: null },
    provenance: makeProv2022(17),
  },

  // ================= QUÍMICA (Q55–Q63) =================
  {
    id: 'ufrr-2022-q55',
    examId: EXAM_ID_2022,
    originalNumber: 55,
    originalCode: 'UFRR 2022 · Q55',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Estrutura Atômica — Distribuição Eletrônica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em novembro de 2020, a Fundação Oswaldo Cruz (Fiocruz) publicou um estudo realizado em parceria com a WWF-Brasil que teve como objetivo analisar a contaminação por mercúrio em indígenas do povo Munduruku, que vivem no médio Rio Tapajós, no estado do Pará. Dentre os voluntários testados, todos apresentaram algum nível de contaminação pelo metal pesado e 60% apresentaram níveis acima do limite máximo estabelecido por agências de saúde, indicando os impactos de atividades de garimpo com o uso indiscriminado de mercúrio.

O mercúrio como contaminante pode ser encontrado na atmosfera, no solo e na água. No garimpo ele é utilizado em sua forma metálica que se mistura com o ouro formando uma amálgama, que permite separar o ouro de sedimentos do rio. Porém, na natureza, ele pode ser oxidado formando seu cátion monovalente ou divalente, sendo o divalente a forma mais estável.

Dentre as alternativas a seguir marque aquela que corresponde, respectivamente, às distribuições eletrônicas do ouro em sua forma elementar e do mercúrio em sua forma catiônica mais estável.`,
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: '$[\\text{Xe}]4f^{14}5d^{10}6s^{1}$, $[\\text{Xe}]4f^{14}5d^{10}6s^{2}$',
      },
      {
        letter: 'B',
        text: '$[\\text{Xe}]4f^{14}5d^{9}6s^{2}$, $[\\text{Xe}]4f^{14}5d^{10}$',
      },
      {
        letter: 'C',
        text: '$[\\text{Xe}]4f^{14}5d^{10}6s^{1}$, $[\\text{Xe}]4f^{14}5d^{10}6s^{1}$',
      },
      {
        letter: 'D',
        text: '$[\\text{Xe}]4f^{14}5d^{10}6s^{1}$, $[\\text{Xe}]4f^{14}5d^{10}$',
      },
      {
        letter: 'E',
        text: '$[\\text{Xe}]4f^{14}5d^{9}6s^{2}$, $[\\text{Xe}]4f^{14}5d^{10}6s^{2}$',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q55', correctLetter: null },
    provenance: makeProv2022(17),
  },
  {
    id: 'ufrr-2022-q56',
    examId: EXAM_ID_2022,
    originalNumber: 56,
    originalCode: 'UFRR 2022 · Q56',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Reações Químicas — Oxirredução e Estequiometria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Um dos principais desafios para a utilização de fontes renováveis de energia em larga escala é o desenvolvimento de baterias que sejam leves e apresentem uma alta densidade de energia. Nesse contexto, estudos envolvendo a utilização de zinco têm apresentado resultados bastante promissores. Em sua forma metálica, o zinco apresenta uma superfície branca, ligeiramente azulada e bastante brilhante. Quando $19{,}6\\text{ g}$ de limalhas de zinco metálico são adicionadas a $500\\text{ ml}$ de água, observa-se a formação de uma mistura heterogênea. Porém, quando $19{,}6\\text{ g}$ de limalhas desse mesmo metal são adicionadas em uma solução de ácido clorídrico 6M, após alguns minutos, observa-se a formação de uma mistura homogênea. Quando essa solução homogênea é submetida a aquecimento para a remoção completa de água e ácido clorídrico observa-se a formação de $40{,}9\\text{ g}$ de um resíduo branco, ligeiramente opaco. Com base nessas informações, marque a alternativa correta.',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'O Zinco metálico reage com o $\\text{HCl}$ através de uma reação de oxirredução, formando um sal com fórmula molecular $\\text{ZnCl}$ e $\\text{H}_2$.',
      },
      {
        letter: 'B',
        text: 'O Zinco metálico reage com o $\\text{HCl}$ através de uma reação de oxirredução, formando um sal com fórmula molecular $\\text{ZnCl}_2$ e $\\text{H}_2$',
      },
      {
        letter: 'C',
        text: 'O Zinco metálico reage com o $\\text{HCl}$, através de uma reação ácido-base, formando um sal com fórmula molecular $\\text{ZnCl}$ e água.',
      },
      {
        letter: 'D',
        text: 'O Zinco metálico reage com o $\\text{HCl}$, através de uma reação ácido-base, formando um sal com fórmula molecular $\\text{ZnCl}_2$ e água.',
      },
      {
        letter: 'E',
        text: 'O Zinco metálico, assim como o $\\text{HCl}$, é solúvel em água e, após o processo de evaporação, ele é recuperado de maneira intacta.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q56', correctLetter: null },
    provenance: makeProv2022(17),
  },
  {
    id: 'ufrr-2022-q57',
    examId: EXAM_ID_2022,
    originalNumber: 57,
    originalCode: 'UFRR 2022 · Q57',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Estequiometria e Densidade de Misturas Sólidas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'O ouro pode ser encontrado na natureza associado a diferentes minerais, como carbonatos, sulfetos e feldspatos. Porém, sua associação mais comum é com o quartzo, um mineral composto basicamente de dióxido de silício. Uma pepita de ouro e quartzo de $93{,}6\\text{ g}$ apresenta densidade de $7{,}8\\text{ g/cm}^3$. Considerando que a densidade do ouro é $19{,}3\\text{ g/cm}^3$ e a densidade do quartzo é $2{,}6\\text{ g/cm}^3$, o número de átomos de ouro presentes na pepita é:',
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$16 \\times 10^{23}$' },
      { letter: 'B', text: '$6 \\times 10^{23}$' },
      { letter: 'C', text: '$12 \\times 10^{23}$' },
      { letter: 'D', text: '$8 \\times 10^{23}$' },
      { letter: 'E', text: '$2 \\times 10^{23}$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q57', correctLetter: null },
    provenance: makeProv2022(18),
  },
  {
    id: 'ufrr-2022-q58',
    examId: EXAM_ID_2022,
    originalNumber: 58,
    originalCode: 'UFRR 2022 · Q58',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Cinética Química — Lei da Velocidade e Ordem de Reação',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'Dois compostos, A e B, podem reagir levando à formação do composto C. Quando dobramos a concentração de A, a velocidade da reação aumenta 4 vezes. Quando dobramos a concentração de A e B ao mesmo tempo, a velocidade da reação aumenta 8 vezes. Com base nessa informação, podemos afirmar que:',
    graphics: [],
    alternatives: [
      {
        letter: 'A',
        text: 'A velocidade da reação é de primeira ordem em relação a A e de primeira ordem em relação a B.',
      },
      {
        letter: 'B',
        text: 'A velocidade da reação é de segunda ordem em relação a A e de segunda ordem em relação a B.',
      },
      {
        letter: 'C',
        text: 'A velocidade da reação é de segunda ordem em relação a A e de primeira ordem em relação a B.',
      },
      {
        letter: 'D',
        text: 'A velocidade da reação é de segunda ordem em relação a A e de terceira ordem em relação a B.',
      },
      {
        letter: 'E',
        text: 'A velocidade da reação é de primeira ordem em relação a A e de terceira ordem em relação a B.',
      },
    ],
    answerKey: { questionId: 'ufrr-2022-q58', correctLetter: null },
    provenance: makeProv2022(18),
  },
  {
    id: 'ufrr-2022-q59',
    examId: EXAM_ID_2022,
    originalNumber: 59,
    originalCode: 'UFRR 2022 · Q59',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Eletroquímica — Pilhas e Potencial Padrão',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere as equações e os valores de potenciais padrões apresentados a seguir.

$$\\text{Fe}^{3+} + e^- \\to \\text{Fe}^{2+} \\qquad E^0 = +\\,0{,}77\\text{ V}$$
$$\\text{Zn}^{2+} + 2e^- \\to \\text{Zn} \\qquad E^0 = -\\,0{,}76\\text{ V}$$

Marque a alternativa que corresponde ao valor do potencial da célula:

$$\\text{Zn}/\\text{Zn}^{2+}\\text{ (1 M)} // \\text{Fe}^{2+}\\text{ (1 M)}, \\text{Fe}^{3+}\\text{ (1 M)}/\\text{Pt}$$`,
    graphics: [],
    alternatives: [
      { letter: 'A', text: '$+\\,0{,}01\\text{ V}$' },
      { letter: 'B', text: '$+\\,1{,}53\\text{ V}$' },
      { letter: 'C', text: '$-\\,1{,}53\\text{ V}$' },
      { letter: 'D', text: '$-\\,0{,}01\\text{ V}$' },
      { letter: 'E', text: '$+\\,2{,}29\\text{ V}$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q59', correctLetter: null },
    provenance: makeProv2022(18),
  },
  {
    id: 'ufrr-2022-q60',
    examId: EXAM_ID_2022,
    originalNumber: 60,
    originalCode: 'UFRR 2022 · Q60',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Soluções — Curva de Solubilidade e Recristalização',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: 'No processo de purificação por recristalização, uma amostra é solubilizada em um determinado solvente a quente e, conforme o resfriamento, a sustância cristaliza de forma pura. Em seguida, o composto puro é separado por filtração. No entanto, perdas devido à solubilidade são comuns. A seguir é apresentado o gráfico de solubilidade do ácido benzoico em água. No intuito de purificar esse composto, um químico adicionou $20\\text{g}$ do ácido em $500\\text{ mL}$ de água e aqueceu a mistura até $100^\\circ\\text{C}$, verificando a solubilização completa. Em seguida, a solução foi transferida para uma proveta, onde verificou-se a perda de $13\\text{ mL}$ de água por evaporação. A solução foi então resfriada lentamente até $20^\\circ\\text{C}$, onde verificou-se a cristalização do ácido puro e o mesmo foi filtrado. Com base nessas informações, calcule a quantidade máxima de ácido benzóico puro que pode ser obtido após a filtração.',
    graphics: [
      {
        id: 'ufrr-2022-g-q60',
        type: 'svg',
        svgContent: SVG_2022_Q60,
        altText:
          'Gráfico de solubilidade do ácido benzoico em água (g/L) em função da temperatura (°C): 1,7 a 0°C; 2,9 a 20°C; 3,4 a 25°C; 5,5 a 40°C; 21,4 a 75°C; 56,3 a 100°C.',
      },
    ],
    alternatives: [
      { letter: 'A', text: '$18{,}50\\text{ g}$' },
      { letter: 'B', text: '$18{,}34\\text{ g}$' },
      { letter: 'C', text: '$1{,}41\\text{ g}$' },
      { letter: 'D', text: '$1{,}50\\text{ g}$' },
      { letter: 'E', text: '$18{,}59\\text{ g}$' },
    ],
    answerKey: { questionId: 'ufrr-2022-q60', correctLetter: null },
    editorialNote:
      'Grafia original “a sustância” e alternância “ácido benzoico” / “ácido benzóico” preservadas.',
    provenance: makeProv2022(18),
  },
  {
    id: 'ufrr-2022-q61',
    examId: EXAM_ID_2022,
    originalNumber: 61,
    originalCode: 'UFRR 2022 · Q61',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Funções Orgânicas, Hibridização e Isomeria',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Em novembro de 2021 foi aprovado no Reino Unido o molnupiravir, o primeiro fármaco administrado por via oral para o tratamento da COVID-19, um verdadeiro marco no combate a essa doença. O molnupiravir corresponde a um dos isômeros da molécula cuja fórmula estrutural é apresentada a seguir.

Com base nessa informação, considere as afirmativas a seguir e marque a alternativa CORRETA:

I. O molnupiravir apresenta as funções químicas éster, éter e amina em sua estrutura.
II. O molnupiravir apresenta quatro carbonos quirais em sua estrutura.
III. O molnupiravir apresenta apenas 8 carbonos do tipo $sp^3$ e apenas 5 carbonos do tipo $sp^2$.
IV. O molnupiravir é capaz de realizar ligações de hidrogênio com a água.`,
    graphics: [
      {
        id: 'ufrr-2022-g-q61',
        type: 'svg',
        svgContent: SVG_2022_Q61,
        altText:
          'Fórmula estrutural em bastão da molécula de molnupiravir com anel ribose hidroxilado, éster isobutírico e base nitrogenada pirimidínica.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'As alternativas I, II, III e IV estão corretas.' },
      {
        letter: 'B',
        text: 'Apenas as alternativas I, III e IV estão corretas.',
      },
      {
        letter: 'C',
        text: 'Apenas as alternativas II, III e IV estão corretas.',
      },
      {
        letter: 'D',
        text: 'Apenas as alternativas I, II e III estão corretas.',
      },
      { letter: 'E', text: 'Apenas as alternativas I e IV estão corretas.' },
    ],
    answerKey: { questionId: 'ufrr-2022-q61', correctLetter: null },
    provenance: makeProv2022(19),
  },
  {
    id: 'ufrr-2022-q62',
    examId: EXAM_ID_2022,
    originalNumber: 62,
    originalCode: 'UFRR 2022 · Q62',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Isomeria e Reações Orgânicas',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `Considere a sequência reacional a seguir:

A partir dela são feitas as seguintes afirmativas:

I. A e C são tautômeros.
II. A e E são isômeros de cadeia, sendo que A tem cadeia saturada e E insaturada.
III. C e E são isômeros de posição.
IV. A reação de D para E pode ser classificada como uma reação de eliminação.

Nesse contexto, podemos afirmar que estão CORRETAS:`,
    graphics: [
      {
        id: 'ufrr-2022-g-q62',
        type: 'svg',
        svgContent: SVG_2022_Q62,
        altText:
          'Sequência reacional: A (ciclo-hexanona) em equilíbrio com C (ciclo-hexenol) mediado por B (ácido acético); C + Br2 forma D (2-bromociclo-hexanona); D + NaOH forma E (ciclo-hex-2-enona).',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'Apenas as alternativas I e III.' },
      { letter: 'B', text: 'Apenas as alternativas I e IV.' },
      { letter: 'C', text: 'Apenas as alternativas I e II.' },
      { letter: 'D', text: 'Apenas as alternativas I, II e IV.' },
      { letter: 'E', text: 'Apenas as alternativas I, III e IV.' },
    ],
    answerKey: { questionId: 'ufrr-2022-q62', correctLetter: null },
    provenance: makeProv2022(19),
  },
  {
    id: 'ufrr-2022-q63',
    examId: EXAM_ID_2022,
    originalNumber: 63,
    originalCode: 'UFRR 2022 · Q63',
    year: 2022,
    edition: 'UFRR 2022',
    modality: 'Prova Integral',
    examName: EXAM_NAME_2022,
    classification: {
      subject: 'Química',
      topic: 'Química Orgânica — Funções Orgânicas e Isomeria Óptica',
    },
    difficulty: 'Não classificada',
    sharedTextIds: [],
    stem: `O canabidiol, um dos terpenos extraídos da cannabis, tem sido amplamente estudado nos últimos anos, apresentando um enorme potencial para o combate a diferentes distúrbios como esquizofrenia, epilepsia e ansiedade. No que diz respeito a essa substância, considere as afirmativas a seguir:

I. O canabidiol apresenta isomeria ótica.
II. Tem fórmula molecular $\\text{C}_{21}\\text{H}_{30}\\text{O}_2$.
III. Apresenta em sua estrutura um anel aromático.
IV. Apresenta a função química álcool.

Nesse contexto, podemos afirmar que estão CORRETAS:`,
    graphics: [
      {
        id: 'ufrr-2022-g-q63',
        type: 'svg',
        svgContent: SVG_2022_Q63,
        altText:
          'Estrutura química em bastão do canabidiol com anel ciclo-hexeno, anel aromático com dois grupos fenólicos e cadeia lateral pentila.',
      },
    ],
    alternatives: [
      { letter: 'A', text: 'As alternativas I, II, III e IV.' },
      { letter: 'B', text: 'Apenas as alternativas I, III e IV.' },
      { letter: 'C', text: 'Apenas as alternativas I, II e III.' },
      { letter: 'D', text: 'Apenas as alternativas II, III e IV.' },
      { letter: 'E', text: 'Apenas as alternativas I e III.' },
    ],
    answerKey: { questionId: 'ufrr-2022-q63', correctLetter: null },
    provenance: makeProv2022(19),
  },
];
