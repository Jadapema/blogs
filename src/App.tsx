import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from '@src/navigation/Routing';

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, defaultTheme, ColorModeContext } from '@styles/theme';

const App: FC = (): JSX.Element => {
  // saved local storage theme or default light theme
  const defaultMode = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  // theme control state
  const [mode, setMode] = React.useState<'light' | 'dark'>(defaultMode);
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = React.useMemo(() => {
    const config = Object.is(mode, 'light') ? defaultTheme : darkTheme;

    return responsiveFontSizes(createTheme(config));
  }, [mode]);

  // save in local storage theme changes
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routing />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
