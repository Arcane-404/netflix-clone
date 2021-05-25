import { StrictMode } from 'react'
import { render } from 'react-dom'
import GlobalStyle from './themes/GlobalStyle'
import ThemesProvider from './themes/ThemesProvider'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

render(
	<StrictMode>
		<BrowserRouter>
			<ThemesProvider>
				<GlobalStyle />
				<App />
			</ThemesProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
)
