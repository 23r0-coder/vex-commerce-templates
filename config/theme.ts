// config/themes.ts
export type ThemeId =
  | 'vexDark'
  | 'midnightNeon'
  | 'softPastel'
  | 'cleanLight'
  | 'earthyCraft'
  | 'oceanBreeze'
  | 'sunsetGlow'
  | 'forestFresh'
  | 'monoDark'
  | 'candyPop';

export type FontKind = 'sans' | 'serif' | 'mono';

export type ButtonShape = 'pill' | 'rounded' | 'square';
export type ButtonStyle = 'solid' | 'outline' | 'ghost';

export type Theme = {
  id: ThemeId;
  name: string;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    onPrimary: string;
    accent: string;
    border: string;
  };
  typography: {
    body: FontKind;
    heading: FontKind;
    headingWeight: 'normal' | 'semibold' | 'bold';
    uppercaseHeadings: boolean;
  };
  button: {
    shape: ButtonShape;
    style: ButtonStyle;
    uppercase: boolean;
  };
};

export const THEMES: Record<ThemeId, Theme> = {
  // 1) VEX Dark – tech / dev, oscuro con cian
  vexDark: {
    id: 'vexDark',
    name: 'VEX Dark',
    colors: {
      background: '#020617', // casi negro azulado
      surface: '#020617',
      text: '#E5E7EB',
      muted: '#9CA3AF',
      primary: '#00F0FF',    // cyan neón
      onPrimary: '#020617',
      accent: '#22C55E',     // verde detalle
      border: '#1F2933'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'bold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'pill',
      style: 'solid',
      uppercase: false
    }
  },

  // 2) Midnight Neon – morado/azul bien distinto, vibe gaming
  midnightNeon: {
    id: 'midnightNeon',
    name: 'Midnight Neon',
    colors: {
      background: '#05001A', // morado muy oscuro
      surface: '#0B022B',
      text: '#F4F4FF',
      muted: '#A5B4FC',
      primary: '#7C3AED',    // morado
      onPrimary: '#F9FAFB',
      accent: '#F97316',     // naranja
      border: '#312E81'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'bold',
      uppercaseHeadings: true
    },
    button: {
      shape: 'pill',
      style: 'solid',
      uppercase: true
    }
  },

  // 3) Soft Pastel – súper claro, rosita/lila (bebés, cute)
  softPastel: {
    id: 'softPastel',
    name: 'Soft Pastel',
    colors: {
      background: '#FFF7FB', // rosita muy claro
      surface: '#FFEAF4',
      text: '#463C4E',
      muted: '#7C7284',
      primary: '#FB7185',    // rosa suave
      onPrimary: '#FFFFFF',
      accent: '#A78BFA',     // lila
      border: '#FBCFE8'
    },
    typography: {
      body: 'sans',
      heading: 'serif',
      headingWeight: 'semibold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'rounded',
      style: 'solid',
      uppercase: false
    }
  },

  // 4) Clean Light – blanco corporativo / minimal
  cleanLight: {
    id: 'cleanLight',
    name: 'Clean Light',
    colors: {
      background: '#FFFFFF',
      surface: '#F3F4F6',
      text: '#111827',
      muted: '#6B7280',
      primary: '#111827',    // casi negro
      onPrimary: '#F9FAFB',
      accent: '#2563EB',     // azul corporativo
      border: '#E5E7EB'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'semibold',
      uppercaseHeadings: true
    },
    button: {
      shape: 'square',
      style: 'solid',
      uppercase: true
    }
  },

  // 5) Earthy Craft – marrones / dorado, muy artesanal
  earthyCraft: {
    id: 'earthyCraft',
    name: 'Earthy Craft',
    colors: {
      background: '#1B130C', // café muy oscuro
      surface: '#24140A',
      text: '#F5F5DC',       // beige claro
      muted: '#D6C3A5',
      primary: '#D97757',    // terracota
      onPrimary: '#1B130C',
      accent: '#FACC15',     // dorado
      border: '#4A2C16'
    },
    typography: {
      body: 'serif',
      heading: 'serif',
      headingWeight: 'bold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'rounded',
      style: 'solid',
      uppercase: false
    }
  },

  // 6) Ocean Breeze – azul/teal fresco, muy distinto
  oceanBreeze: {
    id: 'oceanBreeze',
    name: 'Ocean Breeze',
    colors: {
      background: '#001F3F', // azul marino profundo
      surface: '#012A4A',
      text: '#E0F2FE',
      muted: '#A5F3FC',
      primary: '#06B6D4',    // cyan
      onPrimary: '#022C3A',
      accent: '#38BDF8',     // azul claro
      border: '#0F3C61'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'semibold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'pill',
      style: 'solid',
      uppercase: false
    }
  },

  // 7) Sunset Glow – cálido, durazno y naranja
  sunsetGlow: {
    id: 'sunsetGlow',
    name: 'Sunset Glow',
    colors: {
      background: '#FFF4E6', // durazno claro
      surface: '#FFE0B2',
      text: '#3F2A1C',
      muted: '#8C6651',
      primary: '#F97316',    // naranja atardecer
      onPrimary: '#FFFFFF',
      accent: '#FB7185',     // rosa
      border: '#FED7AA'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'bold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'pill',
      style: 'solid',
      uppercase: false
    }
  },

  // 8) Forest Fresh – verdes, natural / eco
  forestFresh: {
    id: 'forestFresh',
    name: 'Forest Fresh',
    colors: {
      background: '#062E1A', // verde oscuro
      surface: '#064E3B',
      text: '#ECFDF5',
      muted: '#A7F3D0',
      primary: '#22C55E',    // verde vibrante
      onPrimary: '#022C22',
      accent: '#BBF7D0',     // verde menta claro
      border: '#047857'
    },
    typography: {
      body: 'sans',
      heading: 'serif',
      headingWeight: 'semibold',
      uppercaseHeadings: false
    },
    button: {
      shape: 'rounded',
      style: 'solid',
      uppercase: false
    }
  },

  // 9) Mono Dark – puro gris/negro, súper sobrio
  monoDark: {
    id: 'monoDark',
    name: 'Mono Dark',
    colors: {
      background: '#050505',
      surface: '#101010',
      text: '#F3F4F6',
      muted: '#9CA3AF',
      primary: '#F3F4F6',    // botón claro
      onPrimary: '#050505',
      accent: '#9CA3AF',     // detalle gris
      border: '#1F2933'
    },
    typography: {
      body: 'mono',
      heading: 'mono',
      headingWeight: 'normal',
      uppercaseHeadings: true
    },
    button: {
      shape: 'square',
      style: 'outline',
      uppercase: true
    }
  },

  // 10) Candy Pop – muy colorido, juguetón
  candyPop: {
    id: 'candyPop',
    name: 'Candy Pop',
    colors: {
      background: '#FFF5F7', // rosita muy claro
      surface: '#FFE4F3',
      text: '#3F3D56',
      muted: '#6B7280',
      primary: '#F472B6',    // rosa chicle
      onPrimary: '#FFFFFF',
      accent: '#22C55E',     // verde menta
      border: '#F9A8D4'
    },
    typography: {
      body: 'sans',
      heading: 'sans',
      headingWeight: 'bold',
      uppercaseHeadings: true
    },
    button: {
      shape: 'pill',
      style: 'solid',
      uppercase: true
    }
  }
};

// Elegir tema por variable de entorno o por defecto
const envTheme = process.env.NEXT_PUBLIC_THEME as ThemeId | undefined;
export const CURRENT_THEME: ThemeId = envTheme ?? 'vexDark';

export function getTheme(id: ThemeId): Theme {
  return THEMES[id] ?? THEMES.vexDark;
}
