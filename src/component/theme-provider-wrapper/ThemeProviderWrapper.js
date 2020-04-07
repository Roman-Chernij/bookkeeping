import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  typography: {
    htmlFontSize: 18,
    fontSize: 18
  }
});
console.log('theme', theme)
export const ThemeProviderWrapper = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);
