'use client';

import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';

interface ElementInfo {
  z: number;
  symbol: string;
  name: string;
  mass: string;
  group: number; // 1..18
  row: number; // 1..7 for main grid, 8 for Lanthanides, 9 for Actinides
  category:
    | 'nonmetal'
    | 'noble'
    | 'alkali'
    | 'alkaline'
    | 'metalloid'
    | 'halogen'
    | 'transition'
    | 'post-transition'
    | 'lanthanide'
    | 'actinide';
}

const ELEMENTS: ElementInfo[] = [
  { z: 1, symbol: 'H', name: 'hidrogênio', mass: '1,008', group: 1, row: 1, category: 'nonmetal' },
  { z: 2, symbol: 'He', name: 'hélio', mass: '4,0026', group: 18, row: 1, category: 'noble' },

  { z: 3, symbol: 'Li', name: 'lítio', mass: '6,94', group: 1, row: 2, category: 'alkali' },
  { z: 4, symbol: 'Be', name: 'berílio', mass: '9,0122', group: 2, row: 2, category: 'alkaline' },
  { z: 5, symbol: 'B', name: 'boro', mass: '10,81', group: 13, row: 2, category: 'metalloid' },
  { z: 6, symbol: 'C', name: 'carbono', mass: '12,011', group: 14, row: 2, category: 'nonmetal' },
  { z: 7, symbol: 'N', name: 'nitrogênio', mass: '14,007', group: 15, row: 2, category: 'nonmetal' },
  { z: 8, symbol: 'O', name: 'oxigênio', mass: '15,999', group: 16, row: 2, category: 'nonmetal' },
  { z: 9, symbol: 'F', name: 'flúor', mass: '18,998', group: 17, row: 2, category: 'halogen' },
  { z: 10, symbol: 'Ne', name: 'neônio', mass: '20,180', group: 18, row: 2, category: 'noble' },

  { z: 11, symbol: 'Na', name: 'sódio', mass: '22,990', group: 1, row: 3, category: 'alkali' },
  { z: 12, symbol: 'Mg', name: 'magnésio', mass: '24,305', group: 2, row: 3, category: 'alkaline' },
  { z: 13, symbol: 'Al', name: 'alumínio', mass: '26,982', group: 13, row: 3, category: 'post-transition' },
  { z: 14, symbol: 'Si', name: 'silício', mass: '28,085', group: 14, row: 3, category: 'metalloid' },
  { z: 15, symbol: 'P', name: 'fósforo', mass: '30,974', group: 15, row: 3, category: 'nonmetal' },
  { z: 16, symbol: 'S', name: 'enxofre', mass: '32,06', group: 16, row: 3, category: 'nonmetal' },
  { z: 17, symbol: 'Cl', name: 'cloro', mass: '35,45', group: 17, row: 3, category: 'halogen' },
  { z: 18, symbol: 'Ar', name: 'argônio', mass: '39,948', group: 18, row: 3, category: 'noble' },

  { z: 19, symbol: 'K', name: 'potássio', mass: '39,098', group: 1, row: 4, category: 'alkali' },
  { z: 20, symbol: 'Ca', name: 'cálcio', mass: '40,078(4)', group: 2, row: 4, category: 'alkaline' },
  { z: 21, symbol: 'Sc', name: 'escândio', mass: '44,956', group: 3, row: 4, category: 'transition' },
  { z: 22, symbol: 'Ti', name: 'titânio', mass: '47,867', group: 4, row: 4, category: 'transition' },
  { z: 23, symbol: 'V', name: 'vanádio', mass: '50,942', group: 5, row: 4, category: 'transition' },
  { z: 24, symbol: 'Cr', name: 'crômio', mass: '51,996', group: 6, row: 4, category: 'transition' },
  { z: 25, symbol: 'Mn', name: 'manganês', mass: '54,938', group: 7, row: 4, category: 'transition' },
  { z: 26, symbol: 'Fe', name: 'ferro', mass: '55,845(2)', group: 8, row: 4, category: 'transition' },
  { z: 27, symbol: 'Co', name: 'cobalto', mass: '58,933', group: 9, row: 4, category: 'transition' },
  { z: 28, symbol: 'Ni', name: 'níquel', mass: '58,693', group: 10, row: 4, category: 'transition' },
  { z: 29, symbol: 'Cu', name: 'cobre', mass: '63,546(3)', group: 11, row: 4, category: 'transition' },
  { z: 30, symbol: 'Zn', name: 'zinco', mass: '65,38(2)', group: 12, row: 4, category: 'transition' },
  { z: 31, symbol: 'Ga', name: 'gálio', mass: '69,723', group: 13, row: 4, category: 'post-transition' },
  { z: 32, symbol: 'Ge', name: 'germânio', mass: '72,630(8)', group: 14, row: 4, category: 'metalloid' },
  { z: 33, symbol: 'As', name: 'arsênio', mass: '74,922', group: 15, row: 4, category: 'metalloid' },
  { z: 34, symbol: 'Se', name: 'selênio', mass: '78,971(8)', group: 16, row: 4, category: 'nonmetal' },
  { z: 35, symbol: 'Br', name: 'bromo', mass: '79,904', group: 17, row: 4, category: 'halogen' },
  { z: 36, symbol: 'Kr', name: 'criptônio', mass: '83,798(2)', group: 18, row: 4, category: 'noble' },

  { z: 37, symbol: 'Rb', name: 'rubídio', mass: '85,468', group: 1, row: 5, category: 'alkali' },
  { z: 38, symbol: 'Sr', name: 'estrôncio', mass: '87,62', group: 2, row: 5, category: 'alkaline' },
  { z: 39, symbol: 'Y', name: 'ítrio', mass: '88,906', group: 3, row: 5, category: 'transition' },
  { z: 40, symbol: 'Zr', name: 'zircônio', mass: '91,224(2)', group: 4, row: 5, category: 'transition' },
  { z: 41, symbol: 'Nb', name: 'nióbio', mass: '92,906', group: 5, row: 5, category: 'transition' },
  { z: 42, symbol: 'Mo', name: 'molibdênio', mass: '95,95', group: 6, row: 5, category: 'transition' },
  { z: 43, symbol: 'Tc', name: 'tecnécio', mass: '[98]', group: 7, row: 5, category: 'transition' },
  { z: 44, symbol: 'Ru', name: 'rutênio', mass: '101,07(2)', group: 8, row: 5, category: 'transition' },
  { z: 45, symbol: 'Rh', name: 'ródio', mass: '102,91', group: 9, row: 5, category: 'transition' },
  { z: 46, symbol: 'Pd', name: 'paládio', mass: '106,42', group: 10, row: 5, category: 'transition' },
  { z: 47, symbol: 'Ag', name: 'prata', mass: '107,87', group: 11, row: 5, category: 'transition' },
  { z: 48, symbol: 'Cd', name: 'cádmio', mass: '112,41', group: 12, row: 5, category: 'transition' },
  { z: 49, symbol: 'In', name: 'índio', mass: '114,82', group: 13, row: 5, category: 'post-transition' },
  { z: 50, symbol: 'Sn', name: 'estanho', mass: '118,71', group: 14, row: 5, category: 'post-transition' },
  { z: 51, symbol: 'Sb', name: 'antimônio', mass: '121,76', group: 15, row: 5, category: 'metalloid' },
  { z: 52, symbol: 'Te', name: 'telúrio', mass: '127,60(3)', group: 16, row: 5, category: 'metalloid' },
  { z: 53, symbol: 'I', name: 'iodo', mass: '126,90', group: 17, row: 5, category: 'halogen' },
  { z: 54, symbol: 'Xe', name: 'xenônio', mass: '131,29', group: 18, row: 5, category: 'noble' },

  { z: 55, symbol: 'Cs', name: 'césio', mass: '132,91', group: 1, row: 6, category: 'alkali' },
  { z: 56, symbol: 'Ba', name: 'bário', mass: '137,33', group: 2, row: 6, category: 'alkaline' },
  { z: 72, symbol: 'Hf', name: 'háfnio', mass: '178,49(2)', group: 4, row: 6, category: 'transition' },
  { z: 73, symbol: 'Ta', name: 'tântalo', mass: '180,95', group: 5, row: 6, category: 'transition' },
  { z: 74, symbol: 'W', name: 'tungstênio', mass: '183,84', group: 6, row: 6, category: 'transition' },
  { z: 75, symbol: 'Re', name: 'rênio', mass: '186,21', group: 7, row: 6, category: 'transition' },
  { z: 76, symbol: 'Os', name: 'ósmio', mass: '190,23(3)', group: 8, row: 6, category: 'transition' },
  { z: 77, symbol: 'Ir', name: 'irídio', mass: '192,22', group: 9, row: 6, category: 'transition' },
  { z: 78, symbol: 'Pt', name: 'platina', mass: '195,08', group: 10, row: 6, category: 'transition' },
  { z: 79, symbol: 'Au', name: 'ouro', mass: '196,97', group: 11, row: 6, category: 'transition' },
  { z: 80, symbol: 'Hg', name: 'mercúrio', mass: '200,59', group: 12, row: 6, category: 'transition' },
  { z: 81, symbol: 'Tl', name: 'tálio', mass: '204,38', group: 13, row: 6, category: 'post-transition' },
  { z: 82, symbol: 'Pb', name: 'chumbo', mass: '207,2', group: 14, row: 6, category: 'post-transition' },
  { z: 83, symbol: 'Bi', name: 'bismuto', mass: '208,98', group: 15, row: 6, category: 'post-transition' },
  { z: 84, symbol: 'Po', name: 'polônio', mass: '[209]', group: 16, row: 6, category: 'metalloid' },
  { z: 85, symbol: 'At', name: 'astato', mass: '[210]', group: 17, row: 6, category: 'halogen' },
  { z: 86, symbol: 'Rn', name: 'radônio', mass: '[222]', group: 18, row: 6, category: 'noble' },

  { z: 87, symbol: 'Fr', name: 'frâncio', mass: '[223]', group: 1, row: 7, category: 'alkali' },
  { z: 88, symbol: 'Ra', name: 'rádio', mass: '[226]', group: 2, row: 7, category: 'alkaline' },
  { z: 104, symbol: 'Rf', name: 'rutherfórdio', mass: '[267]', group: 4, row: 7, category: 'transition' },
  { z: 105, symbol: 'Db', name: 'dúbnio', mass: '[268]', group: 5, row: 7, category: 'transition' },
  { z: 106, symbol: 'Sg', name: 'seabórgio', mass: '[269]', group: 6, row: 7, category: 'transition' },
  { z: 107, symbol: 'Bh', name: 'bóhrio', mass: '[270]', group: 7, row: 7, category: 'transition' },
  { z: 108, symbol: 'Hs', name: 'hássio', mass: '[269]', group: 8, row: 7, category: 'transition' },
  { z: 109, symbol: 'Mt', name: 'meitnério', mass: '[278]', group: 9, row: 7, category: 'transition' },
  { z: 110, symbol: 'Ds', name: 'darmstádtio', mass: '[281]', group: 10, row: 7, category: 'transition' },
  { z: 111, symbol: 'Rg', name: 'roentgênio', mass: '[281]', group: 11, row: 7, category: 'transition' },
  { z: 112, symbol: 'Cn', name: 'copernício', mass: '[285]', group: 12, row: 7, category: 'transition' },
  { z: 113, symbol: 'Nh', name: 'nihônio', mass: '[286]', group: 13, row: 7, category: 'post-transition' },
  { z: 114, symbol: 'Fl', name: 'fleróvio', mass: '[289]', group: 14, row: 7, category: 'post-transition' },
  { z: 115, symbol: 'Mc', name: 'moscóvio', mass: '[288]', group: 15, row: 7, category: 'post-transition' },
  { z: 116, symbol: 'Lv', name: 'livermório', mass: '[293]', group: 16, row: 7, category: 'post-transition' },
  { z: 117, symbol: 'Ts', name: 'tenessino', mass: '[294]', group: 17, row: 7, category: 'halogen' },
  { z: 118, symbol: 'Og', name: 'oganessônio', mass: '[294]', group: 18, row: 7, category: 'noble' },

  // Lanthanides (57-71)
  { z: 57, symbol: 'La', name: 'lantânio', mass: '138,91', group: 4, row: 8, category: 'lanthanide' },
  { z: 58, symbol: 'Ce', name: 'cério', mass: '140,12', group: 5, row: 8, category: 'lanthanide' },
  { z: 59, symbol: 'Pr', name: 'praseodímio', mass: '140,91', group: 6, row: 8, category: 'lanthanide' },
  { z: 60, symbol: 'Nd', name: 'neodímio', mass: '144,24', group: 7, row: 8, category: 'lanthanide' },
  { z: 61, symbol: 'Pm', name: 'promécio', mass: '[145]', group: 8, row: 8, category: 'lanthanide' },
  { z: 62, symbol: 'Sm', name: 'samário', mass: '150,36(2)', group: 9, row: 8, category: 'lanthanide' },
  { z: 63, symbol: 'Eu', name: 'európio', mass: '151,96', group: 10, row: 8, category: 'lanthanide' },
  { z: 64, symbol: 'Gd', name: 'gadolínio', mass: '157,25(3)', group: 11, row: 8, category: 'lanthanide' },
  { z: 65, symbol: 'Tb', name: 'térbio', mass: '158,93', group: 12, row: 8, category: 'lanthanide' },
  { z: 66, symbol: 'Dy', name: 'disprósio', mass: '162,50', group: 13, row: 8, category: 'lanthanide' },
  { z: 67, symbol: 'Ho', name: 'hólmio', mass: '164,93', group: 14, row: 8, category: 'lanthanide' },
  { z: 68, symbol: 'Er', name: 'érbio', mass: '167,26', group: 15, row: 8, category: 'lanthanide' },
  { z: 69, symbol: 'Tm', name: 'túlio', mass: '168,93', group: 16, row: 8, category: 'lanthanide' },
  { z: 70, symbol: 'Yb', name: 'itérbio', mass: '173,05', group: 17, row: 8, category: 'lanthanide' },
  { z: 71, symbol: 'Lu', name: 'lutécio', mass: '174,97', group: 18, row: 8, category: 'lanthanide' },

  // Actinides (89-103)
  { z: 89, symbol: 'Ac', name: 'actínio', mass: '[227]', group: 4, row: 9, category: 'actinide' },
  { z: 90, symbol: 'Th', name: 'tório', mass: '232,04', group: 5, row: 9, category: 'actinide' },
  { z: 91, symbol: 'Pa', name: 'protactínio', mass: '231,04', group: 6, row: 9, category: 'actinide' },
  { z: 92, symbol: 'U', name: 'urânio', mass: '238,03', group: 7, row: 9, category: 'actinide' },
  { z: 93, symbol: 'Np', name: 'netúnio', mass: '[237]', group: 8, row: 9, category: 'actinide' },
  { z: 94, symbol: 'Pu', name: 'plutônio', mass: '[244]', group: 9, row: 9, category: 'actinide' },
  { z: 95, symbol: 'Am', name: 'amerício', mass: '[243]', group: 10, row: 9, category: 'actinide' },
  { z: 96, symbol: 'Cm', name: 'cúrio', mass: '[247]', group: 11, row: 9, category: 'actinide' },
  { z: 97, symbol: 'Bk', name: 'berquélio', mass: '[247]', group: 12, row: 9, category: 'actinide' },
  { z: 98, symbol: 'Cf', name: 'califórnio', mass: '[251]', group: 13, row: 9, category: 'actinide' },
  { z: 99, symbol: 'Es', name: 'einstênio', mass: '[252]', group: 14, row: 9, category: 'actinide' },
  { z: 100, symbol: 'Fm', name: 'férmio', mass: '[257]', group: 15, row: 9, category: 'actinide' },
  { z: 101, symbol: 'Md', name: 'mendelévio', mass: '[258]', group: 16, row: 9, category: 'actinide' },
  { z: 102, symbol: 'No', name: 'nobélio', mass: '[259]', group: 17, row: 9, category: 'actinide' },
  { z: 103, symbol: 'Lr', name: 'laurêncio', mass: '[262]', group: 18, row: 9, category: 'actinide' },
];

const CATEGORY_STYLE: Record<ElementInfo['category'], string> = {
  nonmetal: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800/70',
  noble: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-800/70',
  alkali: 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800/70',
  alkaline: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800/70',
  metalloid: 'bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-800/70',
  halogen: 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800/70',
  transition: 'bg-orange-50/70 dark:bg-orange-950/40 border-orange-200/80 dark:border-orange-800/60',
  'post-transition': 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60',
  lanthanide: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60',
  actinide: 'bg-fuchsia-50 dark:bg-fuchsia-950/40 border-fuchsia-200 dark:border-fuchsia-800/60',
};

interface PeriodicTableModalProps {
  open: boolean;
  onClose: () => void;
}

export const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({
  open,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<ElementInfo>(
    ELEMENTS.find((e) => e.z === 6) ?? ELEMENTS[0]
  );

  const normalizedQuery = query.trim().toLowerCase();
  const matchedSet = useMemo(() => {
    if (!normalizedQuery) return null;
    const set = new Set<number>();
    for (const el of ELEMENTS) {
      if (
        el.symbol.toLowerCase().includes(normalizedQuery) ||
        el.name.toLowerCase().includes(normalizedQuery) ||
        String(el.z) === normalizedQuery
      ) {
        set.add(el.z);
      }
    }
    return set;
  }, [normalizedQuery]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tabela Periódica dos Elementos (Referência UFRR)"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-3 sm:p-5"
    >
      <div className="w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#151B23] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-base font-semibold text-neutral-900 dark:text-neutral-50">
              Tabela Periódica dos Elementos — Folha Oficial UFRR
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Massas atômicas e números atômicos conforme contracapa do caderno de prova UFRR.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar símbolo, nome ou Z..."
                aria-label="Buscar elemento na tabela periódica"
                className="min-h-[38px] pl-8 pr-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#10151C] text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar tabela periódica"
              className="min-h-[38px] min-w-[38px] rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selected Element Inspector */}
        <div className="px-5 py-2.5 bg-neutral-50/80 dark:bg-[#10151C] border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm px-2.5 py-1 rounded-lg bg-blue-600 text-white">
              {selected.z} · {selected.symbol}
            </span>
            <span className="font-semibold capitalize text-neutral-900 dark:text-neutral-100 text-sm">
              {selected.name}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono tabular-nums text-neutral-600 dark:text-neutral-300">
            <span>Número atômico (Z): {selected.z}</span>
            <span>Massa atômica: {selected.mass}</span>
            <span>Grupo: {selected.row >= 8 ? '3 (série f)' : selected.group}</span>
          </div>
        </div>

        {/* Periodic Grid */}
        <div className="p-4 overflow-auto">
          <div
            className="grid gap-1 min-w-[940px]"
            style={{ gridTemplateColumns: 'repeat(18, minmax(46px, 1fr))' }}
          >
            {Array.from({ length: 18 }, (_, i) => (
              <div
                key={`g-${i + 1}`}
                className="text-center font-mono text-[10px] font-semibold text-neutral-400 pb-1"
              >
                {i + 1}
              </div>
            ))}

            {ELEMENTS.map((el) => {
              const isSelected = selected.z === el.z;
              const isDimmed = matchedSet !== null && !matchedSet.has(el.z);
              return (
                <button
                  key={el.z}
                  type="button"
                  onClick={() => setSelected(el)}
                  style={{
                    gridColumn: el.group,
                    gridRow: el.row + 1,
                  }}
                  className={`p-1 rounded-md border text-left transition-all flex flex-col justify-between min-h-[54px] ${
                    CATEGORY_STYLE[el.category]
                  } ${
                    isSelected
                      ? 'ring-2 ring-blue-600 dark:ring-blue-400 scale-[1.03] z-10'
                      : ''
                  } ${isDimmed ? 'opacity-25' : 'opacity-100'}`}
                >
                  <span className="font-mono text-[9px] leading-none text-neutral-600 dark:text-neutral-300 tabular-nums">
                    {el.z}
                  </span>
                  <span className="font-display font-bold text-xs leading-tight text-neutral-900 dark:text-neutral-50 text-center">
                    {el.symbol}
                  </span>
                  <span className="text-[8px] leading-none text-neutral-600 dark:text-neutral-400 truncate text-center">
                    {el.mass.replace(/\(\d+\)/, '')}
                  </span>
                </button>
              );
            })}

            {/* Placeholders for 57-71 and 89-103 */}
            <div
              style={{ gridColumn: 3, gridRow: 7 }}
              className="rounded-md border border-dashed border-purple-300 dark:border-purple-800 flex items-center justify-center font-mono text-[9px] text-purple-700 dark:text-purple-300"
            >
              57–71
            </div>
            <div
              style={{ gridColumn: 3, gridRow: 8 }}
              className="rounded-md border border-dashed border-fuchsia-300 dark:border-fuchsia-800 flex items-center justify-center font-mono text-[9px] text-fuchsia-700 dark:text-fuchsia-300"
            >
              89–103
            </div>
            <div
              style={{ gridColumn: '1 / span 3', gridRow: 9 }}
              className="flex items-center justify-end pr-2 text-[10px] font-medium text-neutral-500"
            >
              Lantanídeos →
            </div>
            <div
              style={{ gridColumn: '1 / span 3', gridRow: 10 }}
              className="flex items-center justify-end pr-2 text-[10px] font-medium text-neutral-500"
            >
              Actinídeos →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
