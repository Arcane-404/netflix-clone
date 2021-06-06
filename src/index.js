import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalThemeProvider from './themes/GlobalThemeProvider'
import { FirebaseContext, EmailContext } from './contexts'
import App from './App'
import './assets/style.scss'

const { FirebaseContextProvider } = FirebaseContext
const { EmailContextProvider } = EmailContext

render(
	<StrictMode>
		<FirebaseContextProvider>
			<BrowserRouter>
				<GlobalThemeProvider>
					<EmailContextProvider>
						<App />
					</EmailContextProvider>
				</GlobalThemeProvider>
			</BrowserRouter>
		</FirebaseContextProvider>
	</StrictMode>,
	document.getElementById('root')
)
