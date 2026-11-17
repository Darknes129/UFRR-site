'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

type Segment =
  | { type: 'text'; content: string }
  | { type: 'inline-math'; content: string }
  | { type: 'display-math'; content: string };

function splitMathSegments(input: string): Segment[] {
  const segments: Segment[] = [];
  // Match $$...$$ first, then $...$
  const regex = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: input.slice(lastIndex, match.index),
      });
    }
    if (match[1] !== undefined) {
      segments.push({ type: 'display-math', content: match[1].trim() });
    } else if (match[2] !== undefined) {
      segments.push({ type: 'inline-math', content: match[2].trim() });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    segments.push({ type: 'text', content: input.slice(lastIndex) });
  }
  return segments;
}

function renderLeafWithMathTokens(
  text: string,
  mathSegments: Array<{ type: 'inline-math' | 'display-math'; content: string }>
): React.ReactNode[] {
  const parts = text.split(/(\u0000M\d+\u0000)/g);
  return parts.map((part, idx) => {
    const tokenMatch = /^\u0000M(\d+)\u0000$/.exec(part);
    if (!tokenMatch) {
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    }
    const seg = mathSegments[Number(tokenMatch[1])];
    if (!seg) return null;
    const html = katex.renderToString(seg.content, {
      displayMode: seg.type === 'display-math',
      throwOnError: false,
      strict: false,
    });
    if (seg.type === 'display-math') {
      return (
        <span
          key={idx}
          className="my-2 block overflow-x-auto text-center"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return (
      <span
        key={idx}
        className="inline-block align-baseline"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

function renderSimpleInlineFormatting(
  text: string,
  mathSegments: Array<{ type: 'inline-math' | 'display-math'; content: string }>,
  depth = 0
): React.ReactNode[] {
  // Supports **bold**, __underline__, and *italic* (including around math tokens)
  if (depth > 3) return renderLeafWithMathTokens(text, mathSegments);
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={idx} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {renderSimpleInlineFormatting(part.slice(2, -2), mathSegments, depth + 1)}
        </strong>
      );
    }
    if (part.startsWith('__') && part.endsWith('__') && part.length > 4) {
      return (
        <u
          key={idx}
          className="underline underline-offset-4 decoration-neutral-700 dark:decoration-neutral-300"
        >
          {renderSimpleInlineFormatting(part.slice(2, -2), mathSegments, depth + 1)}
        </u>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={idx} className="italic">
          {renderSimpleInlineFormatting(part.slice(1, -1), mathSegments, depth + 1)}
        </em>
      );
    }
    return (
      <React.Fragment key={idx}>
        {renderLeafWithMathTokens(part, mathSegments)}
      </React.Fragment>
    );
  });
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const paragraphs = useMemo(() => text.split(/\n\n+/), [text]);

  return (
    <div className={`space-y-3 leading-relaxed ${className}`}>
      {paragraphs.map((para, pIdx) => {
        const segments = splitMathSegments(para);
        const isPureDisplayMath =
          segments.length === 1 && segments[0].type === 'display-math';

        if (isPureDisplayMath) {
          const html = katex.renderToString(segments[0].content, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return (
            <div
              key={pIdx}
              className="my-2 overflow-x-auto py-1 text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        const mathSegments: Array<{
          type: 'inline-math' | 'display-math';
          content: string;
        }> = [];
        const tokenizedText = segments
          .map((seg) => {
            if (seg.type === 'text') return seg.content;
            const tokenIdx = mathSegments.length;
            mathSegments.push({ type: seg.type, content: seg.content });
            return `\u0000M${tokenIdx}\u0000`;
          })
          .join('');

        return (
          <p key={pIdx} className="whitespace-pre-line">
            {renderSimpleInlineFormatting(tokenizedText, mathSegments)}
          </p>
        );
      })}
    </div>
  );
};
