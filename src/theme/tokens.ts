/**
 * UYOL Design Tokens - Direct Figma Mapping Guide
 * 
 * Bu fayl Figma faylındakı rəngləri, şriftləri və məsafələri birbaşa dəyişmək üçündür.
 * Figma-dan HEX kodlarını və radiusları buraya köçürə bilərsiniz.
 */

export const designTokens = {
  colors: {
    // Əsas brend rəngi (Figma Primary)
    primary: {
      DEFAULT: '#1E3A8A', // Deep Navy / Primary
      hover: '#172554',
      subtle: '#EFF6FF',
    },
    // Vurğu / Fəaliyyət rəngi (Figma Accent)
    accent: {
      DEFAULT: '#2563EB', // Dynamic Transit Blue
      hover: '#1D4ED8',
      light: '#DBEAFE',
    },
    // Neytral tonlar (Figma Neutrals)
    neutral: {
      900: '#0F172A', // Əsas başlıq mətni
      800: '#1E293B',
      700: '#334155', // Paraqraf mətni
      500: '#64748B', // Köməkçi mətn
      300: '#CBD5E1', // Ayrıcı xətlər
      200: '#E2E8F0', // Haşiyə (border)
      100: '#F1F5F9', // Yumşaq kart fonu
      50: '#F8FAFC',  // Səhifə arxa fonu
    },
    // Status rəngləri (Figma Semantic)
    status: {
      success: '#10B981', // Çatdırıldı, Təsdiqləndi
      successLight: '#ECFDF5',
      warning: '#F59E0B', // Gözləmədə, 15 dəq qalıb
      warningLight: '#FFFBEB',
      error: '#EF4444',   // Ləğv edildi, Avto-axtarış
      errorLight: '#FEF2F2',
    },
  },
  typography: {
    fontFamily: {
      sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    lineHeight: {
      tight: 1.15,
      normal: 1.5,
      relaxed: 1.65,
    },
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    subtle: '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
    card: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
    elevated: '0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
  },
} as const;
