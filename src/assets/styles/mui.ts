import { SxProps, Theme, createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'hsl(var(--color-neutral-900))',
      paper: 'hsl(var(--color-neutral-800))',
    },
    text: {
      primary: 'hsl(var(--color-neutral-0))',
      secondary: 'hsl(var(--color-neutral-300))',
    },
    primary: {
      main: 'hsl(var(--color-orange-500))',
    },
    secondary: {
      main: 'hsl(var(--color-blue-500))',
      dark: 'hsl(var(--color-blue-700))',
    },
  },
  typography: {
    fontFamily: 'DM Sans, ui-sans-serif, system-ui',
    fontSize: 18,
    h1: {
      fontFamily: 'Bricolage Grotesque, ui-sans-serif, system-ui',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Bricolage Grotesque, ui-sans-serif, system-ui',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Bricolage Grotesque, ui-sans-serif, system-ui',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export const whiteOutlinedInput: SxProps<Theme> = {
  /* Border */
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'hsl(var(--color-neutral-0))',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'hsl(var(--color-neutral-0))',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'hsl(var(--color-neutral-0))',
  },

  /* Input text */
  '& .MuiInputBase-input': {
    color: 'hsl(var(--color-neutral-0))',
  },

  /* Icon (arrow / settings icon) */
  '& .MuiSvgIcon-root': {
    color: 'hsl(var(--color-neutral-0))',
  },

  /* Label */
  '& .MuiInputLabel-root': {
    color: 'hsl(var(--color-neutral-0))',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'hsl(var(--color-neutral-0))',
  },
};
