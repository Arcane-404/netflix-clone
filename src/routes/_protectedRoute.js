import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ user, children, ...restProps }) => {

	return (
		<Route { ...restProps } >
			{ children }
		</Route>
	)
}

export default ProtectedRoute
