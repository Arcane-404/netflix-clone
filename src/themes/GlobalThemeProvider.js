import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'

const GlobalThemeProvider = ({ children }) => {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyle />
			{ children }
		</ThemeProvider>
	)
}

export default GlobalThemeProvider
