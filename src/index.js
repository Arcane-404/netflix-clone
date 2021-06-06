import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalThemeProvider, FirebaseContextProvider, QueryContextProvider, EmailContextProvider } from './contexts/providers'
import App from './App'
import './assets/style.scss'

render(
	<StrictMode>
		<FirebaseContextProvider>
			<QueryContextProvider>
				<GlobalThemeProvider>
					<EmailContextProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</EmailContextProvider>
				</GlobalThemeProvider>
			</QueryContextProvider>
		</FirebaseContextProvider>
	</StrictMode>,
	document.getElementById('root')
)
