import { useMemo, ReactNode } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
// import typography from './typography';
// import breakpoints from './breakpoints';
// import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.light,
      typography,
      // breakpoints,
      // shape: { borderRadius: 8 },
      // direction: themeDirection,
      // shadows: isLight ? shadows.light : shadows.dark,
      // customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
