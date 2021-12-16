import React from 'react'
import { ThemeProvider as MuiThemeProvider, ThemeProviderProps } from '@material-ui/core/styles'

import DEFAULT_THEME from './theme'

interface IThemeProviderProps extends Pick<ThemeProviderProps, 'children'> {}

/**
 * Provides Material UI theme configuration for all child elements.
 * By default uses one theme, but can be configured for more.
 */
export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return <MuiThemeProvider theme={DEFAULT_THEME}>{children}</MuiThemeProvider>
}
