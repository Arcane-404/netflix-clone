import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './themes/GlobalStyle'
import ThemesProvider from './themes/ThemesProvider'
import App from './App'

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
