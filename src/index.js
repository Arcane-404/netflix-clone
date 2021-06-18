import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/style.scss'
import {
	GlobalThemeProvider,
	FirebaseContextProvider,
	QueryContextProvider,
	EmailContextProvider
} from './contexts/providers'

render(
	<StrictMode>
		<FirebaseContextProvider>
			<QueryContextProvider>
				<EmailContextProvider>
					<GlobalThemeProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</GlobalThemeProvider>
				</EmailContextProvider>
			</QueryContextProvider>
		</FirebaseContextProvider>
	</StrictMode>,
	document.getElementById('root')
)
