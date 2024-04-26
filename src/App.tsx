import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transations } from './pages/Transactions'
import { TransactionProvider } from './context/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transations />
      </TransactionProvider>
    </ThemeProvider>
  )
}
