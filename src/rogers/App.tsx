import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { ThemeProvider } from './transfix-ui/theme'

const Index = () => (
  <Typography>Hello World</Typography>
)

const App = () => (
  <ThemeProvider>
    <Index />
  </ThemeProvider>
)

export default App
