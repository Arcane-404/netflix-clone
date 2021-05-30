import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalThemeProvider from './themes/GlobalThemeProvider'
import App from './App'
import './assets/style.scss'
import { EmailContextProvider } from './custom/EmailContext'

render(
	<StrictMode>
		<BrowserRouter>
			<GlobalThemeProvider>
				<EmailContextProvider>
					<App />
				</EmailContextProvider>
			</GlobalThemeProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
)
