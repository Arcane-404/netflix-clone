import { StrictMode } from 'react'
import { render } from 'react-dom'
import GlobalStyle from './themes/GlobalStyle'
import ThemesProvider from './themes/ThemesProvider'
import App from './App'

render(
	<StrictMode>
		<ThemesProvider>
			<GlobalStyle />
			<App />
		</ThemesProvider>
	</StrictMode>,
	document.getElementById('root')
)
