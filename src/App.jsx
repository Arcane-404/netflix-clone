import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage, BrowsePage } from './pages'
import { Card } from './components'

const App = () => {
	return (
		<>
			<Card>
				<Card.Title>
					BLING BLING playa
				</Card.Title>
			</Card>
			<Switch>
				<Route exact path="/"> <HomePage/> </Route>
				<Route path="/login"> <LoginPage/> </Route>
				<Route path="/signup"> <SignupPage/> </Route>
				<Route path="/browse"> <BrowsePage/> </Route>
			</Switch>
		</>
	)
}

export default App
