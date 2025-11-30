'use client';

import type { ButtonShape, FontKind } from 'config/theme';
import { CURRENT_THEME, getTheme } from 'config/theme';
import type { CSSProperties, ReactNode } from 'react';

const fontFamilyMap: Record<FontKind, string> = {
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  serif: '"Playfair Display", "Times New Roman", serif',
  mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};

const headingWeightMap = {
  normal: '400',
  semibold: '600',
  bold: '700'
} as const;

const buttonRadiusMap: Record<ButtonShape, string> = {
  pill: '9999px',
  rounded: '0.75rem',
  square: '0.25rem'
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = getTheme(CURRENT_THEME);
  const { colors, typography, button } = theme;

  const style = {
    // Colores
    '--bg': colors.background,
    '--surface': colors.surface,
    '--text': colors.text,
    '--muted': colors.muted,
    '--primary': colors.primary,
    '--on-primary': colors.onPrimary,
    '--accent': colors.accent,
    '--border': colors.border,

    // Tipografía
    '--font-heading': fontFamilyMap[typography.heading],
    '--heading-weight': headingWeightMap[typography.headingWeight],
    '--heading-transform': typography.uppercaseHeadings ? 'uppercase' : 'none',

    // Botones
    '--btn-radius': buttonRadiusMap[button.shape],
    '--btn-text-transform': button.uppercase ? 'uppercase' : 'none',
    '--btn-style': button.style, // 'solid' | 'outline' | 'ghost' (lo usaremos en los componentes)

    // Fuente por defecto del body
    fontFamily: fontFamilyMap[typography.body]
  } as CSSProperties;

  return (
    <div
      style={style}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)]"
    >
      {children}
    </div>
  );
}
