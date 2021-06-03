import React from 'react'
import { Logout } from '../../components/'

const LogoutContainer = () => {
	return (
		<Logout>
			<Logout.Inner>
				<Logout.Title>
					Leaving So Soon?
				</Logout.Title>
				<Logout.Content>
					Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.
				</Logout.Content>
				<Logout.Content>
					You’ll be redirected to the Netflix home page in 30 seconds.
				</Logout.Content>
				<Logout.Button>Go Now</Logout.Button>
			</Logout.Inner>
		</Logout>
	)
}

export default LogoutContainer
