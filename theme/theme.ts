// theme/theme.ts
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#1a73e8' },     // educational blue
      secondary: { main: '#00bfa5' },   // teal accent
    },
    typography: {
      fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
      h1: { fontWeight: 700, fontSize: '2.4rem', letterSpacing: -0.5 },
      h2: { fontWeight: 700, fontSize: '1.8rem' },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: { styleOverrides: { root: { borderWidth: 2 } } },
      MuiCard: { defaultProps: { elevation: 0 }, styleOverrides: { root: { borderRadius: 16, border: '1px solid', borderColor: 'divider' } } },
      MuiContainer: { defaultProps: { maxWidth: 'lg' } },
    },
  });
