import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RedirectRoute = ({ user, loggedInPath, children, ...restProps }) => {
	return (
		<Route
			{ ...restProps }
			render={ () => {
				if ( !user ) {
					return children
				}
				if ( user ) {
					return (
						<Redirect
							to={{
								pathname: loggedInPath
							}}
						/>
					)
				}
			} }
		/>
	)
}

export default RedirectRoute
