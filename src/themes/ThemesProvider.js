import { ThemeProvider } from 'styled-components'
import theme from './theme'

const ThemesProvider = ({ children }) => {
	return (<ThemeProvider theme={ theme }>{ children }</ThemeProvider>)
}

export default ThemesProvider
