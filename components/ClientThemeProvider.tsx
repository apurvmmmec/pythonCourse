'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from '@/theme/theme';

interface ClientThemeProviderProps {
  children: React.ReactNode;
  mode?: 'light' | 'dark';
}

export default function ClientThemeProvider({ children, mode = 'light' }: ClientThemeProviderProps) {
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
