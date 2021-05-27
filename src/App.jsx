import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, SignupPage, BrowsePage } from './pages'
import { Icon } from './components'

const App = () => {
	return (
		<>
			<Icon.FaChevronRight />
			<Icon.FaInfoCircle />
			<Icon.InfoCircle />
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
