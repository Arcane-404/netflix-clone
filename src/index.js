import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalThemeProvider from './themes/GlobalThemeProvider'
import App from './App'
import './assets/style.scss'

render(
	<StrictMode>
		<BrowserRouter>
			<GlobalThemeProvider>
				<App />
			</GlobalThemeProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
)
