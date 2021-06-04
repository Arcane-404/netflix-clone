import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GlobalThemeProvider from './themes/GlobalThemeProvider'
import { EmailContextProvider } from './custom/EmailContext'
import { FirebaseContextProvider } from './custom/_firebaseContext'
import App from './App'
import './assets/style.scss'

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
