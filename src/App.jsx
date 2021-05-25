import React from 'react'
// import { image1 } from '/public/image'
// import image1 from '/public/image/initial-setup.png'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, SignupPage } from './pages/'

const App = () => {
	return (
		<>
			{/* <img src={ image1 } alt="the-test-image" /> */}
			<Switch>
				<Route exact path="/"></Route>
				<Route path="/login"> <LoginPage/> </Route>
				<Route path="/signup"> <SignupPage/> </Route>
				<Route path="/browse"> </Route>
			</Switch>
		</>
	)
}

export default App

