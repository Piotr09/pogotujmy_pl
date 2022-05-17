import React from 'react'
import { ThemeProvider as ThemeProviderBase } from 'styled-components'

import theme from './theme'

interface ThemeProviderProps {
  children?: React.ReactNode
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => (
  <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
)

export default ThemeProvider
