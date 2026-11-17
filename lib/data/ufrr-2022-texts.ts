import type { EssayPrompt, SharedText } from '../types';

export const DOC_NAME_2022 = 'Caderno de Provas - E3_PI - 0A Vestibular 2022.pdf';
export const EXAM_ID_2022 = 'ufrr-integral-2022';
export const EXAM_NAME_2022 = 'Vestibular UFRR 2022 — Prova Integral';

export const makeProv2022 = (pageNumber: number, notes?: string) => ({
  institution: 'UFRR / CPV',
  documentName: DOC_NAME_2022,
  pageNumber,
  isDemoFixture: false,
  notes,
});

export const TABLE_2022_Q19 = `<table class="w-full text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <thead>
    <tr class="bg-stone-100 dark:bg-stone-800">
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold w-12"></th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold">Ocorrência de mitose</th>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-left font-semibold">Ocorrência de meiose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">A)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em n</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em 2n</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">B)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">em n e 2n</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em 2n</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">C)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">em n e 2n</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">em n e 2n</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">D)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em 2n</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em n</td>
    </tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-semibold">E)</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">somente em 2n</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">em n e 2n</td>
    </tr>
  </tbody>
</table>`;

export const TABLE_2022_Q27 = `<table class="w-full text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <tbody>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 px-3 py-2 text-left font-semibold w-32" rowspan="2">Cruzamento</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-2 text-center" rowspan="2">
        Fêmeas de corpo cinza e asas normais (BbVv)<br />
        X<br />
        Machos de corpo preto e asas vestigiais (bbvv)
      </td>
    </tr>
    <tr></tr>
    <tr>
      <th class="border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 px-3 py-2 text-left font-semibold" rowspan="4">Descendentes</th>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">(a) Corpo cinza e asas normais (41,5%)</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">(b) Corpo cinza e asas vestigiais (8,5%)</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">(c) Corpo preto e asas normais (8,5%)</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">(d) Corpo preto e asas vestigiais (41,5%)</td>
    </tr>
  </tbody>
</table>`;

export const TABLE_2022_Q32 = `<table class="w-full max-w-md text-sm border-collapse border border-stone-300 dark:border-stone-700 my-2">
  <tbody>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-medium">Aluno 01</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">índice de refração = 1,2</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-medium">Aluno 02</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">índice de refração = 0,89</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-medium">Aluno 03</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">índice de refração = 1</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-medium">Aluno 04</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">índice de refração = 0,9</td>
    </tr>
    <tr>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5 font-medium">Aluno 05</td>
      <td class="border border-stone-300 dark:border-stone-700 px-3 py-1.5">índice de refração = 1,5</td>
    </tr>
  </tbody>
</table>`;

export const SVG_2022_Q29 = `<svg viewBox="0 0 320 200" class="w-full max-w-[300px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ufrr22-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L7,4 L0,8 Z" fill="currentColor" stroke="none" />
    </marker>
  </defs>
  <line x1="78" y1="158" x2="265" y2="158" marker-end="url(#ufrr22-arrow)" />
  <line x1="92" y1="172" x2="92" y2="28" marker-end="url(#ufrr22-arrow)" />
  <line x1="92" y1="68" x2="128" y2="68" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <line x1="128" y1="68" x2="224" y2="68" stroke-width="2.4" />
  <line x1="128" y1="68" x2="128" y2="158" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <line x1="224" y1="68" x2="224" y2="158" stroke-dasharray="4 4" stroke-width="1.2" opacity="0.7" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14">
    <text x="82" y="34" text-anchor="end">P(W)</text>
    <text x="80" y="73" text-anchor="end">12</text>
    <text x="128" y="178" text-anchor="middle">3</text>
    <text x="224" y="178" text-anchor="middle">t₂</text>
    <text x="275" y="162">t(s)</text>
  </g>
</svg>`;

const makeQ35Graph = (
  yLabel: string,
  xLabel: string,
  zeroY: number,
  variant: 'A' | 'B' | 'C' | 'D' | 'E'
) => `<svg viewBox="0 0 300 200" class="w-full max-w-[270px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ufrr22-q35-${variant}" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0,0 L6,3.5 L0,7 Z" fill="currentColor" stroke="none" />
    </marker>
  </defs>
  <line x1="58" y1="168" x2="58" y2="18" marker-end="url(#ufrr22-q35-${variant})" />
  <line x1="58" y1="168" x2="275" y2="168" />
  ${[34, 48, 62, 76, 90, 104, 118, 132, 146, 160].map((y) => `<line x1="54" y1="${y}" x2="58" y2="${y}" stroke-width="1.1" />`).join('')}
  ${[82, 106, 130, 154, 178, 202, 226, 250].map((x) => `<line x1="${x}" y1="168" x2="${x}" y2="172" stroke-width="1.1" />`).join('')}
  ${
    variant === 'C'
      ? `<line x1="58" y1="158" x2="188" y2="26" stroke-width="2.2" />
         <line x1="176" y1="158" x2="255" y2="158" stroke-width="2.2" />
         <text x="122" y="88" transform="rotate(-46 122 88)" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 1</text>
         <text x="216" y="148" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 2</text>`
      : variant === 'E'
        ? `<line x1="58" y1="34" x2="82" y2="34" stroke-dasharray="3 3" stroke-width="1.3" />
           <line x1="82" y1="34" x2="154" y2="34" stroke-width="2.2" />
           <line x1="58" y1="156" x2="186" y2="156" stroke-dasharray="3 3" stroke-width="1.3" />
           <line x1="186" y1="156" x2="254" y2="156" stroke-width="2.2" />
           <text x="118" y="24" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 1</text>
           <text x="220" y="146" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 2</text>`
        : `<line x1="58" y1="34" x2="82" y2="34" stroke-dasharray="3 3" stroke-width="1.3" />
           <line x1="82" y1="34" x2="154" y2="34" stroke-width="2.2" />
           <line x1="184" y1="156" x2="254" y2="156" stroke-width="2.2" />
           <text x="118" y="24" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 1</text>
           <text x="219" y="146" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">situação 2</text>`
  }
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="12">
    <text x="48" y="${zeroY}" text-anchor="end" font-weight="700">0</text>
    <text x="34" y="96" transform="rotate(-90 34 96)" text-anchor="middle">${yLabel}</text>
    <text x="166" y="189" text-anchor="middle">${xLabel}</text>
  </g>
</svg>`;

export const SVG_2022_Q35_A = makeQ35Graph('W ( Joules )', 'distância ( cm )', 158, 'A');
export const SVG_2022_Q35_B = makeQ35Graph('W ( Joules )', 'V ( Volts )', 158, 'B');
export const SVG_2022_Q35_C = makeQ35Graph('V ( Volts )', 'distância ( cm )', 158, 'C');
export const SVG_2022_Q35_D = makeQ35Graph('V ( Volts )', 'distância ( cm )', 158, 'D');
export const SVG_2022_Q35_E = makeQ35Graph('E ( N / C )', 'distância ( cm )', 38, 'E');

export const SVG_2022_Q60 = `<svg viewBox="0 0 420 260" class="w-full max-w-[420px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.2" xmlns="http://www.w3.org/2000/svg">
  <text x="18" y="22" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" font-weight="600">Solubilidade em água (g/L)</text>
  ${[0, 10, 20, 30, 40, 50, 60].map((v) => {
    const y = 205 - (v / 60) * 162;
    return `<line x1="58" y1="${y}" x2="390" y2="${y}" stroke-dasharray="${v === 0 ? 'none' : '2 2'}" opacity="${v === 0 ? 0.9 : 0.35}" />
    <text x="50" y="${y + 4}" fill="currentColor" stroke="none" font-family="sans-serif" font-size="11" text-anchor="end">${v}</text>`;
  }).join('')}
  ${[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((t) => {
    const x = 58 + (t / 100) * 332;
    return `<line x1="${x}" y1="43" x2="${x}" y2="205" stroke-dasharray="${t === 0 ? 'none' : '2 2'}" opacity="${t === 0 ? 0.9 : 0.35}" />
    <text x="${x}" y="222" fill="currentColor" stroke="none" font-family="sans-serif" font-size="11" text-anchor="middle">${t}</text>`;
  }).join('')}
  <polyline points="58,200.4 124.4,197.2 141,195.8 190.8,190.2 307,147.2 390,53.0" stroke-width="2.4" />
  <circle cx="58" cy="200.4" r="3.2" fill="currentColor" />
  <circle cx="124.4" cy="197.2" r="3.2" fill="currentColor" />
  <circle cx="141" cy="195.8" r="3.2" fill="currentColor" />
  <circle cx="190.8" cy="190.2" r="3.2" fill="currentColor" />
  <circle cx="307" cy="147.2" r="3.2" fill="currentColor" />
  <circle cx="390" cy="53.0" r="3.2" fill="currentColor" />
  <g stroke-width="1" opacity="0.85">
    <line x1="58" y1="200.4" x2="74" y2="170" />
    <line x1="124.4" y1="197.2" x2="112" y2="162" />
    <line x1="141" y1="195.8" x2="156" y2="138" />
    <line x1="190.8" y1="190.2" x2="208" y2="162" />
    <line x1="307" y1="147.2" x2="288" y2="114" />
    <line x1="390" y1="53.0" x2="365" y2="48" />
  </g>
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="11">
    <text x="64" y="166">1,7(g/L)</text>
    <text x="108" y="156" text-anchor="middle">2,9(g/L)</text>
    <text x="158" y="133" text-anchor="middle">3,4 (g/L)</text>
    <text x="212" y="157" text-anchor="middle">5,5 (g/L)</text>
    <text x="284" y="108" text-anchor="middle">21,4 (g/l)</text>
    <text x="360" y="51" text-anchor="end">56,3 (g/L)</text>
    <text x="224" y="246" font-size="13" font-weight="600" text-anchor="middle">Temperatura (°C)</text>
  </g>
</svg>`;

export const SVG_2022_Q61 = `<svg viewBox="0 0 380 200" class="w-full max-w-[360px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Isopropyl ester chain on left -->
  <line x1="42" y1="138" x2="66" y2="138" />
  <line x1="66" y1="138" x2="78" y2="160" />
  <line x1="66" y1="138" x2="80" y2="112" />
  <line x1="77" y1="112" x2="77" y2="88" />
  <line x1="83" y1="112" x2="83" y2="88" />
  <line x1="80" y1="112" x2="98" y2="124" />
  <line x1="114" y1="124" x2="134" y2="112" />
  <line x1="134" y1="112" x2="156" y2="124" />
  <!-- Ribose furanose ring -->
  <line x1="156" y1="124" x2="178" y2="108" />
  <line x1="194" y1="108" x2="216" y2="124" />
  <line x1="216" y1="124" x2="206" y2="152" />
  <line x1="206" y1="152" x2="168" y2="152" />
  <line x1="168" y1="152" x2="156" y2="124" />
  <!-- OH substituents on ribose -->
  <line x1="168" y1="152" x2="156" y2="172" />
  <line x1="206" y1="152" x2="218" y2="172" />
  <!-- Glycosidic bond to pyrimidine ring -->
  <line x1="216" y1="124" x2="238" y2="110" />
  <!-- Pyrimidine ring: N at (246,104), C2(=O) at (276,120), N at (304,104), C4 at (304,72), C5=C6 -->
  <line x1="252" y1="96" x2="252" y2="72" />
  <line x1="252" y1="72" x2="276" y2="58" />
  <line x1="276" y1="58" x2="304" y2="72" />
  <line x1="304" y1="72" x2="304" y2="96" />
  <line x1="296" y1="108" x2="276" y2="120" />
  <line x1="276" y1="120" x2="254" y2="108" />
  <!-- Ring double bonds -->
  <line x1="258" y1="94" x2="258" y2="75" />
  <line x1="298" y1="76" x2="298" y2="94" />
  <!-- C2=O -->
  <line x1="273" y1="120" x2="273" y2="142" />
  <line x1="279" y1="120" x2="279" y2="142" />
  <!-- C4-NH-OH -->
  <line x1="304" y1="72" x2="326" y2="58" />
  <line x1="342" y1="58" x2="356" y2="66" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14">
    <text x="38" y="143" text-anchor="end">H₃C</text>
    <text x="82" y="176" text-anchor="middle">CH₃</text>
    <text x="80" y="84" text-anchor="middle">O</text>
    <text x="106" y="132" text-anchor="middle">O</text>
    <text x="186" y="108" text-anchor="middle">O</text>
    <text x="150" y="186" text-anchor="end">HO</text>
    <text x="220" y="186">OH</text>
    <text x="246" y="109" text-anchor="middle">N</text>
    <text x="304" y="109" text-anchor="middle">N</text>
    <text x="276" y="158" text-anchor="middle">O</text>
    <text x="334" y="42" text-anchor="middle">H</text>
    <text x="334" y="57" text-anchor="middle">N</text>
    <text x="358" y="76">OH</text>
  </g>
</svg>`;

export const SVG_2022_Q62 = `<svg viewBox="0 0 360 280" class="w-full max-w-[340px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ufrr22-q62-r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" stroke="none" />
    </marker>
  </defs>
  <!-- Molecule A (Cyclohexanone) -->
  <polygon points="80,68 104,82 104,110 80,124 56,110 56,82" />
  <line x1="77" y1="68" x2="77" y2="48" />
  <line x1="83" y1="68" x2="83" y2="48" />
  <text x="80" y="44" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" text-anchor="middle">O</text>
  <text x="80" y="144" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle">A</text>

  <!-- Equilibrium A <-> C with reagent B -->
  <line x1="138" y1="92" x2="210" y2="92" marker-end="url(#ufrr22-q62-r)" />
  <line x1="210" y1="98" x2="138" y2="98" marker-end="url(#ufrr22-q62-r)" />
  <line x1="158" y1="54" x2="174" y2="45" />
  <line x1="174" y1="45" x2="190" y2="54" />
  <line x1="171" y1="45" x2="171" y2="28" />
  <line x1="177" y1="45" x2="177" y2="28" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="13">
    <text x="155" y="61" text-anchor="end">H₃C</text>
    <text x="174" y="23" text-anchor="middle">O</text>
    <text x="193" y="61">OH</text>
    <text x="174" y="80" font-size="14" font-weight="700" text-anchor="middle">B</text>
  </g>

  <!-- Molecule C (Cyclohexenol) -->
  <polygon points="264,68 288,82 288,110 264,124 240,110 240,82" />
  <line x1="264" y1="74" x2="282" y2="85" />
  <line x1="264" y1="68" x2="264" y2="48" />
  <text x="264" y="44" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" text-anchor="middle">OH</text>
  <text x="264" y="144" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle">C</text>

  <!-- Arrow C -> D (Br2) -->
  <line x1="264" y1="154" x2="264" y2="188" marker-end="url(#ufrr22-q62-r)" />
  <text x="278" y="176" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14">Br₂</text>

  <!-- Molecule D (2-bromocyclohexanone) -->
  <polygon points="264,204 288,218 288,246 264,260 240,246 240,218" />
  <line x1="261" y1="204" x2="261" y2="184" />
  <line x1="267" y1="204" x2="267" y2="184" />
  <line x1="288" y1="218" x2="306" y2="208" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="14">
    <text x="264" y="180" text-anchor="middle">O</text>
    <text x="310" y="210">Br</text>
    <text x="264" y="276" font-weight="700" text-anchor="middle">D</text>
  </g>

  <!-- Arrow D -> E (NaOH) -->
  <line x1="210" y1="232" x2="138" y2="232" marker-end="url(#ufrr22-q62-r)" />
  <text x="174" y="224" fill="currentColor" stroke="none" font-family="sans-serif" font-size="13" text-anchor="middle">NaOH</text>

  <!-- Molecule E (Cyclohex-2-enone) -->
  <polygon points="80,204 104,218 104,246 80,260 56,246 56,218" />
  <line x1="99" y1="221" x2="99" y2="243" />
  <line x1="77" y1="204" x2="77" y2="184" />
  <line x1="83" y1="204" x2="83" y2="184" />
  <text x="80" y="180" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" text-anchor="middle">O</text>
  <text x="80" y="276" fill="currentColor" stroke="none" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle">E</text>
</svg>`;

export const SVG_2022_Q63 = `<svg viewBox="0 0 320 230" class="w-full max-w-[300px] h-auto text-stone-900 dark:text-stone-100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <!-- Cyclohexene ring -->
  <polygon points="88,42 118,58 118,92 88,108 58,92 58,58" />
  <line x1="64" y1="62" x2="64" y2="88" />
  <line x1="88" y1="42" x2="88" y2="24" />
  <!-- Dashed H on C3 (right-top) -->
  <line x1="120" y1="58" x2="128" y2="54" stroke-width="1.4" />
  <line x1="124" y1="63" x2="132" y2="59" stroke-width="1.4" />
  <line x1="128" y1="68" x2="136" y2="64" stroke-width="1.4" />
  <!-- Solid wedge H on C4 (bottom-left) -->
  <polygon points="58,92 44,104 49,109" fill="currentColor" stroke="none" />
  <!-- Isopropenyl group on bottom-left -->
  <line x1="88" y1="108" x2="64" y2="126" />
  <line x1="64" y1="126" x2="46" y2="126" />
  <line x1="62" y1="126" x2="72" y2="146" />
  <line x1="68" y1="124" x2="78" y2="144" />
  <!-- Link to aromatic ring -->
  <line x1="118" y1="92" x2="152" y2="108" />
  <!-- Aromatic resorcinol ring -->
  <polygon points="180,92 208,108 208,142 180,158 152,142 152,108" />
  <circle cx="180" cy="125" r="18" stroke-width="1.5" />
  <line x1="180" y1="92" x2="180" y2="72" />
  <line x1="152" y1="142" x2="134" y2="152" />
  <!-- Pentyl chain -->
  <polyline points="208,142 232,156 254,142 276,156 296,144" />
  <g fill="currentColor" stroke="none" font-family="sans-serif" font-size="13">
    <text x="88" y="19" text-anchor="middle">CH₃</text>
    <text x="140" y="64">H</text>
    <text x="36" y="114" text-anchor="end">H</text>
    <text x="42" y="131" text-anchor="end">H₃C</text>
    <text x="180" y="66" text-anchor="middle">OH</text>
    <text x="130" y="162" text-anchor="end">HO</text>
    <text x="298" y="148">CH₃</text>
    <text x="160" y="210" font-size="16" font-weight="700" text-anchor="middle">canabidiol</text>
  </g>
</svg>`;

export const UFRR_2022_SHARED_TEXTS: SharedText[] = [
  {
    id: 'ufrr-2022-pt-t1',
    examId: EXAM_ID_2022,
    referenceLabel: 'TEXTO I (Português) — Para as questões 02 e 03',
    content: `Este é o rio, a montanha é esta,
Estes os troncos, estes os rochedos;
São estes inda os mesmos arvoredos;
Esta é a mesma rústica floresta.

Tudo cheio de horror se manifesta,
Rio, montanha, troncos, e penedos;
Que de amor nos suavíssimos enredos
Foi cena alegre, e urna é já funesta.

Oh quão lembrado estou de haver subido
Aquele monte, e às vezes, que baixando
Deixei do pranto o vale umedecido!

Tudo me está a memória retratando;
Que da mesma saudade o infame ruído
Vem as mortas espécies despertando.`,
    sourceCitation:
      'COSTA, Claudio Manoel da. Núcleo de Pesquisas em Informática, Literatura e Linguística. Textos literários em meio eletrônico. Sonetos Inéditos. Edição de Referência: A Poesia dos Inconfidentes, Rio de Janeiro: Editora Nova Aguilar, 1996.',
  },
  {
    id: 'ufrr-2022-pt-t2',
    examId: EXAM_ID_2022,
    title: 'A construção histórica do racismo',
    referenceLabel: 'TEXTO II (Português) — Para a questão 08',
    content: `[...]
Passados mais de 130 anos da abolição, a população preta continua ocupando a base da pirâmide social no Brasil. O número de negros entre a parcela mais pobre do país é de 76%, segundo dados da Pesquisa Nacional por Amostra de Domicílios (PNAD) de 2014, feita pelo Instituto Brasileiro de Geografia e Estatística (IBGE). A discriminação no mercado de trabalho também é escancarada. **Enquanto** a média de rendimento mensal do profissional branco é de R$ 2.697, **já** do trabalhador preto é de mensal R$ 1.526, aponta a PNAD.`,
    sourceCitation: 'Maria Irenilda Pereira, Estado de Minas, em 11/05/2018',
  },
  {
    id: 'ufrr-2022-es-t1',
    examId: EXAM_ID_2022,
    title: '¿Qué es la inclusión social?',
    referenceLabel: 'TEXTO I (Español) — Para las cuestiones 64, 65 y 66',
    content: `La inclusión social es el proceso de mejorar la habilidad, la oportunidad y la dignidad de las personas que se encuentran en desventaja debido a su identidad, para que puedan participar en la sociedad; sin embargo, no es lo mismo que igualdad.

Analiza y explica por qué existen algunas desigualdades como la razón por la que ciertos grupos no tienen acceso a la educación, la salud y otros servicios o reciben servicios de peor calidad. Si bien muchas veces los grupos excluidos están sobrerrepresentados entre los pobres, la exclusión social es a menudo más que pobreza y, en algunos casos, no se trata en absoluto de ésta, pues tiene que ver más con aspectos no materiales de la vida de una persona.

Los costos ocasionados por la exclusión social pueden llegar a ser sustanciales tanto para los individuos como para los países. A nivel individual, las personas excluidas se enfrentan a la pérdida de salarios, ganancias de por vida, educación deficiente y malos resultados laborales aunado a los costos para la salud física y mental causados por la discriminación. A nivel nacional, el costo económico puede calcularse mediante el producto interno bruto (PIB) no percibido y la riqueza del capital humano. En América Latina, los afrodescendientes continúan experimentando niveles de pobreza hasta 2.5 veces más altos que otras comunidades. A nivel mundial, la pérdida de riqueza debido sólo a la desigualdad de género se estima en $160.2 billones de dólares. Mientras que, el 90 por ciento de los niños con discapacidad en los países en desarrollo no asiste a la escuela.

En América Latina, el Banco Mundial busca crear oportunidades para todas las personas, trabajando con grupos tradicionalmente excluidos (como los pueblos indígenas, los afrodescendientes y las comunidades rurales), para que participen plenamente en los mercados, los servicios, las tecnologías y la sociedad. Por ejemplo, en Panamá, trabaja con las comunidades indígenas y sus líderes tradicionales para mejorar la calidad de los servicios de salud, educación, agua y saneamiento.

El paso de la exclusión a la inclusión no se da de un día para otro, sino que es gradual y exige un compromiso a largo plazo. Empieza con el reconocimiento de los grupos excluidos e “invisibles”, superando las creencias y los estereotipos negativos para crear las condiciones necesarias para que haya igualdad de oportunidades y movilidad social. Aumentando del acceso a trabajos decentes, mejores servicios y medios de subsistencia más seguros ayudará a las personas habitualmente excluidas a participar plenamente en la sociedad y vivir con dignidad.`,
    sourceCitation:
      'Extraído de: https://blogs.worldbank.org/es/latinamerica/la-inclusion-social-un-compromiso-largo-plazo. Acceso en 15 de oct. de 2021.',
  },
  {
    id: 'ufrr-2022-es-t2',
    examId: EXAM_ID_2022,
    title: 'La importancia de construir urbes inclusivas',
    referenceLabel: 'TEXTO II (Español) — Para las cuestiones 67, 68 y 69',
    content: `La ciudad sueca de Jönköping ha sido la gran ganadora de la 11ª edición del Premio Ciudad Accesible 2021.

Las concepciones populares siguen siendo limitadas en lo que a discapacidad y accesibilidad se refiere puesto que a menudo, solo abarcan a las personas con discapacidades físicas; y es importante resaltar que la discapacidad adopta muchas formas, algunas menos visibles que otras.

El diseño de ciudades accesibles debería ser una de las principales consideraciones en el campo de la arquitectura y el urbanismo ya que garantiza que el entorno construido se adapte a todos. Así, la accesibilidad en la arquitectura significa mucho más que acomodar el entorno físico para los usuarios de sillas de ruedas. Y es que la introducción de dispositivos y elementos urbanos – más allá de rampas y ascensores– puede mejorar la navegación en entornos ajenos persiguiendo la creación de ciudades más inclusivas. […]

En este sentido, las urbes europeas han comenzado a desarrollar cierta sensibilidad y se han marcado algunas pautas para medir su grado de accesibilidad. Tal es así que la Comisión Europea otorga desde 2010 el *Access City Award* (Premio a las Ciudades Accesibles); un galardón que reconoce los esfuerzos inclusivos de las ciudades europeas de más de 50.000 habitantes. Este premio tiene en cuenta diferentes áreas de acción como el entorno construido y el espacio público, el transporte y sus infraestructuras, la información, comunicación y las nuevas tecnologías, así como las instalaciones públicas y servicios […].`,
    sourceCitation:
      'Adaptado de https://elpais.com/elpais/2021/04/05/seres_urbanos/1617611873_756423.html. Acceso en 15 oct. 2021.',
  },
  {
    id: 'ufrr-2022-es-t3',
    examId: EXAM_ID_2022,
    title: 'Chile: Migrapp, la joya del SJM que conecta tecnología y solidaridad, celebra dos años de funcionamiento',
    referenceLabel: 'TEXTO III (Español) — Para las cuestiones 70 y 71',
    content: `*Esperanza y empatía*

A continuación, Fernando Guzmán, Responsable de Migrapp, abordó los resultados de la labor colectiva tras esta StartUp. “Mientras en 2018 atendíamos a 5.227 personas en solo tres regiones, en 2020 ya con Migrapp funcionando la cifra creció hasta las 14.437 atenciones en 10 regiones. […]

“En cuanto al perfil de quienes han sido atendidos en estos últimos dos años, se trata de un 65% de personas venezolanas, seguidas de un 10% de colombianos y un 6,3% de peruanos. Asimismo, nos consultan un poco más de mujeres (56%) que hombres, entre 18 y 59 años y que proceden de la Región Metropolitana, más que de otras regiones. En cuanto a la situación migratoria, hemos recibido 8.248 casos de personas en situación irregular, de las que 5.740 corresponden a consultas de personas que hicieron ingresos por paso no habilitado”, agregó el responsable de Migrapp.

[…] Finalmente, la directora nacional del SJM, Waleska Ureta, señaló que “Migrapp nos permite estar con las personas refugiadas y migrantes cuando más lo necesitan. Es empatía, esperanza, la forma más cercana de acoger y orientar a quienes han llegado a Chile en medio de la crisis social y la posterior pandemia, que vivimos. Con esta herramienta, aportamos a que la vida sea más justa e igualitaria para muchas y muchos. Para nosotros es una joya y también un milagro de la tecnología”.

La aplicación está disponible en español, inglés, francés y creole, y se puede descargar gratis en Android, iOS o desde esta web, está disponible en todo Chile y algunos países de la región.`,
    sourceCitation:
      'Adaptado de: https://www.acnur.org/noticias/noticia/2021/8/6116971c4/chile-migrapp-la-joya-del-sjm-que-conecta-tecnologia-y-solidaridad-celebra.html. Acceso en 15 oct. 2021.',
  },
  {
    id: 'ufrr-2022-en-t1',
    examId: EXAM_ID_2022,
    title: 'Bolsa Família - a decade of social inclusion in Brazil',
    referenceLabel: 'TEXT I (English) — For questions 64 and 65',
    content: `**A decade debunking myths and exceeding expectations**

In 2003, the Bolsa Família Program (BFP) was taking its first steps, with a broad set of challenges still ahead. Its objectives were to contribute to the social inclusion of families constrained by extreme poverty by providing immediate relief to their situation, and to stimulate improvements to their education and health, in order to cease the intergenerational cycle of poverty reproduction. It was necessary to unify existing sectoral programs of cash transfer, consolidate the Unified Registry for Social Programs (Cadastro Único para Programas Sociais – CadÚnico), create a federal strategy for its management, monitor the conditionalities and ensure supply and access to basic services. Ten years later, the objectives were fully achieved and, in most cases, surpassed. Based on its wide coverage, excellent focus and significant impacts on the living conditions of the population, the success of the BFP is evident.`,
    sourceCitation:
      'Adaptado de: CAMPELLO, T.; NERI, M.C. (org). Bolsa Família Program – a decade of social inclusion in Brazil – Executive Summary. Brasília: IPEA, 2014. Disponível em: https://www.ipea.gov.br/portal/index.php?option=com_content&view=article&id=21864. Acesso em 20 out. 2021.',
  },
  {
    id: 'ufrr-2022-en-t2',
    examId: EXAM_ID_2022,
    referenceLabel: 'TEXT II (English) — Diagrama para a questão 66',
    content: `Diagrama multidimensional de inclusão social exibido na questão 66:

• **Markets**: Land, Housing, Labor, Credit
• **Services**: Social protection, Information, Electricity, Transport, Education, Health, Water
• **Spaces**: Political, Physical, Cultural, Social
• **Base**: Ability + Opportunity + Dignity`,
    sourceCitation:
      'Disponível em: https://www.shareweb.ch/site/DDLGN/topics/governance/socialinclusion/SitePages/Home.aspx',
  },
  {
    id: 'ufrr-2022-en-t3',
    examId: EXAM_ID_2022,
    title: 'The Hill we Climb',
    referenceLabel: 'TEXT III (English) — For questions 67 and 68',
    content: `We the successors of a country and a time
where a skinny Black girl
descended from slaves and raised by a single mother
can dream of becoming president
only to find herself reciting for one.
And yes we are far from polished.
Far from pristine.
But that doesn't mean we are
striving to form a union that is perfect.
We are striving to forge a union with purpose,
to compose a country committed to all cultures, colors, characters and
conditions of man.
And so we lift our gazes not to what stands between us,
but what stands before us.
We close the divide because we know, to put our future first,
we must first put our differences aside.
We lay down our arms
so we can reach out our arms
to one another.
We seek harm to none and harmony for all.`,
    sourceCitation:
      'GORMAN, A. The Hill we Climb. Disponível em: https://www.cnbc.com/2021/01/20/amanda-gormans-inaugural-poem-the-hill-we-climb-full-text.html. Acesso em 03 nov. 2021.',
  },
  {
    id: 'ufrr-2022-en-t4',
    examId: EXAM_ID_2022,
    title: 'Where is the love? (Black Eyed Peas)',
    referenceLabel: 'TEXT IV (English) — For questions 69 and 70',
    content: `What's wrong with the world, mama?
People living like they ain't got no mamas
I think the whole world's addicted to the drama
Only attracted to things that'll bring you trauma
Overseas, yeah, we're trying to stop terrorism
But we still got terrorists here living
In the USA, the big CIA
The Bloods and The Crips and the KKK
But if you only have a love for your own race
Then you only leave space to discriminate
And to discriminate only generates hate
And when you hate then you're bound to get irate, yeah
Madness is what you demonstrate
And that's exactly how anger works and operates
Man, you gotta have love this'll set us straight
Take control of your mind and meditate
Let your soul gravitate to the love, y'all, y'all
(…)`,
    sourceCitation: 'Adapted from https://www.letras.mus.br/black-eyed-peas/446106/',
  },
  {
    id: 'ufrr-2022-en-t5',
    examId: EXAM_ID_2022,
    title: 'Social Inclusive Development in Brazil',
    referenceLabel: 'TEXT V (English) — For question 71',
    content: `Although Brazil has a large number of poor people it is not a poor country. However, it still has to overcome social injustice and inequality. The social injustices are reflected in a medium rank in the Human Development Index (HDI), which means that difficulties are still to be overcome in education, health, income distribution and employment conditions.

Poverty reduction and fight against social inequalities are key priorities for the Social and Human Sciences Programme in Brazil. UNESCO puts in place an upstream and strategic approach rooted in social sciences information, knowledge and research in order to influence policy-making and strengthen capacity building.

Social inclusion initiatives, in close cooperation with the government, NGOs, and civil society receive close attention. UNESCO technical cooperation is present in all stages, from the planning to the implementation of projects and in innovative activities.

UNESCO in Brazil intends to focus its messages, practices, perspectives, and resource to provide tools to education, cultures, science, and communication and information in order to reduce poverty and raise human development rates of Brazilian population …`,
    sourceCitation:
      'Adaptado de: https://en.unesco.org/fieldoffice/brasilia/expertise/social-inclusive-development. Acesso em 20 out. 2021.',
  },
  {
    id: 'ufrr-2022-en-t6',
    examId: EXAM_ID_2022,
    title: '5 actions to facilitate the social inclusion of indigenous displaced people',
    referenceLabel: 'TEXT VI (English) — For question 72',
    content: `Indigenous peoples occupy only 15% of the world's territory, but protect 80% of the remaining biodiversity on the planet, according to World Bank data. As with other populations, the actions of indigenous communities are those that least affect nature, but they are among the groups that suffer most strongly the consequences of climate change.

In indigenous populations, the effects of these changes are reflected in the vulnerability of their ecosystems, [...] and in the loss of territories, as Oxfam indicates [...]. In addition to climate change, and despite their organization and resistance, indigenous populations have also historically been displaced by the colonization of other cultures.

[...] To facilitate the inclusion of displaced indigenous populations, host communities can carry out multiple actions:

- Recognize their traditional skills.
- Prioritize local and family purchases
- Respect the collective dimension of their culture.
- Sensitize to the lack of identification documents.
- Procure alternative means of communication and openness to other languages.`,
    sourceCitation:
      'Adaptado de: https://rosanjose.iom.int/SITE/en/blog/5-actions-facilitate-social-inclusion-indigenous-displaced-people. Acesso em 17 nov. 2021.',
  },
  {
    id: 'ufrr-2022-fr-t1',
    examId: EXAM_ID_2022,
    title: 'La marche des migrants du monde exploité, pour un mouvement social alternatif – extrait',
    referenceLabel: 'TEXTE I (Français) — Pour les questions 64 à 72',
    content: `Publié le 2021-10-07 | lenouvelliste.com

[...] Haïti est devenue une société de migrants sous le coup de la globalisation capitaliste à ses deux principales phases de 1870 et de 1970 au cours desquelles les pays du centre se sont convertis en récepteurs des « indésirables immigrants bienvenus ». La crise partante des processus de globalisation a donc recouru à la doctrine de sécurité nationale, au militarisme et aux méthodes de contrôle de population, ce, pour garantir de meilleurs dividendes des satellites assujettis au fascisme qui renforce l’exploitation des travailleurs au prix d’une accumulation sauvage de capitaux. L’accumulation en question se fait au moyen de concentration de capitaux et de monopoles tout en promouvant le militarisme et l’exercice de formes autoritaristes de pouvoir.

La première phase de la globalisation partie de 1870 s’est soldée par une intervention militaire des États-Unis en Haïti qui a provoqué la migration forcée de centaines de milliers de paysans vers des pôles capitalistes de la périphérie (Cuba, République dominicaine et Panama) comme main-d’œuvre quasi servile. La migration a servi de moyen de déstabilisation des paysans dans leur lutte d’émancipation et de résistance face à l’occupation.

[...]

La deuxième phase de la globalisation capitaliste néolibérale des années 1970 s’est culminée au Traité de libre commerce nord-américain (NAFTA/ALENA) , appelé Plan Bush dont la réponse fut le mouvement social de Chiapas prometteur alors pour les masses de travailleurs migrants des périphéries. Dans le cas haïtien, les stratégies autoritaires sont encore à l’horizon et les mouvements migratoires ont de plus en plus d’ampleur dans la région notamment aussi bien qu’aux autres centres d’influence capitaliste de l’Afrique et de l’Asie.

[...]

La situation migratoire d’automne 2021 n’a pas connu un traitement différencié. C’est le refoulement sans ambages et en dehors des prescrits des droits humains et sous la foulée de l’empire de gangs armés dans les quartiers populaires et quelques villes de province. Le représentant des États-Unis Daniel Foote dans la crise politique post-7 juillet 2021 a dû démissionner face au relâchement de l’administration Biden devant la situation de banditisme sévissant en Haïti à peine frappée par un sévère séisme de 7.2 de magnitude sur l’échelle de Richter. [...]

La leçon à tirer est la relation paradoxale entre migration-projet néolibéral et autoritarismes, dans ses formes les plus barbares telles sont les pratiques des escadrons de la mort en Haïti au profit du maintien du projet néolibéral d’un Etat prédateur. Entre temps la migration s’est transformée en mouvement social en lieu et place d’un processus de déstabilisation des résistances populaires. Le principe de changement, l’unité et l’identité dans le groupe et l’opposition à l’encontre de l’État prédateur sont des facteurs latents qui peuvent enclencher un élan consistant de mobilisation. L’université joue un rôle crucial dans ce processus et cette quête de bien-être de la population des jeunes. Les expériences des architectes, des médecins à pieds nus, et ceux d’autres professionnels devraient dicter des voies de libération nationale en guise de l’émancipation des jeunes travailleurs par le biais du vaste mouvement social, « la marche des migrants du monde exploité ».`,
    sourceCitation:
      'Hancy PIERRE, professeur travail social et migration, Université d’État d’Haïti et University of Findlay, Ohio, USA',
  },
];

export const ESSAY_PROMPT_2022: EssayPrompt = {
  id: 'ufrr-2022-essay',
  title: 'Prova de Redação — Vestibular UFRR 2022',
  theme:
    'Tema I: Laço social e inserção da juventude brasileira | Tema II: Medidas socioculturais contra a naturalização do racismo',
  instructions:
    'Escolha um dos temas a seguir e sobre ele redija um texto dissertativo-argumentativo, em modalidade escrita formal da língua portuguesa.',
  supportingTexts: [
    {
      label: 'TEMA I — Texto motivador',
      content: `Em uma breve trajetória histórica, o conceito de juventude não possui uma definição única, nem estática, pois em cada período, em cada momento histórico, cada geração traz marcas próprias dentro do contexto social, portanto os sujeitos são influenciados pela sociedade em que vivem e, por isso, comportam-se, pensam e agem de maneira diferenciada. É dessa forma que se pode observar como os conceitos de "adolescência e juventude" vêm se transformando ao longo do processo de constituição de nossa civilização. [...]

Nesse contexto, disserte sobre **qual o laço social e qual o contexto de inserção que a sociedade brasileira está oferecendo aos jovens e como esse mundo está sendo construído para os adolescentes.**`,
      source:
        'RAITZ, Tânia Regina. In R. Novaes & P. Vannuchi (Orgs.), Juventude e sociedade: trabalho, educação, cultura e participação (pp. 115-129). São Paulo: Fundação Perseu Abramo.',
    },
    {
      label: 'TEMA II — Texto motivador',
      content: `[...] Gilberto Freyre promove uma verdadeira revolução ideológica no Brasil moderno ao encontrar na velha, colonial e mestiça cultura luso-brasileira nordestina a alma nacional. Ethos esse que logo ganhará, em seus escritos políticos, a partir de 1937, o nome de "democracia social e étnica" [...], pode-se afirmar que a "democracia racial", rótulo político dado às ideias de Gilberto, reatualizou, na linguagem das ciências sociais emergentes, o precário equilíbrio político entre desigualdade social, autoritarismo político e liberdade formal, que marcou o Brasil.

Nesse contexto, disserte sobre **que medidas socioculturais (públicas ou privadas) poderiam contribuir para o cancelamento de naturalização do racismo em favor do tratamento isonômico para pessoas de cor de pele diferente.**`,
      source:
        'GUIMARÃES A. S. A. Preconceito de cor e racismo no Brasil. In Revista de Antropologia. USP. São Paulo. https://doi.org/10.1590/S0034-77012004000100001',
    },
  ],
  themes: [
    {
      id: 'tema-1',
      label: 'Tema I',
      theme:
        'Qual o laço social e qual o contexto de inserção que a sociedade brasileira está oferecendo aos jovens e como esse mundo está sendo construído para os adolescentes.',
      instructions:
        'Escolha um dos temas a seguir e sobre ele redija um texto dissertativo-argumentativo, em modalidade escrita formal da língua portuguesa.',
      supportingTexts: [
        {
          label: 'Texto motivador (Tema I)',
          content:
            'Em uma breve trajetória histórica, o conceito de juventude não possui uma definição única, nem estática, pois em cada período, em cada momento histórico, cada geração traz marcas próprias dentro do contexto social, portanto os sujeitos são influenciados pela sociedade em que vivem e, por isso, comportam-se, pensam e agem de maneira diferenciada. É dessa forma que se pode observar como os conceitos de "adolescência e juventude" vêm se transformando ao longo do processo de constituição de nossa civilização. [...]',
          source:
            'RAITZ, Tânia Regina. In R. Novaes & P. Vannuchi (Orgs.), Juventude e sociedade: trabalho, educação, cultura e participação (pp. 115-129). São Paulo: Fundação Perseu Abramo.',
        },
      ],
      maxLines: 25,
    },
    {
      id: 'tema-2',
      label: 'Tema II',
      theme:
        'Que medidas socioculturais (públicas ou privadas) poderiam contribuir para o cancelamento de naturalização do racismo em favor do tratamento isonômico para pessoas de cor de pele diferente.',
      instructions:
        'Escolha um dos temas a seguir e sobre ele redija um texto dissertativo-argumentativo, em modalidade escrita formal da língua portuguesa.',
      supportingTexts: [
        {
          label: 'Texto motivador (Tema II)',
          content:
            '[...] Gilberto Freyre promove uma verdadeira revolução ideológica no Brasil moderno ao encontrar na velha, colonial e mestiça cultura luso-brasileira nordestina a alma nacional. Ethos esse que logo ganhará, em seus escritos políticos, a partir de 1937, o nome de "democracia social e étnica" [...], pode-se afirmar que a "democracia racial", rótulo político dado às ideias de Gilberto, reatualizou, na linguagem das ciências sociais emergentes, o precário equilíbrio político entre desigualdade social, autoritarismo político e liberdade formal, que marcou o Brasil.',
          source:
            'GUIMARÃES A. S. A. Preconceito de cor e racismo no Brasil. In Revista de Antropologia. USP. São Paulo. https://doi.org/10.1590/S0034-77012004000100001',
        },
      ],
      maxLines: 25,
    },
  ],
  maxLines: 25,
  isDemoFixture: false,
};
